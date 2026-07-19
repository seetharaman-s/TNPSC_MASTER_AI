"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Mic,
  Volume2,
  Languages,
  Play,
  Pause,
  Upload,
  Search,
  Filter,
  Settings,
  Sparkles,
  Clock,
  Target,
  BookOpen,
  MessageCircle,
  Headphones,
  Activity,
  Eye,
  BarChart3,
} from "lucide-react";

interface VoiceLesson {
  id: string;
  topic: string;
  subject: string;
  language: "Tamil" | "English" | "Bilingual";
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Published" | "Draft";
}

const lessons: VoiceLesson[] = [
  {
    id: "VL001",
    topic: "Indian Constitution",
    subject: "Polity",
    language: "Bilingual",
    duration: "12 mins",
    difficulty: "Medium",
    status: "Published",
  },
  {
    id: "VL002",
    topic: "Sangam Literature",
    subject: "Tamil",
    language: "Tamil",
    duration: "10 mins",
    difficulty: "Easy",
    status: "Published",
  },
];

export default function AIVoiceTutorPage() {

  const [search, setSearch] = useState("");

  const filteredLessons = useMemo(() => {
    return lessons.filter(
      (lesson) =>
        lesson.topic.toLowerCase().includes(search.toLowerCase()) ||
        lesson.subject.toLowerCase().includes(search.toLowerCase())
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

              AI Voice Tutor

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered voice tutor for TNPSC preparation with
              speech recognition, bilingual conversations,
              pronunciation feedback, and interactive learning.

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

            <Mic className="text-indigo-600" />

            <p className="mt-4 text-gray-500">

              Voice Lessons

            </p>

            <h2 className="text-4xl font-bold mt-2">

              4,628

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Headphones className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Voice Sessions

            </p>

            <h2 className="text-4xl font-bold mt-2">

              86,421

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.9%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Languages className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              Supported Languages

            </p>

            <h2 className="text-4xl font-bold mt-2">

              Tamil + English

            </h2>

          </div>

        </div>

        {/* Voice Tutor Settings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Voice Tutor Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Voice

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil Female</option>
                <option>Tamil Male</option>
                <option>English Female</option>
                <option>English Male</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Speed

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Normal</option>
                <option>Slow</option>
                <option>Fast</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Conversation Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Interactive</option>
                <option>Lecture</option>
                <option>Quiz</option>

              </select>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search className="absolute left-3 top-3 text-gray-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search voice lessons..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Lessons Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Voice Lesson Library

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredLessons.map((lesson) => (

                  <tr
                    key={lesson.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{lesson.topic}</td>
                    <td className="p-4">{lesson.subject}</td>
                    <td className="p-4">{lesson.language}</td>
                    <td className="p-4">{lesson.duration}</td>
                    <td className="p-4">{lesson.difficulty}</td>
                    <td className="p-4">{lesson.status}</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Play size={16} />

                        </button>

                        <button className="border rounded-lg p-2">

                          <Eye size={16} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Live Speech-to-Text */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Mic className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Live Speech-to-Text

            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-6 p-6">

            <div className="border rounded-xl p-6">

              <div className="flex items-center gap-3 mb-6">

                <button className="bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center">

                  <Mic size={26} />

                </button>

                <div>

                  <h3 className="font-semibold">

                    Voice Recording

                  </h3>

                  <p className="text-gray-500">

                    Click to start speaking

                  </p>

                </div>

              </div>

              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">

                <Activity className="w-16 h-16 text-indigo-500 animate-pulse" />

              </div>

            </div>

            <div className="border rounded-xl p-6">

              <h3 className="font-semibold mb-4">

                AI Live Transcript

              </h3>

              <div className="h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50 leading-7">

                "The Constitution of India is the supreme law of the country.
                Fundamental Rights protect individual freedoms while Directive
                Principles guide governance..."

              </div>

            </div>

          </div>

        </div>

        {/* Text to Speech */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Text-to-Speech

              </h2>

            </div>

            <div className="p-6">

              <textarea
                rows={8}
                className="w-full border rounded-lg p-4"
                placeholder="Enter TNPSC content..."
              />

              <div className="flex gap-3 mt-5">

                <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">

                  <Play size={18} />

                  Generate Voice

                </button>

                <button className="border px-5 py-3 rounded-lg flex items-center gap-2">

                  <Pause size={18} />

                  Stop

                </button>

              </div>

            </div>

          </div>

          {/* Pronunciation */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Pronunciation Assessment

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Pronunciation Accuracy", "96%"],
                ["Fluency", "94%"],
                ["Clarity", "97%"],
                ["Confidence", "92%"],
              ].map(([title, value]) => (

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

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

        </div>

        {/* AI Conversation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <MessageCircle className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Interactive AI Conversation

            </h2>

          </div>

          <div className="p-6 space-y-6">

            <div className="bg-blue-50 rounded-xl p-4">

              <p className="font-semibold">

                Student

              </p>

              <p className="mt-2">

                Explain Fundamental Rights in Tamil.

              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-4">

              <p className="font-semibold">

                AI Voice Tutor

              </p>

              <p className="mt-2">

                இந்திய அரசியலமைப்பில் அடிப்படை உரிமைகள் என்பது ஒவ்வொரு
                குடிமகனுக்கும் வழங்கப்பட்ட முக்கியமான உரிமைகளாகும்...
              </p>

            </div>

          </div>

        </div>

        {/* Subject-wise Learning */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Subject-wise Voice Lessons

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "History",
              "Polity",
              "Geography",
              "Science",
              "Economics",
              "Current Affairs",
            ].map((subject) => (

              <div
                key={subject}
                className="border rounded-xl p-6 hover:bg-indigo-50"
              >

                <BookOpen className="text-indigo-600 mb-4" />

                <h3 className="font-semibold text-lg">

                  {subject}

                </h3>

                <p className="text-gray-500 mt-2">

                  Interactive AI voice lessons with bilingual explanations.

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Voice Quiz */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Voice Quiz Mode

              </h2>

            </div>

            <div className="p-6">

              <p className="font-medium">

                Question

              </p>

              <p className="mt-3">

                Which Article of the Constitution guarantees Equality before
                Law?

              </p>

              <button className="mt-6 bg-indigo-600 text-white px-5 py-3 rounded-lg">

                Answer by Voice

              </button>

            </div>

          </div>

          {/* Speaking Confidence */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Speaking Confidence Analysis

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Confidence", "91%"],
                ["Speaking Speed", "89%"],
                ["Response Accuracy", "95%"],
                ["Listening Score", "97%"],
              ].map(([title, value]) => (

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-purple-600 h-3 rounded-full"
                      style={{ width: value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bilingual Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Tamil ↔ English AI Conversation Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold mb-4">

                Tamil Input

              </h3>

              <textarea
                rows={6}
                className="w-full border rounded-lg p-4"
                placeholder="தமிழில் பேசுங்கள்..."
              />

            </div>

            <div className="border rounded-xl p-5">

              <h3 className="font-semibold mb-4">

                English Translation

              </h3>

              <textarea
                rows={6}
                className="w-full border rounded-lg p-4"
                placeholder="AI translated output..."
              />

            </div>

          </div>

        </div>

                {/* Voice Learning Analytics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Voice Learning Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Total Sessions", "12,486"],
              ["Hours Learned", "4,218"],
              ["Avg Speaking Score", "92%"],
              ["AI Accuracy", "98.9%"],
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

        {/* Learning Progress */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Learning Progress

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Week 1", "70%"],
                ["Week 2", "78%"],
                ["Week 3", "86%"],
                ["Week 4", "93%"],
              ].map(([week, score]) => (

                <div key={week}>

                  <div className="flex justify-between mb-2">

                    <span>{week}</span>

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

          {/* Leaderboard */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Voice Leaderboard

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya", "98%"],
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

        {/* Achievement Badges */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Pronunciation Achievements

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "🎤 Voice Master",
              "🗣 Perfect Pronunciation",
              "🌍 Bilingual Expert",
              "🏆 TNPSC Speaker",
            ].map((badge) => (

              <div
                key={badge}
                className="border rounded-xl p-6 text-center hover:bg-yellow-50"
              >

                <div className="text-4xl mb-3">

                  {badge.split(" ")[0]}

                </div>

                <p className="font-semibold">

                  {badge.substring(2)}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Voice Session History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Voice Session History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Lesson</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Score</th>

                </tr>

              </thead>

              <tbody>

                {lessons.map((lesson) => (

                  <tr
                    key={lesson.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">19 Jul 2026</td>
                    <td className="p-4">{lesson.topic}</td>
                    <td className="p-4">{lesson.language}</td>
                    <td className="p-4">{lesson.duration}</td>
                    <td className="p-4">95%</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export & Reports

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish Lesson

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

        {/* Backend APIs */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>GET /api/v1/voice/dashboard</p>
              <p>POST /api/v1/voice/session/start</p>
              <p>POST /api/v1/voice/transcribe</p>
              <p>POST /api/v1/voice/text-to-speech</p>
              <p>POST /api/v1/voice/pronunciation</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/voice/history</p>
              <p>GET /api/v1/voice/analytics</p>
              <p>POST /api/v1/voice/export/pdf</p>
              <p>POST /api/v1/voice/export/excel</p>
              <p>POST /api/v1/voice/export/csv</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}