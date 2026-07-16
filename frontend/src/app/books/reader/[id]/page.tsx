"use client";


import { PDFViewer } from "@/components/pdf";

export default function ReaderPage() {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-4xl font-bold">
        📖 TNPSC PDF Reader
      </h1>

      <PDFViewer
        file="/pdfs/tamil6.pdf"
      />
    </main>
  );
}