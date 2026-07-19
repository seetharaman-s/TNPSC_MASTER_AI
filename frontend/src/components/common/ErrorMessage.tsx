"use client";

interface Props {
    message: string;
}

export default function ErrorMessage({ message }: Props) {
    return (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
            {message}
        </div>
    );
}