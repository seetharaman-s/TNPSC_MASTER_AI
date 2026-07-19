"use client";

import React from "react";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;
  categories: string[];

  language?: string;
  onLanguageChange?: (value: string) => void;
  languages?: string[];

  onClear?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
  language = "",
  onLanguageChange,
  languages = [],
  onClear,
}) => {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-lg border p-6">

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* Search */}

        <div className="lg:col-span-2">

          <label className="block mb-2 text-sm font-semibold">
            Search
          </label>

          <input
            type="text"
            placeholder="Search current affairs..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
          />

        </div>

        {/* Category */}

        <div>

          <label className="block mb-2 text-sm font-semibold">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800"
          >

            <option value="">
              All Categories
            </option>

            {categories.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

        {/* Language */}

        <div>

          <label className="block mb-2 text-sm font-semibold">
            Language
          </label>

          <select
            value={language}
            onChange={(e) =>
              onLanguageChange?.(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3 dark:bg-slate-800"
          >

            <option value="">
              All Languages
            </option>

            {languages.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex flex-wrap gap-3">

        <button
          onClick={onClear}
          className="rounded-lg bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 transition"
        >
          Clear Filters
        </button>

      </div>

    </div>
  );
};

export default SearchBar;