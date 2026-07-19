"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mic,
  Video,
  Upload,
  FileAudio,
  FileVideo,
  Languages,
  Brain,
  Sparkles,
  Search,
  Filter,
  Eye,
  Play,
  Trash2,
  Clock,
  FileText
} from "lucide-react";

interface MediaFile {
  id: string;
  fileName: string;
  type: "Audio" | "Video";
  duration: string;
  language: string;
  status: "Uploaded" | "Processing" | "Completed";
  uploadedAt: string;
}

const mediaFiles: MediaFile[] = [
  {
    id: "AUD001",
    fileName: "History_Lecture_01.mp3",
    type: "Audio",
    duration: "48:35",
    language: "Tamil",
    status: "Completed",
    uploadedAt: "19 Jul 2026"
  },
  {
    id: "VID002",
    fileName: "Polity_Class.mp4",
    type: "Video",
    duration: "01:24:12",
    language: "English",
    status: "Processing",
    uploadedAt: "19 Jul 2026"
  }
];

export default function AudioVideoTranscriberPage() {

  const [search, setSearch] = useState("");

  const filteredFiles = useMemo(() => {
    return mediaFiles.filter(file =>
      file.fileName.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Mic className="text-indigo-600"/>

              AI Audio & Video Transcriber

            </h1>

            <p className="text-gray-500 mt-2">

              Convert lectures into searchable notes, summaries and MCQs.

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

        {/* Dashboard */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <FileAudio className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Audio Files

            </p>

            <h2 className="text-4xl font-bold mt-2">

              384

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <FileVideo className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              Video Files

            </p>

            <h2 className="text-4xl font-bold mt-2">

              196

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              AI Transcriptions

            </p>

            <h2 className="text-4xl font-bold mt-2">

              560

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.7%

            </h2>

          </div>

        </div>

        {/* Upload */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Upload Media

            </h2>

          </div>

          <div className="p-8">

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">

              <Upload
                className="mx-auto text-indigo-600"
                size={60}
              />

              <h3 className="mt-6 text-xl font-semibold">

                Drag & Drop Audio or Video Files

              </h3>

              <p className="text-gray-500 mt-2">

                MP3, WAV, MP4, MKV, AVI, MOV supported

              </p>

              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">

                Choose Files

              </button>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4 flex-wrap">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search uploaded files..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Uploaded Files */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Uploaded Media

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">File</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Duration</th>
                  <th className="text-left p-4">Language</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredFiles.map(file => (

                  <tr
                    key={file.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">

                      {file.fileName}

                    </td>

                    <td className="p-4">

                      {file.type}

                    </td>

                    <td className="p-4">

                      {file.duration}

                    </td>

                    <td className="p-4">

                      {file.language}

                    </td>

                    <td className="p-4">

                      {file.status}

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16}/>

                        </button>

                        <button className="border rounded-lg p-2 text-red-600">

                          <Trash2 size={16}/>

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Speech Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Speech-to-Text Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Speech Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Speech</option>
                <option>Whisper Large</option>
                <option>Hybrid Tamil ASR</option>
                <option>Fast Speech Model</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Auto Detect</option>
                <option>Tamil</option>
                <option>English</option>
                <option>Tamil + English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Output Format

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Transcript + Summary</option>
                <option>Transcript Only</option>
                <option>Summary Only</option>
                <option>MCQ Generation</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Processing Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Processing Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Summary

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Notes

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate MCQs

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Flashcards

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Extract Keywords

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Timestamp Chapters

            </label>

          </div>

        </div>

        {/* TNPSC Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              TNPSC Syllabus Mapping

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>Group 2</option>
                <option>Group 1</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Subject

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>History</option>
                <option>Polity</option>
                <option>Science</option>
                <option>Geography</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Unit

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Unit"
              />

            </div>

            <div>

              <label className="font-semibold">

                Chapter

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Chapter"
              />

            </div>

          </div>

        </div>

        {/* Processing Controls */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <Mic size={18} />

              Start Transcription

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <Brain size={18} />

              Generate Notes

            </button>

            <button className="border px-6 py-3 rounded-lg flex items-center gap-2">

              <Languages size={18} />

              Translate

            </button>

            <button className="border px-6 py-3 rounded-lg flex items-center gap-2">

              <FileText size={18} />

              Export Transcript

            </button>

          </div>

        </div>

        {/* Live Processing */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Transcription Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 rounded-full bg-indigo-600"
                style={{ width: "67%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              Speech recognition completed for 67% of the lecture. AI is generating structured notes, summaries, keywords, and MCQs.

            </p>

          </div>

        </div>

                {/* Transcript Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Transcript Preview

              </h2>

              <p className="text-gray-500 mt-2">

                AI-generated transcript with timestamps.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              48 Minutes Transcribed

            </span>

          </div>

          <div className="divide-y">

            {[
              {
                time: "00:00:15",
                text: "Today we will discuss the Sangam Age and the early Chola Kingdom."
              },
              {
                time: "00:08:42",
                text: "Vijayalaya Chola captured Thanjavur and established the Imperial Chola dynasty."
              },
              {
                time: "00:21:30",
                text: "Important TNPSC questions are generally asked from this chapter."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="p-5 hover:bg-gray-50 flex gap-4"
              >

                <span className="font-mono text-indigo-600 font-semibold min-w-[90px]">

                  {item.time}

                </span>

                <p className="text-gray-700">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* AI Notes & Summary */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Notes

              </h2>

            </div>

            <div className="p-6 space-y-3">

              <ul className="list-disc ml-5 space-y-2">

                <li>Origin of the Imperial Chola Dynasty</li>
                <li>Importance of Thanjavur</li>
                <li>Sangam literature overview</li>
                <li>Important TNPSC facts</li>
                <li>Frequently asked concepts</li>

              </ul>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Summary

              </h2>

            </div>

            <div className="p-6">

              <p className="text-gray-700 leading-7">

                This lecture explains the emergence of the Imperial Chola
                dynasty, important rulers, Sangam literature, and historical
                facts commonly covered in TNPSC examinations. Key concepts,
                chronological events, and revision points have been identified
                automatically by the AI.

              </p>

            </div>

          </div>

        </div>

        {/* Generated MCQs */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Auto Generated MCQs

            </h2>

          </div>

          <div className="divide-y">

            {[1,2].map((q)=>(

              <div
                key={q}
                className="p-6"
              >

                <h3 className="font-semibold">

                  Q{q}. Who founded the Imperial Chola Dynasty?

                </h3>

                <div className="grid md:grid-cols-2 gap-2 mt-4">

                  <p>A. Karikala Chola</p>

                  <p className="text-green-700 font-semibold">

                    ✓ B. Vijayalaya Chola

                  </p>

                  <p>C. Rajendra Chola</p>

                  <p>D. Aditya Chola</p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Keywords & Confidence */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Extracted Keywords

              </h2>

            </div>

            <div className="p-6 flex flex-wrap gap-3">

              {[
                "Sangam Age",
                "Vijayalaya Chola",
                "Thanjavur",
                "Imperial Chola",
                "TNPSC",
                "History",
                "Dynasty",
                "Literature"
              ].map((keyword)=>(

                <span
                  key={keyword}
                  className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                >

                  {keyword}

                </span>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Confidence Report

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Speech Recognition</span>

                <span className="font-bold text-green-600">98%</span>

              </div>

              <div className="flex justify-between">

                <span>Speaker Detection</span>

                <span className="font-bold text-green-600">96%</span>

              </div>

              <div className="flex justify-between">

                <span>Summary Quality</span>

                <span className="font-bold text-blue-600">99%</span>

              </div>

              <div className="flex justify-between">

                <span>MCQ Quality</span>

                <span className="font-bold text-purple-600">97%</span>

              </div>

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

              Publish to Notes

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Question Bank

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

            <button className="border px-6 py-3 rounded-lg">

              Export SRT

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

              <p>POST /api/v1/media/upload</p>
              <p>POST /api/v1/media/transcribe</p>
              <p>POST /api/v1/media/summarize</p>
              <p>POST /api/v1/media/generate-mcq</p>
              <p>POST /api/v1/media/keywords</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/media/publish</p>
              <p>POST /api/v1/media/export/pdf</p>
              <p>POST /api/v1/media/export/docx</p>
              <p>POST /api/v1/media/export/json</p>
              <p>GET /api/v1/media/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}