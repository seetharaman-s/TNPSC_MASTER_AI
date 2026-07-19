"use client";

import { useState } from "react";
import {
  Mic,
  MessageSquare,
  FileText,
  Briefcase,
  Brain,
  TrendingUp,
  Target,
  Download,
  Search,
  Filter,
} from "lucide-react";

const interviewTopics = [
  {
    id: 1,
    title: "Self Introduction",
    category: "HR",
    difficulty: "Easy",
    duration: "5 mins",
  },
  {
    id: 2,
    title: "TNPSC General Questions",
    category: "Government",
    difficulty: "Medium",
    duration: "15 mins",
  },
  {
    id: 3,
    title: "Current Affairs Discussion",
    category: "Knowledge",
    difficulty: "Hard",
    duration: "20 mins",
  },
  {
    id: 4,
    title: "Situational Questions",
    category: "Personality",
    difficulty: "Medium",
    duration: "10 mins",
  },
];

export default function InterviewHubPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            TNPSC Interview & Personality Development Hub
          </h1>

          <p className="mt-2 text-slate-500">
            Practice interviews, improve communication skills, receive AI feedback,
            and build confidence for government job interviews.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Interview Report

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Mock Interviews",
            value: "24",
            icon: Mic,
          },
          {
            title: "Confidence Score",
            value: "88%",
            icon: Target,
          },
          {
            title: "AI Rating",
            value: "A",
            icon: Brain,
          },
          {
            title: "Readiness",
            value: "91%",
            icon: TrendingUp,
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
              placeholder="Search interview topics..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Mock Interview Topics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            AI Mock Interview Sessions
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {interviewTopics.map((topic) => (

            <div
              key={topic.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {topic.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {topic.category} • {topic.duration}
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    topic.difficulty === "Hard"
                      ? "bg-red-100 text-red-700"
                      : topic.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {topic.difficulty}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Speaking Practice */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <MessageSquare
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Communication & Speaking Practice
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <MessageSquare
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              AI Speaking Practice
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate speech recognition and pronunciation analysis for realistic interview practice.
            </p>

          </div>

        </div>

      </div>

            {/* Resume Builder & Interview Question Bank */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <FileText
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Resume Builder
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Personal Information",
              "Educational Qualification",
              "Skills & Certifications",
              "Projects & Internships",
              "Preview & Export PDF",
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

            <Briefcase
              size={24}
              className="text-green-600"
            />

            <h2 className="text-2xl font-bold">
              Government Interview Questions
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Tell us about yourself.",
              "Why do you want to join government service?",
              "Explain the duties of a public servant.",
              "How would you handle a difficult public situation?",
              "What are your strengths and weaknesses?",
            ].map((question) => (

              <div
                key={question}
                className="rounded-xl border p-4"
              >
                {question}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Feedback */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Interview Feedback
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Maintain eye contact while answering questions.",
              "Keep answers concise and structured.",
              "Improve confidence during situational responses.",
              "Support answers with practical examples whenever possible.",
            ].map((feedback) => (

              <div
                key={feedback}
                className="rounded-xl bg-white/10 p-4"
              >
                {feedback}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Personality Tracker & Readiness */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Personality Development Tracker
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["Communication", "90%"],
              ["Leadership", "84%"],
              ["Confidence", "88%"],
              ["Problem Solving", "86%"],
            ].map(([skill, score]) => (

              <div key={skill}>

                <div className="mb-2 flex justify-between">

                  <span>{skill}</span>

                  <span>{score}</span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className="h-3 rounded-full bg-indigo-600"
                    style={{ width: score }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Interview Readiness Dashboard
            </h2>

          </div>

          <div className="grid gap-4 p-6">

            {[
              ["Overall Readiness", "91%"],
              ["Confidence Score", "88%"],
              ["Mock Interviews Completed", "24"],
              ["Recommended Sessions", "3"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <span>{title}</span>

                <span className="font-bold text-indigo-600">
                  {value}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Print Report
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start AI Mock Interview
        </button>

      </div>

    </div>

  );

}