"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    LayoutTemplate,
    Plus,
    Search,
    Filter,
    BookOpen,
    GraduationCap,
    Brain,
    Save,
    Eye,
    Copy,
    Settings
} from "lucide-react";

interface Blueprint {
    id: number;
    name: string;
    exam: string;
    questions: number;
    marks: number;
    duration: number;
    status: "Draft" | "Published";
}

const blueprintData: Blueprint[] = [
    {
        id: 1,
        name: "Group IV Standard Blueprint",
        exam: "Group IV",
        questions: 100,
        marks: 100,
        duration: 90,
        status: "Published"
    },
    {
        id: 2,
        name: "Group II Practice Blueprint",
        exam: "Group II",
        questions: 200,
        marks: 300,
        duration: 180,
        status: "Draft"
    },
    {
        id: 3,
        name: "VAO Weekly Test",
        exam: "VAO",
        questions: 50,
        marks: 50,
        duration: 60,
        status: "Published"
    }
];

export default function BlueprintManagerPage() {

    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return blueprintData.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.exam.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <LayoutTemplate className="text-blue-600" />

                            Blueprint Manager

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Design and manage TNPSC paper blueprints with AI-assisted validation.

                        </p>

                    </div>

                    <Link
                        href="/admin/question-bank"
                        className="border rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </Link>

                </div>

                {/* Summary Cards */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Total Blueprints

                        </p>

                        <h2 className="text-4xl font-bold mt-3">

                            42

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Published

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            31

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Drafts

                        </p>

                        <h2 className="text-4xl font-bold text-yellow-600 mt-3">

                            11

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            AI Validated

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-3">

                            96%

                        </h2>

                    </div>

                </div>

                {/* Search & Actions */}

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex flex-wrap gap-4">

                        <div className="flex-1 relative">

                            <Search
                                className="absolute left-3 top-3 text-gray-400"
                                size={18}
                            />

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search blueprint..."
                                className="w-full border rounded-lg pl-10 pr-4 py-3"
                            />

                        </div>

                        <button className="border rounded-lg px-5 flex items-center gap-2">

                            <Filter size={18} />

                            Filters

                        </button>

                        <button className="bg-blue-600 text-white rounded-lg px-5 flex items-center gap-2">

                            <Plus size={18} />

                            New Blueprint

                        </button>

                    </div>

                </div>

                                {/* Blueprint Library */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b flex items-center justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Blueprint Library

                            </h2>

                            <p className="text-gray-500 mt-1">

                                Manage reusable blueprint templates for TNPSC examinations.

                            </p>

                        </div>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Blueprint</th>
                                    <th className="text-left p-4">Exam</th>
                                    <th className="text-left p-4">Questions</th>
                                    <th className="text-left p-4">Marks</th>
                                    <th className="text-left p-4">Duration</th>
                                    <th className="text-left p-4">Status</th>
                                    <th className="text-left p-4">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filtered.map((bp) => (

                                    <tr
                                        key={bp.id}
                                        className="border-t hover:bg-gray-50"
                                    >

                                        <td className="p-4 font-semibold">

                                            {bp.name}

                                        </td>

                                        <td className="p-4">

                                            {bp.exam}

                                        </td>

                                        <td className="p-4">

                                            {bp.questions}

                                        </td>

                                        <td className="p-4">

                                            {bp.marks}

                                        </td>

                                        <td className="p-4">

                                            {bp.duration} mins

                                        </td>

                                        <td className="p-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${
                                                    bp.status === "Published"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }`}
                                            >
                                                {bp.status}
                                            </span>

                                        </td>

                                        <td className="p-4">

                                            <div className="flex gap-2">

                                                <button className="border rounded-lg p-2">

                                                    <Eye size={16} />

                                                </button>

                                                <button className="border rounded-lg p-2">

                                                    <Copy size={16} />

                                                </button>

                                                <button className="border rounded-lg p-2">

                                                    <Settings size={16} />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Blueprint Configuration */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Blueprint Configuration

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Define the syllabus hierarchy and question allocation.

                        </p>

                    </div>

                    <div className="p-6 overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="p-3 text-left">Subject</th>
                                    <th className="p-3 text-left">Unit</th>
                                    <th className="p-3 text-left">Chapter</th>
                                    <th className="p-3 text-left">Weightage (%)</th>
                                    <th className="p-3 text-left">Questions</th>
                                    <th className="p-3 text-left">Marks</th>

                                </tr>

                            </thead>

                            <tbody>

                                {[
                                    ["History", "Ancient", "Sangam Age", 20, 20, 20],
                                    ["Polity", "Constitution", "Fundamental Rights", 25, 25, 25],
                                    ["Science", "Physics", "Mechanics", 15, 15, 15],
                                    ["Economy", "Budget", "Finance", 10, 10, 10],
                                    ["Tamil", "Grammar", "Parts of Speech", 30, 30, 30]
                                ].map((row, index) => (

                                    <tr key={index} className="border-t">

                                        <td className="p-3">{row[0]}</td>

                                        <td className="p-3">{row[1]}</td>

                                        <td className="p-3">{row[2]}</td>

                                        <td className="p-3">{row[3]}%</td>

                                        <td className="p-3">{row[4]}</td>

                                        <td className="p-3">{row[5]}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Difficulty & Bloom's Taxonomy */}

                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-xl font-bold">

                                Difficulty Distribution

                            </h2>

                        </div>

                        <div className="p-6 space-y-5">

                            {[
                                { label: "Easy", value: 40 },
                                { label: "Medium", value: 40 },
                                { label: "Hard", value: 20 }
                            ].map((item) => (

                                <div key={item.label}>

                                    <div className="flex justify-between mb-2">

                                        <span>{item.label}</span>

                                        <span>{item.value}%</span>

                                    </div>

                                    <div className="h-3 bg-gray-200 rounded-full">

                                        <div
                                            className="h-3 rounded-full bg-blue-600"
                                            style={{ width: `${item.value}%` }}
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-xl font-bold flex items-center gap-2">

                                <GraduationCap size={20} />

                                Bloom's Taxonomy

                            </h2>

                        </div>

                        <div className="p-6 grid grid-cols-2 gap-4">

                            {[
                                "Remember",
                                "Understand",
                                "Apply",
                                "Analyze",
                                "Evaluate",
                                "Create"
                            ].map((level) => (

                                <div
                                    key={level}
                                    className="border rounded-lg p-4 text-center"
                                >

                                    <p className="font-medium">

                                        {level}

                                    </p>

                                    <p className="text-2xl font-bold mt-2 text-blue-600">

                                        15%

                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                                {/* AI Blueprint Validator */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b flex items-center gap-3">

                        <Brain className="text-purple-600" />

                        <div>

                            <h2 className="text-2xl font-bold">

                                AI Blueprint Validator

                            </h2>

                            <p className="text-gray-500 mt-1">

                                Validate blueprint completeness and TNPSC syllabus alignment.

                            </p>

                        </div>

                    </div>

                    <div className="p-6 grid md:grid-cols-2 gap-6">

                        <div className="border rounded-xl p-5 bg-green-50">

                            <h3 className="font-semibold text-green-700 mb-3">

                                Validation Passed

                            </h3>

                            <ul className="space-y-2 text-sm">

                                <li>✅ Total marks match exam pattern</li>
                                <li>✅ Question allocation is balanced</li>
                                <li>✅ Difficulty distribution is valid</li>
                                <li>✅ Bloom's taxonomy coverage verified</li>
                                <li>✅ Subject weightage totals 100%</li>

                            </ul>

                        </div>

                        <div className="border rounded-xl p-5 bg-yellow-50">

                            <h3 className="font-semibold text-yellow-700 mb-3">

                                AI Suggestions

                            </h3>

                            <ul className="space-y-2 text-sm">

                                <li>• Increase Economy weightage by 5%.</li>
                                <li>• Add more "Analyze" level questions.</li>
                                <li>• Include recent Current Affairs integration.</li>
                                <li>• Improve Science chapter balance.</li>

                            </ul>

                        </div>

                    </div>

                </div>

                {/* TNPSC Blueprint Templates */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            TNPSC Blueprint Templates

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">

                        {[
                            "Group I",
                            "Group II",
                            "Group IIA",
                            "Group IV",
                            "VAO"
                        ].map((template) => (

                            <div
                                key={template}
                                className="border rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
                            >

                                <BookOpen className="text-blue-600 mb-4" />

                                <h3 className="font-bold text-lg">

                                    {template}

                                </h3>

                                <p className="text-gray-500 text-sm mt-2">

                                    Official blueprint template

                                </p>

                                <button className="mt-5 w-full bg-blue-600 text-white rounded-lg py-2">

                                    Use Template

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Version History */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Version History

                        </h2>

                    </div>

                    <div className="divide-y">

                        {[
                            {
                                version: "v2.3",
                                author: "Admin",
                                date: "18 Jul 2026",
                                status: "Published"
                            },
                            {
                                version: "v2.2",
                                author: "AI Assistant",
                                date: "15 Jul 2026",
                                status: "Archived"
                            },
                            {
                                version: "v2.1",
                                author: "Content Team",
                                date: "08 Jul 2026",
                                status: "Archived"
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

                                        {item.author} • {item.date}

                                    </p>

                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        item.status === "Published"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {item.status}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Actions */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                            <Save size={18} />

                            Save Draft

                        </button>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">

                            Publish Blueprint

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Export JSON

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Export PDF

                        </button>

                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">

                            Open in Question Paper Builder

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

                            <p>GET /api/v1/blueprints</p>
                            <p>POST /api/v1/blueprints</p>
                            <p>PUT /api/v1/blueprints/{"{id}"}</p>
                            <p>DELETE /api/v1/blueprints/{"{id}"}</p>
                            <p>POST /api/v1/blueprints/validate</p>

                        </div>

                        <div className="space-y-2">

                            <p>GET /api/v1/blueprints/templates</p>
                            <p>POST /api/v1/blueprints/clone</p>
                            <p>GET /api/v1/blueprints/history</p>
                            <p>POST /api/v1/blueprints/export</p>
                            <p>POST /api/v1/question-papers/from-blueprint</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}