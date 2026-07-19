"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Search,
    Filter,
    CheckCircle2,
    XCircle,
    Eye,
    Clock3,
    MessageSquare,
    RefreshCw
} from "lucide-react";

interface ApprovalQuestion {
    id: number;
    question: string;
    subject: string;
    difficulty: string;
    source: "AI" | "Manual" | "Bulk Upload";
    language: string;
    submittedBy: string;
    submittedAt: string;
    status: "Pending" | "Approved" | "Rejected";
}

const sampleQuestions: ApprovalQuestion[] = [
    {
        id: 101,
        question: "Who was the founder of the Chola Dynasty?",
        subject: "History",
        difficulty: "Easy",
        source: "AI",
        language: "English",
        submittedBy: "AI Generator",
        submittedAt: "18 Jul 2026",
        status: "Pending"
    },
    {
        id: 102,
        question: "இந்திய அரசியலமைப்பின் முகவுரை எதைக் குறிக்கிறது?",
        subject: "Polity",
        difficulty: "Medium",
        source: "Manual",
        language: "Tamil",
        submittedBy: "Reviewer A",
        submittedAt: "18 Jul 2026",
        status: "Pending"
    },
    {
        id: 103,
        question: "Match the rivers with their states.",
        subject: "Geography",
        difficulty: "Hard",
        source: "Bulk Upload",
        language: "English",
        submittedBy: "Content Team",
        submittedAt: "17 Jul 2026",
        status: "Pending"
    }
];

