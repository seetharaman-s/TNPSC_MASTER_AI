"use client";

import React from "react";

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 pb-2">

        <button
          onClick={() => onCategoryChange("")}
          className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
            selectedCategory === ""
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white dark:bg-slate-800 border hover:bg-blue-50 dark:hover:bg-slate-700"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white dark:bg-slate-800 border hover:bg-blue-50 dark:hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}

      </div>
    </div>
  );
};

export default CategoryTabs;