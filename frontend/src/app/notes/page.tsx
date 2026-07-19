"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  FileText,
  Eye,
  Download,
  Star,
  BookOpen,
} from "lucide-react";

interface Note {
  id: number;
  title: string;
  subject: string;
  language: string;
  pages: number;
  progress: number;
}

const notes: Note[] = [
  {
    id: 1,
    title: "Indian Constitution Notes",
    subject: "Polity",
    language: "English",
    pages: 82,
    progress: 64,
  },
  {
    id: 2,
    title: "Tamil Grammar Short Notes",
    subject: "Tamil",
    language: "Tamil",
    pages: 56,
    progress: 92,
  },
  {
    id: 3,
    title: "Ancient History Summary",
    subject: "History",
    language: "Tamil",
    pages: 74,
    progress: 38,
  },
  {
    id: 4,
    title: "General Science Quick Revision",
    subject: "Science",
    language: "English",
    pages: 68,
    progress: 15,
  },
];

export default function NotesPage() {
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Study Notes
          </h1>

          <p className="text-slate-500 mt-2">
            Concise TNPSC notes for fast revision and exam preparation.
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        {[
          ["Notes", "860"],
          ["Subjects", "18"],
          ["Completed", "215"],
          ["Bookmarks", "42"],
        ].map(([title, value]) => (

          <div
            key={title}
            className="bg-white rounded-2xl border shadow-sm p-6"
          >

            <p className="text-slate-500">
              {title}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {value}
            </h2>

          </div>

        ))}

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              className="absolute left-3 top-3 text-slate-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="w-full border rounded-lg py-3 pl-10"
            />

          </div>

          <button className="border rounded-lg px-5 flex items-center gap-2">

            <Filter size={18} />

            Filters

          </button>

        </div>

      </div>

      {/* Notes Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {filteredNotes.map((note) => (

          <div
            key={note.id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition"
          >

            <div className="h-40 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center rounded-t-2xl">

              <FileText
                className="text-white"
                size={60}
              />

            </div>

            <div className="p-6">

              <h3 className="font-bold text-lg">
                {note.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                {note.subject}
              </p>

              <div className="mt-5">

                <div className="flex justify-between text-sm">

                  <span>Progress</span>

                  <span>{note.progress}%</span>

                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-200">

                  <div
                    className="h-2 rounded-full bg-green-600"
                    style={{ width: `${note.progress}%` }}
                  />

                </div>

              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">

                <Link
                  href={`/notes/${note.id}`}
                  className="bg-green-600 text-white rounded-lg py-2 text-center"
                >
                  Read
                </Link>

                <button className="border rounded-lg flex items-center justify-center">

                  <Download size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

            {/* Continue Reading & Favourite Notes */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Continue Reading */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Continue Reading
            </h2>

            <Link
              href="/notes/continue"
              className="text-green-600"
            >
              View All
            </Link>

          </div>

          <div className="divide-y">

            {notes.slice(0, 4).map((note) => (

              <div
                key={note.id}
                className="p-5 hover:bg-slate-50"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold">
                      {note.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {note.progress}% Completed
                    </p>

                  </div>

                  <Link
                    href={`/notes/${note.id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                  >
                    Resume
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Favourite Notes */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Favourite Notes
            </h2>

            <Star
              className="text-yellow-500 fill-yellow-500"
              size={22}
            />

          </div>

          <div className="divide-y">

            {notes.slice(0, 4).map((note) => (

              <div
                key={note.id}
                className="flex justify-between items-center p-5 hover:bg-slate-50"
              >

                <div>

                  <h3 className="font-medium">
                    {note.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {note.subject} • {note.pages} Pages
                  </p>

                </div>

                <Star
                  className="text-yellow-500 fill-yellow-500"
                  size={18}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Browse by Subject */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">
            Browse by Subject
          </h2>

        </div>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-5 p-6">

          {[
            "Tamil",
            "History",
            "Polity",
            "Geography",
            "Economy",
            "Science",
            "Environment",
            "Current Affairs",
            "Reasoning",
            "Aptitude",
            "English",
            "Computer",
          ].map((subject) => (

            <button
              key={subject}
              className="rounded-xl border py-5 font-medium hover:bg-green-50 transition"
            >
              {subject}
            </button>

          ))}

        </div>

      </div>

      {/* Recently Added */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-2xl font-bold">
            Recently Added Notes
          </h2>

          <Link
            href="/notes/recent"
            className="text-green-600"
          >
            View All
          </Link>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {notes.map((note) => (

            <div
              key={note.id}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >

              <FileText
                className="text-green-600 mb-4"
                size={32}
              />

              <h3 className="font-semibold">
                {note.title}
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                {note.pages} Pages
              </p>

              <div className="mt-5 flex gap-3">

                <Link
                  href={`/notes/${note.id}`}
                  className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg"
                >
                  Read
                </Link>

                <button className="border rounded-lg px-3">

                  <Download size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Reading History */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">
            Revision History
          </h2>

        </div>

        <div className="divide-y">

          {[
            "Indian Constitution Notes",
            "Tamil Grammar Revision",
            "History Short Notes",
            "Science Quick Revision",
            "Geography One-Liners",
          ].map((item) => (

            <div
              key={item}
              className="flex justify-between items-center p-5 hover:bg-slate-50"
            >

              <span>{item}</span>

              <BookOpen
                size={18}
                className="text-slate-400"
              />

            </div>

          ))}

        </div>

      </div>

            {/* Revision Analytics & Most Downloaded */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Revision Analytics */}

        <div className="xl:col-span-2 bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Revision Analytics
            </h2>

            <Link
              href="/analytics/notes"
              className="text-green-600"
            >
              Full Report
            </Link>

          </div>

          <div className="p-8">

            {/* Replace with Recharts */}

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <FileText
                  className="mx-auto text-green-600 mb-4"
                  size={50}
                />

                <p className="font-semibold">
                  Weekly Revision Chart
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  Display revision statistics using Recharts.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Most Downloaded */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">
              Most Downloaded
            </h2>

          </div>

          <div className="divide-y">

            {notes.map((note) => (

              <div
                key={note.id}
                className="p-5 hover:bg-slate-50"
              >

                <div className="font-semibold">
                  {note.title}
                </div>

                <div className="text-sm text-slate-500 mt-2">
                  ⬇ 8.5K Downloads
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Smart Recommendations */}

      <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            AI Smart Revision Suggestions
          </h2>

          <p className="mt-2 text-green-100">
            Personalized revision recommendations based on your study progress.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              "Revise Indian Polity",
              "Practice Tamil Grammar",
              "Quick Science Revision",
            ].map((item) => (

              <div
                key={item}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >

                <FileText
                  className="mb-4"
                  size={34}
                />

                <h3 className="font-semibold">
                  {item}
                </h3>

                <button className="mt-5 bg-white text-green-700 px-4 py-2 rounded-lg font-medium">
                  Start Revision
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Revision Statistics */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Revision Streak
          </p>

          <h2 className="text-5xl font-bold text-orange-500 mt-4">
            32
          </h2>

          <p className="mt-2 text-slate-500">
            Consecutive Days
          </p>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Notes Completed
          </p>

          <h2 className="text-5xl font-bold text-green-600 mt-4">
            215
          </h2>

          <p className="mt-2 text-slate-500">
            Total Revision Notes
          </p>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Revision Time
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mt-4">
            164h
          </h2>

          <p className="mt-2 text-slate-500">
            Total Study Hours
          </p>

        </div>

      </div>

      {/* Monthly Revision Goal */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="flex justify-between mb-3">

          <h2 className="text-2xl font-bold">
            Monthly Revision Goal
          </h2>

          <span className="font-semibold">
            84%
          </span>

        </div>

        <div className="w-full h-4 bg-slate-200 rounded-full">

          <div
            className="h-4 bg-green-600 rounded-full"
            style={{ width: "84%" }}
          />

        </div>

      </div>

    </div>

  );

}