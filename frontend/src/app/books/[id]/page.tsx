"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  BookDetails,
  PDFViewer,
} from "@/components/books";
import { BookService } from "@/services/bookService";

type Book = {
  id: number;
  title: string;
  subject: string;
  author: string;
  edition: string;
  medium: string;
  pages: number;
  description: string;
  cover_image: string;
  pdf_url: string;
};

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState<Book | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    BookService.getById(Number(id))
      .then((res) => setBook(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Book...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        Book not found.
      </div>
    );
  }

  return (
    <main className="bg-slate-100 min-h-screen">

      <div className="max-w-7xl mx-auto p-6">

        <BookDetails book={book} />

        <PDFViewer
          url={book.pdf_url}
          bookId={book.id}
        />

      </div>

    </main>
  );
}