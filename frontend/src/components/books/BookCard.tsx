"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="relative h-60 w-full overflow-hidden rounded-t-3xl">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold">{book.title}</h3>

          <p className="mt-1 text-sm text-slate-500">
            {book.subject}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-700">
              Std {book.standard}
            </span>

            <span className="text-sm text-slate-500">
              {book.medium}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}