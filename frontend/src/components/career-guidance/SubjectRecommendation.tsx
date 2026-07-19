"use client";

import {
  BookOpen,
  Brain,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";

import {
  SubjectRecommendation as SubjectRecommendationType,
} from "@/services/careerGuidanceService";

interface Props {
  recommendations: SubjectRecommendationType[];
}

export default function SubjectRecommendation({
  recommendations,
}: Props) {
  function getPriorityStyle(priority: string) {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";

      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";

      case "low":
        return "bg-green-100 text-green-700 border-green-200";

      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  }

  function getProgressColor(score: number) {
    if (score >= 80) {
      return "bg-green-600";
    }

    if (score >= 60) {
      return "bg-yellow-500";
    }

    return "bg-red-500";
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">
        <Brain className="h-7 w-7 text-indigo-600" />

        <div>
          <h2 className="text-2xl font-bold">
            AI Subject Recommendations
          </h2>

          <p className="text-gray-500">
            Improve your preparation with personalized subject recommendations.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {recommendations.map((subject) => (
          <div
            key={subject.subject}
            className="rounded-xl border border-gray-200 p-6 transition hover:border-indigo-300 hover:shadow-md"
          >
            {/* Header */}

            <div className="mb-5 flex items-start justify-between">

              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />

                <div>
                  <h3 className="text-xl font-semibold">
                    {subject.subject}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Strength Analysis
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full border px-3 py-1 text-sm font-semibold ${getPriorityStyle(
                  subject.priority
                )}`}
              >
                {subject.priority}
              </span>

            </div>

            {/* Strength Score */}

            <div className="mb-5">

              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium">
                  Strength Score
                </span>

                <span className="font-bold text-indigo-700">
                  {subject.strength_score}%
                </span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(
                    subject.strength_score
                  )}`}
                  style={{
                    width: `${subject.strength_score}%`,
                  }}
                />
              </div>

            </div>

            {/* AI Recommendation */}

            <div className="mb-6 rounded-lg bg-indigo-50 p-4">

              <div className="mb-2 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-indigo-600" />

                <span className="font-semibold text-indigo-700">
                  AI Recommendation
                </span>
              </div>

              <p className="text-gray-700">
                {subject.recommendation}
              </p>

            </div>

            {/* Topics */}

            <div>

              <div className="mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />

                <span className="font-semibold">
                  Recommended Topics
                </span>
              </div>

              <div className="space-y-2">

                {subject.recommended_topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 rounded-lg bg-gray-50 p-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />

                    <span>{topic}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}