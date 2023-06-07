import React from "react";
import { MainHero, ShopItems } from "../components";

const Home = () => {
  return (
    <main>
      <MainHero />
      <div className="max-w-4xl p-5 mx-auto flex flex-col items-center gap-10">
        <ShopItems count={3} addToCart={false} />
        <p>
          <a href="/shop" className="underline text-lg">
            Shop All Sandwich Kits &rarr;
          </a>
        </p>
      </div>
    </main>
  );
};

export default Home;
