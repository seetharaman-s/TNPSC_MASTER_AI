"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Newspaper,
  Brain,
  Search,
  Filter,
  Settings,
  Sparkles,
  Globe,
  CalendarDays,
  TrendingUp,
  Activity,
  Target,
  Database,
  Clock3,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

interface CurrentAffair {
  id: string;
  title: string;
  category: string;
  importance: "High" | "Medium" | "Low";
  relevance: number;
  aiScore: number;
}

const affairs: CurrentAffair[] = [
  {
    id: "CA001",
    title: "Union Budget Highlights",
    category: "Economy",
    importance: "High",
    relevance: 99,
    aiScore: 98,
  },
  {
    id: "CA002",
    title: "Tamil Nadu Government Scheme",
    category: "State Affairs",
    importance: "High",
    relevance: 97,
    aiScore: 96,
  },
];

export default function AICurrentAffairsAnalyzerPage() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return affairs.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Newspaper className="text-blue-600"/>

              AI Current Affairs Analyzer

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise AI platform for analyzing daily current affairs,
              government schemes, editorials, PIB releases, TNPSC relevance,
              AI summaries and intelligent question generation.

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

            <Globe className="text-blue-600"/>

            <p className="text-gray-500 mt-3">

              Articles Indexed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              184,250

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-green-600"/>

            <p className="text-gray-500 mt-3">

              TNPSC Relevant

            </p>

            <h2 className="text-4xl font-bold mt-2">

              28,940

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="text-gray-500 mt-3">

              AI Confidence

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.6%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-orange-600"/>

            <p className="text-gray-500 mt-3">

              Questions Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              62,850

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-blue-600"/>

            <h2 className="text-2xl font-bold">

              Current Affairs Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Source

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Sources</option>
                <option>PIB</option>
                <option>The Hindu</option>
                <option>TN Government</option>
                <option>PRS India</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Category

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Economy</option>
                <option>Science</option>
                <option>Environment</option>
                <option>Polity</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Analysis Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>AI Analysis</option>
                <option>Exam Mode</option>
                <option>Revision Mode</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Timeline

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-blue-600"/>

            <h2 className="text-2xl font-bold">

              AI Analysis Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze current affairs, identify TNPSC relevance, generate summaries, connect static syllabus, estimate question probability and create MCQs..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">

                Analyze Articles

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
                placeholder="Search current affairs..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Current Affairs Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Importance</th>
                  <th className="p-4 text-left">Relevance</th>
                  <th className="p-4 text-left">AI Score</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map(item=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.title}</td>
                    <td className="p-4">{item.category}</td>
                    <td className="p-4">{item.importance}</td>
                    <td className="p-4">{item.relevance}%</td>
                    <td className="p-4">{item.aiScore}%</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Live Intelligence Dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Activity className="text-blue-600"/>

              <h2 className="text-xl font-bold">

                Live Current Affairs Intelligence

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                ["Breaking News","42"],
                ["PIB Updates","18"],
                ["Government Schemes","26"],
                ["International Affairs","31"],
                ["Science & Tech","24"],
                ["Environment","19"],
                ["Economy","28"],
                ["Sports","16"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-xl p-5 hover:bg-blue-50"
                >

                  <div className="font-semibold">{title}</div>

                  <div className="text-3xl font-bold mt-3">{value}</div>

                </div>

              ))}

            </div>

          </div>

          {/* AI Summary */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Brain className="text-purple-600"/>

              <h2 className="text-xl font-bold">

                AI Article Summarizer

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "One-Line Summary",
                "100 Word Summary",
                "Exam Point Summary",
                "Tamil Summary",
                "Important Facts",
                "Keywords",
                "Previous Year Link",
                "Revision Notes",
              ].map(item=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-purple-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Static Subject Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Static Subject Mapping Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Indian Polity",
              "Indian Economy",
              "History",
              "Geography",
              "Science",
              "Environment",
              "Tamil Society",
              "Current Affairs",
            ].map(item=>(

              <div
                key={item}
                className="border rounded-xl p-5 text-center hover:bg-green-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* TNPSC Relevance */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                TNPSC Relevance Score

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Economy","98%"],
                ["Polity","99%"],
                ["Science","95%"],
                ["Environment","94%"],
                ["History","96%"],
                ["International","88%"],
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

          {/* AI MCQ */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI MCQ Generator

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Easy",
                "Medium",
                "Hard",
                "Statement Questions",
                "Match the Following",
                "Assertion & Reason",
                "One-Liners",
                "Previous Year Style",
              ].map(item=>(

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

        {/* Topic Heatmap */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-orange-600"/>

            <h2 className="text-2xl font-bold">

              Current Affairs Topic Heatmap

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Budget","Hot"],
              ["AI","Trending"],
              ["Climate","High"],
              ["Space","High"],
              ["Agriculture","Medium"],
              ["Health","High"],
              ["Defence","Trending"],
              ["Schemes","Hot"],
            ].map(([topic,status])=>(

              <div
                key={topic}
                className="border rounded-xl p-5 hover:bg-orange-50"
              >

                <div className="font-semibold">{topic}</div>

                <div className="text-orange-600 mt-2">

                  {status}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* High Priority Alerts */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <AlertTriangle className="text-red-600"/>

            <h2 className="text-2xl font-bold">

              High Priority Exam Alerts

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Union Budget",
              "Economic Survey",
              "Supreme Court Judgement",
              "Tamil Nadu Budget",
              "New Government Scheme",
              "International Summit",
            ].map(item=>(

              <div
                key={item}
                className="border rounded-lg p-4 hover:bg-red-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Revision Planner */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <CalendarDays className="text-green-600"/>

            <h2 className="text-2xl font-bold">

              AI Revision Planner

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Daily Revision",
              "Weekly Revision",
              "Monthly Revision",
              "Important Topics",
              "Expected Questions",
              "Quick Revision Pack",
            ].map(item=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-green-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

                {/* Executive Current Affairs Analytics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-blue-600"/>

            <h2 className="text-2xl font-bold">

              Executive Current Affairs Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Articles Processed","184,250"],
              ["AI Accuracy","99.6%"],
              ["MCQs Generated","62,850"],
              ["Prediction Score","98.8%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-blue-50"
              >

                <div className="text-gray-500">

                  {title}

                </div>

                <div className="text-4xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Monthly Trend Reports */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Monthly Trend Report

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","72%"],
                ["March","84%"],
                ["May","91%"],
                ["July","96%"],
                ["September","99%"],
              ].map(([month,value])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-blue-600 h-3 rounded-full"
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

                Intelligence Insights

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Today's Articles","428"],
                ["PIB Updates","36"],
                ["Schemes","74"],
                ["Expected Questions","1,860"],
                ["Hot Topics","48"],
                ["Revision Packs","210"],
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

        {/* Analysis History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Analysis History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Articles</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Economy</td>
                  <td className="p-4">142</td>
                  <td className="p-4">Completed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Science</td>
                  <td className="p-4">108</td>
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

              AI Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Daily news synchronized",
              "PIB articles processed",
              "MCQs generated",
              "AI summaries created",
              "Topic relevance updated",
              "Revision planner refreshed",
            ].map(item=>(

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

            Export Reports

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">

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

            FastAPI Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">

            <div className="space-y-2">

              <p>GET /api/v1/current-affairs/dashboard</p>
              <p>GET /api/v1/current-affairs/articles</p>
              <p>POST /api/v1/current-affairs/analyze</p>
              <p>POST /api/v1/current-affairs/summarize</p>
              <p>POST /api/v1/current-affairs/generate-mcq</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/current-affairs/history</p>
              <p>GET /api/v1/current-affairs/analytics</p>
              <p>POST /api/v1/current-affairs/export/pdf</p>
              <p>POST /api/v1/current-affairs/export/excel</p>
              <p>POST /api/v1/current-affairs/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}