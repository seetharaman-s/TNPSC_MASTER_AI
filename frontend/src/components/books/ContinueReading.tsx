"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ContinueBook = {
  id: number;
  title: string;
  cover_image?: string;
  lastPage: number;
};

export default function ContinueReading() {
  const [books, setBooks] = useState<ContinueBook[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("continueReading") || "[]"
    );
    setBooks(data);
  }, []);

  if (books.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Continue Reading
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={book.cover_image || "/images/book-placeholder.png"}
              alt={book.title}
              className="h-48 w-full object-cover rounded-xl"
            />

            <h3 className="font-semibold mt-3">
              {book.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Continue from page {book.lastPage}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}