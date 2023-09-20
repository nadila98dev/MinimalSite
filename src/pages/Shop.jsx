import React from "react";
import ShopContainer from "../components/Shop/ShopContainer";

const Shop = () => {
  return (
    <div className="w-full h-full bg-primarybg flex flex-col justify-start my-[70px]">
      <div className="m-20">
        <h1 className="text-6xl">
          <ShopContainer />
        </h1>
      </div>
    </div>
  );
};

export default Shop;
