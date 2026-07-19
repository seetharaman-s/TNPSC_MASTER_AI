"use client";

interface DeleteQuizDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteQuizDialog({
  open,
  onClose,
  onConfirm,
}: DeleteQuizDialogProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-2xl bg-white p-6">

        <h2 className="text-2xl font-bold">
          Delete Quiz
        </h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to delete this quiz?
        </p>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}