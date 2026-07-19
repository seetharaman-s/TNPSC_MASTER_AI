"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Search,
  Filter,
  Settings,
  Target,
  Users,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  TrendingUp,
  Bookmark,
} from "lucide-react";

interface JobNotification {
  id: string;
  department: string;
  post: string;
  vacancies: number;
  lastDate: string;
  examDate: string;
  eligibility: string;
  location: string;
  aiMatch: number;
  status: "Open" | "Closing Soon" | "Closed";
}

const notifications: JobNotification[] = [
  {
    id: "JOB001",
    department: "Revenue Department",
    post: "Junior Assistant",
    vacancies: 2500,
    lastDate: "25 Aug 2026",
    examDate: "15 Oct 2026",
    eligibility: "Any Degree",
    location: "Tamil Nadu",
    aiMatch: 97,
    status: "Open",
  },
  {
    id: "JOB002",
    department: "Secretariat",
    post: "Assistant Section Officer",
    vacancies: 640,
    lastDate: "05 Sep 2026",
    examDate: "22 Nov 2026",
    eligibility: "Degree",
    location: "Chennai",
    aiMatch: 93,
    status: "Closing Soon",
  },
];

export default function AIJobNotificationCenterPage() {

  const [search, setSearch] = useState("");

  const filteredNotifications = useMemo(() => {

    return notifications.filter((job) =>
      job.department.toLowerCase().includes(search.toLowerCase()) ||
      job.post.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Bell className="text-indigo-600" />

              AI Job Notification Center

            </h1>

            <p className="text-gray-500 mt-2">

              Live TNPSC and Tamil Nadu Government recruitment tracking,
              AI eligibility matching, vacancy analytics,
              reminders, and personalized job recommendations.

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

            <Briefcase className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Active Notifications

            </p>

            <h2 className="text-4xl font-bold mt-2">

              164

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Building2 className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Departments

            </p>

            <h2 className="text-4xl font-bold mt-2">

              58

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Users className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Vacancies

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18,420

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Match Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98.8%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Notification Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Exam

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

                Department

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Departments</option>
                <option>Revenue</option>
                <option>Police</option>
                <option>Secretariat</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Notification Status

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Open</option>
                <option>Closing Soon</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Matching

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>90%+</option>
                <option>80%+</option>
                <option>70%+</option>

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
                placeholder="Search job notifications..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Notification Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Job Notifications

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Post</th>
                  <th className="p-4 text-left">Vacancies</th>
                  <th className="p-4 text-left">Last Date</th>
                  <th className="p-4 text-left">AI Match</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredNotifications.map((job)=>(

                  <tr
                    key={job.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{job.department}</td>
                    <td className="p-4">{job.post}</td>
                    <td className="p-4">{job.vacancies}</td>
                    <td className="p-4">{job.lastDate}</td>
                    <td className="p-4">{job.aiMatch}%</td>
                    <td className="p-4">{job.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Personalized Job Alerts */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Bell className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              AI Personalized Job Alerts

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              ["Revenue Department", "97% Match", "Junior Assistant"],
              ["Secretariat", "95% Match", "Assistant Section Officer"],
              ["Municipal Administration", "93% Match", "Assistant"],
              ["Rural Development", "91% Match", "Village Assistant"],
            ].map(([dept, match, post]) => (

              <div
                key={dept}
                className="border rounded-xl p-5 hover:border-indigo-300"
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold text-lg">

                      {dept}

                    </h3>

                    <p className="text-gray-500">

                      {post}

                    </p>

                  </div>

                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">

                    {match}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* AI Eligibility Checker */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <CheckCircle2 className="text-green-600" />

            <h2 className="text-2xl font-bold">

              AI Eligibility Checker

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              ["Age Eligibility", "Eligible"],
              ["Educational Qualification", "Eligible"],
              ["Community Reservation", "Verified"],
              ["Certificate Verification", "Completed"],
              ["Nationality", "Eligible"],
              ["Experience", "Not Required"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="border rounded-xl p-5"
              >

                <h3 className="font-semibold">

                  {title}

                </h3>

                <p className="mt-3 text-green-600 font-bold">

                  {value}

                </p>

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

                Recruitment Timeline

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Notification","10 Aug 2026"],
                ["Application Opens","15 Aug 2026"],
                ["Application Ends","05 Sep 2026"],
                ["Hall Ticket","25 Sep 2026"],
                ["Examination","20 Oct 2026"],
                ["Result","15 Dec 2026"],
              ].map(([title,date])=>(

                <div
                  key={title}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{title}</span>

                  <span className="font-semibold">

                    {date}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Countdown */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Clock className="text-orange-600"/>

              <h2 className="text-xl font-bold">

                Deadline Countdown

              </h2>

            </div>

            <div className="flex flex-col items-center justify-center p-10">

              <Clock className="w-20 h-20 text-orange-500 mb-4"/>

              <p className="text-5xl font-bold">

                18 Days

              </p>

              <p className="text-gray-500 mt-2">

                Remaining for Application Submission

              </p>

            </div>

          </div>

        </div>

        {/* Application Checklist */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Application Checklist

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Passport Size Photograph",
              "Signature Upload",
              "Aadhaar Card",
              "Degree Certificate",
              "Community Certificate",
              "Fee Payment",
              "Preview Application",
              "Final Submission",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-lg p-4 flex items-center gap-3 hover:bg-green-50"
              >

                <CheckCircle2 className="text-green-600"/>

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Saved Jobs & District Vacancies */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Bookmark className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Saved Notifications

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Junior Assistant",
                "Assistant Section Officer",
                "VAO",
                "Revenue Inspector",
              ].map((job)=>(

                <div
                  key={job}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {job}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <MapPin className="text-red-500"/>

              <h2 className="text-xl font-bold">

                District-wise Vacancies

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Chennai","420"],
                ["Coimbatore","310"],
                ["Madurai","255"],
                ["Tiruchirappalli","220"],
                ["Thoothukudi","148"],
                ["Salem","180"],
              ].map(([district,count])=>(

                <div
                  key={district}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{district}</span>

                  <span className="font-semibold">

                    {count}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Vacancy Trends */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Vacancy Trend Analysis

            </h2>

          </div>

          <div className="p-6 space-y-5">

            {[
              ["Revenue Department","2,500"],
              ["Secretariat","640"],
              ["Municipal Administration","850"],
              ["Police","1,120"],
              ["Rural Development","790"],
            ].map(([dept,value])=>(

              <div key={dept}>

                <div className="flex justify-between mb-2">

                  <span>{dept}</span>

                  <span>{value}</span>

                </div>

                <div className="bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{
                      width: `${Math.min(Number(value)/25,100)}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Notification Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Notification Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Total Notifications","164"],
              ["Active Applications","42,815"],
              ["Average AI Match","94.8%"],
              ["Deadline Alerts Sent","12,540"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-indigo-50"
              >

                <h3 className="text-gray-500">

                  {title}

                </h3>

                <p className="text-4xl font-bold mt-3">

                  {value}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Recruitment Trend & Popular Jobs */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Monthly Recruitment Trend

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","24"],
                ["March","37"],
                ["May","58"],
                ["August","91"],
                ["October","74"],
              ].map(([month,value])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{
                        width: `${Math.min(Number(value),100)}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Target className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Most Popular Notifications

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Junior Assistant","18,450 Views"],
                ["VAO","15,320 Views"],
                ["Assistant Section Officer","14,680 Views"],
                ["Revenue Inspector","11,420 Views"],
                ["Executive Officer","10,280 Views"],
              ].map(([job,views],index)=>(

                <div
                  key={job}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <div className="flex items-center gap-3">

                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center font-bold">

                      {index + 1}

                    </span>

                    <span>{job}</span>

                  </div>

                  <span className="text-indigo-600 font-semibold">

                    {views}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Notification History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Notification History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Post</th>
                  <th className="p-4 text-left">Vacancies</th>
                  <th className="p-4 text-left">AI Match</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredNotifications.map((job)=>(

                  <tr
                    key={job.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">19 Jul 2026</td>
                    <td className="p-4">{job.department}</td>
                    <td className="p-4">{job.post}</td>
                    <td className="p-4">{job.vacancies}</td>
                    <td className="p-4">{job.aiMatch}%</td>
                    <td className="p-4">{job.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Notification Reports

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

        {/* Backend API */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl mt-8 p-6 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">

            <div className="space-y-2">

              <p>GET /api/v1/job-notifications/dashboard</p>
              <p>GET /api/v1/job-notifications</p>
              <p>POST /api/v1/job-notifications/analyze</p>
              <p>GET /api/v1/job-notifications/history</p>
              <p>GET /api/v1/job-notifications/trends</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/job-notifications/calendar</p>
              <p>POST /api/v1/job-notifications/export/pdf</p>
              <p>POST /api/v1/job-notifications/export/excel</p>
              <p>POST /api/v1/job-notifications/export/csv</p>
              <p>GET /api/v1/job-notifications/subscriptions</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}