"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  GraduationCap,
  User,
  Calendar,
  Clock,
  Target,
  TrendingUp,
  BookOpen,
  Search,
  Filter,
  Settings,
  Sparkles,
  Eye,
  Play,
  Languages,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface StudentProfile {
  id: string;
  name: string;
  targetExam: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  completion: number;
  weakSubject: string;
  studyHours: string;
}

const students: StudentProfile[] = [
  {
    id: "ST001",
    name: "Student A",
    targetExam: "TNPSC Group 4",
    level: "Intermediate",
    completion: 74,
    weakSubject: "History",
    studyHours: "2 hrs/day",
  },
  {
    id: "ST002",
    name: "Student B",
    targetExam: "TNPSC Group 2",
    level: "Advanced",
    completion: 91,
    weakSubject: "Polity",
    studyHours: "4 hrs/day",
  },
];

export default function AIPersonalTutorPage() {

  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
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

              AI Personal Tutor

            </h1>

            <p className="text-gray-500 mt-2">

              Personalized AI mentor that creates adaptive study plans,
              monitors progress, recommends revision topics, and guides
              every TNPSC aspirant based on learning performance.

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

            <GraduationCap className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Active Students

            </p>

            <h2 className="text-4xl font-bold mt-2">

              12,648

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Personalized Plans

            </p>

            <h2 className="text-4xl font-bold mt-2">

              11,972

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              Success Rate

            </p>

            <h2 className="text-4xl font-bold mt-2">

              94%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600" />

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

            <Settings className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Tutor Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Target Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>TNPSC Group 2</option>
                <option>TNPSC Group 1</option>
                <option>Combined Services</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Study Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive</option>
                <option>Revision</option>
                <option>Crash Course</option>
                <option>Practice Mode</option>

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

                Daily Study Goal

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>4 Hours</option>
                <option>6 Hours</option>

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
                placeholder="Search student..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filter

            </button>

          </div>

        </div>

        {/* Student Profiles */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Student Learning Profiles

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">Completion</th>
                  <th className="p-4 text-left">Weak Subject</th>
                  <th className="p-4 text-left">Study Hours</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredStudents.map((student) => (

                  <tr
                    key={student.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.targetExam}</td>
                    <td className="p-4">{student.level}</td>
                    <td className="p-4">{student.completion}%</td>
                    <td className="p-4">{student.weakSubject}</td>
                    <td className="p-4">{student.studyHours}</td>

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

                {/* Daily Study Planner */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Daily Study Planner

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            {[
              ["08:00 - 09:00", "History Revision"],
              ["09:15 - 10:00", "Polity Practice"],
              ["18:00 - 19:00", "Current Affairs"],
              ["20:00 - 20:45", "Mock Test Review"],
            ].map(([time, task]) => (

              <div
                key={time}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                <Clock className="text-indigo-600 mb-3" />

                <h3 className="font-semibold">{time}</h3>

                <p className="text-gray-600 mt-2">{task}</p>

              </div>

            ))}

          </div>

        </div>

        {/* Personalized Recommendations */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Target className="text-red-600" />

              <h2 className="text-xl font-bold">

                Weak Topic Recommendations

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Ancient History",
                "Indian Constitution",
                "Geography Maps",
                "Economics Basics",
                "Science & Technology",
              ].map((topic) => (

                <div
                  key={topic}
                  className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50"
                >

                  <span>{topic}</span>

                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">

                    Needs Revision

                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <BookOpen className="text-green-600" />

              <h2 className="text-xl font-bold">

                AI Homework & Practice

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Complete 20 History MCQs",
                "Read Chapter 5 - Polity",
                "Revise Current Affairs",
                "Practice Aptitude Shortcuts",
                "Solve Previous Year Questions",
              ].map((task) => (

                <div
                  key={task}
                  className="flex justify-between border rounded-lg p-4 hover:bg-gray-50"
                >

                  <span>{task}</span>

                  <CheckCircle2 className="text-green-600" size={18} />

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Mentor Chat */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <GraduationCap className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Mentor Chat

            </h2>

          </div>

          <div className="p-6 space-y-6">

            <div className="flex gap-3">

              <div className="bg-blue-100 rounded-full p-2">

                <User size={18} />

              </div>

              <div className="bg-blue-50 rounded-xl p-4 flex-1">

                <p className="font-semibold">Student</p>

                <p className="mt-2">

                  Which topic should I revise today?

                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <div className="bg-green-100 rounded-full p-2">

                <Brain size={18} />

              </div>

              <div className="bg-green-50 rounded-xl p-4 flex-1">

                <p className="font-semibold">

                  AI Personal Tutor

                </p>

                <p className="mt-2">

                  Based on your recent mock test performance,
                  you should revise Ancient History and
                  Indian Constitution today before attempting
                  another practice test.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Smart Revision */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Smart Revision Schedule

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              ["Today", "History"],
              ["Tomorrow", "Polity"],
              ["This Weekend", "Full Mock Revision"],
            ].map(([day, subject]) => (

              <div
                key={day}
                className="border rounded-xl p-5 hover:bg-indigo-50"
              >

                <Calendar className="text-indigo-600 mb-3" />

                <h3 className="font-semibold">{day}</h3>

                <p className="mt-2 text-gray-600">

                  {subject}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Live Recommendation Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Recommendation Engine

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "91%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI is analyzing learning history, identifying weak areas,
              generating today's study plan, scheduling revisions,
              and predicting exam readiness.

            </p>

          </div>

        </div>

                {/* Learning Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Personalized Learning Dashboard

              </h2>

              <p className="text-gray-500 mt-2">

                AI continuously evaluates student performance and recommends
                improvements.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              AI Monitoring Active

            </span>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                82%

              </h3>

              <p className="mt-2">

                Overall Progress

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                91%

              </h3>

              <p className="mt-2">

                Attendance

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                87%

              </h3>

              <p className="mt-2">

                Practice Completion

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-orange-600">

                95%

              </h3>

              <p className="mt-2">

                Consistency

              </p>

            </div>

          </div>

        </div>

        {/* Exam Readiness */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Exam Readiness Prediction

              </h2>

            </div>

            <div className="p-6">

              <div className="w-full bg-gray-200 rounded-full h-5">

                <div
                  className="bg-green-600 h-5 rounded-full"
                  style={{ width: "84%" }}
                />

              </div>

              <h3 className="text-3xl font-bold text-green-600 mt-6">

                84%

              </h3>

              <p className="mt-3 text-gray-600">

                Based on mock tests, revision frequency, subject mastery,
                and learning consistency.

              </p>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Performance Breakdown

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["History", "88%"],
                ["Polity", "93%"],
                ["Geography", "81%"],
                ["Economics", "79%"],
                ["Science", "90%"],
              ].map(([subject, score]) => (

                <div
                  key={subject}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{subject}</span>

                  <span className="font-semibold">

                    {score}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Achievements */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Achievement Badges

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "🔥 7-Day Study Streak",
              "📚 100 Chapters Completed",
              "🏆 Mock Test Champion",
              "⭐ Revision Master",
            ].map((badge) => (

              <div
                key={badge}
                className="border rounded-xl p-6 text-center hover:bg-yellow-50"
              >

                <div className="text-4xl mb-4">

                  {badge.split(" ")[0]}

                </div>

                <p className="font-semibold">

                  {badge.substring(2)}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Reports */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Progress Reports

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Daily Report",
              "Weekly Report",
              "Monthly Report",
            ].map((report) => (

              <div
                key={report}
                className="border rounded-xl p-6 hover:bg-indigo-50"
              >

                <h3 className="font-semibold text-lg">

                  {report}

                </h3>

                <p className="mt-3 text-gray-600">

                  AI-generated learning insights and recommendations.

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Publish & Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish Study Plan

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Send to Student

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Calendar

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

              <p>GET /api/v1/personal-tutor/profile</p>
              <p>POST /api/v1/personal-tutor/study-plan</p>
              <p>POST /api/v1/personal-tutor/recommendations</p>
              <p>GET /api/v1/personal-tutor/progress</p>
              <p>GET /api/v1/personal-tutor/readiness</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/personal-tutor/publish</p>
              <p>POST /api/v1/personal-tutor/export/pdf</p>
              <p>POST /api/v1/personal-tutor/export/excel</p>
              <p>POST /api/v1/personal-tutor/export/calendar</p>
              <p>POST /api/v1/personal-tutor/achievements</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}