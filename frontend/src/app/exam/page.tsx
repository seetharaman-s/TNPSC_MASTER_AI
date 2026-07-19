"use client";

import {
  CalendarDays,
  Target,
  Brain,
  BookOpen,
  Trophy,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Clock,
} from "lucide-react";

export default function ExamPage() {

  const subjects = [
    {
      name: "History",
      progress: 86,
    },
    {
      name: "Polity",
      progress: 78,
    },
    {
      name: "Science",
      progress: 91,
    },
    {
      name: "Geography",
      progress: 73,
    },
    {
      name: "Economy",
      progress: 68,
    },
    {
      name: "Tamil",
      progress: 95,
    },
  ];

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Exam Countdown & Strategy
          </h1>

          <p className="mt-2 text-slate-500">
            Track your TNPSC preparation and monitor overall exam readiness.
          </p>

        </div>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Update Progress
        </button>

      </div>

      {/* Overview */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Days Remaining",
            value: "124",
            icon: CalendarDays,
          },
          {
            title: "Readiness",
            value: "82%",
            icon: Target,
          },
          {
            title: "Completed Topics",
            value: "1,284",
            icon: CheckCircle2,
          },
          {
            title: "Study Hours",
            value: "486h",
            icon: Clock,
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

      {/* Countdown */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-10 text-center">

          <CalendarDays
            size={60}
            className="mx-auto mb-6"
          />

          <h2 className="text-5xl font-bold">
            124 Days
          </h2>

          <p className="mt-4 text-xl text-indigo-100">
            Remaining until TNPSC Examination
          </p>

        </div>

      </div>

      {/* Subject Progress */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject Readiness
          </h2>

        </div>

        <div className="space-y-6 p-6">

          {subjects.map((subject) => (

            <div key={subject.name}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {subject.name}
                </span>

                <span>
                  {subject.progress}%
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{
                    width: `${subject.progress}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* AI Strategy */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={32} />

            <h2 className="text-3xl font-bold">
              AI Exam Strategy
            </h2>

          </div>

          <p className="mt-4 text-indigo-100">
            Based on your progress, focus on Economy, Geography and
            Polity. Continue daily mock tests and revise previously
            completed topics using spaced repetition.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {[
              "Complete one weak topic daily",
              "Take one mock test every weekend",
              "Revise previous-day topics before new study",
            ].map((tip) => (

              <div
                key={tip}
                className="rounded-xl bg-white/10 p-5 backdrop-blur"
              >

                <Target
                  size={24}
                  className="mb-3"
                />

                <p>{tip}</p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* 30 / 60 / 90 Day Roadmap */}

      <div className="grid gap-6 lg:grid-cols-3">

        {[
          {
            title: "30 Days",
            tasks: [
              "Finish remaining syllabus",
              "Daily revision",
              "Weekly mock tests",
            ],
          },
          {
            title: "60 Days",
            tasks: [
              "Complete full revision",
              "Improve weak subjects",
              "Previous year papers",
            ],
          },
          {
            title: "90 Days",
            tasks: [
              "Grand mock tests",
              "Rapid revision",
              "Formula & facts review",
            ],
          },
        ].map((plan) => (

          <div
            key={plan.title}
            className="rounded-2xl border bg-white shadow-sm"
          >

            <div className="border-b p-6">

              <h2 className="text-2xl font-bold">
                {plan.title}
              </h2>

            </div>

            <div className="space-y-4 p-6">

              {plan.tasks.map((task) => (

                <div
                  key={task}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={18}
                    className="mt-1 text-green-600"
                  />

                  <span>{task}</span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* Final Revision Checklist */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Final Revision Checklist
          </h2>

        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2">

          {[
            "Complete TNPSC Textbooks",
            "Finish Notes Revision",
            "Practice Previous Year Questions",
            "Complete Unit Tests",
            "Complete Mock Tests",
            "Revise Important Dates",
            "Revise Formulae",
            "Practice Current Affairs",
          ].map((item) => (

            <label
              key={item}
              className="flex items-center gap-3 rounded-xl border p-4"
            >

              <input
                type="checkbox"
                className="h-5 w-5"
              />

              <span>{item}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Weak Subjects */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <AlertTriangle
            size={24}
            className="text-amber-500"
          />

          <h2 className="text-2xl font-bold">
            Weak Subject Alerts
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            ["Economy", "68%", "High Priority"],
            ["Geography", "73%", "Medium Priority"],
            ["Polity", "78%", "Needs Revision"],
          ].map(([subject, score, status]) => (

            <div
              key={subject}
              className="flex flex-col gap-3 rounded-xl border p-5 lg:flex-row lg:items-center lg:justify-between"
            >

              <div>

                <h3 className="font-semibold">
                  {subject}
                </h3>

                <p className="text-sm text-slate-500">
                  Readiness: {score}
                </p>

              </div>

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                {status}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Milestones */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Trophy
            size={24}
            className="text-yellow-500"
          />

          <h2 className="text-2xl font-bold">
            Preparation Milestones
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["100 Hours", true],
            ["500 Hours", true],
            ["100 Mock Tests", false],
            ["Complete Syllabus", false],
          ].map(([title, completed]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Trophy
                size={40}
                className={`mx-auto mb-4 ${
                  completed
                    ? "text-yellow-500"
                    : "text-slate-300"
                }`}
              />

              <h3 className="font-semibold">
                {title}
              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* Readiness Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <BarChart3
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Overall Readiness Dashboard
          </h2>

        </div>

        <div className="flex h-80 items-center justify-center p-8">

          <div className="text-center">

            <BarChart3
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Readiness Analytics Chart
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts RadarChart, BarChart or RadialChart.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Strategy
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start Today's Plan
        </button>

      </div>

    </div>

  );

}