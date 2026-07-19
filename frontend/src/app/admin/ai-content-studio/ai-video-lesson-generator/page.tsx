"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Video,
  PlayCircle,
  Languages,
  FileVideo,
  BookOpen,
  Settings,
  Search,
  Filter,
  Sparkles,
  Clock,
  Mic,
  MonitorPlay,
  Eye,
  Target,
  BarChart3,
} from "lucide-react";

interface VideoLesson {
  id: string;
  title: string;
  subject: string;
  duration: string;
  language: string;
  status: "Draft" | "Rendering" | "Published";
  quality: "720P" | "1080P" | "4K";
}

const lessons: VideoLesson[] = [
  {
    id: "VID001",
    title: "Indian Constitution Introduction",
    subject: "Polity",
    duration: "18 min",
    language: "Tamil + English",
    status: "Published",
    quality: "1080P",
  },
  {
    id: "VID002",
    title: "Chola Dynasty",
    subject: "History",
    duration: "24 min",
    language: "Tamil + English",
    status: "Rendering",
    quality: "1080P",
  },
];

export default function AIVideoLessonGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredLessons = useMemo(() => {

    return lessons.filter((lesson) =>
      lesson.title.toLowerCase().includes(search.toLowerCase())
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

              AI Video Lesson Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Automatically generate TNPSC bilingual video lessons using AI
              narration, slides, animations, subtitles, quizzes, and chapter
              summaries.

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

            <Video className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Video Lessons

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2,146

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <MonitorPlay className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Published

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,832

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              AI Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,975

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.3%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Video Lesson Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Source

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Books</option>
                <option>Notes</option>
                <option>Question Bank</option>
                <option>Current Affairs</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Narration

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Video Quality

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>1080P</option>
                <option>720P</option>
                <option>4K</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Voice

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Professional Narrator</option>
                <option>Teacher Voice</option>
                <option>Student Friendly</option>

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
                placeholder="Search video lessons..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Lesson Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Video Lessons

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Quality</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredLessons.map((lesson) => (

                  <tr
                    key={lesson.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{lesson.title}</td>
                    <td className="p-4">{lesson.subject}</td>
                    <td className="p-4">{lesson.duration}</td>
                    <td className="p-4">{lesson.language}</td>
                    <td className="p-4">{lesson.quality}</td>
                    <td className="p-4">{lesson.status}</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16} />

                        </button>

                        <button className="border rounded-lg p-2">

                          <PlayCircle size={16} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Video Generation Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Video Generation Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Education</option>
                <option>TNPSC Tutor AI</option>
                <option>Visual Learning AI</option>
                <option>Advanced Narrator AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Presentation Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Classroom</option>
                <option>Animated</option>
                <option>Whiteboard</option>
                <option>Infographic</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Subtitle Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Voice Speed

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Normal</option>
                <option>Slow</option>
                <option>Fast</option>

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

              AI Narration

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Automatic Slides

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Tamil & English Subtitles

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Animated Transitions

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Chapter Markers

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              End Quiz

            </label>

          </div>

        </div>

        {/* AI Components */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Mic className="text-blue-600" />

              <h2 className="text-xl font-bold">

                Narration Features

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Voice Quality</span>

                <span className="font-semibold">Natural AI</span>

              </div>

              <div className="flex justify-between">

                <span>Emotion</span>

                <span className="font-semibold">Teacher Friendly</span>

              </div>

              <div className="flex justify-between">

                <span>Pronunciation</span>

                <span className="font-semibold">Tamil Optimized</span>

              </div>

              <div className="flex justify-between">

                <span>Speech Clarity</span>

                <span className="font-semibold text-green-600">

                  Excellent

                </span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BookOpen className="text-green-600" />

              <h2 className="text-xl font-bold">

                Lesson Structure

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Introduction</span>

                <span>✓</span>

              </div>

              <div className="flex justify-between">

                <span>Main Concepts</span>

                <span>✓</span>

              </div>

              <div className="flex justify-between">

                <span>Examples</span>

                <span>✓</span>

              </div>

              <div className="flex justify-between">

                <span>Summary</span>

                <span>✓</span>

              </div>

              <div className="flex justify-between">

                <span>Quiz</span>

                <span>✓</span>

              </div>

            </div>

          </div>

        </div>

        {/* Video Timeline */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Video Timeline

            </h2>

          </div>

          <div className="p-6">

            <div className="space-y-5">

              {[
                ["00:00","Introduction"],
                ["02:30","Concept Explanation"],
                ["08:15","Examples"],
                ["14:40","Important Notes"],
                ["18:10","Quick Revision"],
                ["20:30","Quiz & Summary"]
              ].map(([time,title]) => (

                <div
                  key={time}
                  className="flex justify-between border rounded-lg p-4 hover:bg-gray-50"
                >

                  <span className="font-semibold">

                    {time}

                  </span>

                  <span>

                    {title}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Live Rendering */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Live Video Rendering

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "82%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              Rendering is 82% complete. AI narration, subtitles,
              transitions, animations, and chapter indexing are being
              finalized.

            </p>

          </div>

        </div>

                {/* Video Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Video Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Preview the generated lesson before publishing.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              Ready for Publishing

            </span>

          </div>

          <div className="p-6">

            <div className="aspect-video bg-gray-900 rounded-xl flex flex-col items-center justify-center text-white">

              <PlayCircle size={72} />

              <h3 className="text-xl font-semibold mt-4">

                AI Generated Video Lesson

              </h3>

              <p className="text-gray-300 mt-2">

                Click Play to Preview

              </p>

            </div>

          </div>

        </div>

        {/* Transcript & Subtitles */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Transcript

              </h2>

            </div>

            <div className="p-6 max-h-96 overflow-y-auto space-y-4">

              <p>
                Welcome to today's TNPSC lesson on the Imperial Chola Dynasty...
              </p>

              <p>
                In this chapter, we will understand the origin, important kings,
                administration, architecture, and previous year questions.
              </p>

              <p>
                Finally, we will summarize the important facts for revision.
              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Languages className="text-green-600" />

              <h2 className="text-xl font-bold">

                Bilingual Subtitles

              </h2>

            </div>

            <div className="p-6 max-h-96 overflow-y-auto space-y-5">

              <div className="border rounded-lg p-4">

                <p className="font-semibold">

                  English

                </p>

                <p className="mt-2">

                  Vijayalaya Chola established the Imperial Chola Dynasty.

                </p>

              </div>

              <div className="border rounded-lg p-4">

                <p className="font-semibold">

                  தமிழ்

                </p>

                <p className="mt-2">

                  விஜயாலய சோழன் பேரரசு சோழ வம்சத்தை நிறுவினார்.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Quiz */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              End of Lesson Quiz

            </h2>

          </div>

          <div className="p-6">

            <h3 className="font-semibold text-lg">

              Who founded the Imperial Chola Dynasty?

            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              {[
                "Karikala Chola",
                "Vijayalaya Chola",
                "Rajendra Chola",
                "Kulothunga Chola"
              ].map((option) => (

                <button
                  key={option}
                  className="border rounded-lg p-4 text-left hover:bg-indigo-50"
                >

                  {option}

                </button>

              ))}

            </div>

          </div>

        </div>

        {/* Video Analytics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Video Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                99%

              </h3>

              <p className="mt-2">

                AI Quality

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                98%

              </h3>

              <p className="mt-2">

                Subtitle Accuracy

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                97%

              </h3>

              <p className="mt-2">

                Audio Quality

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-orange-600">

                99%

              </h3>

              <p className="mt-2">

                TNPSC Alignment

              </p>

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

              Publish to Student Portal

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Mobile App

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export MP4

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PPTX

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF Transcript

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export SRT Subtitles

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

              <p>POST /api/v1/videos/generate</p>
              <p>POST /api/v1/videos/render</p>
              <p>POST /api/v1/videos/generate-slides</p>
              <p>POST /api/v1/videos/generate-subtitles</p>
              <p>GET /api/v1/videos/preview</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/videos/publish</p>
              <p>POST /api/v1/videos/export/mp4</p>
              <p>POST /api/v1/videos/export/pptx</p>
              <p>POST /api/v1/videos/export/pdf</p>
              <p>POST /api/v1/videos/export/srt</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}