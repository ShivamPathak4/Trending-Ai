import React, { useState, useEffect } from "react";
import { data } from "../apiData";
import Cards from "./Cards";

const Filter2 = ({ filterSubData, setSubCategory, category }) => {
  const [filteredModels, setFilteredModels] = useState([]);
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  useEffect(() => {
    if (filterSubData && category) {
      setFilteredModels(subFilterHandler("All"));
      setActiveSubCategory("All");
    }
  }, [filterSubData, category]);

  function subFilterHandler(subDataTitle) {
    setActiveSubCategory(subDataTitle);
    if (subDataTitle !== "All" && subDataTitle) {
      let filteredData = data[category.title.replace(/[\/&\s]/g, '')].filter((item) => item[(subDataTitle.charAt(0).toLowerCase() + subDataTitle.slice(1).replace(/[\/&\s]/g, ''))]);
      return filteredData;
    } else {
      return data[category.title.replace(/[\/&\s]/g, '')];
    }
  }

  if (!filterSubData) return null;

  return (
    <div className="animate-slide-in space-y-4">
      <div className="relative">
        <div className="flex overflow-x-auto pb-4 scrollbar-hide md:flex-wrap md:overflow-x-visible">
          <div className="flex space-x-2 px-4 md:px-0 md:justify-start md:flex-wrap md:gap-2 w-full">
            {filterSubData.map((subData) => (
              <button
                key={subData.title}
                onClick={() => setFilteredModels(subFilterHandler(subData.title))}
                className={`text-sm px-4 py-2 rounded-full font-medium text-white transition-all duration-300 ease-in-out flex-shrink-0
                  ${activeSubCategory === subData.title
                    ? "bg-gradient-to-r from-teal-400 to-blue-400 shadow-md scale-105"
                    : "bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400"
                  }`}
              >
                {subData.title}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none md:hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none md:hidden"></div>
      </div>
      <div>
        <Cards models={filteredModels} />
      </div>
    </div>
  );
};

export default Filter2;