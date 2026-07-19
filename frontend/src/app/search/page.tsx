"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  FileText,
  Newspaper,
  Brain,
  Bookmark,
  ClipboardList,
  Filter,
  Clock3,
  X,
} from "lucide-react";

const data = [
  {
    id: 1,
    title: "Indian Constitution",
    type: "Book",
    path: "/books/constitution",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Current Affairs - July",
    type: "Current Affairs",
    path: "/current-affairs",
    icon: Newspaper,
  },
  {
    id: 3,
    title: "Fundamental Rights Notes",
    type: "Notes",
    path: "/notes",
    icon: FileText,
  },
  {
    id: 4,
    title: "History Mock Test",
    type: "Mock Test",
    path: "/mock-tests",
    icon: ClipboardList,
  },
  {
    id: 5,
    title: "AI Conversation - GST",
    type: "AI",
    path: "/ai-assistant",
    icon: Brain,
  },
  {
    id: 6,
    title: "Important Geography Bookmark",
    type: "Bookmark",
    path: "/reader",
    icon: Bookmark,
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const recentSearches = [
    "Indian Economy",
    "Sangam Literature",
    "Current Affairs",
    "Geography Maps",
  ];

  const filters = [
    "All",
    "Books",
    "Notes",
    "Current Affairs",
    "Mock Test",
    "AI",
    "Bookmark",
  ];

  const results = useMemo(() => {
    return data.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        item.type.toLowerCase() === filter.toLowerCase();

      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Universal Search
        </h1>

        <p className="mt-2 text-slate-500">
          Search instantly across books, notes, PDFs, AI chats, current affairs, and more.
        </p>

      </div>

      {/* Search Box */}

      <div className="relative">

        <Search
          className="absolute left-4 top-4 text-slate-400"
          size={22}
        />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..."
          className="w-full rounded-2xl border py-4 pl-12 pr-12 text-lg"
        />

        {query && (

          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-4"
          >

            <X size={20} />

          </button>

        )}

      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-3">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-5 py-2 border transition ${
              filter === item
                ? "bg-indigo-600 text-white"
                : "bg-white"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

      {/* Recent Searches */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Clock3
            className="text-indigo-600"
            size={22}
          />

          <h2 className="text-2xl font-bold">
            Recent Searches
          </h2>

        </div>

        <div className="flex flex-wrap gap-3 p-6">

          {recentSearches.map((item) => (

            <button
              key={item}
              onClick={() => setQuery(item)}
              className="rounded-full border px-4 py-2 hover:bg-indigo-50"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Results */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Filter
            className="text-indigo-600"
            size={22}
          />

          <h2 className="text-2xl font-bold">
            Search Results ({results.length})
          </h2>

        </div>

        <div className="divide-y">

          {results.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                href={item.path}
                key={item.id}
                className="flex items-center justify-between p-6 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-indigo-100 p-3">

                    <Icon
                      size={22}
                      className="text-indigo-600"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.type}
                    </p>

                  </div>

                </div>

                <span className="text-sm text-indigo-600">
                  Open →
                </span>

              </Link>

            );

          })}

          {results.length === 0 && (

            <div className="p-10 text-center text-slate-500">
              No matching results found.
            </div>

          )}

        </div>

      </div>

    </div>
  );
}