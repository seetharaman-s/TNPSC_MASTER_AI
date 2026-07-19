"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Route,
  Target,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Sparkles,
  Calendar,
  Search,
  Filter,
  Settings,
  Clock,
  Award,
  BarChart3,
  CheckCircle2,
  Star,
} from "lucide-react";

interface LearningPath {
  id: string;
  student: string;
  exam: string;
  currentLevel: "Beginner" | "Intermediate" | "Advanced";
  completion: number;
  nextMilestone: string;
  status: "Active" | "Completed" | "Paused";
}

const learningPaths: LearningPath[] = [
  {
    id: "LP001",
    student: "Priya",
    exam: "TNPSC Group 4",
    currentLevel: "Intermediate",
    completion: 68,
    nextMilestone: "Complete Indian Polity",
    status: "Active",
  },
  {
    id: "LP002",
    student: "Arun",
    exam: "TNPSC Group 2",
    currentLevel: "Advanced",
    completion: 91,
    nextMilestone: "Mock Interview",
    status: "Completed",
  },
];

export default function AILearningPathRecommenderPage() {

  const [search, setSearch] = useState("");

  const filteredPaths = useMemo(() => {
    return learningPaths.filter(
      (path) =>
        path.student.toLowerCase().includes(search.toLowerCase()) ||
        path.exam.toLowerCase().includes(search.toLowerCase())
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

              AI Learning Path Recommender

            </h1>

            <p className="text-gray-500 mt-2">

              AI generates personalized learning roadmaps using student
              performance, weak topics, goals, study history, and
              adaptive recommendations.

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

        {/* KPI Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Route className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Active Learning Paths

            </p>

            <h2 className="text-4xl font-bold mt-2">

              3,248

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <GraduationCap className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Students Guided

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18,532

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Recommendation Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.9%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Average Score Improvement

            </p>

            <h2 className="text-4xl font-bold mt-2">

              +27%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Learning Path Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Target Examination

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>
                <option>TNPSC Group 2</option>
                <option>TNPSC Group 1</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Daily Study Hours

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>2 Hours</option>
                <option>4 Hours</option>
                <option>6 Hours</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Learning Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Adaptive AI</option>
                <option>Visual</option>
                <option>Reading</option>
                <option>Practice Based</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Goal Timeline

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>3 Months</option>
                <option>6 Months</option>
                <option>12 Months</option>

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
                placeholder="Search learning paths..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Learning Path Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Personalized Learning Paths

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
                  <th className="p-4 text-left">Next Milestone</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredPaths.map((path)=>(

                  <tr
                    key={path.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{path.student}</td>
                    <td className="p-4">{path.exam}</td>
                    <td className="p-4">{path.currentLevel}</td>
                    <td className="p-4">{path.completion}%</td>
                    <td className="p-4">{path.nextMilestone}</td>
                    <td className="p-4">{path.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Skill Gap Analysis */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Skill Gap Analysis

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              ["Indian Polity", "72%", "Needs Improvement"],
              ["History", "84%", "Good"],
              ["Science", "61%", "High Priority"],
              ["Current Affairs", "91%", "Excellent"],
            ].map(([subject, score, status]) => (

              <div
                key={subject}
                className="border rounded-xl p-5 hover:border-indigo-300"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-semibold text-lg">

                      {subject}

                    </h3>

                    <p className="text-gray-500">

                      Skill Score

                    </p>

                  </div>

                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">

                    {score}

                  </span>

                </div>

                <p className="mt-4 text-sm text-gray-600">

                  {status}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Personalized Roadmap */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Target className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Personalized Study Roadmap

            </h2>

          </div>

          <div className="p-6 space-y-5">

            {[
              ["Week 1", "Complete Indian Constitution"],
              ["Week 2", "Master Ancient & Medieval History"],
              ["Week 3", "Science + Current Affairs"],
              ["Week 4", "Mock Tests & Revision"],
            ].map(([week, task]) => (

              <div
                key={week}
                className="flex items-center gap-5 border rounded-lg p-5"
              >

                <div className="w-28 font-bold text-indigo-600">

                  {week}

                </div>

                <div className="flex-1">

                  {task}

                </div>

                <CheckCircle2 className="text-green-600"/>

              </div>

            ))}

          </div>

        </div>

        {/* AI Recommendations */}

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Recommended Books

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "TNPSC Samacheer Books",
                "Indian Polity",
                "History Handbook",
                "Science Notes",
              ].map((book)=>(

                <div
                  key={book}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  <BookOpen className="inline mr-2 text-indigo-600"/>

                  {book}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Recommended Notes

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Weekly Current Affairs",
                "Important Articles",
                "Geography Maps",
                "Quick Revision Notes",
              ].map((note)=>(

                <div
                  key={note}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  <CheckCircle2 className="inline mr-2 text-green-600"/>

                  {note}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Recommended Videos

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Indian Constitution",
                "Science Tricks",
                "History Marathon",
                "Current Affairs Analysis",
              ].map((video)=>(

                <div
                  key={video}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  <Star className="inline mr-2 text-yellow-500"/>

                  {video}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Weekly Planner */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Weekly Learning Planner

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Monday","History"],
                ["Tuesday","Science"],
                ["Wednesday","Polity"],
                ["Thursday","Geography"],
                ["Friday","Economics"],
                ["Saturday","Mock Test"],
                ["Sunday","Revision"],
              ].map(([day,subject])=>(

                <div
                  key={day}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{day}</span>

                  <span className="font-semibold">

                    {subject}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Daily Schedule */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Adaptive Daily Schedule

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["06:00 AM","Revision"],
                ["08:00 AM","New Topic"],
                ["02:00 PM","Practice Questions"],
                ["06:00 PM","Mock Test"],
                ["08:00 PM","Review"],
              ].map(([time,task])=>(

                <div
                  key={time}
                  className="flex items-center gap-5 border rounded-lg p-4"
                >

                  <Clock className="text-indigo-600"/>

                  <span className="w-24 font-semibold">

                    {time}

                  </span>

                  <span>{task}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Milestones */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Award className="text-yellow-600"/>

            <h2 className="text-2xl font-bold">

              Learning Milestones

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "🎯 Complete 100 Lessons",
              "📚 Finish All Subjects",
              "🏆 Score Above 90%",
              "⭐ AI Recommended Path Completed",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-6 text-center hover:bg-yellow-50"
              >

                <div className="text-4xl mb-3">

                  {item.split(" ")[0]}

                </div>

                <p className="font-semibold">

                  {item.substring(2)}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Goal Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Goal Progress Tracking

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Overall Progress","76%"],
              ["Lessons Completed","420"],
              ["Tests Finished","82"],
              ["Target Completion","89%"],
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

                {/* Learning Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Learning Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Learning Paths", "3,248"],
              ["Average Progress", "81%"],
              ["Goal Achievement", "92%"],
              ["AI Recommendation Accuracy", "98.9%"],
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

                Monthly Learning Progress

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January", "65%"],
                ["February", "72%"],
                ["March", "81%"],
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

                Learning Leaderboard

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Priya", "99%"],
                ["Arun", "97%"],
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

        {/* Learning History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Learning History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Student</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Completion</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredPaths.map((path) => (

                  <tr
                    key={path.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">19 Jul 2026</td>
                    <td className="p-4">{path.student}</td>
                    <td className="p-4">{path.exam}</td>
                    <td className="p-4">{path.completion}%</td>
                    <td className="p-4">{path.status}</td>

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

              <p>GET /api/v1/learning-path/dashboard</p>
              <p>POST /api/v1/learning-path/generate</p>
              <p>GET /api/v1/learning-path/history</p>
              <p>GET /api/v1/learning-path/recommendations</p>
              <p>GET /api/v1/learning-path/analytics</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/learning-path/export/pdf</p>
              <p>POST /api/v1/learning-path/export/excel</p>
              <p>POST /api/v1/learning-path/export/csv</p>
              <p>GET /api/v1/learning-path/leaderboard</p>
              <p>GET /api/v1/learning-path/milestones</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}