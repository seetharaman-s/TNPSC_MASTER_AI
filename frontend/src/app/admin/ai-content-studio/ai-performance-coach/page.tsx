"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  TrendingUp,
  Target,
  Activity,
  Trophy,
  Calendar,
  Clock,
  Search,
  Filter,
  Settings,
  Sparkles,
  Eye,
  Play,
  User,
  BookOpen,
  BarChart3,
} from "lucide-react";

interface StudentPerformance {
  id: string;
  student: string;
  exam: string;
  averageScore: number;
  improvement: number;
  weakArea: string;
  readiness: string;
}

const performanceData: StudentPerformance[] = [
  {
    id: "SP001",
    student: "Student A",
    exam: "TNPSC Group 4",
    averageScore: 82,
    improvement: 14,
    weakArea: "Indian Polity",
    readiness: "Good",
  },
  {
    id: "SP002",
    student: "Student B",
    exam: "TNPSC Group 2",
    averageScore: 91,
    improvement: 8,
    weakArea: "Economics",
    readiness: "Excellent",
  },
];

export default function AIPerformanceCoachPage() {

  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {

    return performanceData.filter((student) =>
      student.student.toLowerCase().includes(search.toLowerCase())
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

              AI Performance Coach

            </h1>

            <p className="text-gray-500 mt-2">

              AI analyzes mock tests, revision habits, learning consistency,
              strengths, weaknesses, and provides personalized coaching
              recommendations to maximize TNPSC success.

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

            <User className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Students Analyzed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              15,824

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Average Improvement

            </p>

            <h2 className="text-4xl font-bold mt-2">

              +18%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              Coaching Plans

            </p>

            <h2 className="text-4xl font-bold mt-2">

              6,482

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.9%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Coaching Configuration

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

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Coaching Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Performance</option>
                <option>Revision</option>
                <option>Time Management</option>
                <option>Motivation</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Analysis Period

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>Overall</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

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
                placeholder="Search student..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Student Performance Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Student Performance Overview

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Average</th>
                  <th className="p-4 text-left">Improvement</th>
                  <th className="p-4 text-left">Weak Area</th>
                  <th className="p-4 text-left">Readiness</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{student.student}</td>
                    <td className="p-4">{student.exam}</td>
                    <td className="p-4">{student.averageScore}%</td>
                    <td className="p-4 text-green-600">

                      +{student.improvement}%

                    </td>
                    <td className="p-4">{student.weakArea}</td>
                    <td className="p-4">{student.readiness}</td>

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

                {/* AI Score Trend Analysis */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Score Trend Analysis

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Week 1", "68%"],
              ["Week 2", "74%"],
              ["Week 3", "82%"],
              ["Week 4", "89%"],
            ].map(([week, score]) => (

              <div
                key={week}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                <BarChart3 className="text-indigo-600 mb-3" />

                <h3 className="font-semibold">

                  {week}

                </h3>

                <p className="text-3xl font-bold mt-3">

                  {score}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Coaching Recommendations */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Brain className="text-purple-600" />

              <h2 className="text-xl font-bold">

                Personalized Coaching

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Revise Indian Polity every morning.",
                "Practice 50 Aptitude questions daily.",
                "Attempt one full mock test every Sunday.",
                "Review mistakes immediately after each test.",
                "Increase revision frequency for History.",
              ].map((tip) => (

                <div
                  key={tip}
                  className="border rounded-lg p-4 hover:bg-purple-50"
                >

                  {tip}

                </div>

              ))}

            </div>

          </div>

          {/* Time Management */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Clock className="text-green-600" />

              <h2 className="text-xl font-bold">

                Time Management Optimizer

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Study", "3 hrs/day"],
                ["Revision", "1.5 hrs/day"],
                ["Mock Tests", "45 mins/day"],
                ["Current Affairs", "30 mins/day"],
              ].map(([task, duration]) => (

                <div key={task}>

                  <div className="flex justify-between mb-2">

                    <span>{task}</span>

                    <span>{duration}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: "80%" }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Subject Improvement Planner */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Subject-wise Improvement Planner

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              ["History", "Needs More Revision"],
              ["Polity", "Practice Constitution MCQs"],
              ["Science", "Focus on Biology"],
              ["Economics", "Revise Government Schemes"],
              ["Geography", "Practice Maps"],
              ["Current Affairs", "Daily Revision"],
            ].map(([subject, plan]) => (

              <div
                key={subject}
                className="border rounded-xl p-5 hover:bg-blue-50"
              >

                <BookOpen className="text-blue-600 mb-3" />

                <h3 className="font-semibold">

                  {subject}

                </h3>

                <p className="mt-2 text-gray-600">

                  {plan}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Focus Analysis */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Focus & Consistency Analysis

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Study Consistency", "93%"],
                ["Revision Consistency", "87%"],
                ["Mock Test Participation", "91%"],
                ["Daily Goal Completion", "89%"],
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

          {/* Milestones */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Trophy className="text-yellow-500" />

              <h2 className="text-xl font-bold">

                Performance Milestones

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "✅ Completed 100 Mock Tests",
                "🏅 Scored Above 90% in 10 Tests",
                "🔥 30-Day Study Streak",
                "📚 Finished Entire History Syllabus",
                "⭐ Improved Overall Score by 18%",
              ].map((item) => (

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-yellow-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Coach Conversation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Coaching Conversation

            </h2>

          </div>

          <div className="p-6 space-y-6">

            <div className="bg-blue-50 rounded-xl p-4">

              <p className="font-semibold">Student</p>

              <p className="mt-2">

                My mock test scores have dropped this week. What should I do?

              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-4">

              <p className="font-semibold">

                AI Performance Coach

              </p>

              <p className="mt-2">

                Focus on revising weak topics before attempting another full
                mock test. Review every incorrect answer, spend additional
                time on Indian Polity and Economics, and take one sectional
                test before the next full-length exam.

              </p>

            </div>

          </div>

        </div>

        {/* Live Coaching Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Coaching Recommendation Engine

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full bg-gray-200 rounded-full h-4">

              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "95%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI is evaluating recent mock tests, revision frequency,
              subject mastery, study consistency, and historical trends
              to generate personalized coaching recommendations.

            </p>

          </div>

        </div>

                {/* Performance Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Performance Analytics Dashboard

              </h2>

              <p className="text-gray-500 mt-2">

                AI continuously analyzes student performance, study habits,
                and coaching effectiveness.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              Live Analytics

            </span>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                +18%

              </h3>

              <p className="mt-2">

                Overall Improvement

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                91%

              </h3>

              <p className="mt-2">

                Mock Test Accuracy

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                89%

              </h3>

              <p className="mt-2">

                Revision Efficiency

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-orange-600">

                97%

              </h3>

              <p className="mt-2">

                AI Coaching Confidence

              </p>

            </div>

          </div>

        </div>

        {/* Score Prediction & Improvement */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Predicted Next Mock Score

              </h2>

            </div>

            <div className="p-6">

              <div className="w-full bg-gray-200 rounded-full h-5">

                <div
                  className="bg-green-600 h-5 rounded-full"
                  style={{ width: "90%" }}
                />

              </div>

              <h3 className="text-3xl font-bold text-green-600 mt-6">

                90%

              </h3>

              <p className="mt-3 text-gray-600">

                Estimated score based on revision quality, mock test history,
                and AI coaching recommendations.

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Improvement Insights

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Increase daily revision by 20 minutes.",
                "Attempt two sectional tests this week.",
                "Review incorrect answers within 24 hours.",
                "Focus on weak subjects before full mock tests.",
                "Maintain a minimum 7-day study streak.",
              ].map((insight) => (

                <div
                  key={insight}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {insight}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Weekly & Monthly Reports */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Coaching Reports

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Daily Performance Report",
              "Weekly Coaching Summary",
              "Monthly Progress Report",
            ].map((report) => (

              <div
                key={report}
                className="border rounded-xl p-6 hover:bg-indigo-50"
              >

                <h3 className="font-semibold text-lg">

                  {report}

                </h3>

                <p className="mt-3 text-gray-600">

                  AI-generated recommendations, analytics, and next action
                  plans.

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Achievement Badges */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Achievement Badges

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "🏆 Top Performer",
              "🔥 Study Streak",
              "📚 Revision Expert",
              "⭐ Mock Test Master",
            ].map((badge) => (

              <div
                key={badge}
                className="border rounded-xl p-6 text-center hover:bg-yellow-50"
              >

                <div className="text-4xl mb-4">

                  {badge.split(" ")[0]}

                </div>

                <p className="font-semibold">

                  {badge.substring(2)}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Publish & Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish Coaching Plan

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Send to Student

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

              <p>GET /api/v1/performance-coach/dashboard</p>
              <p>GET /api/v1/performance-coach/student/{'{id}'}</p>
              <p>POST /api/v1/performance-coach/analyze</p>
              <p>GET /api/v1/performance-coach/recommendations</p>
              <p>GET /api/v1/performance-coach/reports</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/performance-coach/publish</p>
              <p>POST /api/v1/performance-coach/export/pdf</p>
              <p>POST /api/v1/performance-coach/export/excel</p>
              <p>POST /api/v1/performance-coach/export/csv</p>
              <p>GET /api/v1/performance-coach/predictions</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}