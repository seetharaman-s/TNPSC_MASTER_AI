"use client";

import { ImagePlus } from "lucide-react";
import { useRef } from "react";

interface Props {
  file: File | null;
  preview?: string;
  onChange: (file: File | null) => void;
}

export default function UploadCover({
  file,
  preview,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const image =
    file
      ? URL.createObjectURL(file)
      : preview;

  return (
    <div className="border-2 border-dashed rounded-2xl p-8 text-center">

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) =>
          onChange(e.target.files?.[0] || null)
        }
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
      >

        {image ? (

          <img
            src={image}
            className="w-48 h-64 object-cover rounded-xl mx-auto"
            alt="Cover Preview"
          />

        ) : (

          <>
            <ImagePlus
              size={42}
              className="mx-auto text-blue-600"
            />

            <p className="mt-4">
              Upload Cover
            </p>
          </>

        )}

      </button>

    </div>
  );
}