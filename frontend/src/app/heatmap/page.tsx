"use client";

import {
  CalendarDays,
  Flame,
  Activity,
  Brain,
  Filter,
  Download,
  Target,
  BarChart3,
  Award,
} from "lucide-react";

export default function HeatmapPage() {

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const heatmap = Array.from({ length: 365 }, (_, index) => ({
    id: index,
    level: Math.floor(Math.random() * 5),
  }));

  const colors = [
    "bg-slate-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-500",
    "bg-green-700",
  ];

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Study Heatmap
          </h1>

          <p className="mt-2 text-slate-500">
            Visualize your daily study consistency, streaks, and learning activity throughout the year.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Report

        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Current Streak",
            value: "29 Days",
            icon: Flame,
          },
          {
            title: "Study Days",
            value: "186",
            icon: CalendarDays,
          },
          {
            title: "Consistency",
            value: "93%",
            icon: Award,
          },
          {
            title: "Activity Score",
            value: "88%",
            icon: Activity,
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

      {/* Filters */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex flex-wrap items-center gap-4">

          <Filter
            size={22}
            className="text-indigo-600"
          />

          {[
            "All Subjects",
            "Tamil",
            "History",
            "Science",
            "Polity",
            "Geography",
            "Economy",
          ].map((item) => (

            <button
              key={item}
              className="rounded-full border px-5 py-2 transition hover:bg-indigo-50"
            >
              {item}
            </button>

          ))}

        </div>

      </div>

      {/* Heatmap */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Yearly Study Activity
          </h2>

        </div>

        <div className="overflow-auto p-6">

          <div className="mb-6 flex justify-between text-sm text-slate-500">

            {months.map((month) => (

              <span key={month}>
                {month}
              </span>

            ))}

          </div>

          <div className="grid grid-cols-53 gap-1">

            {heatmap.map((cell) => (

              <div
                key={cell.id}
                className={`h-4 w-4 rounded-sm ${colors[cell.level]}`}
                title={`Day ${cell.id + 1}`}
              />

            ))}

          </div>

        </div>

      </div>

            {/* Weekly Consistency */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <BarChart3
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Weekly Consistency
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center p-8">

            <div className="text-center">

              <BarChart3
                size={60}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Weekly Activity Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts BarChart.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Activity
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Monthly Study Intensity
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center p-8">

            <div className="text-center">

              <Activity
                size={60}
                className="mx-auto mb-4 text-green-600"
              />

              <h3 className="text-xl font-semibold">
                Monthly Intensity Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts AreaChart.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Goal Completion */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Target
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Goal Completion
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Daily Goals", "96%"],
            ["Weekly Goals", "88%"],
            ["Monthly Goals", "84%"],
            ["Overall Goals", "89%"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Target
                size={34}
                className="mx-auto mb-3 text-indigo-600"
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

      {/* AI Insights */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Consistency Insights
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "You study most consistently on weekdays.",
              "Weekend activity is lower than average.",
              "Maintaining your current streak can improve long-term retention.",
              "Aim for at least one focused session every day.",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white/10 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Activity Summary */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Activity Summary
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Longest Streak", "63 Days"],
            ["Current Streak", "29 Days"],
            ["Study Sessions", "842"],
            ["Total Hours", "486h"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Flame
                size={34}
                className="mx-auto mb-3 text-orange-500"
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
          Share Activity
        </button>

        <button className="rounded-xl border px-6 py-3">
          Download Report
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          View Full History
        </button>

      </div>

    </div>

  );

}