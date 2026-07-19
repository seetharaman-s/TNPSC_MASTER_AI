"use client";

import { useState } from "react";
import {
  Brain,
  Search,
  Filter,
  Download,
  Star,
  BookOpen,
  Network,
  GitBranch,
} from "lucide-react";

const mindMaps = [
  {
    id: 1,
    title: "Indian Constitution",
    subject: "Polity",
    nodes: 42,
  },
  {
    id: 2,
    title: "Sangam Age",
    subject: "History",
    nodes: 35,
  },
  {
    id: 3,
    title: "Human Digestive System",
    subject: "Science",
    nodes: 28,
  },
  {
    id: 4,
    title: "Indian Economy",
    subject: "Economy",
    nodes: 31,
  },
];

export default function MindMapsPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Mind Maps & Concept Maps
          </h1>

          <p className="mt-2 text-slate-500">
            Explore subject concepts visually to improve understanding and memory retention.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export Mind Maps

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Mind Maps",
            value: "524",
            icon: Brain,
          },
          {
            title: "Subjects",
            value: "12",
            icon: BookOpen,
          },
          {
            title: "AI Generated",
            value: "218",
            icon: Network,
          },
          {
            title: "Favorites",
            value: "46",
            icon: Star,
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
              placeholder="Search mind maps..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Mind Map Viewer */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Interactive Mind Map
          </h2>

        </div>

        <div className="flex h-[450px] items-center justify-center">

          <div className="text-center">

            <GitBranch
              size={80}
              className="mx-auto mb-5 text-indigo-600"
            />

            <h3 className="text-2xl font-bold">
              Mind Map Visualization
            </h3>

            <p className="mt-3 text-slate-500">
              Integrate React Flow, Mermaid, or D3.js for interactive concept maps.
            </p>

          </div>

        </div>

      </div>

      {/* Available Mind Maps */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Available Mind Maps
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {mindMaps.map((map) => (

            <div
              key={map.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-semibold">
                    {map.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {map.subject} • {map.nodes} Connected Nodes
                  </p>

                </div>

                <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white">
                  Open
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Subject-wise Concept Trees */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Concept Trees
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["Tamil", 64],
            ["History", 92],
            ["Polity", 78],
            ["Science", 124],
            ["Geography", 58],
            ["Economy", 49],
            ["Current Affairs", 71],
            ["Aptitude", 45],
          ].map(([subject, maps]) => (

            <button
              key={subject}
              className="rounded-xl border p-5 text-left transition hover:bg-indigo-50"
            >

              <BookOpen
                size={30}
                className="mb-3 text-indigo-600"
              />

              <h3 className="font-semibold">
                {subject}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {maps} Concept Maps
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* Favorite Mind Maps & Notes */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Favorite Mind Maps
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Indian Constitution",
              "Indian Economy",
              "Sangam Age",
              "Human Digestive System",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{item}</span>

                <Star
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Personal Annotations
            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={10}
              placeholder="Write important relationships, mnemonics, or notes..."
              className="w-full rounded-xl border p-4"
            />

            <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Save Annotation
            </button>

          </div>

        </div>

      </div>

      {/* AI Concept Suggestions */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Brain size={30} />

            <h2 className="text-3xl font-bold">
              AI Concept Suggestions
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Connect Fundamental Rights with DPSP.",
              "Link Sangam Literature with Chera, Chola, and Pandya dynasties.",
              "Relate Inflation to Monetary Policy and RBI.",
              "Combine Climate, Monsoon, and Agriculture into one concept map.",
            ].map((suggestion) => (

              <div
                key={suggestion}
                className="rounded-xl bg-white/10 p-4"
              >
                {suggestion}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Learning Insights */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Learning Insights
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Network
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Concept Relationship Analytics
            </h3>

            <p className="mt-2 text-slate-500">
              Visualize interconnected topics and learning progress using charts or graph visualizations.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export as PDF
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export as Image
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Generate AI Mind Map
        </button>

      </div>

    </div>

  );

}