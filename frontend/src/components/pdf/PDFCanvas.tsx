"use client";

import { Document, Page } from "react-pdf";

interface PDFCanvasProps {
  file: string;
  page: number;
  scale: number;
  onLoadSuccess: ({
    numPages,
  }: {
    numPages: number;
  }) => void;
}

export default function PDFCanvas({
  file,
  page,
  scale,
  onLoadSuccess,
}: PDFCanvasProps) {
  return (
    <div className="flex-1 overflow-auto flex justify-center bg-slate-200 p-6">

      <Document
        file={file}
        loading={
          <div className="text-center py-10">
            Loading PDF...
          </div>
        }
        onLoadSuccess={onLoadSuccess}
      >
        <Page
          pageNumber={page}
          scale={scale}
          renderTextLayer
          renderAnnotationLayer
        />
      </Document>

    </div>
  );
}