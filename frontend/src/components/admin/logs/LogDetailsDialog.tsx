"use client";

interface Props {
  open: boolean;
  log?: any;
  onClose: () => void;
}

export default function LogDetailsDialog({
  open,
  log,
  onClose,
}: Props) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-2xl bg-white p-6">

        <h2 className="mb-5 text-2xl font-bold">
          Log Details
        </h2>

        <pre className="overflow-auto rounded-xl bg-gray-100 p-4 text-sm">
          {JSON.stringify(log, null, 2)}
        </pre>

        <button
          onClick={onClose}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Close
        </button>

      </div>

    </div>
  );
}