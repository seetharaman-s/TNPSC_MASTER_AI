"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Loader2,
  Play,
  Trophy,
  Clock,
  BookOpen,
} from "lucide-react";

import MockInterviewService, {
  InterviewDashboard as InterviewDashboardData,
} from "@/services/mockInterviewService";

interface Props {
  userId: number;
  onStartInterview?: () => void;
}

export default function InterviewDashboard({
  userId,
  onStartInterview,
}: Props) {
  const [dashboard, setDashboard] =
    useState<InterviewDashboardData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    loadDashboard();
  }, [userId]);

  async function loadDashboard() {
    try {
      setLoading(true);
      setError("");

      const data =
        await MockInterviewService.getDashboard(
          userId
        );

      setDashboard(data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to load interview dashboard."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-80 items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
        {error || "Dashboard unavailable."}
      </div>
    );
  }

  const session = dashboard.current_session;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Brain className="h-8 w-8" />

              <h1 className="text-3xl font-bold">
                AI Mock Interview
              </h1>
            </div>

            <p className="max-w-2xl text-blue-100">
              Practice TNPSC descriptive questions with
              AI-powered evaluation, scoring and
              personalized feedback.
            </p>
          </div>

          <button
            onClick={onStartInterview}
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            <Play className="mr-2 h-5 w-5" />

            Start Mock Interview
          </button>

        </div>

      </div>

      {/* Current Session */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <BookOpen className="mb-3 h-7 w-7 text-blue-600" />

          <p className="text-sm text-gray-500">
            Subject
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {session.subject}
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Clock className="mb-3 h-7 w-7 text-green-600" />

          <p className="text-sm text-gray-500">
            Progress
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {session.completed_questions} / {session.total_questions}
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Trophy className="mb-3 h-7 w-7 text-yellow-500" />

          <p className="text-sm text-gray-500">
            Average Score
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {session.average_score}%
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <Brain className="mb-3 h-7 w-7 text-purple-600" />

          <p className="text-sm text-gray-500">
            Session ID
          </p>

          <h3 className="mt-2 text-xl font-bold">
            #{session.session_id}
          </h3>
        </div>

      </div>

      {/* Performance History */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Recent Performance
          </h2>

          <p className="text-gray-500">
            Previous AI mock interview sessions
          </p>
        </div>

        {dashboard.history.length === 0 ? (
          <div className="rounded-xl bg-gray-50 p-6 text-center text-gray-500">
            No interview history available.
          </div>
        ) : (
          <div className="overflow-x-auto">

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
                {dashboard.history.map((item) => (
                  <tr
                    key={item.session_id}
                    className="border-b hover:bg-gray-50"
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
                      <span className="rounded-full bg-green-100 px-3 py-1 font-semibold text-green-700">
                        {item.score}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
}