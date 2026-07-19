"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PDFViewer from "@/components/pdf/PDFViewer";

interface Book {
  id: number;
  title: string;
  pdf_url: string;
}

export default function ReaderPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function loadBook() {
      const res = await fetch(`http://127.0.0.1:8000/books/${id}`);

      if (!res.ok) return;

      const data = await res.json();
      setBook(data);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="h-screen w-full">
      <PDFViewer
        file={`http://127.0.0.1:8000${book.pdf_url}`}
        title={book.title}
      />
    </div>
  );
}