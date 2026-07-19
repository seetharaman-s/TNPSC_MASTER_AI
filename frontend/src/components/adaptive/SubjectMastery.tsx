"use client";

import { Award, BookOpen, TrendingUp } from "lucide-react";

import {
  SubjectMastery as SubjectMasteryType,
} from "@/services/adaptiveLearningService";

interface Props {
  mastery: SubjectMasteryType[];
}

export default function SubjectMastery({
  mastery,
}: Props) {
  function getLevelStyle(level: string) {
    switch (level.toLowerCase()) {
      case "expert":
        return {
          badge: "bg-purple-100 text-purple-700 border-purple-200",
          progress: "bg-purple-600",
        };

      case "advanced":
        return {
          badge: "bg-green-100 text-green-700 border-green-200",
          progress: "bg-green-600",
        };

      case "intermediate":
        return {
          badge: "bg-yellow-100 text-yellow-700 border-yellow-200",
          progress: "bg-yellow-500",
        };

      case "beginner":
        return {
          badge: "bg-red-100 text-red-700 border-red-200",
          progress: "bg-red-500",
        };

      default:
        return {
          badge: "bg-gray-100 text-gray-700 border-gray-200",
          progress: "bg-gray-500",
        };
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <Award className="h-7 w-7 text-green-600" />

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Subject Mastery
          </h2>

          <p className="text-sm text-gray-500">
            AI analysis of your subject-wise learning progress.
          </p>
        </div>
      </div>

      {/* Empty State */}

      {mastery.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
          <p className="text-gray-600">
            No mastery data available.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {mastery.map((item, index) => {
            const style = getLevelStyle(item.level);

            return (
              <div
                key={`${item.subject}-${index}`}
                className="rounded-xl border border-gray-200 p-5 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-blue-600" />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.subject}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Overall Mastery
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 text-sm font-semibold ${style.badge}`}
                  >
                    {item.level}
                  </span>

                </div>

                {/* Progress */}

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Mastery Progress
                  </span>

                  <span className="font-semibold text-gray-800">
                    {item.mastery_percentage}%
                  </span>
                </div>

                <div className="h-3 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ${style.progress}`}
                    style={{
                      width: `${item.mastery_percentage}%`,
                    }}
                  />
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-green-600" />

                  Continue practicing this subject to improve your overall exam readiness.
                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}