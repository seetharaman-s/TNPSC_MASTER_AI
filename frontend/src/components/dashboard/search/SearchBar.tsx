"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-4 text-gray-400"
        size={20}
      />

      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search books, notes, quizzes..."
        className="w-full rounded-2xl bg-white shadow-lg pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}