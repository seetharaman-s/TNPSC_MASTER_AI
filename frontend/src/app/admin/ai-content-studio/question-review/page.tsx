"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ClipboardCheck,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  XCircle,
  Clock3,
  AlertTriangle,
  MessageSquare,
  RefreshCw
} from "lucide-react";

interface ReviewQuestion {
  id: string;
  subject: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  confidence: number;
  status: "Pending" | "Approved" | "Rejected";
}

const reviewQuestions: ReviewQuestion[] = [
  {
    id: "Q-1025",
    subject: "History",
    topic: "Sangam Age",
    difficulty: "Medium",
    confidence: 98,
    status: "Pending"
  },
  {
    id: "Q-1026",
    subject: "Polity",
    topic: "Fundamental Rights",
    difficulty: "Easy",
    confidence: 96,
    status: "Pending"
  },
  {
    id: "Q-1027",
    subject: "Science",
    topic: "Physics",
    difficulty: "Hard",
    confidence: 91,
    status: "Approved"
  }
];

export default function QuestionReviewPage() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {

    return reviewQuestions.filter((q) =>
      q.subject.toLowerCase().includes(search.toLowerCase()) ||
      q.topic.toLowerCase().includes(search.toLowerCase()) ||
      q.id.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <ClipboardCheck className="text-indigo-600"/>

              AI Question Review

            </h1>

            <p className="text-gray-500 mt-2">

              Review, edit and approve AI-generated TNPSC questions.

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

            <Clock3 className="text-yellow-600"/>

            <p className="mt-4 text-gray-500">

              Pending Review

            </p>

            <h2 className="text-4xl font-bold mt-2">

              127

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <CheckCircle2 className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Approved Today

            </p>

            <h2 className="text-4xl font-bold mt-2">

              84

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <XCircle className="text-red-600"/>

            <p className="mt-4 text-gray-500">

              Rejected

            </p>

            <h2 className="text-4xl font-bold mt-2">

              11

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <AlertTriangle className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Needs Revision

            </p>

            <h2 className="text-4xl font-bold mt-2">

              23

            </h2>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search question..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filters

            </button>

            <button className="bg-indigo-600 text-white rounded-lg px-5 flex items-center gap-2">

              <RefreshCw size={18}/>

              Refresh

            </button>

          </div>

        </div>

        {/* Review Queue */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Review Queue

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">ID</th>
                  <th className="text-left p-4">Subject</th>
                  <th className="text-left p-4">Topic</th>
                  <th className="text-left p-4">Difficulty</th>
                  <th className="text-left p-4">Confidence</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((q)=>(

                  <tr
                    key={q.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">{q.id}</td>

                    <td className="p-4">{q.subject}</td>

                    <td className="p-4">{q.topic}</td>

                    <td className="p-4">{q.difficulty}</td>

                    <td className="p-4">

                      {q.confidence}%

                    </td>

                    <td className="p-4">

                      {q.status}

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2 text-green-600">

                          <CheckCircle2 size={16}/>

                        </button>

                        <button className="border rounded-lg p-2 text-red-600">

                          <XCircle size={16}/>

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

                {/* Selected Question Review */}

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* Question Editor */}

          <div className="lg:col-span-2 bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">

                Question Review

              </h2>

              <p className="text-gray-500 mt-2">

                Edit and validate the selected question before approval.

              </p>

            </div>

            <div className="p-6 space-y-6">

              <div>

                <label className="font-semibold">

                  Question

                </label>

                <textarea
                  rows={4}
                  className="w-full border rounded-lg mt-2 p-4"
                  defaultValue="Who founded the Imperial Chola Dynasty?"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  className="border rounded-lg p-3"
                  defaultValue="Karikala Chola"
                />

                <input
                  className="border rounded-lg p-3"
                  defaultValue="Vijayalaya Chola"
                />

                <input
                  className="border rounded-lg p-3"
                  defaultValue="Rajaraja Chola"
                />

                <input
                  className="border rounded-lg p-3"
                  defaultValue="Aditya Chola"
                />

              </div>

              <div>

                <label className="font-semibold">

                  Correct Answer

                </label>

                <select className="w-full border rounded-lg mt-2 p-3">

                  <option>B. Vijayalaya Chola</option>

                  <option>A. Karikala Chola</option>

                  <option>C. Rajaraja Chola</option>

                  <option>D. Aditya Chola</option>

                </select>

              </div>

              <div>

                <label className="font-semibold">

                  Explanation

                </label>

                <textarea
                  rows={5}
                  className="w-full border rounded-lg mt-2 p-4"
                  defaultValue="Vijayalaya Chola established the Imperial Chola dynasty by capturing Thanjavur during the ninth century."
                />

              </div>

            </div>

          </div>

          {/* AI Insights */}

          <div className="space-y-6">

            <div className="bg-white rounded-xl shadow">

              <div className="p-6 border-b">

                <h2 className="text-xl font-bold">

                  AI Confidence

                </h2>

              </div>

              <div className="p-6">

                <div className="w-full h-3 bg-gray-200 rounded-full">

                  <div
                    className="h-3 bg-green-600 rounded-full"
                    style={{ width: "98%" }}
                  />

                </div>

                <p className="mt-4 font-bold text-green-600">

                  98% Confidence

                </p>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow">

              <div className="p-6 border-b">

                <h2 className="text-xl font-bold">

                  Similar Questions

                </h2>

              </div>

              <div className="divide-y">

                {[
                  "Founder of Chola Empire",
                  "First Chola King",
                  "Imperial Cholas"
                ].map((item) => (

                  <div
                    key={item}
                    className="p-4 hover:bg-gray-50"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-white rounded-xl shadow">

              <div className="p-6 border-b">

                <h2 className="text-xl font-bold">

                  AI Suggestions

                </h2>

              </div>

              <div className="p-6 space-y-4">

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">

                  ✅ Explanation verified.

                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">

                  💡 Add textbook reference.

                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">

                  ⚠ Similarity score: 82%.

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Reviewer Comments */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Reviewer Comments

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={5}
              className="w-full border rounded-lg p-4"
              placeholder="Write review comments..."
            />

          </div>

        </div>

                {/* Revision History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Revision History

            </h2>

          </div>

          <div className="divide-y">

            {[
              {
                version: "v1.2",
                author: "Content Reviewer",
                action: "Updated explanation",
                date: "18 Jul 2026 10:30 AM"
              },
              {
                version: "v1.1",
                author: "AI Generator",
                action: "Generated initial question",
                date: "18 Jul 2026 10:15 AM"
              }
            ].map((item) => (

              <div
                key={item.version}
                className="p-5 flex justify-between items-center"
              >

                <div>

                  <h3 className="font-semibold">

                    {item.version}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {item.author}

                  </p>

                </div>

                <div className="text-right">

                  <p>{item.action}</p>

                  <p className="text-sm text-gray-500">

                    {item.date}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Review Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6 text-center">

            <p className="text-gray-500">

              AI Confidence

            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-3">

              98%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">

            <p className="text-gray-500">

              Similarity Score

            </p>

            <h2 className="text-4xl font-bold text-yellow-600 mt-3">

              18%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">

            <p className="text-gray-500">

              Grammar Score

            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-3">

              100%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">

            <p className="text-gray-500">

              Review Status

            </p>

            <h2 className="text-2xl font-bold text-purple-600 mt-4">

              Pending

            </h2>

          </div>

        </div>

        {/* Review Actions */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Review Actions

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Approve Question

            </button>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg">

              Request Changes

            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg">

              Reject Question

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Save Draft

            </button>

          </div>

        </div>

        {/* Bulk Operations */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Bulk Review Operations

            </h2>

          </div>

          <div className="p-6 flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Approve Selected

            </button>

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg">

              Reject Selected

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Send to Review Queue

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Review Report

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

              <p>GET /api/v1/review/questions</p>

              <p>GET /api/v1/review/{id}</p>

              <p>PUT /api/v1/review/{id}</p>

              <p>POST /api/v1/review/comment</p>

              <p>POST /api/v1/review/approve</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/review/reject</p>

              <p>POST /api/v1/review/request-changes</p>

              <p>POST /api/v1/review/bulk-action</p>

              <p>POST /api/v1/review/publish</p>

              <p>GET /api/v1/review/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}