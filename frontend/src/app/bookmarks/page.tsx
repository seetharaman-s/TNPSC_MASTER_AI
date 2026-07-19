"use client";

export default function BookmarksPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        🔖 Bookmarks
      </h1>

      <div className="rounded-xl bg-white shadow-lg p-6">
        <h2 className="text-2xl font-semibold">
          Bookmarked Items
        </h2>

        <p className="mt-3 text-gray-600">
          Your bookmarked books, notes, quizzes and current affairs will appear here.
        </p>
      </div>
    </main>
  );
}