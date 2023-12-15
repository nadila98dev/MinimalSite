import React, { useEffect, useState } from "react";
import Card from "./Card";
import axiosMinimalist from "../../API/apiMinimalist";

const ShopContainer = () => {
  const [minimalist, setMinimalist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const callApi = async () => {
    try {
      const res = await axiosMinimalist.minimalist();
      setMinimalist(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const filterItemByCategory = (category) => {
    if (category === "all") {
      return minimalist;
    } else {
      return minimalist.filter((item) => item.category === category);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredMinimalist = filterItemByCategory(selectedCategory);

  return (
    <div>
      <div className="flex flex-wrap mb-4 md:mb-6"> {/* Added margin bottom for spacing in md size */}
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          name="option"
          id="optionfilter"
          className="text-lg"
        >
          <option value="all">All</option>
          <option value="skin">Skin</option>
          <option value="hair">Hair</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-1">
        {filteredMinimalist.map((item, index) => (
          <Card key={index} item={item.id} img={item.img} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default ShopContainer;
