"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Newspaper,
  Globe,
  Calendar,
  Search,
  Filter,
  Settings,
  Sparkles,
  Bookmark,
  TrendingUp,
  Target,
  FileText,
  Clock,
  Building2,
} from "lucide-react";

interface CurrentAffair {
  id: string;
  category: string;
  title: string;
  source: string;
  publishedAt: string;
  relevance: number;
  difficulty: "Easy" | "Medium" | "Hard";
  language: "Tamil" | "English";
}

const currentAffairs: CurrentAffair[] = [
  {
    id: "CA001",
    category: "Polity",
    title: "Tamil Nadu Government launches new digital governance initiative",
    source: "Government Release",
    publishedAt: "19 Jul 2026",
    relevance: 98,
    difficulty: "Easy",
    language: "English",
  },
  {
    id: "CA002",
    category: "Economy",
    title: "RBI announces updated financial inclusion measures",
    source: "RBI",
    publishedAt: "19 Jul 2026",
    relevance: 96,
    difficulty: "Medium",
    language: "Tamil",
  },
];

export default function AICurrentAffairsResearchPage() {

  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {

    return currentAffairs.filter((item)=>

      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.language.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Newspaper className="text-indigo-600"/>

              AI Current Affairs Research

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered current affairs research platform for TNPSC,
              providing news analysis, government schemes,
              exam relevance, summaries and smart revision.

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

            <Newspaper className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Daily Articles

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,250

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Globe className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              News Sources

            </p>

            <h2 className="text-4xl font-bold mt-2">

              82

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              TNPSC Relevant

            </p>

            <h2 className="text-4xl font-bold mt-2">

              94%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

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

              Research Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Category

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Polity</option>
                <option>Economy</option>
                <option>Science</option>
                <option>Environment</option>
                <option>International</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil</option>
                <option>English</option>
                <option>Bilingual</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Summary Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Detailed</option>
                <option>Exam Focused</option>
                <option>Quick Revision</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty

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

        {/* AI Research Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Research Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze today's current affairs, identify TNPSC-relevant topics, generate bilingual summaries, previous year connections, possible MCQs and revision notes..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Generate Research

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

        {/* Current Affairs Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Current Affairs Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Headline</th>
                  <th className="p-4 text-left">Source</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Relevance</th>
                  <th className="p-4 text-left">Difficulty</th>

                </tr>

              </thead>

              <tbody>

                {filteredNews.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.category}</td>
                    <td className="p-4">{item.title}</td>
                    <td className="p-4">{item.source}</td>
                    <td className="p-4">{item.language}</td>
                    <td className="p-4">{item.relevance}%</td>
                    <td className="p-4">{item.difficulty}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI News Summary */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <FileText className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI News Summary Generator

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={12}
              className="w-full border rounded-lg p-4"
              defaultValue={`AI automatically summarizes current affairs into TNPSC exam-oriented notes.

• Important facts
• Constitutional provisions
• Government initiatives
• Previous year question relevance
• Expected MCQs
• Interview points
• Quick revision summary

Available in Tamil and English.`}
            />

          </div>

        </div>

        {/* Government Schemes & TNPSC Relevance */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Building2 className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Government Schemes Tracker

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Central Government Schemes",
                "Tamil Nadu Government Schemes",
                "Budget Announcements",
                "Economic Policies",
                "Social Welfare Schemes",
                "Environment Initiatives",
                "Health Missions",
                "Education Programmes",
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

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Target className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                TNPSC Relevance Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Group I","98%"],
                ["Group II","96%"],
                ["Group IIA","94%"],
                ["Group IV","93%"],
                ["VAO","91%"],
              ].map(([exam,value])=>(

                <div key={exam}>

                  <div className="flex justify-between mb-2">

                    <span>{exam}</span>

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

        </div>

        {/* AI MCQ Generator */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI MCQ Generator

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "One-Liner Questions",
              "Statement Questions",
              "Match the Following",
              "Assertion & Reason",
              "Current Affairs Quiz",
              "Previous Year Pattern",
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

        {/* Auto Notes & Digests */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Auto Notes

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Important Points",
                "Facts to Remember",
                "Exam Keywords",
                "Revision Notes",
                "Memory Tricks",
                "Interview Notes",
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

                AI Digest Generator

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Daily Digest",
                "Weekly Digest",
                "Monthly Digest",
                "Budget Digest",
                "Parliament Digest",
                "TNPSC Special Digest",
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

        {/* Bookmark & News Comparison */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Bookmark className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Revision Bookmark

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Important Economy News",
                "International Relations",
                "Science Updates",
                "Environment Issues",
                "Supreme Court Judgments",
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

                National vs International News

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["National","720"],
                ["Tamil Nadu","310"],
                ["International","245"],
                ["Science","182"],
                ["Economy","210"],
              ].map(([category,count])=>(

                <div key={category}>

                  <div className="flex justify-between mb-2">

                    <span>{category}</span>

                    <span>{count}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{
                        width: `${Math.min(Number(count)/8,100)}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

                {/* Current Affairs Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Current Affairs Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Articles Processed","42,560"],
              ["Government Schemes","1,284"],
              ["MCQs Generated","18,420"],
              ["AI Accuracy","98.8%"],
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

        {/* Category Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Category-wise Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Polity","96%"],
                ["Economy","92%"],
                ["Science","90%"],
                ["Environment","87%"],
                ["International","84%"],
                ["Sports","68%"],
              ].map(([name,value])=>(

                <div key={name}>

                  <div className="flex justify-between mb-2">

                    <span>{name}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
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

                Monthly Research Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","820"],
                ["March","1180"],
                ["May","1720"],
                ["July","2380"],
                ["September","2910"],
              ].map(([month,count])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{count}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{
                        width:`${Math.min(Number(count)/30,100)}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* High Priority Topics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              High Priority TNPSC Topics

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Indian Constitution",
              "Union Budget",
              "State Budget",
              "Supreme Court Judgments",
              "Environment Reports",
              "Economic Survey",
              "International Organisations",
              "Science Missions",
              "Tamil Nadu Schemes",
            ].map((topic)=>(

              <div
                key={topic}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                {topic}

              </div>

            ))}

          </div>

        </div>

        {/* Research History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Research History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Headline</th>
                  <th className="p-4 text-left">Source</th>
                  <th className="p-4 text-left">Relevance</th>

                </tr>

              </thead>

              <tbody>

                {filteredNews.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">

                      {item.publishedAt}

                    </td>

                    <td className="p-4">

                      {item.category}

                    </td>

                    <td className="p-4">

                      {item.title}

                    </td>

                    <td className="p-4">

                      {item.source}

                    </td>

                    <td className="p-4">

                      {item.relevance}%

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Research

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export DOCX

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Markdown

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

              <p>POST /api/v1/current-affairs/analyze</p>
              <p>POST /api/v1/current-affairs/summarize</p>
              <p>POST /api/v1/current-affairs/mcq</p>
              <p>POST /api/v1/current-affairs/digest</p>
              <p>POST /api/v1/current-affairs/notes</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/current-affairs/history</p>
              <p>GET /api/v1/current-affairs/analytics</p>
              <p>POST /api/v1/current-affairs/export/pdf</p>
              <p>POST /api/v1/current-affairs/export/docx</p>
              <p>POST /api/v1/current-affairs/export/excel</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}