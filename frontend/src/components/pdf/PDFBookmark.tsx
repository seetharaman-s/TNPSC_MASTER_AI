"use client";

import { Bookmark } from "lucide-react";

interface Props {
  page: number;
  bookmarked: boolean;
  onToggle: () => void;
}

export default function PDFBookmark({
  page,
  bookmarked,
  onToggle,
}: Props) {

  return (

    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl
      ${
        bookmarked
          ? "bg-yellow-400 text-white"
          : "bg-gray-200"
      }`}
    >

      <Bookmark size={18} />

      {bookmarked
        ? `Bookmarked (Page ${page})`
        : "Bookmark"}

    </button>

  );

}