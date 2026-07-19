"use client";

import { useState } from "react";
import {
  Trophy,
  Flame,
  Brain,
  Timer,
  Puzzle,
  BarChart3,
  Award,
  Download,
  Search,
  Filter,
} from "lucide-react";

const dailyChallenges = [
  {
    id: 1,
    title: "Polity MCQ Challenge",
    questions: 20,
    difficulty: "Medium",
    reward: "100 XP",
  },
  {
    id: 2,
    title: "History Quick Quiz",
    questions: 15,
    difficulty: "Easy",
    reward: "75 XP",
  },
  {
    id: 3,
    title: "Science Challenge",
    questions: 25,
    difficulty: "Hard",
    reward: "150 XP",
  },
  {
    id: 4,
    title: "Aptitude Speed Test",
    questions: 30,
    difficulty: "Medium",
    reward: "120 XP",
  },
];

export default function DailyChallengePage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Daily Challenge Center
          </h1>

          <p className="mt-2 text-slate-500">
            Complete daily AI-generated challenges, maintain your streak,
            and improve your TNPSC preparation every day.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Download Progress

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Today's Challenges",
            value: "8",
            icon: Trophy,
          },
          {
            title: "Current Streak",
            value: "28 Days",
            icon: Flame,
          },
          {
            title: "Earned XP",
            value: "4,850",
            icon: Award,
          },
          {
            title: "Completion",
            value: "92%",
            icon: BarChart3,
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
              placeholder="Search daily challenge..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Daily Challenges */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Today's Challenges
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {dailyChallenges.map((challenge) => (

            <div
              key={challenge.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {challenge.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {challenge.questions} Questions • Reward: {challenge.reward}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    challenge.difficulty === "Hard"
                      ? "bg-red-100 text-red-700"
                      : challenge.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {challenge.difficulty}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Speed Quiz & Puzzle */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Timer
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Speed Quiz Mode
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center">

            <div className="text-center">

              <Timer
                size={70}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-2xl font-bold">
                10-Minute Challenge
              </h3>

              <p className="mt-2 text-slate-500">
                Answer maximum questions before the timer ends.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Puzzle
              size={24}
              className="text-purple-600"
            />

            <h2 className="text-2xl font-bold">
              Puzzle Challenge
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center">

            <div className="text-center">

              <Puzzle
                size={70}
                className="mx-auto mb-4 text-purple-600"
              />

              <h3 className="text-2xl font-bold">
                Daily Brain Puzzle
              </h3>

              <p className="mt-2 text-slate-500">
                Solve logic, reasoning, and aptitude puzzles to earn bonus XP.
              </p>

            </div>

          </div>

        </div>

      </div>

            {/* Daily Streak */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Flame
            size={24}
            className="text-orange-500"
          />

          <h2 className="text-2xl font-bold">
            Daily Streak Tracker
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Current Streak", "28 Days"],
            ["Best Streak", "65 Days"],
            ["Today's Status", "Completed"],
            ["Next Reward", "30 Days"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >
              <p className="text-sm text-slate-500">{title}</p>

              <h3 className="mt-2 text-2xl font-bold">
                {value}
              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* Leaderboard & Rewards */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Trophy
              size={24}
              className="text-yellow-500"
            />

            <h2 className="text-2xl font-bold">
              Challenge Leaderboard
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              ["You", "4,850 XP"],
              ["Top Performer", "5,120 XP"],
              ["Rank #3", "4,790 XP"],
              ["Rank #4", "4,650 XP"],
            ].map(([name, xp]) => (

              <div
                key={name}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <span className="font-medium">{name}</span>

                <span className="font-semibold text-indigo-600">
                  {xp}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Award
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Reward Badges
            </h2>

          </div>

          <div className="grid gap-4 p-6 grid-cols-2">

            {[
              "🏅 Consistency",
              "🔥 Streak Master",
              "🧠 Quiz Genius",
              "⭐ Top Scorer",
              "🎯 Accuracy Expert",
              "🚀 Fast Learner",
            ].map((badge) => (

              <div
                key={badge}
                className="rounded-xl border bg-yellow-50 p-5 text-center font-semibold"
              >
                {badge}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Performance Summary */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Daily Performance Summary
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {[
            ["Challenges Completed", "7 / 8"],
            ["Accuracy", "91%"],
            ["Average Time", "42 sec/question"],
            ["XP Earned Today", "420 XP"],
          ].map(([title, value]) => (

            <div key={title}>

              <div className="mb-2 flex justify-between">

                <span>{title}</span>

                <span className="font-semibold">
                  {value}
                </span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{
                    width:
                      title === "Challenges Completed"
                        ? "87%"
                        : title === "Accuracy"
                        ? "91%"
                        : title === "Average Time"
                        ? "70%"
                        : "84%",
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Daily Challenge */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Daily Challenge Recommendation
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Complete a 25-question Polity challenge today.",
              "Solve one Aptitude speed test within 10 minutes.",
              "Revise Current Affairs before attempting today's quiz.",
              "Finish one mixed-subject challenge to maintain your streak.",
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

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Summary
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Results
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start AI Challenge
        </button>

      </div>

    </div>

  );

}