"use client";

interface Props {
  progress: number;
}

export default function UploadProgress({
  progress,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <div className="mb-2 flex justify-between">

        <span>Uploading...</span>

        <span>{progress}%</span>

      </div>

      <div className="h-3 rounded-full bg-gray-200">

        <div
          style={{
            width: `${progress}%`,
          }}
          className="h-3 rounded-full bg-blue-600 transition-all"
        />

      </div>

    </div>
  );
}