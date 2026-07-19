"use client";

import { useState } from "react";
import {
  Target,
  Briefcase,
  BookOpen,
  Brain,
  GraduationCap,
  BarChart3,
  Download,
  Search,
  Filter,
} from "lucide-react";

const careerRoadmap = [
  {
    id: 1,
    role: "TNPSC Group IV",
    status: "In Progress",
    completion: "78%",
    priority: "High",
  },
  {
    id: 2,
    role: "VAO",
    status: "Planned",
    completion: "30%",
    priority: "Medium",
  },
  {
    id: 3,
    role: "Junior Assistant",
    status: "Completed",
    completion: "100%",
    priority: "High",
  },
  {
    id: 4,
    role: "Typist",
    status: "Not Started",
    completion: "0%",
    priority: "Low",
  },
];

export default function CareerGuidancePage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Career Guidance Center
          </h1>

          <p className="mt-2 text-slate-500">
            Discover government career opportunities, analyze skill gaps,
            and receive AI-powered career guidance tailored to your preparation.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Career Plan

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Career Readiness",
            value: "90%",
            icon: BarChart3,
          },
          {
            title: "Target Jobs",
            value: "12",
            icon: Briefcase,
          },
          {
            title: "Certifications",
            value: "9",
            icon: GraduationCap,
          },
          {
            title: "AI Match Score",
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
              placeholder="Search career paths..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Career Roadmap */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Career Roadmap Planner
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {careerRoadmap.map((career) => (

            <div
              key={career.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {career.role}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Completion: {career.completion}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    career.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : career.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {career.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Government Job Explorer */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Briefcase
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Government Job Explorer
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Briefcase
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Government Career Opportunities
            </h3>

            <p className="mt-2 text-slate-500">
              Display TNPSC, UPSC, SSC, Railways, Banking, and State Government opportunities with filters and eligibility details.
            </p>

          </div>

        </div>

      </div>

            {/* Skill Gap Analysis */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <BookOpen
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Skill Gap Analysis
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {[
            ["General Knowledge", "92%"],
            ["Current Affairs", "85%"],
            ["Aptitude", "73%"],
            ["Tamil", "88%"],
            ["Reasoning", "81%"],
          ].map(([skill, value]) => (

            <div key={skill}>

              <div className="mb-2 flex justify-between">

                <span>{skill}</span>

                <span>{value}</span>

              </div>

              <div className="h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{ width: value }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Career Recommendations */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Career Recommendations
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Focus on TNPSC Group IV preparation based on your current performance.",
              "Strengthen Aptitude and Reasoning to improve competitiveness.",
              "Complete monthly mock tests to increase your readiness score.",
              "Earn certifications in Excel, Computer Fundamentals, and Tamil Typing where applicable.",
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

      {/* Learning Path & Certifications */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Personalized Learning Path
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Week 1 – Polity & History",
              "Week 2 – Science & Economy",
              "Week 3 – Aptitude & Reasoning",
              "Week 4 – Revision & Mock Tests",
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

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Certification Tracker
            </h2>

          </div>

          <div className="grid gap-4 p-6">

            {[
              ["MS Office", "Completed"],
              ["Computer Fundamentals", "Completed"],
              ["Excel", "In Progress"],
              ["Tamil Typing", "Planned"],
            ].map(([course, status]) => (

              <div
                key={course}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{course}</span>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Career Readiness Dashboard */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Career Readiness Dashboard
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <BarChart3
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Career Analytics
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (RadarChart, LineChart, and BarChart) to visualize readiness score, skills, certifications, and career progress.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Career Plan
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Report
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Career Roadmap
        </button>

      </div>

    </div>

  );

}