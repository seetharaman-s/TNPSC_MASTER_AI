"use client";

interface FormInputProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  onChange: (value: string) => void;
}

export default function FormInput({
  label,
  value,
  placeholder,
  type = "text",
  onChange,
}: FormInputProps) {
  return (
    <div>

      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border p-3"
      />

    </div>
  );
}