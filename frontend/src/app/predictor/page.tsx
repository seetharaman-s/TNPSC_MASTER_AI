"use client";

import {
  Brain,
  Target,
  Trophy,
  TrendingUp,
  BarChart3,
  Activity,
  CalendarDays,
  Download,
  Sparkles,
} from "lucide-react";

export default function PredictorPage() {

  const predictions = [
    {
      subject: "Tamil",
      score: 96,
    },
    {
      subject: "History",
      score: 89,
    },
    {
      subject: "Science",
      score: 92,
    },
    {
      subject: "Polity",
      score: 84,
    },
    {
      subject: "Geography",
      score: 76,
    },
    {
      subject: "Economy",
      score: 71,
    },
  ];

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Progress Predictor
          </h1>

          <p className="mt-2 text-slate-500">
            Predict your TNPSC performance using your study history,
            mock tests, revision progress and learning consistency.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Prediction

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Predicted Score",
            value: "181 / 200",
            icon: Target,
          },
          {
            title: "Estimated Rank",
            value: "Top 5%",
            icon: Trophy,
          },
          {
            title: "Selection Chance",
            value: "89%",
            icon: TrendingUp,
          },
          {
            title: "AI Confidence",
            value: "94%",
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

      {/* AI Prediction */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Sparkles size={30} />

            <h2 className="text-3xl font-bold">
              AI Prediction Summary
            </h2>

          </div>

          <p className="mt-4 text-indigo-100">

            Based on your current study consistency, revision history,
            flashcards, mock test accuracy and learning analytics,
            you are progressing well toward your target score.

          </p>

        </div>

      </div>

      {/* Subject Prediction */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Prediction
          </h2>

        </div>

        <div className="space-y-6 p-6">

          {predictions.map((item) => (

            <div key={item.subject}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {item.subject}
                </span>

                <span>
                  {item.score}%
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{
                    width: `${item.score}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Prediction Trend */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <BarChart3
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Prediction Trend
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center p-8">

            <div className="text-center">

              <BarChart3
                size={64}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Predicted Score Trend
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts LineChart.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Activity
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              AI Confidence Analysis
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Study Consistency", "96%"],
              ["Mock Test Accuracy", "91%"],
              ["Revision Completion", "88%"],
              ["Prediction Confidence", "94%"],
            ].map(([title, value]) => (

              <div key={title}>

                <div className="mb-2 flex justify-between">

                  <span>{title}</span>

                  <span>{value}</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-emerald-500"
                    style={{ width: value }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Future Forecast */}

      <div className="rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <CalendarDays size={30} />

            <h2 className="text-3xl font-bold">
              Future Progress Forecast
            </h2>

          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-4">

            {[
              ["30 Days", "184"],
              ["60 Days", "188"],
              ["90 Days", "192"],
              ["Exam Target", "195+"],
            ].map(([time, score]) => (

              <div
                key={time}
                className="rounded-xl bg-white/10 p-5 text-center"
              >

                <h3 className="font-semibold">
                  {time}
                </h3>

                <p className="mt-3 text-3xl font-bold">
                  {score}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Improvement Priorities */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Improvement Priorities
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            ["Economy", "High Priority"],
            ["Geography", "High Priority"],
            ["Environment", "Medium Priority"],
            ["Constitution Articles", "Medium Priority"],
          ].map(([subject, priority]) => (

            <div
              key={subject}
              className="flex items-center justify-between rounded-xl border p-5"
            >

              <span className="font-medium">
                {subject}
              </span>

              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                {priority}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* AI Suggestions */}

      <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              Personalized AI Suggestions
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Practice one additional Economy test every week.",
              "Revise Geography maps twice every week.",
              "Continue your current revision schedule.",
              "Increase daily study time by 20 minutes for maximum improvement.",
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

      {/* Prediction Summary */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Prediction Summary
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Predicted Score", "181 / 200"],
            ["Estimated Rank", "Top 5%"],
            ["Selection Chance", "89%"],
            ["Confidence", "94%"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Target
                size={32}
                className="mx-auto mb-3 text-indigo-600"
              />

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Share Prediction
        </button>

        <button className="rounded-xl border px-6 py-3">
          Download Report
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Refresh Prediction
        </button>

      </div>

    </div>

  );

}