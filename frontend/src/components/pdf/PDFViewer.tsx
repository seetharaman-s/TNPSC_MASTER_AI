"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [bookmarkedPages, setBookmarkedPages] = useState<number[]>([]);
  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }) {
    setNumPages(numPages);
  }
  
  function toggleBookmark() {
  setBookmarkedPages((prev) =>
    prev.includes(pageNumber)
      ? prev.filter((p) => p !== pageNumber)
      : [...prev, pageNumber]
  );
  }

  

  return (
    <div className="bg-white rounded-xl shadow p-4">

      <div className="flex gap-2 mb-4 flex-wrap">

        <button
          onClick={() =>
            setPageNumber((p) => Math.max(1, p - 1))
          }
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Previous
        </button>

        <button
          onClick={() =>
            setPageNumber((p) => Math.min(numPages, p + 1))
          }
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next
        </button>

        <button
          onClick={() => setScale((s) => s + 0.2)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          -
        </button>

        <span className="ml-auto font-semibold">
          Page {pageNumber} / {numPages}
        </span>

      </div>

      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF..."
      >
        <Page
          pageNumber={pageNumber}
          scale={scale}
        />
      </Document>

    </div>
  );
}