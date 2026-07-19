"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Target,
  TrendingUp,
  Calendar,
  BarChart3,
  Search,
  Filter,
  Settings,
  Sparkles,
  Eye,
  Play,
  BookOpen,
  Activity,
  FileText,
  PieChart,
} from "lucide-react";

interface Prediction {
  id: string;
  subject: string;
  topic: string;
  probability: number;
  frequency: number;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Predicted" | "Verified";
}

const predictions: Prediction[] = [
  {
    id: "PR001",
    subject: "History",
    topic: "Chola Dynasty",
    probability: 94,
    frequency: 16,
    difficulty: "Medium",
    status: "Predicted",
  },
  {
    id: "PR002",
    subject: "Polity",
    topic: "Fundamental Rights",
    probability: 91,
    frequency: 18,
    difficulty: "Easy",
    status: "Verified",
  },
];

export default function AIExamPredictorPage() {

  const [search, setSearch] = useState("");

  const filteredPredictions = useMemo(() => {

    return predictions.filter((item) =>
      item.topic.toLowerCase().includes(search.toLowerCase())
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

              AI Exam Predictor

            </h1>

            <p className="text-gray-500 mt-2">

              Predict high-probability TNPSC questions using previous
              year papers, syllabus trends, topic weightage,
              current affairs, and AI analytics.

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

            <Target className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Predicted Topics

            </p>

            <h2 className="text-4xl font-bold mt-2">

              468

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Prediction Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              92%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Activity className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              AI Models

            </p>

            <h2 className="text-4xl font-bold mt-2">

              12

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              Confidence

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.1%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Prediction Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Target Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>TNPSC Group 2</option>
                <option>TNPSC Group 1</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Analysis Period

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Last 10 Years</option>
                <option>Last 15 Years</option>
                <option>All Available Papers</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Prediction Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Hybrid AI</option>
                <option>Trend Analysis</option>
                <option>Question Frequency</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty Filter

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

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
                placeholder="Search predicted topics..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Prediction Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Predicted Topics

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Probability</th>
                  <th className="p-4 text-left">Frequency</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredPredictions.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.topic}</td>
                    <td className="p-4">{item.probability}%</td>
                    <td className="p-4">{item.frequency}</td>
                    <td className="p-4">{item.difficulty}</td>
                    <td className="p-4">{item.status}</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16} />

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Prediction Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Prediction Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            {[
              ["History", 94],
              ["Polity", 91],
              ["Geography", 86],
              ["Science", 89],
            ].map(([subject, probability]) => (

              <div
                key={subject}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                <h3 className="font-semibold text-lg">

                  {subject}

                </h3>

                <div className="mt-4 w-full bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${probability}%` }}
                  />

                </div>

                <p className="mt-3 text-sm text-gray-600">

                  Prediction Confidence: {probability}%

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Topic Probability Heatmap */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <PieChart className="text-red-600" />

              <h2 className="text-xl font-bold">

                Topic Probability Heatmap

              </h2>

            </div>

            <div className="p-6 grid grid-cols-2 gap-4">

              {[
                ["Indian History", "95%", "bg-red-100"],
                ["Polity", "91%", "bg-orange-100"],
                ["Economics", "82%", "bg-yellow-100"],
                ["Science", "88%", "bg-green-100"],
                ["Current Affairs", "93%", "bg-blue-100"],
                ["Geography", "85%", "bg-purple-100"],
              ].map(([topic, value, color]) => (

                <div
                  key={topic}
                  className={`${color} rounded-xl p-5`}
                >

                  <h3 className="font-semibold">

                    {topic}

                  </h3>

                  <p className="text-3xl font-bold mt-3">

                    {value}

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Subject Weightage */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BarChart3 className="text-green-600" />

              <h2 className="text-xl font-bold">

                Subject Weightage Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["History", 32],
                ["Polity", 28],
                ["Science", 22],
                ["Geography", 18],
              ].map(([subject, value]) => (

                <div key={subject}>

                  <div className="flex justify-between mb-2">

                    <span>{subject}</span>

                    <span>{value}%</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: `${value}%` }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Year-wise Trend */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Year-wise Question Trend Analysis

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Year</th>
                  <th className="p-4 text-left">History</th>
                  <th className="p-4 text-left">Polity</th>
                  <th className="p-4 text-left">Science</th>
                  <th className="p-4 text-left">Current Affairs</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["2023", 18, 15, 14, 20],
                  ["2024", 21, 17, 13, 22],
                  ["2025", 20, 16, 15, 24],
                ].map((row) => (

                  <tr key={row[0]} className="border-t">

                    <td className="p-4 font-semibold">{row[0]}</td>

                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>
                    <td className="p-4">{row[4]}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Expected Model Paper */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <FileText className="text-indigo-600" />

              <h2 className="text-xl font-bold">

                AI Expected Model Paper

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "History - 20 Questions",
                "Polity - 18 Questions",
                "Science - 15 Questions",
                "Current Affairs - 25 Questions",
                "Aptitude - 22 Questions",
              ].map((item) => (

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* High Priority Topics */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                High Priority Revision

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Indian Constitution",
                "Chola & Pandya History",
                "Tamil Nadu Geography",
                "Current Affairs - Last 12 Months",
                "Economics Schemes",
              ].map((topic) => (

                <div
                  key={topic}
                  className="flex justify-between border rounded-lg p-4 hover:bg-red-50"
                >

                  <span>{topic}</span>

                  <span className="text-red-600 font-semibold">

                    High

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Live Prediction Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Prediction Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full bg-gray-200 rounded-full h-4">

              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "93%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI is analyzing previous year papers, syllabus revisions,
              topic frequencies, current affairs, difficulty trends, and
              student performance to generate the final prediction report.

            </p>

          </div>

        </div>

                {/* Prediction Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Prediction Analytics Dashboard

              </h2>

              <p className="text-gray-500 mt-2">

                AI continuously validates predictions using historical TNPSC papers,
                syllabus trends, and student performance.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              AI Validation Active

            </span>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                92%

              </h3>

              <p className="mt-2">

                Historical Accuracy

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                486

              </h3>

              <p className="mt-2">

                Predicted Topics

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                18

              </h3>

              <p className="mt-2">

                Subjects Analyzed

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-orange-600">

                99.2%

              </h3>

              <p className="mt-2">

                AI Confidence

              </p>

            </div>

          </div>

        </div>

        {/* Success Prediction & Comparison */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Exam Success Prediction

              </h2>

            </div>

            <div className="p-6">

              <div className="w-full bg-gray-200 rounded-full h-5">

                <div
                  className="bg-green-600 h-5 rounded-full"
                  style={{ width: "88%" }}
                />

              </div>

              <h3 className="text-3xl font-bold text-green-600 mt-6">

                88%

              </h3>

              <p className="mt-3 text-gray-600">

                Estimated success probability if the recommended
                study plan and revision schedule are followed.

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Subject Comparison

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["History", "Excellent", "95%"],
                ["Polity", "Very Good", "92%"],
                ["Science", "Good", "86%"],
                ["Geography", "Average", "81%"],
                ["Current Affairs", "Excellent", "96%"],
              ].map(([subject, level, score]) => (

                <div
                  key={subject}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <div>

                    <p className="font-semibold">{subject}</p>

                    <p className="text-sm text-gray-500">

                      {level}

                    </p>

                  </div>

                  <span className="font-bold text-indigo-600">

                    {score}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Revision Planner */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Countdown Revision Planner

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["30 Days", "Complete Syllabus"],
              ["21 Days", "High Weightage Topics"],
              ["14 Days", "Previous Year Papers"],
              ["7 Days", "Rapid Revision & Mock Tests"],
            ].map(([period, task]) => (

              <div
                key={period}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                <Calendar className="text-indigo-600 mb-3" />

                <h3 className="font-semibold">

                  {period}

                </h3>

                <p className="mt-2 text-gray-600">

                  {task}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* AI Confidence Metrics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Confidence Metrics

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            <div className="border rounded-xl p-6 text-center">

              <h3 className="text-4xl font-bold text-green-600">

                99.2%

              </h3>

              <p className="mt-3">

                Model Confidence

              </p>

            </div>

            <div className="border rounded-xl p-6 text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                91%

              </h3>

              <p className="mt-3">

                Trend Reliability

              </p>

            </div>

            <div className="border rounded-xl p-6 text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                94%

              </h3>

              <p className="mt-3">

                Data Quality

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

              Publish Predictions

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish Model Paper

            </button>

            <button className="border px-6 py-3 rounded-lg">

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

              <p>GET /api/v1/exam-predictor/topics</p>
              <p>POST /api/v1/exam-predictor/analyze</p>
              <p>GET /api/v1/exam-predictor/trends</p>
              <p>GET /api/v1/exam-predictor/heatmap</p>
              <p>GET /api/v1/exam-predictor/model-paper</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/exam-predictor/publish</p>
              <p>POST /api/v1/exam-predictor/export/pdf</p>
              <p>POST /api/v1/exam-predictor/export/excel</p>
              <p>POST /api/v1/exam-predictor/export/csv</p>
              <p>GET /api/v1/exam-predictor/confidence</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}