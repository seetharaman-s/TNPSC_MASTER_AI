"use client";

import { useState } from "react";
import {
  Search,
  BookOpen,
  Languages,
  Star,
  Volume2,
  Brain,
  Download,
  Filter,
} from "lucide-react";

const glossary = [
  {
    id: 1,
    english: "Constitution",
    tamil: "அரசியலமைப்பு",
    subject: "Polity",
    meaning:
      "The supreme law of a country that defines the structure and powers of government.",
  },
  {
    id: 2,
    english: "Inflation",
    tamil: "பணவீக்கம்",
    subject: "Economy",
    meaning:
      "A sustained increase in the general price level of goods and services.",
  },
  {
    id: 3,
    english: "Photosynthesis",
    tamil: "ஒளிச்சேர்க்கை",
    subject: "Science",
    meaning:
      "The process by which green plants prepare food using sunlight.",
  },
  {
    id: 4,
    english: "Delta",
    tamil: "டெல்டா",
    subject: "Geography",
    meaning:
      "Landform formed at the mouth of a river by deposited sediments.",
  },
];

export default function DictionaryPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Dictionary & Glossary
          </h1>

          <p className="mt-2 text-slate-500">
            Search TNPSC terms with English and Tamil meanings, explanations, and notes.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Glossary

        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Total Terms",
            value: "8,420",
            icon: BookOpen,
          },
          {
            title: "Favorites",
            value: "142",
            icon: Star,
          },
          {
            title: "Subjects",
            value: "12",
            icon: Languages,
          },
          {
            title: "AI Explained",
            value: "2,316",
            icon: Brain,
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

      {/* Search */}

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
              placeholder="Search English or Tamil terms..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Dictionary Entries */}

      <div className="space-y-5">

        {glossary.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >

            <div className="flex items-start justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {item.english}
                </h2>

                <p className="mt-2 text-lg text-indigo-600">
                  {item.tamil}
                </p>

                <span className="mt-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                  {item.subject}
                </span>

              </div>

              <div className="flex gap-3">

                <button className="rounded-lg border p-2">
                  <Volume2 size={20} />
                </button>

                <button className="rounded-lg border p-2">
                  <Star size={20} />
                </button>

              </div>

            </div>

            <p className="mt-5 text-slate-600">
              {item.meaning}
            </p>

          </div>

        ))}

      </div>

            {/* Subject Categories */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Glossary
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["Tamil", 620],
            ["History", 845],
            ["Polity", 732],
            ["Science", 1264],
            ["Geography", 694],
            ["Economy", 538],
            ["Current Affairs", 487],
            ["Aptitude", 356],
          ].map(([subject, total]) => (

            <button
              key={subject}
              className="rounded-xl border p-5 text-left transition hover:bg-indigo-50"
            >

              <BookOpen
                size={30}
                className="mb-3 text-indigo-600"
              />

              <h3 className="font-semibold">
                {subject}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {total} Terms
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* AI Explanation */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Explanation
            </h2>

          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">

            <h3 className="text-xl font-semibold">
              Constitution (அரசியலமைப்பு)
            </h3>

            <p className="mt-4 leading-8 text-indigo-100">
              The Constitution is the highest law of a country. It defines
              the powers of the government, protects citizens' rights,
              establishes institutions, and provides the legal framework
              for governance. AI can generate simplified explanations,
              important TNPSC points, and related questions.
            </p>

          </div>

        </div>

      </div>

      {/* Favorite Terms & Personal Notes */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Favorite Terms
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Constitution",
              "Fundamental Rights",
              "Inflation",
              "Photosynthesis",
              "Latitude",
            ].map((term) => (

              <div
                key={term}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{term}</span>

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
              placeholder="Write your own explanation or mnemonic..."
              className="w-full rounded-xl border p-4"
            />

            <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Save Notes
            </button>

          </div>

        </div>

      </div>

      {/* Pronunciation */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Pronunciation
          </h2>

        </div>

        <div className="flex h-48 items-center justify-center">

          <div className="text-center">

            <Volume2
              size={60}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Audio Pronunciation
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate browser Speech Synthesis or recorded pronunciation here.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Notes
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Glossary
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Explore More Terms
        </button>

      </div>

    </div>

  );

}