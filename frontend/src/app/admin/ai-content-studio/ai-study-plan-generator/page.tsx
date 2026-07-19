"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Calendar,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
  Sparkles,
  Users,
  Search,
  Filter,
  Eye,
  Play,
  Settings,
  CheckCircle2,
  BarChart3,
  Trophy
} from "lucide-react";

interface StudyPlan {
  id: string;
  student: string;
  exam: string;
  duration: string;
  completion: number;
  status: "Draft" | "Active" | "Completed";
}

const studyPlans: StudyPlan[] = [
  {
    id: "SP001",
    student: "Demo Student",
    exam: "TNPSC Group 4",
    duration: "90 Days",
    completion: 42,
    status: "Active"
  },
  {
    id: "SP002",
    student: "Demo Student",
    exam: "TNPSC Group 2",
    duration: "120 Days",
    completion: 100,
    status: "Completed"
  }
];

export default function AIStudyPlanGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredPlans = useMemo(() => {

    return studyPlans.filter((plan) =>
      plan.exam.toLowerCase().includes(search.toLowerCase())
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

              AI Study Plan Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Generate personalized TNPSC study plans using AI, learner analytics, syllabus progress, and exam goals.

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

            <BookOpen className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Study Plans

            </p>

            <h2 className="text-4xl font-bold mt-2">

              5,284

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Users className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Active Learners

            </p>

            <h2 className="text-4xl font-bold mt-2">

              8,421

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              Average Completion

            </p>

            <h2 className="text-4xl font-bold mt-2">

              76%

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

        {/* Study Plan Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Study Plan Configuration

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
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Study Duration

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>30 Days</option>
                <option>60 Days</option>
                <option>90 Days</option>
                <option>180 Days</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Daily Study Time

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>4 Hours</option>
                <option>6 Hours</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Revision Strategy

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>AI Optimized</option>
                <option>Spaced Repetition</option>
                <option>Weekly Revision</option>
                <option>Daily Revision</option>

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
                placeholder="Search study plans..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Study Plans */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Study Plans

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Student</th>
                  <th className="text-left p-4">Exam</th>
                  <th className="text-left p-4">Duration</th>
                  <th className="text-left p-4">Completion</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredPlans.map((plan) => (

                  <tr
                    key={plan.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{plan.student}</td>
                    <td className="p-4">{plan.exam}</td>
                    <td className="p-4">{plan.duration}</td>
                    <td className="p-4">{plan.completion}%</td>
                    <td className="p-4">{plan.status}</td>

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

                {/* AI Planning Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Study Planning Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Planning Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Study Planner</option>
                <option>TNPSC Smart Planner</option>
                <option>Adaptive Learning AI</option>
                <option>Exam Success Engine</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Planning Strategy

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Balanced</option>
                <option>Weak Subject First</option>
                <option>Exam Priority</option>
                <option>Revision Intensive</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Learning Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive</option>
                <option>Visual</option>
                <option>Reading</option>
                <option>Practice Based</option>

              </select>

            </div>

          </div>

        </div>

        {/* Smart Scheduling */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Smart Scheduling Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Daily Study Goals

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Weekly Revision

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Monthly Mock Test

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Spaced Repetition

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              AI Progress Adjustment

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Automatic Catch-up Plan

            </label>

          </div>

        </div>

        {/* Subject Allocation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Subject-wise Study Allocation

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Subject</th>
                  <th className="text-left p-4">Hours / Week</th>
                  <th className="text-left p-4">Priority</th>
                  <th className="text-left p-4">Revision Cycle</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["History", "8 hrs", "High", "Every 7 Days"],
                  ["Polity", "6 hrs", "High", "Every 7 Days"],
                  ["Science", "5 hrs", "Medium", "Every 10 Days"],
                  ["Geography", "4 hrs", "Medium", "Every 10 Days"],
                  ["Economy", "6 hrs", "High", "Every 5 Days"],
                  ["Current Affairs", "7 hrs", "High", "Daily"]
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

        {/* Weak Topic Analysis */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Weak Topic Analysis

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Economy</span>

                <span className="font-bold text-red-600">

                  Needs Improvement

                </span>

              </div>

              <div className="flex justify-between">

                <span>Environment</span>

                <span className="font-bold text-yellow-600">

                  Moderate

                </span>

              </div>

              <div className="flex justify-between">

                <span>Science</span>

                <span className="font-bold text-green-600">

                  Strong

                </span>

              </div>

              <div className="flex justify-between">

                <span>Current Affairs</span>

                <span className="font-bold text-blue-600">

                  Daily Revision

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

                Allocate one additional hour daily for Economy.

              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">

                Schedule Current Affairs revision every evening.

              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">

                Maintain History performance with weekly mock tests.

              </div>

            </div>

          </div>

        </div>

        {/* Live Generation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Live AI Study Plan Generation

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 rounded-full bg-gray-200">

              <div
                className="h-4 rounded-full bg-indigo-600"
                style={{ width: "81%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has completed 81% of the personalized study plan. Daily timetable, revision sessions, mock test schedule, and adaptive recommendations are being finalized.

            </p>

          </div>

        </div>

                {/* AI Daily Timetable */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Daily Timetable

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Time</th>
                  <th className="p-4 text-left">Activity</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Priority</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["06:00 - 07:00","Current Affairs","1 Hour","High"],
                  ["07:30 - 09:00","History","1.5 Hours","High"],
                  ["18:00 - 19:00","Economy","1 Hour","High"],
                  ["19:15 - 20:00","Revision","45 Minutes","Medium"],
                  ["20:00 - 21:00","MCQ Practice","1 Hour","High"]
                ].map((item,index)=>(

                  <tr key={index} className="border-t hover:bg-gray-50">

                    <td className="p-4">{item[0]}</td>
                    <td className="p-4">{item[1]}</td>
                    <td className="p-4">{item[2]}</td>
                    <td className="p-4">{item[3]}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Weekly Milestones */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Weekly Milestones

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Complete Indian History Unit",
                "Finish Economy Chapters 1–5",
                "Solve 300 MCQs",
                "Complete Weekly Mock Test",
                "Revise Current Affairs"
              ].map((item,index)=>(

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="text-green-600" size={20}/>

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Monthly Targets

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Syllabus Completion</span>

                <span className="font-bold">85%</span>

              </div>

              <div className="flex justify-between">

                <span>Mock Tests</span>

                <span className="font-bold">12</span>

              </div>

              <div className="flex justify-between">

                <span>Revision Sessions</span>

                <span className="font-bold">24</span>

              </div>

              <div className="flex justify-between">

                <span>Expected Accuracy</span>

                <span className="font-bold text-green-600">

                  88%

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Readiness */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Trophy className="text-yellow-500"/>

            <h2 className="text-2xl font-bold">

              AI Readiness Score

            </h2>

          </div>

          <div className="text-center p-10">

            <h1 className="text-7xl font-bold text-indigo-600">

              86%

            </h1>

            <p className="text-gray-600 mt-4">

              Based on syllabus completion, revision consistency,
              mock test performance, attendance, and AI learning analytics.

            </p>

          </div>

        </div>

        {/* Completion Forecast */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-green-50 rounded-xl p-6 text-center">

            <TrendingUp className="mx-auto text-green-600" size={40}/>

            <h3 className="mt-4 font-bold">

              Expected Score

            </h3>

            <p className="text-3xl font-bold mt-2">

              182 / 200

            </p>

          </div>

          <div className="bg-blue-50 rounded-xl p-6 text-center">

            <Target className="mx-auto text-blue-600" size={40}/>

            <h3 className="mt-4 font-bold">

              Completion Forecast

            </h3>

            <p className="text-3xl font-bold mt-2">

              96%

            </p>

          </div>

          <div className="bg-orange-50 rounded-xl p-6 text-center">

            <Sparkles className="mx-auto text-orange-600" size={40}/>

            <h3 className="mt-4 font-bold">

              AI Confidence

            </h3>

            <p className="text-3xl font-bold mt-2">

              99%

            </p>

          </div>

        </div>

        {/* Publish */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish to Student Dashboard

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Sync Calendar

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export ICS Calendar

            </button>

          </div>

        </div>

        {/* Backend APIs */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>POST /api/v1/study-plan/generate</p>
              <p>POST /api/v1/study-plan/optimize</p>
              <p>POST /api/v1/study-plan/revision</p>
              <p>POST /api/v1/study-plan/calendar</p>
              <p>GET /api/v1/study-plan/preview</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/study-plan/publish</p>
              <p>POST /api/v1/study-plan/export/pdf</p>
              <p>POST /api/v1/study-plan/export/excel</p>
              <p>POST /api/v1/study-plan/export/ics</p>
              <p>GET /api/v1/study-plan/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}