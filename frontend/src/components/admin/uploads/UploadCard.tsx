"use client";

import { UploadCloud } from "lucide-react";

interface Props {
  onUpload: (file: File) => void;
}

export default function UploadCard({
  onUpload,
}: Props) {

  function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onUpload(file);
  }

  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 hover:border-blue-600">

      <UploadCloud
        size={50}
        className="text-blue-600"
      />

      <h2 className="mt-5 text-xl font-semibold">
        Click to Upload
      </h2>

      <p className="text-gray-500">
        PDF • DOCX • JPG • PNG
      </p>

      <input
        hidden
        type="file"
        onChange={handleFile}
      />

    </label>
  );
}