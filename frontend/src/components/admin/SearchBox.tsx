"use client";

import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
}: SearchBoxProps) {
  return (
    <div className="relative w-full max-w-sm">

      <Search
        className="absolute left-3 top-3 text-gray-400"
        size={18}
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}