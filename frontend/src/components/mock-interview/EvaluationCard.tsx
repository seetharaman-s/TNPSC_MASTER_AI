"use client";

import {
  Award,
  Brain,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import {
  AnswerEvaluation,
} from "@/services/mockInterviewService";

interface Props {
  evaluation: AnswerEvaluation;
}

export default function EvaluationCard({
  evaluation,
}: Props) {
  function getScoreColor(score: number) {
    if (score >= 80) {
      return {
        text: "text-green-700",
        bg: "bg-green-500",
        light: "bg-green-100",
      };
    }

    if (score >= 60) {
      return {
        text: "text-yellow-700",
        bg: "bg-yellow-500",
        light: "bg-yellow-100",
      };
    }

    return {
      text: "text-red-700",
      bg: "bg-red-500",
      light: "bg-red-100",
    };
  }

  const scoreStyle = getScoreColor(
    evaluation.overall_score
  );

  return (
    <div className="space-y-6">

      {/* Overall Score */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              AI Evaluation Result
            </h2>

            <p className="mt-2 text-gray-500">
              Overall assessment of your descriptive answer.
            </p>
          </div>

          {/* Circular Score */}

          <div className="relative flex h-40 w-40 items-center justify-center">
            <svg
              className="-rotate-90 h-40 w-40"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="#E5E7EB"
                strokeWidth="12"
                fill="none"
              />

              <circle
                cx="80"
                cy="80"
                r="68"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                className={scoreStyle.text}
                strokeDasharray={427}
                strokeDashoffset={
                  427 -
                  (427 * evaluation.overall_score) /
                    100
                }
              />
            </svg>

            <div className="absolute text-center">
              <p
                className={`text-4xl font-bold ${scoreStyle.text}`}
              >
                {evaluation.overall_score}%
              </p>

              <p className="text-sm text-gray-500">
                Overall Score
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Evaluation Criteria */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center gap-3">
          <Award className="h-7 w-7 text-blue-600" />

          <h2 className="text-xl font-bold">
            Evaluation Criteria
          </h2>
        </div>

        <div className="space-y-5">

          {evaluation.criteria.map(
            (criterion, index) => (
              <div
                key={`${criterion.name}-${index}`}
              >
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">
                    {criterion.name}
                  </span>

                  <span className="font-bold">
                    {criterion.score}/10
                  </span>
                </div>

                <div className="mb-2 h-3 rounded-full bg-gray-200">
                  <div
                    className="h-3 rounded-full bg-blue-600 transition-all duration-700"
                    style={{
                      width: `${
                        criterion.score * 10
                      }%`,
                    }}
                  />
                </div>

                <p className="text-sm text-gray-600">
                  {criterion.feedback}
                </p>
              </div>
            )
          )}

        </div>

      </div>

      {/* Strengths & Improvements */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Strengths */}

        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

          <div className="mb-5 flex items-center gap-3">
            <CheckCircle2 className="h-7 w-7 text-green-600" />

            <h2 className="text-xl font-bold text-green-700">
              Strengths
            </h2>
          </div>

          <ul className="space-y-3">
            {evaluation.strengths.map(
              (item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

                  <span>{item}</span>
                </li>
              )
            )}
          </ul>

        </div>

        {/* Improvements */}

        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">

          <div className="mb-5 flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-yellow-700" />

            <h2 className="text-xl font-bold text-yellow-700">
              Areas for Improvement
            </h2>
          </div>

          <ul className="space-y-3">
            {evaluation.improvements.map(
              (item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-yellow-700" />

                  <span>{item}</span>
                </li>
              )
            )}
          </ul>

        </div>

      </div>

      {/* AI Feedback */}

      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

        <div className="mb-5 flex items-center gap-3">
          <Brain className="h-7 w-7 text-indigo-600" />

          <h2 className="text-xl font-bold text-indigo-700">
            AI Feedback
          </h2>
        </div>

        <p className="leading-8 text-gray-700">
          {evaluation.ai_feedback}
        </p>

      </div>

    </div>
  );
}