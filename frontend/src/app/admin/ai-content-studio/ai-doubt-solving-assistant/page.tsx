"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  MessageSquare,
  Bot,
  User,
  Search,
  Filter,
  Languages,
  Mic,
  Volume2,
  Sparkles,
  Settings,
  Clock,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  Eye,
  Target,
} from "lucide-react";

interface DoubtSession {
  id: string;
  student: string;
  subject: string;
  question: string;
  language: string;
  status: "Answered" | "Pending" | "In Progress";
  confidence: number;
}

const sessions: DoubtSession[] = [
  {
    id: "DS001",
    student: "Student A",
    subject: "History",
    question: "Who founded the Imperial Chola Dynasty?",
    language: "Tamil + English",
    status: "Answered",
    confidence: 99,
  },
  {
    id: "DS002",
    student: "Student B",
    subject: "Polity",
    question: "Explain Fundamental Rights.",
    language: "Tamil",
    status: "Pending",
    confidence: 96,
  },
];

export default function AIDoubtSolvingAssistantPage() {

  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {

    return sessions.filter((session) =>
      session.question.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600"/>

              AI Doubt Solving Assistant

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered multilingual assistant that answers TNPSC doubts
              using books, notes, question banks, current affairs, and
              previous year questions.

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

            <HelpCircle className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Questions Solved

            </p>

            <h2 className="text-4xl font-bold mt-2">

              28,421

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Bot className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              AI Responses

            </p>

            <h2 className="text-4xl font-bold mt-2">

              27,988

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Clock className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Avg Response

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1.8s

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.2%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Assistant Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Knowledge Source

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Resources</option>
                <option>Books</option>
                <option>Notes</option>
                <option>Question Bank</option>
                <option>Current Affairs</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Response Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Voice Support

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Enabled</option>
                <option>Disabled</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Explanation Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Detailed</option>
                <option>Short</option>
                <option>Exam Focused</option>

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
                placeholder="Search doubt sessions..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Doubt Sessions */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Recent Doubt Sessions

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Question</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Confidence</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredSessions.map((session)=>(

                  <tr
                    key={session.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{session.student}</td>
                    <td className="p-4">{session.subject}</td>
                    <td className="p-4">{session.question}</td>
                    <td className="p-4">{session.language}</td>
                    <td className="p-4">{session.status}</td>
                    <td className="p-4">{session.confidence}%</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <MessageSquare size={16}/>

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Chat Interface */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Bot className="text-indigo-600" />

              <h2 className="text-2xl font-bold">

                AI Conversation

              </h2>

            </div>

            <div className="p-6 space-y-6 max-h-[520px] overflow-y-auto">

              {/* Student */}

              <div className="flex items-start gap-3">

                <div className="bg-blue-100 rounded-full p-2">

                  <User size={18} />

                </div>

                <div className="bg-blue-50 rounded-xl p-4 flex-1">

                  <p className="font-semibold">

                    Student

                  </p>

                  <p className="mt-2">

                    Who founded the Imperial Chola Dynasty?

                  </p>

                </div>

              </div>

              {/* AI */}

              <div className="flex items-start gap-3">

                <div className="bg-green-100 rounded-full p-2">

                  <Bot size={18} />

                </div>

                <div className="bg-green-50 rounded-xl p-4 flex-1">

                  <p className="font-semibold">

                    TNPSC AI Assistant

                  </p>

                  <p className="mt-2">

                    Vijayalaya Chola founded the Imperial Chola Dynasty
                    during the 9th century and established Thanjavur as
                    an important political center.

                  </p>

                </div>

              </div>

            </div>

        </div>

        {/* Ask Question */}

        <div className="bg-white rounded-xl shadow">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Ask AI

            </h2>

          </div>

          <div className="p-6 space-y-5">

            <textarea
              rows={8}
              className="w-full border rounded-xl p-4"
              placeholder="Ask any TNPSC question..."
            />

            <div className="flex flex-wrap gap-3">

              <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">

                <MessageSquare size={18} />

                Ask AI

              </button>

              <button className="border px-5 py-3 rounded-lg flex items-center gap-2">

                <Mic size={18} />

                Voice Input

              </button>

              <button className="border px-5 py-3 rounded-lg flex items-center gap-2">

                <Volume2 size={18} />

                Read Answer

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* AI Features */}

      <div className="bg-white rounded-xl shadow mt-8">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            AI Assistance Features

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            Explain Step by Step

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            Answer in Tamil

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            Answer in English

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            Cite Book References

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            Related Previous Questions

          </label>

          <label className="flex items-center gap-3">

            <input type="checkbox" defaultChecked />

            Voice Explanation

          </label>

        </div>

      </div>

      {/* Knowledge Sources */}

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        <div className="bg-white rounded-xl shadow">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Knowledge Sources

            </h2>

          </div>

          <div className="p-6 space-y-4">

            {[
              "TNPSC New Books",
              "Study Notes",
              "Question Bank",
              "Current Affairs",
              "Previous Year Papers",
              "Model Tests",
            ].map((source) => (

              <div
                key={source}
                className="border rounded-lg p-4 hover:bg-gray-50 flex justify-between"
              >

                <span>{source}</span>

                <CheckCircle2 className="text-green-600" size={18} />

              </div>

            ))}

          </div>

        </div>

        <div className="bg-white rounded-xl shadow">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Suggested Follow-up Questions

            </h2>

          </div>

          <div className="p-6 space-y-4">

            {[
              "Who was Rajaraja Chola?",
              "Explain Chola Administration.",
              "What are important TNPSC questions?",
              "Compare Chola and Pandya kingdoms.",
              "Important temple architecture facts.",
            ].map((question) => (

              <button
                key={question}
                className="w-full text-left border rounded-lg p-4 hover:bg-indigo-50"
              >

                {question}

              </button>

            ))}

          </div>

        </div>

      </div>

      {/* AI Response Progress */}

      <div className="bg-white rounded-xl shadow mt-8">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            Live AI Response Generation

          </h2>

        </div>

        <div className="p-6">

          <div className="w-full h-4 rounded-full bg-gray-200">

            <div
              className="h-4 rounded-full bg-indigo-600"
              style={{ width: "94%" }}
            />

          </div>

          <p className="mt-4 text-gray-600">

            Retrieving book references, generating bilingual explanations,
            preparing follow-up questions, and validating TNPSC accuracy.
            Progress: 94%.

          </p>

        </div>

      </div>

              {/* AI Answer Viewer */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Answer Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Review the generated explanation before publishing to learners.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              Verified Answer

            </span>

          </div>

          <div className="p-6 space-y-6">

            <div className="border rounded-xl p-5 bg-indigo-50">

              <h3 className="font-semibold text-lg mb-3">

                English Explanation

              </h3>

              <p>

                Vijayalaya Chola founded the Imperial Chola Dynasty during
                the 9th century CE. He captured Thanjavur and laid the
                foundation for one of South India's most influential empires.
                Later rulers such as Rajaraja Chola I and Rajendra Chola I
                expanded the empire significantly.

              </p>

            </div>

            <div className="border rounded-xl p-5 bg-green-50">

              <h3 className="font-semibold text-lg mb-3">

                தமிழ் விளக்கம்

              </h3>

              <p>

                விஜயாலய சோழன் 9ஆம் நூற்றாண்டில் பேரரசு சோழ வம்சத்தை
                நிறுவினார். தஞ்சாவூரை கைப்பற்றி சோழ பேரரசின்
                அடித்தளத்தை அமைத்தார். பின்னர் ராஜராஜ சோழன் மற்றும்
                ராஜேந்திர சோழன் பேரரசை விரிவுபடுத்தினர்.

              </p>

            </div>

          </div>

        </div>

        {/* References & Voice */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BookOpen className="text-indigo-600" />

              <h2 className="text-xl font-bold">

                Reference Materials

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "TNPSC History Book - Chola Dynasty",
                "Class XI Tamil Nadu History",
                "TNPSC Study Notes",
                "Previous Year Question Papers",
                "Current Affairs Archive",
              ].map((reference) => (

                <div
                  key={reference}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >

                  {reference}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Volume2 className="text-green-600" />

              <h2 className="text-xl font-bold">

                Voice Playback

              </h2>

            </div>

            <div className="p-8">

              <div className="rounded-xl bg-gradient-to-r from-green-500 to-indigo-600 text-white p-6">

                <div className="flex justify-center">

                  <button className="bg-white text-green-600 rounded-full p-5">

                    <Volume2 size={36} />

                  </button>

                </div>

                <div className="mt-6">

                  <div className="w-full h-2 rounded-full bg-white/30">

                    <div
                      className="h-2 rounded-full bg-white"
                      style={{ width: "42%" }}
                    />

                  </div>

                  <div className="flex justify-between text-sm mt-3">

                    <span>01:48</span>

                    <span>04:15</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Feedback */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Student Feedback

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-yellow-500">

                ★ 4.9

              </h3>

              <p className="mt-2">

                Average Rating

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                98%

              </h3>

              <p className="mt-2">

                Helpful Answers

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                27K+

              </h3>

              <p className="mt-2">

                Answers Delivered

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                99%

              </h3>

              <p className="mt-2">

                Satisfaction

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

              Publish to Knowledge Base

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Student Portal

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export DOCX

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export TXT

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Share Answer

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

              <p>POST /api/v1/doubts/ask</p>
              <p>POST /api/v1/doubts/voice</p>
              <p>POST /api/v1/doubts/translate</p>
              <p>GET /api/v1/doubts/history</p>
              <p>GET /api/v1/doubts/references</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/doubts/publish</p>
              <p>POST /api/v1/doubts/export/pdf</p>
              <p>POST /api/v1/doubts/export/docx</p>
              <p>POST /api/v1/doubts/export/txt</p>
              <p>POST /api/v1/doubts/feedback</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}