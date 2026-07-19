"use client";

import { CheckCircle2, Circle, Target } from "lucide-react";

import {
  DailyGoal,
} from "@/services/adaptiveLearningService";

interface Props {
  goals: DailyGoal[];
}

export default function DailyGoals({
  goals,
}: Props) {
  const completedGoals = goals.filter(
    (goal) => goal.completed
  ).length;

  const totalGoals = goals.length;

  const progress =
    totalGoals === 0
      ? 0
      : Math.round(
          (completedGoals / totalGoals) * 100
        );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Target className="h-7 w-7 text-blue-600" />

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Daily Goals
            </h2>

            <p className="text-sm text-gray-500">
              AI-generated study goals for today.
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-blue-50 px-4 py-2 text-center">
          <p className="text-xs uppercase tracking-wide text-blue-600">
            Progress
          </p>

          <p className="text-lg font-bold text-blue-700">
            {completedGoals}/{totalGoals}
          </p>
        </div>

      </div>

      {/* Progress Bar */}

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Daily Completion
          </span>

          <span className="font-semibold text-gray-700">
            {progress}%
          </span>
        </div>

        <div className="h-3 w-full rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-blue-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Empty State */}

      {goals.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center">
          <p className="text-gray-600">
            No daily goals available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {goals.map((goal, index) => (
            <div
              key={`${goal.title}-${index}`}
              className={`flex items-start gap-4 rounded-xl border p-4 transition-all ${
                goal.completed
                  ? "border-green-200 bg-green-50"
                  : "border-gray-200 bg-white hover:shadow-md"
              }`}
            >
              <div className="mt-1 flex-shrink-0">
                {goal.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                ) : (
                  <Circle className="h-6 w-6 text-gray-400" />
                )}
              </div>

              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    goal.completed
                      ? "text-green-700 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {goal.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {goal.description}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  goal.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {goal.completed
                  ? "Completed"
                  : "Pending"}
              </span>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}