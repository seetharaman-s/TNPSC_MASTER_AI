"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  Save,
  CheckCircle,
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Who is known as the Father of the Indian Constitution?",
    options: [
      "Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Rajendra Prasad",
      "Mahatma Gandhi",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "The capital of Tamil Nadu is?",
    options: [
      "Madurai",
      "Salem",
      "Chennai",
      "Coimbatore",
    ],
    answer: 2,
  },
];

export default function TestEnginePage() {

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] =
    useState<Record<number, number>>({});

  const [review, setReview] =
    useState<number[]>([]);

  const [seconds, setSeconds] =
    useState(3 * 60 * 60);

  useEffect(() => {

    const timer = setInterval(() => {

      setSeconds((prev) => {

        if (prev <= 0) {

          clearInterval(timer);

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const currentQuestion =
    questions[current];

  const progress =
    ((current + 1) / questions.length) * 100;

  const time = useMemo(() => {

    const h = Math.floor(seconds / 3600);

    const m = Math.floor((seconds % 3600) / 60);

    const s = seconds % 60;

    return `${h}:${m
      .toString()
      .padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;

  }, [seconds]);

  return (

    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <header className="sticky top-0 bg-white border-b z-40">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold">

              TNPSC Mock Test

            </h1>

            <p className="text-sm text-slate-500">

              Question {current + 1} of {questions.length}

            </p>

          </div>

          <div className="flex items-center gap-3">

            <Clock
              className="text-red-600"
              size={20}
            />

            <span className="text-xl font-bold text-red-600">

              {time}

            </span>

          </div>

        </div>

      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Progress */}

        <div className="bg-white rounded-xl border p-6">

          <div className="flex justify-between mb-3">

            <span>Progress</span>

            <span>

              {Math.round(progress)}%

            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-200">

            <div
              className="h-3 rounded-full bg-emerald-600"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Question */}

        <div className="mt-8 rounded-2xl border bg-white shadow-sm p-8">

          <h2 className="text-2xl font-semibold leading-9">

            {currentQuestion.question}

          </h2>

          <div className="space-y-4 mt-8">

            {currentQuestion.options.map(
              (option, index) => (

                <button
                  key={option}
                  onClick={() =>
                    setAnswers({
                      ...answers,
                      [currentQuestion.id]: index,
                    })
                  }
                  className={`w-full rounded-xl border p-5 text-left transition ${
                    answers[currentQuestion.id] === index
                      ? "border-emerald-600 bg-emerald-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {String.fromCharCode(65 + index)}.
                  {" "}
                  {option}
                </button>

              )
            )}

          </div>

        </div>

        {/* Navigation */}

        <div className="mt-8 flex flex-wrap justify-between gap-4">

          <button
            disabled={current === 0}
            onClick={() =>
              setCurrent(current - 1)
            }
            className="rounded-lg border px-5 py-3 disabled:opacity-50 flex items-center gap-2"
          >

            <ChevronLeft size={18} />

            Previous

          </button>

          <div className="flex gap-3">

            <button
              onClick={() =>
                setReview((prev) =>
                  prev.includes(currentQuestion.id)
                    ? prev
                    : [...prev, currentQuestion.id]
                )
              }
              className="rounded-lg border px-5 py-3 flex items-center gap-2"
            >

              <Flag size={18} />

              Mark for Review

            </button>

            <button
              className="rounded-lg bg-blue-600 text-white px-5 py-3 flex items-center gap-2"
            >

              <Save size={18} />

              Save

            </button>

            <button
              disabled={
                current ===
                questions.length - 1
              }
              onClick={() =>
                setCurrent(current + 1)
              }
              className="rounded-lg bg-emerald-600 text-white px-5 py-3 disabled:opacity-50 flex items-center gap-2"
            >

              Next

              <ChevronRight size={18} />

            </button>

          </div>

        </div>

                {/* Bottom Dashboard */}

        <div className="mt-10 grid xl:grid-cols-4 gap-6">

          {/* Question Palette */}

          <div className="xl:col-span-3 rounded-2xl border bg-white shadow-sm p-6">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold">
                Question Palette
              </h2>

              <span className="text-sm text-slate-500">
                Click any question to navigate
              </span>

            </div>

            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">

              {questions.map((question, index) => {

                const answered =
                  answers[question.id] !== undefined;

                const marked =
                  review.includes(question.id);

                const active =
                  current === index;

                return (

                  <button
                    key={question.id}
                    onClick={() => setCurrent(index)}
                    className={`h-12 w-12 rounded-lg font-semibold transition-all

                    ${
                      active
                        ? "ring-2 ring-blue-600 bg-blue-600 text-white"
                        : answered
                        ? "bg-emerald-600 text-white"
                        : marked
                        ? "bg-yellow-500 text-white"
                        : "bg-slate-200 hover:bg-slate-300"
                    }`}
                  >

                    {index + 1}

                  </button>

                );

              })}

            </div>

            {/* Legend */}

            <div className="mt-8 grid md:grid-cols-4 gap-4">

              <div className="flex items-center gap-3">

                <div className="w-5 h-5 rounded bg-emerald-600"></div>

                <span>Answered</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-5 h-5 rounded bg-yellow-500"></div>

                <span>Marked for Review</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-5 h-5 rounded bg-slate-300"></div>

                <span>Not Answered</span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-5 h-5 rounded bg-blue-600"></div>

                <span>Current Question</span>

              </div>

            </div>

          </div>

          {/* Live Summary */}

          <div className="rounded-2xl border bg-white shadow-sm">

            <div className="border-b p-6">

              <h2 className="text-xl font-bold">

                Test Summary

              </h2>

            </div>

            <div className="space-y-5 p-6">

              <div className="flex justify-between">

                <span>Total Questions</span>

                <span>{questions.length}</span>

              </div>

              <div className="flex justify-between">

                <span>Answered</span>

                <span className="text-emerald-600 font-semibold">

                  {Object.keys(answers).length}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Review</span>

                <span className="text-yellow-600 font-semibold">

                  {review.length}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Remaining</span>

                <span className="text-red-600 font-semibold">

                  {questions.length -
                    Object.keys(answers).length}

                </span>

              </div>

              <hr />

              <button className="w-full rounded-lg border py-3">

                Pause Test

              </button>

              <button className="w-full rounded-lg bg-blue-600 text-white py-3">

                Save Progress

              </button>

              <button className="w-full rounded-lg bg-red-600 text-white py-3">

                Submit Test

              </button>

            </div>

          </div>

        </div>

        {/* Auto Save Status */}

        <div className="mt-8 rounded-xl border bg-white p-5 shadow-sm">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <div className="flex items-center gap-3">

              <CheckCircle
                size={20}
                className="text-emerald-600"
              />

              <span className="font-medium">

                Answers are automatically saved every 30 seconds.

              </span>

            </div>

            <span className="text-sm text-slate-500">

              Last Saved: Just now

            </span>

          </div>

        </div>

                {/* Submit Confirmation Modal */}

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">

            <div className="border-b p-6">

              <h2 className="text-2xl font-bold">
                Submit Mock Test
              </h2>

              <p className="mt-2 text-slate-500">
                Please review your test summary before submission.
              </p>

            </div>

            <div className="space-y-5 p-6">

              <div className="flex justify-between">

                <span>Total Questions</span>

                <span>{questions.length}</span>

              </div>

              <div className="flex justify-between">

                <span>Answered</span>

                <span className="text-green-600">

                  {Object.keys(answers).length}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Marked for Review</span>

                <span className="text-yellow-600">

                  {review.length}

                </span>

              </div>

              <div className="flex justify-between">

                <span>Unanswered</span>

                <span className="text-red-600">

                  {questions.length - Object.keys(answers).length}

                </span>

              </div>

            </div>

            <div className="flex justify-end gap-4 border-t p-6">

              <button className="rounded-lg border px-5 py-2">

                Cancel

              </button>

              <button className="rounded-lg bg-red-600 px-5 py-2 text-white">

                Submit Test

              </button>

            </div>

          </div>

        </div>

        {/* Result Dashboard */}

        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-3xl font-bold">

            Test Result

          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">

            {[
              ["Score", "184 / 200"],
              ["Accuracy", "92%"],
              ["Rank", "#18"],
              ["Percentile", "98.4%"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="rounded-xl border p-6 text-center"
              >

                <p className="text-slate-500">

                  {title}

                </p>

                <h3 className="mt-4 text-4xl font-bold text-emerald-600">

                  {value}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* Subject Analysis */}

        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">

            Subject-wise Performance

          </h2>

          <div className="space-y-6">

            {[
              ["Tamil", 96],
              ["History", 90],
              ["Polity", 94],
              ["Science", 86],
              ["Geography", 88],
              ["Economy", 82],
              ["Current Affairs", 91],
            ].map(([subject, score]) => (

              <div key={subject}>

                <div className="mb-2 flex justify-between">

                  <span>{subject}</span>

                  <span>{score}%</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-emerald-600"
                    style={{ width: `${score}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Incorrect Questions */}

        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">

            Questions to Review

          </h2>

          <div className="space-y-6">

            {questions.map((question) => (

              <div
                key={question.id}
                className="rounded-xl border border-red-200 p-6"
              >

                <h3 className="font-semibold">

                  Q{question.id}. {question.question}

                </h3>

                <div className="mt-4 rounded-lg bg-green-50 p-4">

                  <p className="font-medium text-green-700">

                    Correct Answer

                  </p>

                  <p className="mt-2">

                    {question.options[question.answer]}

                  </p>

                </div>

                <div className="mt-4 rounded-lg bg-blue-50 p-4">

                  <p className="font-medium text-blue-700">

                    Explanation

                  </p>

                  <p className="mt-2 text-slate-700">

                    Detailed explanation for this question will be displayed
                    here, including TNPSC concepts, textbook references, and
                    important exam tips.

                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* AI Feedback */}

        <section className="mt-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white">

          <h2 className="text-3xl font-bold">

            AI Performance Report

          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Strength",
                text: "Excellent performance in Tamil, Polity, and Current Affairs.",
              },
              {
                title: "Needs Improvement",
                text: "Practice Economy and Science to improve overall score.",
              },
              {
                title: "Recommendation",
                text: "Attempt three full-length mock tests and revise weak subjects this week.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur"
              >

                <h3 className="text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-4 text-emerald-100">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Result Actions */}

        <section className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-blue-600 px-6 py-3 text-white">

            Download Scorecard

          </button>

          <button className="rounded-xl bg-emerald-600 px-6 py-3 text-white">

            Review Answers

          </button>

          <button className="rounded-xl bg-purple-600 px-6 py-3 text-white">

            Retake Test

          </button>

          <button className="rounded-xl border px-6 py-3">

            Back to Dashboard

          </button>

        </section>

      </main>

    </div>

  );

}