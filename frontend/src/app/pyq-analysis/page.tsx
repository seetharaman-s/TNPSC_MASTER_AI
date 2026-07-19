"use client";

import {
  BarChart3,
  TrendingUp,
  Brain,
  Calendar,
  Target,
  Download,
  Search,
  Filter,
  Flame,
} from "lucide-react";
import { useState } from "react";

const pyqStats = [
  {
    subject: "History",
    questions: 248,
    trend: "+12%",
  },
  {
    subject: "Polity",
    questions: 214,
    trend: "+8%",
  },
  {
    subject: "Science",
    questions: 286,
    trend: "+15%",
  },
  {
    subject: "Economy",
    questions: 146,
    trend: "+5%",
  },
];

export default function PYQAnalysisPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            PYQ Analysis & Trends
          </h1>

          <p className="mt-2 text-slate-500">
            Analyze Previous Year Questions to identify important topics, trends, and exam patterns.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Analytics

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Total PYQs",
            value: "12,864",
            icon: BarChart3,
          },
          {
            title: "Topics Covered",
            value: "684",
            icon: Target,
          },
          {
            title: "Trend Accuracy",
            value: "94%",
            icon: TrendingUp,
          },
          {
            title: "AI Predictions",
            value: "328",
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
              placeholder="Search subject, topic or year..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Subject-wise Analysis */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise PYQ Analysis
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {pyqStats.map((item) => (

            <div
              key={item.subject}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.subject}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.questions} Previous Year Questions
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
                  {item.trend}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Trend Chart */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            PYQ Trend Visualization
          </h2>

        </div>

        <div className="flex h-80 items-center justify-center">

          <div className="text-center">

            <TrendingUp
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Trend Analytics Chart
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts LineChart / AreaChart for year-wise trend visualization.
            </p>

          </div>

        </div>

      </div>

            {/* Frequently Asked Topics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Flame
            size={24}
            className="text-orange-500"
          />

          <h2 className="text-2xl font-bold">
            Frequently Asked Topics
          </h2>

        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2">

          {[
            ["Indian Constitution", 128],
            ["Ancient History", 116],
            ["Indian Economy", 92],
            ["Current Affairs", 154],
            ["Geography of India", 88],
            ["General Science", 143],
            ["Aptitude", 74],
            ["Tamil Grammar", 97],
          ].map(([topic, count]) => (

            <div
              key={topic}
              className="flex items-center justify-between rounded-xl border p-4"
            >

              <span className="font-medium">
                {topic}
              </span>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                {count} Questions
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Year-wise Statistics & Difficulty */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Calendar
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Year-wise Statistics
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              ["2022", 210],
              ["2023", 224],
              ["2024", 236],
              ["2025", 248],
            ].map(([year, questions]) => (

              <div
                key={year}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{year}</span>

                <span className="font-semibold">
                  {questions} Questions
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Target
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Difficulty Analysis
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Easy", "34%"],
              ["Medium", "46%"],
              ["Hard", "20%"],
            ].map(([level, value]) => (

              <div key={level}>

                <div className="mb-2 flex justify-between">

                  <span>{level}</span>

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

      </div>

      {/* AI Topic Prediction */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Topic Prediction
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Fundamental Duties and Constitutional Amendments are likely to be tested.",
              "Climate Change and Environmental Policies show an increasing trend.",
              "Science & Technology current developments have high probability.",
              "Indian Economy and Budget-related questions may increase.",
            ].map((prediction) => (

              <div
                key={prediction}
                className="rounded-xl bg-white/10 p-4"
              >
                {prediction}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Interactive Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Interactive Analytics
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <BarChart3
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Interactive PYQ Dashboard
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts BarChart, PieChart, or Heatmap for detailed analysis.
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
          View Full PYQ Insights
        </button>

      </div>

    </div>

  );

}