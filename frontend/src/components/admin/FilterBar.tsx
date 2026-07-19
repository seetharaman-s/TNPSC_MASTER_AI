"use client";

interface FilterBarProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function FilterBar({
  value,
  onChange,
  options,
}: FilterBarProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
}