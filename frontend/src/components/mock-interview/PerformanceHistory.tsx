"use client";

import { useMemo, useState } from "react";
import {
  Search,
  TrendingUp,
  Trophy,
  CalendarDays,
  BookOpen,
} from "lucide-react";

import {
  InterviewHistory,
} from "@/services/mockInterviewService";

interface Props {
  history: InterviewHistory[];
}

export default function PerformanceHistory({
  history,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredHistory = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return history;
    }

    return history.filter((item) =>
      item.subject.toLowerCase().includes(keyword)
    );
  }, [history, search]);

  function getScoreStyle(score: number) {
    if (score >= 80) {
      return "bg-green-100 text-green-700";
    }

    if (score >= 60) {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  }

  const averageScore =
    filteredHistory.length > 0
      ? (
          filteredHistory.reduce(
            (sum, item) => sum + item.score,
            0
          ) / filteredHistory.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Interview Performance History
          </h2>

          <p className="mt-1 text-gray-500">
            Review your previous AI interview sessions.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3">
          <TrendingUp className="h-5 w-5 text-blue-600" />

          <div>
            <p className="text-xs uppercase text-blue-600">
              Average Score
            </p>

            <p className="font-bold text-blue-700">
              {averageScore}%
            </p>
          </div>
        </div>

      </div>

      {/* Search */}

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search by subject..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Empty State */}

      {filteredHistory.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-500">
            No interview history found.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}

          <div className="hidden overflow-x-auto lg:block">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">
                    Session
                  </th>
                  <th className="px-4 py-3 text-left">
                    Subject
                  </th>
                  <th className="px-4 py-3 text-left">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left">
                    Score
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredHistory.map((item) => (
                  <tr
                    key={item.session_id}
                    className="border-b transition hover:bg-gray-50"
                  >
                    <td className="px-4 py-4">
                      #{item.session_id}
                    </td>

                    <td className="px-4 py-4">
                      {item.subject}
                    </td>

                    <td className="px-4 py-4">
                      {item.date}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 font-semibold ${getScoreStyle(
                          item.score
                        )}`}
                      >
                        {item.score}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}

          <div className="space-y-4 lg:hidden">
            {filteredHistory.map((item) => (
              <div
                key={item.session_id}
                className="rounded-xl border border-gray-200 p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />

                    <span className="font-semibold">
                      #{item.session_id}
                    </span>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${getScoreStyle(
                      item.score
                    )}`}
                  >
                    {item.score}%
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {item.subject}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}