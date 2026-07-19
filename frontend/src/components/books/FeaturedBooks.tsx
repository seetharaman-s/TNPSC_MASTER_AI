"use client";

import BookGrid from "./BookGrid";

export default function FeaturedBooks({
  books,
}: {
  books: any[];
}) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-5">
        ⭐ Featured Books
      </h2>

      <BookGrid books={books} />
    </>
  );
}