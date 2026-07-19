"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Mic,
  Camera,
  MessageSquare,
  UserCheck,
  Target,
  Trophy,
  Sparkles,
  Search,
  Filter,
  Settings,
  Play,
  Clock,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

interface InterviewSession {
  id: string;
  candidate: string;
  category: string;
  mode: "Voice" | "Video" | "Text";
  duration: string;
  score: number;
  status: "Completed" | "Scheduled" | "In Progress";
}

const sessions: InterviewSession[] = [
  {
    id: "INT001",
    candidate: "Priya",
    category: "TNPSC Group 4",
    mode: "Voice",
    duration: "25 mins",
    score: 92,
    status: "Completed",
  },
  {
    id: "INT002",
    candidate: "Arun",
    category: "TNPSC Group 2",
    mode: "Video",
    duration: "30 mins",
    score: 88,
    status: "In Progress",
  },
];

export default function AIInterviewCoachPage() {

  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {
    return sessions.filter(
      (session) =>
        session.candidate.toLowerCase().includes(search.toLowerCase()) ||
        session.category.toLowerCase().includes(search.toLowerCase())
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

              AI Interview Coach

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise AI interview simulator for TNPSC aspirants with
              voice analysis, mock interviews, communication scoring,
              and personalized improvement suggestions.

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

        {/* KPI Dashboard */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <MessageSquare className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Interviews Conducted

            </p>

            <h2 className="text-4xl font-bold mt-2">

              8,942

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Mic className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Voice Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.6%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Avg Interview Score

            </p>

            <h2 className="text-4xl font-bold mt-2">

              91%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Confidence

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.1%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Interview Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Interview Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Voice</option>
                <option>Video</option>
                <option>Text</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Duration

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>15 Minutes</option>
                <option>30 Minutes</option>
                <option>45 Minutes</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Interview Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Viva</option>
                <option>HR Round</option>
                <option>Technical</option>

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
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search interview sessions..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Sessions Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Interview Sessions

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Candidate</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Mode</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredSessions.map((session)=>(

                  <tr
                    key={session.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{session.candidate}</td>
                    <td className="p-4">{session.category}</td>
                    <td className="p-4">{session.mode}</td>
                    <td className="p-4">{session.duration}</td>
                    <td className="p-4">{session.score}%</td>
                    <td className="p-4">{session.status}</td>

                    <td className="p-4">

                      <button className="border rounded-lg p-2">

                        <Play size={16}/>

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Live AI Mock Interview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Mic className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Live AI Mock Interview

            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-6">

            <div className="border rounded-xl p-6">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold text-lg">

                    AI Interviewer

                  </h3>

                  <p className="text-gray-500">

                    TNPSC Virtual Interview Panel

                  </p>

                </div>

                <button className="bg-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center">

                  <Play size={22} />

                </button>

              </div>

              <div className="mt-6 bg-gray-100 rounded-xl h-64 flex items-center justify-center">

                <Camera className="w-20 h-20 text-indigo-500" />

              </div>

            </div>

            <div className="border rounded-xl p-6">

              <h3 className="font-semibold mb-4">

                Current Interview Question

              </h3>

              <div className="bg-indigo-50 rounded-lg p-5">

                Explain the Directive Principles of State Policy and their
                importance in the Indian Constitution.

              </div>

              <div className="mt-6">

                <label className="font-medium">

                  Candidate Response

                </label>

                <textarea
                  rows={8}
                  className="w-full border rounded-lg mt-2 p-4"
                  placeholder="Speech transcription appears here..."
                />

              </div>

            </div>

          </div>

        </div>

        {/* Communication Analysis */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Speech & Communication Analysis

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Communication", "95%"],
                ["Grammar", "93%"],
                ["Vocabulary", "91%"],
                ["Confidence", "94%"],
                ["Clarity", "96%"],
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

          {/* Facial Analysis */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Video Confidence Analysis

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                ["Eye Contact", "92%"],
                ["Facial Confidence", "90%"],
                ["Body Language", "88%"],
                ["Smile Index", "94%"],
              ].map(([label, score]) => (

                <div
                  key={label}
                  className="border rounded-lg p-5 text-center"
                >

                  <h3 className="font-semibold">

                    {label}

                  </h3>

                  <p className="text-3xl font-bold mt-3">

                    {score}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Question Generator */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Interview Question Generator

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Explain Fundamental Rights.",
              "What are the powers of the Governor?",
              "Describe Sangam Literature.",
              "Explain India's Federal Structure.",
              "How is the Budget prepared?",
              "What is Sustainable Development?",
            ].map((question) => (

              <div
                key={question}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                {question}

              </div>

            ))}

          </div>

        </div>

        {/* Subject-wise Viva */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Subject-wise Viva Practice

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "History",
              "Polity",
              "Geography",
              "Economics",
              "Science",
              "Current Affairs",
            ].map((subject) => (

              <div
                key={subject}
                className="border rounded-xl p-6 hover:bg-indigo-50"
              >

                <BookOpen className="text-indigo-600 mb-3" />

                <h3 className="font-semibold">

                  {subject}

                </h3>

                <p className="text-gray-500 mt-2">

                  AI-generated interview questions and explanations.

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Timer & Feedback */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Interview Timer

              </h2>

            </div>

            <div className="flex flex-col items-center justify-center p-10">

              <Clock className="w-16 h-16 text-indigo-600 mb-4" />

              <p className="text-5xl font-bold">

                24:35

              </p>

              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">

                Resume Interview

              </button>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Feedback

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">

                ✓ Strong understanding of the topic.

              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">

                Improve answer structure with examples.

              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">

                Maintain consistent eye contact and speaking pace.

              </div>

            </div>

          </div>

        </div>

        {/* Improvement Suggestions */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Target className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Personalized Improvement Plan

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Practice concise introductions.",
              "Increase constitutional article recall.",
              "Improve speaking speed consistency.",
              "Use more real-world examples.",
              "Strengthen Tamil-English bilingual responses.",
              "Revise current affairs before interviews.",
            ].map((item) => (

              <div
                key={item}
                className="border rounded-lg p-4 hover:bg-indigo-50"
              >

                <CheckCircle2 className="inline mr-2 text-green-600" />

                {item}

              </div>

            ))}

          </div>

        </div>

                {/* Interview Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Interview Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Interviews Completed", "2,486"],
              ["Average Score", "91%"],
              ["Selection Readiness", "94%"],
              ["AI Accuracy", "98.8%"],
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

        {/* Performance Trend */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Interview Performance Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Week 1", "68%"],
                ["Week 2", "76%"],
                ["Week 3", "84%"],
                ["Week 4", "92%"],
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

                Interview Leaderboard

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya", "98%"],
                ["Arun", "96%"],
                ["Meena", "95%"],
                ["Vignesh", "94%"],
                ["Karthik", "93%"],
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

        {/* Achievements */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Trophy className="text-yellow-600" />

            <h2 className="text-2xl font-bold">

              Interview Achievements

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "🏆 Interview Master",
              "🎤 Communication Expert",
              "🧠 TNPSC Specialist",
              "⭐ AI Gold Performer",
            ].map((badge) => (

              <div
                key={badge}
                className="border rounded-xl p-6 text-center hover:bg-yellow-50"
              >

                <div className="text-5xl mb-3">

                  {badge.split(" ")[0]}

                </div>

                <p className="font-semibold">

                  {badge.substring(2)}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Interview History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Interview History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Candidate</th>
                  <th className="p-4 text-left">Mode</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredSessions.map((session) => (

                  <tr
                    key={session.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">19 Jul 2026</td>
                    <td className="p-4">{session.candidate}</td>
                    <td className="p-4">{session.mode}</td>
                    <td className="p-4">{session.score}%</td>
                    <td className="p-4">{session.status}</td>

                  </tr>

                ))}

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

              Generate AI Report

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

              <p>GET /api/v1/interview/dashboard</p>
              <p>POST /api/v1/interview/start</p>
              <p>POST /api/v1/interview/evaluate</p>
              <p>GET /api/v1/interview/history</p>
              <p>GET /api/v1/interview/analytics</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/interview/export/pdf</p>
              <p>POST /api/v1/interview/export/excel</p>
              <p>POST /api/v1/interview/export/csv</p>
              <p>GET /api/v1/interview/leaderboard</p>
              <p>GET /api/v1/interview/achievements</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}