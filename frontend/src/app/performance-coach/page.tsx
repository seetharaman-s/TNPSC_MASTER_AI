"use client";

import { useState } from "react";
import {
  Brain,
  TrendingUp,
  TrendingDown,
  Target,
  Award,
  FileText,
  Download,
  Search,
  Filter,
} from "lucide-react";

const performanceData = [
  {
    id: 1,
    subject: "Polity",
    score: "94%",
    status: "Excellent",
  },
  {
    id: 2,
    subject: "History",
    score: "82%",
    status: "Good",
  },
  {
    id: 3,
    subject: "Science",
    score: "76%",
    status: "Needs Improvement",
  },
  {
    id: 4,
    subject: "Economy",
    score: "88%",
    status: "Very Good",
  },
];

export default function PerformanceCoachPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Performance Coach
          </h1>

          <p className="mt-2 text-slate-500">
            Analyze your preparation, identify weak areas, and receive AI-powered coaching to improve your TNPSC performance.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Report

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Overall Score",
            value: "89%",
            icon: TrendingUp,
          },
          {
            title: "Strong Subjects",
            value: "6",
            icon: Award,
          },
          {
            title: "Weak Topics",
            value: "12",
            icon: TrendingDown,
          },
          {
            title: "AI Rating",
            value: "A+",
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
              placeholder="Search subject..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Subject Performance */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject Performance Analysis
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {performanceData.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.subject}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Score: {item.score}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    item.status === "Excellent"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Very Good"
                      ? "bg-blue-100 text-blue-700"
                      : item.status === "Good"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Performance Trend */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <TrendingUp
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Performance Trends
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <TrendingUp
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Weekly Progress Graph
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with a Recharts LineChart or AreaChart showing score improvement over time.
            </p>

          </div>

        </div>

      </div>

            {/* Strength & Weakness Analysis */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Award
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Strength Analysis
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Polity",
              "Current Affairs",
              "General Science",
              "Reasoning",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border bg-green-50 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Target
              size={24}
              className="text-red-500"
            />

            <h2 className="text-2xl font-bold">
              Areas to Improve
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Indian Economy",
              "Ancient History",
              "Geometry",
              "Tamil Grammar",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border bg-red-50 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Mock Test Feedback */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <FileText
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Mock Test Feedback
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Excellent accuracy in Polity questions.",
            "Reduce time spent on Aptitude calculations.",
            "Revise Ancient History for better retention.",
            "Maintain your strong performance in Current Affairs.",
          ].map((feedback) => (

            <div
              key={feedback}
              className="rounded-xl border p-4"
            >
              {feedback}
            </div>

          ))}

        </div>

      </div>

      {/* Achievement Milestones */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Achievement Milestones
          </h2>

        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">

          {[
            "🏅 30-Day Study Streak",
            "🏆 90% Mock Test Score",
            "⭐ 5000 MCQs Completed",
            "🎯 Top 5% Performance",
          ].map((milestone) => (

            <div
              key={milestone}
              className="rounded-xl border bg-yellow-50 p-5 text-center font-semibold"
            >
              {milestone}
            </div>

          ))}

        </div>

      </div>

      {/* AI Coaching Recommendations */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Coaching Recommendations
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Spend 45 minutes daily on Economy until accuracy exceeds 85%.",
              "Continue solving 100 MCQs every day to maintain momentum.",
              "Take one full-length mock test every weekend.",
              "Use spaced repetition for History and Tamil Grammar.",
            ].map((tip) => (

              <div
                key={tip}
                className="rounded-xl bg-white/10 p-4"
              >
                {tip}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Performance Dashboard */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Performance Dashboard
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <TrendingUp
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Interactive Analytics
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (LineChart, RadarChart, BarChart, PieChart) to display subject-wise performance, accuracy trends, and score progression.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Analysis
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Coaching Plan
        </button>

      </div>

    </div>

  );

}