"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  BookOpen,
  FileText,
  Languages,
  Sparkles,
  Search,
  Filter,
  Settings,
  GraduationCap,
  Bookmark,
  Clock,
  TrendingUp,
  PenSquare,
  FilePlus2,
} from "lucide-react";

interface NoteRecord {
  id: string;
  subject: string;
  unit: string;
  topic: string;
  language: string;
  generatedAt: string;
  pages: number;
  status: "Completed" | "Generating" | "Draft";
}

const notes: NoteRecord[] = [
  {
    id: "NOTE001",
    subject: "History",
    unit: "Unit 8",
    topic: "Indian National Movement",
    language: "Tamil",
    generatedAt: "19 Jul 2026",
    pages: 18,
    status: "Completed",
  },
  {
    id: "NOTE002",
    subject: "Polity",
    unit: "Unit 6",
    topic: "Indian Constitution",
    language: "English",
    generatedAt: "19 Jul 2026",
    pages: 24,
    status: "Generating",
  },
];

export default function AINotesGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {

    return notes.filter((item) =>
      item.subject.toLowerCase().includes(search.toLowerCase()) ||
      item.topic.toLowerCase().includes(search.toLowerCase()) ||
      item.language.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <BookOpen className="text-indigo-600"/>

              AI Notes Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Generate bilingual TNPSC study notes, summaries,
              revision materials and chapter-wise explanations
              using AI.

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

              Notes Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              24,680

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Languages className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Languages

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <GraduationCap className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Subjects

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.9%

            </h2>

          </div>

        </div>

        {/* Generator Settings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Note Generation Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Subject

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>History</option>
                <option>Polity</option>
                <option>Geography</option>
                <option>Science</option>
                <option>Economy</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Unit

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Unit 1</option>
                <option>Unit 2</option>
                <option>Unit 3</option>
                <option>Unit 4</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil</option>
                <option>English</option>
                <option>Tamil + English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Note Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Detailed</option>
                <option>Exam Focused</option>
                <option>Quick Revision</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Generate detailed TNPSC notes with important points, previous year questions, memory tricks, examples, bilingual explanation and revision summary..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Generate Notes

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
                placeholder="Search generated notes..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Generated Notes */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Notes

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Unit</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Pages</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredNotes.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.unit}</td>
                    <td className="p-4">{item.topic}</td>
                    <td className="p-4">{item.language}</td>
                    <td className="p-4">{item.pages}</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Chapter Summary */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <FileText className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Chapter Summary

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={12}
              className="w-full border rounded-lg p-4"
              defaultValue={`This AI-generated summary covers the complete TNPSC syllabus topic with important concepts, previous year question trends, constitutional provisions, important dates, examination tips, memory shortcuts and expected MCQs.

The summary is automatically generated from official TNPSC syllabus and learning resources.

Suitable for quick revision before examinations.`}
            />

          </div>

        </div>

        {/* Smart Key Points & Memory Tricks */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Smart Key Points

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Most Important Exam Concepts",
                "Important Articles",
                "Important Years",
                "Definitions",
                "Frequently Asked PYQ Topics",
                "Expected Questions",
              ].map((point)=>(

                <div
                  key={point}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {point}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Memory Tricks

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Mnemonic Generator",
                "Visual Story Method",
                "Mind Palace Technique",
                "Keyword Association",
                "Number Tricks",
                "Tamil Easy Memory Tips",
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

        {/* Revision Notes */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Quick Revision Notes

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "1 Minute Revision",
              "5 Minute Revision",
              "15 Minute Revision",
              "Last Day Revision",
              "Before Exam Summary",
              "Night Revision Notes",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:border-indigo-500"
              >

                <Clock className="text-indigo-600 mb-4"/>

                <h3 className="font-semibold">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* Flashcards */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Bookmark className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Flashcard Generator

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "History",
              "Polity",
              "Science",
              "Economy",
              "Geography",
              "Current Affairs",
              "Tamil",
              "Aptitude",
            ].map((card)=>(

              <div
                key={card}
                className="border rounded-xl p-6 text-center hover:bg-indigo-50"
              >

                <Bookmark className="mx-auto text-indigo-600"/>

                <p className="mt-4 font-semibold">

                  {card}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Voice Notes & Translation */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Voice → Notes

              </h2>

            </div>

            <div className="p-8 text-center">

              <button className="bg-red-600 text-white px-6 py-3 rounded-lg">

                Start Recording

              </button>

              <p className="text-gray-500 mt-4">

                AI converts speech into structured TNPSC notes.

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Tamil ↔ English Translation

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <textarea
                rows={5}
                className="w-full border rounded-lg p-3"
                placeholder="Enter notes..."
              />

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

                Translate Notes

              </button>

            </div>

          </div>

        </div>

        {/* TNPSC References */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Related TNPSC References

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            {[
              "TN School Book",
              "TNPSC Syllabus",
              "Previous Year Questions",
              "Current Affairs",
              "Government Orders",
              "Important Acts",
              "Official Reports",
              "Study Materials",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-5 hover:bg-indigo-50"
              >

                <FilePlus2 className="text-indigo-600 mb-3"/>

                {item}

              </div>

            ))}

          </div>

        </div>

                {/* AI Notes Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Notes Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Notes Generated","24,680"],
              ["Subjects Covered","18"],
              ["Revision Notes","8,450"],
              ["AI Accuracy","98.9%"],
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

        {/* Subject Analytics & Generation Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Subject-wise Notes Generated

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["History","4,200"],
                ["Polity","3,980"],
                ["Science","5,120"],
                ["Economy","2,940"],
                ["Geography","3,650"],
              ].map(([subject,count])=>(

                <div key={subject}>

                  <div className="flex justify-between mb-2">

                    <span>{subject}</span>

                    <span>{count}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{
                        width: `${Math.min(Number(count)/52,100)}%`
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

                Monthly Generation Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","850"],
                ["March","1,420"],
                ["May","2,350"],
                ["July","3,680"],
                ["September","4,120"],
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
                        width: `${Math.min(Number(count)/42,100)}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Generation History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Notes Generation History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Pages</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredNotes.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">

                      {item.generatedAt}

                    </td>

                    <td className="p-4">

                      {item.subject}

                    </td>

                    <td className="p-4">

                      {item.topic}

                    </td>

                    <td className="p-4">

                      {item.language}

                    </td>

                    <td className="p-4">

                      {item.pages}

                    </td>

                    <td className="p-4">

                      {item.status}

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

            Export Notes

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export DOCX

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Markdown

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export HTML

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

              <p>POST /api/v1/notes/generate</p>
              <p>POST /api/v1/notes/summarize</p>
              <p>POST /api/v1/notes/revision</p>
              <p>POST /api/v1/notes/translate</p>
              <p>POST /api/v1/notes/flashcards</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/notes/history</p>
              <p>GET /api/v1/notes/analytics</p>
              <p>POST /api/v1/notes/export/pdf</p>
              <p>POST /api/v1/notes/export/docx</p>
              <p>POST /api/v1/notes/export/markdown</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}