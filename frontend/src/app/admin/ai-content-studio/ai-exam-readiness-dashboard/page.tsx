"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Target,
  Trophy,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Award,
  Search,
  Filter,
  Settings,
  Sparkles,
} from "lucide-react";

interface ReadinessReport {
  id: string;
  student: string;
  exam: string;
  readiness: number;
  predictedScore: number;
  predictedRank: string;
  status: "Ready" | "Almost Ready" | "Needs Improvement";
}

const reports: ReadinessReport[] = [
  {
    id: "ER001",
    student: "Priya",
    exam: "TNPSC Group 4",
    readiness: 92,
    predictedScore: 181,
    predictedRank: "Top 500",
    status: "Ready",
  },
  {
    id: "ER002",
    student: "Arun",
    exam: "TNPSC Group 2",
    readiness: 84,
    predictedScore: 167,
    predictedRank: "Top 1500",
    status: "Almost Ready",
  },
];

export default function AIExamReadinessDashboardPage() {

  const [search, setSearch] = useState("");

  const filteredReports = useMemo(() => {
    return reports.filter(
      (report) =>
        report.student.toLowerCase().includes(search.toLowerCase()) ||
        report.exam.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600"/>

              AI Exam Readiness Dashboard

            </h1>

            <p className="text-gray-500 mt-2">

              AI evaluates complete preparation using tests, learning
              progress, revision history, accuracy, speed,
              and predicts final readiness.

            </p>

          </div>

          <Link
            href="/admin/ai-content-studio"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <ArrowLeft size={18}/>
            Back
          </Link>

        </div>

        {/* KPI Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-green-600"/>

            <p className="mt-4 text-gray-500">
              Overall Readiness
            </p>

            <h2 className="text-4xl font-bold mt-2">
              91%
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Trophy className="text-yellow-500"/>

            <p className="mt-4 text-gray-500">
              Predicted Score
            </p>

            <h2 className="text-4xl font-bold mt-2">
              182/200
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Award className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">
              Expected Rank
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Top 500
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600"/>

            <p className="mt-4 text-gray-500">
              AI Confidence
            </p>

            <h2 className="text-4xl font-bold mt-2">
              98.7%
            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Readiness Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Examination

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

                Target Score

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>180+</option>
                <option>170+</option>
                <option>160+</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Prediction Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Balanced</option>
                <option>Aggressive</option>
                <option>Conservative</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Analysis Period

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Last 30 Days</option>
                <option>Last 60 Days</option>
                <option>Overall</option>

              </select>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search student..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Readiness Reports */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Readiness Reports

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Readiness</th>
                  <th className="p-4 text-left">Predicted Score</th>
                  <th className="p-4 text-left">Predicted Rank</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredReports.map((report)=>(
                  <tr
                    key={report.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-4">{report.student}</td>
                    <td className="p-4">{report.exam}</td>
                    <td className="p-4">{report.readiness}%</td>
                    <td className="p-4">{report.predictedScore}</td>
                    <td className="p-4">{report.predictedRank}</td>
                    <td className="p-4">{report.status}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Overall Readiness Gauge */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Target className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Overall Exam Readiness

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 p-6">

            <div className="flex flex-col items-center justify-center">

              <div className="w-52 h-52 rounded-full border-[14px] border-green-500 flex items-center justify-center">

                <div className="text-center">

                  <h2 className="text-5xl font-bold">

                    91%

                  </h2>

                  <p className="text-gray-500 mt-2">

                    Ready

                  </p>

                </div>

              </div>

            </div>

            <div className="lg:col-span-2 space-y-5">

              {[
                ["Mock Test Performance","94%"],
                ["Subject Coverage","89%"],
                ["Revision Completion","86%"],
                ["Time Management","91%"],
                ["Accuracy","95%"],
              ].map(([label,value])=>(

                <div key={label}>

                  <div className="flex justify-between mb-2">

                    <span>{label}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Subject-wise Readiness */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Subject-wise Readiness Heatmap

            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">

            {[
              ["History","92%","bg-green-100"],
              ["Polity","95%","bg-green-100"],
              ["Science","84%","bg-yellow-100"],
              ["Geography","88%","bg-yellow-100"],
              ["Economics","81%","bg-orange-100"],
              ["Current Affairs","96%","bg-green-100"],
            ].map(([subject,score,color])=>(

              <div
                key={subject}
                className={`${color} rounded-xl p-6 text-center`}
              >

                <BookOpen className="mx-auto text-indigo-600 mb-3"/>

                <h3 className="font-semibold">

                  {subject}

                </h3>

                <p className="text-3xl font-bold mt-3">

                  {score}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Strength & Weakness */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <TrendingUp className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Strong Areas

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Current Affairs",
                "Indian Constitution",
                "Modern History",
                "Science Basics",
                "Mental Ability",
              ].map((topic)=>(

                <div
                  key={topic}
                  className="flex items-center gap-3 border rounded-lg p-4"
                >

                  <CheckCircle2 className="text-green-600"/>

                  {topic}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <TrendingDown className="text-red-600"/>

              <h2 className="text-xl font-bold">

                Weak Areas

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Ancient History",
                "Economics",
                "Geography Maps",
                "Environment",
                "Tamil Grammar",
              ].map((topic)=>(

                <div
                  key={topic}
                  className="flex items-center gap-3 border rounded-lg p-4"
                >

                  <AlertTriangle className="text-red-500"/>

                  {topic}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Mock Test Trend */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Mock Test Performance Trend

            </h2>

          </div>

          <div className="p-6 space-y-5">

            {[
              ["Mock Test 1","72%"],
              ["Mock Test 2","78%"],
              ["Mock Test 3","84%"],
              ["Mock Test 4","91%"],
              ["Mock Test 5","95%"],
            ].map(([test,score])=>(

              <div key={test}>

                <div className="flex justify-between mb-2">

                  <span>{test}</span>

                  <span>{score}</span>

                </div>

                <div className="bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{width:score}}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Time Management */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Time Management Analysis

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Average Question Time","41 sec"],
                ["Fastest Section","Science"],
                ["Slowest Section","Economics"],
                ["Time Utilization","92%"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{title}</span>

                  <span className="font-semibold">

                    {value}

                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                High Priority Revision Topics

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Indian Economy",
                "Ancient Tamil Nadu",
                "Environment",
                "World Geography",
                "Current Affairs Revision",
              ].map((topic)=>(

                <div
                  key={topic}
                  className="flex items-center gap-3 border rounded-lg p-4"
                >

                  <AlertTriangle className="text-orange-500"/>

                  {topic}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Final Revision Checklist */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Final Revision Checklist

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Complete all revision notes",
              "Finish previous year questions",
              "Attempt full-length mock test",
              "Revise current affairs",
              "Practice aptitude shortcuts",
              "Sleep well before examination",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-4 flex items-center gap-3 hover:bg-green-50"
              >

                <CheckCircle2 className="text-green-600"/>

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* AI Action Plan */}

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl text-white shadow mt-8">

          <div className="p-8">

            <h2 className="text-3xl font-bold">

              AI Recommended Final Action Plan

            </h2>

            <p className="mt-4 text-indigo-100">

              Based on your overall preparation, AI recommends spending the
              next seven days focusing on Economics, Geography, and Current
              Affairs revision while continuing one full-length mock test
              every alternate day to maximize your TNPSC score.

            </p>

            <button className="mt-6 bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold">

              Generate Personalized 7-Day Revision Plan

            </button>

          </div>

        </div>

                {/* Readiness Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Readiness Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Students Analyzed","24,568"],
              ["Average Readiness","88%"],
              ["Expected Qualified","18,942"],
              ["AI Prediction Accuracy","98.8%"],
            ].map(([title,value])=>(

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

        {/* Historical Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Readiness Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","64%"],
                ["February","71%"],
                ["March","79%"],
                ["April","86%"],
                ["May","91%"],
              ].map(([month,value])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Leaderboard */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Trophy className="text-yellow-500"/>

              <h2 className="text-xl font-bold">

                Readiness Leaderboard

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya","98%"],
                ["Arun","96%"],
                ["Meena","95%"],
                ["Vignesh","94%"],
                ["Karthik","93%"],
              ].map(([name,score],index)=>(

                <div
                  key={name}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <div className="flex items-center gap-3">

                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold">

                      {index+1}

                    </span>

                    <span>{name}</span>

                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                    {score}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Readiness History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Readiness History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Readiness</th>
                  <th className="p-4 text-left">Predicted Rank</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredReports.map((report)=>(

                  <tr
                    key={report.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">19 Jul 2026</td>
                    <td className="p-4">{report.student}</td>
                    <td className="p-4">{report.exam}</td>
                    <td className="p-4">{report.readiness}%</td>
                    <td className="p-4">{report.predictedRank}</td>
                    <td className="p-4">{report.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Reports

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Generate AI Report

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

        {/* Backend API Endpoints */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>GET /api/v1/readiness/dashboard</p>
              <p>GET /api/v1/readiness/report</p>
              <p>POST /api/v1/readiness/predict</p>
              <p>GET /api/v1/readiness/history</p>
              <p>GET /api/v1/readiness/analytics</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/readiness/export/pdf</p>
              <p>POST /api/v1/readiness/export/excel</p>
              <p>POST /api/v1/readiness/export/csv</p>
              <p>GET /api/v1/readiness/leaderboard</p>
              <p>GET /api/v1/readiness/checklist</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}