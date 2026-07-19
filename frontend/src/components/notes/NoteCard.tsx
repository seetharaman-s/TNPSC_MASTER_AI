"use client";

import Link from "next/link";

export default function NoteCard({
  note,
}: {
  note: any;
}) {

console.log("Note:", note);

  return (
    
    <div>
      <p className="text-red-500 font-bold">
        ID: {String(note.id)}
      </p>

      <Link
        href={`/notes/${note.id}`}
        className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
      >
      <img
        src={
          note.cover_image ||
          "/images/note-placeholder.png"
        }
        alt={note.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold line-clamp-2">

          {note.title}

        </h3>

        <p className="text-sm text-gray-500 mt-2">

          {note.subject}

        </p>

      </div>

    </Link>
    </div>
  

);

}