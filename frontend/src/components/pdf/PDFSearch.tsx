"use client";

import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
  onSearch: (keyword: string) => void;
}

export default function PDFSearch({
  onSearch,
}: Props) {

  const [keyword, setKeyword] = useState("");

  return (

    <div className="flex gap-2 p-3">

      <input
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
        placeholder="Search PDF..."
        className="flex-1 border rounded-xl px-4 py-2"
      />

      <button
        onClick={() => onSearch(keyword)}
        className="bg-blue-600 text-white rounded-xl px-4"
      >
        <Search size={18} />
      </button>

    </div>

  );

}