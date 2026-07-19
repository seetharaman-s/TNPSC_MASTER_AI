"use client";

import PDFSearch from "./PDFSearch";
import PDFThumbnail from "./PDFThumbnail";

interface Props {
  totalPages: number;
  currentPage: number;
  onSelect: (page: number) => void;
}

export default function PDFSidebar({
  totalPages,
  currentPage,
  onSelect,
}: Props) {
  return (
    <aside className="w-72 bg-white border-r overflow-y-auto">

      <h2 className="font-bold text-xl p-4">
        Pages
      </h2>

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map((page) => (

        <button
          key={page}
          onClick={() => onSelect(page)}
          className={`w-full text-left px-5 py-3 border-b transition
            ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
        >
          Page {page}
        </button>

      ))}

    </aside>
  );
}