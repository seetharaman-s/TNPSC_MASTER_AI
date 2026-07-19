"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  ClipboardCheck,
  FileImage,
  ScanLine,
  Upload,
  Search,
  Filter,
  Settings,
  Eye,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  BookOpen,
  FileText,
  PenTool,
  BarChart3,
} from "lucide-react";

interface AnswerSheet {
  id: string;
  student: string;
  exam: string;
  subject: string;
  pages: number;
  score: number;
  status: "Evaluated" | "Pending";
  uploadedAt: string;
}

const answerSheets: AnswerSheet[] = [
  {
    id: "AS001",
    student: "Arun Kumar",
    exam: "TNPSC Group 4 Mock Test",
    subject: "History",
    pages: 8,
    score: 86,
    status: "Evaluated",
    uploadedAt: "19 Jul 2026",
  },
  {
    id: "AS002",
    student: "Priya",
    exam: "TNPSC Group 2 Model Test",
    subject: "Polity",
    pages: 10,
    score: 92,
    status: "Evaluated",
    uploadedAt: "18 Jul 2026",
  },
];

export default function AIAnswerSheetEvaluatorPage() {

  const [search, setSearch] = useState("");

  const filteredSheets = useMemo(() => {
    return answerSheets.filter(
      (sheet) =>
        sheet.student.toLowerCase().includes(search.toLowerCase()) ||
        sheet.subject.toLowerCase().includes(search.toLowerCase()) ||
        sheet.exam.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600" />

              AI Answer Sheet Evaluator

            </h1>

            <p className="text-gray-500 mt-2">

              Upload scanned answer sheets and let AI perform OCR,
              handwriting recognition, rubric-based evaluation,
              scoring, and personalized feedback.

            </p>

          </div>

          <Link
            href="/admin/ai-content-studio"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        {/* KPI Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <ClipboardCheck className="text-blue-600" />

            <p className="mt-4 text-gray-500">
              Answer Sheets Evaluated
            </p>

            <h2 className="text-4xl font-bold mt-2">
              24,382
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <ScanLine className="text-green-600" />

            <p className="mt-4 text-gray-500">
              OCR Accuracy
            </p>

            <h2 className="text-4xl font-bold mt-2">
              99.1%
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600" />

            <p className="mt-4 text-gray-500">
              AI Evaluation Accuracy
            </p>

            <h2 className="text-4xl font-bold mt-2">
              98.4%
            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Clock className="text-orange-600" />

            <p className="mt-4 text-gray-500">
              Avg Processing Time
            </p>

            <h2 className="text-4xl font-bold mt-2">
              24 sec
            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Evaluation Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">
                Exam Type
              </label>

              <select className="w-full border rounded-lg mt-2 p-3">
                <option>TNPSC Group 4</option>
                <option>TNPSC Group 2</option>
                <option>Group 1</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                OCR Engine
              </label>

              <select className="w-full border rounded-lg mt-2 p-3">
                <option>Enterprise OCR</option>
                <option>Tesseract</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Language
              </label>

              <select className="w-full border rounded-lg mt-2 p-3">
                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>
              </select>

            </div>

            <div>

              <label className="font-semibold">
                Rubric
              </label>

              <select className="w-full border rounded-lg mt-2 p-3">
                <option>TNPSC Standard</option>
                <option>Custom</option>
              </select>

            </div>

          </div>

        </div>

        {/* Upload Area */}

        <div className="bg-white rounded-xl shadow mt-8 p-8 border-2 border-dashed border-gray-300">

          <div className="flex flex-col items-center text-center">

            <Upload className="text-indigo-600 mb-4" size={48} />

            <h2 className="text-2xl font-bold">

              Upload Answer Sheets

            </h2>

            <p className="text-gray-500 mt-2">

              Supports PDF, JPG, PNG and scanned handwritten answer sheets.

            </p>

            <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Choose Files

            </button>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search className="absolute left-3 top-3 text-gray-400" size={18} />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search answer sheets..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Evaluation Queue */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Evaluation Queue

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Pages</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredSheets.map((sheet)=>(

                  <tr key={sheet.id} className="border-t hover:bg-gray-50">

                    <td className="p-4">{sheet.student}</td>
                    <td className="p-4">{sheet.exam}</td>
                    <td className="p-4">{sheet.subject}</td>
                    <td className="p-4">{sheet.pages}</td>
                    <td className="p-4">{sheet.score}%</td>
                    <td className="p-4">{sheet.status}</td>

                    <td className="p-4">

                      <button className="border rounded-lg p-2">

                        <Eye size={16} />

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* OCR Text Extraction */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <ScanLine className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              OCR Text Extraction Preview

            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-6 p-6">

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold mb-4">

                Uploaded Answer Sheet

              </h3>

              <div className="h-96 rounded-lg bg-gray-100 flex items-center justify-center">

                <FileImage className="w-20 h-20 text-gray-400" />

              </div>

            </div>

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold mb-4">

                AI Extracted Text

              </h3>

              <div className="h-96 overflow-y-auto rounded-lg border bg-gray-50 p-4 text-sm leading-7">

                The Indian Constitution is the supreme law of India...
                Fundamental Rights ensure equality, liberty and justice...
                Directive Principles guide the Government in policy making...
                Parliament consists of Lok Sabha and Rajya Sabha...

              </div>

            </div>

          </div>

        </div>

        {/* Handwriting Recognition */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Handwriting Recognition

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Recognition Accuracy", "98%"],
                ["Text Confidence", "97%"],
                ["Page Quality", "94%"],
                ["Noise Detection", "Low"],
              ].map(([title, value]) => (

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{
                        width:
                          title === "Noise Detection"
                            ? "20%"
                            : value,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Rubric Evaluation */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Rubric Based Evaluation

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Content Quality", "28 / 30"],
                ["Presentation", "18 / 20"],
                ["Accuracy", "19 / 20"],
                ["Examples", "15 / 20"],
                ["Conclusion", "9 / 10"],
              ].map(([item, marks]) => (

                <div
                  key={item}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{item}</span>

                  <span className="font-semibold">

                    {marks}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Keyword Matching */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Keyword & Concept Matching

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Fundamental Rights",
              "Constitution",
              "Directive Principles",
              "Parliament",
              "Federalism",
              "Judiciary",
              "Amendment",
              "Democracy",
            ].map((keyword) => (

              <div
                key={keyword}
                className="border rounded-lg p-4 text-center hover:bg-indigo-50"
              >

                {keyword}

              </div>

            ))}

          </div>

        </div>

        {/* TNPSC Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              TNPSC Syllabus Mapping

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              ["Indian Polity", "98%"],
              ["History", "94%"],
              ["Current Affairs", "91%"],
              ["Economy", "88%"],
              ["Science", "85%"],
              ["Geography", "90%"],
            ].map(([subject, score]) => (

              <div
                key={subject}
                className="border rounded-xl p-5"
              >

                <div className="flex justify-between mb-3">

                  <span>{subject}</span>

                  <span>{score}</span>

                </div>

                <div className="bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: score }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* AI Feedback */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Feedback

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Include more constitutional articles.",
                "Improve answer introduction.",
                "Use recent government schemes.",
                "Add diagrams where appropriate.",
                "Strengthen conclusion with key points.",
              ].map((feedback) => (

                <div
                  key={feedback}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  {feedback}

                </div>

              ))}

            </div>

          </div>

          {/* Question-wise Marks */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Question-wise Marks

              </h2>

            </div>

            <div className="overflow-x-auto p-6">

              <table className="min-w-full">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="p-3 text-left">Question</th>
                    <th className="p-3 text-left">Marks</th>
                    <th className="p-3 text-left">Status</th>

                  </tr>

                </thead>

                <tbody>

                  {[
                    ["Q1", "9 / 10", "Excellent"],
                    ["Q2", "17 / 20", "Good"],
                    ["Q3", "14 / 20", "Average"],
                    ["Q4", "20 / 20", "Outstanding"],
                    ["Q5", "26 / 30", "Very Good"],
                  ].map(([q, mark, status]) => (

                    <tr
                      key={q}
                      className="border-t"
                    >

                      <td className="p-3">{q}</td>
                      <td className="p-3">{mark}</td>
                      <td className="p-3">{status}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

                {/* Evaluation Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Evaluation Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Average Score", "88%"],
              ["Highest Score", "99%"],
              ["Evaluation Accuracy", "98.4%"],
              ["OCR Confidence", "99.1%"],
            ].map(([title, value]) => (

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

        {/* Student Performance Trend */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Student Performance Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January", "72%"],
                ["February", "76%"],
                ["March", "81%"],
                ["April", "87%"],
                ["May", "91%"],
              ].map(([month, value]) => (

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

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Top Performers

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya", "99%"],
                ["Arun Kumar", "97%"],
                ["Meena", "96%"],
                ["Vignesh", "95%"],
                ["Karthik", "94%"],
              ].map(([name, score], index) => (

                <div
                  key={name}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <div className="flex items-center gap-3">

                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold">

                      {index + 1}

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

        {/* Evaluation History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Evaluation History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Evaluator</th>

                </tr>

              </thead>

              <tbody>

                {answerSheets.map((sheet) => (

                  <tr
                    key={sheet.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{sheet.uploadedAt}</td>
                    <td className="p-4">{sheet.student}</td>
                    <td className="p-4">{sheet.subject}</td>
                    <td className="p-4">{sheet.score}%</td>
                    <td className="p-4">Enterprise AI Engine</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export & Publish */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export & Publish

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish Results

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

        {/* Backend API */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>GET /api/v1/answer-sheet/dashboard</p>
              <p>POST /api/v1/answer-sheet/upload</p>
              <p>POST /api/v1/answer-sheet/evaluate</p>
              <p>GET /api/v1/answer-sheet/history</p>
              <p>GET /api/v1/answer-sheet/{`{id}`}</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/answer-sheet/export/pdf</p>
              <p>POST /api/v1/answer-sheet/export/excel</p>
              <p>POST /api/v1/answer-sheet/export/csv</p>
              <p>GET /api/v1/answer-sheet/statistics</p>
              <p>GET /api/v1/answer-sheet/leaderboard</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}