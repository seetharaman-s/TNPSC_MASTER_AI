"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  BookOpen,
  Target,
  TrendingUp,
  Search,
  Filter,
  Settings,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Calendar,
  Layers3,
} from "lucide-react";

interface SyllabusTopic {
  id: string;
  subject: string;
  unit: string;
  topic: string;
  completion: number;
  priority: "High" | "Medium" | "Low";
  weightage: number;
  status: "Completed" | "In Progress" | "Pending";
}

const syllabusTopics: SyllabusTopic[] = [
  {
    id: "SYL001",
    subject: "History",
    unit: "Unit 8",
    topic: "Indian National Movement",
    completion: 92,
    priority: "High",
    weightage: 14,
    status: "Completed",
  },
  {
    id: "SYL002",
    subject: "Polity",
    unit: "Unit 6",
    topic: "Indian Constitution",
    completion: 68,
    priority: "High",
    weightage: 18,
    status: "In Progress",
  },
];

export default function AISyllabusIntelligencePage() {

  const [search, setSearch] = useState("");

  const filteredTopics = useMemo(() => {

    return syllabusTopics.filter((item)=>

      item.subject.toLowerCase().includes(search.toLowerCase()) ||
      item.topic.toLowerCase().includes(search.toLowerCase()) ||
      item.unit.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <GraduationCap className="text-indigo-600"/>

              AI Syllabus Intelligence

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered syllabus intelligence platform for TNPSC with
              topic mapping, weightage prediction, study priorities,
              readiness tracking and learning analytics.

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

            <BookOpen className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Total Topics

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,248

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <CheckCircle2 className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Completed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              874

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              High Priority

            </p>

            <h2 className="text-4xl font-bold mt-2">

              196

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Readiness

            </p>

            <h2 className="text-4xl font-bold mt-2">

              91.8%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Syllabus Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Subject

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Subjects</option>
                <option>History</option>
                <option>Polity</option>
                <option>Science</option>
                <option>Geography</option>
                <option>Economy</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Priority

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Completion Status

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Completed</option>
                <option>In Progress</option>
                <option>Pending</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Smart Recommendation</option>
                <option>Weightage Prediction</option>
                <option>Weak Topic Analysis</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Intelligence Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze syllabus completion, identify weak areas, predict exam weightage, recommend study priorities and generate personalized preparation roadmap..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Analyze Syllabus

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
                placeholder="Search syllabus topics..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Syllabus Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Syllabus Intelligence Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Unit</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Completion</th>
                  <th className="p-4 text-left">Priority</th>
                  <th className="p-4 text-left">Weightage</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredTopics.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.unit}</td>
                    <td className="p-4">{item.topic}</td>
                    <td className="p-4">{item.completion}%</td>
                    <td className="p-4">{item.priority}</td>
                    <td className="p-4">{item.weightage}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Syllabus Gap Analysis */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <AlertTriangle className="text-orange-600"/>

              <h2 className="text-xl font-bold">

                AI Syllabus Gap Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["History","8% Gap"],
                ["Polity","24% Gap"],
                ["Science","15% Gap"],
                ["Geography","11% Gap"],
                ["Economy","19% Gap"],
                ["Current Affairs","27% Gap"],
              ].map(([subject,gap])=>(

                <div key={subject}>

                  <div className="flex justify-between mb-2">

                    <span>{subject}</span>

                    <span>{gap}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{
                        width: gap.replace("% Gap","%")
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <TrendingUp className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Topic Weightage Prediction

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Indian Constitution","98%"],
                ["Freedom Movement","96%"],
                ["Indian Economy","94%"],
                ["Environment","91%"],
                ["Science","89%"],
                ["Current Affairs","95%"],
              ].map(([topic,value])=>(

                <div
                  key={topic}
                  className="border rounded-xl p-5 hover:bg-green-50"
                >

                  <h3 className="font-semibold text-sm">

                    {topic}

                  </h3>

                  <p className="text-2xl font-bold mt-3">

                    {value}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Learning Resource Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Layers3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Learning Resource Mapping

            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">

            {[
              "Books",
              "Notes",
              "MCQs",
              "PYQs",
              "Current Affairs",
              "Revision Notes",
              "Flashcards",
              "Video Lessons",
              "Mind Maps",
              "Mock Tests",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 text-center hover:bg-indigo-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* AI Study Priority */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Study Priority Engine

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Critical Topics",
                "Frequently Asked Topics",
                "High Weightage Chapters",
                "Revision Required",
                "Weak Subjects",
                "Daily Study Suggestions",
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

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Weak Topic Identification

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Indian Economy",
                "Geography Maps",
                "Environmental Laws",
                "Ancient History",
                "Physics",
                "Tamil Grammar",
              ].map((topic)=>(

                <div
                  key={topic}
                  className="border rounded-lg p-4 hover:bg-red-50"
                >

                  {topic}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Preparation Timeline */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Smart Preparation Timeline

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Month 1",
              "Month 2",
              "Month 3",
              "Month 4",
              "Final Revision",
              "Mock Test Phase",
              "Performance Review",
              "Exam Ready",
            ].map((stage)=>(

              <div
                key={stage}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                {stage}

              </div>

            ))}

          </div>

        </div>

        {/* Learning Dependency Graph */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Learning Dependency Graph

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "History → Freedom Movement",
              "Polity → Constitution",
              "Economy → Budget",
              "Science → Space Missions",
              "Environment → Climate",
              "Current Affairs → Government Schemes",
              "Tamil → Literature",
              "Aptitude → Shortcuts",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-4 hover:bg-gray-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

                {/* Readiness Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Readiness Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Overall Readiness","91.8%"],
              ["Completed Topics","874"],
              ["Remaining Topics","374"],
              ["Predicted Score","182 / 200"],
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

        {/* Subject Performance */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Subject Completion

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["History","95%"],
                ["Polity","88%"],
                ["Science","82%"],
                ["Geography","86%"],
                ["Economy","79%"],
                ["Current Affairs","72%"],
              ].map(([subject,value])=>(

                <div key={subject}>

                  <div className="flex justify-between mb-2">

                    <span>{subject}</span>

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

                AI Performance Prediction

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Group I","87%"],
                ["Group II","91%"],
                ["Group IIA","93%"],
                ["Group IV","97%"],
                ["VAO","95%"],
                ["Interview","89%"],
              ].map(([exam,score])=>(

                <div
                  key={exam}
                  className="border rounded-xl p-5 text-center hover:bg-green-50"
                >

                  <h3 className="font-semibold">

                    {exam}

                  </h3>

                  <p className="text-3xl font-bold mt-3">

                    {score}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Recommendation History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Recommendation History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Recommendation</th>
                  <th className="p-4 text-left">Priority</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Revise Indian Constitution</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Completed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Practice Economy MCQs</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Pending</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Study Plan Audit */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Study Plan Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Preparation timeline updated",
              "Priority recalculated",
              "Weak topic detected",
              "Revision reminder generated",
              "Mock test recommendation",
              "Current affairs synchronized",
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

            Export Intelligence Report

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

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

              <p>GET /api/v1/syllabus/topics</p>
              <p>POST /api/v1/syllabus/analyze</p>
              <p>POST /api/v1/syllabus/gap-analysis</p>
              <p>POST /api/v1/syllabus/recommendations</p>
              <p>POST /api/v1/syllabus/timeline</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/syllabus/analytics</p>
              <p>GET /api/v1/syllabus/history</p>
              <p>POST /api/v1/syllabus/export/pdf</p>
              <p>POST /api/v1/syllabus/export/excel</p>
              <p>POST /api/v1/syllabus/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}