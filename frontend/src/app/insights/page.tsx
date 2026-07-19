"use client";

import {
  Brain,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Clock,
  Target,
  Award,
  BookOpen,
  CalendarDays,
  Download,
} from "lucide-react";

export default function InsightsPage() {

  const mastery = [
    { subject: "Tamil", progress: 95 },
    { subject: "Science", progress: 91 },
    { subject: "History", progress: 87 },
    { subject: "Polity", progress: 81 },
    { subject: "Geography", progress: 75 },
    { subject: "Economy", progress: 69 },
  ];

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Performance Insights
          </h1>

          <p className="mt-2 text-slate-500">
            Analyze your TNPSC preparation with AI-powered insights and performance analytics.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Report

        </button>

      </div>

      {/* Overview */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Overall Score",
            value: "84%",
            icon: Target,
          },
          {
            title: "Study Hours",
            value: "486h",
            icon: Clock,
          },
          {
            title: "Study Streak",
            value: "29 Days",
            icon: Award,
          },
          {
            title: "Predicted Score",
            value: "178 / 200",
            icon: Brain,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div className="rounded-xl bg-indigo-100 p-4">

                  <Icon
                    size={28}
                    className="text-indigo-600"
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* AI Summary */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={32} />

            <h2 className="text-3xl font-bold">
              AI Performance Summary
            </h2>

          </div>

          <p className="mt-4 text-indigo-100">
            Your consistency is excellent. Tamil, Science, and History are strong areas.
            Increase focus on Economy and Geography to improve your predicted score.
          </p>

        </div>

      </div>

      {/* Subject Mastery */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject Mastery
          </h2>

        </div>

        <div className="space-y-6 p-6">

          {mastery.map((item) => (

            <div key={item.subject}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {item.subject}
                </span>

                <span>
                  {item.progress}%
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Weekly & Monthly Trends */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <TrendingUp
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Weekly Performance
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center p-8">

            <div className="text-center">

              <BarChart3
                size={60}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Weekly Progress Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts LineChart.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <CalendarDays
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Monthly Analytics
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center p-8">

            <div className="text-center">

              <PieChart
                size={60}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Monthly Distribution
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with PieChart or AreaChart.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Time Spent */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Time Spent by Subject
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-3">

          {[
            ["History", "92 Hours"],
            ["Science", "86 Hours"],
            ["Tamil", "75 Hours"],
            ["Polity", "68 Hours"],
            ["Geography", "59 Hours"],
            ["Economy", "52 Hours"],
          ].map(([subject, hours]) => (

            <div
              key={subject}
              className="rounded-xl border p-5"
            >

              <BookOpen
                size={28}
                className="mb-3 text-indigo-600"
              />

              <h3 className="font-semibold">
                {subject}
              </h3>

              <p className="mt-2 text-slate-500">
                {hours}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* AI Strengths & Weaknesses */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <TrendingUp
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Strengths
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Tamil Grammar",
              "General Science",
              "Modern History",
              "Current Affairs",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border bg-green-50 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <TrendingDown
              size={24}
              className="text-red-600"
            />

            <h2 className="text-2xl font-bold">
              Needs Improvement
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Indian Economy",
              "Geography Maps",
              "Environment",
              "Constitution Articles",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border bg-red-50 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              Personalized Recommendations
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Allocate one extra hour daily for Economy.",
              "Revise Geography using maps twice a week.",
              "Continue mock tests every weekend.",
              "Maintain your current study streak.",
            ].map((tip) => (

              <div
                key={tip}
                className="rounded-xl bg-white/10 p-4"
              >
                {tip}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Study Streak */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Study Consistency
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Current Streak", "29 Days"],
            ["Best Streak", "63 Days"],
            ["Study Days", "186"],
            ["Consistency", "93%"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Award
                size={34}
                className="mx-auto mb-3 text-yellow-500"
              />

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Share Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Download PDF
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          View Detailed Analytics
        </button>

      </div>

    </div>

  );

}