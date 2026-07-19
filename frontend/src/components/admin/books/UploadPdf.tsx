"use client";

import { Upload, FileText } from "lucide-react";
import { useRef } from "react";

interface Props {
  file: File | null;
  onChange: (file: File | null) => void;
}

export default function UploadPdf({
  file,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border-2 border-dashed rounded-2xl p-8 text-center">

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={(e) =>
          onChange(e.target.files?.[0] || null)
        }
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center w-full"
      >
        <Upload size={40} className="text-blue-600" />

        <p className="mt-3 font-semibold">
          Upload PDF
        </p>

        {file && (
          <div className="flex items-center gap-2 mt-4">
            <FileText size={18} />
            {file.name}
          </div>
        )}
      </button>

    </div>
  );
}