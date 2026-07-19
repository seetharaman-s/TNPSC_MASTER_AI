"use client";

interface FormSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function FormSelect({
  label,
  value,
  options,
  onChange,
}: FormSelectProps) {
  return (
    <div>

      <label className="mb-2 block font-medium">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border p-3"
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

    </div>
  );
}