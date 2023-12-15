import React from "react";

const HeroComponent = () => {
  return (
    <div className="h-full w-full grid md:grid-cols-2 m-auto items-center">
      <div className="flex flex-col text-justify">
        <h1 className="my-4 text-6xl font-normal text-start font-mallory">
          <span>Healthy skin is </span>
          <span>a reflection of</span>
          <span> overall wellness</span>
        </h1>
        <p>
          A high concentration vitamin C serum formulated for all skin types it
          boosts skins glow and makes it look healthy overall
        </p>
        <div className="flex justify-start">
          <button
            type="button"
            className="mt-10 bg-black hover:bg-gray-800 text-white font-bold py-4 px-5"
          >
            EXPLORE PRODUCTS
          </button>
        </div>
      </div>
      <img src="/assets/bg-hero.png" className="object-cover" />
    </div>
  );
};

export default HeroComponent;
