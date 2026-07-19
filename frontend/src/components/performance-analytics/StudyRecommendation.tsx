"use client";

import {
  BookOpen,
  Brain,
  Clock,
  Star,
  Target,
} from "lucide-react";

import {
  StudyRecommendation as StudyRecommendationData,
} from "@/services/performanceAnalyticsService";

interface Props {
  recommendations: StudyRecommendationData[];
}

function getPriorityColor(priority: string) {
  switch (priority.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-700";

    case "medium":
      return "bg-orange-100 text-orange-700";

    case "low":
      return "bg-green-100 text-green-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
}

function getPriorityIcon(priority: string) {
  switch (priority.toLowerCase()) {
    case "high":
      return <Target className="h-6 w-6 text-red-600" />;

    case "medium":
      return <Clock className="h-6 w-6 text-orange-600" />;

    case "low":
      return <Star className="h-6 w-6 text-green-600" />;

    default:
      return <BookOpen className="h-6 w-6 text-blue-600" />;
  }
}

export default function StudyRecommendation({
  recommendations,
}: Props) {
  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-2xl font-bold">
          AI Study Recommendations
        </h2>

        <p className="text-gray-500">
          Personalized recommendations generated from your
          performance analytics.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                {getPriorityIcon(item.priority)}

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.subject}
                  </h3>

                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getPriorityColor(
                      item.priority
                    )}`}
                  >
                    {item.priority} Priority
                  </span>

                </div>

              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-600">
              {item.recommendation}
            </p>

            <div className="mt-6 rounded-xl bg-blue-50 p-4">

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-600">
                  Recommended Study Hours
                </span>

                <span className="text-xl font-bold text-blue-700">
                  {item.recommended_hours} hrs
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="rounded-2xl bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 p-8 text-white shadow-lg">

        <div className="flex items-start gap-4">

          <Brain className="mt-1 h-9 w-9" />

          <div>

            <h3 className="text-2xl font-bold">
              AI Study Plan
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              Prioritize high-priority subjects first, allocate
              your recommended study hours consistently each day,
              revise completed topics weekly, and attempt mock
              tests regularly. Maintaining a balanced study plan
              and reviewing weak areas will steadily improve your
              TNPSC examination performance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}