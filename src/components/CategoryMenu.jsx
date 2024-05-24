import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData.js";
import { setCategory } from "../redux/slices/CategorySlice.js";
import { useDispatch, useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState(["All"]);

  const getUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories([...categories, ...uniqueCategories]);
  };

  useEffect(() => {
    getUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
