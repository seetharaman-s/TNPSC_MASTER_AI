"use client";

import {
  ClipboardList,
  BookOpen,
  Target,
  Play,
} from "lucide-react";

import { RecommendedMCQ } from "@/services/adaptiveLearningService";

interface Props {
  questions: RecommendedMCQ[];
}

export default function RecommendedQuestions({
  questions,
}: Props) {
  function getDifficultyBadge(difficulty: string) {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-700 border-green-200";

      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";

      case "hard":
        return "bg-red-100 text-red-700 border-red-200";

      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <ClipboardList className="h-7 w-7 text-indigo-600" />

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Recommended Practice Questions
          </h2>

          <p className="text-sm text-gray-500">
            AI-selected MCQ sets based on your learning progress.
          </p>
        </div>
      </div>

      {/* Empty State */}

      {questions.length === 0 ? (
        <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
          <p className="font-medium text-green-700">
            🎉 No recommended questions at the moment.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {questions.map((question, index) => (
            <div
              key={`${question.subject}-${question.topic}-${index}`}
              className="rounded-xl border border-gray-200 p-5 transition-all hover:shadow-md"
            >

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                {/* Left Section */}

                <div className="space-y-3">

                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {question.subject}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {question.topic}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">

                    <span
                      className={`rounded-full border px-3 py-1 text-sm font-semibold ${getDifficultyBadge(
                        question.difficulty
                      )}`}
                    >
                      {question.difficulty}
                    </span>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      {question.question_count} Questions
                    </span>

                  </div>

                </div>

                {/* Right Section */}

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
                  onClick={() =>
                    console.log(
                      "Start Practice:",
                      question.subject,
                      question.topic
                    )
                  }
                >
                  <Play className="mr-2 h-4 w-4" />

                  Start Practice
                </button>

              </div>

              <div className="mt-5 flex items-center gap-2 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                <Target className="h-4 w-4 text-indigo-600" />

                Practice this topic to improve your mastery and exam readiness.
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}