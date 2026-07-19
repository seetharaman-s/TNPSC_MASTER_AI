"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  BookOpen,
  Calculator,
  Brain,
  Star,
  Lightbulb,
} from "lucide-react";

const formulas = [
  {
    id: 1,
    title: "Simple Interest",
    subject: "Aptitude",
    formula: "SI = (P × R × T) / 100",
  },
  {
    id: 2,
    title: "Compound Interest",
    subject: "Aptitude",
    formula: "A = P(1 + R/100)^T",
  },
  {
    id: 3,
    title: "Speed",
    subject: "Aptitude",
    formula: "Speed = Distance / Time",
  },
  {
    id: 4,
    title: "Density",
    subject: "Science",
    formula: "Density = Mass / Volume",
  },
];

export default function FormulaBookPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Formula & Shortcut Book
          </h1>

          <p className="mt-2 text-slate-500">
            Quickly access important formulas, shortcuts, and memory tricks for TNPSC preparation.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Formula Book

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Formulas",
            value: "1,280",
            icon: Calculator,
          },
          {
            title: "Shortcuts",
            value: "346",
            icon: Lightbulb,
          },
          {
            title: "Mnemonics",
            value: "214",
            icon: Brain,
          },
          {
            title: "Favorites",
            value: "96",
            icon: Star,
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
                    size={28}
                    className="text-indigo-600"
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Search & Filter */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex flex-wrap gap-4">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-4 top-3 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search formulas or shortcuts..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Formula List */}

      <div className="space-y-5">

        {formulas.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <span className="mt-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                  {item.subject}
                </span>

              </div>

              <button className="rounded-lg border p-2">

                <Star size={20} />

              </button>

            </div>

            <div className="mt-6 rounded-xl bg-slate-100 p-5">

              <code className="text-lg font-semibold">
                {item.formula}
              </code>

            </div>

          </div>

        ))}

      </div>

            {/* Maths Shortcuts */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">
          <h2 className="text-2xl font-bold">
            Maths Shortcuts
          </h2>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2">

          {[
            "Multiply by 5 → Divide by 2, then multiply by 10.",
            "Square numbers ending in 5 using (n × (n+1))25.",
            "Percentage × 10 = Move decimal one place.",
            "Average = Total Sum ÷ Number of Values.",
          ].map((shortcut) => (

            <div
              key={shortcut}
              className="rounded-xl border p-5"
            >

              <div className="flex items-start gap-3">

                <Lightbulb
                  size={24}
                  className="mt-1 text-amber-500"
                />

                <p>{shortcut}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Memory Tricks */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              Memory Tricks & Mnemonics
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Remember planets using simple mnemonics.",
              "Use abbreviation techniques for constitutional articles.",
              "Create visual stories to memorize historical events.",
              "Group related science concepts into memory chains.",
            ].map((tip) => (

              <div
                key={tip}
                className="rounded-xl bg-white/10 p-4"
              >
                {tip}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Favorites & Notes */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-2xl font-bold">
              Favorite Formulas
            </h2>
          </div>

          <div className="space-y-4 p-6">

            {[
              "Simple Interest",
              "Compound Interest",
              "Profit & Loss",
              "Speed, Time & Distance",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center justify-between rounded-xl border p-4"
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

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">
            <h2 className="text-2xl font-bold">
              Personal Notes
            </h2>
          </div>

          <div className="p-6">

            <textarea
              rows={10}
              placeholder="Write your own shortcuts and formula notes..."
              className="w-full rounded-xl border p-4"
            />

            <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Save Notes
            </button>

          </div>

        </div>

      </div>

      {/* AI Shortcut Explanations */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            AI Shortcut Explanations
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "AI explains why each shortcut works step by step.",
            "Generate easier memory techniques for difficult formulas.",
            "Create personalized revision notes from selected formulas.",
            "Recommend frequently tested formulas based on PYQs.",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border bg-slate-50 p-5"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export PDF
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Formula Book
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Summary
        </button>

      </div>

    </div>

  );

}