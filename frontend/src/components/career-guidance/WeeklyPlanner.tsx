"use client";

import {
  CalendarDays,
  Clock,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";

import {
  WeeklyStudyPlan,
} from "@/services/careerGuidanceService";

interface Props {
  plan: WeeklyStudyPlan;
}

export default function WeeklyPlanner({
  plan,
}: Props) {
  const completionPercentage =
    plan.target_hours > 0
      ? Math.min(
          100,
          (plan.completed_hours / plan.target_hours) * 100
        )
      : 0;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <CalendarDays className="h-7 w-7 text-indigo-600" />

        <div>
          <h2 className="text-2xl font-bold">
            Weekly Study Planner
          </h2>

          <p className="text-gray-500">
            Monitor your weekly study goals and stay on track.
          </p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="mb-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <Target className="mb-3 h-7 w-7 text-blue-600" />

          <p className="text-sm text-gray-500">
            Target Hours
          </p>

          <h3 className="text-2xl font-bold text-blue-700">
            {plan.target_hours} hrs
          </h3>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <Clock className="mb-3 h-7 w-7 text-green-600" />

          <p className="text-sm text-gray-500">
            Completed
          </p>

          <h3 className="text-2xl font-bold text-green-700">
            {plan.completed_hours} hrs
          </h3>
        </div>

        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
          <TrendingUp className="mb-3 h-7 w-7 text-purple-600" />

          <p className="text-sm text-gray-500">
            Completion
          </p>

          <h3 className="text-2xl font-bold text-purple-700">
            {completionPercentage.toFixed(1)}%
          </h3>
        </div>

      </div>

      {/* Progress */}

      <div className="mb-8">

        <div className="mb-2 flex justify-between">
          <span className="font-medium">
            Weekly Progress
          </span>

          <span className="font-semibold text-indigo-600">
            {completionPercentage.toFixed(1)}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-indigo-600 transition-all duration-500"
            style={{
              width: `${completionPercentage}%`,
            }}
          />
        </div>

      </div>

      {/* Daily Overview */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

        {plan.daily_plans.map((day, index) => (
          <div
            key={`${day.date}-${index}`}
            className="rounded-xl border border-gray-200 p-5 transition hover:border-indigo-300 hover:shadow-sm"
          >
            <div className="mb-3 flex items-center justify-between">

              <h3 className="font-semibold">
                {new Date(day.date).toLocaleDateString()}
              </h3>

              <CheckCircle2
                className={`h-5 w-5 ${
                  day.completion_percentage >= 100
                    ? "text-green-600"
                    : "text-gray-300"
                }`}
              />

            </div>

            <div className="space-y-2 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Study Time
                </span>

                <span className="font-medium">
                  {day.total_study_minutes} mins
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Tasks
                </span>

                <span className="font-medium">
                  {day.tasks.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Completion
                </span>

                <span className="font-medium text-indigo-600">
                  {day.completion_percentage}%
                </span>
              </div>

            </div>

            <div className="mt-4 h-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-indigo-600"
                style={{
                  width: `${day.completion_percentage}%`,
                }}
              />
            </div>

          </div>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-xl border border-indigo-200 bg-indigo-50 p-5">
        <h3 className="mb-2 font-semibold text-indigo-700">
          Weekly Goal
        </h3>

        <p className="text-gray-700">
          Aim to complete at least{" "}
          <strong>{plan.target_hours} hours</strong> of focused
          study this week. Maintain consistency instead of relying
          on long study sessions on a single day.
        </p>
      </div>

    </div>
  );
}