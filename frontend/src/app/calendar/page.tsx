"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock,
  Target,
  CheckCircle2,
  Flame,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CalendarPage() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const todayTasks = [
    {
      title: "Read Tamil Book - Unit 5",
      time: "08:00 AM",
      completed: true,
    },
    {
      title: "Solve 100 Aptitude MCQs",
      time: "10:00 AM",
      completed: false,
    },
    {
      title: "Current Affairs Revision",
      time: "02:00 PM",
      completed: false,
    },
    {
      title: "Group 4 Mock Test",
      time: "07:00 PM",
      completed: false,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Study Planner
          </h1>

          <p className="mt-2 text-slate-500">
            Organize your TNPSC preparation with a personalized study calendar.
          </p>

        </div>

        <Link
          href="/analytics"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold"
        >
          View Analytics
        </Link>

      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[
          {
            title: "Today's Tasks",
            value: "4",
            icon: CheckCircle2,
          },
          {
            title: "Study Hours",
            value: "4 / 6",
            icon: Clock,
          },
          {
            title: "Current Streak",
            value: "29 Days",
            icon: Flame,
          },
          {
            title: "Weekly Goal",
            value: "82%",
            icon: Target,
          },
        ].map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="rounded-2xl border bg-white shadow-sm p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-500">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    {card.value}
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

      {/* Calendar */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Monthly Calendar */}

        <div className="xl:col-span-2 rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-6">

            <button>

              <ChevronLeft />

            </button>

            <h2 className="text-2xl font-bold">
              July 2026
            </h2>

            <button>

              <ChevronRight />

            </button>

          </div>

          <div className="p-6">

            <div className="grid grid-cols-7 gap-3 mb-4">

              {weekDays.map((day) => (

                <div
                  key={day}
                  className="text-center font-semibold text-slate-500"
                >
                  {day}
                </div>

              ))}

            </div>

            <div className="grid grid-cols-7 gap-3">

              {monthDays.map((day) => (

                <button
                  key={day}
                  className={`aspect-square rounded-xl border transition
                    ${
                      day === 19
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-indigo-50"
                    }`}
                >
                  {day}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* Today's Schedule */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Today's Plan
            </h2>

          </div>

          <div className="divide-y">

            {todayTasks.map((task) => (

              <div
                key={task.title}
                className="p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-semibold">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {task.time}
                    </p>

                  </div>

                  <CheckCircle2
                    className={
                      task.completed
                        ? "text-green-600"
                        : "text-slate-300"
                    }
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Planner */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-4">

            <Brain size={36} />

            <h2 className="text-3xl font-bold">
              AI Study Planner
            </h2>

          </div>

          <p className="mt-4 text-indigo-100">
            Based on your recent performance, the AI recommends focusing on
            Economy, Biology, and one full-length mock test this week.
          </p>

        </div>

      </div>

            {/* Weekly Timetable */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Weekly Study Timetable
          </h2>

          <button className="rounded-lg border px-4 py-2">
            Edit Schedule
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left">Day</th>
                <th className="px-6 py-4 text-left">Morning</th>
                <th className="px-6 py-4 text-left">Afternoon</th>
                <th className="px-6 py-4 text-left">Evening</th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Monday","Tamil","History","Mock Test"],
                ["Tuesday","Polity","Science","Revision"],
                ["Wednesday","Economy","Maths","MCQs"],
                ["Thursday","Geography","History","Revision"],
                ["Friday","Current Affairs","Tamil","Mock Test"],
                ["Saturday","Science","Economy","Grand Test"],
                ["Sunday","Revision","Current Affairs","Analysis"],
              ].map((row)=>(
                <tr key={row[0]} className="border-t">

                  {row.map((cell)=>(
                    <td
                      key={cell}
                      className="px-6 py-5"
                    >
                      {cell}
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Revision Planner */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Revision Planner
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Tamil","Completed"],
              ["History","Today"],
              ["Polity","Tomorrow"],
              ["Science","Friday"],
              ["Economy","Sunday"],
            ].map(([subject,status])=>(

              <div
                key={subject}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span className="font-medium">
                  {subject}
                </span>

                <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700">
                  {status}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Mock Test Planner */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Mock Test Schedule
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Group 4 Full Test","20 Jul • 09:00 AM"],
              ["History Unit Test","22 Jul • 07:00 PM"],
              ["Science Test","24 Jul • 08:00 AM"],
              ["Grand Mock Test","26 Jul • 10:00 AM"],
            ].map(([title,time])=>(

              <div
                key={title}
                className="rounded-xl border p-5"
              >

                <h3 className="font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {time}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Monthly Goals */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Monthly Goals
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            ["Study Hours","82%"],
            ["Mock Tests","64%"],
            ["Revision","71%"],
            ["MCQs Solved","91%"],
          ].map(([goal,value])=>(

            <div
              key={goal}
              className="rounded-xl border p-5"
            >

              <div className="flex justify-between">

                <span>{goal}</span>

                <span className="font-semibold">
                  {value}
                </span>

              </div>

              <div className="mt-4 h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{width:value}}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Study Heatmap */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Study Consistency
          </h2>

        </div>

        <div className="p-8">

          <div className="h-72 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

            <div className="text-center">

              <CalendarDays
                size={56}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                GitHub-style Study Heatmap
              </h3>

              <p className="mt-2 text-slate-500">
                Display daily study consistency for the entire year.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Productivity */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Productivity Insights
          </h2>

          <p className="mt-3 text-indigo-100">
            Your highest productivity occurs between <strong>8:00 AM and 11:00 AM</strong>.
            Schedule difficult subjects such as Economy, Science, and Aptitude during this time.
          </p>

        </div>

      </div>

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Planner
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