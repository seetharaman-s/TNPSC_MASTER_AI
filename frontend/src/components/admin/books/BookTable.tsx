"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

export interface Book {
  id: number;
  title: string;
  subject: string;
  standard: number;
  medium: string;
  cover_image?: string;
  featured?: boolean;
  published?: boolean;
}

interface Props {
  books: Book[];
  onDelete?: (id: number) => void;
}

export default function BookTable({
  books,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Cover</th>

            <th className="p-4 text-left">Title</th>

            <th className="p-4 text-left">Subject</th>

            <th className="p-4 text-left">Std</th>

            <th className="p-4 text-left">Medium</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {books.length === 0 && (

            <tr>

              <td
                colSpan={7}
                className="text-center py-12 text-gray-500"
              >
                No books found
              </td>

            </tr>

          )}

          {books.map((book) => (

            <tr
              key={book.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="p-4">

                <img
                  src={
                    book.cover_image ||
                    "/images/book-placeholder.png"
                  }
                  className="w-16 h-20 rounded-lg object-cover"
                  alt={book.title}
                />

              </td>

              <td className="p-4 font-semibold">
                {book.title}
              </td>

              <td className="p-4">
                {book.subject}
              </td>

              <td className="p-4">
                {book.standard}
              </td>

              <td className="p-4">
                {book.medium}
              </td>

              <td className="p-4">

                {book.published ? (

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                    Published
                  </span>

                ) : (

                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                    Draft
                  </span>

                )}

              </td>

              <td className="p-4">

                <div className="flex justify-center gap-3">

                  <Link
                    href={`/admin/books/view/${book.id}`}
                    className="p-2 rounded-lg bg-sky-100 text-sky-700 hover:bg-sky-200"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    href={`/admin/books/edit/${book.id}`}
                    className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => onDelete?.(book.id)}
                    className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
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