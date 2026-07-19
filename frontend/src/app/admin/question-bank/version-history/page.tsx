"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    History,
    Search,
    Filter,
    RotateCcw,
    Eye,
    Clock,
    User,
    GitCompare,
    Download
} from "lucide-react";

interface QuestionVersion {
    id: number;
    questionId: string;
    version: number;
    modifiedBy: string;
    modifiedAt: string;
    action: "Created" | "Updated" | "Approved" | "Rejected" | "Restored";
    summary: string;
}

const versionData: QuestionVersion[] = [
    {
        id: 1,
        questionId: "Q1025",
        version: 5,
        modifiedBy: "Admin",
        modifiedAt: "18 Jul 2026 10:20 AM",
        action: "Updated",
        summary: "Corrected option B and explanation."
    },
    {
        id: 2,
        questionId: "Q0987",
        version: 3,
        modifiedBy: "Reviewer A",
        modifiedAt: "17 Jul 2026 03:15 PM",
        action: "Approved",
        summary: "Question approved after verification."
    },
    {
        id: 3,
        questionId: "Q1208",
        version: 2,
        modifiedBy: "Editor",
        modifiedAt: "16 Jul 2026 09:45 AM",
        action: "Created",
        summary: "Initial version created."
    }
];

export default function VersionHistoryPage() {

    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return versionData.filter(v =>
            v.questionId.toLowerCase().includes(search.toLowerCase()) ||
            v.modifiedBy.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <History />

                            Question Version History

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Track every modification made to questions.

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

                {/* Summary Cards */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Total Versions

                        </p>

                        <h2 className="text-4xl font-bold mt-3">

                            18,462

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Today's Changes

                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">

                            86

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Restored Versions

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            17

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Pending Reviews

                        </p>

                        <h2 className="text-4xl font-bold text-orange-600 mt-3">

                            42

                        </h2>

                    </div>

                </div>

                {/* Search */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <div className="flex flex-wrap gap-4">

                        <div className="flex-1 relative">

                            <Search
                                className="absolute left-3 top-3 text-gray-400"
                                size={18}
                            />

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search Question ID or User..."
                                className="w-full border rounded-lg pl-10 pr-4 py-3"
                            />

                        </div>

                        <button className="border rounded-lg px-5 flex items-center gap-2">

                            <Filter size={18}/>

                            Filters

                        </button>

                    </div>

                </div>

                                {/* Version History Table */}

                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <div className="p-6 border-b flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Version History

                            </h2>

                            <p className="text-gray-500 mt-1">

                                Complete audit trail of all question modifications

                            </p>

                        </div>

                        <button className="border rounded-lg px-4 py-2 flex items-center gap-2">

                            <Download size={18} />

                            Export Audit Log

                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Question</th>
                                    <th className="text-left p-4">Version</th>
                                    <th className="text-left p-4">Modified By</th>
                                    <th className="text-left p-4">Date & Time</th>
                                    <th className="text-left p-4">Action</th>
                                    <th className="text-left p-4">Summary</th>
                                    <th className="text-left p-4">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filtered.map((item) => (

                                    <tr
                                        key={item.id}
                                        className="border-t hover:bg-gray-50"
                                    >

                                        <td className="p-4 font-semibold">

                                            {item.questionId}

                                        </td>

                                        <td className="p-4">

                                            v{item.version}

                                        </td>

                                        <td className="p-4">

                                            <div className="flex items-center gap-2">

                                                <User size={16} />

                                                {item.modifiedBy}

                                            </div>

                                        </td>

                                        <td className="p-4">

                                            <div className="flex items-center gap-2">

                                                <Clock size={16} />

                                                {item.modifiedAt}

                                            </div>

                                        </td>

                                        <td className="p-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium
                                                ${
                                                    item.action === "Created"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : item.action === "Updated"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : item.action === "Approved"
                                                        ? "bg-green-100 text-green-700"
                                                        : item.action === "Rejected"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-purple-100 text-purple-700"
                                                }`}
                                            >

                                                {item.action}

                                            </span>

                                        </td>

                                        <td className="p-4">

                                            {item.summary}

                                        </td>

                                        <td className="p-4">

                                            <div className="flex gap-2">

                                                <button
                                                    className="border rounded-lg p-2"
                                                    title="View Version"
                                                >

                                                    <Eye size={16} />

                                                </button>

                                                <button
                                                    className="border rounded-lg p-2"
                                                    title="Compare Versions"
                                                >

                                                    <GitCompare size={16} />

                                                </button>

                                                <button
                                                    className="border rounded-lg p-2"
                                                    title="Restore Version"
                                                >

                                                    <RotateCcw size={16} />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Timeline */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Activity Timeline

                    </h2>

                    <div className="space-y-6">

                        {filtered.map((item) => (

                            <div
                                key={`timeline-${item.id}`}
                                className="flex gap-5"
                            >

                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">

                                    <History className="text-blue-600" size={20} />

                                </div>

                                <div className="flex-1 border rounded-xl p-5">

                                    <div className="flex justify-between flex-wrap gap-2">

                                        <h3 className="font-semibold">

                                            {item.questionId} — Version {item.version}

                                        </h3>

                                        <span className="text-gray-500 text-sm">

                                            {item.modifiedAt}

                                        </span>

                                    </div>

                                    <p className="mt-2 text-gray-700">

                                        <strong>{item.modifiedBy}</strong> performed{" "}
                                        <strong>{item.action}</strong>.

                                    </p>

                                    <p className="text-gray-500 mt-2">

                                        {item.summary}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Version Comparison */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Side-by-Side Comparison

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Compare two versions before restoring or approving.

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 p-6">

                        <div className="border rounded-xl p-5">

                            <h3 className="font-semibold mb-4">

                                Version 4

                            </h3>

                            <p className="leading-7">

                                Who was the founder of the Chola Dynasty?

                            </p>

                            <ul className="mt-4 space-y-2">

                                <li>A. Vijayalaya Chola</li>
                                <li>B. Rajaraja Chola</li>
                                <li>C. Karikala Chola</li>
                                <li>D. Aditya Chola</li>

                            </ul>

                        </div>

                        <div className="border rounded-xl p-5 bg-green-50">

                            <h3 className="font-semibold mb-4">

                                Version 5

                            </h3>

                            <p className="leading-7">

                                Who established the Chola Dynasty?

                            </p>

                            <ul className="mt-4 space-y-2">

                                <li className="font-semibold text-green-700">
                                    ✓ A. Vijayalaya Chola
                                </li>
                                <li>B. Rajaraja Chola</li>
                                <li>C. Karikala Chola</li>
                                <li>D. Aditya Chola</li>

                            </ul>

                        </div>

                    </div>

                                    {/* Restore Version */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Restore Previous Version

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Restoring a version will create a new revision while preserving the complete history.

                        </p>

                    </div>

                    <div className="p-6 flex flex-wrap gap-4">

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                            <RotateCcw size={18} />

                            Restore Selected Version

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Cancel

                        </button>

                    </div>

                </div>

                {/* Reviewer Comments */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Reviewer Comments

                        </h2>

                    </div>

                    <div className="divide-y">

                        <div className="p-6">

                            <div className="flex justify-between">

                                <h3 className="font-semibold">

                                    Reviewer A

                                </h3>

                                <span className="text-sm text-gray-500">

                                    18 Jul 2026
                                </span>

                            </div>

                            <p className="mt-3 text-gray-700">

                                Corrected the answer option and improved the explanation
                                based on the latest TNPSC syllabus.

                            </p>

                        </div>

                        <div className="p-6">

                            <div className="flex justify-between">

                                <h3 className="font-semibold">

                                    Admin

                                </h3>

                                <span className="text-sm text-gray-500">

                                    17 Jul 2026
                                </span>

                            </div>

                            <p className="mt-3 text-gray-700">

                                Approved after verifying references from the official
                                Tamil Nadu State Board textbook.

                            </p>

                        </div>

                    </div>

                </div>

                {/* Audit Dashboard */}

                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Questions Modified

                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">

                            8,426

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Restores

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            91

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Approvals

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-3">

                            5,214

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Rejections

                        </p>

                        <h2 className="text-4xl font-bold text-red-600 mt-3">

                            284

                        </h2>

                    </div>

                </div>

                {/* Backend API */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend API Endpoints

                    </h2>

                    <div className="space-y-2 text-sm font-mono">

                        <p>GET /api/v1/questions/versions</p>

                        <p>GET /api/v1/questions/{'{id}'}/history</p>

                        <p>GET /api/v1/questions/{'{id}'}/compare</p>

                        <p>POST /api/v1/questions/{'{id}'}/restore</p>

                        <p>GET /api/v1/questions/audit-log</p>

                        <p>GET /api/v1/questions/activity</p>

                        <p>GET /api/v1/questions/reviewer-comments</p>

                        <p>GET /api/v1/questions/version-export</p>

                    </div>

                </div>

            </div>

        </div>

    );

}