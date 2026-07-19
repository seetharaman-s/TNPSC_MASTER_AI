"use client";

import { useState } from "react";
import {
  Target,
  CalendarDays,
  Clock,
  BarChart3,
  CheckSquare,
  Brain,
  Trophy,
  Zap,
  Download,
  Search,
  Filter,
} from "lucide-react";

const missions = [
  {
    id: 1,
    title: "Complete Polity Revision",
    progress: "80%",
    priority: "High",
  },
  {
    id: 2,
    title: "Solve 50 Aptitude MCQs",
    progress: "45%",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Read Today's Current Affairs",
    progress: "100%",
    priority: "High",
  },
  {
    id: 4,
    title: "Practice Previous Year Questions",
    progress: "20%",
    priority: "Low",
  },
];

export default function ExamCommandCenterPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Exam Command Center
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor your complete TNPSC preparation from one intelligent
            dashboard with AI-powered insights and daily study guidance.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Dashboard

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Preparation Score",
            value: "91%",
            icon: Target,
          },
          {
            title: "Pending Tasks",
            value: "14",
            icon: CheckSquare,
          },
          {
            title: "Exam Countdown",
            value: "84 Days",
            icon: Clock,
          },
          {
            title: "AI Readiness",
            value: "94%",
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
              placeholder="Search tasks, exams, or goals..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Daily Study Mission */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <CalendarDays
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Daily Study Mission
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {missions.map((mission) => (

            <div
              key={mission.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {mission.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Progress: {mission.progress}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    mission.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : mission.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {mission.priority}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Smart Countdown */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Clock
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Smart Exam Countdown
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Clock
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              84 Days Remaining
            </h3>

            <p className="mt-2 text-slate-500">
              Countdown to your selected TNPSC examination with milestone reminders and weekly preparation goals.
            </p>

          </div>

        </div>

      </div>

            {/* Live Preparation Analytics */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <BarChart3 size={30} />

            <h2 className="text-3xl font-bold">
              Live Preparation Analytics
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Preparation score has improved by 12% this month.",
              "Current Affairs completion reached 95%.",
              "Mock test accuracy increased to 89%.",
              "Revision consistency has improved over the last 30 days.",
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

      {/* Pending Tasks & AI Assistant */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Pending Tasks & Revision Tracker
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Revise Indian Constitution",
              "Complete Aptitude Test",
              "Read Today's Current Affairs",
              "Finish Science Revision",
            ].map((task) => (

              <div
                key={task}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{task}</span>

                <button className="rounded-lg bg-indigo-600 px-3 py-1 text-sm text-white">
                  Complete
                </button>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Brain
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              AI Exam Assistant
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Revise Polity today to maintain your progress.",
              "Practice one mock test before the weekend.",
              "Focus on Aptitude to improve your weakest subject.",
              "Review bookmarked current affairs tonight.",
            ].map((tip) => (

              <div
                key={tip}
                className="rounded-xl border p-4"
              >
                {tip}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Performance Overview */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Performance Overview
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Trophy
              size={64}
              className="mx-auto mb-4 text-amber-500"
            />

            <h3 className="text-xl font-semibold">
              Performance Dashboard
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (LineChart, BarChart, RadarChart, AreaChart)
              to visualize subject-wise scores, mock test trends, revision
              progress, and AI readiness.
            </p>

          </div>

        </div>

      </div>

      {/* Quick Actions */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Zap
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "Start Mock Test",
            "Continue Revision",
            "Open AI Tutor",
            "View Analytics",
          ].map((action) => (

            <button
              key={action}
              className="rounded-xl border p-6 text-center transition hover:bg-indigo-50"
            >
              {action}
            </button>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Dashboard
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Progress
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Launch AI Exam Assistant
        </button>

      </div>

    </div>

  );

}