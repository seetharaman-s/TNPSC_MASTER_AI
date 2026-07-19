"use client";

interface Props {

    verified: boolean;

    published: boolean;

}

export default function StatusBadge({

    verified,

    published,

}: Props) {

    return (

        <div className="flex gap-2">

            <span
                className={`px-2 py-1 rounded text-xs font-medium
                ${
                    verified
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                }`}
            >
                {verified ? "Verified" : "Pending"}
            </span>

            <span
                className={`px-2 py-1 rounded text-xs font-medium
                ${
                    published
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-700"
                }`}
            >
                {published ? "Published" : "Draft"}
            </span>

        </div>

    );

}