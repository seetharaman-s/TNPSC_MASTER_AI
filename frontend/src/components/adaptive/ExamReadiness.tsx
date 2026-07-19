"use client";

import { Target, TrendingUp, Brain } from "lucide-react";
import { ExamReadiness as ExamReadinessType } from "@/services/adaptiveLearningService";

interface Props {
  readiness: ExamReadinessType;
}

export default function ExamReadiness({ readiness }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Exam Readiness
          </h2>
          <p className="text-sm text-gray-500">
            AI prediction based on your study performance
          </p>
        </div>

        <Target className="h-8 w-8 text-blue-600" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {/* Readiness Score */}
        <div className="rounded-xl bg-blue-50 p-5">
          <p className="mb-2 text-sm text-gray-600">
            Readiness Score
          </p>

          <h3 className="text-3xl font-bold text-blue-700">
            {readiness.readiness_score}%
          </h3>

          <div className="mt-4 h-3 w-full rounded-full bg-blue-100">
            <div
              className="h-3 rounded-full bg-blue-600 transition-all duration-700"
              style={{
                width: `${readiness.readiness_score}%`,
              }}
            />
          </div>
        </div>

        {/* Predicted Score */}
        <div className="rounded-xl bg-green-50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">
              Predicted Score
            </span>
          </div>

          <h3 className="text-3xl font-bold text-green-700">
            {readiness.predicted_score}
          </h3>
        </div>

        {/* Confidence */}
        <div className="rounded-xl bg-purple-50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600">
              AI Confidence
            </span>
          </div>

          <h3 className="text-3xl font-bold text-purple-700">
            {readiness.confidence}%
          </h3>

          <div className="mt-4 h-3 w-full rounded-full bg-purple-100">
            <div
              className="h-3 rounded-full bg-purple-600 transition-all duration-700"
              style={{
                width: `${readiness.confidence}%`,
              }}
            />
          </div>
        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h4 className="mb-2 font-semibold text-blue-800">
          AI Recommendation
        </h4>

        <p className="leading-7 text-gray-700">
          {readiness.recommendation}
        </p>
      </div>

    </div>
  );
}