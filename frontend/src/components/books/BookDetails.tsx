"use client";

import BookmarkButton from "./BookmarkButton";
import DownloadButton from "./DownloadButton";

type Book = {
  id: number;
  title: string;
  subject: string;
  author: string;
  edition: string;
  medium: string;
  pages: number;
  description: string;
  cover_image: string;
  pdf_url: string;
};

export default function BookDetails({
  book,
}: {
  book: Book;
}) {
  return (
    <div className="grid lg:grid-cols-3 gap-10">

      {/* Cover */}

      <div>

        <img
          src={
            book.cover_image ||
            "/images/book-placeholder.png"
          }
          alt={book.title}
          className="rounded-3xl shadow-xl w-full"
        />

      </div>

      {/* Details */}

      <div className="lg:col-span-2">

        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

          {book.subject}

        </span>

        <h1 className="text-4xl font-bold mt-4">

          {book.title}

        </h1>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <Info title="Author" value={book.author} />
          <Info title="Medium" value={book.medium} />
          <Info title="Edition" value={book.edition} />
          <Info title="Pages" value={String(book.pages)} />

        </div>

        <div className="mt-8">

          <h2 className="font-bold text-xl">

            Description

          </h2>

          <p className="text-gray-600 mt-3 leading-8">

            {book.description}

          </p>

        </div>

        <div className="flex gap-4 mt-10">

          <BookmarkButton
            bookId={book.id}
          />

          <DownloadButton
            url={book.pdf_url}
          />

          <a
            href="#reader"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Read Now
          </a>

        </div>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">

      <p className="text-gray-500">

        {title}

      </p>

      <h3 className="font-bold mt-2">

        {value}

      </h3>

    </div>
  );
}