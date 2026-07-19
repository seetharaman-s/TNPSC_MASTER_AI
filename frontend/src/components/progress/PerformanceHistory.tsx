"use client";

import { useMemo, useState } from "react";
import { Search, CalendarDays } from "lucide-react";
import { PerformanceHistory as PerformanceHistoryData } from "@/services/progressService";

interface Props {
  history: PerformanceHistoryData[];
}

export default function PerformanceHistory({
  history,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredHistory = useMemo(() => {
    const query = search.toLowerCase();

    return history.filter(
      (item) =>
        item.quiz_name.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query)
    );
  }, [history, search]);

  function getBadge(score: number) {
    if (score >= 90) {
      return {
        label: "Excellent",
        className:
          "bg-green-100 text-green-700",
      };
    }

    if (score >= 75) {
      return {
        label: "Good",
        className:
          "bg-blue-100 text-blue-700",
      };
    }

    if (score >= 50) {
      return {
        label: "Average",
        className:
          "bg-yellow-100 text-yellow-700",
      };
    }

    return {
      label: "Needs Improvement",
      className:
        "bg-red-100 text-red-700",
    };
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <CalendarDays className="h-7 w-7 text-blue-600" />

          <div>

            <h2 className="text-2xl font-bold">

              Performance History

            </h2>

            <p className="text-sm text-gray-500">

              Review your recent quiz performance.

            </p>

          </div>

        </div>

        <div className="relative">

          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search quiz or subject..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-72 rounded-lg border py-2 pl-10 pr-3 focus:border-blue-500 focus:outline-none"
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b bg-gray-50">

              <th className="px-4 py-3 text-left font-semibold">
                Date
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Quiz
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Subject
              </th>

              <th className="px-4 py-3 text-center font-semibold">
                Score
              </th>

              <th className="px-4 py-3 text-center font-semibold">
                Correct
              </th>

              <th className="px-4 py-3 text-center font-semibold">
                Performance
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredHistory.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-10 text-center text-gray-500"
                >

                  No performance history found.

                </td>

              </tr>

            ) : (

              filteredHistory.map((item, index) => {

                const badge = getBadge(item.score);

                return (

                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="px-4 py-4">

                      {item.date}

                    </td>

                    <td className="px-4 py-4 font-medium">

                      {item.quiz_name}

                    </td>

                    <td className="px-4 py-4">

                      {item.subject}

                    </td>

                    <td className="px-4 py-4 text-center font-semibold">

                      {item.score}%

                    </td>

                    <td className="px-4 py-4 text-center">

                      {item.correct_answers}/
                      {item.total_questions}

                    </td>

                    <td className="px-4 py-4 text-center">

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${badge.className}`}
                      >

                        {badge.label}

                      </span>

                    </td>

                  </tr>

                );

              })

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}