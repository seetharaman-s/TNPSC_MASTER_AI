"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";

import {
  QuizQuestion,
} from "@/services/currentAffairsService";

interface DailyQuizProps {
  questions: QuizQuestion[];
}

export default function DailyQuiz({
  questions,
}: DailyQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [submitted, setSubmitted] = useState<
    Record<number, boolean>
  >({});

  const currentQuestion = questions[currentIndex];

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return (
        total +
        (selectedAnswers[question.id] ===
        question.correct_answer
          ? 1
          : 0)
      );
    }, 0);
  }, [questions, selectedAnswers]);

  const completed = Object.keys(submitted).length;

  const finished =
    questions.length > 0 &&
    completed === questions.length;

  const submitAnswer = () => {
    if (!currentQuestion) return;

    if (!selectedAnswers[currentQuestion.id]) return;

    setSubmitted((prev) => ({
      ...prev,
      [currentQuestion.id]: true,
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmitted({});
  };

  if (questions.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        <HelpCircle className="mx-auto mb-4 h-12 w-12 text-gray-400" />

        <h2 className="text-xl font-semibold">
          No Quiz Available
        </h2>

        <p className="mt-2 text-gray-500">
          Today's quiz will appear here.
        </p>
      </div>
    );
  }

  if (finished) {
    return (
      <section className="rounded-xl bg-white p-8 shadow">

        <div className="text-center">

          <Trophy className="mx-auto mb-4 h-14 w-14 text-yellow-500" />

          <h2 className="text-3xl font-bold">
            Quiz Completed
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Score:{" "}
            <span className="font-bold text-blue-600">
              {score}
            </span>{" "}
            / {questions.length}
          </p>

          <button
            onClick={restartQuiz}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            <RotateCcw className="h-5 w-5" />
            Restart Quiz
          </button>

        </div>

      </section>
    );
  }

  const selected =
    selectedAnswers[currentQuestion.id];

  const isSubmitted =
    submitted[currentQuestion.id];

  const correct =
    selected === currentQuestion.correct_answer;

  return (
    <section className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold">
          Daily Current Affairs Quiz
        </h2>

        <p className="text-gray-600">
          Question {currentIndex + 1} of{" "}
          {questions.length}
        </p>

      </div>

      {/* Question Card */}

      <div className="rounded-xl bg-white p-8 shadow">

        <div className="mb-6">

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            {currentQuestion.category}
          </span>

          <span className="ml-3 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            {currentQuestion.difficulty}
          </span>

        </div>

        <h3 className="mb-6 text-xl font-semibold">
          {currentQuestion.question}
        </h3>

        <div className="space-y-4">

          {currentQuestion.options.map((option) => {

            const isCorrect =
              option === currentQuestion.correct_answer;

            const isSelected =
              option === selected;

            return (
              <button
                key={option}
                disabled={isSubmitted}
                onClick={() =>
                  setSelectedAnswers((prev) => ({
                    ...prev,
                    [currentQuestion.id]:
                      option,
                  }))
                }
                className={`w-full rounded-lg border p-4 text-left transition
                  ${
                    isSubmitted
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : isSelected
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                      : isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-400"
                  }`}
              >
                <div className="flex items-center justify-between">

                  <span>{option}</span>

                  {isSubmitted && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  )}

                  {isSubmitted &&
                    isSelected &&
                    !isCorrect && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}

                </div>

              </button>
            );
          })}

        </div>

        {!isSubmitted && (

          <button
            onClick={submitAnswer}
            disabled={!selected}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Submit Answer
          </button>

        )}

        {isSubmitted && (

          <div className="mt-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">

            <h4 className="font-semibold">
              Explanation
            </h4>

            <p className="mt-2 text-gray-700">
              {currentQuestion.explanation}
            </p>

            <p
              className={`mt-3 font-semibold ${
                correct
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {correct
                ? "Correct Answer!"
                : `Correct Answer: ${currentQuestion.correct_answer}`}
            </p>

          </div>

        )}

      </div>

      {/* Navigation */}

      <div className="flex items-center justify-between">

        <button
          onClick={previousQuestion}
          disabled={currentIndex === 0}
          className="rounded-lg border px-5 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        <button
          onClick={nextQuestion}
          disabled={
            currentIndex === questions.length - 1
          }
          className="rounded-lg bg-blue-600 px-5 py-2 text-white disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </section>
  );
}