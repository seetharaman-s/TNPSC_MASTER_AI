"use client";

interface Props {
    title: string;
}

export default function EmptyState({ title }: Props) {
    return (
        <div className="py-16 text-center text-gray-500">
            {title}
        </div>
    );
}