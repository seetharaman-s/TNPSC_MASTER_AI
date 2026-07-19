"use client";

import { Document, Page } from "react-pdf";

interface Props {
  file: string;
  totalPages: number;
  currentPage: number;
  onSelect: (page: number) => void;
}

export default function PDFThumbnail({
  file,
  totalPages,
  currentPage,
  onSelect,
}: Props) {
  return (
    <div className="space-y-4 p-3 overflow-y-auto">

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map((page) => (

        <button
          key={page}
          onClick={() => onSelect(page)}
          className={`block mx-auto rounded-xl border transition
          ${
            currentPage === page
              ? "border-blue-600 border-2"
              : "border-gray-300"
          }`}
        >
          <Document file={file}>
            <Page
              pageNumber={page}
              width={120}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          <div className="py-2 text-sm font-medium">
            Page {page}
          </div>

        </button>

      ))}

    </div>
  );
}