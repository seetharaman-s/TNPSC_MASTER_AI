"use client";

import { Flame, Calendar, Trophy } from "lucide-react";
import { StudyStreak as StudyStreakData } from "@/services/progressService";

interface Props {
  streak: StudyStreakData;
}

export default function StudyStreak({ streak }: Props) {
  const motivation =
    streak.current_streak >= 30
      ? "Outstanding! You're building an exceptional study habit."
      : streak.current_streak >= 15
      ? "Great consistency! Keep the momentum going."
      : streak.current_streak >= 7
      ? "Nice progress! You're forming a strong habit."
      : "Every study session counts. Keep going!";

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <Flame className="h-8 w-8 text-orange-600" />

        <div>

          <h2 className="text-2xl font-bold">

            Study Streak

          </h2>

          <p className="text-gray-500">

            Stay consistent and improve every day.

          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-orange-50 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-600">

                Current Streak

              </p>

              <h3 className="mt-2 text-4xl font-bold text-orange-600">

                {streak.current_streak}

              </h3>

              <p className="mt-1 text-sm">

                Days

              </p>

            </div>

            <Flame className="h-12 w-12 text-orange-500" />

          </div>

        </div>

        <div className="rounded-xl bg-yellow-50 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-600">

                Longest Streak

              </p>

              <h3 className="mt-2 text-4xl font-bold text-yellow-600">

                {streak.longest_streak}

              </h3>

              <p className="mt-1 text-sm">

                Days

              </p>

            </div>

            <Trophy className="h-12 w-12 text-yellow-600" />

          </div>

        </div>

        <div className="rounded-xl bg-blue-50 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-600">

                Last Study Date

              </p>

              <h3 className="mt-2 text-lg font-bold text-blue-600">

                {streak.last_study_date}

              </h3>

            </div>

            <Calendar className="h-12 w-12 text-blue-600" />

          </div>

        </div>

      </div>

      {/* Motivation */}

      <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">

        <h4 className="font-semibold">

          Motivation

        </h4>

        <p className="mt-2 text-gray-700">

          {motivation}

        </p>

      </div>

    </div>
  );
}