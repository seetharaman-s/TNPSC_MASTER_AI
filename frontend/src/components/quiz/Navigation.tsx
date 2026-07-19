"use client";

export default function Navigation({
  previous,
  next,
}: {
  previous: () => void;
  next: () => void;
}) {
  return (
    <div className="flex justify-between mt-8">

      <button
        onClick={previous}
        className="px-6 py-3 rounded-xl bg-gray-300"
      >
        Previous
      </button>

      <button
        onClick={next}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white"
      >
        Next
      </button>

    </div>
  );
}