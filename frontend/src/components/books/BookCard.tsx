"use client";

import Link from "next/link";

export default function BookCard({ book }: { book: any }) {
  return (
    <Link
      href={`/books/${book.id}`}
      className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
    >
      <img
        src={book.cover_image || "/images/book-placeholder.png"}
        alt={book.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold line-clamp-2">
          {book.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          {book.subject}
        </p>

      </div>
    </Link>
  );
}