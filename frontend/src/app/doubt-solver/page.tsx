"use client";

import { useState } from "react";
import {
  Brain,
  Camera,
  BookOpen,
  Lightbulb,
  FileText,
  Search,
  Filter,
  Download,
  Upload,
} from "lucide-react";

const subjects = [
  {
    id: 1,
    name: "Polity",
    doubts: 124,
    level: "High",
  },
  {
    id: 2,
    name: "History",
    doubts: 96,
    level: "Medium",
  },
  {
    id: 3,
    name: "Science",
    doubts: 142,
    level: "High",
  },
  {
    id: 4,
    name: "Economy",
    doubts: 78,
    level: "Low",
  },
];

export default function DoubtSolverPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Doubt Solver & Tutor
          </h1>

          <p className="mt-2 text-slate-500">
            Ask questions, upload images, receive step-by-step explanations,
            and learn with your personal AI tutor.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Learning Notes

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Questions Solved",
            value: "2,184",
            icon: Brain,
          },
          {
            title: "Subjects",
            value: "12",
            icon: BookOpen,
          },
          {
            title: "AI Accuracy",
            value: "98%",
            icon: Lightbulb,
          },
          {
            title: "Saved Notes",
            value: "246",
            icon: FileText,
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
              placeholder="Ask your doubt..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Ask AI */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Ask AI Tutor
          </h2>

        </div>

        <div className="space-y-5 p-6">

          <textarea
            rows={5}
            placeholder="Type your TNPSC question here..."
            className="w-full rounded-xl border p-4"
          />

          <div className="flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl border px-5 py-3">

              <Upload size={18} />

              Upload Image

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white">

              <Brain size={18} />

              Solve with AI

            </button>

          </div>

        </div>

      </div>

      {/* Subject-wise Tutor */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <BookOpen
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Subject-wise AI Tutor
          </h2>

        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2">

          {subjects.map((subject) => (

            <div
              key={subject.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {subject.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {subject.doubts} Doubts Solved
                  </p>

                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    subject.level === "High"
                      ? "bg-red-100 text-red-700"
                      : subject.level === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {subject.level}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* OCR Image Solver */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Camera
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Image Question Solver
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Camera
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              OCR Question Recognition
            </h3>

            <p className="mt-2 text-slate-500">
              Upload a book page or handwritten question to extract text
              and generate a detailed AI explanation.
            </p>

          </div>

        </div>

      </div>

            {/* Step-by-Step Explanation */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <FileText
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Step-by-Step Explanation
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Step 1: Understand the question and identify the topic.",
            "Step 2: Recall the relevant concept or formula.",
            "Step 3: Eliminate incorrect options logically.",
            "Step 4: Verify the final answer with a short explanation.",
          ].map((step) => (

            <div
              key={step}
              className="rounded-xl border p-4"
            >
              {step}
            </div>

          ))}

        </div>

      </div>

      {/* Similar Questions & Learning Tips */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Similar Practice Questions
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Practice MCQ Set - Indian Constitution",
              "Previous Year Question - Fundamental Rights",
              "Current Affairs Related Question",
              "Advanced Concept Practice",
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

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Lightbulb
              size={24}
              className="text-amber-500"
            />

            <h2 className="text-2xl font-bold">
              AI Learning Tips
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Revise difficult concepts using flashcards.",
              "Practice at least 25 MCQs after learning each topic.",
              "Use spaced repetition to improve retention.",
              "Review mistakes after every mock test.",
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

      {/* Concept Summary */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <BookOpen size={30} />

            <h2 className="text-3xl font-bold">
              AI Concept Summary
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Provides concise summaries for every TNPSC topic.",
              "Highlights important facts and frequently asked points.",
              "Includes memory tricks and quick revision notes.",
              "Links related concepts for better understanding.",
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

      {/* Personalized Tutor Dashboard */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Personalized Tutoring Dashboard
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Brain
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              AI Learning Analytics
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate charts to display learning progress, doubt-solving history, subject mastery, and personalized recommendations.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Notes
        </button>

        <button className="rounded-xl border px-6 py-3">
          Save Explanation
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Ask Another Question
        </button>

      </div>

    </div>

  );

}