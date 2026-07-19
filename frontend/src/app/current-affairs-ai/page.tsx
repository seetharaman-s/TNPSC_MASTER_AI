"use client";

import { useState } from "react";
import {
  Newspaper,
  Globe,
  CalendarDays,
  Brain,
  Bookmark,
  BarChart3,
  Download,
  Search,
  Filter,
} from "lucide-react";

const currentAffairs = [
  {
    id: 1,
    title: "Union Budget Highlights",
    category: "Economy",
    relevance: "High",
    date: "Today",
  },
  {
    id: 2,
    title: "ISRO Space Mission Update",
    category: "Science & Technology",
    relevance: "High",
    date: "Yesterday",
  },
  {
    id: 3,
    title: "Tamil Nadu Government Scheme",
    category: "State Affairs",
    relevance: "Medium",
    date: "2 Days Ago",
  },
  {
    id: 4,
    title: "International Climate Summit",
    category: "International",
    relevance: "Medium",
    date: "3 Days Ago",
  },
];

export default function CurrentAffairsAIPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Current Affairs Intelligence Center
          </h1>

          <p className="mt-2 text-slate-500">
            Stay updated with AI-curated current affairs, TNPSC-focused news,
            intelligent revision tools, and practice questions.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Digest

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Today's News",
            value: "32",
            icon: Newspaper,
          },
          {
            title: "High Relevance",
            value: "14",
            icon: Brain,
          },
          {
            title: "Bookmarks",
            value: "58",
            icon: Bookmark,
          },
          {
            title: "Revision Cards",
            value: "96",
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
              placeholder="Search current affairs..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* AI News Feed */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            AI Curated News Feed
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {currentAffairs.map((news) => (

            <div
              key={news.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {news.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {news.category} • {news.date}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    news.relevance === "High"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {news.relevance}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Daily / Weekly / Monthly Digest */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <CalendarDays
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            AI News Digest
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-3">

          {[
            "Daily Digest",
            "Weekly Summary",
            "Monthly Revision",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border p-6 text-center"
            >

              <CalendarDays
                size={42}
                className="mx-auto mb-3 text-indigo-600"
              />

              <h3 className="text-lg font-semibold">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </div>

            {/* AI Current Affairs MCQs */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Brain
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            AI Generated Current Affairs MCQs
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Which organization launched India's latest satellite mission?",
            "Which scheme was recently introduced by the Tamil Nadu Government?",
            "Which country hosted the recent Climate Summit?",
            "Which ministry presented the latest Union Budget?",
          ].map((question, index) => (

            <div
              key={index}
              className="rounded-xl border p-4"
            >
              <h3 className="font-semibold">
                Q{index + 1}. {question}
              </h3>

              <button className="mt-3 rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
                View Answer
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Smart Revision Cards & Bookmarks */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Smart Revision Cards
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Important Government Schemes",
              "Science & Technology Updates",
              "Economic Survey Highlights",
              "International Organizations",
            ].map((topic) => (

              <div
                key={topic}
                className="rounded-xl border p-4"
              >
                {topic}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Bookmark
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Bookmark & Revision Planner
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Budget 2026 Highlights",
              "ISRO Missions",
              "Tamil Nadu Welfare Schemes",
              "International Relations",
            ].map((bookmark) => (

              <div
                key={bookmark}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{bookmark}</span>

                <button className="rounded-lg border px-3 py-1 text-sm">
                  Revise
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* News Analytics */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <BarChart3 size={30} />

            <h2 className="text-3xl font-bold">
              News Trend Analytics
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Economy news has increased by 18% this month.",
              "Science & Technology is among the top TNPSC focus areas.",
              "State Government schemes remain highly relevant.",
              "International affairs contribute significantly to current affairs questions.",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white/10 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* TNPSC Relevance Dashboard */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            TNPSC Relevance Score
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Globe
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              AI Relevance Analytics
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts to visualize topic importance, category-wise coverage, and TNPSC relevance scores for current affairs.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Digest
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Summary
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Revision
        </button>

      </div>

    </div>

  );

}