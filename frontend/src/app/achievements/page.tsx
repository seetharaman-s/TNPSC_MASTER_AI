"use client";

import Link from "next/link";
import {
  Trophy,
  Award,
  Flame,
  Star,
  Target,
  Gift,
  Medal,
  BadgeCheck,
} from "lucide-react";

const badges = [
  {
    id: 1,
    title: "30-Day Streak",
    description: "Study continuously for 30 days.",
    earned: true,
  },
  {
    id: 2,
    title: "100 Mock Tests",
    description: "Complete 100 mock tests.",
    earned: false,
  },
  {
    id: 3,
    title: "Top 100 Rank",
    description: "Reach the Top 100 leaderboard.",
    earned: true,
  },
  {
    id: 4,
    title: "10,000 MCQs",
    description: "Solve 10,000 practice questions.",
    earned: false,
  },
];

export default function AchievementsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Achievements
          </h1>

          <p className="mt-2 text-slate-500">
            Track your learning milestones, rewards, badges, certificates, and study accomplishments.
          </p>

        </div>

        <Link
          href="/leaderboard"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold"
        >
          Leaderboard
        </Link>

      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Current Level",
            value: "Level 18",
            icon: Star,
          },
          {
            title: "XP Earned",
            value: "18,420",
            icon: Trophy,
          },
          {
            title: "Study Streak",
            value: "29 Days",
            icon: Flame,
          },
          {
            title: "Badges",
            value: "24",
            icon: Award,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border bg-white shadow-sm p-6"
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

      {/* XP Progress */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Level Progress
          </h2>

          <p className="mt-2 text-indigo-100">
            18,420 XP earned. Earn 1,580 XP more to reach Level 19.
          </p>

          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <span>Progress</span>

              <span>92%</span>

            </div>

            <div className="h-4 rounded-full bg-white/20">

              <div
                className="h-4 rounded-full bg-white"
                style={{ width: "92%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Badge Collection */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Badge Collection
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {badges.map((badge) => (

            <div
              key={badge.id}
              className={`rounded-xl border p-6 text-center transition ${
                badge.earned
                  ? "border-green-300 bg-green-50"
                  : "opacity-70"
              }`}
            >

              <BadgeCheck
                size={42}
                className={`mx-auto mb-4 ${
                  badge.earned
                    ? "text-green-600"
                    : "text-slate-400"
                }`}
              />

              <h3 className="font-semibold">
                {badge.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {badge.description}
              </p>

              <span
                className={`mt-4 inline-block rounded-full px-4 py-1 text-xs font-semibold ${
                  badge.earned
                    ? "bg-green-600 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {badge.earned ? "Earned" : "Locked"}
              </span>

            </div>

          ))}

        </div>

      </div>

            {/* Study Streak Timeline */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Study Streak Timeline
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-5">

          {[
            ["Current", "29 Days"],
            ["Best", "84 Days"],
            ["This Month", "26 Days"],
            ["This Year", "214 Days"],
            ["Longest Session", "8 Hours"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Flame
                size={36}
                className="mx-auto mb-3 text-orange-500"
              />

              <h3 className="font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Goals & Rewards */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Personal Goals */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Target
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Personal Goals
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Complete 100 Mock Tests", "64%"],
              ["Reach Top 100 Rank", "78%"],
              ["Solve 10,000 MCQs", "91%"],
              ["Read All TNPSC Books", "82%"],
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

        {/* Rewards */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Gift
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Rewards Wallet
            </h2>

          </div>

          <div className="p-6">

            <div className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 p-6 text-white">

              <h3 className="text-lg font-semibold">
                Available Reward Points
              </h3>

              <p className="mt-3 text-5xl font-bold">
                8,450
              </p>

            </div>

            <div className="mt-6 space-y-4">

              {[
                "Premium Mock Test Access",
                "Exclusive PDF Notes",
                "AI Mentor Credits",
                "Achievement Certificates",
              ].map((reward) => (

                <div
                  key={reward}
                  className="rounded-xl border p-4"
                >
                  {reward}
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Milestones */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Milestones
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["1,000 Questions", true],
            ["5,000 Questions", true],
            ["10,000 Questions", false],
            ["Top 10 Rank", false],
          ].map(([title, completed]) => (

            <div
              key={String(title)}
              className={`rounded-xl border p-5 text-center ${
                completed
                  ? "bg-green-50 border-green-300"
                  : ""
              }`}
            >

              <Medal
                size={40}
                className={`mx-auto mb-3 ${
                  completed
                    ? "text-green-600"
                    : "text-slate-400"
                }`}
              />

              <h3 className="font-semibold">
                {title}
              </h3>

              <p className="mt-3">

                {completed ? "Completed" : "In Progress"}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Certificates */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Certificates
          </h2>

        </div>

        <div className="divide-y">

          {[
            "30-Day Study Streak Certificate",
            "Top Performer Certificate",
            "Mock Test Excellence",
            "AI Learning Completion",
          ].map((certificate) => (

            <div
              key={certificate}
              className="flex items-center justify-between p-5"
            >

              <span>{certificate}</span>

              <button className="rounded-lg border px-4 py-2">
                Download
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* XP History */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            XP Progress History
          </h2>

        </div>

        <div className="p-8">

          <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-slate-300">

            <div className="text-center">

              <Star
                size={56}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                XP Growth Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts LineChart or AreaChart.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Seasonal Events */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Seasonal Challenges
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {[
              "Summer Learning Marathon",
              "100-Day TNPSC Challenge",
              "Current Affairs Championship",
            ].map((event) => (

              <div
                key={event}
                className="rounded-xl bg-white/10 p-6 backdrop-blur"
              >

                <Trophy
                  size={34}
                  className="mb-4"
                />

                <h3 className="font-semibold">
                  {event}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Achievements
        </button>

        <button className="rounded-xl border px-6 py-3">
          Share Profile
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          View Leaderboard
        </button>

      </div>

    </div>

  );

}