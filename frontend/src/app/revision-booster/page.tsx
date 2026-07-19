"use client";

import { useState } from "react";
import {
  Brain,
  CalendarDays,
  RotateCcw,
  Target,
  BarChart3,
 Bell,
  Download,
  Search,
  Filter,
} from "lucide-react";

const revisionPlans = [
  {
    id: 1,
    subject: "Polity",
    topic: "Fundamental Rights",
    priority: "High",
    due: "Today",
  },
  {
    id: 2,
    subject: "History",
    topic: "Sangam Age",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    id: 3,
    subject: "Science",
    topic: "Human Digestive System",
    priority: "High",
    due: "2 Days",
  },
  {
    id: 4,
    subject: "Economy",
    topic: "Inflation",
    priority: "Low",
    due: "3 Days",
  },
];

export default function RevisionBoosterPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Revision Booster
          </h1>

          <p className="mt-2 text-slate-500">
            Get AI-powered revision plans, smart schedules, and personalized recommendations.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Revision Plan

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Today's Revisions",
            value: "12",
            icon: CalendarDays,
          },
          {
            title: "Weak Topics",
            value: "18",
            icon: Target,
          },
          {
            title: "Revision Score",
            value: "91%",
            icon: BarChart3,
          },
          {
            title: "AI Plans",
            value: "36",
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
              placeholder="Search revision topics..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Today's Revision Plan */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Today's Revision Plan
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {revisionPlans.map((plan) => (

            <div
              key={plan.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {plan.topic}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {plan.subject} • Due: {plan.due}
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

      {/* Spaced Repetition */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <RotateCcw
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Spaced Repetition Planner
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <RotateCcw
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Revision Timeline
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate a calendar or timeline showing revision intervals.
            </p>

          </div>

        </div>

      </div>

            {/* Weak Topic Recommendations */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Target
            size={24}
            className="text-red-500"
          />

          <h2 className="text-2xl font-bold">
            Weak Topic Recommendations
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            ["Indian Economy", "Needs Immediate Revision"],
            ["Fundamental Duties", "Practice More MCQs"],
            ["Human Anatomy", "Revise Important Diagrams"],
            ["Tamil Grammar", "Improve Accuracy"],
          ].map(([topic, advice]) => (

            <div
              key={topic}
              className="flex items-center justify-between rounded-xl border p-4"
            >

              <div>

                <h3 className="font-semibold">
                  {topic}
                </h3>

                <p className="text-sm text-slate-500">
                  {advice}
                </p>

              </div>

              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
                Revise
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Progress & Reminders */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Revision Progress
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Completed", "78%"],
              ["Pending", "15%"],
              ["Overdue", "7%"],
            ].map(([label, value]) => (

              <div key={label}>

                <div className="mb-2 flex justify-between">

                  <span>{label}</span>

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

          <div className="flex items-center gap-3 border-b p-6">

            <Bell
              size={24}
              className="text-amber-500"
            />

            <h2 className="text-2xl font-bold">
              Revision Reminders
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "08:00 AM - Revise Polity",
              "01:00 PM - Practice Aptitude",
              "06:00 PM - Current Affairs",
              "09:00 PM - Quick Revision",
            ].map((reminder) => (

              <div
                key={reminder}
                className="rounded-xl border p-4"
              >
                {reminder}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Revision Insights */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Revision Insights
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Revise History every 3 days to improve long-term retention.",
              "Focus on Polity and Economy this week based on recent test results.",
              "Spend 30 minutes daily on weak topics before attempting mock tests.",
              "Maintain your current revision streak to maximize exam readiness.",
            ].map((insight) => (

              <div
                key={insight}
                className="rounded-xl bg-white/10 p-4"
              >
                {insight}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Weekly Revision Calendar */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Weekly Revision Calendar
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <CalendarDays
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Weekly Planner
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate a calendar component to display your revision schedule.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Plan
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Schedule
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate New AI Plan
        </button>

      </div>

    </div>

  );

}