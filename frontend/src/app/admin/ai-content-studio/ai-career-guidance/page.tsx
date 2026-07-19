"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Briefcase,
  Building2,
  GraduationCap,
  Target,
  Trophy,
  Award,
  Calendar,
  Search,
  Filter,
  Settings,
  TrendingUp,
  Users,
  Wallet,
  MapPin,
  Sparkles,
} from "lucide-react";

interface CareerRecommendation {
  id: string;
  candidate: string;
  exam: string;
  recommendedPost: string;
  department: string;
  salary: string;
  match: number;
  status: "Excellent" | "Good" | "Average";
}

const recommendations: CareerRecommendation[] = [
  {
    id: "CR001",
    candidate: "Priya",
    exam: "TNPSC Group 4",
    recommendedPost: "Junior Assistant",
    department: "Revenue",
    salary: "₹25,500 - ₹81,100",
    match: 96,
    status: "Excellent",
  },
  {
    id: "CR002",
    candidate: "Arun",
    exam: "TNPSC Group 2",
    recommendedPost: "Assistant Section Officer",
    department: "Secretariat",
    salary: "₹36,400 - ₹1,15,700",
    match: 91,
    status: "Excellent",
  },
];

export default function AICareerGuidancePage() {

  const [search, setSearch] = useState("");

  const filteredRecommendations = useMemo(() => {

    return recommendations.filter((item) =>
      item.candidate.toLowerCase().includes(search.toLowerCase()) ||
      item.exam.toLowerCase().includes(search.toLowerCase()) ||
      item.department.toLowerCase().includes(search.toLowerCase())
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

              AI Career Guidance

            </h1>

            <p className="text-gray-500 mt-2">

              AI recommends the most suitable TNPSC posts,
              departments, career growth opportunities,
              salary insights, and recruitment roadmap.

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

            <Briefcase className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Career Matches

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,428

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Building2 className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Departments

            </p>

            <h2 className="text-4xl font-bold mt-2">

              52

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <TrendingUp className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              AI Match Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.4%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Users className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              Students Guided

            </p>

            <h2 className="text-4xl font-bold mt-2">

              21,350

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Career Recommendation Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Examination

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 1</option>
                <option>TNPSC Group 2</option>
                <option>TNPSC Group 4</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Preferred Department

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Revenue</option>
                <option>Secretariat</option>
                <option>Police</option>
                <option>Rural Development</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Career Goal

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Administration</option>
                <option>Finance</option>
                <option>Education</option>
                <option>Field Service</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Experience Level

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Fresher</option>
                <option>Experienced</option>

              </select>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search candidate, exam or department..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Career Recommendation Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Career Recommendations

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Candidate</th>
                  <th className="p-4 text-left">Exam</th>
                  <th className="p-4 text-left">Recommended Post</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Salary</th>
                  <th className="p-4 text-left">Match</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredRecommendations.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.candidate}</td>
                    <td className="p-4">{item.exam}</td>
                    <td className="p-4">{item.recommendedPost}</td>
                    <td className="p-4">{item.department}</td>
                    <td className="p-4">{item.salary}</td>
                    <td className="p-4">{item.match}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Post Suitability */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Target className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Post Suitability Analysis

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Junior Assistant", "98%"],
              ["Assistant Section Officer", "95%"],
              ["VAO", "92%"],
              ["Revenue Inspector", "89%"],
            ].map(([post, score]) => (

              <div
                key={post}
                className="border rounded-xl p-6 hover:bg-indigo-50"
              >

                <h3 className="font-semibold">

                  {post}

                </h3>

                <div className="mt-4 bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: score }}
                  />

                </div>

                <p className="mt-3 text-3xl font-bold">

                  {score}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Department Comparison */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Department Comparison

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Work-Life Balance</th>
                  <th className="p-4 text-left">Promotion</th>
                  <th className="p-4 text-left">Field Work</th>
                  <th className="p-4 text-left">AI Match</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["Revenue","★★★★☆","High","Medium","96%"],
                  ["Secretariat","★★★★★","Excellent","Low","95%"],
                  ["Police","★★★☆☆","High","High","82%"],
                  ["Rural Development","★★★★☆","Good","Medium","90%"],
                ].map((dept)=>(

                  <tr
                    key={dept[0]}
                    className="border-t hover:bg-gray-50"
                  >

                    {dept.map((item,index)=>(

                      <td key={index} className="p-4">

                        {item}

                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Salary Comparison */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Wallet className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Salary & Benefits

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Basic Pay","₹25,500"],
                ["DA","₹12,300"],
                ["HRA","₹4,500"],
                ["Medical","₹1,000"],
                ["Gross Salary","₹43,300"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{title}</span>

                  <span className="font-semibold">

                    {value}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Career Growth */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <TrendingUp className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Promotion Timeline

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                "Junior Assistant",
                "Assistant",
                "Superintendent",
                "Deputy Section Officer",
                "Section Officer",
              ].map((role,index)=>(

                <div
                  key={role}
                  className="flex gap-4 items-center"
                >

                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">

                    {index+1}

                  </div>

                  <div className="border rounded-lg flex-1 p-4">

                    {role}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Eligibility Checker */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Eligibility Checker

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Age Eligibility",
              "Educational Qualification",
              "Community Reservation",
              "Physical Standards",
              "Certificate Verification",
              "Document Checklist",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-4 flex items-center gap-3 hover:bg-green-50"
              >

                <Award className="text-green-600"/>

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Recruitment Calendar */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Calendar className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Recruitment Calendar

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Notification","January"],
                ["Application","February"],
                ["Hall Ticket","May"],
                ["Examination","June"],
                ["Results","September"],
              ].map(([stage,date])=>(

                <div
                  key={stage}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{stage}</span>

                  <span className="font-semibold">

                    {date}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Posting Locations */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <MapPin className="text-red-500"/>

              <h2 className="text-xl font-bold">

                Posting Preferences

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Chennai",
                "Coimbatore",
                "Madurai",
                "Tiruchirappalli",
                "Thoothukudi",
                "Salem",
              ].map((city)=>(

                <div
                  key={city}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {city}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Personalized Career Roadmap */}

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow mt-8 text-white">

          <div className="p-8">

            <h2 className="text-3xl font-bold">

              AI Personalized Career Roadmap

            </h2>

            <p className="mt-4 text-indigo-100">

              Based on your TNPSC preparation, academic background,
              performance, and career interests, AI recommends focusing
              on Revenue Department opportunities with continuous mock
              tests, interview preparation, and document readiness to
              maximize your selection chances.

            </p>

            <button className="mt-6 bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold">

              Generate Career Roadmap

            </button>

          </div>

        </div>

                {/* Career Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Career Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Career Reports","12,584"],
              ["Placement Readiness","91%"],
              ["Department Matches","52"],
              ["AI Recommendation Accuracy","98.6%"],
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

        {/* Career Trend & Top Careers */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Career Growth Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["2026","72%"],
                ["2027","80%"],
                ["2028","88%"],
                ["2029","93%"],
                ["2030","97%"],
              ].map(([year,value])=>(

                <div key={year}>

                  <div className="flex justify-between mb-2">

                    <span>{year}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Trophy className="text-yellow-500"/>

              <h2 className="text-xl font-bold">

                Top Career Recommendations

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Junior Assistant","98%"],
                ["Assistant Section Officer","96%"],
                ["Revenue Inspector","94%"],
                ["VAO","93%"],
                ["Executive Officer","91%"],
              ].map(([role,score],index)=>(

                <div
                  key={role}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <div className="flex items-center gap-3">

                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold">

                      {index+1}

                    </span>

                    <span>{role}</span>

                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                    {score}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Career Recommendation History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Career Recommendation History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Candidate</th>
                  <th className="p-4 text-left">Recommended Post</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Match</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredRecommendations.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">19 Jul 2026</td>
                    <td className="p-4">{item.candidate}</td>
                    <td className="p-4">{item.recommendedPost}</td>
                    <td className="p-4">{item.department}</td>
                    <td className="p-4">{item.match}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Career Reports

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

        {/* Backend API Endpoints */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>GET /api/v1/career/dashboard</p>
              <p>GET /api/v1/career/recommendations</p>
              <p>POST /api/v1/career/analyze</p>
              <p>GET /api/v1/career/history</p>
              <p>GET /api/v1/career/analytics</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/career/export/pdf</p>
              <p>POST /api/v1/career/export/excel</p>
              <p>POST /api/v1/career/export/csv</p>
              <p>GET /api/v1/career/departments</p>
              <p>GET /api/v1/career/recruitment-calendar</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}