"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function BookSearch({ value, onChange }: Props) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-4 top-4 text-gray-400" size={20} />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search TNPSC Books..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}