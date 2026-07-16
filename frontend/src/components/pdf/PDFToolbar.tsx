"use client";

interface Props {
  page: number;
  total: number;
  previous: () => void;
  next: () => void;
}

export default function PDFToolbar({
  page,
  total,
  previous,
  next,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-4 shadow">
      <button
        onClick={previous}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        ◀ Previous
      </button>

      <span>
        Page {page} / {total}
      </span>

      <button
        onClick={next}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Next ▶
      </button>
    </div>
  );
}