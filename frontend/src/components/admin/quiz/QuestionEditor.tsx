"use client";

interface QuestionEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function QuestionEditor({
  value,
  onChange,
}: QuestionEditorProps) {
  return (
    <div className="space-y-2">

      <label className="font-medium">
        Question
      </label>

      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border p-3"
      />

    </div>
  );
}