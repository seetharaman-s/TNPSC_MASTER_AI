"use client";

import {
  Quote,
  Flame,
  Zap,
  Brain,
  Sparkles,
} from "lucide-react";

import {
  Motivation,
} from "@/services/careerGuidanceService";

interface Props {
  motivation: Motivation;
}

export default function MotivationCard({
  motivation,
}: Props) {
  function getProductivityColor(score: number) {
    if (score >= 80) {
      return "bg-green-600";
    }

    if (score >= 60) {
      return "bg-yellow-500";
    }

    return "bg-red-500";
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-sm">

      {/* Header */}

      <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">

        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8" />

          <div>
            <h2 className="text-2xl font-bold">
              Daily Motivation
            </h2>

            <p className="text-indigo-100">
              Stay focused and achieve your TNPSC goals.
            </p>
          </div>
        </div>

      </div>

      <div className="space-y-8 p-6">

        {/* Quote */}

        <div className="rounded-xl bg-white p-6 shadow-sm">

          <Quote className="mb-4 h-8 w-8 text-indigo-600" />

          <blockquote className="text-xl font-semibold italic leading-relaxed text-gray-800">
            "{motivation.quote}"
          </blockquote>

          <p className="mt-4 text-right font-medium text-indigo-600">
            — {motivation.author}
          </p>

        </div>

        {/* AI Study Tip */}

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">

          <div className="mb-3 flex items-center gap-2">
            <Brain className="h-6 w-6 text-blue-600" />

            <h3 className="text-lg font-semibold text-blue-700">
              AI Study Tip
            </h3>
          </div>

          <p className="leading-relaxed text-gray-700">
            {motivation.study_tip}
          </p>

        </div>

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-2">

          {/* Streak */}

          <div className="rounded-xl border border-orange-200 bg-orange-50 p-5">

            <div className="mb-4 flex items-center gap-3">
              <Flame className="h-8 w-8 text-orange-500" />

              <div>
                <p className="text-sm text-gray-500">
                  Consistency Streak
                </p>

                <h3 className="text-3xl font-bold text-orange-600">
                  {motivation.streak_days}
                </h3>
              </div>
            </div>

            <p className="text-gray-600">
              days of continuous study.
            </p>

          </div>

          {/* Productivity */}

          <div className="rounded-xl border border-green-200 bg-green-50 p-5">

            <div className="mb-4 flex items-center gap-3">
              <Zap className="h-8 w-8 text-green-600" />

              <div>
                <p className="text-sm text-gray-500">
                  Productivity Score
                </p>

                <h3 className="text-3xl font-bold text-green-700">
                  {motivation.productivity_score}%
                </h3>
              </div>
            </div>

            <div className="h-3 rounded-full bg-gray-200">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${getProductivityColor(
                  motivation.productivity_score
                )}`}
                style={{
                  width: `${motivation.productivity_score}%`,
                }}
              />
            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-center text-white">

          <h3 className="mb-2 text-lg font-semibold">
            Keep Going 🚀
          </h3>

          <p className="text-indigo-100">
            Small daily improvements build extraordinary results.
            Stay consistent, trust your preparation, and success
            will follow.
          </p>

        </div>

      </div>

    </div>
  );
}