"use client";

import { useState } from "react";
import {
  CalendarDays,
  Brain,
  BookOpen,
  Clock,
  Target,
  Bell,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";

const todayPlan = [
  {
    id: 1,
    subject: "History",
    topic: "Sangam Age",
    duration: "45 min",
    priority: "High",
  },
  {
    id: 2,
    subject: "Polity",
    topic: "Fundamental Rights",
    duration: "60 min",
    priority: "High",
  },
  {
    id: 3,
    subject: "Science",
    topic: "Physics Formulae",
    duration: "30 min",
    priority: "Medium",
  },
  {
    id: 4,
    subject: "Current Affairs",
    topic: "Today's News",
    duration: "25 min",
    priority: "High",
  },
];

export default function RevisionPage() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleComplete = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Smart Revision Planner
          </h1>

          <p className="mt-2 text-slate-500">
            Organize your revision with AI-assisted planning, spaced repetition, and exam-focused schedules.
          </p>

        </div>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white">
          Generate Today's Plan
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Today's Tasks",
            value: "12",
            icon: CalendarDays,
          },
          {
            title: "Completed",
            value: "7",
            icon: CheckCircle2,
          },
          {
            title: "Revision Hours",
            value: "5.5h",
            icon: Clock,
          },
          {
            title: "Weak Topics",
            value: "18",
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
                    className="text-indigo-600"
                    size={28}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Today's Revision */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Today's Revision Schedule
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {todayPlan.map((task) => (

            <div
              key={task.id}
              className="flex flex-col gap-4 rounded-xl border p-5 lg:flex-row lg:items-center lg:justify-between"
            >

              <div>

                <h3 className="text-lg font-semibold">
                  {task.subject}
                </h3>

                <p className="mt-1 text-slate-500">
                  {task.topic}
                </p>

                <div className="mt-2 flex flex-wrap gap-3 text-sm">

                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
                    {task.duration}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.priority}
                  </span>

                </div>

              </div>

              <div className="flex gap-3">

                <button className="rounded-lg border px-4 py-2 flex items-center gap-2">

                  <PlayCircle size={18} />

                  Start

                </button>

                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`rounded-lg px-4 py-2 ${
                    completed.includes(task.id)
                      ? "bg-green-600 text-white"
                      : "border"
                  }`}
                >
                  {completed.includes(task.id)
                    ? "Completed"
                    : "Mark Done"}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* AI Weak Topic Recommendations */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Revision Recommendations
            </h2>

          </div>

          <p className="mt-4 text-indigo-100">
            Based on your mock tests and previous revision history,
            these topics need immediate attention.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Indian Economy",
              "Medieval History",
              "Physics Formulae",
              "Geography Maps",
            ].map((topic) => (

              <div
                key={topic}
                className="rounded-xl bg-white/10 p-5 backdrop-blur"
              >

                <Target
                  size={24}
                  className="mb-3"
                />

                <h3 className="font-semibold">
                  {topic}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Weekly & Monthly Revision */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Weekly Revision
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              ["Monday", "History"],
              ["Tuesday", "Polity"],
              ["Wednesday", "Science"],
              ["Thursday", "Economy"],
              ["Friday", "Geography"],
              ["Saturday", "Current Affairs"],
              ["Sunday", "Grand Revision"],
            ].map(([day, subject]) => (

              <div
                key={day}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{day}</span>

                <span className="font-semibold text-indigo-600">
                  {subject}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Monthly Goals
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Complete History", "70%"],
              ["Finish Polity", "58%"],
              ["Mock Tests", "82%"],
              ["Current Affairs", "91%"],
            ].map(([goal, progress]) => (

              <div key={goal}>

                <div className="mb-2 flex justify-between">

                  <span>{goal}</span>

                  <span>{progress}</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-indigo-600"
                    style={{ width: progress }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Spaced Repetition */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Spaced Repetition Planner
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Today", "24 Topics"],
            ["Tomorrow", "18 Topics"],
            ["This Week", "97 Topics"],
            ["Retention", "92%"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-3 text-3xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Pomodoro */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Focus Sessions
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["25 Min", "Quick Revision"],
            ["45 Min", "Deep Study"],
            ["60 Min", "Mock Practice"],
            ["90 Min", "Full Session"],
          ].map(([time, mode]) => (

            <button
              key={time}
              className="rounded-xl border p-6 transition hover:bg-indigo-50"
            >

              <Clock
                size={30}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="font-bold">
                {time}
              </h3>

              <p className="mt-2 text-slate-500">
                {mode}
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* Revision Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Revision Analytics
          </h2>

        </div>

        <div className="flex h-80 items-center justify-center p-8">

          <div className="text-center">

            <BookOpen
              size={60}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Revision Progress Chart
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts AreaChart or LineChart.
            </p>

          </div>

        </div>

      </div>

      {/* Reminders */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Bell
            className="text-indigo-600"
            size={24}
          />

          <h2 className="text-2xl font-bold">
            Revision Reminders
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Morning Revision - 6:00 AM",
            "Afternoon Revision - 2:00 PM",
            "Evening Revision - 7:00 PM",
            "Night Quick Review - 9:30 PM",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center justify-between rounded-xl border p-4"
            >

              <span>{item}</span>

              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
                Edit
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Plan
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Schedule
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start Today's Revision
        </button>

      </div>

    </div>

  );

}