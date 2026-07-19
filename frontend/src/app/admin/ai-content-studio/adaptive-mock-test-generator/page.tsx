"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  ClipboardCheck,
  Target,
  TrendingUp,
  Sparkles,
  BookOpen,
  Search,
  Filter,
  Eye,
  Play,
  Trash2,
  Calendar,
  Clock,
  Settings,
  Trophy,
  Users
} from "lucide-react";

interface MockTest {
  id: string;
  title: string;
  exam: string;
  questions: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Adaptive";
  status: "Draft" | "Generated" | "Published";
  createdOn: string;
}

const mockTests: MockTest[] = [
  {
    id: "MT001",
    title: "TNPSC Group 4 Adaptive Test - 01",
    exam: "Group 4",
    questions: 100,
    difficulty: "Adaptive",
    status: "Published",
    createdOn: "19 Jul 2026"
  },
  {
    id: "MT002",
    title: "Indian Polity Smart Test",
    exam: "Group 2",
    questions: 50,
    difficulty: "Medium",
    status: "Generated",
    createdOn: "19 Jul 2026"
  }
];

export default function AdaptiveMockTestGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {

    return mockTests.filter((test) =>
      test.title.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <ClipboardCheck className="text-indigo-600" />

              AI Adaptive Mock Test Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Generate personalized TNPSC mock tests based on learner performance, AI analytics, and syllabus coverage.

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

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <ClipboardCheck className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Mock Tests Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2,864

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Users className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Active Learners

            </p>

            <h2 className="text-4xl font-bold mt-2">

              8,432

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              Personalized Tests

            </p>

            <h2 className="text-4xl font-bold mt-2">

              6,190

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.5%

            </h2>

          </div>

        </div>

        {/* Test Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Mock Test Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>TNPSC Group 2</option>
                <option>TNPSC Group 1</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Number of Questions

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Duration

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>30 Minutes</option>
                <option>60 Minutes</option>
                <option>90 Minutes</option>
                <option>180 Minutes</option>

              </select>

            </div>

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
                placeholder="Search generated mock tests..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Generated Mock Tests */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Mock Tests

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Exam</th>
                  <th className="text-left p-4">Questions</th>
                  <th className="text-left p-4">Difficulty</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>

              </thead>

              <tbody>

                {filteredTests.map((test) => (

                  <tr
                    key={test.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">{test.title}</td>
                    <td className="p-4">{test.exam}</td>
                    <td className="p-4">{test.questions}</td>
                    <td className="p-4">{test.difficulty}</td>
                    <td className="p-4">{test.status}</td>

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

                {/* AI Adaptive Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Adaptive Generation Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Adaptive Engine</option>
                <option>TNPSC Smart Generator</option>
                <option>Performance Based AI</option>
                <option>Blueprint AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Question Selection

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive</option>
                <option>Random</option>
                <option>Blueprint Based</option>
                <option>Weak Topics First</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty Strategy

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Dynamic</option>
                <option>Progressive</option>
                <option>Balanced</option>
                <option>Exam Pattern</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Generation Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Generation Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Target Weak Topics

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Maintain Exam Blueprint

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Avoid Duplicate Questions

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Include Previous Year Pattern

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Bloom's Taxonomy Balance

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              AI Explanation for Every Answer

            </label>

          </div>

        </div>

        {/* Subject Distribution */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Subject Distribution

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
                  ["History", 20, "Medium", "High"],
                  ["Polity", 18, "Medium", "High"],
                  ["Science", 16, "Easy", "Medium"],
                  ["Geography", 16, "Medium", "Medium"],
                  ["Economy", 15, "Hard", "High"],
                  ["Current Affairs", 15, "Mixed", "High"]
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

        {/* Student Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Performance Analysis

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Overall Accuracy</span>

                <span className="font-bold text-green-600">

                  78%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Weakest Subject</span>

                <span className="font-bold text-red-600">

                  Economy

                </span>

              </div>

              <div className="flex justify-between">

                <span>Strongest Subject</span>

                <span className="font-bold text-green-600">

                  History

                </span>

              </div>

              <div className="flex justify-between">

                <span>Average Completion Time</span>

                <span className="font-bold">

                  1h 42m

                </span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Recommendations

              </h2>

            </div>

            <div className="p-6 space-y-3">

              <div className="bg-red-50 border border-red-200 rounded-lg p-3">

                Focus on Economy and Environment topics.

              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">

                Increase medium and hard question practice.

              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">

                Maintain History performance with weekly revision.

              </div>

            </div>

          </div>

        </div>

        {/* Live Generation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live AI Generation Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 rounded-full bg-indigo-600"
                style={{ width: "83%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has generated 83% of the personalized mock test. Difficulty balancing, answer explanations, and adaptive sequencing are currently in progress.

            </p>

          </div>

        </div>

                {/* Generated Mock Test Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Generated Mock Test Preview

              </h2>

              <p className="text-gray-500 mt-2">

                AI-generated adaptive TNPSC mock test ready for review.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              100 Questions Generated

            </span>

          </div>

          <div className="divide-y">

            {[1, 2, 3].map((q) => (

              <div
                key={q}
                className="p-6 hover:bg-gray-50"
              >

                <div className="flex justify-between">

                  <div className="flex-1">

                    <h3 className="font-semibold text-lg">

                      Q{q}. Who established the Imperial Chola Dynasty?

                    </h3>

                    <div className="grid md:grid-cols-2 gap-2 mt-4">

                      <p>A. Karikala Chola</p>

                      <p className="font-semibold text-green-700">

                        ✓ B. Vijayalaya Chola

                      </p>

                      <p>C. Rajendra Chola</p>

                      <p>D. Kulothunga Chola</p>

                    </div>

                    <div className="mt-5 bg-blue-50 rounded-lg p-4">

                      <p className="font-semibold">

                        AI Explanation

                      </p>

                      <p className="mt-2 text-gray-700">

                        Vijayalaya Chola founded the Imperial Chola dynasty
                        after capturing Thanjavur in the 9th century.

                      </p>

                    </div>

                  </div>

                  <div className="ml-8">

                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">

                      Medium

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Test Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Difficulty Analytics

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Easy</span>

                <span className="font-bold text-green-600">

                  30%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Medium</span>

                <span className="font-bold text-yellow-600">

                  45%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Hard</span>

                <span className="font-bold text-red-600">

                  25%

                </span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Trophy className="text-yellow-500" />

              <h2 className="text-xl font-bold">

                Readiness Score

              </h2>

            </div>

            <div className="p-6 text-center">

              <h1 className="text-6xl font-bold text-indigo-600">

                84%

              </h1>

              <p className="mt-4 text-gray-600">

                Based on previous tests, syllabus completion,
                weak-topic analysis, and AI performance prediction.

              </p>

            </div>

          </div>

        </div>

        {/* AI Prediction */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Exam Performance Prediction

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            <div className="bg-green-50 rounded-xl p-5 text-center">

              <TrendingUp
                className="mx-auto text-green-600"
                size={40}
              />

              <h3 className="mt-4 font-bold">

                Expected Score

              </h3>

              <p className="text-3xl font-bold mt-2">

                176 / 200

              </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-5 text-center">

              <Target
                className="mx-auto text-blue-600"
                size={40}
              />

              <h3 className="mt-4 font-bold">

                Qualification Chance

              </h3>

              <p className="text-3xl font-bold mt-2">

                92%

              </p>

            </div>

            <div className="bg-orange-50 rounded-xl p-5 text-center">

              <Sparkles
                className="mx-auto text-orange-600"
                size={40}
              />

              <h3 className="mt-4 font-bold">

                AI Confidence

              </h3>

              <p className="text-3xl font-bold mt-2">

                98%

              </p>

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

              Publish to Test Portal

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Schedule Test

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

        {/* Backend API */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>POST /api/v1/mock-tests/generate</p>
              <p>POST /api/v1/mock-tests/adaptive</p>
              <p>POST /api/v1/mock-tests/predict</p>
              <p>POST /api/v1/mock-tests/recommendations</p>
              <p>GET /api/v1/mock-tests/preview</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/mock-tests/publish</p>
              <p>POST /api/v1/mock-tests/schedule</p>
              <p>POST /api/v1/mock-tests/export/pdf</p>
              <p>POST /api/v1/mock-tests/export/docx</p>
              <p>POST /api/v1/mock-tests/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}