import { BOOKS } from "@/constants/books";
import BookGrid from "./BookGrid";

export default function FeaturedBooks() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        ⭐ Featured Books
      </h2>

      <BookGrid books={BOOKS.slice(0, 4)} />
    </section>
  );
}