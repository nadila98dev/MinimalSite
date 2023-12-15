import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item, img, name, price }) => {
  return (
    <div className="w-full sm:w-full md:w-[300px] lg:w-[300px] grid mb-5 space-y-8">
      <Link to={`/shop/${item}`}>
        <img className="p-8 rounded-t-lg object-cover" src={img} alt={name} />
      </Link>
      <h3 className="text-xl">{name}</h3>
      <p className="text-base">{price}</p>
    </div>
  );
};

export default Card;