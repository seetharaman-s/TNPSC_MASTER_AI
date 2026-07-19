"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckSquare,
  Timer,
  StickyNote,
  FolderOpen,
  BarChart3,
  Target,
  Brain,
  Download,
  Search,
  Filter,
} from "lucide-react";

const plannerItems = [
  {
    id: 1,
    task: "Read Current Affairs",
    time: "07:00 - 08:00",
    status: "Completed",
  },
  {
    id: 2,
    task: "Polity Revision",
    time: "09:00 - 11:00",
    status: "In Progress",
  },
  {
    id: 3,
    task: "Aptitude Practice",
    time: "02:00 - 03:30",
    status: "Pending",
  },
  {
    id: 4,
    task: "Mock Test",
    time: "06:00 - 07:30",
    status: "Pending",
  },
];

export default function ProductivityWorkspacePage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Productivity & Study Workspace
          </h1>

          <p className="mt-2 text-slate-500">
            Organize your study schedule, manage daily tasks, stay focused,
            and boost productivity with AI-powered planning tools.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Workspace

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Today's Tasks",
            value: "18",
            icon: CheckSquare,
          },
          {
            title: "Focus Time",
            value: "5h 40m",
            icon: Timer,
          },
          {
            title: "Goals Achieved",
            value: "8/10",
            icon: Target,
          },
          {
            title: "Productivity",
            value: "92%",
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
              placeholder="Search tasks or notes..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Daily Planner */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <CalendarDays
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Daily Planner & Timetable
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {plannerItems.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {item.task}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.time}
                  </p>

                </div>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  {item.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Smart Task Manager */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <CheckSquare
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Smart Task Manager
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <CheckSquare
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              AI Task Management
            </h3>

            <p className="mt-2 text-slate-500">
              Organize study tasks with priorities, reminders, deadlines,
              and automatic scheduling based on your study plan.
            </p>

          </div>

        </div>

      </div>

            {/* Pomodoro Timer */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Timer size={30} />

            <h2 className="text-3xl font-bold">
              Pomodoro Focus Timer
            </h2>

          </div>

          <div className="mt-8 text-center">

            <h3 className="text-6xl font-bold">
              25:00
            </h3>

            <p className="mt-3 text-indigo-100">
              Focus Session
            </p>

            <div className="mt-8 flex justify-center gap-4">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
                Start
              </button>

              <button className="rounded-xl border border-white px-6 py-3">
                Pause
              </button>

              <button className="rounded-xl border border-white px-6 py-3">
                Reset
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Notes & Workspace */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <StickyNote
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Sticky Notes & Quick Notes
            </h2>

          </div>

          <div className="space-y-4 p-6">

            <textarea
              rows={8}
              placeholder="Write important notes..."
              className="w-full rounded-xl border p-4"
            />

            <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white">
              Save Note
            </button>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <FolderOpen
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Personal Study Workspace
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "TNPSC Books",
              "Saved Notes",
              "Mock Test Reports",
              "Current Affairs",
              "Revision Materials",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Productivity Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Productivity Analytics
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <BarChart3
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Productivity Dashboard
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (AreaChart, LineChart, PieChart, Heatmap)
              to visualize focus time, task completion, study streaks,
              and productivity trends.
            </p>

          </div>

        </div>

      </div>

      {/* Goals & AI Coach */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Daily Goals & Habit Tracker
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Study 6 Hours",
              "Solve 100 MCQs",
              "Read Current Affairs",
              "Complete Revision",
            ].map((goal) => (

              <div
                key={goal}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{goal}</span>

                <input
                  type="checkbox"
                  className="h-5 w-5"
                />

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
              AI Productivity Coach
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Schedule difficult subjects during your peak focus hours.",
              "Take a 5-minute break after every Pomodoro session.",
              "Complete pending revisions before starting new topics.",
              "Maintain your study streak to improve consistency.",
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

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Planner
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export Notes
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Productivity Plan
        </button>

      </div>

    </div>

  );

}