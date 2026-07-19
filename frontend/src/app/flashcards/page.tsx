"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  RotateCcw,
  Search,
  Star,
  Brain,
  Plus,
  Target,
  CalendarDays,
  BarChart3,
} from "lucide-react";

const flashcards = [
  {
    id: 1,
    subject: "History",
    question: "Who founded the Chola Dynasty?",
    answer: "Vijayalaya Chola",
    difficulty: "Easy",
  },
  {
    id: 2,
    subject: "Polity",
    question: "How many Fundamental Rights are there?",
    answer: "Six Fundamental Rights",
    difficulty: "Medium",
  },
  {
    id: 3,
    subject: "Science",
    question: "What is the SI unit of Force?",
    answer: "Newton",
    difficulty: "Easy",
  },
  {
    id: 4,
    subject: "Economy",
    question: "What is GDP?",
    answer: "Gross Domestic Product",
    difficulty: "Medium",
  },
];

export default function FlashcardsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);

  const filteredCards = useMemo(() => {
    return flashcards.filter((card) =>
      card.question.toLowerCase().includes(query.toLowerCase()) ||
      card.subject.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const current =
    selected !== null
      ? filteredCards.find((card) => card.id === selected)
      : filteredCards[0];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Flashcards
          </h1>

          <p className="mt-2 text-slate-500">
            Revise important TNPSC concepts quickly using interactive flashcards.
          </p>

        </div>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white flex items-center gap-2">

          <Plus size={18} />

          New Flashcard

        </button>

      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Total Cards",
            value: "1,248",
            icon: BookOpen,
          },
          {
            title: "Today's Review",
            value: "86",
            icon: CalendarDays,
          },
          {
            title: "Mastered",
            value: "812",
            icon: Target,
          },
          {
            title: "Learning",
            value: "436",
            icon: BarChart3,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div className="rounded-xl bg-indigo-100 p-4">

                  <Icon
                    className="text-indigo-600"
                    size={26}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          className="absolute left-4 top-4 text-slate-400"
          size={20}
        />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search flashcards..."
          className="w-full rounded-xl border py-4 pl-12 pr-4"
        />

      </div>

      {/* Flashcard */}

      <div className="mx-auto max-w-3xl">

        <div
          onClick={() => setFlipped(!flipped)}
          className="cursor-pointer rounded-3xl border bg-white p-10 shadow-sm transition hover:shadow-lg"
        >

          <div className="mb-5 flex items-center justify-between">

            <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">

              {current?.subject}

            </span>

            <Star className="text-slate-400" />

          </div>

          <div className="min-h-[220px] flex items-center justify-center">

            <h2 className="text-center text-3xl font-bold">

              {flipped
                ? current?.answer
                : current?.question}

            </h2>

          </div>

          <div className="mt-6 flex items-center justify-between">

            <span className="text-slate-500">

              Difficulty: {current?.difficulty}

            </span>

            <button
              className="rounded-lg border px-5 py-2 flex items-center gap-2"
            >

              <RotateCcw size={18} />

              Flip

            </button>

          </div>

        </div>

      </div>

            {/* Subject Decks */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject Decks
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["History", 248],
            ["Polity", 312],
            ["Geography", 186],
            ["Science", 284],
            ["Economy", 156],
            ["Tamil", 198],
            ["Current Affairs", 267],
            ["Aptitude", 143],
          ].map(([subject, cards]) => (

            <button
              key={subject}
              className="rounded-xl border p-5 text-left transition hover:bg-indigo-50"
            >

              <BookOpen
                size={28}
                className="mb-3 text-indigo-600"
              />

              <h3 className="font-semibold">
                {subject}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {cards} Cards
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* AI Flashcards */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Flashcard Generator
            </h2>

          </div>

          <p className="mt-4 text-indigo-100">
            Generate flashcards automatically from TNPSC books,
            notes, PDFs, and current affairs.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
              Generate from Chapter
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Generate from PDF
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Generate from Notes
            </button>

          </div>

        </div>

      </div>

      {/* Daily Revision */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Today's Revision Queue
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Indian Constitution",
              "Freedom Fighters",
              "Important Articles",
              "Physics Formulae",
              "Economics Basics",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{item}</span>

                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
                  Study
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Learning Progress */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Learning Progress
            </h2>

          </div>

          <div className="space-y-6 p-6">

            {[
              ["Mastered", 812, "65%"],
              ["Learning", 301, "24%"],
              ["New", 135, "11%"],
            ].map(([label, value, progress]) => (

              <div key={label}>

                <div className="mb-2 flex justify-between">

                  <span>{label}</span>

                  <span>{value}</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-indigo-600"
                    style={{
                      width: progress,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Favorites */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Favorite Flashcards
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Important Constitutional Articles",
            "Sangam Literature Timeline",
            "River Systems of India",
            "Scientific Names",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center justify-between rounded-xl border p-5"
            >

              <span>{item}</span>

              <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Spaced Repetition */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Spaced Repetition Status
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Due Today", "86"],
            ["Tomorrow", "94"],
            ["This Week", "328"],
            ["Retention", "91%"],
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

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Import Cards
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export Cards
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start Revision
        </button>

      </div>

    </div>

  );

}