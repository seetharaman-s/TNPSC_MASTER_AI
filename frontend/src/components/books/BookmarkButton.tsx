"use client";

import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  bookId: number;
};

export default function BookmarkButton({
  bookId,
}: Props) {

  const [saved, setSaved] = useState(false);

  useEffect(() => {

    const bookmarks: number[] = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    setSaved(bookmarks.includes(bookId));

  }, [bookId]);

  function toggleBookmark() {

    let bookmarks: number[] = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    if (bookmarks.includes(bookId)) {

      bookmarks = bookmarks.filter(
        (id) => id !== bookId
      );

      setSaved(false);

    } else {

      bookmarks.push(bookId);

      setSaved(true);

    }

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

  }

  return (

    <button
      onClick={toggleBookmark}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
        saved
          ? "bg-yellow-500 text-white"
          : "bg-gray-200"
      }`}
    >

      <Bookmark
        fill={saved ? "currentColor" : "none"}
      />

      {saved
        ? "Bookmarked"
        : "Bookmark"}

    </button>

  );

}