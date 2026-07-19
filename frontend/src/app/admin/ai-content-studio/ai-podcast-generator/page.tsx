"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Podcast,
  Mic,
  Headphones,
  Languages,
  Settings,
  Search,
  Filter,
  Play,
  Eye,
  Sparkles,
  Clock,
  Target,
  BarChart3,
  Radio,
  BookAudio,
} from "lucide-react";

interface PodcastEpisode {
  id: string;
  title: string;
  subject: string;
  duration: string;
  language: string;
  narrator: string;
  status: "Draft" | "Generating" | "Published";
}

const episodes: PodcastEpisode[] = [
  {
    id: "POD001",
    title: "Indian Constitution Basics",
    subject: "Polity",
    duration: "18 min",
    language: "Tamil + English",
    narrator: "AI Teacher",
    status: "Published",
  },
  {
    id: "POD002",
    title: "Chola Dynasty",
    subject: "History",
    duration: "22 min",
    language: "Tamil + English",
    narrator: "Professional Voice",
    status: "Generating",
  },
];

export default function AIPodcastGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredEpisodes = useMemo(() => {

    return episodes.filter((episode) =>
      episode.title.toLowerCase().includes(search.toLowerCase())
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

              AI Podcast Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Generate AI-powered TNPSC audio lessons, revision podcasts,
              bilingual narration, and downloadable study episodes.

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

            <Podcast className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Podcast Episodes

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,542

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Headphones className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Published

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,298

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              AI Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,421

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.4%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Podcast Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Content Source

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Books</option>
                <option>Notes</option>
                <option>Current Affairs</option>
                <option>Question Bank</option>

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

                AI Narrator

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Professional Teacher</option>
                <option>Friendly Tutor</option>
                <option>Exam Coach</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Audio Quality

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>High (320 kbps)</option>
                <option>Medium (192 kbps)</option>
                <option>Standard (128 kbps)</option>

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
                placeholder="Search podcast episodes..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Episode Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Podcast Episodes

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
                  <th className="p-4 text-left">Narrator</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredEpisodes.map((episode) => (

                  <tr
                    key={episode.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{episode.title}</td>
                    <td className="p-4">{episode.subject}</td>
                    <td className="p-4">{episode.duration}</td>
                    <td className="p-4">{episode.language}</td>
                    <td className="p-4">{episode.narrator}</td>
                    <td className="p-4">{episode.status}</td>

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

                {/* AI Podcast Generation Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Podcast Generation Engine

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
                <option>Conversational AI</option>
                <option>Revision Podcast AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Podcast Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Lecture</option>
                <option>Conversation</option>
                <option>Interview</option>
                <option>Revision Capsule</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Voice Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Male</option>
                <option>Female</option>
                <option>Teacher</option>
                <option>Student Friendly</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Narration Speed

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Normal</option>
                <option>Slow</option>
                <option>Fast</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Generation Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Tamil & English Narration
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              AI Transcript
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Chapter Markers
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Revision Summary
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Background Music
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked />
              Previous Year Question Highlights
            </label>

          </div>

        </div>

        {/* Voice Settings */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Mic className="text-blue-600" />

              <h2 className="text-xl font-bold">

                Voice Configuration

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Voice Engine</span>

                <span className="font-semibold">

                  Neural TTS

                </span>

              </div>

              <div className="flex justify-between">

                <span>Pronunciation</span>

                <span className="font-semibold">

                  Tamil Optimized

                </span>

              </div>

              <div className="flex justify-between">

                <span>Emotion</span>

                <span className="font-semibold">

                  Friendly Teacher

                </span>

              </div>

              <div className="flex justify-between">

                <span>Clarity</span>

                <span className="font-semibold text-green-600">

                  Excellent

                </span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Radio className="text-green-600" />

              <h2 className="text-xl font-bold">

                Episode Structure

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">
                <span>Introduction</span>
                <span>✓</span>
              </div>

              <div className="flex justify-between">
                <span>Main Topic</span>
                <span>✓</span>
              </div>

              <div className="flex justify-between">
                <span>Examples</span>
                <span>✓</span>
              </div>

              <div className="flex justify-between">
                <span>Revision Notes</span>
                <span>✓</span>
              </div>

              <div className="flex justify-between">
                <span>Quick Quiz</span>
                <span>✓</span>
              </div>

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Episode Timeline

            </h2>

          </div>

          <div className="p-6 space-y-4">

            {[
              ["00:00", "Introduction"],
              ["02:00", "Topic Overview"],
              ["08:00", "Detailed Explanation"],
              ["15:00", "Important Facts"],
              ["18:00", "Revision Summary"],
              ["20:00", "Quiz & Closing"]
            ].map(([time, section]) => (

              <div
                key={time}
                className="flex justify-between border rounded-lg p-4 hover:bg-gray-50"
              >

                <span className="font-semibold">

                  {time}

                </span>

                <span>

                  {section}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Live Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Live Podcast Generation

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "84%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI narration, transcript generation, chapter indexing,
              bilingual optimization, and audio mastering are currently
              84% complete.

            </p>

          </div>

        </div>

                {/* Podcast Player */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Podcast Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Preview the generated podcast before publishing.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              Ready for Publishing

            </span>

          </div>

          <div className="p-8">

            <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">

              <div className="flex items-center justify-center">

                <button className="bg-white text-indigo-600 rounded-full p-5 shadow-lg">

                  <Play size={40} />

                </button>

              </div>

              <div className="mt-8">

                <div className="w-full h-2 bg-white/30 rounded-full">

                  <div
                    className="h-2 bg-white rounded-full"
                    style={{ width: "35%" }}
                  />

                </div>

                <div className="flex justify-between text-sm mt-3">

                  <span>07:18</span>

                  <span>22:00</span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Transcript */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Transcript

              </h2>

            </div>

            <div className="p-6 max-h-96 overflow-y-auto space-y-4">

              <p>

                Welcome to today's TNPSC revision podcast.

              </p>

              <p>

                Today we are going to learn about the Imperial Chola
                Dynasty, its founders, administration, architecture,
                and important examination facts.

              </p>

              <p>

                At the end of this episode, we will revise the important
                points using memory tricks.

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                தமிழ் உரை

              </h2>

            </div>

            <div className="p-6 max-h-96 overflow-y-auto space-y-4">

              <p>

                இன்றைய TNPSC பாட்காஸ்டிற்கு வரவேற்கிறோம்.

              </p>

              <p>

                இன்று பேரரசு சோழர்களின் வரலாறு,
                முக்கிய மன்னர்கள், நிர்வாகம் மற்றும்
                தேர்விற்கு தேவையான முக்கிய தகவல்களை
                காண்போம்.

              </p>

              <p>

                இறுதியில் நினைவில் வைத்துக்கொள்ள
                எளிய குறிப்பு முறைகளையும் பார்ப்போம்.

              </p>

            </div>

          </div>

        </div>

        {/* Revision Summary */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Revision Summary

            </h2>

          </div>

          <div className="p-6">

            <ul className="list-disc ml-6 space-y-3">

              <li>Founder of Imperial Cholas - Vijayalaya Chola</li>

              <li>Capital - Thanjavur</li>

              <li>Important Kings - Rajaraja & Rajendra</li>

              <li>Brihadeeswarar Temple - UNESCO Heritage</li>

              <li>Frequently Asked TNPSC Topic</li>

            </ul>

          </div>

        </div>

        {/* Audio Quiz */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Quick Audio Quiz

            </h2>

          </div>

          <div className="p-6">

            <h3 className="font-semibold">

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
                  className="border rounded-lg p-4 hover:bg-indigo-50 text-left"
                >

                  {option}

                </button>

              ))}

            </div>

          </div>

        </div>

        {/* Podcast Analytics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Podcast Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                99%

              </h3>

              <p className="mt-2">

                Audio Quality

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                98%

              </h3>

              <p className="mt-2">

                Pronunciation Accuracy

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                97%

              </h3>

              <p className="mt-2">

                Transcript Accuracy

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

              Export MP3

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export WAV

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF Transcript

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export TXT

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

              <p>POST /api/v1/podcasts/generate</p>
              <p>POST /api/v1/podcasts/render</p>
              <p>POST /api/v1/podcasts/generate-transcript</p>
              <p>POST /api/v1/podcasts/generate-summary</p>
              <p>GET /api/v1/podcasts/preview</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/podcasts/publish</p>
              <p>POST /api/v1/podcasts/export/mp3</p>
              <p>POST /api/v1/podcasts/export/wav</p>
              <p>POST /api/v1/podcasts/export/pdf</p>
              <p>POST /api/v1/podcasts/export/srt</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}