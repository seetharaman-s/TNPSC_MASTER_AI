"use client";

import {
  Target,
  Calendar,
  Trophy,
  CheckCircle2,
} from "lucide-react";

import {
  Goal,
} from "@/services/careerGuidanceService";

interface Props {
  goals: Goal[];
}

export default function GoalTracker({
  goals,
}: Props) {
  function getProgressColor(progress: number) {
    if (progress >= 80) {
      return "bg-green-600";
    }

    if (progress >= 50) {
      return "bg-yellow-500";
    }

    return "bg-red-500";
  }

  function getStatusBadge(goal: Goal) {
    if (goal.completed) {
      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          Completed
        </span>
      );
    }

    if (goal.progress_percentage >= 80) {
      return (
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          Nearly Complete
        </span>
      );
    }

    return (
      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
        In Progress
      </span>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <Target className="h-7 w-7 text-purple-600" />

        <div>
          <h2 className="text-2xl font-bold">
            Goal Tracker
          </h2>

          <p className="text-gray-500">
            Monitor your study goals and stay focused on your TNPSC preparation.
          </p>
        </div>
      </div>

      {/* Goal Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        {goals.map((goal) => (
          <div
            key={goal.goal_id}
            className="rounded-xl border border-gray-200 p-5 transition hover:border-purple-300 hover:shadow-md"
          >

            <div className="mb-4 flex items-start justify-between">

              <div>
                <h3 className="text-lg font-semibold">
                  {goal.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {goal.description}
                </p>
              </div>

              {goal.completed && (
                <Trophy className="h-7 w-7 text-yellow-500" />
              )}

            </div>

            <div className="mb-4 flex items-center justify-between">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />

                <span>
                  Target:{" "}
                  {new Date(goal.target_date).toLocaleDateString()}
                </span>
              </div>

              {getStatusBadge(goal)}

            </div>

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm font-medium">
                Progress
              </span>

              <span className="font-semibold text-purple-700">
                {goal.progress_percentage}%
              </span>

            </div>

            <div className="h-3 rounded-full bg-gray-200">

              <div
                className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(
                  goal.progress_percentage
                )}`}
                style={{
                  width: `${goal.progress_percentage}%`,
                }}
              />

            </div>

            {goal.completed && (
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-green-700">
                <CheckCircle2 className="h-5 w-5" />

                <span className="font-medium">
                  Goal Achieved
                </span>
              </div>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}