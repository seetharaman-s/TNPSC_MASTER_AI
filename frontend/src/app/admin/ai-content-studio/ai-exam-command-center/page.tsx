"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  ShieldCheck,
  Target,
  Calendar,
  AlarmClock,
  Search,
  Filter,
  Settings,
  Sparkles,
  Trophy,
  BarChart3,
  Activity,
  Users,
  BookOpen,
  Clock3,
} from "lucide-react";

interface ExamMission {
  id: string;
  exam: string;
  examDate: string;
  readiness: number;
  predictedRank: number;
  completion: number;
  status: "Excellent" | "Good" | "Critical";
}

const examMissions: ExamMission[] = [
  {
    id: "EX001",
    exam: "TNPSC Group IV",
    examDate: "12 Nov 2026",
    readiness: 96,
    predictedRank: 42,
    completion: 91,
    status: "Excellent",
  },
  {
    id: "EX002",
    exam: "TNPSC Group II",
    examDate: "08 Jan 2027",
    readiness: 82,
    predictedRank: 315,
    completion: 74,
    status: "Good",
  },
];

export default function AIExamCommandCenterPage() {

  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {

    return examMissions.filter((item)=>

      item.exam.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return (

<div className="min-h-screen bg-gray-50 p-6">

<div className="max-w-7xl mx-auto">

{/* Header */}

<div className="flex justify-between items-center mb-8">

<div>

<h1 className="text-3xl font-bold flex items-center gap-3">

<ShieldCheck className="text-indigo-600"/>

AI Exam Command Center

</h1>

<p className="text-gray-500 mt-2">

Enterprise AI control center for complete TNPSC examination planning,
mock management, readiness prediction, revision strategy and executive
analytics.

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

{/* KPI */}

<div className="grid md:grid-cols-4 gap-6">

<div className="bg-white rounded-xl shadow p-6">

<Target className="text-indigo-600"/>

<p className="mt-4 text-gray-500">

Active Exams

</p>

<h2 className="text-4xl font-bold mt-2">

8

</h2>

</div>

<div className="bg-white rounded-xl shadow p-6">

<Trophy className="text-green-600"/>

<p className="mt-4 text-gray-500">

Average Readiness

</p>

<h2 className="text-4xl font-bold mt-2">

93%

</h2>

</div>

<div className="bg-white rounded-xl shadow p-6">

<Users className="text-orange-600"/>

<p className="mt-4 text-gray-500">

Students

</p>

<h2 className="text-4xl font-bold mt-2">

24,650

</h2>

</div>

<div className="bg-white rounded-xl shadow p-6">

<Brain className="text-purple-600"/>

<p className="mt-4 text-gray-500">

AI Confidence

</p>

<h2 className="text-4xl font-bold mt-2">

99.1%

</h2>

</div>

</div>

{/* Configuration */}

<div className="bg-white rounded-xl shadow mt-8">

<div className="p-6 border-b flex items-center gap-2">

<Settings className="text-indigo-600"/>

<h2 className="text-2xl font-bold">

Command Center Configuration

</h2>

</div>

<div className="grid md:grid-cols-4 gap-6 p-6">

<div>

<label className="font-semibold">

Exam

</label>

<select className="w-full border rounded-lg mt-2 p-3">

<option>Group I</option>
<option>Group II</option>
<option>Group IIA</option>
<option>Group IV</option>
<option>VAO</option>

</select>

</div>

<div>

<label className="font-semibold">

Mission Mode

</label>

<select className="w-full border rounded-lg mt-2 p-3">

<option>Normal</option>
<option>Intensive</option>
<option>Crash Course</option>
<option>Final Revision</option>

</select>

</div>

<div>

<label className="font-semibold">

AI Strategy

</label>

<select className="w-full border rounded-lg mt-2 p-3">

<option>Balanced</option>
<option>Aggressive</option>
<option>Adaptive</option>

</select>

</div>

<div>

<label className="font-semibold">

Dashboard Scope

</label>

<select className="w-full border rounded-lg mt-2 p-3">

<option>Individual</option>
<option>Batch</option>
<option>Institution</option>

</select>

</div>

</div>

</div>

{/* AI Prompt */}

<div className="bg-white rounded-xl shadow mt-8">

<div className="p-6 border-b flex items-center gap-2">

<Sparkles className="text-indigo-600"/>

<h2 className="text-2xl font-bold">

AI Exam Strategy Prompt

</h2>

</div>

<div className="p-6">

<textarea
rows={6}
className="w-full border rounded-lg p-4"
placeholder="Analyze complete exam readiness, identify risk areas, optimize revision strategy, recommend mock schedule, predict rank and generate AI action plan..."
/>

<div className="flex gap-4 mt-5">

<button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

<Brain size={18}/>

Generate Strategy

</button>

<button className="border px-6 py-3 rounded-lg">

Reset

</button>

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
onChange={(e)=>setSearch(e.target.value)}
placeholder="Search Exam..."
className="w-full border rounded-lg py-3 pl-10"
/>

</div>

<button className="border rounded-lg px-5 flex items-center gap-2">

<Filter size={18}/>

Filter

</button>

</div>

</div>

{/* Mission Repository */}

<div className="bg-white rounded-xl shadow mt-8">

<div className="p-6 border-b">

<h2 className="text-2xl font-bold">

Exam Mission Repository

</h2>

</div>

<div className="overflow-x-auto">

<table className="min-w-full">

<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">Exam</th>
<th className="p-4 text-left">Exam Date</th>
<th className="p-4 text-left">Readiness</th>
<th className="p-4 text-left">Predicted Rank</th>
<th className="p-4 text-left">Completion</th>
<th className="p-4 text-left">Status</th>

</tr>

</thead>

<tbody>

{filteredData.map((item)=>(

<tr
key={item.id}
className="border-t hover:bg-gray-50"
>

<td className="p-4">{item.exam}</td>
<td className="p-4">{item.examDate}</td>
<td className="p-4">{item.readiness}%</td>
<td className="p-4">{item.predictedRank}</td>
<td className="p-4">{item.completion}%</td>
<td className="p-4">{item.status}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

        {/* AI Exam Readiness Dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Activity className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                AI Exam Readiness Dashboard

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Overall Readiness","93%"],
                ["Revision Progress","89%"],
                ["Mock Performance","91%"],
                ["Time Management","95%"],
                ["Accuracy","94%"],
                ["AI Confidence","99%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Exam Countdown */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <AlarmClock className="text-red-600"/>

              <h2 className="text-xl font-bold">

                Live Exam Countdown

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Group IV","116 Days"],
                ["Group II","173 Days"],
                ["VAO","142 Days"],
                ["Group I","225 Days"],
              ].map(([exam,time])=>(

                <div
                  key={exam}
                  className="border rounded-xl p-6 text-center hover:bg-red-50"
                >

                  <h3 className="font-semibold">

                    {exam}

                  </h3>

                  <p className="text-3xl font-bold mt-3">

                    {time}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Mock Test Command Center */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BookOpen className="text-green-600"/>

            <h2 className="text-2xl font-bold">

              Mock Test Command Center

            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

            {[
              "Daily Mock Test",
              "Weekly Grand Test",
              "Previous Year Test",
              "Subject Mock",
              "Unit Mock",
              "Adaptive Mock",
              "Speed Test",
              "Revision Test",
              "Full Length Test",
              "AI Challenge Test",
              "Rank Booster Test",
              "Final Assessment",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-green-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Performance Heatmap */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Cross Subject Performance Heatmap

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                ["History","94%"],
                ["Polity","92%"],
                ["Science","88%"],
                ["Economy","83%"],
                ["Geography","90%"],
                ["Tamil","96%"],
                ["Current Affairs","89%"],
                ["Aptitude","93%"],
              ].map(([subject,value])=>(

                <div
                  key={subject}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  <div className="font-semibold">

                    {subject}

                  </div>

                  <div className="text-2xl font-bold mt-2">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* AI Rank Prediction */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Rank Prediction Engine

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Expected Score","186 / 200"],
                ["Predicted Rank","Top 50"],
                ["Selection Chance","98%"],
                ["Interview Probability","95%"],
                ["Confidence Score","99%"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  <div className="font-semibold">

                    {title}

                  </div>

                  <div className="text-2xl font-bold mt-2">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Risk Alert Center */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Risk Alert Center

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Low Revision Frequency",
              "Weak Economy Performance",
              "Current Affairs Pending",
              "Low Mock Accuracy",
              "Time Management Issue",
              "Geography Revision Required",
            ].map((risk)=>(

              <div
                key={risk}
                className="border rounded-xl p-5 hover:bg-red-50"
              >

                ⚠️ {risk}

              </div>

            ))}

          </div>

        </div>

        {/* Smart Revision */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Clock3 className="text-purple-600"/>

            <h2 className="text-2xl font-bold">

              Smart Revision Command Center

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Today's Revision",
              "Tomorrow Schedule",
              "7-Day Revision",
              "15-Day Revision",
              "30-Day Plan",
              "Mistake Revision",
              "Rapid Revision",
              "Final Revision",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-purple-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* AI Strategy Optimizer */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Exam Strategy Optimizer

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "High Weightage Topic Strategy",
              "Last 30 Days Intensive Plan",
              "Mock Improvement Strategy",
              "Revision Optimization",
              "Time Allocation Strategy",
              "Selection Probability Optimization",
            ].map((strategy)=>(

              <div
                key={strategy}
                className="border rounded-lg p-5 hover:bg-blue-50"
              >

                {strategy}

              </div>

            ))}

          </div>

        </div>

                {/* Executive Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Executive Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Overall Readiness","94.2%"],
              ["Predicted Selection","97.5%"],
              ["Average Mock Score","183 / 200"],
              ["Institution Rank","Top 5"],
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

        {/* Readiness & Performance Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Readiness Trend Report

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","78%"],
                ["March","84%"],
                ["May","89%"],
                ["July","94%"],
                ["September","97%"],
              ].map(([month,value])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Performance Trend Report

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Mock Accuracy","96%"],
                ["Revision Efficiency","94%"],
                ["Speed Improvement","92%"],
                ["Retention","91%"],
                ["AI Confidence","99%"],
                ["Selection Index","98%"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-xl p-5 hover:bg-green-50"
                >

                  <h3 className="font-semibold">

                    {title}

                  </h3>

                  <p className="text-3xl font-bold mt-3">

                    {value}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Strategy History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Strategy History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Strategy</th>
                  <th className="p-4 text-left">Priority</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">30-Day Intensive Revision Plan</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Completed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Adaptive Mock Test Schedule</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Active</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Institutional Leaderboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Institution Leaderboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Top Performer","98.9%"],
              ["Average Score","186"],
              ["Qualified Students","1,284"],
              ["Success Rate","96%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-yellow-50"
              >

                <h3 className="text-gray-500">

                  {title}

                </h3>

                <p className="text-3xl font-bold mt-3">

                  {value}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Executive Report

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

          </div>

        </div>

        {/* Backend API */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl mt-8 p-6 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">

            <div className="space-y-2">

              <p>GET /api/v1/exam/dashboard</p>
              <p>POST /api/v1/exam/readiness</p>
              <p>POST /api/v1/exam/rank-prediction</p>
              <p>POST /api/v1/exam/strategy</p>
              <p>POST /api/v1/exam/mock-schedule</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/exam/analytics</p>
              <p>GET /api/v1/exam/history</p>
              <p>POST /api/v1/exam/export/pdf</p>
              <p>POST /api/v1/exam/export/excel</p>
              <p>POST /api/v1/exam/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}