"use client";

import { useState } from "react";
import {
  Brain,
  Network,
  BookOpen,
  Target,
  FileText,
  BarChart3,
  Globe,
  Search,
  Filter,
  Download,
} from "lucide-react";

const knowledgeTopics = [
  {
    id: 1,
    topic: "Indian Constitution",
    mastery: "92%",
    connections: 18,
    level: "Advanced",
  },
  {
    id: 2,
    topic: "Indian History",
    mastery: "84%",
    connections: 15,
    level: "Intermediate",
  },
  {
    id: 3,
    topic: "Geography",
    mastery: "76%",
    connections: 12,
    level: "Intermediate",
  },
  {
    id: 4,
    topic: "Science",
    mastery: "68%",
    connections: 20,
    level: "Beginner",
  },
];

export default function KnowledgeGraphPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            AI Knowledge Graph & Learning Network
          </h1>

          <p className="mt-2 text-slate-500">
            Explore connected concepts, understand topic relationships,
            and visualize your TNPSC learning journey with AI assistance.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Knowledge Map

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Topics Learned",
            value: "245",
            icon: BookOpen,
          },
          {
            title: "Connections",
            value: "1,240",
            icon: Network,
          },
          {
            title: "Knowledge Score",
            value: "91%",
            icon: Brain,
          },
          {
            title: "Learning Paths",
            value: "18",
            icon: Target,
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
              placeholder="Search concepts or topics..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Interactive Knowledge Graph */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Network
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Interactive Knowledge Graph
          </h2>

        </div>

        <div className="flex h-80 items-center justify-center">

          <div className="text-center">

            <Network
              size={72}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Topic Relationship Visualization
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate React Flow, D3.js, or Cytoscape.js to display
              interconnected TNPSC concepts and learning dependencies.
            </p>

          </div>

        </div>

      </div>

      {/* Knowledge Topics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Topic Relationship Mapping
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {knowledgeTopics.map((topic) => (

            <div
              key={topic.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {topic.topic}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Mastery: {topic.mastery} • Connections: {topic.connections}
                  </p>

                </div>

                <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                  {topic.level}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Concept Dependency Visualization */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Network size={30} />

            <h2 className="text-3xl font-bold">
              Concept Dependency Visualization
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Indian Constitution is connected with Fundamental Rights and DPSP.",
              "Indian History links to the Freedom Movement and Modern India.",
              "Geography supports Environment and Disaster Management.",
              "Economy connects with Budget, Banking, and Taxation.",
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

      {/* Learning Path & Concept Summary */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Target
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              AI Learning Path
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Master Indian Constitution",
              "Study Indian Economy",
              "Practice Aptitude & Reasoning",
              "Complete Current Affairs Revision",
              "Take Weekly Mock Test",
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

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <FileText
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Smart Concept Summaries
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Quick revision notes for every subject.",
              "Key facts and exam-focused highlights.",
              "Frequently asked TNPSC concepts.",
              "Memory tricks and important formulas.",
            ].map((summary) => (

              <div
                key={summary}
                className="rounded-xl border p-4"
              >
                {summary}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Analytics & Mind Map */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Knowledge Mastery Analytics
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center">

            <div className="text-center">

              <BarChart3
                size={64}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Mastery Dashboard
              </h3>

              <p className="mt-2 text-slate-500">
                Integrate RadarChart, TreeMap, LineChart, and Heatmap to
                visualize subject mastery, learning gaps, and revision
                frequency.
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Globe
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Mind Map Explorer
            </h2>

          </div>

          <div className="flex h-72 items-center justify-center">

            <div className="text-center">

              <Globe
                size={64}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Interactive Mind Maps
              </h3>

              <p className="mt-2 text-slate-500">
                Navigate visual concept maps with zoom, filters, and AI-suggested
                topic relationships for efficient learning.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* AI Knowledge Assistant */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Brain
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            AI Knowledge Assistant
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Suggest the next topic based on your mastery level.",
            "Recommend revision schedules for weak concepts.",
            "Highlight relationships between subjects.",
            "Generate personalized quizzes from connected topics.",
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

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Download Knowledge Map
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export Learning Path
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Open AI Knowledge Assistant
        </button>

      </div>

    </div>

  );

}