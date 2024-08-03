import React, { useState } from "react";
import Filter2 from "./Filter2";

const Filter = ({ filterData }) => {
  const [category, setCategory] = useState(filterData[0]);
  const [subCategory, setSubCategory] = useState(filterData[0].subcategories);

  function filterHandler(subcategories, title) {
    setCategory(title);
    setSubCategory(subcategories);
  }

  if (!filterData) return null;

  return (
    <div className="animate-slide-in space-y-4">
      <div className="relative">
        <div className="flex overflow-x-auto pb-4 scrollbar-hide md:flex-wrap md:overflow-x-visible">
          <div className="flex space-x-2 px-4 md:px-0 md:justify-start md:flex-wrap md:gap-2 w-full">
            {filterData.map((data) => (
              <button
                key={data.id}
                onClick={() => filterHandler(data.subcategories, data)}
                className={`text-sm md:text-base px-4 py-2 rounded-full font-medium text-white transition-all duration-300 ease-in-out flex-shrink-0
                  ${category === data
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg scale-105"
                    : "bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500"
                  }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none md:hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none md:hidden"></div>
      </div>
      <div>
        {subCategory && <Filter2 category={category} setSubCategory={setSubCategory} filterSubData={subCategory} />}
      </div>
    </div>
  );
};

export default Filter;