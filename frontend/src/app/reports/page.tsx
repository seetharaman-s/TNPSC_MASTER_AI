"use client";

import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Brain,
  Target,
  BookOpen,
  FileText,
  Download,
} from "lucide-react";

const subjectPerformance = [
  {
    subject: "Tamil",
    score: 96,
    trend: "up",
  },
  {
    subject: "History",
    score: 91,
    trend: "up",
  },
  {
    subject: "Polity",
    score: 88,
    trend: "up",
  },
  {
    subject: "Science",
    score: 82,
    trend: "down",
  },
  {
    subject: "Economy",
    score: 74,
    trend: "down",
  },
  {
    subject: "Geography",
    score: 85,
    trend: "up",
  },
];

export default function ReportsPage() {

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Performance Reports
          </h1>

          <p className="mt-2 text-slate-500">
            Analyze your TNPSC preparation with detailed reports, trends, AI insights, and downloadable summaries.
          </p>

        </div>

        <Link
          href="/analytics"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
        >
          View Analytics
        </Link>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Overall Score",
            value: "88%",
            icon: BarChart3,
          },
          {
            title: "Mock Tests",
            value: "142",
            icon: FileText,
          },
          {
            title: "Improvement",
            value: "+12%",
            icon: TrendingUp,
          },
          {
            title: "AI Rating",
            value: "Excellent",
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

                  <h2 className="mt-3 text-4xl font-bold">
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

      {/* Overall Performance */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Overall Performance
          </h2>

          <p className="mt-3 text-indigo-100">
            Your overall preparation score has improved from
            <strong> 76% </strong>
            to
            <strong> 88% </strong>
            over the last eight weeks.
          </p>

          <div className="mt-8">

            <div className="mb-3 flex justify-between">

              <span>Goal Progress</span>

              <span>88%</span>

            </div>

            <div className="h-4 rounded-full bg-white/20">

              <div
                className="h-4 rounded-full bg-white"
                style={{ width: "88%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Subject Analysis */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Performance
          </h2>

        </div>

        <div className="divide-y">

          {subjectPerformance.map((subject) => (

            <div
              key={subject.subject}
              className="flex items-center justify-between p-6"
            >

              <div className="flex items-center gap-4">

                <BookOpen
                  className="text-indigo-600"
                  size={24}
                />

                <div>

                  <h3 className="font-semibold">
                    {subject.subject}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Accuracy: {subject.score}%
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                {subject.trend === "up" ? (

                  <TrendingUp
                    className="text-green-600"
                    size={22}
                  />

                ) : (

                  <TrendingDown
                    className="text-red-500"
                    size={22}
                  />

                )}

                <span className="text-xl font-bold">
                  {subject.score}%
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Mock Test Analysis */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Mock Test Analysis
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              {
                title: "Grand Mock Test #12",
                score: "182 / 200",
                accuracy: "91%",
              },
              {
                title: "Science Unit Test",
                score: "46 / 50",
                accuracy: "92%",
              },
              {
                title: "History Revision Test",
                score: "39 / 50",
                accuracy: "78%",
              },
              {
                title: "Current Affairs Quiz",
                score: "48 / 50",
                accuracy: "96%",
              },
            ].map((test) => (

              <div
                key={test.title}
                className="rounded-xl border p-5"
              >

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold">
                    {test.title}
                  </h3>

                  <span className="text-lg font-bold text-indigo-600">
                    {test.score}
                  </span>

                </div>

                <p className="mt-2 text-slate-500">
                  Accuracy: {test.accuracy}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Strengths & Weaknesses */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Strengths & Weaknesses
            </h2>

          </div>

          <div className="grid gap-6 p-6 md:grid-cols-2">

            <div className="rounded-xl border border-green-300 bg-green-50 p-5">

              <h3 className="font-semibold text-green-700">
                Strong Subjects
              </h3>

              <ul className="mt-4 space-y-2 text-sm">
                <li>• Tamil</li>
                <li>• History</li>
                <li>• Current Affairs</li>
                <li>• Polity</li>
              </ul>

            </div>

            <div className="rounded-xl border border-red-300 bg-red-50 p-5">

              <h3 className="font-semibold text-red-700">
                Needs Improvement
              </h3>

              <ul className="mt-4 space-y-2 text-sm">
                <li>• Economy</li>
                <li>• Science</li>
                <li>• Aptitude Speed</li>
                <li>• Geography Maps</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

      {/* Weekly & Monthly Trends */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Weekly Trend
            </h2>

          </div>

          <div className="p-8">

            <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-slate-300">

              <div className="text-center">

                <TrendingUp
                  size={56}
                  className="mx-auto mb-4 text-green-600"
                />

                <h3 className="text-xl font-semibold">
                  Weekly Progress Chart
                </h3>

                <p className="mt-2 text-slate-500">
                  Replace with Recharts LineChart.
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Monthly Trend
            </h2>

          </div>

          <div className="p-8">

            <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-slate-300">

              <div className="text-center">

                <BarChart3
                  size={56}
                  className="mx-auto mb-4 text-indigo-600"
                />

                <h3 className="text-xl font-semibold">
                  Monthly Performance Chart
                </h3>

                <p className="mt-2 text-slate-500">
                  Replace with Recharts BarChart.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* AI Insights */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-4">

            <Brain size={34} />

            <h2 className="text-3xl font-bold">
              AI Performance Insights
            </h2>

          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Best Subject",
                value: "Tamil (96%)",
              },
              {
                title: "Focus Area",
                value: "Economy Revision",
              },
              {
                title: "Prediction",
                value: "Estimated Exam Score: 186/200",
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

      {/* Study Time Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Study Time Analytics
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Today", "4h 25m"],
            ["This Week", "31h"],
            ["This Month", "128h"],
            ["This Year", "1,124h"],
          ].map(([label, value]) => (

            <div
              key={label}
              className="rounded-xl border p-5 text-center"
            >

              <h3 className="text-slate-500">
                {label}
              </h3>

              <p className="mt-3 text-3xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Report Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Share Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Report
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Download PDF

        </button>

      </div>

    </div>

  );

}