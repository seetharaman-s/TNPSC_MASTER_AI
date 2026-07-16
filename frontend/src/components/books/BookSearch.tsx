"use client";

interface BookSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BookSearch({
  value,
  onChange,
}: BookSearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search TNPSC Books..."
      className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
    />
  );
}