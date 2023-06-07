import React from "react";
import { useProducts } from "../hooks";
import useCartStore from "../stores/useCartStore";

interface Props {
  count?: number;
  addToCart?: boolean;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "usd",
    style: "currency",
  }).format(amount);
}

const ShopItems = ({ count = Infinity, addToCart = true }: Props) => {
  const { data: products, isLoading } = useProducts();
  const { addItemToCart } = useCartStore();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && <p>Loading...</p>}
        {products &&
          products.slice(0, count).map((p) => (
            <div key={p.id} className="space-y-3">
              <img src={p.image.src} alt={p.image.alt} />
              <h3 className="text-xl font-cursive">{p.title}</h3>
              <p>{p.description}</p>
              <p>{formatCurrency(p.price)}</p>
              {addToCart && (
                <button
                  onClick={() => addItemToCart(p)}
                  className="bg-black text-white font-bold text-lg self-start px-6 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default ShopItems;
