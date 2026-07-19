"use client";

interface OptionEditorProps {
  options: string[];
  onChange: (options: string[]) => void;
}

export default function OptionEditor({
  options,
  onChange,
}: OptionEditorProps) {

  function update(index: number, value: string) {
    const updated = [...options];
    updated[index] = value;
    onChange(updated);
  }

  return (
    <div className="space-y-3">

      <label className="font-medium">
        Options
      </label>

      {options.map((option, index) => (
        <input
          key={index}
          value={option}
          onChange={(e) => update(index, e.target.value)}
          className="w-full rounded-xl border p-3"
          placeholder={`Option ${index + 1}`}
        />
      ))}

    </div>
  );
}