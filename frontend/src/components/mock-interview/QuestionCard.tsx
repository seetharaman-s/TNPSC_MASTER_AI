"use client";

import {
  BookOpen,
  HelpCircle,
  Clock,
  PlayCircle,
} from "lucide-react";

import {
  InterviewQuestion,
} from "@/services/mockInterviewService";

interface Props {
  question: InterviewQuestion;
  questionNumber?: number;
  totalQuestions?: number;
  onAnswer?: (question: InterviewQuestion) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: Props) {
  function getDifficultyStyle(difficulty: string) {
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

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Interview Question
          </h2>

          {questionNumber && totalQuestions && (
            <p className="mt-1 text-sm text-gray-500">
              Question {questionNumber} of {totalQuestions}
            </p>
          )}
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-sm font-semibold ${getDifficultyStyle(
            question.difficulty
          )}`}
        >
          {question.difficulty}
        </span>

      </div>

      {/* Subject */}

      <div className="mb-5 flex flex-wrap gap-4">

        <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2">
          <BookOpen className="h-5 w-5 text-blue-600" />

          <span className="font-medium text-blue-700">
            {question.subject}
          </span>
        </div>

        <div className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
          {question.topic}
        </div>

      </div>

      {/* Timer Placeholder */}

      <div className="mb-6 flex items-center gap-2 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
        <Clock className="h-5 w-5 text-yellow-600" />

        <span className="text-sm text-yellow-700">
          Timed interview mode will be available in a future update.
        </span>
      </div>

      {/* Question */}

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">

        <div className="mb-4 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-indigo-600" />

          <h3 className="font-semibold text-gray-800">
            Interview Question
          </h3>
        </div>

        <p className="text-lg leading-8 text-gray-700">
          {question.question}
        </p>

      </div>

      {/* Action */}

      <div className="mt-8 flex justify-end">

        <button
          type="button"
          onClick={() => onAnswer?.(question)}
          className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <PlayCircle className="mr-2 h-5 w-5" />

          Answer Question
        </button>

      </div>

    </div>
  );
}