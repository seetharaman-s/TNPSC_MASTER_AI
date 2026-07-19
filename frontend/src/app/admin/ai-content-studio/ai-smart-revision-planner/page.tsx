"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Calendar,
  Clock,
  BookOpen,
  Target,
  Sparkles,
  TrendingUp,
  Search,
  Filter,
  Settings,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Repeat,
  Timer,
  Award,
} from "lucide-react";

interface RevisionPlan {
  id: string;
  subject: string;
  topic: string;
  priority: "High" | "Medium" | "Low";
  nextRevision: string;
  completion: number;
  status: "Pending" | "Completed";
}

const revisionPlans: RevisionPlan[] = [
  {
    id: "RP001",
    subject: "Polity",
    topic: "Fundamental Rights",
    priority: "High",
    nextRevision: "20 Jul 2026",
    completion: 78,
    status: "Pending",
  },
  {
    id: "RP002",
    subject: "History",
    topic: "Sangam Age",
    priority: "Medium",
    nextRevision: "21 Jul 2026",
    completion: 92,
    status: "Completed",
  },
];

export default function AISmartRevisionPlannerPage() {

  const [search, setSearch] = useState("");

  const filteredPlans = useMemo(() => {
    return revisionPlans.filter(
      (plan) =>
        plan.subject.toLowerCase().includes(search.toLowerCase()) ||
        plan.topic.toLowerCase().includes(search.toLowerCase())
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

              AI Smart Revision Planner

            </h1>

            <p className="text-gray-500 mt-2">

              AI automatically creates adaptive revision schedules using
              spaced repetition, weak-topic detection, exam priority,
              and learning analytics.

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

            <Calendar className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Active Plans

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,286

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Repeat className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Revisions Completed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              28,416

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.7%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Avg Score Improvement

            </p>

            <h2 className="text-4xl font-bold mt-2">

              +24%

            </h2>

          </div>

        </div>

        {/* Planner Settings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Revision Planner Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Revision Method

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Spaced Repetition</option>
                <option>Daily Revision</option>
                <option>Weekly Revision</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive</option>
                <option>Easy</option>
                <option>Hard</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Study Hours

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>2 Hours</option>
                <option>4 Hours</option>
                <option>6 Hours</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Exam Target

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>Group 2</option>
                <option>Group 1</option>

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
                placeholder="Search revision plans..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Revision Plan Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Revision Schedule

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Priority</th>
                  <th className="p-4 text-left">Next Revision</th>
                  <th className="p-4 text-left">Completion</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredPlans.map((plan)=>(

                  <tr
                    key={plan.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{plan.subject}</td>
                    <td className="p-4">{plan.topic}</td>
                    <td className="p-4">{plan.priority}</td>
                    <td className="p-4">{plan.nextRevision}</td>
                    <td className="p-4">{plan.completion}%</td>
                    <td className="p-4">{plan.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Weak Topic Detector */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <AlertTriangle className="text-red-600" />

            <h2 className="text-2xl font-bold">

              AI Weak Topic Detector

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              ["Indian Polity", "Fundamental Duties", "82% Weakness"],
              ["History", "Delhi Sultanate", "74% Weakness"],
              ["Science", "Human Physiology", "69% Weakness"],
              ["Economics", "Inflation", "66% Weakness"],
            ].map(([subject, topic, weakness]) => (

              <div
                key={topic}
                className="border rounded-xl p-5 hover:border-red-300"
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold text-lg">

                      {topic}

                    </h3>

                    <p className="text-gray-500">

                      {subject}

                    </p>

                  </div>

                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">

                    {weakness}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Spaced Repetition */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Repeat className="text-green-600" />

              <h2 className="text-xl font-bold">

                Spaced Repetition Scheduler

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Day 1", "Completed"],
                ["Day 3", "Completed"],
                ["Day 7", "Upcoming"],
                ["Day 14", "Upcoming"],
                ["Day 30", "Scheduled"],
              ].map(([day, status]) => (

                <div
                  key={day}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <span className="font-medium">

                    {day}

                  </span>

                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">

                    {status}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Smart Calendar */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Calendar className="text-indigo-600" />

              <h2 className="text-xl font-bold">

                Smart Revision Calendar

              </h2>

            </div>

            <div className="grid grid-cols-7 gap-2 p-6">

              {Array.from({ length: 31 }).map((_, i) => (

                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm
                    ${
                      [2, 5, 9, 13, 17, 22, 28].includes(i + 1)
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100"
                    }`}
                >

                  {i + 1}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Daily Timeline */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Clock className="text-blue-600" />

            <h2 className="text-2xl font-bold">

              Daily Revision Timeline

            </h2>

          </div>

          <div className="p-6 space-y-4">

            {[
              ["06:00 AM", "Science Revision"],
              ["08:00 AM", "Polity Practice"],
              ["02:00 PM", "Current Affairs"],
              ["05:00 PM", "History Revision"],
              ["08:00 PM", "Mock Test Review"],
            ].map(([time, task]) => (

              <div
                key={time}
                className="flex items-center gap-5 border rounded-lg p-4"
              >

                <div className="w-28 font-semibold text-indigo-600">

                  {time}

                </div>

                <div>

                  <p className="font-medium">

                    {task}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Priority Engine */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Priority-based Revision

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["High", "Indian Constitution", "95%"],
                ["Medium", "Tamil Grammar", "72%"],
                ["Low", "Ancient History", "48%"],
              ].map(([priority, topic, progress]) => (

                <div key={topic}>

                  <div className="flex justify-between mb-2">

                    <span>

                      {topic}

                    </span>

                    <span>

                      {priority}

                    </span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: progress }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Subject Planner */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Subject-wise Planner

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

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
                  className="border rounded-xl p-5 hover:bg-indigo-50"
                >

                  <BookOpen className="text-indigo-600 mb-3" />

                  <h3 className="font-semibold">

                    {subject}

                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Missed Revisions */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Timer className="text-red-600" />

            <h2 className="text-2xl font-bold">

              Missed Revision Alerts

            </h2>

          </div>

          <div className="p-6 space-y-4">

            {[
              "History Revision missed yesterday.",
              "Polity revision delayed by 2 days.",
              "Science mock analysis pending.",
            ].map((alert) => (

              <div
                key={alert}
                className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg"
              >

                {alert}

              </div>

            ))}

          </div>

        </div>

        {/* Revision Effectiveness */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Revision Effectiveness Analysis

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Retention Rate", "94%"],
              ["Revision Accuracy", "91%"],
              ["Completion Rate", "96%"],
              ["Learning Efficiency", "93%"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="border rounded-xl p-6 text-center hover:bg-indigo-50"
              >

                <h3 className="text-gray-500">

                  {label}

                </h3>

                <p className="text-4xl font-bold mt-4">

                  {value}

                </p>

              </div>

            ))}

          </div>

        </div>

                {/* Advanced Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Advanced Revision Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Topics Revised", "2,486"],
              ["Average Retention", "94%"],
              ["Study Streak", "126 Days"],
              ["AI Prediction Score", "97.8%"],
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

        {/* Progress Trends */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Monthly Revision Progress

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January", "68%"],
                ["February", "75%"],
                ["March", "82%"],
                ["April", "88%"],
                ["May", "94%"],
              ].map(([month, score]) => (

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

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

                Revision Leaderboard

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya", "99%"],
                ["Arun Kumar", "98%"],
                ["Meena", "97%"],
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

          <div className="p-6 border-b flex items-center gap-2">

            <Award className="text-yellow-600" />

            <h2 className="text-2xl font-bold">

              Revision Achievements

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "🔥 30-Day Streak",
              "📚 Subject Master",
              "🧠 Memory Champion",
              "🏆 AI Revision Expert",
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

        {/* Revision History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Revision History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Duration</th>
                  <th className="p-4 text-left">Result</th>

                </tr>

              </thead>

              <tbody>

                {filteredPlans.map((plan) => (

                  <tr
                    key={plan.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{plan.nextRevision}</td>
                    <td className="p-4">{plan.subject}</td>
                    <td className="p-4">{plan.topic}</td>
                    <td className="p-4">45 mins</td>
                    <td className="p-4">

                      <span className="text-green-600 font-semibold">

                        {plan.status}

                      </span>

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

              <p>GET /api/v1/revision/dashboard</p>
              <p>POST /api/v1/revision/generate-plan</p>
              <p>GET /api/v1/revision/calendar</p>
              <p>GET /api/v1/revision/history</p>
              <p>GET /api/v1/revision/analytics</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/revision/export/pdf</p>
              <p>POST /api/v1/revision/export/excel</p>
              <p>POST /api/v1/revision/export/csv</p>
              <p>GET /api/v1/revision/leaderboard</p>
              <p>GET /api/v1/revision/achievements</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}