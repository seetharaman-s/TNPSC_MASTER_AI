"use client";

interface Props {
  open: boolean;
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog({
  open,
  title,
  onCancel,
  onConfirm,
}: Props) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-2xl p-8 w-[420px]">

        <h2 className="text-2xl font-bold">
          Delete Book
        </h2>

        <p className="mt-4">
          Delete <b>{title}</b> ?
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onCancel}
            className="px-5 py-3 rounded-xl bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-3 rounded-xl bg-red-600 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

}