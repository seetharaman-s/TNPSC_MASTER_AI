"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    page,
    totalPages,
    onPageChange,
}: Props) {
    return (
        <div className="flex justify-between items-center mt-6">

            <button
                disabled={page === 1}
                onClick={() => onPageChange(page - 1)}
                className="border rounded-lg px-4 py-2 disabled:opacity-50 flex items-center gap-2"
            >
                <ChevronLeft size={18} />
                Previous
            </button>

            <span className="font-medium">
                Page {page} of {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => onPageChange(page + 1)}
                className="border rounded-lg px-4 py-2 disabled:opacity-50 flex items-center gap-2"
            >
                Next
                <ChevronRight size={18} />
            </button>

        </div>
    );
}