export default function QuestionApprovalPage() {

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("Pending");

    const questions = useMemo(() => {

        return sampleQuestions.filter((q) => {

            const matchesSearch =
                q.question.toLowerCase().includes(search.toLowerCase()) ||
                q.subject.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All"
                    ? true
                    : q.status === statusFilter;

            return matchesSearch && matchesStatus;

        });

    }, [search, statusFilter]);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Question Approval

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Review, approve and publish questions.

                        </p>

                    </div>

                    <div className="flex gap-3">

                        <button
                            className="border rounded-lg px-4 py-2 flex items-center gap-2"
                        >

                            <RefreshCw size={18}/>

                            Refresh

                        </button>

                        <Link
                            href="/admin/question-bank"
                            className="border rounded-lg px-4 py-2 flex items-center gap-2"
                        >

                            <ArrowLeft size={18}/>

                            Back

                        </Link>

                    </div>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <Clock3
                            className="text-yellow-500 mb-4"
                            size={36}
                        />

                        <p className="text-gray-500">

                            Pending

                        </p>

                        <h2 className="text-4xl font-bold">

                            148

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <CheckCircle2
                            className="text-green-600 mb-4"
                            size={36}
                        />

                        <p className="text-gray-500">

                            Approved Today

                        </p>

                        <h2 className="text-4xl font-bold">

                            92

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <XCircle
                            className="text-red-600 mb-4"
                            size={36}
                        />

                        <p className="text-gray-500">

                            Rejected

                        </p>

                        <h2 className="text-4xl font-bold">

                            17

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <MessageSquare
                            className="text-blue-600 mb-4"
                            size={36}
                        />

                        <p className="text-gray-500">

                            Needs Review

                        </p>

                        <h2 className="text-4xl font-bold">

                            39

                        </h2>

                    </div>

                </div>

                {/* Search & Filters */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <div className="grid lg:grid-cols-3 gap-4">

                        <div className="relative">

                            <Search
                                className="absolute left-3 top-3 text-gray-400"
                                size={18}
                            />

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search questions..."
                                className="w-full border rounded-lg pl-10 pr-4 py-3"
                            />

                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e)=>setStatusFilter(e.target.value)}
                            className="border rounded-lg p-3"
                        >

                            <option>All</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>

                        </select>

                        <button
                            className="border rounded-lg flex items-center justify-center gap-2"
                        >

                            <Filter size={18}/>

                            More Filters

                        </button>

                    </div>

                </div>

                                {/* Questions Table */}

                <div className="bg-white rounded-xl shadow overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Question</th>

                                    <th className="text-left p-4">Subject</th>

                                    <th className="text-left p-4">Difficulty</th>

                                    <th className="text-left p-4">Source</th>

                                    <th className="text-left p-4">Language</th>

                                    <th className="text-left p-4">Submitted By</th>

                                    <th className="text-left p-4">Status</th>

                                    <th className="text-center p-4">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {questions.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan={8}
                                            className="text-center py-16 text-gray-500"
                                        >

                                            No questions found.

                                        </td>

                                    </tr>

                                ) : (

                                    questions.map((question) => (

                                        <tr
                                            key={question.id}
                                            className="border-t hover:bg-gray-50"
                                        >

                                            <td className="p-4 max-w-md">

                                                <p className="font-medium line-clamp-2">

                                                    {question.question}

                                                </p>

                                            </td>

                                            <td className="p-4">

                                                {question.subject}

                                            </td>

                                            <td className="p-4">

                                                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">

                                                    {question.difficulty}

                                                </span>

                                            </td>

                                            <td className="p-4">

                                                {question.source}

                                            </td>

                                            <td className="p-4">

                                                {question.language}

                                            </td>

                                            <td className="p-4">

                                                <div>

                                                    <p className="font-medium">

                                                        {question.submittedBy}

                                                    </p>

                                                    <p className="text-xs text-gray-500">

                                                        {question.submittedAt}

                                                    </p>

                                                </div>

                                            </td>

                                            <td className="p-4">

                                                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">

                                                    {question.status}

                                                </span>

                                            </td>

                                            <td className="p-4">

                                                <div className="flex justify-center gap-2">

                                                    <button
                                                        className="border rounded-lg p-2"
                                                        title="Preview"
                                                    >

                                                        <Eye size={18} />

                                                    </button>

                                                    <button
                                                        className="bg-green-600 text-white rounded-lg px-3 py-2"
                                                    >

                                                        Approve

                                                    </button>

                                                    <button
                                                        className="bg-red-600 text-white rounded-lg px-3 py-2"
                                                    >

                                                        Reject

                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Reviewer Panel */}

                <div className="grid lg:grid-cols-2 gap-8 mt-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-bold mb-4">

                            Reviewer Comments

                        </h2>

                        <textarea
                            rows={8}
                            placeholder="Write review comments..."
                            className="w-full border rounded-lg p-4"
                        />

                        <div className="flex gap-4 mt-6">

                            <button
                                className="bg-green-600 text-white px-6 py-3 rounded-lg"
                            >

                                Save Comment

                            </button>

                            <button
                                className="border px-6 py-3 rounded-lg"
                            >

                                Clear

                            </button>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="text-xl font-bold mb-4">

                            AI Review Summary

                        </h2>

                        <div className="space-y-4">

                            <div className="flex justify-between">

                                <span>AI Confidence</span>

                                <span className="font-semibold text-green-600">

                                    97%

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Duplicate Risk</span>

                                <span className="font-semibold text-yellow-600">

                                    Low

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Grammar Check</span>

                                <span className="font-semibold text-green-600">

                                    Passed

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Fact Verification</span>

                                <span className="font-semibold text-green-600">

                                    Passed

                                </span>

                            </div>

                            <div className="flex justify-between">

                                <span>Bloom's Level</span>

                                <span className="font-semibold">

                                    Understand

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                                {/* Bulk Actions */}

                <div className="bg-white rounded-xl shadow p-6 mt-8">

                    <div className="flex flex-wrap gap-4">

                        <button
                            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                        >

                            <CheckCircle2 size={18} />

                            Approve Selected

                        </button>

                        <button
                            className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                        >

                            <XCircle size={18} />

                            Reject Selected

                        </button>

                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >

                            Publish Approved

                        </button>

                        <button
                            className="border px-6 py-3 rounded-lg"
                        >

                            Export Review Report

                        </button>

                    </div>

                </div>

                {/* Approval Timeline */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold">

                            Approval Timeline

                        </h2>

                    </div>

                    <div className="p-6 space-y-6">

                        {[
                            {
                                title: "Question Submitted",
                                by: "AI Generator",
                                time: "18 Jul 2026 • 09:30 AM"
                            },
                            {
                                title: "Initial Review Completed",
                                by: "Reviewer A",
                                time: "18 Jul 2026 • 10:15 AM"
                            },
                            {
                                title: "Pending Final Approval",
                                by: "Senior Reviewer",
                                time: "18 Jul 2026 • 11:00 AM"
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="flex gap-4"
                            >

                                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2" />

                                <div>

                                    <h3 className="font-semibold">

                                        {item.title}

                                    </h3>

                                    <p className="text-gray-500">

                                        {item.by}

                                    </p>

                                    <p className="text-sm text-gray-400">

                                        {item.time}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Version History */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold">

                            Version History

                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">

                                        Version

                                    </th>

                                    <th className="text-left p-4">

                                        Updated By

                                    </th>

                                    <th className="text-left p-4">

                                        Date

                                    </th>

                                    <th className="text-left p-4">

                                        Changes

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr className="border-t">

                                    <td className="p-4">

                                        v1.2

                                    </td>

                                    <td className="p-4">

                                        Reviewer A

                                    </td>

                                    <td className="p-4">

                                        18 Jul 2026

                                    </td>

                                    <td className="p-4">

                                        Corrected answer options

                                    </td>

                                </tr>

                                <tr className="border-t">

                                    <td className="p-4">

                                        v1.1

                                    </td>

                                    <td className="p-4">

                                        AI Generator

                                    </td>

                                    <td className="p-4">

                                        18 Jul 2026

                                    </td>

                                    <td className="p-4">

                                        Initial generation

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Audit Log */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold">

                            Audit Log

                        </h2>

                    </div>

                    <div className="p-6">

                        <ul className="space-y-3 text-sm">

                            <li>

                                ✅ AI Generator created question.

                            </li>

                            <li>

                                ✅ Reviewer A added comments.

                            </li>

                            <li>

                                ⏳ Awaiting Senior Reviewer approval.

                            </li>

                            <li>

                                📤 Ready for publishing after approval.

                            </li>

                        </ul>

                    </div>

                </div>

                {/* Backend Integration */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend API Endpoints

                    </h2>

                    <div className="space-y-2 text-sm font-mono">

                        <p>GET /api/v1/questions/pending</p>

                        <p>POST /api/v1/questions/{'{id}'}/approve</p>

                        <p>POST /api/v1/questions/{'{id}'}/reject</p>

                        <p>POST /api/v1/questions/bulk-approve</p>

                        <p>POST /api/v1/questions/publish</p>

                        <p>GET /api/v1/questions/{'{id}'}/history</p>

                        <p>GET /api/v1/questions/{'{id}'}/audit</p>

                    </div>

                </div>

            </div>

        </div>

    );

}