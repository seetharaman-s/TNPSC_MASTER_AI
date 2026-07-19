"use client";

import {
  Target,
  Trophy,
  Award,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Brain,
} from "lucide-react";

import {
  ExamReadiness as ExamReadinessData,
} from "@/services/careerGuidanceService";

interface Props {
  readiness: ExamReadinessData;
}

export default function ExamReadiness({
  readiness,
}: Props) {
  function getScoreColor(score: number) {
    if (score >= 80) {
      return {
        text: "text-green-600",
        progress: "bg-green-600",
      };
    }

    if (score >= 60) {
      return {
        text: "text-yellow-600",
        progress: "bg-yellow-500",
      };
    }

    return {
      text: "text-red-600",
      progress: "bg-red-600",
    };
  }

  const style = getScoreColor(
    readiness.overall_readiness
  );

  const circumference = 2 * Math.PI * 54;
  const offset =
    circumference -
    (readiness.overall_readiness / 100) *
      circumference;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">
        <Target className="h-7 w-7 text-blue-600" />

        <div>
          <h2 className="text-2xl font-bold">
            Exam Readiness
          </h2>

          <p className="text-gray-500">
            AI prediction of your TNPSC preparation level.
          </p>
        </div>
      </div>

      {/* Top Summary */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Circular Score */}

        <div className="flex flex-col items-center justify-center">

          <div className="relative h-44 w-44">

            <svg
              className="-rotate-90 h-44 w-44"
              viewBox="0 0 140 140"
            >
              <circle
                cx="70"
                cy="70"
                r="54"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="10"
              />

              <circle
                cx="70"
                cy="70"
                r="54"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className={style.text}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`text-4xl font-bold ${style.text}`}
              >
                {readiness.overall_readiness}%
              </span>

              <span className="text-sm text-gray-500">
                Ready
              </span>
            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid gap-4">

          <div className="rounded-xl bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />

              <div>
                <p className="text-sm text-gray-500">
                  Predicted Score
                </p>

                <h3 className="text-2xl font-bold text-blue-700">
                  {readiness.predicted_score}
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-purple-50 p-4">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-purple-600" />

              <div>
                <p className="text-sm text-gray-500">
                  Predicted Rank
                </p>

                <h3 className="text-2xl font-bold text-purple-700">
                  {readiness.predicted_rank ?? "-"}
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-green-600" />

              <div>
                <p className="text-sm text-gray-500">
                  Passing Probability
                </p>

                <h3 className="text-2xl font-bold text-green-700">
                  {readiness.passing_probability}%
                </h3>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Details */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {/* Strengths */}

        <div className="rounded-xl border border-green-200 bg-green-50 p-5">

          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-green-700">
            <CheckCircle2 className="h-5 w-5" />
            Strengths
          </h3>

          <div className="space-y-3">
            {readiness.strengths.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Weak Areas */}

        <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">

          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-yellow-700">
            <AlertTriangle className="h-5 w-5" />
            Weak Areas
          </h3>

          <div className="space-y-3">
            {readiness.weak_areas.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* AI Suggestions */}

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">

          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-blue-700">
            <Brain className="h-5 w-5" />
            AI Recommendations
          </h3>

          <div className="space-y-3">
            {readiness.recommendations.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2"
              >
                <Brain className="mt-0.5 h-4 w-4 text-blue-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}