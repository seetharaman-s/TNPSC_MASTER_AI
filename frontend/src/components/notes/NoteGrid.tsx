"use client";

import NoteCard from "./NoteCard";

export default function NoteGrid({
  notes,
}: {
  notes: any[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {notes.map((note) => (

        <NoteCard
          key={note.id}
          note={note}
        />

      ))}

    </div>
  );
}