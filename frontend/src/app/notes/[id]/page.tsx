"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

import { NoteService } from "@/services/noteService";
import { BookDetails } from "@/components/books";

const PDFViewer = dynamic(
  () => import("@/components/books/PDFViewer"),
  {
    ssr: false,
    loading: () => <p>Loading PDF...</p>,
  }
);

export default function NoteDetailsPage() {
  const params = useParams();

  console.log("Params:", params);
  console.trace("Who opened this page?");

  const id = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [note, setNote] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const noteId = Number(id);

    console.log("ID:", id);
    console.log("Converted ID:", noteId);

    if (isNaN(noteId)) {
      console.error("Invalid Note ID:", id);
      return;
    }

    NoteService.getById(noteId)
      .then((res) => {
        console.log("API Response:", res.data);
        setNote(res.data);
      })
      .catch(console.error);
  }, [id]);

  if (!id || isNaN(Number(id))) {
    return (
      <div className="flex items-center justify-center h-screen">
        Invalid Note ID
      </div>
    );
  }

  if (!note) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading Note...
      </div>
    );
  }

  return (
    <main className="bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        <BookDetails book={note} />
        <PDFViewer
          url={note.pdf_url}
          bookId={note.id}
        />
      </div>
    </main>
  );
}