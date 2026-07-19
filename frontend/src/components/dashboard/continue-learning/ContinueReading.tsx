"use client";

import Link from "next/link";

interface Props {
    progress: any;
}

export default function ContinueReading({
    progress,
}: Props) {

    if (!progress) {
        return null;
    }

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-3">
                Continue Reading
            </h2>

            <p className="text-gray-600">
                Book ID : {progress.book_id}
            </p>

            <p className="mt-2">
                Page {progress.current_page}
            </p>

            <p>
                {progress.percentage.toFixed(1)}%
            </p>

            <Link
                href={`/books/${progress.book_id}`}
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
                Continue
            </Link>

        </div>

    );

}