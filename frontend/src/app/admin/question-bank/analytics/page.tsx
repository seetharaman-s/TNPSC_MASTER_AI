"use client";

import Link from "next/link";
import {
    ArrowLeft,
    BookOpen,
    BarChart3,
    PieChart,
    TrendingUp,
    FileQuestion,
    Download,
    RefreshCw
} from "lucide-react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart as RePieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid
} from "recharts";

const subjectData = [
    { subject: "History", questions: 2350 },
    { subject: "Polity", questions: 1800 },
    { subject: "Geography", questions: 1450 },
    { subject: "Economy", questions: 1320 },
    { subject: "Science", questions: 2100 },
    { subject: "Tamil", questions: 1950 }
];

const difficultyData = [
    { name: "Easy", value: 4200 },
    { name: "Medium", value: 3600 },
    { name: "Hard", value: 1170 }
];

const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B"
];

export default function QuestionBankAnalyticsPage() {

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Question Bank Analytics

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Analytics & insights for TNPSC Question Repository

                        </p>

                    </div>

                    <div className="flex gap-3">

                        <button
                            className="border rounded-lg px-4 py-2 flex items-center gap-2"
                        >

                            <RefreshCw size={18} />

                            Refresh

                        </button>

                        <button
                            className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                        >

                            <Download size={18} />

                            Export

                        </button>

                        <Link
                            href="/admin/question-bank"
                            className="border rounded-lg px-4 py-2 flex items-center gap-2"
                        >

                            <ArrowLeft size={18} />

                            Back

                        </Link>

                    </div>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <div>

                                <p className="text-gray-500">

                                    Total Questions

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    8,970

                                </h2>

                            </div>

                            <BookOpen className="text-blue-600" size={42}/>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <div>

                                <p className="text-gray-500">

                                    Subjects

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    16

                                </h2>

                            </div>

                            <BarChart3 className="text-green-600" size={42}/>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <div>

                                <p className="text-gray-500">

                                    Exams Covered

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    12

                                </h2>

                            </div>

                            <TrendingUp className="text-purple-600" size={42}/>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between">

                            <div>

                                <p className="text-gray-500">

                                    Pending Review

                                </p>

                                <h2 className="text-4xl font-bold mt-2">

                                    148

                                </h2>

                            </div>

                            <FileQuestion className="text-red-600" size={42}/>

                        </div>

                    </div>

                </div>

                                {/* Charts */}

                <div className="grid lg:grid-cols-2 gap-8 mb-8">

                    {/* Subject-wise Distribution */}

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-bold mb-6">

                            Subject-wise Question Distribution

                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >

                            <BarChart data={subjectData}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="subject" />

                                <YAxis />

                                <Tooltip />

                                <Legend />

                                <Bar
                                    dataKey="questions"
                                    radius={[6,6,0,0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                    {/* Difficulty */}

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-bold mb-6">

                            Difficulty Distribution

                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >

                            <RePieChart>

                                <Pie
                                    data={difficultyData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={120}
                                    label
                                >

                                    {difficultyData.map((_, index)=>(

                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />

                                    ))}

                                </Pie>

                                <Tooltip />

                                <Legend />

                            </RePieChart>

                        </ResponsiveContainer>

                    </div>

                </div>

                {/* Monthly Upload Trend */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <h2 className="text-xl font-bold mb-6">

                        Monthly Upload Trend

                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <BarChart
                            data={[
                                { month:"Jan", uploads:220 },
                                { month:"Feb", uploads:310 },
                                { month:"Mar", uploads:420 },
                                { month:"Apr", uploads:510 },
                                { month:"May", uploads:690 },
                                { month:"Jun", uploads:840 },
                                { month:"Jul", uploads:1030 }
                            ]}
                        >

                            <CartesianGrid strokeDasharray="3 3"/>

                            <XAxis dataKey="month"/>

                            <YAxis/>

                            <Tooltip/>

                            <Legend/>

                            <Bar
                                dataKey="uploads"
                                radius={[5,5,0,0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

                {/* Distribution Cards */}

                <div className="grid md:grid-cols-3 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-lg mb-4">

                            Exam-wise Distribution

                        </h3>

                        <div className="space-y-3">

                            <div className="flex justify-between">

                                <span>Group I</span>

                                <span className="font-semibold">1,540</span>

                            </div>

                            <div className="flex justify-between">

                                <span>Group II</span>

                                <span className="font-semibold">2,060</span>

                            </div>

                            <div className="flex justify-between">

                                <span>Group IV</span>

                                <span className="font-semibold">3,720</span>

                            </div>

                            <div className="flex justify-between">

                                <span>VAO</span>

                                <span className="font-semibold">1,650</span>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-lg mb-4">

                            Language Distribution

                        </h3>

                        <div className="space-y-4">

                            <div>

                                <div className="flex justify-between mb-1">

                                    <span>Tamil</span>

                                    <span>82%</span>

                                </div>

                                <div className="h-2 bg-gray-200 rounded">

                                    <div
                                        className="h-2 bg-green-500 rounded"
                                        style={{width:"82%"}}
                                    />

                                </div>

                            </div>

                            <div>

                                <div className="flex justify-between mb-1">

                                    <span>English</span>

                                    <span>18%</span>

                                </div>

                                <div className="h-2 bg-gray-200 rounded">

                                    <div
                                        className="h-2 bg-blue-500 rounded"
                                        style={{width:"18%"}}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-lg mb-4">

                            Review Status

                        </h3>

                        <div className="space-y-3">

                            <div className="flex justify-between">

                                <span>Published</span>

                                <span className="font-semibold text-green-600">

                                    8,420

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Pending</span>

                                <span className="font-semibold text-yellow-600">

                                    402

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Rejected</span>

                                <span className="font-semibold text-red-600">

                                    148

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                                {/* Most & Least Used Questions */}

                <div className="grid lg:grid-cols-2 gap-8 mb-8">

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-xl font-bold">

                                Most Used Questions

                            </h2>

                        </div>

                        <div className="divide-y">

                            {[
                                {
                                    question:
                                        "Who is known as the Father of the Indian Constitution?",
                                    count: 248
                                },
                                {
                                    question:
                                        "Fundamental Rights were borrowed from?",
                                    count: 221
                                },
                                {
                                    question:
                                        "Largest river in Tamil Nadu?",
                                    count: 205
                                },
                                {
                                    question:
                                        "First Governor General of India?",
                                    count: 197
                                },
                                {
                                    question:
                                        "Which dynasty built Brihadeeswarar Temple?",
                                    count: 184
                                }
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4"
                                >

                                    <p className="text-sm font-medium w-4/5">

                                        {item.question}

                                    </p>

                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                                        {item.count}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-xl font-bold">

                                Least Used Questions

                            </h2>

                        </div>

                        <div className="divide-y">

                            {[
                                {
                                    question:
                                        "Ancient Trade Ports of Tamil Nadu",
                                    count: 2
                                },
                                {
                                    question:
                                        "Rare Sangam Literature Question",
                                    count: 3
                                },
                                {
                                    question:
                                        "Temple Architecture Classification",
                                    count: 4
                                },
                                {
                                    question:
                                        "Rare Biology Classification",
                                    count: 5
                                },
                                {
                                    question:
                                        "Traditional Irrigation Systems",
                                    count: 7
                                }
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4"
                                >

                                    <p className="text-sm font-medium w-4/5">

                                        {item.question}

                                    </p>

                                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">

                                        {item.count}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* Quality Metrics */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <h3 className="text-gray-500">

                            AI Quality Score

                        </h3>

                        <p className="text-4xl font-bold text-green-600 mt-3">

                            96%

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <h3 className="text-gray-500">

                            Duplicate Rate

                        </h3>

                        <p className="text-4xl font-bold text-yellow-600 mt-3">

                            1.8%

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <h3 className="text-gray-500">

                            Approval Rate

                        </h3>

                        <p className="text-4xl font-bold text-blue-600 mt-3">

                            98%

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <h3 className="text-gray-500">

                            Average Review Time

                        </h3>

                        <p className="text-4xl font-bold text-purple-600 mt-3">

                            3.2h

                        </p>

                    </div>

                </div>

                {/* Top Contributors */}

                <div className="bg-white rounded-xl shadow mb-8">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold">

                            Top Contributors

                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Rank</th>

                                    <th className="text-left p-4">Contributor</th>

                                    <th className="text-left p-4">Questions Added</th>

                                    <th className="text-left p-4">Approval Rate</th>

                                </tr>

                            </thead>

                            <tbody>

                                {[
                                    ["1", "Admin", "3,240", "99%"],
                                    ["2", "Content Team", "2,845", "98%"],
                                    ["3", "Reviewer A", "1,620", "97%"],
                                    ["4", "Reviewer B", "1,120", "96%"],
                                    ["5", "AI Generator", "145", "95%"]
                                ].map((row, index) => (

                                    <tr
                                        key={index}
                                        className="border-t"
                                    >

                                        <td className="p-4">{row[0]}</td>
                                        <td className="p-4">{row[1]}</td>
                                        <td className="p-4">{row[2]}</td>
                                        <td className="p-4">{row[3]}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Export Reports */}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white mb-12">

                    <h2 className="text-2xl font-bold mb-3">

                        Export Analytics Reports

                    </h2>

                    <p className="opacity-90 mb-6">

                        Generate comprehensive reports for management and administrators.

                    </p>

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">

                            Export PDF

                        </button>

                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">

                            Export Excel

                        </button>

                        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">

                            Export CSV

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}