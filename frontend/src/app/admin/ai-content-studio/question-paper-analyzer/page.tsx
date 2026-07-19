"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileSpreadsheet,
  Upload,
  Search,
  Filter,
  Brain,
  BarChart3,
  PieChart,
  TrendingUp,
  Eye,
  Play,
  Trash2,
  Calendar,
  BookOpen,
  Sparkles
} from "lucide-react";

interface QuestionPaper {
  id: string;
  title: string;
  exam: string;
  year: number;
  questions: number;
  status: "Uploaded" | "Analyzed" | "Processing";
  uploadedAt: string;
}

const papers: QuestionPaper[] = [
  {
    id: "QP001",
    title: "TNPSC Group 4 2025",
    exam: "Group 4",
    year: 2025,
    questions: 200,
    status: "Analyzed",
    uploadedAt: "19 Jul 2026"
  },
  {
    id: "QP002",
    title: "TNPSC Group 2 2024",
    exam: "Group 2",
    year: 2024,
    questions: 200,
    status: "Processing",
    uploadedAt: "19 Jul 2026"
  }
];

export default function QuestionPaperAnalyzerPage() {

  const [search, setSearch] = useState("");

  const filteredPapers = useMemo(() => {

    return papers.filter((paper) =>
      paper.title.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <FileSpreadsheet className="text-indigo-600" />

              AI Question Paper Analyzer

            </h1>

            <p className="text-gray-500 mt-2">

              Analyze previous TNPSC question papers to discover trends and generate smart blueprints.

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

            <BookOpen className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Papers Uploaded

            </p>

            <h2 className="text-4xl font-bold mt-2">

              186

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Analyzed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              180

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Topics Identified

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,842

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Prediction Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              96%

            </h2>

          </div>

        </div>

        {/* Upload */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Upload Previous Question Papers

            </h2>

          </div>

          <div className="p-8">

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">

              <Upload
                className="mx-auto text-indigo-600"
                size={60}
              />

              <h3 className="mt-6 text-xl font-semibold">

                Upload PDF or DOCX Files

              </h3>

              <p className="text-gray-500 mt-2">

                Supports previous TNPSC question papers

              </p>

              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">

                Select Files

              </button>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search question papers..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Papers Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Uploaded Question Papers

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Exam</th>
                  <th className="text-left p-4">Year</th>
                  <th className="text-left p-4">Questions</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredPapers.map((paper)=>(

                  <tr
                    key={paper.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">

                      {paper.title}

                    </td>

                    <td className="p-4">

                      {paper.exam}

                    </td>

                    <td className="p-4">

                      {paper.year}

                    </td>

                    <td className="p-4">

                      {paper.questions}

                    </td>

                    <td className="p-4">

                      {paper.status}

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16}/>

                        </button>

                        <button className="border rounded-lg p-2 text-red-600">

                          <Trash2 size={16}/>

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Analysis Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Analysis Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Analysis Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Analytics</option>
                <option>TNPSC Blueprint AI</option>
                <option>Topic Frequency Analyzer</option>
                <option>Question Trend Predictor</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Exam Category

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>Group 2</option>
                <option>Group 1</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Analysis Scope

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Complete Paper</option>
                <option>Subject Wise</option>
                <option>Unit Wise</option>
                <option>Chapter Wise</option>

              </select>

            </div>

          </div>

        </div>

        {/* Analysis Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Analysis Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Topic Frequency Analysis

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Difficulty Classification

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Bloom's Taxonomy Mapping

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Subject Weightage

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Year-wise Trend Analysis

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              AI Prediction Engine

            </label>

          </div>

        </div>

        {/* Topic Frequency */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Topic Frequency Analysis

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Topic</th>
                  <th className="text-left p-4">Occurrences</th>
                  <th className="text-left p-4">Weightage</th>
                  <th className="text-left p-4">Trend</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["Ancient History", 148, "18%", "↑"],
                  ["Indian Polity", 132, "16%", "↑"],
                  ["Geography", 120, "14%", "→"],
                  ["Science", 110, "13%", "↑"],
                  ["Current Affairs", 105, "12%", "↓"]
                ].map((item, index) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">

                      {item[0]}

                    </td>

                    <td className="p-4">

                      {item[1]}

                    </td>

                    <td className="p-4">

                      {item[2]}

                    </td>

                    <td className="p-4 text-lg">

                      {item[3]}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Difficulty Analysis */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <PieChart className="text-indigo-600" />

              <h2 className="text-xl font-bold">

                Difficulty Distribution

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Easy</span>

                <span className="font-bold text-green-600">

                  42%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Medium</span>

                <span className="font-bold text-yellow-600">

                  38%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Hard</span>

                <span className="font-bold text-red-600">

                  20%

                </span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Calendar className="text-orange-600" />

              <h2 className="text-xl font-bold">

                Year-wise Trend

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "2022 → Ancient History Increased",
                "2023 → Science Weightage Increased",
                "2024 → Current Affairs Increased",
                "2025 → Polity Dominated"
              ].map((trend) => (

                <div
                  key={trend}
                  className="border rounded-lg p-3"
                >

                  {trend}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Blueprint Generator */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Blueprint Generator

            </h2>

          </div>

          <div className="p-6">

            <p className="text-gray-600 mb-6">

              Generate a recommended TNPSC mock test blueprint based on historical question paper analysis.

            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

                Generate Blueprint

              </button>

              <button className="border px-6 py-3 rounded-lg">

                Compare Years

              </button>

              <button className="border px-6 py-3 rounded-lg">

                Export Analysis

              </button>

            </div>

          </div>

        </div>

        {/* Live Analysis */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Analysis Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 bg-indigo-600 rounded-full"
                style={{ width: "79%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has analyzed 79% of uploaded question papers. Topic frequency, trends, and blueprint recommendations are being generated.

            </p>

          </div>

        </div>

                {/* Analytics Dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BarChart3 className="text-indigo-600" />

              <h2 className="text-xl font-bold">

                Subject-wise Weightage

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                { subject: "History", value: 22 },
                { subject: "Polity", value: 18 },
                { subject: "Geography", value: 15 },
                { subject: "Science", value: 17 },
                { subject: "Economy", value: 13 },
                { subject: "Current Affairs", value: 15 }
              ].map((item) => (

                <div key={item.subject}>

                  <div className="flex justify-between mb-1">

                    <span>{item.subject}</span>

                    <span>{item.value}%</span>

                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full">

                    <div
                      className="h-3 bg-indigo-600 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Exam Prediction Report

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">

                <h3 className="font-semibold">

                  High Probability Topics

                </h3>

                <ul className="list-disc ml-5 mt-2 space-y-1">

                  <li>Indian Constitution</li>
                  <li>Ancient Tamil History</li>
                  <li>Geography of Tamil Nadu</li>
                  <li>General Science</li>

                </ul>

              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">

                <h3 className="font-semibold">

                  Moderate Probability Topics

                </h3>

                <ul className="list-disc ml-5 mt-2 space-y-1">

                  <li>Indian Economy</li>
                  <li>Environmental Science</li>
                  <li>Current Affairs</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

        {/* Recommended Study Plan */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Recommended Study Plan

            </h2>

          </div>

          <div className="p-6">

            <div className="grid md:grid-cols-4 gap-6">

              {[
                {
                  day: "Week 1",
                  topic: "History",
                  hours: "10 Hours"
                },
                {
                  day: "Week 2",
                  topic: "Polity",
                  hours: "12 Hours"
                },
                {
                  day: "Week 3",
                  topic: "Science",
                  hours: "9 Hours"
                },
                {
                  day: "Week 4",
                  topic: "Mock Tests",
                  hours: "15 Hours"
                }
              ].map((plan) => (

                <div
                  key={plan.day}
                  className="border rounded-xl p-5 hover:shadow-md transition"
                >

                  <h3 className="font-bold">

                    {plan.day}

                  </h3>

                  <p className="mt-3 text-gray-600">

                    {plan.topic}

                  </p>

                  <p className="mt-2 text-indigo-600 font-semibold">

                    {plan.hours}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Blueprint Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Suggested Mock Test Blueprint

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Subject</th>
                  <th className="text-left p-4">Questions</th>
                  <th className="text-left p-4">Difficulty</th>
                  <th className="text-left p-4">Priority</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["History", 40, "Medium", "High"],
                  ["Polity", 35, "Medium", "High"],
                  ["Science", 35, "Easy", "Medium"],
                  ["Geography", 30, "Medium", "Medium"],
                  ["Economy", 25, "Hard", "Medium"],
                  ["Current Affairs", 35, "Mixed", "High"]
                ].map((row, index) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export & Publish

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish Blueprint

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Generate Mock Test

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

          </div>

        </div>

        {/* Backend API */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>POST /api/v1/question-paper/upload</p>
              <p>POST /api/v1/question-paper/analyze</p>
              <p>POST /api/v1/question-paper/topic-frequency</p>
              <p>POST /api/v1/question-paper/difficulty</p>
              <p>POST /api/v1/question-paper/predict</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/question-paper/blueprint</p>
              <p>POST /api/v1/question-paper/export/pdf</p>
              <p>POST /api/v1/question-paper/export/excel</p>
              <p>POST /api/v1/question-paper/export/json</p>
              <p>GET /api/v1/question-paper/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}