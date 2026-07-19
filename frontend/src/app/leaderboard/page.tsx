"use client";

import {
  Trophy,
  Medal,
  Award,
  Flame,
  TrendingUp,
  Users,
  Globe,
  MapPinned,
  Calendar,
} from "lucide-react";

export default function LeaderboardPage() {
  const leaderboard = [
    {
      rank: 1,
      name: "Arun Kumar",
      district: "Chennai",
      score: 198,
      streak: 84,
    },
    {
      rank: 2,
      name: "Priya",
      district: "Coimbatore",
      score: 196,
      streak: 62,
    },
    {
      rank: 3,
      name: "Karthik",
      district: "Madurai",
      score: 194,
      streak: 59,
    },
    {
      rank: 4,
      name: "Meena",
      district: "Salem",
      score: 192,
      streak: 45,
    },
    {
      rank: 5,
      name: "Vignesh",
      district: "Trichy",
      score: 191,
      streak: 51,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Leaderboard
          </h1>

          <p className="mt-2 text-slate-500">
            Compare your TNPSC preparation with learners across Tamil Nadu.
          </p>

        </div>

        <div className="rounded-xl bg-yellow-100 px-5 py-3">

          <span className="font-semibold text-yellow-700">
            Updated Every Hour
          </span>

        </div>

      </div>

      {/* Your Ranking */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="grid lg:grid-cols-4 gap-6 p-8">

          <div>

            <p className="text-indigo-200">
              Your Rank
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              #18
            </h2>

          </div>

          <div>

            <p className="text-indigo-200">
              Score
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              182
            </h2>

          </div>

          <div>

            <p className="text-indigo-200">
              Study Streak
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              29
            </h2>

          </div>

          <div>

            <p className="text-indigo-200">
              Percentile
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              96%
            </h2>

          </div>

        </div>

      </div>

      {/* Ranking Categories */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[
          {
            title: "State",
            icon: Globe,
          },
          {
            title: "District",
            icon: MapPinned,
          },
          {
            title: "Weekly",
            icon: Calendar,
          },
          {
            title: "Monthly",
            icon: TrendingUp,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:bg-indigo-50 transition"
            >

              <Icon
                size={36}
                className="mx-auto text-indigo-600"
              />

              <h3 className="mt-4 text-xl font-semibold">
                {item.title}
              </h3>

            </button>

          );

        })}

      </div>

      {/* Top Rankings */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Top Performers
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left">
                  Rank
                </th>

                <th className="px-6 py-4 text-left">
                  Name
                </th>

                <th className="px-6 py-4 text-left">
                  District
                </th>

                <th className="px-6 py-4 text-left">
                  Score
                </th>

                <th className="px-6 py-4 text-left">
                  Streak
                </th>

              </tr>

            </thead>

            <tbody>

              {leaderboard.map((user) => (

                <tr
                  key={user.rank}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-6 py-5 font-bold">
                    #{user.rank}
                  </td>

                  <td className="px-6 py-5">
                    {user.name}
                  </td>

                  <td className="px-6 py-5">
                    {user.district}
                  </td>

                  <td className="px-6 py-5">
                    {user.score}
                  </td>

                  <td className="px-6 py-5">
                    🔥 {user.streak}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

            {/* Achievement Badges */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Achievement Badges
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">

            {[
              "🏆 Top Performer",
              "🔥 30 Day Streak",
              "📚 Book Master",
              "🎯 Accuracy 95%",
              "⭐ Daily Learner",
              "🚀 Fast Improver",
            ].map((badge) => (

              <div
                key={badge}
                className="rounded-xl border p-5 text-center hover:shadow-md transition"
              >

                <Award
                  className="mx-auto mb-4 text-yellow-500"
                  size={36}
                />

                <p className="font-medium">
                  {badge}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Study Streak */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Study Streak Ranking
            </h2>

          </div>

          <div className="divide-y">

            {[
              ["Arun Kumar", "84 Days"],
              ["Priya", "62 Days"],
              ["Karthik", "59 Days"],
              ["Meena", "45 Days"],
              ["You", "29 Days"],
            ].map(([name, streak], index) => (

              <div
                key={name}
                className="flex items-center justify-between p-5"
              >

                <div className="flex items-center gap-4">

                  <span className="font-bold w-8">
                    #{index + 1}
                  </span>

                  <span>
                    {name}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-orange-600">

                  <Flame size={18} />

                  <span className="font-semibold">
                    {streak}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Subject-wise Top Performers */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Top Performers
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            ["Tamil", "Arun Kumar"],
            ["History", "Priya"],
            ["Polity", "Karthik"],
            ["Science", "Meena"],
            ["Economy", "Vignesh"],
            ["Geography", "Divya"],
            ["Aptitude", "Rahul"],
            ["Current Affairs", "You"],
          ].map(([subject, topper]) => (

            <div
              key={subject}
              className="rounded-xl bg-slate-50 p-5"
            >

              <h3 className="font-semibold">
                {subject}
              </h3>

              <p className="mt-3 text-slate-500">
                Top Performer
              </p>

              <p className="mt-1 font-bold text-indigo-600">
                {topper}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Friends & Weekly Rankings */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Users
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Friends Ranking
            </h2>

          </div>

          <div className="divide-y">

            {[
              ["You", "#1"],
              ["Friend A", "#2"],
              ["Friend B", "#3"],
              ["Friend C", "#4"],
            ].map(([name, rank]) => (

              <div
                key={name}
                className="flex items-center justify-between p-5"
              >

                <span>{name}</span>

                <span className="font-semibold">
                  {rank}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Weekly Improvement
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Accuracy", "+4.2%"],
              ["Study Hours", "+7 Hours"],
              ["Mock Tests", "+3"],
              ["MCQs Solved", "+240"],
            ].map(([title, value]) => (

              <div key={title}>

                <div className="flex justify-between mb-2">

                  <span>{title}</span>

                  <span className="font-semibold text-green-600">
                    {value}
                  </span>

                </div>

                <div className="h-2 rounded-full bg-slate-200">

                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: "82%" }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Performance Insights */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            AI Performance Insights
          </h2>

          <p className="mt-2 text-indigo-100">
            Personalized analysis based on your recent performance and study patterns.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              {
                title: "Strongest Area",
                value: "Tamil",
              },
              {
                title: "Needs Revision",
                value: "Economy",
              },
              {
                title: "Recommended",
                value: "1 Full Mock Test",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur"
              >

                <Medal
                  className="mb-4"
                  size={34}
                />

                <h3 className="text-xl font-semibold">
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

            {/* Rewards & Milestones */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Reward Points */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Reward Points
            </h2>

          </div>

          <div className="p-8">

            <div className="text-center">

              <div className="text-6xl font-extrabold text-indigo-600">
                8,450
              </div>

              <p className="mt-3 text-slate-500">
                Total Reward Points Earned
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="rounded-xl bg-slate-50 p-5">

                <p className="text-slate-500">
                  This Week
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  +480
                </h3>

              </div>

              <div className="rounded-xl bg-slate-50 p-5">

                <p className="text-slate-500">
                  This Month
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  +1,920
                </h3>

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

          <div className="space-y-5 p-6">

            {[
              ["10,000 Questions Solved", "Completed"],
              ["100 Mock Tests", "Completed"],
              ["50-Day Streak", "58%"],
              ["95% Accuracy", "81%"],
            ].map(([title, status]) => (

              <div
                key={title}
                className="rounded-xl border p-5"
              >

                <div className="flex justify-between">

                  <span className="font-medium">
                    {title}
                  </span>

                  <span className="font-semibold text-indigo-600">
                    {status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Hall of Fame */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Hall of Fame
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 p-6">

          {[
            {
              title: "Highest Score",
              value: "198 / 200",
            },
            {
              title: "Longest Study Streak",
              value: "84 Days",
            },
            {
              title: "Most Active Learner",
              value: "Arun Kumar",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border p-6 text-center"
            >

              <Trophy
                size={40}
                className="mx-auto mb-4 text-yellow-500"
              />

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-2xl font-bold text-indigo-600">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Rank History */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Rank History
          </h2>

        </div>

        <div className="p-8">

          <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

            <div className="text-center">

              <TrendingUp
                size={56}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Rank Progress Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts LineChart
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Next Goal */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Next Achievement Target
          </h2>

          <p className="mt-3 text-indigo-100">
            Solve another 180 questions to enter the Top 10 leaderboard.
          </p>

          <div className="mt-8">

            <div className="flex justify-between mb-3">

              <span>Progress</span>

              <span>72%</span>

            </div>

            <div className="h-4 rounded-full bg-white/20">

              <div
                className="h-4 rounded-full bg-white"
                style={{ width: "72%" }}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Community Events */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Community Challenges
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 p-6">

          {[
            "Weekly Quiz Challenge",
            "30-Day Study Marathon",
            "Current Affairs Championship",
          ].map((challenge) => (

            <div
              key={challenge}
              className="rounded-xl border p-6 hover:bg-indigo-50 transition"
            >

              <h3 className="font-semibold text-lg">
                {challenge}
              </h3>

              <p className="mt-3 text-slate-500">
                Participate to earn bonus points and exclusive badges.
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Share Rank
        </button>

        <button className="rounded-xl border px-6 py-3">
          Download Certificate
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          View Complete Rankings
        </button>

      </div>

    </div>

  );
}