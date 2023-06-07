import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  cart: Record<number, CartItem>;
};

type Actions = {
  subtotal: () => number;
  addItemToCart: (item: ShopItem) => void;
  removeFromCart: (itemId: number) => void;
};

export default create(
  immer<State & Actions>((set, get) => ({
    cart: {},
    subtotal: () => {
      return Object.values(get().cart).reduce((acc, item) => {
        if (!item) {
          return acc;
        }
        const itemTotal = item.item.price * item.quantity;
        return acc + itemTotal;
      }, 0);
    },
    addItemToCart: (item) =>
      set((state) => {
        const cartItem = state.cart[item.id];
        const quantity = cartItem ? cartItem.quantity : 0;
        state.cart[item.id] = { item, quantity: quantity + 1 };
      }),
    removeFromCart: (itemId) =>
      set((state) => {
        delete state.cart[itemId];
      }),
  }))
);
