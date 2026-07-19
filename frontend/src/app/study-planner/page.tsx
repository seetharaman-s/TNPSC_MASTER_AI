"use client";

import { useState } from "react";
import {
  CalendarDays,
  CheckSquare,
  Target,
  Clock3,
  BarChart3,
  Bell,
  Brain,
  Download,
  Search,
  Filter,
} from "lucide-react";

const studyTasks = [
  {
    id: 1,
    subject: "Polity",
    task: "Revise Fundamental Rights",
    duration: "60 mins",
    status: "Pending",
  },
  {
    id: 2,
    subject: "History",
    task: "Complete Sangam Age Notes",
    duration: "45 mins",
    status: "Completed",
  },
  {
    id: 3,
    subject: "Science",
    task: "Practice Biology MCQs",
    duration: "90 mins",
    status: "In Progress",
  },
  {
    id: 4,
    subject: "Economy",
    task: "Read Inflation Concepts",
    duration: "30 mins",
    status: "Pending",
  },
];

export default function StudyPlannerPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Smart Study Planner
          </h1>

          <p className="mt-2 text-slate-500">
            Organize your study schedule with AI-generated timetables,
            task tracking, and productivity insights.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Planner

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Today's Tasks",
            value: "8",
            icon: CheckSquare,
          },
          {
            title: "Study Hours",
            value: "6.5 hrs",
            icon: Clock3,
          },
          {
            title: "Goals Achieved",
            value: "18",
            icon: Target,
          },
          {
            title: "Productivity",
            value: "92%",
            icon: BarChart3,
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
              placeholder="Search study task..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Daily Study Tasks */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Daily Study Tasks
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {studyTasks.map((task) => (

            <div
              key={task.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {task.task}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {task.subject} • {task.duration}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Interactive Calendar */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <CalendarDays
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Interactive Study Calendar
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <CalendarDays
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Study Calendar
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with FullCalendar or a custom monthly planner component.
            </p>

          </div>

        </div>

      </div>

            {/* Goal Tracking */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Target
            size={24}
            className="text-green-600"
          />

          <h2 className="text-2xl font-bold">
            Goal Tracking
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {[
            ["Complete Polity Revision", "85%"],
            ["Solve 500 MCQs", "72%"],
            ["Finish Current Affairs", "94%"],
            ["Weekly Mock Test", "60%"],
          ].map(([goal, progress]) => (

            <div key={goal}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">{goal}</span>

                <span>{progress}</span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-green-600"
                  style={{ width: progress }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Study Session Scheduler & Smart Reminders */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Clock3
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Study Session Scheduler
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "06:00 - 07:00 • Polity",
              "09:00 - 10:30 • Science",
              "02:00 - 03:00 • Aptitude",
              "07:00 - 08:00 • Current Affairs",
            ].map((session) => (

              <div
                key={session}
                className="rounded-xl border p-4"
              >
                {session}
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
              Smart Reminders
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "🔔 Revise History at 8:00 AM",
              "🔔 Solve 50 Aptitude Questions",
              "🔔 Attempt Today's Mock Test",
              "🔔 Review Weak Topics Tonight",
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

      {/* AI Timetable */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Timetable Generator
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Morning: Revision of weak topics.",
              "Afternoon: Learn new concepts.",
              "Evening: Practice MCQs.",
              "Night: Quick revision and flashcards.",
            ].map((plan) => (

              <div
                key={plan}
                className="rounded-xl bg-white/10 p-4"
              >
                {plan}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Productivity Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <BarChart3
            size={24}
            className="text-indigo-600"
          />

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
              Weekly Productivity Dashboard
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (LineChart, BarChart or AreaChart) to visualize study hours, completed tasks, and productivity trends.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Planner
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Schedule
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Timetable
        </button>

      </div>

    </div>

  );

}