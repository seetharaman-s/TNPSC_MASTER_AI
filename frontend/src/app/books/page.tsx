"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  BookOpen,
  Eye,
  Download,
  Star,
  Clock,
  Grid3X3,
  List,
} from "lucide-react";

interface Book {
  id: number;
  title: string;
  subject: string;
  language: string;
  pages: number;
  progress: number;
}

const books: Book[] = [
  {
    id: 1,
    title: "Tamil",
    subject: "Language",
    language: "Tamil",
    pages: 320,
    progress: 72,
  },
  {
    id: 2,
    title: "Indian Polity",
    subject: "General Studies",
    language: "English",
    pages: 450,
    progress: 35,
  },
  {
    id: 3,
    title: "History",
    subject: "General Studies",
    language: "Tamil",
    pages: 410,
    progress: 18,
  },
  {
    id: 4,
    title: "Geography",
    subject: "General Studies",
    language: "Tamil",
    pages: 365,
    progress: 91,
  },
];

export default function BooksPage() {

  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">

            Book Library

          </h1>

          <p className="text-slate-500 mt-2">

            Read TNPSC books anytime, anywhere.

          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        {[
          ["Books","245"],
          ["Subjects","18"],
          ["Completed","84"],
          ["Continue Reading","9"],
        ].map(([title,value])=>(

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
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search books..."
              className="w-full border rounded-lg py-3 pl-10"
            />

          </div>

          <button className="border rounded-lg px-5 flex items-center gap-2">

            <Filter size={18}/>

            Filters

          </button>

        </div>

      </div>

      {/* Book Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {filteredBooks.map((book)=>(

          <div
            key={book.id}
            className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-lg transition"
          >

            <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">

              <BookOpen
                className="text-white"
                size={60}
              />

            </div>

            <div className="p-6">

              <h3 className="font-bold text-lg">

                {book.title}

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                {book.subject}

              </p>

              <div className="mt-5">

                <div className="flex justify-between text-sm">

                  <span>Progress</span>

                  <span>{book.progress}%</span>

                </div>

                <div className="mt-2 bg-slate-200 rounded-full h-2">

                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${book.progress}%` }}
                  />

                </div>

              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">

                <Link
                  href={`/books/${book.id}`}
                  className="bg-blue-600 text-white rounded-lg py-2 text-center"
                >

                  Read

                </Link>

                <button className="border rounded-lg">

                  Download

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

            {/* Continue Reading & Favorites */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Continue Reading */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Continue Reading
            </h2>

            <Link
              href="/books/continue"
              className="text-blue-600"
            >
              View All
            </Link>

          </div>

          <div className="divide-y">

            {books.slice(0, 4).map((book) => (

              <div
                key={book.id}
                className="p-5 hover:bg-slate-50"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold">

                      {book.title}

                    </h3>

                    <p className="text-sm text-slate-500 mt-1">

                      {book.progress}% Completed

                    </p>

                  </div>

                  <Link
                    href={`/books/${book.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >

                    Resume

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Favourite Books */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">

              Favourite Books

            </h2>

            <Star className="text-yellow-500 fill-yellow-500" />

          </div>

          <div className="divide-y">

            {books.slice(0, 4).map((book) => (

              <div
                key={book.id}
                className="flex justify-between items-center p-5 hover:bg-slate-50"
              >

                <div>

                  <h3 className="font-medium">

                    {book.title}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {book.subject}

                    {" • "}

                    {book.pages} Pages

                  </p>

                </div>

                <Star
                  className="text-yellow-500 fill-yellow-500"
                  size={20}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Subject Categories */}

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
            "Geography",
            "Polity",
            "Economy",
            "Science",
            "Environment",
            "Current Affairs",
            "Aptitude",
            "Reasoning",
            "English",
            "Computer",
          ].map((subject) => (

            <button
              key={subject}
              className="border rounded-xl py-5 hover:bg-blue-50 transition font-medium"
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

            Recently Added

          </h2>

          <Link
            href="/books/recent"
            className="text-blue-600"
          >

            View All

          </Link>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {books.map((book) => (

            <div
              key={book.id}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >

              <BookOpen
                className="text-blue-600 mb-4"
                size={32}
              />

              <h3 className="font-semibold">

                {book.title}

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                {book.pages} Pages

              </p>

              <div className="mt-5 flex gap-3">

                <Link
                  href={`/books/${book.id}`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg"
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

            Reading History

          </h2>

        </div>

        <div className="divide-y">

          {[
            "Tamil Book - Chapter 6",
            "Indian Polity - Fundamental Rights",
            "History - Sangam Age",
            "Science - Physics Basics",
            "Geography - Indian Rivers",
          ].map((item) => (

            <div
              key={item}
              className="flex justify-between items-center p-5 hover:bg-slate-50"
            >

              <span>{item}</span>

              <Clock
                size={18}
                className="text-slate-400"
              />

            </div>

          ))}

        </div>

      </div>

            {/* Reading Analytics & Popular Books */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Reading Analytics */}

        <div className="xl:col-span-2 bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Reading Analytics
            </h2>

            <Link
              href="/analytics/books"
              className="text-blue-600"
            >
              Full Report
            </Link>

          </div>

          <div className="p-8">

            {/* Replace with Recharts */}

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <BookOpen
                  size={50}
                  className="mx-auto text-blue-600 mb-4"
                />

                <p className="font-semibold">

                  Monthly Reading Chart

                </p>

                <p className="text-sm text-slate-500 mt-2">

                  Reading analytics will be displayed here using Recharts.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Popular Books */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Most Popular

            </h2>

          </div>

          <div className="divide-y">

            {books.map((book) => (

              <div
                key={book.id}
                className="p-5 hover:bg-slate-50"
              >

                <div className="font-semibold">

                  {book.title}

                </div>

                <div className="text-sm text-slate-500 mt-2">

                  ⭐ 4.8 Rating

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">

            AI Recommended Books

          </h2>

          <p className="mt-2 text-blue-100">

            Personalized recommendations based on your reading history.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              "Indian Constitution",
              "Ancient Tamil History",
              "Mental Ability Guide",
            ].map((title) => (

              <div
                key={title}
                className="bg-white/10 rounded-xl p-6 backdrop-blur"
              >

                <BookOpen
                  size={34}
                  className="mb-4"
                />

                <h3 className="font-semibold">

                  {title}

                </h3>

                <button className="mt-5 bg-white text-blue-700 px-4 py-2 rounded-lg font-medium">

                  Read Now

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Reading Goals */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">

            Reading Streak

          </p>

          <h2 className="text-5xl font-bold text-orange-500 mt-4">

            15

          </h2>

          <p className="text-slate-500 mt-2">

            Consecutive Days

          </p>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">

            Books Completed

          </p>

          <h2 className="text-5xl font-bold text-green-600 mt-4">

            84

          </h2>

          <p className="text-slate-500 mt-2">

            Total Completed

          </p>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">

            Pages Read

          </p>

          <h2 className="text-5xl font-bold text-blue-600 mt-4">

            12K

          </h2>

          <p className="text-slate-500 mt-2">

            Total Pages

          </p>

        </div>

      </div>

      {/* Reading Goal Progress */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="flex justify-between mb-3">

          <h2 className="text-2xl font-bold">

            Monthly Reading Goal

          </h2>

          <span className="font-semibold">

            78%

          </span>

        </div>

        <div className="w-full h-4 bg-slate-200 rounded-full">

          <div
            className="h-4 bg-green-600 rounded-full"
            style={{ width: "78%" }}
          />

        </div>

      </div>

    </div>

  );

}