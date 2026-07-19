"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Newspaper,
  Upload,
  Search,
  Filter,
  Brain,
  Sparkles,
  Globe,
  Languages,
  Calendar,
  BookOpen,
  Eye,
  Play,
  Trash2,
  RefreshCw,
  Clock
} from "lucide-react";

interface CurrentAffairItem {
  id: string;
  title: string;
  category: string;
  source: string;
  language: "Tamil" | "English" | "Bilingual";
  status: "Draft" | "Published" | "Processing";
  publishedOn: string;
}

const digestItems: CurrentAffairItem[] = [
  {
    id: "CA001",
    title: "Union Budget Highlights",
    category: "Economy",
    source: "PIB",
    language: "Bilingual",
    status: "Published",
    publishedOn: "19 Jul 2026"
  },
  {
    id: "CA002",
    title: "ISRO Satellite Launch",
    category: "Science & Technology",
    source: "ISRO",
    language: "English",
    status: "Processing",
    publishedOn: "19 Jul 2026"
  }
];

export default function CurrentAffairsDigestGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {

    return digestItems.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Newspaper className="text-indigo-600" />

              AI Current Affairs Digest Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Generate TNPSC-ready current affairs, summaries, bilingual notes, and MCQs.

            </p>

          </div>

          <Link
            href="/admin/ai-content-studio"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        {/* Dashboard */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Newspaper className="text-blue-600" />

            <p className="mt-4 text-gray-500">
              Articles Imported
            </p>

            <h2 className="text-4xl font-bold mt-2">
              8,462
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600" />

            <p className="mt-4 text-gray-500">
              AI Summaries
            </p>

            <h2 className="text-4xl font-bold mt-2">
              7,935
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BookOpen className="text-green-600" />

            <p className="mt-4 text-gray-500">
              MCQs Generated
            </p>

            <h2 className="text-4xl font-bold mt-2">
              22,480
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600" />

            <p className="mt-4 text-gray-500">
              AI Accuracy
            </p>

            <h2 className="text-4xl font-bold mt-2">
              98.8%
            </h2>

          </div>

        </div>

        {/* Import Sources */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Import Current Affairs

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <button className="border rounded-xl p-6 hover:bg-gray-50">

              <Globe className="mx-auto text-indigo-600" size={40} />

              <p className="mt-4 font-semibold text-center">

                News APIs

              </p>

            </button>

            <button className="border rounded-xl p-6 hover:bg-gray-50">

              <Upload className="mx-auto text-green-600" size={40} />

              <p className="mt-4 font-semibold text-center">

                Upload PDF

              </p>

            </button>

            <button className="border rounded-xl p-6 hover:bg-gray-50">

              <RefreshCw className="mx-auto text-orange-600" size={40} />

              <p className="mt-4 font-semibold text-center">

                Auto Sync

              </p>

            </button>

            <button className="border rounded-xl p-6 hover:bg-gray-50">

              <Clock className="mx-auto text-purple-600" size={40} />

              <p className="mt-4 font-semibold text-center">

                Daily Scheduler

              </p>

            </button>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4 flex-wrap">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search current affairs..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Current Affairs Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Imported Current Affairs

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-left p-4">Source</th>
                  <th className="text-left p-4">Language</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">

                      {item.title}

                    </td>

                    <td className="p-4">

                      {item.category}

                    </td>

                    <td className="p-4">

                      {item.source}

                    </td>

                    <td className="p-4">

                      {item.language}

                    </td>

                    <td className="p-4">

                      {item.status}

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16} />

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16} />

                        </button>

                        <button className="border rounded-lg p-2 text-red-600">

                          <Trash2 size={16} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Digest Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Digest Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 News Intelligence</option>
                <option>TNPSC Current Affairs AI</option>
                <option>Bilingual Digest Engine</option>
                <option>MCQ Generator AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Output Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Digest Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Daily Digest</option>
                <option>Weekly Digest</option>
                <option>Monthly Digest</option>
                <option>Exam Revision Notes</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Processing Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Processing Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Generate AI Summary
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Translate to Tamil
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Generate TNPSC MCQs
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Extract Keywords
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Syllabus Mapping
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Duplicate Detection
            </label>

          </div>

        </div>

        {/* TNPSC Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              TNPSC Syllabus Mapping

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Group 4</option>
                <option>Group 2</option>
                <option>Group 1</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Subject

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Current Affairs</option>
                <option>Economy</option>
                <option>Science & Technology</option>
                <option>Environment</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Category

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="National / International"
              />

            </div>

            <div>

              <label className="font-semibold">

                Priority

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

          </div>

        </div>

        {/* Scheduler */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Auto Publication Scheduler

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Schedule

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Publish Time

              </label>

              <input
                type="time"
                className="w-full border rounded-lg mt-2 p-3"
              />

            </div>

            <div className="flex items-end">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full">

                Save Schedule

              </button>

            </div>

          </div>

        </div>

        {/* Processing Controls */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Generate Digest

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Generate MCQs

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Translate

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Preview Digest

            </button>

          </div>

        </div>

        {/* Live Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live AI Generation Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 bg-indigo-600 rounded-full"
                style={{ width: "72%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has processed 72% of today's articles. Summaries, translations, keyword extraction, and TNPSC MCQs are currently being generated.

            </p>

          </div>

        </div>

                {/* AI Digest Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Current Affairs Digest Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Bilingual digest generated and ready for review.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              24 Articles Processed

            </span>

          </div>

          <div className="divide-y">

            {[
              {
                title: "Union Budget 2026 Highlights",
                category: "Economy",
                summary:
                  "Major budget allocations focus on infrastructure, education, agriculture, and digital governance."
              },
              {
                title: "ISRO Successfully Launches Earth Observation Satellite",
                category: "Science & Technology",
                summary:
                  "The satellite strengthens disaster management, environmental monitoring, and agricultural planning."
              }
            ].map((article, index) => (

              <div
                key={index}
                className="p-6 hover:bg-gray-50"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-lg font-semibold">

                      {article.title}

                    </h3>

                    <span className="inline-block mt-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">

                      {article.category}

                    </span>

                    <p className="mt-4 text-gray-700">

                      {article.summary}

                    </p>

                  </div>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

                    AI Verified

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bilingual Preview */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                English Summary

              </h2>

            </div>

            <div className="p-6 leading-7 text-gray-700">

              <p>

                The Union Budget focuses on economic growth through
                infrastructure development, digital governance,
                employment generation, and improvements in healthcare
                and education.

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                தமிழ் சுருக்கம்

              </h2>

            </div>

            <div className="p-6 leading-8 text-gray-700">

              <p>

                மத்திய பட்ஜெட்டில் உள்கட்டமைப்பு, கல்வி, சுகாதாரம்,
                வேளாண்மை மற்றும் டிஜிட்டல் நிர்வாகத்திற்கு முக்கிய
                முக்கியத்துவம் வழங்கப்பட்டுள்ளது.

              </p>

            </div>

          </div>

        </div>

        {/* Generated TNPSC MCQs */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Generated TNPSC MCQs

            </h2>

          </div>

          <div className="divide-y">

            {[1, 2].map((q) => (

              <div
                key={q}
                className="p-6"
              >

                <h3 className="font-semibold">

                  Q{q}. Which organisation launched the Earth Observation Satellite?

                </h3>

                <div className="grid md:grid-cols-2 gap-2 mt-4">

                  <p>A. DRDO</p>

                  <p className="font-semibold text-green-700">

                    ✓ B. ISRO

                  </p>

                  <p>C. NASA</p>

                  <p>D. ESA</p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Keywords & AI Quality */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Extracted Keywords

              </h2>

            </div>

            <div className="p-6 flex flex-wrap gap-3">

              {[
                "Union Budget",
                "ISRO",
                "Economy",
                "Science",
                "Agriculture",
                "Education",
                "Digital India",
                "Environment"
              ].map((keyword) => (

                <span
                  key={keyword}
                  className="px-3 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm"
                >

                  {keyword}

                </span>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Quality Report

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">
                <span>Summary Accuracy</span>
                <span className="font-bold text-green-600">99%</span>
              </div>

              <div className="flex justify-between">
                <span>Translation Quality</span>
                <span className="font-bold text-blue-600">98%</span>
              </div>

              <div className="flex justify-between">
                <span>MCQ Quality</span>
                <span className="font-bold text-purple-600">97%</span>
              </div>

              <div className="flex justify-between">
                <span>Syllabus Mapping</span>
                <span className="font-bold text-green-600">99%</span>
              </div>

            </div>

          </div>

        </div>

        {/* Publish & Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish to Current Affairs

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Daily Test

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export DOCX

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

          </div>

        </div>

        {/* Backend API Endpoints */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>POST /api/v1/current-affairs/import</p>
              <p>POST /api/v1/current-affairs/summarize</p>
              <p>POST /api/v1/current-affairs/translate</p>
              <p>POST /api/v1/current-affairs/generate-mcq</p>
              <p>POST /api/v1/current-affairs/keywords</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/current-affairs/publish</p>
              <p>POST /api/v1/current-affairs/export/pdf</p>
              <p>POST /api/v1/current-affairs/export/docx</p>
              <p>POST /api/v1/current-affairs/export/json</p>
              <p>GET /api/v1/current-affairs/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}