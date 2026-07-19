"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  Timer,
  Target,
  BarChart3,
  Brain,
  FileText,
  Trophy,
  Download,
  Search,
  Filter,
} from "lucide-react";

const mockExams = [
  {
    id: 1,
    title: "TNPSC Group IV Full Mock Test",
    questions: 200,
    duration: "3 Hours",
    difficulty: "Medium",
  },
  {
    id: 2,
    title: "General Studies Challenge",
    questions: 100,
    duration: "90 Minutes",
    difficulty: "Hard",
  },
  {
    id: 3,
    title: "Aptitude Practice Test",
    questions: 50,
    duration: "45 Minutes",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Current Affairs Mega Test",
    questions: 75,
    duration: "60 Minutes",
    difficulty: "Medium",
  },
];

export default function ExamSimulationLabPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Exam Simulation Lab
          </h1>

          <p className="mt-2 text-slate-500">
            Experience a real TNPSC examination environment with AI-powered
            monitoring, adaptive difficulty, and comprehensive performance
            analysis.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Exam Report

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Mock Exams",
            value: "86",
            icon: ClipboardCheck,
          },
          {
            title: "Readiness",
            value: "94%",
            icon: Trophy,
          },
          {
            title: "Average Score",
            value: "88%",
            icon: BarChart3,
          },
          {
            title: "AI Accuracy",
            value: "97%",
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
              placeholder="Search mock exams..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Exam Simulator */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <ClipboardCheck
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Full AI Exam Simulator
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {mockExams.map((exam) => (

            <div
              key={exam.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {exam.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {exam.questions} Questions • {exam.duration}
                  </p>

                </div>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  {exam.difficulty}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Real Exam Timer */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Timer
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Real Exam Environment
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Timer
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-5xl font-bold">
              03:00:00
            </h3>

            <p className="mt-3 text-slate-500">
              Simulated examination timer with automatic submission,
              pause restrictions, and exam rules.
            </p>

          </div>

        </div>

      </div>

            {/* Adaptive Difficulty Engine */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Target size={30} />

            <h2 className="text-3xl font-bold">
              Adaptive Difficulty Engine
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Difficulty increases as your accuracy improves.",
              "Weak topics receive additional practice questions.",
              "Question selection adapts to your performance.",
              "Balanced distribution across all TNPSC subjects.",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white/10 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Performance Tracking & AI Invigilator */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Live Performance Tracking
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Questions Attempted: 82 / 200",
              "Current Accuracy: 88%",
              "Average Time per Question: 46 sec",
              "Estimated Final Score: 174 / 200",
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

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Brain
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              AI Invigilator & Feedback
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Maintain a steady answering pace.",
              "Review flagged questions before submission.",
              "Avoid spending too much time on one question.",
              "Take a quick mental reset after every 50 questions.",
            ].map((tip) => (

              <div
                key={tip}
                className="rounded-xl border p-4"
              >
                {tip}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Post-Exam Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Post-Exam Analytics
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <BarChart3
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Exam Performance Dashboard
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (LineChart, RadarChart, BarChart, PieChart)
              to analyze accuracy, speed, subject-wise performance, and
              time management after each simulation.
            </p>

          </div>

        </div>

      </div>

      {/* Improvement Plan & Certification */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <FileText
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Personalized Improvement Plan
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Increase Geography revision frequency.",
              "Practice 50 Aptitude questions daily.",
              "Review incorrect answers after every mock test.",
              "Schedule one full-length mock every weekend.",
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

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Trophy
              size={24}
              className="text-amber-500"
            />

            <h2 className="text-2xl font-bold">
              Exam Readiness Certification
            </h2>

          </div>

          <div className="flex h-64 items-center justify-center">

            <div className="text-center">

              <Trophy
                size={64}
                className="mx-auto mb-4 text-amber-500"
              />

              <h3 className="text-xl font-bold">
                AI Readiness Score: 94%
              </h3>

              <p className="mt-2 text-slate-500">
                Generate a readiness certificate based on mock exam
                performance, consistency, and overall preparation.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Exam Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export Analytics
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start New Simulation
        </button>

      </div>

    </div>

  );

}