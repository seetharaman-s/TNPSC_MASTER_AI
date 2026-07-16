"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h2>

      <p className="text-slate-500">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Try Again
      </button>
    </div>
  );
}