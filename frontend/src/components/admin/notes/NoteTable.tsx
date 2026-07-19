"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  notes: any[];
  onRefresh?: () => void;
}

export default function NoteTable({
  notes,
  onRefresh,
}: Props) {
  async function deleteNote(id: number) {
    if (!confirm("Delete this note?")) return;

    try {
      // await NoteService.delete(id);

      onRefresh?.();

      alert("Note deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete note.");
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>
            <th className="px-5 py-4 text-left">Title</th>
            <th className="px-5 py-4 text-left">Subject</th>
            <th className="px-5 py-4 text-left">Unit</th>
            <th className="px-5 py-4 text-left">Language</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {notes.map((note) => (
            <tr
              key={note.id}
              className="border-t"
            >
              <td className="px-5 py-4">
                {note.title}
              </td>

              <td className="px-5 py-4">
                {note.subject}
              </td>

              <td className="px-5 py-4">
                {note.unit}
              </td>

              <td className="px-5 py-4">
                {note.language}
              </td>

              <td className="px-5 py-4">

                <div className="flex justify-center gap-3">

                  <Link
                    href={`/admin/notes/${note.id}/edit`}
                    className="rounded-lg bg-blue-600 p-2 text-white"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => deleteNote(note.id)}
                    className="rounded-lg bg-red-600 p-2 text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}