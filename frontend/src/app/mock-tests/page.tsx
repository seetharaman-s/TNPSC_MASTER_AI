"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Timer,
  Trophy,
  Brain,
  ClipboardCheck,
  PlayCircle,
} from "lucide-react";

interface MockTest {
  id: number;
  title: string;
  category: string;
  questions: number;
  duration: number;
  difficulty: "Easy" | "Medium" | "Hard";
}

const mockTests: MockTest[] = [
  {
    id: 1,
    title: "TNPSC Group 4 Full Mock Test",
    category: "Full Test",
    questions: 200,
    duration: 180,
    difficulty: "Medium",
  },
  {
    id: 2,
    title: "Indian Polity Unit Test",
    category: "Unit Test",
    questions: 50,
    duration: 45,
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Current Affairs Weekly Test",
    category: "Current Affairs",
    questions: 40,
    duration: 30,
    difficulty: "Medium",
  },
  {
    id: 4,
    title: "Mental Ability Challenge",
    category: "Aptitude",
    questions: 60,
    duration: 60,
    difficulty: "Hard",
  },
];

export default function MockTestsPage() {

  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {
    return mockTests.filter((test) =>
      test.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Mock Tests
        </h1>

        <p className="mt-2 text-slate-500">
          Practice with full-length, unit-wise, and AI-generated mock tests.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        {[
          ["Available Tests", "520"],
          ["Completed", "142"],
          ["Average Score", "86%"],
          ["Certificates", "18"],
        ].map(([title, value]) => (

          <div
            key={title}
            className="rounded-2xl border bg-white shadow-sm p-6"
          >

            <p className="text-slate-500">
              {title}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              {value}
            </h2>

          </div>

        ))}

      </div>

      {/* Search */}

      <div className="rounded-2xl border bg-white shadow-sm p-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              className="absolute left-3 top-3 text-slate-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mock tests..."
              className="w-full rounded-lg border py-3 pl-10"
            />

          </div>

          <button className="flex items-center gap-2 rounded-lg border px-5">

            <Filter size={18} />

            Filters

          </button>

        </div>

      </div>

      {/* Mock Test Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {filteredTests.map((test) => (

          <div
            key={test.id}
            className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
          >

            <div className="flex h-40 items-center justify-center rounded-t-2xl bg-gradient-to-br from-emerald-600 to-teal-700">

              <ClipboardCheck
                className="text-white"
                size={60}
              />

            </div>

            <div className="p-6">

              <h3 className="text-lg font-bold">
                {test.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {test.category}
              </p>

              <div className="mt-5 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>Questions</span>
                  <span>{test.questions}</span>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{test.duration} min</span>
                </div>

                <div className="flex justify-between">
                  <span>Difficulty</span>
                  <span>{test.difficulty}</span>
                </div>

              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">

                <Link
                  href={`/mock-tests/${test.id}`}
                  className="rounded-lg bg-emerald-600 py-2 text-center text-white"
                >
                  Start
                </Link>

                <button className="flex items-center justify-center rounded-lg border">

                  <PlayCircle size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

            {/* Continue Test & Test History */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Continue Test */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Continue Test
            </h2>

            <Link
              href="/mock-tests/history"
              className="text-emerald-600"
            >
              View History
            </Link>

          </div>

          <div className="divide-y">

            {mockTests.map((test) => (

              <div
                key={test.id}
                className="p-5 hover:bg-slate-50 transition"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold">
                      {test.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {test.questions} Questions • {test.duration} Minutes
                    </p>

                  </div>

                  <Link
                    href={`/mock-tests/${test.id}`}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
                  >
                    Resume
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Test History */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex justify-between items-center p-6 border-b">

            <h2 className="text-2xl font-bold">
              Recent Attempts
            </h2>

            <Trophy
              className="text-yellow-500"
              size={24}
            />

          </div>

          <div className="divide-y">

            {[
              ["Group 4 Mock Test", "92%"],
              ["Indian Polity", "88%"],
              ["Current Affairs", "90%"],
              ["Mental Ability", "84%"],
            ].map(([title, score]) => (

              <div
                key={title}
                className="flex justify-between items-center p-5 hover:bg-slate-50"
              >

                <div>

                  <h3 className="font-medium">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Last Attempt
                  </p>

                </div>

                <span className="font-bold text-emerald-600">
                  {score}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Unit Wise Categories */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">
            Unit-wise Mock Tests
          </h2>

        </div>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-5 p-6">

          {[
            "Tamil",
            "History",
            "Polity",
            "Science",
            "Economy",
            "Geography",
            "Current Affairs",
            "Environment",
            "Reasoning",
            "Aptitude",
            "English",
            "Computer",
          ].map((subject) => (

            <button
              key={subject}
              className="rounded-xl border py-5 hover:bg-emerald-50 transition font-medium"
            >
              {subject}
            </button>

          ))}

        </div>

      </div>

      {/* AI Custom Test */}

      <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            AI Custom Mock Test Generator
          </h2>

          <p className="mt-2 text-emerald-100">
            Create personalized mock tests based on your preparation level and selected subjects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              "Generate 25 Questions",
              "Generate 50 Questions",
              "Generate Full Mock Test",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white/10 backdrop-blur p-6"
              >

                <Brain
                  className="mb-4"
                  size={34}
                />

                <h3 className="font-semibold">
                  {item}
                </h3>

                <button className="mt-5 bg-white text-emerald-700 px-4 py-2 rounded-lg font-medium">
                  Generate
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Scheduled Mock Tests */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-2xl font-bold">
            Upcoming Scheduled Tests
          </h2>

          <Timer
            className="text-emerald-600"
            size={24}
          />

        </div>

        <div className="divide-y">

          {[
            ["Weekly Grand Test", "Tomorrow • 10:00 AM"],
            ["Current Affairs Test", "Monday • 7:00 PM"],
            ["Polity Challenge", "Wednesday • 6:30 PM"],
            ["Monthly Mega Test", "31 July • 9:00 AM"],
          ].map(([title, time]) => (

            <div
              key={title}
              className="flex justify-between items-center p-5 hover:bg-slate-50"
            >

              <div>

                <h3 className="font-semibold">
                  {title}
                </h3>

                <p className="text-sm text-slate-500">
                  {time}
                </p>

              </div>

              <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
                Register
              </button>

            </div>

          ))}

        </div>

      </div>

            {/* Performance Analytics & Leaderboard */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Analytics */}

        <div className="xl:col-span-2 bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Mock Test Analytics
            </h2>

            <Link
              href="/analytics/mock-tests"
              className="text-emerald-600"
            >
              View Analytics
            </Link>

          </div>

          <div className="p-8">

            {/* Replace with Recharts */}

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <Brain
                  size={54}
                  className="mx-auto text-emerald-600 mb-4"
                />

                <h3 className="text-lg font-semibold">

                  Weekly Performance Analytics

                </h3>

                <p className="mt-2 text-slate-500">

                  Line Chart • Score Trend • Accuracy • Time Analysis

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Leaderboard */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Weekly Leaderboard

            </h2>

          </div>

          <div className="divide-y">

            {[
              ["Ramesh", "98%"],
              ["Priya", "97%"],
              ["Karthik", "96%"],
              ["You", "94%"],
              ["Divya", "93%"],
            ].map(([name, score], index) => (

              <div
                key={name}
                className="flex justify-between items-center p-5 hover:bg-slate-50"
              >

                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center font-bold">

                    {index + 1}

                  </div>

                  <span className="font-medium">

                    {name}

                  </span>

                </div>

                <span className="font-bold text-emerald-600">

                  {score}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Weekly Progress */}

      <div className="grid md:grid-cols-4 gap-6">

        {[
          ["Tests Completed", "146"],
          ["Average Score", "89%"],
          ["Study Streak", "29 Days"],
          ["Rank", "#24"],
        ].map(([title, value]) => (

          <div
            key={title}
            className="rounded-2xl border bg-white shadow-sm p-6"
          >

            <p className="text-slate-500">

              {title}

            </p>

            <h2 className="mt-4 text-4xl font-bold">

              {value}

            </h2>

          </div>

        ))}

      </div>

      {/* Subject-wise Accuracy */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">

          Subject-wise Accuracy

        </h2>

        <div className="space-y-5">

          {[
            ["Tamil", "95%"],
            ["History", "88%"],
            ["Polity", "91%"],
            ["Science", "83%"],
            ["Geography", "86%"],
            ["Current Affairs", "90%"],
            ["Economy", "84%"],
          ].map(([subject, score]) => (

            <div key={subject}>

              <div className="flex justify-between mb-2">

                <span>{subject}</span>

                <span>{score}</span>

              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full">

                <div
                  className="h-3 rounded-full bg-emerald-600"
                  style={{ width: score }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Performance Insights */}

      <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">

            AI Performance Insights

          </h2>

          <p className="mt-2 text-emerald-100">

            Personalized recommendations based on your recent mock test performance.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              {
                title: "Improve Geography",
                description: "Your average score is 78%. Practice 3 more unit tests this week.",
              },
              {
                title: "Excellent in Tamil",
                description: "Maintain your 95% accuracy with weekly revision.",
              },
              {
                title: "Focus on Current Affairs",
                description: "Attempt daily quizzes to improve recall and speed.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 backdrop-blur p-6"
              >

                <Brain
                  size={34}
                  className="mb-4"
                />

                <h3 className="font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-sm text-emerald-100">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Achievements */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">

          Achievements & Badges

        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[
            "🏅 Top Performer",
            "🔥 30-Day Streak",
            "🎯 Accuracy Master",
            "📚 100 Mock Tests Completed",
          ].map((badge) => (

            <div
              key={badge}
              className="rounded-xl border p-6 text-center hover:shadow-md transition"
            >

              <Trophy
                className="mx-auto text-yellow-500 mb-4"
                size={40}
              />

              <p className="font-semibold">

                {badge}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}