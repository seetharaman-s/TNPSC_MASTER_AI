"use client";

import { useState } from "react";
import {
  Target,
  CalendarDays,
  Clock3,
  BarChart3,
  Brain,
  TrendingUp,
  Download,
  Search,
  Filter,
} from "lucide-react";

const strategyPlans = [
  {
    id: 1,
    subject: "Polity",
    priority: "High",
    hours: "2.5 hrs/day",
    target: "95%",
  },
  {
    id: 2,
    subject: "History",
    priority: "Medium",
    hours: "1.5 hrs/day",
    target: "90%",
  },
  {
    id: 3,
    subject: "Science",
    priority: "High",
    hours: "2 hrs/day",
    target: "92%",
  },
  {
    id: 4,
    subject: "Economy",
    priority: "Low",
    hours: "1 hr/day",
    target: "85%",
  },
];

export default function ExamStrategyPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Exam Strategy Planner
          </h1>

          <p className="mt-2 text-slate-500">
            Build a personalized study strategy with AI-powered planning,
            readiness tracking, and score prediction.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Strategy

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Study Plan",
            value: "30 Days",
            icon: CalendarDays,
          },
          {
            title: "AI Readiness",
            value: "89%",
            icon: TrendingUp,
          },
          {
            title: "Priority Topics",
            value: "26",
            icon: Target,
          },
          {
            title: "Predicted Score",
            value: "176/200",
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

      {/* Search */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex flex-wrap gap-4">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-4 top-3 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search strategy or subject..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Personalized Strategy */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Personalized Strategy Plan
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {strategyPlans.map((plan) => (

            <div
              key={plan.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {plan.subject}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {plan.hours} • Target Score: {plan.target}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    plan.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : plan.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {plan.priority}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Time Allocation Planner */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Clock3
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Time Allocation Planner
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Clock3
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Daily Time Distribution
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with a PieChart or Timeline to visualize daily study allocation.
            </p>

          </div>

        </div>

      </div>

            {/* Subject Priority Matrix */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <BarChart3
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Subject Priority Matrix
          </h2>

        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">

          {[
            ["Polity", "High Priority", "95%"],
            ["Science", "High Priority", "92%"],
            ["History", "Medium Priority", "90%"],
            ["Economy", "Low Priority", "85%"],
          ].map(([subject, priority, target]) => (

            <div
              key={subject}
              className="rounded-xl border p-5"
            >
              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {subject}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {priority}
                  </p>

                </div>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  {target}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Score Prediction */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Score Prediction
            </h2>

          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">

            <h3 className="text-5xl font-bold">
              176 / 200
            </h3>

            <p className="mt-4 leading-7 text-indigo-100">
              Based on your recent mock tests, revision consistency,
              subject mastery, and practice accuracy, the predicted
              TNPSC Group 4 score is approximately <strong>176/200</strong>.
            </p>

          </div>

        </div>

      </div>

      {/* Readiness Dashboard & Revision Checklist */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Readiness Dashboard
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Preparation", "89%"],
              ["Revision", "82%"],
              ["Mock Tests", "91%"],
              ["Confidence", "87%"],
            ].map(([title, value]) => (

              <div key={title}>

                <div className="mb-2 flex justify-between">

                  <span>{title}</span>

                  <span>{value}</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-indigo-600"
                    style={{ width: value }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Last Week Revision Checklist
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "✔ Complete Polity Revision",
              "✔ Solve 2 Mock Tests",
              "✔ Revise Current Affairs",
              "□ Practice Aptitude",
              "□ Review Weak Topics",
            ].map((task) => (

              <div
                key={task}
                className="rounded-xl border p-4"
              >
                {task}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Exam Day Strategy */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Exam Day Strategy Guide
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Start with your strongest subjects to build confidence.",
            "Skip lengthy questions and return later.",
            "Allocate time equally across all sections.",
            "Reserve the final 15 minutes for revision.",
            "Avoid changing answers unless you're certain.",
          ].map((tip) => (

            <div
              key={tip}
              className="rounded-xl border bg-slate-50 p-5"
            >
              {tip}
            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Strategy
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Planner
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate New AI Strategy
        </button>

      </div>

    </div>

  );

}