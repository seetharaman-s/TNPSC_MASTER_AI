"use client";

interface Props {
    open: boolean;
    title?: string;
    message?: string;
    onCancel: () => void;
    onConfirm: () => void;
}

export default function DeleteDialog({
    open,
    title = "Delete Question",
    message = "Are you sure you want to delete this question? This action cannot be undone.",
    onCancel,
    onConfirm,
}: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

                <p className="text-gray-600 mt-3">
                    {message}
                </p>

                <div className="flex justify-end gap-3 mt-6">

                    <button
                        onClick={onCancel}
                        className="px-4 py-2 border rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}