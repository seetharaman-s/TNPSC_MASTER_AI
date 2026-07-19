"use client";

import Link from "next/link";
import {
  TrendingUp,
  BookOpen,
  Target,
  Trophy,
  Brain,
  Calendar,
  Flame,
  Activity,
} from "lucide-react";

export default function AnalyticsPage() {

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor your TNPSC preparation, identify weak areas, and receive AI-powered recommendations.
          </p>

        </div>

        <Link
          href="/reports"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium"
        >
          View Reports
        </Link>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Study Hours",
            value: "326 Hrs",
            icon: BookOpen,
          },
          {
            title: "Questions Solved",
            value: "18,420",
            icon: Target,
          },
          {
            title: "Mock Tests",
            value: "146",
            icon: Trophy,
          },
          {
            title: "Current Streak",
            value: "29 Days",
            icon: Flame,
          },
        ].map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
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
                    className="text-indigo-600"
                    size={28}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Weekly Goal */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Weekly Goal
          </h2>

          <span className="font-semibold text-indigo-600">
            82% Completed
          </span>

        </div>

        <div className="mt-6 h-4 rounded-full bg-slate-200">

          <div
            className="h-4 rounded-full bg-indigo-600"
            style={{ width: "82%" }}
          />

        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">

          {[
            ["Study Hours", "18 / 20"],
            ["Mock Tests", "4 / 5"],
            ["Current Affairs", "26 / 30"],
            ["Revision", "12 / 15"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl bg-slate-50 p-5"
            >

              <p className="text-sm text-slate-500">
                {title}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {value}
              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* Subject Progress */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-bold">
          Subject-wise Progress
        </h2>

        <div className="space-y-5">

          {[
            ["Tamil", "94%"],
            ["History", "88%"],
            ["Polity", "91%"],
            ["Science", "84%"],
            ["Geography", "86%"],
            ["Economy", "82%"],
            ["Current Affairs", "90%"],
          ].map(([subject, score]) => (

            <div key={subject}>

              <div className="mb-2 flex justify-between">

                <span>{subject}</span>

                <span>{score}</span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{ width: score }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Charts & Recent Activity */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Performance Trend */}

        <div className="xl:col-span-2 rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Performance Trend
            </h2>

            <Link
              href="/analytics/performance"
              className="text-indigo-600"
            >
              View Details
            </Link>

          </div>

          <div className="p-8">

            {/* Replace with Recharts */}

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <TrendingUp
                  size={56}
                  className="mx-auto text-indigo-600 mb-4"
                />

                <h3 className="text-lg font-semibold">
                  Weekly Performance Chart
                </h3>

                <p className="mt-2 text-slate-500">
                  Accuracy • Score • Study Hours • Mock Tests
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-xl font-bold">
              Recent Activity
            </h2>

          </div>

          <div className="divide-y">

            {[
              "Completed Polity Mock Test",
              "Finished History Revision",
              "Solved 50 Aptitude MCQs",
              "Read Current Affairs",
              "Completed Daily Quiz",
            ].map((activity) => (

              <div
                key={activity}
                className="flex items-center gap-4 p-5 hover:bg-slate-50"
              >

                <Activity
                  className="text-indigo-600"
                  size={20}
                />

                <span>{activity}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Monthly Calendar & Achievements */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Calendar */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Monthly Study Calendar
            </h2>

          </div>

          <div className="p-8">

            <div className="h-72 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <Calendar
                  size={54}
                  className="mx-auto text-indigo-600 mb-4"
                />

                <p className="font-semibold">
                  Calendar Heatmap
                </p>

                <p className="mt-2 text-slate-500">
                  Display study activity for each day.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Achievements */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Achievements
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-6 p-6">

            {[
              "🏅 Top Performer",
              "🔥 30-Day Streak",
              "🎯 Accuracy Master",
              "📚 100 Mock Tests",
              "⭐ Daily Learner",
              "🚀 Fast Progress",
            ].map((badge) => (

              <div
                key={badge}
                className="rounded-xl border p-6 text-center hover:shadow-md transition"
              >

                <Trophy
                  className="mx-auto text-yellow-500 mb-4"
                  size={36}
                />

                <p className="font-medium">
                  {badge}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Insights */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            AI Study Insights
          </h2>

          <p className="mt-2 text-indigo-100">
            Personalized recommendations generated from your study habits and performance.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Strong Subjects",
                text: "Tamil, Polity and Current Affairs are consistently above 90%.",
              },
              {
                title: "Weak Areas",
                text: "Increase revision time for Economy and Science.",
              },
              {
                title: "Next Recommendation",
                text: "Attempt one full mock test and two unit tests this weekend.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 backdrop-blur p-6"
              >

                <Brain
                  size={36}
                  className="mb-4"
                />

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-indigo-100">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Weak Topics */}

      <div className="rounded-2xl border bg-white shadow-sm p-8">

        <h2 className="text-2xl font-bold mb-6">
          Topics Needing Improvement
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            ["Economy", "78%"],
            ["Biology", "74%"],
            ["Geography Maps", "76%"],
            ["Logical Reasoning", "80%"],
          ].map(([topic, score]) => (

            <div
              key={topic}
              className="rounded-xl border p-6"
            >

              <h3 className="font-semibold">
                {topic}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Current Accuracy
              </p>

              <div className="mt-5 h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-red-500"
                  style={{ width: score }}
                />

              </div>

              <p className="mt-3 font-bold text-red-600">
                {score}
              </p>

            </div>

          ))}

        </div>

      </div>

            {/* Target Prediction & Readiness */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Exam Readiness */}

        <div className="xl:col-span-2 rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              AI Exam Readiness
            </h2>

            <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 font-semibold">
              Ready
            </span>

          </div>

          <div className="p-8">

            <div className="grid md:grid-cols-4 gap-6">

              {[
                ["Overall Readiness", "91%"],
                ["Expected Score", "182 / 200"],
                ["Confidence", "95%"],
                ["Rank Prediction", "Top 5%"],
              ].map(([title, value]) => (

                <div
                  key={title}
                  className="rounded-xl bg-slate-50 p-6 text-center"
                >

                  <p className="text-sm text-slate-500">
                    {title}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-indigo-600">
                    {value}
                  </h3>

                </div>

              ))}

            </div>

            <div className="mt-8">

              <div className="flex justify-between mb-3">

                <span>Preparation Score</span>

                <span className="font-semibold">
                  91%
                </span>

              </div>

              <div className="h-4 rounded-full bg-slate-200">

                <div
                  className="h-4 rounded-full bg-green-600"
                  style={{ width: "91%" }}
                />

              </div>

            </div>

          </div>

        </div>

        {/* Productivity */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-xl font-bold">
              Productivity
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Morning", "94%"],
              ["Afternoon", "81%"],
              ["Evening", "90%"],
              ["Night", "73%"],
            ].map(([time, value]) => (

              <div key={time}>

                <div className="flex justify-between mb-2">

                  <span>{time}</span>

                  <span>{value}</span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div
                    className="h-2 rounded-full bg-indigo-600"
                    style={{ width: value }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Weekly vs Monthly */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Weekly Comparison
            </h2>

          </div>

          <div className="p-8">

            <div className="h-72 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <TrendingUp
                  size={54}
                  className="mx-auto text-indigo-600 mb-4"
                />

                <p className="font-semibold">
                  Weekly Progress Chart
                </p>

                <p className="text-slate-500 mt-2">
                  Recharts LineChart Placeholder
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Monthly Comparison
            </h2>

          </div>

          <div className="p-8">

            <div className="h-72 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <TrendingUp
                  size={54}
                  className="mx-auto text-purple-600 mb-4"
                />

                <p className="font-semibold">
                  Monthly Analytics
                </p>

                <p className="text-slate-500 mt-2">
                  Recharts AreaChart Placeholder
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Action Center */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Analytics Action Center
          </h2>

          <p className="mt-2 text-indigo-100">
            Export reports, review progress, and continue your preparation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
              Download PDF Report
            </button>

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
              Export Excel
            </button>

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
              Share Progress
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              View Detailed Analytics
            </button>

          </div>

        </div>

      </div>

      {/* Overall Preparation Score */}

      <div className="rounded-2xl border bg-white shadow-sm p-8">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              Overall Preparation Score
            </h2>

            <p className="mt-2 text-slate-500">
              Based on study consistency, revision, mock tests, current affairs,
              question bank performance, and AI analysis.
            </p>

          </div>

          <div className="text-center">

            <div className="text-6xl font-extrabold text-green-600">
              A+
            </div>

            <div className="mt-2 text-lg font-semibold">
              91 / 100
            </div>

          </div>

        </div>

      </div>

    </div>

  );

}