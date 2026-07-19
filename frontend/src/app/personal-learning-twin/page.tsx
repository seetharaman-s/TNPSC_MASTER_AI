"use client";

import { useState } from "react";
import {
  Brain,
  User,
  TrendingUp,
  Target,
  BookOpen,
  BarChart3,
  Trophy,
  RefreshCw,
  Download,
  Search,
  Filter,
} from "lucide-react";

const learningProfile = [
  {
    id: 1,
    category: "Polity",
    mastery: "91%",
    recommendation: "Revision",
  },
  {
    id: 2,
    category: "History",
    mastery: "84%",
    recommendation: "Practice",
  },
  {
    id: 3,
    category: "Science",
    mastery: "76%",
    recommendation: "Learn",
  },
  {
    id: 4,
    category: "Aptitude",
    mastery: "82%",
    recommendation: "Mock Test",
  },
];

export default function PersonalLearningTwinPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Personal Learning Twin
          </h1>

          <p className="mt-2 text-slate-500">
            Your intelligent digital learning companion that understands
            your study habits, predicts performance, and continuously
            personalizes your TNPSC preparation.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export AI Profile

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Learning Score",
            value: "93%",
            icon: Brain,
          },
          {
            title: "Study Streak",
            value: "41 Days",
            icon: TrendingUp,
          },
          {
            title: "Milestones",
            value: "28",
            icon: Trophy,
          },
          {
            title: "AI Accuracy",
            value: "96%",
            icon: Target,
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
              placeholder="Search learning insights..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* AI Learning Profile */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <User
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Personal AI Learning Profile
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {learningProfile.map((item) => (

            <div
              key={item.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {item.category}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Mastery: {item.mastery}
                  </p>

                </div>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  {item.recommendation}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Adaptive Learning Behavior */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Brain
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Adaptive Learning Behavior Analysis
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Brain
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              AI Learning Behavior Engine
            </h3>

            <p className="mt-2 text-slate-500">
              Analyze study habits, learning speed, revision frequency,
              focus duration, and preferred learning methods to adapt
              future recommendations automatically.
            </p>

          </div>

        </div>

      </div>

            {/* Personalized Study Predictions */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <TrendingUp size={30} />

            <h2 className="text-3xl font-bold">
              Personalized Study Predictions
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Estimated TNPSC readiness will reach 96% within 8 weeks.",
              "Current revision pace can improve mock test scores by 10%.",
              "Consistent daily study may increase subject mastery significantly.",
              "Focused Aptitude practice is predicted to boost overall ranking.",
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

      {/* Recommendations & Revision */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Target
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Dynamic Learning Recommendations
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Revise Polity every 3 days.",
              "Complete one full-length mock test every Sunday.",
              "Increase Science practice sessions.",
              "Allocate additional time for Current Affairs revision.",
            ].map((recommendation) => (

              <div
                key={recommendation}
                className="rounded-xl border p-4"
              >
                {recommendation}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <BookOpen
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Intelligent Revision Planner
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Today's Revision: Indian Constitution",
              "Tomorrow: Indian Economy",
              "Next: Geography & Environment",
              "Weekend: Full Revision + Mock Test",
            ].map((plan) => (

              <div
                key={plan}
                className="rounded-xl border p-4"
              >
                {plan}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Analytics & Milestones */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              AI Growth Analytics
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center">

            <div className="text-center">

              <BarChart3
                size={64}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Learning Progress Dashboard
              </h3>

              <p className="mt-2 text-slate-500">
                Integrate LineChart, RadarChart, AreaChart, and Heatmap to
                visualize learning growth, study consistency, prediction
                accuracy, and subject mastery over time.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Trophy
              size={24}
              className="text-amber-500"
            />

            <h2 className="text-2xl font-bold">
              Learning Milestones
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "100 Study Sessions Completed",
              "5000 MCQs Solved",
              "50 Mock Tests Finished",
              "30-Day Study Streak",
            ].map((milestone) => (

              <div
                key={milestone}
                className="rounded-xl border p-4"
              >
                {milestone}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Continuous Improvement */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <RefreshCw
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Continuous Self-Improvement Dashboard
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Monitor learning habits continuously.",
            "Update AI recommendations after every mock test.",
            "Adjust revision plans automatically based on performance.",
            "Track long-term growth using personalized AI insights.",
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

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download AI Profile
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export Learning Report
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Update AI Learning Twin
        </button>

      </div>

    </div>

  );

}