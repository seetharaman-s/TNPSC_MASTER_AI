"use client";

import BookCard from "./BookCard";

export default function BookGrid({ books }: { books: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}