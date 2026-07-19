"use client";

import { UploadCloud } from "lucide-react";

interface UploadAreaProps {
  onChange: (file: File | null) => void;
}

export default function UploadArea({
  onChange,
}: UploadAreaProps) {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-10 hover:border-blue-500">

      <UploadCloud
        size={48}
        className="text-blue-600"
      />

      <p className="mt-4 text-lg font-semibold">
        Click to Upload
      </p>

      <p className="text-sm text-gray-500">
        PDF, Images, Excel, CSV
      </p>

      <input
        type="file"
        className="hidden"
        onChange={(e) =>
          onChange(e.target.files?.[0] ?? null)
        }
      />

    </label>
  );
}