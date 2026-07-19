"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Database,
  Users,
  Activity,
  TrendingUp,
  GraduationCap,
  Search,
  Filter,
  Settings,
  Sparkles,
  Target,
  BarChart3,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

interface LearnerRecord {
  id: string;
  student: string;
  course: string;
  engagement: number;
  score: number;
  risk: "Low" | "Medium" | "High";
}

const learnerAnalytics: LearnerRecord[] = [
  {
    id: "LR001",
    student: "Student A",
    course: "TNPSC Group IV",
    engagement: 96,
    score: 91,
    risk: "Low",
  },
  {
    id: "LR002",
    student: "Student B",
    course: "TNPSC Group II",
    engagement: 82,
    score: 79,
    risk: "Medium",
  },
];

export default function AILearningAnalyticsLakePage() {

  const [search, setSearch] = useState("");

  const filteredLearners = useMemo(() => {

    return learnerAnalytics.filter((item)=>

      item.student.toLowerCase().includes(search.toLowerCase()) ||
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

              <Database className="text-indigo-600"/>

              AI Learning Analytics Lake

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise analytics platform for learner intelligence,
              engagement tracking, skill-gap analysis, predictive
              performance, and adaptive learning optimization.

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

            <Users className="text-indigo-600"/>

            <p className="text-gray-500 mt-4">

              Active Learners

            </p>

            <h2 className="text-4xl font-bold mt-2">

              28,640

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Activity className="text-green-600"/>

            <p className="text-gray-500 mt-4">

              Daily Engagement

            </p>

            <h2 className="text-4xl font-bold mt-2">

              94.6%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <GraduationCap className="text-orange-600"/>

            <p className="text-gray-500 mt-4">

              Completed Courses

            </p>

            <h2 className="text-4xl font-bold mt-2">

              12,482

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="text-gray-500 mt-4">

              AI Prediction Accuracy

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

              Analytics Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">Course</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Courses</option>
                <option>TNPSC Group I</option>
                <option>TNPSC Group II</option>
                <option>TNPSC Group IV</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">Analytics Mode</label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Real Time</option>
                <option>Historical</option>
                <option>Predictive</option>

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

                <option>Learning AI</option>
                <option>Prediction AI</option>
                <option>Recommendation AI</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Learning Analytics Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze learner engagement, competency, retention, learning behaviour, performance prediction and recommend adaptive interventions..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Run AI Analysis

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

              <Search className="absolute left-3 top-3 text-gray-400" size={18}/>

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search learners..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Learner Analytics Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Learner Analytics Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Learner</th>
                  <th className="p-4 text-left">Course</th>
                  <th className="p-4 text-left">Engagement</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Risk</th>

                </tr>

              </thead>

              <tbody>

                {filteredLearners.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.student}</td>
                    <td className="p-4">{item.course}</td>
                    <td className="p-4">{item.engagement}%</td>
                    <td className="p-4">{item.score}%</td>
                    <td className="p-4">{item.risk}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Learner Engagement Dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Activity className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Learner Engagement Dashboard

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Daily Active Users","95%"],
                ["Weekly Learning Time","91%"],
                ["Course Completion","88%"],
                ["Quiz Participation","94%"],
                ["Video Engagement","89%"],
                ["Revision Consistency","96%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

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

          {/* Competency Analysis */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Target className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Competency & Skill Gap Analysis

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                ["History","94%"],
                ["Polity","98%"],
                ["Science","87%"],
                ["Economy","82%"],
                ["Geography","91%"],
                ["Tamil","97%"],
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

                  <div className="text-3xl font-bold mt-3">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Knowledge Retention */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge Retention & Forgetting Curve

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Day 1",
              "Day 7",
              "Day 15",
              "Day 30",
              "Day 60",
              "Day 90",
              "Revision Cycle",
              "Retention Index",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-orange-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Cohort Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Cohort Comparison

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Group I",
                "Group II",
                "Group IIA",
                "Group IV",
                "VAO",
                "Combined Services",
                "Police",
                "Forest",
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

          {/* AI Intervention */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Intervention Recommendation Center

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Increase Daily Revision",
                "Practice More MCQs",
                "Focus on Weak Subjects",
                "Attend Live Classes",
                "Improve Time Management",
                "Complete Pending Mock Tests",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  🤖 {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Adaptive Learning */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Adaptive Learning Path Optimizer

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Daily Plan",
              "Weekly Plan",
              "Monthly Plan",
              "Smart Revision",
              "Weak Topic Booster",
              "Advanced Learning",
              "Exam Readiness",
              "Final Revision",
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

        {/* At-Risk Learner Prediction */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              At-Risk Learner Prediction

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "High Risk",
              "Medium Risk",
              "Low Risk",
              "Attendance Risk",
              "Performance Risk",
              "Dropout Risk",
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

        {/* Benchmarking */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Performance Benchmarking & Leaderboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Top Performer","99%"],
              ["Institute Average","91%"],
              ["National Benchmark","89%"],
              ["AI Rank","Top 2%"],
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

                {/* Executive Learning Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Executive Learning Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Learning Efficiency","96.8%"],
              ["Average Completion","91.4%"],
              ["Knowledge Retention","93.6%"],
              ["AI Prediction Accuracy","99.3%"],
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

        {/* Learning Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Learning Trend Report

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","72%"],
                ["March","81%"],
                ["May","88%"],
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

                AI Insight Summary

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Weak Topics","18"],
                ["Recommended Revisions","42"],
                ["Pending Mock Tests","7"],
                ["Skill Improvement","15%"],
                ["Exam Readiness","96%"],
                ["Success Probability","98%"],
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

        {/* Activity History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Learning Activity History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Activity</th>
                  <th className="p-4 text-left">Learners</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">AI Learning Analysis</td>
                  <td className="p-4">28,640</td>
                  <td className="p-4">Completed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Adaptive Learning Update</td>
                  <td className="p-4">12,315</td>
                  <td className="p-4">Completed</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Audit Log */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Learning analytics synchronized",
              "Prediction model refreshed",
              "Engagement metrics updated",
              "Skill-gap analysis completed",
              "Recommendations generated",
              "Benchmark reports published",
            ].map((log)=>(

              <div
                key={log}
                className="border rounded-lg p-4 hover:bg-gray-50"
              >

                {log}

              </div>

            ))}

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Learning Analytics

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

              <p>GET /api/v1/analytics/dashboard</p>
              <p>GET /api/v1/analytics/learners</p>
              <p>POST /api/v1/analytics/predict</p>
              <p>POST /api/v1/analytics/recommendations</p>
              <p>POST /api/v1/analytics/interventions</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/analytics/history</p>
              <p>GET /api/v1/analytics/trends</p>
              <p>POST /api/v1/analytics/export/pdf</p>
              <p>POST /api/v1/analytics/export/excel</p>
              <p>POST /api/v1/analytics/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}