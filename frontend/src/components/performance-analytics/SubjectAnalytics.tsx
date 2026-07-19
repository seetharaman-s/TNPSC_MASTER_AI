"use client";

import {
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react";

import { SubjectPerformance } from "@/services/performanceAnalyticsService";

interface Props {
  subjects: SubjectPerformance[];
}

interface ProgressProps {
  label: string;
  value: number;
  color: string;
}

function ProgressBar({
  label,
  value,
  color,
}: ProgressProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className={`h-3 rounded-full transition-all duration-700 ${color}`}
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

export default function SubjectAnalytics({
  subjects,
}: Props) {
  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold">
          Subject Analytics
        </h2>

        <p className="text-gray-500">
          Subject-wise AI performance analysis.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">

        {subjects.map((subject) => (

          <div
            key={subject.subject}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold">
                  {subject.subject}
                </h3>

                <p className="text-sm text-gray-500">
                  AI Subject Performance
                </p>

              </div>

              <BookOpen className="h-8 w-8 text-blue-600" />

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-blue-50 p-4">

                <Target className="mb-2 h-5 w-5 text-blue-600" />

                <p className="text-sm text-gray-500">
                  Accuracy
                </p>

                <p className="text-2xl font-bold">
                  {subject.accuracy}%
                </p>

              </div>

              <div className="rounded-xl bg-green-50 p-4">

                <Brain className="mb-2 h-5 w-5 text-green-600" />

                <p className="text-sm text-gray-500">
                  Mastery
                </p>

                <p className="text-2xl font-bold">
                  {subject.mastery_score}%
                </p>

              </div>

              <div className="rounded-xl bg-purple-50 p-4">

                <CheckCircle className="mb-2 h-5 w-5 text-purple-600" />

                <p className="text-sm text-gray-500">
                  Correct
                </p>

                <p className="text-2xl font-bold">
                  {subject.questions_correct}
                </p>

              </div>

              <div className="rounded-xl bg-orange-50 p-4">

                <Clock className="mb-2 h-5 w-5 text-orange-600" />

                <p className="text-sm text-gray-500">
                  Study Hours
                </p>

                <p className="text-2xl font-bold">
                  {subject.study_hours}
                </p>

              </div>

            </div>

            <div className="mt-8 space-y-5">

              <ProgressBar
                label="Accuracy"
                value={subject.accuracy}
                color="bg-blue-600"
              />

              <ProgressBar
                label="Mastery Score"
                value={subject.mastery_score}
                color="bg-green-600"
              />

                            <ProgressBar
                label="AI Confidence"
                value={subject.ai_confidence}
                color="bg-purple-600"
              />

              <ProgressBar
                label="Questions Attempted"
                value={
                  Math.min(
                    (subject.questions_attempted / 200) * 100,
                    100
                  )
                }
                color="bg-orange-600"
              />

            </div>

            {/* Subject Summary */}

            <div className="mt-8 rounded-2xl bg-gray-50 p-5">

              <h4 className="mb-4 text-lg font-semibold">
                Subject Summary
              </h4>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-sm text-gray-500">
                    Questions Attempted
                  </p>

                  <p className="text-xl font-bold">
                    {subject.questions_attempted}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Questions Correct
                  </p>

                  <p className="text-xl font-bold">
                    {subject.questions_correct}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Study Hours
                  </p>

                  <p className="text-xl font-bold">
                    {subject.study_hours}
                  </p>

                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    AI Confidence
                  </p>

                  <p className="text-xl font-bold text-indigo-600">
                    {subject.ai_confidence}%
                  </p>

                </div>

              </div>

            </div>

            {/* AI Recommendation */}

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-5 text-white">

              <h4 className="mb-3 text-lg font-semibold">
                AI Recommendation
              </h4>

              <p className="text-sm leading-6 text-blue-100">
                {subject.mastery_score >= 80
                  ? "Excellent mastery. Continue revising this subject weekly to maintain your performance."
                  : subject.mastery_score >= 60
                  ? "Good progress. Focus on solving more practice questions to improve mastery."
                  : "This subject requires additional attention. Increase study hours, revise fundamentals, and attempt daily quizzes."}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}