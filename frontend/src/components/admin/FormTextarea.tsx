"use client";

interface FormTextareaProps {
  label: string;
  value: string;
  rows?: number;
  onChange: (value: string) => void;
}

export default function FormTextarea({
  label,
  value,
  rows = 5,
  onChange,
}: FormTextareaProps) {
  return (
    <div>

      <label className="mb-2 block font-medium">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border p-3"
      />

    </div>
  );
}