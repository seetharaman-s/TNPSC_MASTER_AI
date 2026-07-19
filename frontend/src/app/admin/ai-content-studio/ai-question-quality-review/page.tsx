"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  Settings,
  Sparkles,
  Target,
  BookOpen,
  ClipboardCheck,
  FileQuestion,
  Languages,
  ShieldCheck,
} from "lucide-react";

interface ReviewQuestion {
  id: string;
  subject: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  bloom: string;
  language: "Tamil" | "English";
  qualityScore: number;
  status: "Approved" | "Pending" | "Rejected";
}

const reviewQuestions: ReviewQuestion[] = [
  {
    id: "Q001",
    subject: "History",
    topic: "Freedom Movement",
    difficulty: "Medium",
    bloom: "Understand",
    language: "Tamil",
    qualityScore: 96,
    status: "Approved",
  },
  {
    id: "Q002",
    subject: "Polity",
    topic: "Fundamental Rights",
    difficulty: "Hard",
    bloom: "Analyze",
    language: "English",
    qualityScore: 91,
    status: "Pending",
  },
];

export default function AIQuestionQualityReviewPage() {

  const [search, setSearch] = useState("");

  const filteredQuestions = useMemo(() => {

    return reviewQuestions.filter((item)=>

      item.subject.toLowerCase().includes(search.toLowerCase()) ||
      item.topic.toLowerCase().includes(search.toLowerCase()) ||
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

              <ClipboardCheck className="text-indigo-600"/>

              AI Question Quality Review

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered validation, moderation, grammar checking,
              Bloom's taxonomy analysis, answer verification and
              TNPSC quality assurance.

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

            <FileQuestion className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Questions Reviewed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              54,820

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <CheckCircle2 className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Approved

            </p>

            <h2 className="text-4xl font-bold mt-2">

              48,210

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <AlertTriangle className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Pending Review

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2,310

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.1%

            </h2>

          </div>

        </div>

        {/* Review Settings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Review Configuration

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
                <option>Economy</option>

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

                Review Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Automatic</option>
                <option>Manual</option>
                <option>Hybrid AI + Human</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Review Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Review Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Validate grammar, verify answer correctness, classify Bloom's taxonomy, detect duplicates, estimate TNPSC relevance and assign quality score..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Start AI Review

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
                placeholder="Search reviewed questions..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Review Queue */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Question Review Queue

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Bloom</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Quality</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredQuestions.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.topic}</td>
                    <td className="p-4">{item.difficulty}</td>
                    <td className="p-4">{item.bloom}</td>
                    <td className="p-4">{item.language}</td>
                    <td className="p-4">{item.qualityScore}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Bloom's Taxonomy & Difficulty Analysis */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BookOpen className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Bloom's Taxonomy Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Remember","8,520"],
                ["Understand","11,430"],
                ["Apply","9,280"],
                ["Analyze","7,150"],
                ["Evaluate","4,830"],
                ["Create","2,140"],
              ].map(([level,count])=>(

                <div key={level}>

                  <div className="flex justify-between mb-2">

                    <span>{level}</span>

                    <span>{count}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{
                        width:`${Math.min(Number(count)/120,100)}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Target className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Difficulty Calibration

              </h2>

            </div>

            <div className="grid grid-cols-3 gap-5 p-6">

              {[
                ["Easy","16,850"],
                ["Medium","27,240"],
                ["Hard","10,730"],
              ].map(([name,value])=>(

                <div
                  key={name}
                  className="border rounded-xl p-6 text-center hover:bg-green-50"
                >

                  <h3 className="font-semibold">

                    {name}

                  </h3>

                  <p className="text-3xl font-bold mt-4">

                    {value}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Duplicate Detection */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Duplicate & Similarity Detection

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Exact Duplicate","164"],
              ["High Similarity","581"],
              ["Medium Similarity","1,924"],
              ["Unique Questions","52,151"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-red-50"
              >

                <ShieldCheck className="mx-auto text-red-600"/>

                <p className="mt-3 text-gray-500">

                  {title}

                </p>

                <h3 className="text-3xl font-bold mt-3">

                  {value}

                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* Grammar & Language */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Tamil & English Grammar Review

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Grammar Validation",
                "Spelling Check",
                "Sentence Structure",
                "Punctuation Review",
                "Technical Terms",
                "Translation Consistency",
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

            <div className="p-6 border-b flex items-center gap-2">

              <Languages className="text-purple-600"/>

              <h2 className="text-xl font-bold">

                AI Answer Verification

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Correct Option Validation",
                "Explanation Verification",
                "Fact Checking",
                "Reference Verification",
                "Government Source Matching",
                "Confidence Score",
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

        {/* Human Review Workflow */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Human Reviewer Workflow

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Assign Reviewer",
              "Approve",
              "Reject",
              "Request Revision",
              "Escalate",
              "Publish",
              "Archive",
              "Audit",
            ].map((action)=>(

              <button
                key={action}
                className="border rounded-xl p-5 hover:bg-indigo-50 text-left"
              >

                {action}

              </button>

            ))}

          </div>

        </div>

        {/* Version Comparison */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Version Comparison & Audit Preview

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Version</th>
                  <th className="p-4 text-left">Reviewer</th>
                  <th className="p-4 text-left">Modified On</th>
                  <th className="p-4 text-left">Quality Score</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["v1.0","AI Engine","19 Jul 2026","89%","Pending"],
                  ["v1.1","Reviewer A","19 Jul 2026","95%","Approved"],
                ].map((row,index)=>(

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>
                    <td className="p-4">{row[4]}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Quality Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Question Quality Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Average Quality","96.8%"],
              ["Grammar Accuracy","99.2%"],
              ["Answer Accuracy","98.7%"],
              ["Duplicate Rate","0.42%"],
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

        {/* Reviewer Performance */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Reviewer Productivity

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Reviewer A","12,480"],
                ["Reviewer B","11,930"],
                ["Reviewer C","10,720"],
                ["AI Auto Review","19,690"],
              ].map(([name,value])=>(

                <div key={name}>

                  <div className="flex justify-between mb-2">

                    <span>{name}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{
                        width:`${Math.min(Number(value)/200,100)}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Quality Trends

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","93%"],
                ["March","95%"],
                ["May","96%"],
                ["July","98%"],
                ["September","99%"],
              ].map(([month,score])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{score}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: score }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Audit Logs */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Audit Logs

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Timestamp</th>
                  <th className="p-4 text-left">Reviewer</th>
                  <th className="p-4 text-left">Action</th>
                  <th className="p-4 text-left">Question ID</th>
                  <th className="p-4 text-left">Result</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026 13:45</td>
                  <td className="p-4">AI Engine</td>
                  <td className="p-4">Grammar Validation</td>
                  <td className="p-4">Q001</td>
                  <td className="p-4">Passed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026 13:52</td>
                  <td className="p-4">Reviewer A</td>
                  <td className="p-4">Approved</td>
                  <td className="p-4">Q002</td>
                  <td className="p-4">Published</td>

                </tr>

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

              <p>POST /api/v1/question-review/analyze</p>
              <p>POST /api/v1/question-review/grammar</p>
              <p>POST /api/v1/question-review/duplicate-check</p>
              <p>POST /api/v1/question-review/verify-answer</p>
              <p>POST /api/v1/question-review/approve</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/question-review/history</p>
              <p>GET /api/v1/question-review/analytics</p>
              <p>POST /api/v1/question-review/export/pdf</p>
              <p>POST /api/v1/question-review/export/excel</p>
              <p>POST /api/v1/question-review/export/csv</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}