"use client";

import { Bookmark } from "lucide-react";
import { useState } from "react";

export default function BookmarkQuestion() {

  const [saved, setSaved] = useState(false);

  return (

    <button
      onClick={() => setSaved(!saved)}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
        saved
          ? "bg-yellow-500 text-white"
          : "bg-gray-200"
      }`}
    >
      <Bookmark
        fill={saved ? "currentColor" : "none"}
      />

      {saved ? "Bookmarked" : "Bookmark"}

    </button>

  );

}