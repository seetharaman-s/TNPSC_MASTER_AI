"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search books, notes, questions..."
        className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 shadow-sm outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900"
      />
    </div>
  );
}