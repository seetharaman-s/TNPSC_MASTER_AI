"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  FileText,
  Search,
  Filter,
  Settings,
  Sparkles,
  BarChart3,
  Languages,
  Database,
  Target,
  ShieldCheck,
  Tags,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

interface ContentRecord {
  id: string;
  title: string;
  category: string;
  language: string;
  quality: number;
  status: "Approved" | "Pending" | "Review";
}

const contentRepository: ContentRecord[] = [
  {
    id: "CNT001",
    title: "Indian Constitution Notes",
    category: "Notes",
    language: "Tamil",
    quality: 98,
    status: "Approved",
  },
  {
    id: "CNT002",
    title: "Ancient History MCQ",
    category: "Question Bank",
    language: "English",
    quality: 94,
    status: "Review",
  },
];

export default function AIContentIntelligenceHubPage() {

  const [search, setSearch] = useState("");

  const filteredContent = useMemo(() => {

    return contentRepository.filter((item)=>

      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.language.toLowerCase().includes(search.toLowerCase())

    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600"/>

              AI Content Intelligence Hub

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise AI platform for intelligent content governance,
              syllabus alignment, multilingual quality assurance,
              semantic search, plagiarism detection, and editorial
              workflow management.

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

            <Database className="text-indigo-600"/>

            <p className="text-gray-500 mt-4">

              Total Contents

            </p>

            <h2 className="text-4xl font-bold mt-2">

              56,420

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <ShieldCheck className="text-green-600"/>

            <p className="text-gray-500 mt-4">

              Quality Score

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.7%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Languages className="text-orange-600"/>

            <p className="text-gray-500 mt-4">

              Bilingual Assets

            </p>

            <h2 className="text-4xl font-bold mt-2">

              21,385

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600"/>

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

              Intelligence Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Content Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Books</option>
                <option>Notes</option>
                <option>Question Bank</option>
                <option>Current Affairs</option>
                <option>Videos</option>

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

                Quality Level

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Excellent</option>
                <option>Good</option>
                <option>Needs Review</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Engine

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT Analysis</option>
                <option>Semantic AI</option>
                <option>Editorial AI</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Content Intelligence Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze content quality, syllabus alignment, bilingual consistency, plagiarism, metadata completeness, readability, and generate editorial recommendations..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Analyze Content

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
                placeholder="Search content..."
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

              Content Intelligence Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Quality</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredContent.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.title}</td>
                    <td className="p-4">{item.category}</td>
                    <td className="p-4">{item.language}</td>
                    <td className="p-4">{item.quality}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Content Quality Dashboard */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <ShieldCheck className="text-green-600"/>

              <h2 className="text-xl font-bold">

                AI Content Quality Dashboard

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Grammar Accuracy","99%"],
                ["Readability","97%"],
                ["Fact Consistency","98%"],
                ["Metadata Quality","95%"],
                ["SEO Readiness","94%"],
                ["Editorial Score","98%"],
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

          {/* Auto Classification */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Tags className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Automatic Topic Classification

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "History",
                "Polity",
                "Science",
                "Economy",
                "Geography",
                "Tamil",
                "Current Affairs",
                "Mental Ability",
              ].map((topic)=>(

                <div
                  key={topic}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  #{topic}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bilingual Alignment */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Languages className="text-orange-600"/>

            <h2 className="text-2xl font-bold">

              Tamil ↔ English Alignment Center

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Books",
              "Notes",
              "MCQs",
              "Question Papers",
              "Current Affairs",
              "Videos",
              "Flashcards",
              "Glossary",
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

        {/* Duplicate & Plagiarism */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Duplicate Detection

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Duplicate Notes",
                "Repeated Questions",
                "Repeated Current Affairs",
                "Duplicate Videos",
                "Repeated Flashcards",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-yellow-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Plagiarism Detection

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                ["Original","98%"],
                ["Similarity","2%"],
                ["Citation","96%"],
                ["Confidence","99%"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-lg p-5 hover:bg-red-50"
                >

                  <div>{title}</div>

                  <div className="text-3xl font-bold mt-2">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Syllabus Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BookOpen className="text-green-600"/>

            <h2 className="text-2xl font-bold">

              Content to Syllabus Mapping

            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

            {[
              "Unit I",
              "Unit II",
              "Unit III",
              "Unit IV",
              "Unit V",
              "Unit VI",
              "Unit VII",
              "Complete Coverage",
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

        {/* AI Enhancement */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Content Enhancement

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Improve Grammar",
              "Generate Summary",
              "Expand Explanation",
              "Create Flashcards",
              "Generate MCQs",
              "Translate Tamil ↔ English",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-5 hover:bg-blue-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Semantic Search */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Semantic Content Search

            </h2>

          </div>

          <div className="p-6">

            <input
              className="w-full border rounded-lg p-4"
              placeholder="Search concepts, topics, syllabus, notes..."
            />

            <div className="grid md:grid-cols-3 gap-5 mt-6">

              {[
                "Related Notes",
                "Recommended Books",
                "Previous Year Questions",
                "Videos",
                "Current Affairs",
                "Flashcards",
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

        </div>

        {/* Content Health Heatmap */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Content Health Heatmap

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Books","98%"],
              ["Notes","97%"],
              ["MCQs","95%"],
              ["PYQs","99%"],
              ["Videos","93%"],
              ["Current Affairs","96%"],
              ["Flashcards","94%"],
              ["Podcasts","91%"],
            ].map(([name,value])=>(

              <div
                key={name}
                className="border rounded-xl p-5 hover:bg-green-50"
              >

                <div className="font-semibold">

                  {name}

                </div>

                <div className="text-3xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Editorial Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Editorial Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Published Content","54,812"],
              ["Pending Review","412"],
              ["AI Approved","97.8%"],
              ["Editorial Accuracy","99.2%"],
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

        {/* AI Recommendation Engine */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Brain className="text-purple-600"/>

              <h2 className="text-xl font-bold">

                AI Content Recommendation Engine

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Generate Missing Notes",
                "Create MCQs",
                "Update Current Affairs",
                "Add PYQs",
                "Improve Translation",
                "Improve Metadata",
                "Create Videos",
                "Generate Flashcards",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-purple-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Editorial Workflow */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Editorial Workflow

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Draft",
                "AI Review",
                "Human Review",
                "Fact Verification",
                "Translation Review",
                "Publishing",
              ].map((step)=>(

                <div
                  key={step}
                  className="border rounded-lg p-4 hover:bg-blue-50"
                >

                  ✅ {step}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Approval History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Editorial Approval History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Content</th>
                  <th className="p-4 text-left">Reviewer</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Indian Constitution Notes</td>
                  <td className="p-4">Senior Editor</td>
                  <td className="p-4">Approved</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Ancient History MCQs</td>
                  <td className="p-4">AI + Reviewer</td>
                  <td className="p-4">Published</td>

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
              "Content quality analysis completed",
              "Plagiarism scan executed",
              "Translation verified",
              "Metadata normalized",
              "Editorial approval recorded",
              "Publishing workflow completed",
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

            Export Editorial Reports

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

              <p>GET /api/v1/content/dashboard</p>
              <p>POST /api/v1/content/analyze</p>
              <p>POST /api/v1/content/classify</p>
              <p>POST /api/v1/content/plagiarism</p>
              <p>POST /api/v1/content/summarize</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/content/history</p>
              <p>GET /api/v1/content/analytics</p>
              <p>POST /api/v1/content/export/pdf</p>
              <p>POST /api/v1/content/export/excel</p>
              <p>POST /api/v1/content/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}