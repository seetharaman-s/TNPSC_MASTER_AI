"use client";

import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  Info,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import {
  AIInsight,
} from "@/services/performanceAnalyticsService";

interface Props {
  insights: AIInsight[];
}

function getIcon(priority: string) {
  switch (priority.toLowerCase()) {
    case "high":
      return (
        <AlertTriangle className="h-6 w-6 text-red-600" />
      );

    case "medium":
      return (
        <TrendingUp className="h-6 w-6 text-orange-600" />
      );

    case "low":
      return (
        <Info className="h-6 w-6 text-blue-600" />
      );

    default:
      return (
        <Lightbulb className="h-6 w-6 text-indigo-600" />
      );
  }
}

function getBadge(priority: string) {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-700";

    case "medium":
      return "bg-orange-100 text-orange-700";

    case "low":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-indigo-100 text-indigo-700";
  }
}

export default function AIInsights({
  insights,
}: Props) {
  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          AI Insights
        </h2>

        <p className="text-gray-500">
          Personalized insights generated using
          your learning behaviour and performance.
        </p>

      </div>

      <div className="rounded-2xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-8 text-white shadow-lg">

        <div className="flex items-center gap-4">

          <Brain className="h-10 w-10" />

          <div>

            <h3 className="text-2xl font-bold">
              Smart Learning Assistant
            </h3>

            <p className="mt-1 text-blue-100">
              AI continuously analyzes your study
              patterns and recommends improvements.
            </p>

          </div>

        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {insights.map((insight, index) => (

          <div
            key={index}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                {getIcon(insight.priority)}

                <div>

                  <h3 className="text-lg font-semibold">
                    {insight.title}
                  </h3>

                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getBadge(
                      insight.priority
                    )}`}
                  >
                    {insight.priority} Priority
                  </span>

                </div>

              </div>

              <Sparkles className="h-6 w-6 text-indigo-500" />

            </div>

            <p className="mt-5 leading-7 text-gray-600">
              {insight.description}
            </p>

          </div>

        ))}

      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-xl font-bold">
          AI Recommendations
        </h3>

        <div className="space-y-5">

          <div className="flex gap-4">

            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

            <p>
              Focus more on subjects with lower
              accuracy before attempting advanced
              mock tests.
            </p>

          </div>

          <div className="flex gap-4">

            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

            <p>
              Maintain a consistent daily study
              schedule to improve retention.
            </p>

          </div>

          <div className="flex gap-4">

            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

            <p>
              Revise incorrect answers after every
              mock test to reduce repeated mistakes.
            </p>

          </div>

          <div className="flex gap-4">

            <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

            <p>
              Practice previous TNPSC papers under
              exam conditions to improve speed and
              confidence.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}