"use client";

import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
} from "lucide-react";

import {
  DailyStudyPlan,
} from "@/services/careerGuidanceService";

interface Props {
  plan: DailyStudyPlan;
}

export default function StudyPlanCard({
  plan,
}: Props) {
  function getPriorityStyle(priority: string) {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";

      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";

      case "low":
        return "bg-green-100 text-green-700 border-green-200";

      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">
        <Calendar className="h-7 w-7 text-blue-600" />

        <div>
          <h2 className="text-2xl font-bold">
            Today's Study Plan
          </h2>

          <p className="text-gray-500">
            Complete your planned study tasks for today.
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mb-8">

        <div className="mb-2 flex items-center justify-between">
          <span className="font-medium">
            Daily Progress
          </span>

          <span className="font-bold text-blue-600">
            {plan.completion_percentage}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-gray-200">
          <div
            className="h-3 rounded-full bg-blue-600 transition-all duration-500"
            style={{
              width: `${plan.completion_percentage}%`,
            }}
          />
        </div>

      </div>

      {/* Tasks */}

      <div className="space-y-4">

        {plan.tasks.map((task) => (
          <div
            key={task.task_id}
            className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-sm"
          >

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-start gap-4">

                {task.completed ? (
                  <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />
                ) : (
                  <Circle className="mt-1 h-6 w-6 text-gray-400" />
                )}

                <div>
                  <h3 className="text-lg font-semibold">
                    {task.title}
                  </h3>

                  <p className="mt-1 text-gray-600">
                    {task.subject}
                  </p>

                  <p className="text-sm text-gray-500">
                    Topic: {task.topic}
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
                  <Clock className="h-4 w-4 text-gray-600" />

                  <span className="text-sm font-medium">
                    {task.duration_minutes} min
                  </span>
                </div>

                <span
                  className={`rounded-full border px-3 py-1 text-sm font-semibold ${getPriorityStyle(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}