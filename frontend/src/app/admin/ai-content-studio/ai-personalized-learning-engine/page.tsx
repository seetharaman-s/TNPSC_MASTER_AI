"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  UserRound,
  GraduationCap,
  Calendar,
  BookOpen,
  Target,
  TrendingUp,
  Search,
  Filter,
  Settings,
  Sparkles,
  BarChart3,
  Award,
  Clock3,
} from "lucide-react";

interface StudentProfile {
  id: string;
  name: string;
  targetExam: string;
  readiness: number;
  learningStyle: string;
  weakArea: string;
  dailyGoal: string;
  status: "Excellent" | "Good" | "Needs Attention";
}

const students: StudentProfile[] = [
  {
    id: "ST001",
    name: "Student A",
    targetExam: "TNPSC Group IV",
    readiness: 91,
    learningStyle: "Visual",
    weakArea: "Economy",
    dailyGoal: "3 Hours",
    status: "Excellent",
  },
  {
    id: "ST002",
    name: "Student B",
    targetExam: "TNPSC Group II",
    readiness: 82,
    learningStyle: "Reading",
    weakArea: "Science",
    dailyGoal: "2 Hours",
    status: "Good",
  },
];

export default function AIPersonalizedLearningEnginePage() {

  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {

    return students.filter((student)=>

      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.targetExam.toLowerCase().includes(search.toLowerCase()) ||
      student.learningStyle.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600"/>

              AI Personalized Learning Engine

            </h1>

            <p className="text-gray-500 mt-2">

              AI-driven adaptive learning platform that personalizes
              study plans, recommends resources, schedules revision,
              and continuously optimizes TNPSC preparation.

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

            <UserRound className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Active Learners

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18,520

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Personalized Plans

            </p>

            <h2 className="text-4xl font-bold mt-2">

              16,904

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Award className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Learning Success

            </p>

            <h2 className="text-4xl font-bold mt-2">

              94.8%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.3%

            </h2>

          </div>

        </div>

        {/* Engine Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Learning Engine Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Target Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Group I</option>
                <option>Group II</option>
                <option>Group IIA</option>
                <option>Group IV</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Learning Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Visual</option>
                <option>Reading</option>
                <option>Audio</option>
                <option>Mixed</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Study Hours

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
                <option>4+ Hours</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive</option>
                <option>Intensive</option>
                <option>Revision</option>
                <option>Exam Ready</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Learning Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze learner performance, generate personalized study plan, optimize revision schedule, recommend resources, and adapt learning path..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Generate Learning Plan

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
                placeholder="Search learner..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Learner Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Personalized Learning Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Readiness</th>
                  <th className="p-4 text-left">Learning Style</th>
                  <th className="p-4 text-left">Weak Area</th>
                  <th className="p-4 text-left">Daily Goal</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredStudents.map((student)=>(

                  <tr
                    key={student.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{student.name}</td>
                    <td className="p-4">{student.targetExam}</td>
                    <td className="p-4">{student.readiness}%</td>
                    <td className="p-4">{student.learningStyle}</td>
                    <td className="p-4">{student.weakArea}</td>
                    <td className="p-4">{student.dailyGoal}</td>
                    <td className="p-4">{student.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Adaptive Learning Engine */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Brain className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                AI Adaptive Learning Engine

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Learning Adaptability","98%"],
                ["Personalization Accuracy","96%"],
                ["Content Optimization","94%"],
                ["Revision Efficiency","95%"],
                ["Knowledge Retention","93%"],
                ["Exam Readiness","97%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Daily Study Planner */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Calendar className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Personalized Daily Study Planner

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "06:00 - Current Affairs",
                "07:00 - Tamil",
                "09:00 - Polity",
                "11:00 - Aptitude",
                "15:00 - Science",
                "18:00 - Mock Test",
                "20:00 - Revision",
              ].map((plan)=>(

                <div
                  key={plan}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  {plan}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Dynamic Content Recommendation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BookOpen className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Dynamic Content Recommendation

            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

            {[
              "Recommended Books",
              "Smart Notes",
              "PYQ Collection",
              "Current Affairs",
              "Daily MCQs",
              "Video Lessons",
              "Mind Maps",
              "Flashcards",
              "Revision Notes",
              "Model Tests",
              "Topic Summaries",
              "Previous Mistakes",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-indigo-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Adaptive Quiz */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Adaptive Quiz Generator

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Easy Questions",
                "Medium Questions",
                "Hard Questions",
                "Previous Mistakes",
                "Weak Topic Questions",
                "Mixed Challenge Test",
              ].map((quiz)=>(

                <div
                  key={quiz}
                  className="border rounded-lg p-4 hover:bg-blue-50"
                >

                  {quiz}

                </div>

              ))}

            </div>

          </div>

          {/* Revision */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Spaced Repetition Scheduler

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Today's Revision",
                "Tomorrow Review",
                "3-Day Revision",
                "7-Day Revision",
                "15-Day Revision",
                "30-Day Final Revision",
              ].map((revision)=>(

                <div
                  key={revision}
                  className="border rounded-lg p-4 hover:bg-purple-50"
                >

                  {revision}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Weak Topic Reinforcement */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Weak Topic Reinforcement Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Indian Economy",
              "Geography Maps",
              "Ancient History",
              "Physics Numericals",
              "Tamil Grammar",
              "Current Affairs Revision",
            ].map((topic)=>(

              <div
                key={topic}
                className="border rounded-xl p-5 hover:bg-red-50"
              >

                {topic}

              </div>

            ))}

          </div>

        </div>

        {/* Learning Milestones */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Achievement Badges

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "100-Day Streak",
                "Mock Test Champion",
                "Top Performer",
                "Fast Learner",
                "Revision Master",
                "Current Affairs Expert",
              ].map((badge)=>(

                <div
                  key={badge}
                  className="border rounded-lg p-4 text-center hover:bg-yellow-50"
                >

                  🏅 {badge}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Learning Velocity & Retention

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Daily Progress","92%"],
                ["Weekly Retention","90%"],
                ["Monthly Growth","95%"],
                ["Revision Success","94%"],
                ["Prediction Accuracy","97%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

                {/* Personalized Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Personalized Learning Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Overall Progress","93.8%"],
              ["Knowledge Retention","91.2%"],
              ["Study Consistency","96 Days"],
              ["Predicted Exam Score","186 / 200"],
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

        {/* Student Performance */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Subject Performance Trends

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["History","96%"],
                ["Polity","94%"],
                ["Science","89%"],
                ["Economy","84%"],
                ["Geography","91%"],
                ["Current Affairs","88%"],
              ].map(([subject,value])=>(

                <div key={subject}>

                  <div className="flex justify-between mb-2">

                    <span>{subject}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Success Prediction

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Group I","86%"],
                ["Group II","91%"],
                ["Group IIA","94%"],
                ["Group IV","98%"],
                ["VAO","96%"],
                ["Interview","90%"],
              ].map(([exam,score])=>(

                <div
                  key={exam}
                  className="border rounded-xl p-5 text-center hover:bg-green-50"
                >

                  <h3 className="font-semibold">

                    {exam}

                  </h3>

                  <p className="text-3xl font-bold mt-3">

                    {score}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Recommendation Timeline */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Recommendation Timeline

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Recommendation</th>
                  <th className="p-4 text-left">Priority</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Revise Indian Constitution</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Completed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Attempt Adaptive Mock Test</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Scheduled</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Learning Activity Audit */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Learning Activity Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Study plan generated",
              "Adaptive quiz assigned",
              "Revision schedule updated",
              "Weak-topic reinforcement completed",
              "Resource recommendation refreshed",
              "Achievement badge awarded",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-4 hover:bg-gray-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Personalized Learning Report

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

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

              <p>GET /api/v1/learning/profile</p>
              <p>POST /api/v1/learning/generate-plan</p>
              <p>POST /api/v1/learning/adaptive-quiz</p>
              <p>POST /api/v1/learning/revision-schedule</p>
              <p>POST /api/v1/learning/recommendations</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/learning/analytics</p>
              <p>GET /api/v1/learning/history</p>
              <p>POST /api/v1/learning/export/pdf</p>
              <p>POST /api/v1/learning/export/excel</p>
              <p>POST /api/v1/learning/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}