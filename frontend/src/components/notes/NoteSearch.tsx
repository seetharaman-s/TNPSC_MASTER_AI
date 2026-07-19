"use client";

import { Search } from "lucide-react";

export default function NoteSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative mb-6">

      <Search
        className="absolute left-4 top-4 text-gray-400"
      />

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search Notes..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow outline-none"
      />

    </div>
  );
}