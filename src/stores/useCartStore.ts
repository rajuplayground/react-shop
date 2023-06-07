import {
  $cart as cart,
  subtotal,
  addItemToCart,
  removeFromCart,
} from "./cart-nano";
import { useStore } from "zustand";
import useCartZustand from "../stores/cart";

const useCartStore = () => {
  const $cart = useCartZustand((state) => state.cart);
  const $subtotal = useCartZustand((state) => state.subtotal);
  const addItemToCart = useCartZustand((state) => state.addItemToCart);
  const removeFromCart = useCartZustand((state) => state.removeFromCart);
  return { $cart, $subtotal, addItemToCart, removeFromCart };
};

export default useCartStore;
