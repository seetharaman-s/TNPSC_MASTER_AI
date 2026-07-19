"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  FileText,
  PenTool,
  Search,
  Filter,
  Settings,
  CheckCircle2,
  Clock,
  Target,
  Trophy,
  Sparkles,
  Eye,
  BarChart3,
  BookOpen,
  Languages,
} from "lucide-react";

interface EssaySubmission {
  id: string;
  student: string;
  topic: string;
  language: "Tamil" | "English";
  words: number;
  score: number;
  status: "Evaluated" | "Pending";
  submittedAt: string;
}

const essayData: EssaySubmission[] = [
  {
    id: "ES001",
    student: "Arun Kumar",
    topic: "Indian Constitution",
    language: "English",
    words: 785,
    score: 88,
    status: "Evaluated",
    submittedAt: "19 Jul 2026",
  },
  {
    id: "ES002",
    student: "Priya",
    topic: "Tamil Nadu Economy",
    language: "Tamil",
    words: 812,
    score: 91,
    status: "Evaluated",
    submittedAt: "18 Jul 2026",
  },
];

export default function AIEssayEvaluatorPage() {

  const [search, setSearch] = useState("");

  const filteredEssays = useMemo(() => {
    return essayData.filter((essay) =>
      essay.topic.toLowerCase().includes(search.toLowerCase()) ||
      essay.student.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600" />

              AI Essay Evaluator

            </h1>

            <p className="text-gray-500 mt-2">

              Automatically evaluate TNPSC essays using AI for grammar,
              structure, relevance, factual accuracy, readability,
              vocabulary and answer quality.

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

        {/* KPI Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <FileText className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Essays Evaluated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              12,468

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Average Score

            </p>

            <h2 className="text-4xl font-bold mt-2">

              87%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.6%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Clock className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Avg Evaluation Time

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18 sec

            </h2>

          </div>

        </div>

        {/* Evaluation Settings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Evaluation Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">Language</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil</option>
                <option>English</option>
                <option>Bilingual</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">Essay Type</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Essay</option>
                <option>Descriptive</option>
                <option>Current Affairs</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">Scoring Scale</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>100 Marks</option>
                <option>50 Marks</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">AI Model</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Enterprise Evaluator</option>
                <option>Fast Mode</option>

              </select>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search essays..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Essay Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Essay Evaluation Queue

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Words</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredEssays.map((essay) => (

                  <tr
                    key={essay.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{essay.student}</td>
                    <td className="p-4">{essay.topic}</td>
                    <td className="p-4">{essay.language}</td>
                    <td className="p-4">{essay.words}</td>
                    <td className="p-4">{essay.score}%</td>
                    <td className="p-4">{essay.status}</td>

                    <td className="p-4">

                      <button className="border rounded-lg p-2">

                        <Eye size={16}/>

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Grammar & Language Analysis */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Languages className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Grammar & Language Analysis

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Grammar Accuracy", "96%"],
              ["Spelling Accuracy", "99%"],
              ["Vocabulary Quality", "91%"],
              ["Sentence Structure", "93%"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                <CheckCircle2 className="text-green-600 mb-3" />

                <h3 className="font-semibold">{title}</h3>

                <p className="text-3xl font-bold mt-3">{value}</p>

              </div>

            ))}

          </div>

        </div>

        {/* Content Quality */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Brain className="text-purple-600" />

              <h2 className="text-xl font-bold">

                Content Relevance Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Topic Relevance", "95%"],
                ["Logical Flow", "92%"],
                ["Argument Strength", "90%"],
                ["Conclusion Quality", "93%"],
              ].map(([title, value]) => (

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-purple-600 h-3 rounded-full"
                      style={{ width: value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BookOpen className="text-blue-600" />

              <h2 className="text-xl font-bold">

                TNPSC Syllabus Coverage

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Indian Constitution",
                "History & Culture",
                "Tamil Nadu Administration",
                "Economy",
                "Current Affairs",
              ].map((item) => (

                <div
                  key={item}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <span>{item}</span>

                  <CheckCircle2 className="text-green-600" size={18} />

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Fact Verification */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Fact Verification

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              ["Verified Facts", "42"],
              ["Needs Citation", "3"],
              ["Potential Errors", "1"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="border rounded-xl p-6 text-center hover:bg-green-50"
              >

                <BarChart3 className="mx-auto text-green-600 mb-4" />

                <h3 className="text-4xl font-bold">{value}</h3>

                <p className="mt-3 text-gray-600">{label}</p>

              </div>

            ))}

          </div>

        </div>

        {/* Keyword Analysis */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Keyword & Concept Analysis

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Constitution",
              "Democracy",
              "Federalism",
              "Fundamental Rights",
              "Directive Principles",
              "Judiciary",
              "Legislature",
              "Governance",
            ].map((keyword) => (

              <div
                key={keyword}
                className="border rounded-lg p-4 text-center hover:bg-blue-50"
              >

                {keyword}

              </div>

            ))}

          </div>

        </div>

        {/* Readability */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Readability Assessment

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Easy to Read", "88%"],
                ["Vocabulary", "91%"],
                ["Sentence Variety", "89%"],
                ["Overall Readability", "90%"],
              ].map(([label, value]) => (

                <div key={label}>

                  <div className="flex justify-between mb-2">

                    <span>{label}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{ width: value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Improvement Suggestions

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Add more constitutional articles for stronger evidence.",
                "Improve transitions between paragraphs.",
                "Include recent government schemes where applicable.",
                "Expand the conclusion with key takeaways.",
                "Use more TNPSC-specific terminology.",
              ].map((tip) => (

                <div
                  key={tip}
                  className="border rounded-lg p-4 hover:bg-yellow-50"
                >

                  {tip}

                </div>

              ))}

            </div>

          </div>

        </div>

                {/* Essay Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Essay Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Average Score", "87%"],
              ["Highest Score", "98%"],
              ["Lowest Score", "62%"],
              ["Evaluation Accuracy", "98.6%"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-indigo-50"
              >

                <h3 className="text-gray-500">

                  {title}

                </h3>

                <p className="text-4xl font-bold mt-4">

                  {value}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Top Performers */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Trophy className="text-yellow-500" />

              <h2 className="text-xl font-bold">

                Top Performing Essays

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya", "Tamil Nadu Economy", "98"],
                ["Arun Kumar", "Indian Constitution", "96"],
                ["Vignesh", "Environmental Protection", "95"],
                ["Meena", "Women Empowerment", "94"],
              ].map(([student, topic, score]) => (

                <div
                  key={student}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <div>

                    <h3 className="font-semibold">

                      {student}

                    </h3>

                    <p className="text-sm text-gray-500">

                      {topic}

                    </p>

                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                    {score}%

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* AI Grading Rubric */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Grading Rubric

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Grammar", "20 Marks"],
                ["Content", "30 Marks"],
                ["Structure", "20 Marks"],
                ["Relevance", "20 Marks"],
                ["Presentation", "10 Marks"],
              ].map(([item, marks]) => (

                <div
                  key={item}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{item}</span>

                  <span className="font-semibold">

                    {marks}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Evaluation History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Evaluation History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Essay</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Evaluator</th>

                </tr>

              </thead>

              <tbody>

                {essayData.map((essay) => (

                  <tr
                    key={essay.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">

                      {essay.submittedAt}

                    </td>

                    <td className="p-4">

                      {essay.student}

                    </td>

                    <td className="p-4">

                      {essay.topic}

                    </td>

                    <td className="p-4">

                      {essay.score}%

                    </td>

                    <td className="p-4">

                      Enterprise AI Engine

                    </td>

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

              Publish Results

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

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

              <p>GET /api/v1/essay/dashboard</p>
              <p>POST /api/v1/essay/evaluate</p>
              <p>GET /api/v1/essay/history</p>
              <p>GET /api/v1/essay/{`{id}`}</p>
              <p>POST /api/v1/essay/re-evaluate</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/essay/export/pdf</p>
              <p>POST /api/v1/essay/export/excel</p>
              <p>POST /api/v1/essay/export/csv</p>
              <p>GET /api/v1/essay/statistics</p>
              <p>GET /api/v1/essay/leaderboard</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}