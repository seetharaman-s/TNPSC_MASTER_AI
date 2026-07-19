"use client";

import { useState } from "react";
import {
  FlaskConical,
  BookOpen,
  Lightbulb,
  TestTube,
  BarChart3,
  Brain,
  FileText,
  Rocket,
  Download,
  Search,
  Filter,
} from "lucide-react";

const researchProjects = [
  {
    id: 1,
    title: "TNPSC AI Question Generator",
    status: "In Progress",
    category: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Current Affairs NLP Engine",
    status: "Planning",
    category: "Natural Language Processing",
  },
  {
    id: 3,
    title: "Smart Revision System",
    status: "Completed",
    category: "Education Technology",
  },
  {
    id: 4,
    title: "Knowledge Graph Research",
    status: "Research",
    category: "Machine Learning",
  },
];

export default function ResearchInnovationPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Research & Innovation Center
          </h1>

          <p className="mt-2 text-slate-500">
            Organize research projects, manage innovation ideas,
            document experiments, and accelerate learning with
            an AI-powered research assistant.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Research

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Research Projects",
            value: "24",
            icon: FlaskConical,
          },
          {
            title: "Innovation Ideas",
            value: "86",
            icon: Lightbulb,
          },
          {
            title: "Experiments",
            value: "31",
            icon: TestTube,
          },
          {
            title: "AI Insights",
            value: "142",
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
              placeholder="Search research projects..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Research Workspace */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <FlaskConical
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            AI Research Workspace
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {researchProjects.map((project) => (

            <div
              key={project.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {project.category}
                  </p>

                </div>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  {project.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Research Paper Library */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <BookOpen
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Research Papers & Articles
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <BookOpen
              size={70}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Digital Research Library
            </h3>

            <p className="mt-2 text-slate-500">
              Store research papers, AI articles, documentation,
              references, and technical notes with smart search
              and tagging support.
            </p>

          </div>

        </div>

      </div>

            {/* Innovation Ideas */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Lightbulb size={30} />

            <h2 className="text-3xl font-bold">
              Innovation Idea Board
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "AI-powered TNPSC question generation.",
              "Voice-enabled Tamil study assistant.",
              "Personalized revision engine using AI.",
              "Knowledge graph-based concept explorer.",
            ].map((idea) => (

              <div
                key={idea}
                className="rounded-xl bg-white/10 p-4"
              >
                {idea}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Experiment Tracking & AI Assistant */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <TestTube
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Experiment Tracking
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Evaluate AI model accuracy.",
              "Compare multiple ML algorithms.",
              "Track dataset versions and metrics.",
              "Record experiment outcomes.",
            ].map((experiment) => (

              <div
                key={experiment}
                className="rounded-xl border p-4"
              >
                {experiment}
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
              AI Research Assistant
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Summarize research papers.",
              "Generate literature reviews.",
              "Suggest related research topics.",
              "Identify research gaps and future work.",
            ].map((task) => (

              <div
                key={task}
                className="rounded-xl border p-4"
              >
                {task}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Analytics & Documentation */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Research Analytics Dashboard
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center">

            <div className="text-center">

              <BarChart3
                size={64}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Research Performance Analytics
              </h3>

              <p className="mt-2 text-slate-500">
                Integrate Recharts (BarChart, LineChart, PieChart and
                AreaChart) to visualize project progress, experiment
                success rates, publication trends, and research activity.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <FileText
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Research Notes & Documentation
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Maintain experiment logs.",
              "Store architecture diagrams.",
              "Document AI model improvements.",
              "Create reusable technical documentation.",
            ].map((note) => (

              <div
                key={note}
                className="rounded-xl border p-4"
              >
                {note}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Project Showcase */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Rocket
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Project Showcase Center
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Student Mental Wellness Predictor",
            "TNPSC MASTER AI Platform",
            "AI Knowledge Graph Engine",
            "Smart Revision Recommendation System",
          ].map((project) => (

            <div
              key={project}
              className="rounded-xl border p-4"
            >
              {project}
            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Research Report
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export Documentation
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Launch AI Research Assistant
        </button>

      </div>

    </div>

  );

}