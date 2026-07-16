"use client";

import { Book } from "@/types/book";
import BookCard from "./BookCard";
import EmptyBooks from "./EmptyBooks";

interface Props {
  books: Book[];
}

export default function BookGrid({ books }: Props) {
  if (books.length === 0) {
    return <EmptyBooks />;
  }

  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}