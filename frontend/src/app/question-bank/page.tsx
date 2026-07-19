"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Bookmark,
  Clock,
  Brain,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

interface QuestionSet {
  id: number;
  title: string;
  subject: string;
  questions: number;
  difficulty: "Easy" | "Medium" | "Hard";
  completed: boolean;
}

const questionSets: QuestionSet[] = [
  {
    id: 1,
    title: "Indian Polity - Fundamental Rights",
    subject: "Polity",
    questions: 25,
    difficulty: "Easy",
    completed: true,
  },
  {
    id: 2,
    title: "Ancient Tamil History",
    subject: "History",
    questions: 30,
    difficulty: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "General Science Practice",
    subject: "Science",
    questions: 40,
    difficulty: "Hard",
    completed: false,
  },
  {
    id: 4,
    title: "Mental Ability Test",
    subject: "Aptitude",
    questions: 50,
    difficulty: "Medium",
    completed: true,
  },
];

export default function QuestionBankPage() {

  const [search, setSearch] = useState("");

  const filteredQuestions = useMemo(() => {
    return questionSets.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Question Bank
        </h1>

        <p className="mt-2 text-slate-500">
          Practice TNPSC questions by subject, unit and difficulty.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        {[
          ["Question Sets", "420"],
          ["Total Questions", "18,420"],
          ["Completed", "186"],
          ["Bookmarks", "72"],
        ].map(([title, value]) => (

          <div
            key={title}
            className="bg-white rounded-2xl border shadow-sm p-6"
          >

            <p className="text-slate-500">
              {title}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {value}
            </h2>

          </div>

        ))}

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="relative flex-1">

            <Search
              className="absolute left-3 top-3 text-slate-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Question Bank..."
              className="w-full rounded-lg border py-3 pl-10"
            />

          </div>

          <button className="flex items-center gap-2 rounded-lg border px-5">

            <Filter size={18} />

            Filters

          </button>

        </div>

      </div>

      {/* Question Sets */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {filteredQuestions.map((set) => (

          <div
            key={set.id}
            className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
          >

            <div className="flex h-40 items-center justify-center rounded-t-2xl bg-gradient-to-br from-purple-600 to-indigo-700">

              <Brain
                className="text-white"
                size={60}
              />

            </div>

            <div className="p-6">

              <h3 className="text-lg font-bold">
                {set.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {set.subject}
              </p>

              <div className="mt-5 flex items-center justify-between text-sm">

                <span>{set.questions} Questions</span>

                <span className="font-medium">
                  {set.difficulty}
                </span>

              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">

                <Link
                  href={`/question-bank/${set.id}`}
                  className="rounded-lg bg-purple-600 py-2 text-center text-white"
                >
                  Start
                </Link>

                <button className="flex items-center justify-center rounded-lg border">

                  <Bookmark size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

            {/* Continue Practice & Bookmarks */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Continue Practice */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Continue Practice
            </h2>

            <Link
              href="/question-bank/history"
              className="text-purple-600"
            >
              View All
            </Link>

          </div>

          <div className="divide-y">

            {questionSets.slice(0,4).map((set)=>(

              <div
                key={set.id}
                className="p-5 hover:bg-slate-50"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold">

                      {set.title}

                    </h3>

                    <p className="text-sm text-slate-500 mt-1">

                      {set.questions} Questions

                    </p>

                  </div>

                  <Link
                    href={`/question-bank/${set.id}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                  >

                    Resume

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bookmarked */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">

              Bookmarked Questions

            </h2>

            <Bookmark
              className="text-yellow-500 fill-yellow-500"
              size={22}
            />

          </div>

          <div className="divide-y">

            {questionSets.slice(0,4).map((set)=>(

              <div
                key={set.id}
                className="flex justify-between items-center p-5 hover:bg-slate-50"
              >

                <div>

                  <h3 className="font-medium">

                    {set.title}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {set.subject}

                  </p>

                </div>

                <Bookmark
                  className="text-yellow-500 fill-yellow-500"
                  size={18}
                />

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Subject Categories */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            Practice by Subject

          </h2>

        </div>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-5 p-6">

          {[
            "Tamil",
            "History",
            "Polity",
            "Geography",
            "Science",
            "Economy",
            "Environment",
            "Current Affairs",
            "Reasoning",
            "Aptitude",
            "English",
            "Computer",
          ].map((subject)=>(

            <button
              key={subject}
              className="border rounded-xl py-5 hover:bg-purple-50 transition font-medium"
            >

              {subject}

            </button>

          ))}

        </div>

      </div>

      {/* Previous Year Papers */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-2xl font-bold">

            Previous Year TNPSC Papers

          </h2>

          <Link
            href="/question-bank/previous-year"
            className="text-purple-600"
          >

            View All

          </Link>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            "TNPSC Group 4 - 2025",
            "TNPSC Group 4 - 2024",
            "TNPSC Group 2 - 2025",
            "TNPSC Group 2A - 2024",
          ].map((paper)=>(

            <div
              key={paper}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >

              <CheckCircle
                className="text-purple-600 mb-4"
                size={32}
              />

              <h3 className="font-semibold">

                {paper}

              </h3>

              <div className="mt-5">

                <Link
                  href="#"
                  className="block bg-purple-600 text-white text-center py-2 rounded-lg"
                >

                  Practice Now

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Daily Challenge */}

      <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">

            Daily Challenge

          </h2>

          <p className="mt-2 text-purple-100">

            Complete today's challenge to improve your TNPSC preparation.

          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            {[
              "25 Polity MCQs",
              "20 Science MCQs",
              "15 Current Affairs Questions",
            ].map((challenge)=>(

              <div
                key={challenge}
                className="rounded-xl bg-white/10 backdrop-blur p-6"
              >

                <Clock
                  className="mb-4"
                  size={32}
                />

                <h3 className="font-semibold">

                  {challenge}

                </h3>

                <button className="mt-5 bg-white text-purple-700 px-4 py-2 rounded-lg font-medium">

                  Start Challenge

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

            {/* Practice Analytics & Trending */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Analytics */}

        <div className="xl:col-span-2 bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Practice Analytics
            </h2>

            <Link
              href="/analytics/question-bank"
              className="text-purple-600"
            >
              View Report
            </Link>

          </div>

          <div className="p-8">

            {/* Replace with Recharts */}

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <Brain
                  className="mx-auto text-purple-600 mb-4"
                  size={54}
                />

                <p className="font-semibold">

                  Weekly Practice Analytics

                </p>

                <p className="text-sm text-slate-500 mt-2">

                  Display LineChart / BarChart using Recharts.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Trending */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Trending Practice Sets

            </h2>

          </div>

          <div className="divide-y">

            {questionSets.map((item)=>(

              <div
                key={item.id}
                className="p-5 hover:bg-slate-50"
              >

                <div className="font-semibold">

                  {item.title}

                </div>

                <div className="text-sm text-slate-500 mt-2">

                  🔥 Popular this week

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">

            AI Recommended Practice

          </h2>

          <p className="mt-2 text-purple-100">

            Personalized question sets based on your strengths and weaknesses.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              "Indian Constitution Practice",
              "History Revision MCQs",
              "Current Affairs Challenge",
            ].map((item)=>(

              <div
                key={item}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >

                <Brain
                  size={34}
                  className="mb-4"
                />

                <h3 className="font-semibold">

                  {item}

                </h3>

                <button className="mt-5 bg-white text-purple-700 px-4 py-2 rounded-lg font-medium">

                  Start Practice

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Performance Cards */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Accuracy
          </p>

          <h2 className="text-5xl font-bold text-green-600 mt-4">
            87%
          </h2>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Practice Streak
          </p>

          <h2 className="text-5xl font-bold text-orange-500 mt-4">
            26
          </h2>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Questions Solved
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mt-4">
            9.8K
          </h2>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <p className="text-slate-500">
            Weekly Goal
          </p>

          <h2 className="text-5xl font-bold text-purple-600 mt-4">
            91%
          </h2>

        </div>

      </div>

      {/* Subject Performance */}

      <div className="bg-white rounded-2xl border shadow-sm p-6">

        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold">

            Subject Performance

          </h2>

        </div>

        <div className="space-y-5">

          {[
            ["Tamil", "94%"],
            ["History", "82%"],
            ["Polity", "89%"],
            ["Science", "77%"],
            ["Geography", "85%"],
            ["Current Affairs", "91%"],
          ].map(([subject, score]) => (

            <div key={subject}>

              <div className="flex justify-between mb-2">

                <span>{subject}</span>

                <span>{score}</span>

              </div>

              <div className="w-full h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-purple-600"
                  style={{ width: score }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}