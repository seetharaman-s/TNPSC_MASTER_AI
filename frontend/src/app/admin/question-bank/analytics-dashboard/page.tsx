"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    BarChart3,
    TrendingUp,
    TrendingDown,
    BookOpen,
    Brain,
    Calendar,
    Filter,
    Download,
    RefreshCw
} from "lucide-react";

export default function AnalyticsDashboardPage() {

    const [period, setPeriod] = useState("Last 30 Days");

    const [subject, setSubject] = useState("All Subjects");

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <BarChart3 className="text-blue-600"/>

                            Analytics Dashboard

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Monitor question bank quality, coverage, and student performance.

                        </p>

                    </div>

                    <Link
                        href="/admin/question-bank"
                        className="border rounded-lg px-4 py-2 flex items-center gap-2"
                    >

                        <ArrowLeft size={18}/>

                        Back

                    </Link>

                </div>

                {/* Filters */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <div className="grid md:grid-cols-4 gap-4">

                        <select
                            value={period}
                            onChange={(e)=>setPeriod(e.target.value)}
                            className="border rounded-lg p-3"
                        >

                            <option>Today</option>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>This Year</option>

                        </select>

                        <select
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                            className="border rounded-lg p-3"
                        >

                            <option>All Subjects</option>
                            <option>History</option>
                            <option>Polity</option>
                            <option>Geography</option>
                            <option>Economy</option>
                            <option>Science</option>
                            <option>Tamil</option>

                        </select>

                        <button className="border rounded-lg p-3 flex justify-center items-center gap-2">

                            <Filter size={18}/>

                            Filter

                        </button>

                        <button className="bg-blue-600 text-white rounded-lg p-3 flex justify-center items-center gap-2">

                            <RefreshCw size={18}/>

                            Refresh

                        </button>

                    </div>

                </div>

                {/* KPI Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <BookOpen className="text-blue-600"/>

                            <TrendingUp className="text-green-600"/>

                        </div>

                        <p className="text-gray-500 mt-4">

                            Total Questions

                        </p>

                        <h2 className="text-4xl font-bold mt-2">

                            26,412

                        </h2>

                        <p className="text-green-600 mt-3 text-sm">

                            +8.5% this month

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <Brain className="text-purple-600"/>

                            <TrendingUp className="text-green-600"/>

                        </div>

                        <p className="text-gray-500 mt-4">

                            AI Accuracy

                        </p>

                        <h2 className="text-4xl font-bold mt-2">

                            96.8%

                        </h2>

                        <p className="text-green-600 mt-3 text-sm">

                            +2.1%

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <Calendar className="text-orange-600"/>

                            <TrendingDown className="text-red-600"/>

                        </div>

                        <p className="text-gray-500 mt-4">

                            Pending Review

                        </p>

                        <h2 className="text-4xl font-bold mt-2">

                            142

                        </h2>

                        <p className="text-red-600 mt-3 text-sm">

                            -12 Today

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <BarChart3 className="text-green-600"/>

                            <TrendingUp className="text-green-600"/>

                        </div>

                        <p className="text-gray-500 mt-4">

                            Question Usage

                        </p>

                        <h2 className="text-4xl font-bold mt-2">

                            92%

                        </h2>

                        <p className="text-green-600 mt-3 text-sm">

                            Excellent Coverage

                        </p>

                    </div>

                </div>

                                {/* Subject-wise Analytics */}

                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-2xl font-bold">

                                Subject-wise Coverage

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Question distribution across subjects.

                            </p>

                        </div>

                        <div className="p-6 space-y-6">

                            {[
                                { subject: "History", value: 86 },
                                { subject: "Polity", value: 94 },
                                { subject: "Geography", value: 78 },
                                { subject: "Science", value: 91 },
                                { subject: "Economy", value: 73 },
                                { subject: "Tamil", value: 98 }
                            ].map((item) => (

                                <div key={item.subject}>

                                    <div className="flex justify-between mb-2">

                                        <span className="font-medium">

                                            {item.subject}

                                        </span>

                                        <span>

                                            {item.value}%

                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-gray-200 rounded-full">

                                        <div
                                            className="h-3 bg-blue-600 rounded-full"
                                            style={{ width: `${item.value}%` }}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Difficulty Distribution */}

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-2xl font-bold">

                                Difficulty Distribution

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Overall balance of question difficulty.

                            </p>

                        </div>

                        <div className="p-6 space-y-6">

                            {[
                                {
                                    level: "Easy",
                                    value: 42,
                                    color: "bg-green-500"
                                },
                                {
                                    level: "Medium",
                                    value: 39,
                                    color: "bg-yellow-500"
                                },
                                {
                                    level: "Hard",
                                    value: 19,
                                    color: "bg-red-500"
                                }
                            ].map((item) => (

                                <div key={item.level}>

                                    <div className="flex justify-between mb-2">

                                        <span>

                                            {item.level}

                                        </span>

                                        <span>

                                            {item.value}%

                                        </span>

                                    </div>

                                    <div className="w-full h-3 bg-gray-200 rounded-full">

                                        <div
                                            className={`h-3 rounded-full ${item.color}`}
                                            style={{ width: `${item.value}%` }}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Chapter Coverage */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Chapter Coverage

                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Subject</th>
                                    <th className="text-left p-4">Chapter</th>
                                    <th className="text-left p-4">Questions</th>
                                    <th className="text-left p-4">Coverage</th>

                                </tr>

                            </thead>

                            <tbody>

                                {[
                                    ["History", "Sangam Age", 145, "96%"],
                                    ["Polity", "Fundamental Rights", 118, "91%"],
                                    ["Science", "Physics", 163, "89%"],
                                    ["Economy", "Budget", 74, "71%"],
                                    ["Tamil", "Grammar", 312, "98%"]
                                ].map((row, index)=>(

                                    <tr
                                        key={index}
                                        className="border-t hover:bg-gray-50"
                                    >

                                        <td className="p-4">{row[0]}</td>

                                        <td className="p-4">{row[1]}</td>

                                        <td className="p-4 font-semibold">

                                            {row[2]}

                                        </td>

                                        <td className="p-4">

                                            {row[3]}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Student Performance Heatmap */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Student Accuracy by Subject

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">

                        {[
                            ["History", 74],
                            ["Polity", 82],
                            ["Geography", 69],
                            ["Science", 61],
                            ["Economy", 66],
                            ["Tamil", 91]
                        ].map(([name, score]) => (

                            <div
                                key={String(name)}
                                className="rounded-xl border p-6 text-center"
                            >

                                <h3 className="font-semibold">

                                    {name}

                                </h3>

                                <p className="text-3xl font-bold mt-4 text-blue-600">

                                    {score}%

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                                {/* Question Usage Insights */}

                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    {/* Most Used Questions */}

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-2xl font-bold">

                                Most Used Questions

                            </h2>

                        </div>

                        <div className="divide-y">

                            {[
                                {
                                    id: "Q1025",
                                    title: "Founder of Chola Dynasty",
                                    usage: 684
                                },
                                {
                                    id: "Q0842",
                                    title: "Article 14",
                                    usage: 641
                                },
                                {
                                    id: "Q2018",
                                    title: "Indian Constitution",
                                    usage: 598
                                },
                                {
                                    id: "Q4412",
                                    title: "Tamil Grammar",
                                    usage: 542
                                }
                            ].map((item)=>(

                                <div
                                    key={item.id}
                                    className="p-5 flex justify-between items-center"
                                >

                                    <div>

                                        <h3 className="font-semibold">

                                            {item.title}

                                        </h3>

                                        <p className="text-sm text-gray-500">

                                            {item.id}

                                        </p>

                                    </div>

                                    <span className="font-bold text-blue-600">

                                        {item.usage}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Least Used Questions */}

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-2xl font-bold">

                                Least Used Questions

                            </h2>

                        </div>

                        <div className="divide-y">

                            {[
                                {
                                    id: "Q9501",
                                    title: "Ancient Trade Routes",
                                    usage: 3
                                },
                                {
                                    id: "Q9144",
                                    title: "River Valley Civilization",
                                    usage: 5
                                },
                                {
                                    id: "Q9018",
                                    title: "Pallava Art",
                                    usage: 8
                                },
                                {
                                    id: "Q8995",
                                    title: "Budget Terminology",
                                    usage: 11
                                }
                            ].map((item)=>(

                                <div
                                    key={item.id}
                                    className="p-5 flex justify-between items-center"
                                >

                                    <div>

                                        <h3 className="font-semibold">

                                            {item.title}

                                        </h3>

                                        <p className="text-sm text-gray-500">

                                            {item.id}

                                        </p>

                                    </div>

                                    <span className="font-bold text-red-600">

                                        {item.usage}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* AI Recommendations */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold flex items-center gap-2">

                            <Brain className="text-indigo-600" />

                            AI Recommendations

                        </h2>

                    </div>

                    <div className="p-6 space-y-4">

                        <div className="border rounded-xl p-5 bg-green-50">

                            ✅ Increase Economy questions by approximately 15% to improve syllabus coverage.

                        </div>

                        <div className="border rounded-xl p-5 bg-yellow-50">

                            ⚠ Science questions have a lower student accuracy rate (61%). Consider adding more medium-level practice questions.

                        </div>

                        <div className="border rounded-xl p-5 bg-blue-50">

                            💡 Several frequently used History questions should be refreshed with new alternatives to reduce repetition.

                        </div>

                        <div className="border rounded-xl p-5 bg-purple-50">

                            🤖 AI suggests creating approximately 120 new Current Affairs questions based on recent trends.

                        </div>

                    </div>

                </div>

                {/* Quality Scorecards */}

                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Quality Score

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            94%

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Duplicate Rate

                        </p>

                        <h2 className="text-4xl font-bold text-red-600 mt-3">

                            1.8%

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            AI Confidence

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-3">

                            96.8%

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Review Completion

                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">

                            99.2%

                        </h2>

                    </div>

                </div>

                {/* Export Analytics */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                            <Download size={18} />

                            Export PDF Report

                        </button>

                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

                            Export Excel

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Schedule Report

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

                            <p>GET /api/v1/analytics/dashboard</p>
                            <p>GET /api/v1/analytics/subjects</p>
                            <p>GET /api/v1/analytics/difficulty</p>
                            <p>GET /api/v1/analytics/chapters</p>
                            <p>GET /api/v1/analytics/question-usage</p>

                        </div>

                        <div className="space-y-2">

                            <p>GET /api/v1/analytics/student-performance</p>
                            <p>GET /api/v1/analytics/recommendations</p>
                            <p>GET /api/v1/analytics/quality-score</p>
                            <p>POST /api/v1/analytics/export</p>
                            <p>POST /api/v1/analytics/schedule-report</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}