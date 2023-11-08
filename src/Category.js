import React from "react";

const Category = ({ categories, filterItems }) => {
  return (
    <div classname="">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="font-semibold text-yellow-700 hover:text-white h-10 text-center hover:bg-yellow-700 my-8 mx-4 border-white text-xl border rounded-lg px-4"
            key={index}
            onClick={()=> filterItems(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
