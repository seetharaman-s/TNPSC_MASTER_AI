"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  UserCircle2,
  Activity,
  Database,
  Search,
  Filter,
  Settings,
  Sparkles,
  Target,
  Cpu,
  BarChart3,
  Shield,
  Clock3,
  TrendingUp,
} from "lucide-react";

interface DigitalTwinProfile {
  id: string;
  learner: string;
  course: string;
  twinHealth: number;
  prediction: number;
  status: "Excellent" | "Good" | "Needs Attention";
}

const twinProfiles: DigitalTwinProfile[] = [
  {
    id: "DT001",
    learner: "Student A",
    course: "TNPSC Group IV",
    twinHealth: 97,
    prediction: 96,
    status: "Excellent",
  },
  {
    id: "DT002",
    learner: "Student B",
    course: "TNPSC Group II",
    twinHealth: 88,
    prediction: 84,
    status: "Good",
  },
];

export default function AIDigitalTwinPage() {

  const [search, setSearch] = useState("");

  const filteredProfiles = useMemo(() => {

    return twinProfiles.filter((item)=>

      item.learner.toLowerCase().includes(search.toLowerCase()) ||

      item.course.toLowerCase().includes(search.toLowerCase())

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

              AI Digital Twin

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise AI Digital Twin platform for creating a
              real-time virtual representation of every learner,
              predicting future outcomes, simulating learning
              scenarios, and optimizing exam success.

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

            <UserCircle2 className="text-indigo-600"/>

            <p className="text-gray-500 mt-4">

              Active Digital Twins

            </p>

            <h2 className="text-4xl font-bold mt-2">

              32,845

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Activity className="text-green-600"/>

            <p className="text-gray-500 mt-4">

              Twin Health Score

            </p>

            <h2 className="text-4xl font-bold mt-2">

              97.2%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-orange-600"/>

            <p className="text-gray-500 mt-4">

              Success Prediction

            </p>

            <h2 className="text-4xl font-bold mt-2">

              95.8%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="text-gray-500 mt-4">

              AI Confidence

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.6%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Digital Twin Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">Course</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Courses</option>
                <option>Group I</option>
                <option>Group II</option>
                <option>Group IV</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">Simulation Mode</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Live Twin</option>
                <option>Future Prediction</option>
                <option>Scenario Simulation</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">Risk Level</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">AI Engine</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Digital Twin AI</option>
                <option>Prediction AI</option>
                <option>Simulation AI</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Digital Twin Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze learner behavior, simulate future outcomes, predict exam performance, identify risks, and recommend optimized learning strategies..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Generate Digital Twin

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

              <Search className="absolute left-3 top-3 text-gray-400" />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search digital twins..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Digital Twin Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Digital Twin Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Learner</th>
                  <th className="p-4 text-left">Course</th>
                  <th className="p-4 text-left">Twin Health</th>
                  <th className="p-4 text-left">Prediction</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredProfiles.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.learner}</td>
                    <td className="p-4">{item.course}</td>
                    <td className="p-4">{item.twinHealth}%</td>
                    <td className="p-4">{item.prediction}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* 360° Learner Profile */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <UserCircle2 className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                360° Learner Profile

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Personal Profile",
                "Learning Style",
                "Subject Strength",
                "Weak Topics",
                "Attendance",
                "Study Hours",
                "Mock Performance",
                "Exam Readiness",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-xl p-5 hover:bg-indigo-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Twin Health */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Activity className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Real-Time Twin Health Monitor

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Learning Consistency","96%"],
                ["Memory Retention","94%"],
                ["Quiz Accuracy","92%"],
                ["Revision Status","97%"],
                ["Confidence Score","95%"],
                ["Digital Twin Health","98%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

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

        {/* AI Behavioral Intelligence */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Behavioral Intelligence

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Learning Pattern",
              "Focus Level",
              "Motivation",
              "Distraction Index",
              "Revision Habit",
              "Question Solving",
              "Memory Score",
              "AI Confidence",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-purple-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Future Forecast */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Future Performance Forecast

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Expected Score",
                "Expected Rank",
                "Selection Chance",
                "Confidence",
                "Interview Probability",
                "Final Revision",
                "Risk Index",
                "Performance Trend",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-blue-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Skill Timeline */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Skill Evolution Timeline

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Month 1",
                "Month 2",
                "Month 3",
                "Month 4",
                "Month 5",
                "Month 6",
                "Current Level",
                "Future Goal",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* What-if Simulator */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              "What-if" Scenario Simulator

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Increase Study Hours",
              "More Mock Tests",
              "Daily Revision",
              "Weekend Practice",
              "Improve Accuracy",
              "Reduce Screen Time",
              "Focus Weak Subjects",
              "Final Simulation",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-yellow-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Adaptive Optimization */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Adaptive Learning Optimization

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Smart Daily Schedule",
                "Personalized Revision",
                "Dynamic Mock Tests",
                "Subject Prioritization",
                "Learning Recommendations",
                "AI Coaching",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  🚀 {item}

                </div>

              ))}

            </div>

          </div>

          {/* Intervention Center */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Predictive Intervention Center

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Low Engagement Alert",
                "Weak Subject Alert",
                "Attendance Alert",
                "Revision Reminder",
                "Mock Test Reminder",
                "High-Risk Prediction",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-red-50"
                >

                  ⚠️ {item}

                </div>

              ))}

            </div>

          </div>

        </div>

                {/* Executive Digital Twin Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Executive Digital Twin Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Twin Accuracy", "99.5%"],
              ["Prediction Reliability", "98.9%"],
              ["Learning Optimization", "96.7%"],
              ["Selection Forecast", "97.8%"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-indigo-50"
              >

                <h3 className="text-gray-500">{title}</h3>

                <p className="text-4xl font-bold mt-4">{value}</p>

              </div>

            ))}

          </div>

        </div>

        {/* Analytics & Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Digital Twin Trend Report

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January", "72%"],
                ["March", "81%"],
                ["May", "89%"],
                ["July", "94%"],
                ["September", "98%"],
              ].map(([month, value]) => (

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

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

                AI Twin Insights

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Active Twins", "32,845"],
                ["Healthy Twins", "31,940"],
                ["Risk Alerts", "214"],
                ["AI Recommendations", "4,832"],
                ["Predicted Selections", "21,670"],
                ["Optimization Score", "97%"],
              ].map(([title, value]) => (

                <div
                  key={title}
                  className="border rounded-xl p-5 hover:bg-green-50"
                >

                  <div className="font-semibold">{title}</div>

                  <div className="text-3xl font-bold mt-3">{value}</div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Twin History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Digital Twin History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Twin Event</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">AI Score</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Prediction Updated</td>
                  <td className="p-4">Completed</td>
                  <td className="p-4">99%</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Behavior Analysis</td>
                  <td className="p-4">Completed</td>
                  <td className="p-4">98%</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Audit Log */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Digital Twin Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Twin profile synchronized",
              "Prediction engine executed",
              "Behavior model refreshed",
              "Scenario simulation completed",
              "Optimization recommendations generated",
              "Executive dashboard refreshed",
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

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Digital Twin Reports

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

              <p>GET /api/v1/digital-twin/dashboard</p>
              <p>GET /api/v1/digital-twin/profiles</p>
              <p>POST /api/v1/digital-twin/predict</p>
              <p>POST /api/v1/digital-twin/simulate</p>
              <p>POST /api/v1/digital-twin/intervention</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/digital-twin/history</p>
              <p>GET /api/v1/digital-twin/analytics</p>
              <p>POST /api/v1/digital-twin/export/pdf</p>
              <p>POST /api/v1/digital-twin/export/excel</p>
              <p>POST /api/v1/digital-twin/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}