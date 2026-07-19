"use client";

import { useState } from "react";
import {
  BookOpen,
  Search,
  Bookmark,
  Highlighter,
  StickyNote,
  Moon,
  Sun,
  Palette,
  ChevronLeft,
  ChevronRight,
  Bot,
  List,
  Maximize2,
} from "lucide-react";

const chapters = [
  "1. இந்திய வரலாறு",
  "2. இந்திய அரசியல்",
  "3. புவியியல்",
  "4. பொருளாதாரம்",
  "5. அறிவியல்",
  "6. நடப்பு நிகழ்வுகள்",
];

export default function ReaderPage() {
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState("light");

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Digital Book Reader
          </h1>

          <p className="mt-2 text-slate-500">
            Read TNPSC books, highlight important content, add notes, and ask AI to explain difficult topics.
          </p>

        </div>

        <div className="flex gap-3">

          <button className="rounded-xl border p-3">
            <Search size={20} />
          </button>

          <button className="rounded-xl border p-3">
            <Bookmark size={20} />
          </button>

          <button className="rounded-xl border p-3">
            <Maximize2 size={20} />
          </button>

        </div>

      </div>

      {/* Layout */}

      <div className="grid gap-6 xl:grid-cols-4">

        {/* Sidebar */}

        <aside className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-5 flex items-center gap-2">

            <List
              className="text-indigo-600"
              size={20}
            />

            <h2 className="font-bold">
              Chapters
            </h2>

          </div>

          <div className="space-y-2 p-4">

            {chapters.map((chapter) => (

              <button
                key={chapter}
                className="w-full rounded-lg p-3 text-left transition hover:bg-indigo-50"
              >
                {chapter}
              </button>

            ))}

          </div>

        </aside>

        {/* Reader */}

        <section className="xl:col-span-3 rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-5 flex flex-wrap items-center justify-between gap-3">

            <div className="flex items-center gap-4">

              <BookOpen className="text-indigo-600" />

              <span className="font-semibold">
                TNPSC History Book
              </span>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => setTheme("light")}
                className="rounded-lg border p-2"
              >
                <Sun size={18} />
              </button>

              <button
                onClick={() => setTheme("sepia")}
                className="rounded-lg border p-2"
              >
                <Palette size={18} />
              </button>

              <button
                onClick={() => setTheme("dark")}
                className="rounded-lg border p-2"
              >
                <Moon size={18} />
              </button>

            </div>

          </div>

          {/* Reading Area */}

          <div
            className={`min-h-[600px] p-10 ${
              theme === "dark"
                ? "bg-slate-900 text-white"
                : theme === "sepia"
                ? "bg-amber-50"
                : "bg-white"
            }`}
          >

            <h2 className="mb-6 text-3xl font-bold">
              இந்திய வரலாறு
            </h2>

            <p className="leading-9">
              இங்கு TNPSC புத்தகத்தின் PDF உள்ளடக்கம் காண்பிக்கப்படும்.
              PDF.js அல்லது React PDF மூலம் முழு புத்தகத்தை
              படிக்கலாம். Highlight, Notes, Search, Bookmark,
              மற்றும் AI Explanation ஆகிய வசதிகள் இதில்
              இணைக்கப்படலாம்.
            </p>

          </div>

          {/* Footer */}

          <div className="border-t p-5">

            <div className="flex items-center justify-between">

              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border px-5 py-2"
              >
                <ChevronLeft />
              </button>

              <span className="font-semibold">
                Page {page}
              </span>

              <button
                onClick={() => setPage((p) => p + 1)}
                className="rounded-lg border px-5 py-2"
              >
                <ChevronRight />
              </button>

            </div>

          </div>

        </section>

      </div>

            {/* AI Assistant + Reading Tools */}

      <div className="grid gap-6 xl:grid-cols-2">

        {/* AI Explain */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Bot
              className="text-indigo-600"
              size={24}
            />

            <h2 className="text-2xl font-bold">
              AI Explain This Page
            </h2>

          </div>

          <div className="space-y-5 p-6">

            <textarea
              rows={6}
              placeholder="Select text from the book or ask a question..."
              className="w-full rounded-xl border p-4"
            />

            <div className="flex flex-wrap gap-3">

              <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white">
                Explain
              </button>

              <button className="rounded-xl border px-5 py-3">
                Explain in Tamil
              </button>

              <button className="rounded-xl border px-5 py-3">
                Summarize
              </button>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <h3 className="font-semibold">
                AI Response
              </h3>

              <p className="mt-3 text-slate-600">
                After connecting your FastAPI + RAG backend, this section
                will explain the selected content, provide examples,
                generate revision notes, and answer follow-up questions
                using your TNPSC books.
              </p>

            </div>

          </div>

        </div>

        {/* Bookmarks */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Bookmark
              className="text-indigo-600"
              size={22}
            />

            <h2 className="text-2xl font-bold">
              Bookmarks
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Page 18 - Sangam Age",
              "Page 42 - Chola Empire",
              "Page 97 - Fundamental Rights",
              "Page 135 - Geography Maps",
            ].map((bookmark) => (

              <button
                key={bookmark}
                className="flex w-full items-center justify-between rounded-xl border p-4 text-left transition hover:bg-indigo-50"
              >

                <span>{bookmark}</span>

                <ChevronRight size={18} />

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* Notes & Highlights */}

      <div className="grid gap-6 xl:grid-cols-2">

        {/* Notes */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <StickyNote
              className="text-indigo-600"
              size={22}
            />

            <h2 className="text-2xl font-bold">
              Personal Notes
            </h2>

          </div>

          <div className="space-y-4 p-6">

            <textarea
              rows={8}
              placeholder="Write your notes here..."
              className="w-full rounded-xl border p-4"
            />

            <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white">
              Save Notes
            </button>

          </div>

        </div>

        {/* Highlights */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Highlighter
              className="text-yellow-500"
              size={22}
            />

            <h2 className="text-2xl font-bold">
              Highlights
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Important Dates",
              "Fundamental Duties",
              "Five Year Plans",
              "Freedom Fighters",
              "Important Articles",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-4"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Reading Statistics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Reading Progress
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Books Read", "18"],
            ["Pages Read", "5,482"],
            ["Bookmarks", "126"],
            ["Notes", "341"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-3 text-3xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Recently Opened Books */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Recently Opened Books
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Indian History",
            "Indian Polity",
            "Science",
            "Current Affairs",
          ].map((book) => (

            <div
              key={book}
              className="rounded-xl border p-5 text-center transition hover:bg-indigo-50"
            >

              <BookOpen
                size={34}
                className="mx-auto mb-3 text-indigo-600"
              />

              <p className="font-medium">
                {book}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* PDF Integration */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 p-8 text-white">

        <h2 className="text-3xl font-bold">
          PDF Reader Integration
        </h2>

        <p className="mt-4 text-indigo-100">
          Integrate <strong>React PDF</strong> or <strong>PDF.js</strong> to
          render TNPSC books with searchable text, bookmarks, highlights,
          annotations, and AI-assisted explanations.
        </p>

      </div>

    </div>

  );

}