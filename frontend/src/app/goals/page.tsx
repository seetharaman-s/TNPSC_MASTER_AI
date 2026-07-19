"use client";

import Link from "next/link";
import {
  Target,
  CalendarDays,
  Flame,
  Brain,
  Trophy,
  Clock,
  CheckCircle2,
  Gift,
} from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Solve 100 MCQs",
    category: "Daily",
    progress: 78,
    deadline: "Today",
  },
  {
    id: 2,
    title: "Complete 3 Mock Tests",
    category: "Weekly",
    progress: 67,
    deadline: "Sunday",
  },
  {
    id: 3,
    title: "Finish Tamil Book",
    category: "Monthly",
    progress: 54,
    deadline: "31 Jul",
  },
  {
    id: 4,
    title: "Reach Top 100 Rank",
    category: "Yearly",
    progress: 32,
    deadline: "Exam",
  },
];

export default function GoalsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Goals
          </h1>

          <p className="mt-2 text-slate-500">
            Plan, monitor, and achieve your TNPSC preparation goals with AI-powered guidance.
          </p>

        </div>

        <Link
          href="/calendar"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
        >
          Study Planner
        </Link>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Active Goals",
            value: "16",
            icon: Target,
          },
          {
            title: "Completed",
            value: "48",
            icon: CheckCircle2,
          },
          {
            title: "Current Streak",
            value: "29 Days",
            icon: Flame,
          },
          {
            title: "Rewards",
            value: "8,450",
            icon: Gift,
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

                  <h2 className="mt-3 text-4xl font-bold">
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

      {/* Goal Progress */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Overall Goal Completion
          </h2>

          <p className="mt-3 text-indigo-100">
            You have completed <strong>48</strong> goals and are currently progressing toward <strong>16 active goals</strong>.
          </p>

          <div className="mt-8">

            <div className="mb-3 flex justify-between">

              <span>Overall Progress</span>

              <span>76%</span>

            </div>

            <div className="h-4 rounded-full bg-white/20">

              <div
                className="h-4 rounded-full bg-white"
                style={{ width: "76%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Goals List */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Active Goals
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {goals.map((goal) => (

            <div
              key={goal.id}
              className="rounded-xl border p-5"
            >

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h3 className="font-semibold text-lg">
                    {goal.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">

                    <span>{goal.category}</span>

                    <span className="flex items-center gap-1">

                      <Clock size={15} />

                      {goal.deadline}

                    </span>

                  </div>

                </div>

                <div className="w-full lg:w-80">

                  <div className="mb-2 flex justify-between">

                    <span>Progress</span>

                    <span>{goal.progress}%</span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-200">

                    <div
                      className="h-3 rounded-full bg-indigo-600"
                      style={{
                        width: `${goal.progress}%`,
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Goal Categories */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Daily / Weekly Goals */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <CalendarDays
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Daily & Weekly Goals
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Read 2 Chapters", "Completed"],
              ["Solve 100 MCQs", "78%"],
              ["Study 6 Hours", "4 / 6 Hours"],
              ["Attend Mock Test", "Pending"],
            ].map(([goal, status]) => (

              <div
                key={goal}
                className="flex items-center justify-between rounded-xl border p-5"
              >

                <span className="font-medium">
                  {goal}
                </span>

                <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
                  {status}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Monthly & Yearly Goals */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Monthly & Yearly Goals
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Complete Tamil Book", "54%"],
              ["Finish 25 Mock Tests", "68%"],
              ["Top 100 Rank", "32%"],
              ["Complete Full Syllabus", "74%"],
            ].map(([goal, progress]) => (

              <div
                key={goal}
                className="rounded-xl border p-5"
              >

                <div className="flex justify-between">

                  <span>{goal}</span>

                  <span className="font-semibold">
                    {progress}
                  </span>

                </div>

                <div className="mt-4 h-3 rounded-full bg-slate-200">

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

      {/* AI Goal Recommendations */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-4">

            <Brain size={34} />

            <h2 className="text-3xl font-bold">
              AI Goal Recommendations
            </h2>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Today's Focus",
                value: "Economy Revision",
              },
              {
                title: "Suggested Goal",
                value: "Complete 2 Mock Tests",
              },
              {
                title: "Estimated Completion",
                value: "8 Days Remaining",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur"
              >

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-indigo-100">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Milestones & Deadline Tracker */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Milestones */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Trophy
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Milestone Roadmap
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              "5,000 MCQs Solved",
              "50 Mock Tests Completed",
              "100-Day Study Streak",
              "Top 100 Leaderboard",
            ].map((milestone, index) => (

              <div
                key={milestone}
                className="flex items-center gap-4"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">

                  {index + 1}

                </div>

                <span>{milestone}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Deadline Tracker */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Clock
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Upcoming Deadlines
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              ["Economy Revision", "Tomorrow"],
              ["Weekly Mock Test", "Sunday"],
              ["Science Notes", "25 Jul"],
              ["Monthly Goal Review", "31 Jul"],
            ].map(([task, date]) => (

              <div
                key={task}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{task}</span>

                <span className="font-semibold text-red-600">
                  {date}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Goal Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Goal Completion Analytics
          </h2>

        </div>

        <div className="p-8">

          <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-slate-300">

            <div className="text-center">

              <Target
                size={56}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Goal Completion Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts AreaChart or RadialBarChart.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Goal Rewards */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Goal Rewards
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            "🏅 500 XP Bonus",
            "📚 Premium Notes",
            "🤖 AI Mentor Credits",
            "🎖️ Exclusive Badge",
          ].map((reward) => (

            <div
              key={reward}
              className="rounded-xl border p-5 text-center hover:bg-indigo-50 transition"
            >

              <Gift
                size={34}
                className="mx-auto mb-3 text-indigo-600"
              />

              <p className="font-medium">
                {reward}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Goals
        </button>

        <button className="rounded-xl border px-6 py-3">
          Goal History
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Create New Goal
        </button>

      </div>

    </div>

  );

}