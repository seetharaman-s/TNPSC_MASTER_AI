"use client";

import Link from "next/link";
import {
  Bot,
  BookOpen,
  Brain,
  Calendar,
  FileQuestion,
  Sparkles,
  TrendingUp,
  Flame,
  ArrowRight,
} from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const aiModules: DashboardCardProps[] = [
  {
    title: "AI Chat Assistant",
    description: "Ask TNPSC questions in Tamil or English.",
    href: "/ai/chat",
    icon: <Bot className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Topic Explanation",
    description: "Understand concepts with AI explanations.",
    href: "/ai/explain",
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
  },
  {
    title: "MCQ Generator",
    description: "Generate AI-powered practice questions.",
    href: "/ai/mcq",
    icon: <FileQuestion className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Study Planner",
    description: "Create a personalized study schedule.",
    href: "/ai/study-planner",
    icon: <Calendar className="h-8 w-8 text-purple-600" />,
  },
];

export default function AIDashboard() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-white/20 p-3">

            <Brain className="h-10 w-10" />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              TNPSC MASTER AI
            </h1>

            <p className="mt-2 text-blue-100">
              Your intelligent learning companion for TNPSC preparation.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          icon={<Sparkles className="h-7 w-7 text-blue-600" />}
          title="AI Sessions"
          value="156"
        />

        <StatCard
          icon={<BookOpen className="h-7 w-7 text-green-600" />}
          title="Topics Learned"
          value="84"
        />

        <StatCard
          icon={<TrendingUp className="h-7 w-7 text-orange-600" />}
          title="MCQs Solved"
          value="1,240"
        />

        <StatCard
          icon={<Flame className="h-7 w-7 text-red-500" />}
          title="Learning Streak"
          value="21 Days"
        />

      </section>

      {/* AI Modules */}

      <section>

        <h2 className="mb-6 text-2xl font-bold">
          AI Learning Tools
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {aiModules.map((module) => (

            <Link
              key={module.title}
              href={module.href}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div>

                  {module.icon}

                  <h3 className="mt-4 text-xl font-semibold">

                    {module.title}

                  </h3>

                  <p className="mt-2 text-gray-600">

                    {module.description}

                  </p>

                </div>

                <ArrowRight className="h-6 w-6 text-gray-400 transition group-hover:translate-x-1" />

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* Recommendations */}

      <section className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-xl font-bold">

          AI Recommendations

        </h2>

        <ul className="space-y-3">

          <li className="rounded-lg bg-blue-50 p-4">
            📘 Revise Indian Polity today.
          </li>

          <li className="rounded-lg bg-green-50 p-4">
            📝 Complete a 20-question Geography MCQ test.
          </li>

          <li className="rounded-lg bg-yellow-50 p-4">
            📚 Review yesterday's weak topics.
          </li>

          <li className="rounded-lg bg-purple-50 p-4">
            🎯 Maintain your learning streak.
          </li>

        </ul>

      </section>

    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-4">

        {icon}

      </div>

      <p className="text-sm text-gray-500">

        {title}

      </p>

      <h3 className="mt-2 text-3xl font-bold">

        {value}

      </h3>

    </div>
  );
}