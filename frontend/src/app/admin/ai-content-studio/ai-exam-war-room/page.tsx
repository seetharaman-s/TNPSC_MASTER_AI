"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  ShieldAlert,
  Target,
  CalendarClock,
  Search,
  Filter,
  Settings,
  Sparkles,
  Activity,
  Trophy,
  BarChart3,
  Database,
  Users,
  Clock3,
} from "lucide-react";

interface ExamMission {
  id: string;
  exam: string;
  milestone: string;
  readiness: number;
  priority: "Critical" | "High" | "Medium";
}

const missions: ExamMission[] = [
  {
    id: "WAR001",
    exam: "TNPSC Group IV",
    milestone: "Complete Unit Revision",
    readiness: 91,
    priority: "High",
  },
  {
    id: "WAR002",
    exam: "TNPSC Group II",
    milestone: "Grand Mock Test",
    readiness: 84,
    priority: "Critical",
  },
];

export default function AIExamWarRoomPage() {

  const [search,setSearch]=useState("");

  const filtered = useMemo(()=>{

    return missions.filter(item=>

      item.exam.toLowerCase().includes(search.toLowerCase()) ||

      item.milestone.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return(

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <ShieldAlert className="text-red-600"/>

              AI Exam War Room

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise command center for live exam preparation,
              AI readiness monitoring, strategic planning,
              milestone tracking and intelligent decision support.

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

            <Target className="text-red-600"/>

            <p className="text-gray-500 mt-4">

              Active Missions

            </p>

            <h2 className="text-4xl font-bold mt-2">

              42

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <CalendarClock className="text-green-600"/>

            <p className="text-gray-500 mt-4">

              Upcoming Exams

            </p>

            <h2 className="text-4xl font-bold mt-2">

              8

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Users className="text-indigo-600"/>

            <p className="text-gray-500 mt-4">

              Active Aspirants

            </p>

            <h2 className="text-4xl font-bold mt-2">

              31,264

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="text-gray-500 mt-4">

              AI Confidence

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.4%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              War Room Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Exams</option>
                <option>Group I</option>
                <option>Group II</option>
                <option>Group IV</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Mission Level

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Strategic AI</option>
                <option>Prediction AI</option>
                <option>Optimization AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Dashboard

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Live</option>
                <option>Daily</option>
                <option>Executive</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Strategy Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Generate exam strategy, optimize revision schedule, detect risks, improve readiness, recommend mock tests and maximize selection probability..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Execute Strategy

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

              <Search className="absolute left-3 top-3 text-gray-400"/>

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search missions..."
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
                  <th className="p-4 text-left">Mission</th>
                  <th className="p-4 text-left">Readiness</th>
                  <th className="p-4 text-left">Priority</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.exam}</td>
                    <td className="p-4">{item.milestone}</td>
                    <td className="p-4">{item.readiness}%</td>
                    <td className="p-4">{item.priority}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Live Exam Command Dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Activity className="text-red-600"/>

              <h2 className="text-xl font-bold">

                Live Exam Command Dashboard

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Overall Readiness","94%"],
                ["Revision Progress","92%"],
                ["Mock Completion","90%"],
                ["Time Management","96%"],
                ["Accuracy","95%"],
                ["AI Confidence","99%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-red-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Countdown */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Clock3 className="text-orange-600"/>

              <h2 className="text-xl font-bold">

                Countdown & Milestone Tracker

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Group IV","118 Days"],
                ["Group II","176 Days"],
                ["VAO","143 Days"],
                ["Group I","228 Days"],
              ].map(([exam,time])=>(

                <div
                  key={exam}
                  className="border rounded-xl p-6 text-center hover:bg-orange-50"
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

        {/* Readiness */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Real-Time Readiness Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["History","96%"],
              ["Polity","98%"],
              ["Science","90%"],
              ["Economy","88%"],
              ["Geography","91%"],
              ["Tamil","99%"],
              ["Current Affairs","92%"],
              ["Aptitude","95%"],
            ].map(([subject,value])=>(

              <div
                key={subject}
                className="border rounded-xl p-5 hover:bg-red-50"
              >

                <div className="font-semibold">

                  {subject}

                </div>

                <div className="text-3xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Strategy Planner */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Strategy Planner

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Daily Mission",
                "Weekly Target",
                "Revision Plan",
                "Mock Strategy",
                "Weak Subject Focus",
                "Speed Improvement",
                "Final Revision",
                "Exam Simulation",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Risk Center */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Critical Risk Monitoring

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Low Revision Frequency",
                "Pending Mock Tests",
                "Weak Economy Score",
                "Current Affairs Backlog",
                "Attendance Drop",
                "Time Management Issue",
              ].map((risk)=>(

                <div
                  key={risk}
                  className="border rounded-lg p-4 hover:bg-red-50"
                >

                  ⚠️ {risk}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Mock Test Orchestration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Smart Mock-Test Orchestration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Daily Mock",
              "Weekly Mock",
              "Subject Test",
              "Unit Test",
              "Adaptive Mock",
              "Grand Test",
              "Previous Year Test",
              "Final Test",
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

        {/* Revision Mission */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Revision Mission Control

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Today's Revision",
              "7-Day Plan",
              "15-Day Plan",
              "30-Day Plan",
              "Weak Topic Review",
              "Flash Revision",
              "AI Revision",
              "Final Sprint",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-blue-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Selection Probability */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Selection Probability Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Expected Score","188/200"],
              ["Predicted Rank","Top 40"],
              ["Selection Chance","98%"],
              ["Interview Chance","96%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 hover:bg-yellow-50 text-center"
              >

                <div className="font-semibold">

                  {title}

                </div>

                <div className="text-3xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Executive Command Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-red-600"/>

            <h2 className="text-2xl font-bold">

              Executive Command Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Mission Completion","95.8%"],
              ["Exam Readiness","94.6%"],
              ["Selection Prediction","98.2%"],
              ["AI Strategy Accuracy","99.4%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-red-50"
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

        {/* Mission Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Mission Trend Report

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","71%"],
                ["March","82%"],
                ["May","89%"],
                ["July","95%"],
                ["September","98%"],
              ].map(([month,value])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-red-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Strategic Insights

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Pending Missions","8"],
                ["Completed Missions","134"],
                ["Weak Subjects","3"],
                ["Recommended Revisions","27"],
                ["Mock Tests Due","5"],
                ["Success Index","98%"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-xl p-5 hover:bg-green-50"
                >

                  <div className="font-semibold">

                    {title}

                  </div>

                  <div className="text-3xl font-bold mt-3">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Mission History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Mission History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Mission</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Progress</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Complete Unit Revision</td>
                  <td className="p-4">Completed</td>
                  <td className="p-4">100%</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Grand Mock Test</td>
                  <td className="p-4">In Progress</td>
                  <td className="p-4">82%</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Audit Log */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Command Center Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Mission synchronized",
              "AI strategy generated",
              "Risk analysis completed",
              "Revision schedule updated",
              "Mock schedule optimized",
              "Executive dashboard refreshed",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-4 hover:bg-gray-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Command Reports

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg">

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

              <p>GET /api/v1/war-room/dashboard</p>
              <p>GET /api/v1/war-room/missions</p>
              <p>POST /api/v1/war-room/strategy</p>
              <p>POST /api/v1/war-room/readiness</p>
              <p>POST /api/v1/war-room/risk-analysis</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/war-room/history</p>
              <p>GET /api/v1/war-room/analytics</p>
              <p>POST /api/v1/war-room/export/pdf</p>
              <p>POST /api/v1/war-room/export/excel</p>
              <p>POST /api/v1/war-room/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}