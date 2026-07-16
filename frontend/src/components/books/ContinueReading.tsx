import Link from "next/link";

export default function ContinueReading() {
  return (
    <section className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
      <h2 className="text-2xl font-bold">
        Continue Reading
      </h2>

      <p className="mt-2 opacity-90">
        Resume your last opened TNPSC book.
      </p>

      <Link
        href="/books/reader/1"
        className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700"
      >
        📖 Continue
      </Link>
    </section>
  );
}