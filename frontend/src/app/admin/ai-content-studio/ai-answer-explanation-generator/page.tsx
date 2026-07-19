"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
 Brain,
  BookOpen,
  FileText,
  Search,
  Filter,
  Eye,
  Play,
  Settings,
  Languages,
  CheckCircle2,
  Sparkles,
  Target,
  BarChart3,
  Lightbulb,
  ClipboardList
} from "lucide-react";

interface Explanation {
  id: string;
  question: string;
  subject: string;
  language: string;
  status: "Generated" | "Draft" | "Published";
  difficulty: "Easy" | "Medium" | "Hard";
}

const explanations: Explanation[] = [
  {
    id: "EXP001",
    question: "Who founded the Imperial Chola Dynasty?",
    subject: "History",
    language: "Tamil + English",
    status: "Published",
    difficulty: "Medium"
  },
  {
    id: "EXP002",
    question: "Fundamental Rights are borrowed from?",
    subject: "Polity",
    language: "Tamil + English",
    status: "Generated",
    difficulty: "Easy"
  }
];

export default function AIAnswerExplanationGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {

    return explanations.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
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

              AI Answer Explanation Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Automatically generate detailed bilingual explanations,
              option analysis, syllabus mapping, and learning insights
              for TNPSC questions.

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

        {/* Dashboard */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <ClipboardList className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Questions Processed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              58,432

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Languages className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Bilingual Explanations

            </p>

            <h2 className="text-4xl font-bold mt-2">

              41,908

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.2%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              Published

            </p>

            <h2 className="text-4xl font-bold mt-2">

              36,514

            </h2>

          </div>

        </div>

        {/* Generator Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Explanation Generator Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

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

                Explanation Level

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Detailed</option>
                <option>Standard</option>
                <option>Short Notes</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Education</option>
                <option>TNPSC Expert AI</option>
                <option>Reasoning AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Target Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Group 4</option>
                <option>Group 2</option>
                <option>Group 1</option>
                <option>VAO</option>

              </select>

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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Generated Explanations */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Explanations

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Question</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredData.map((item) => (

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.question}</td>
                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.language}</td>
                    <td className="p-4">{item.difficulty}</td>
                    <td className="p-4">{item.status}</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16} />

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Explanation Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Explanation Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Education</option>
                <option>TNPSC Explanation AI</option>
                <option>Reasoning Engine</option>
                <option>Bilingual Learning AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Explanation Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Detailed</option>
                <option>Exam Oriented</option>
                <option>Concept Based</option>
                <option>Quick Revision</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Output Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

          </div>

        </div>

        {/* Generation Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Generation Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Correct Answer Explanation

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Explain Wrong Options

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Tamil Translation

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Memory Tricks

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              TNPSC Syllabus Mapping

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Related Questions

            </label>

          </div>

        </div>

        {/* Explanation Components */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Explanation Components

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div className="border rounded-xl p-5">

              <CheckCircle2 className="text-green-600 mb-3" />

              <h3 className="font-semibold">

                Correct Answer

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Step-by-step reasoning for the correct option.

              </p>

            </div>

            <div className="border rounded-xl p-5">

              <Target className="text-red-600 mb-3" />

              <h3 className="font-semibold">

                Wrong Option Analysis

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Explain why other options are incorrect.

              </p>

            </div>

            <div className="border rounded-xl p-5">

              <Languages className="text-blue-600 mb-3" />

              <h3 className="font-semibold">

                Tamil Translation

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                AI bilingual explanation generation.

              </p>

            </div>

            <div className="border rounded-xl p-5">

              <Lightbulb className="text-yellow-500 mb-3" />

              <h3 className="font-semibold">

                Memory Tips

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Mnemonics and quick revision notes.

              </p>

            </div>

          </div>

        </div>

        {/* TNPSC Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              TNPSC Syllabus Mapping

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Unit</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Weightage</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["History","Unit 5","Chola Empire","High"],
                  ["Polity","Unit 8","Fundamental Rights","High"],
                  ["Science","Unit 9","Space Technology","Medium"],
                  ["Economy","Unit 10","Budget","High"]
                ].map((row,index)=>(

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Live Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Live AI Generation Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 bg-indigo-600 rounded-full"
                style={{ width: "88%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has completed 88% of the explanation generation. Bilingual explanations, option analysis, syllabus mapping, and memory tips are currently being finalized.

            </p>

          </div>

        </div>

                {/* Explanation Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Explanation Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Complete bilingual explanation ready for publishing.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              AI Verified

            </span>

          </div>

          <div className="p-6 space-y-8">

            <div>

              <h3 className="font-semibold text-lg">

                Question

              </h3>

              <p className="mt-2">

                Who founded the Imperial Chola Dynasty?

              </p>

            </div>

            <div>

              <h3 className="font-semibold text-green-700">

                Correct Answer

              </h3>

              <p className="mt-2">

                Vijayalaya Chola

              </p>

            </div>

            <div>

              <h3 className="font-semibold">

                English Explanation

              </h3>

              <p className="mt-3 leading-7 text-gray-700">

                Vijayalaya Chola captured Thanjavur during the ninth
                century and established the Imperial Chola Dynasty,
                which later expanded significantly under Rajaraja I
                and Rajendra I.

              </p>

            </div>

            <div>

              <h3 className="font-semibold">

                தமிழ் விளக்கம்

              </h3>

              <p className="mt-3 leading-8 text-gray-700">

                விஜயாலய சோழன் தஞ்சாவூரைக் கைப்பற்றி
                பேரரசு சோழ வம்சத்தை நிறுவினார்.
                பின்னர் ராஜராஜ சோழன் மற்றும்
                ராஜேந்திர சோழன் காலத்தில்
                சோழ பேரரசு மிகுந்த வளர்ச்சி பெற்றது.

              </p>

            </div>

          </div>

        </div>

        {/* Wrong Option Analysis */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Wrong Option Analysis

            </h2>

          </div>

          <div className="divide-y">

            {[
              {
                option: "A. Karikala Chola",
                reason: "A famous early Chola king, but not the founder of the Imperial Chola Dynasty."
              },
              {
                option: "C. Rajendra Chola",
                reason: "Expanded the empire after it was established."
              },
              {
                option: "D. Kulothunga Chola",
                reason: "Belonged to a later period of Chola rule."
              }
            ].map((item, index) => (

              <div key={index} className="p-6">

                <h3 className="font-semibold text-red-600">

                  {item.option}

                </h3>

                <p className="mt-2 text-gray-700">

                  {item.reason}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Memory Tricks & Related Questions */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Lightbulb className="text-yellow-500" />

              <h2 className="text-xl font-bold">

                Memory Trick

              </h2>

            </div>

            <div className="p-6">

              <p className="leading-7">

                <strong>Mnemonic:</strong> <br />

                <span className="text-indigo-700">

                  "Vijayalaya → Victory → Beginning of the Imperial Cholas"

                </span>

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Related TNPSC Questions

              </h2>

            </div>

            <div className="p-6 space-y-3">

              <div className="border rounded-lg p-3">

                Rajaraja Chola achievements

              </div>

              <div className="border rounded-lg p-3">

                Brihadeeswarar Temple

              </div>

              <div className="border rounded-lg p-3">

                Chola Administration

              </div>

              <div className="border rounded-lg p-3">

                Rajendra Chola's overseas expeditions

              </div>

            </div>

          </div>

        </div>

        {/* AI Quality Report */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Quality Report

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                99%

              </h3>

              <p className="mt-2">Explanation Accuracy</p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                98%

              </h3>

              <p className="mt-2">Translation Quality</p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                97%</h3>

              <p className="mt-2">Concept Coverage</p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-orange-600">

                99%</h3>

              <p className="mt-2">TNPSC Alignment</p>

            </div>

          </div>

        </div>

        {/* Publish & Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish to Question Bank

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Mock Tests

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export DOCX

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

          </div>

        </div>

        {/* Backend API Endpoints */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>POST /api/v1/explanations/generate</p>
              <p>POST /api/v1/explanations/translate</p>
              <p>POST /api/v1/explanations/analyze-options</p>
              <p>POST /api/v1/explanations/memory-tips</p>
              <p>GET /api/v1/explanations/preview</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/explanations/publish</p>
              <p>POST /api/v1/explanations/export/pdf</p>
              <p>POST /api/v1/explanations/export/docx</p>
              <p>POST /api/v1/explanations/export/json</p>
              <p>GET /api/v1/explanations/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}