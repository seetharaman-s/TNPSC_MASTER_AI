"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Search,
    RefreshCw,
    Copy,
    Trash2,
    GitMerge,
    Filter,
    AlertTriangle
} from "lucide-react";

interface DuplicateQuestion {

    id: number;

    similarity: number;

    question1: string;

    question2: string;

    subject: string;

    language: string;

    status: "Pending" | "Merged" | "Ignored";

}

const duplicateData: DuplicateQuestion[] = [

    {

        id: 1,

        similarity: 98,

        subject: "History",

        language: "English",

        status: "Pending",

        question1:
            "Who founded the Chola Dynasty?",

        question2:
            "Who was the founder of the Chola dynasty?"

    },

    {

        id: 2,

        similarity: 95,

        subject: "Polity",

        language: "Tamil",

        status: "Pending",

        question1:
            "இந்திய அரசியலமைப்பின் முகவுரை என்ன?",

        question2:
            "இந்திய அரசியலமைப்பின் முகவுரை எதைக் குறிக்கிறது?"

    },

    {

        id: 3,

        similarity: 91,

        subject: "Science",

        language: "English",

        status: "Pending",

        question1:
            "Which gas is most abundant in Earth's atmosphere?",

        question2:
            "Which gas is present in the highest percentage in the atmosphere?"

    }

];

export default function DuplicateDetectionPage() {

    const [search, setSearch] = useState("");

    const [minimumSimilarity, setMinimumSimilarity] = useState(90);

    const filtered = useMemo(() => {

        return duplicateData.filter(item => {

            const matchesSearch =
                item.question1.toLowerCase().includes(search.toLowerCase()) ||
                item.question2.toLowerCase().includes(search.toLowerCase()) ||
                item.subject.toLowerCase().includes(search.toLowerCase());

            return matchesSearch &&
                item.similarity >= minimumSimilarity;

        });

    }, [search, minimumSimilarity]);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Duplicate Detection

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Review similar questions and keep your TNPSC question bank clean.

                        </p>

                    </div>

                    <div className="flex gap-3">

                        <button
                            className="border rounded-lg px-4 py-2 flex items-center gap-2"
                        >

                            <RefreshCw size={18}/>

                            Scan Again

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

                {/* Summary Cards */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Possible Duplicates

                        </p>

                        <h2 className="text-4xl font-bold mt-2">

                            248

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            High Similarity (&gt;95%)

                        </p>

                        <h2 className="text-4xl font-bold text-red-600 mt-2">

                            82

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Already Merged

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-2">

                            134

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Ignored

                        </p>

                        <h2 className="text-4xl font-bold text-yellow-600 mt-2">

                            32

                        </h2>

                    </div>

                </div>

                {/* Search & Filters */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <div className="grid lg:grid-cols-3 gap-4">

                        <div className="relative">

                            <Search
                                size={18}
                                className="absolute left-3 top-3 text-gray-400"
                            />

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search duplicate questions..."
                                className="w-full border rounded-lg pl-10 pr-4 py-3"
                            />

                        </div>

                        <div>

                            <label className="block text-sm mb-2">

                                Minimum Similarity

                            </label>

                            <input
                                type="range"
                                min={50}
                                max={100}
                                value={minimumSimilarity}
                                onChange={(e)=>
                                    setMinimumSimilarity(Number(e.target.value))
                                }
                                className="w-full"
                            />

                            <p className="text-sm mt-2">

                                {minimumSimilarity}%

                            </p>

                        </div>

                        <button
                            className="border rounded-lg flex items-center justify-center gap-2"
                        >

                            <Filter size={18}/>

                            Advanced Filters

                        </button>

                    </div>

                </div>

                                {/* Duplicate Comparison List */}

                <div className="space-y-8">

                    {filtered.length === 0 ? (

                        <div className="bg-white rounded-xl shadow p-16 text-center text-gray-500">

                            No duplicate questions found.

                        </div>

                    ) : (

                        filtered.map((item) => (

                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow overflow-hidden"
                            >

                                {/* Header */}

                                <div className="flex justify-between items-center border-b p-6">

                                    <div>

                                        <h2 className="text-xl font-bold">

                                            Duplicate Pair #{item.id}

                                        </h2>

                                        <p className="text-gray-500 mt-1">

                                            {item.subject} • {item.language}

                                        </p>

                                    </div>

                                    <div className="flex items-center gap-3">

                                        <span
                                            className={`px-4 py-2 rounded-full font-semibold ${
                                                item.similarity >= 95
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >

                                            {item.similarity}% Match

                                        </span>

                                        <span className="px-3 py-2 rounded-full bg-blue-100 text-blue-700">

                                            {item.status}

                                        </span>

                                    </div>

                                </div>

                                {/* Comparison */}

                                <div className="grid lg:grid-cols-2 gap-6 p-6">

                                    <div className="border rounded-xl p-5">

                                        <h3 className="font-bold mb-4">

                                            Question A

                                        </h3>

                                        <p className="leading-7">

                                            {item.question1}

                                        </p>

                                    </div>

                                    <div className="border rounded-xl p-5">

                                        <h3 className="font-bold mb-4">

                                            Question B

                                        </h3>

                                        <p className="leading-7">

                                            {item.question2}

                                        </p>

                                    </div>

                                </div>

                                {/* AI Analysis */}

                                <div className="bg-blue-50 border-y border-blue-200 p-6">

                                    <div className="flex items-start gap-3">

                                        <AlertTriangle
                                            className="text-blue-600 mt-1"
                                            size={20}
                                        />

                                        <div>

                                            <h3 className="font-semibold">

                                                AI Duplicate Analysis

                                            </h3>

                                            <p className="text-gray-700 mt-2">

                                                The semantic meaning of both
                                                questions is nearly identical.
                                                Only wording differs, so these
                                                can likely be merged into a
                                                single canonical question after
                                                reviewer confirmation.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                                {/* Actions */}

                                <div className="flex flex-wrap gap-4 p-6">

                                    <button
                                        className="bg-green-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
                                    >

                                        <GitMerge size={18}/>

                                        Merge Questions

                                    </button>

                                    <button
                                        className="border px-5 py-3 rounded-lg flex items-center gap-2"
                                    >

                                        <Copy size={18}/>

                                        Keep Both

                                    </button>

                                    <button
                                        className="bg-red-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"
                                    >

                                        <Trash2 size={18}/>

                                        Delete Duplicate

                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                {/* Bulk Operations */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <h2 className="text-xl font-bold mb-6">

                        Bulk Operations

                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

                            Merge Selected

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Ignore Selected

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Export Report

                        </button>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">

                            Recalculate Similarity

                        </button>

                    </div>

                </div>

                                {/* Merge Preview */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Merge Preview

                        </h2>

                        <p className="text-gray-500 mt-2">

                            Review the final version before merging duplicate questions.

                        </p>

                    </div>

                    <div className="p-6">

                        <div className="border rounded-xl p-5 bg-gray-50">

                            <h3 className="font-semibold mb-3">

                                Final Question

                            </h3>

                            <p>

                                Who was the founder of the Chola Dynasty?

                            </p>

                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">

                            <div>

                                <h4 className="font-semibold mb-3">

                                    Options

                                </h4>

                                <ul className="space-y-2">

                                    <li>A. Vijayalaya Chola</li>
                                    <li>B. Rajaraja Chola</li>
                                    <li>C. Karikala Chola</li>
                                    <li>D. Aditya Chola</li>

                                </ul>

                            </div>

                            <div>

                                <h4 className="font-semibold mb-3">

                                    Merge Result

                                </h4>

                                <ul className="space-y-2 text-sm text-gray-600">

                                    <li>✓ Combined usage statistics</li>
                                    <li>✓ Retained review history</li>
                                    <li>✓ Removed duplicate entry</li>
                                    <li>✓ Preserved version history</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Duplicate Statistics */}

                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Average Similarity

                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">

                            94%

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Auto Merge Eligible

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            76

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Manual Review

                        </p>

                        <h2 className="text-4xl font-bold text-yellow-600 mt-3">

                            172

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Accuracy

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-3">

                            98.4%

                        </h2>

                    </div>

                </div>

                {/* Merge History */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Recent Merge History

                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Date</th>
                                    <th className="text-left p-4">Question ID</th>
                                    <th className="text-left p-4">Similarity</th>
                                    <th className="text-left p-4">Action</th>
                                    <th className="text-left p-4">Reviewer</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr className="border-t">

                                    <td className="p-4">

                                        18 Jul 2026

                                    </td>

                                    <td className="p-4">

                                        Q1021 + Q1058

                                    </td>

                                    <td className="p-4">

                                        98%

                                    </td>

                                    <td className="p-4">

                                        Merged

                                    </td>

                                    <td className="p-4">

                                        Admin

                                    </td>

                                </tr>

                                <tr className="border-t">

                                    <td className="p-4">

                                        17 Jul 2026

                                    </td>

                                    <td className="p-4">

                                        Q998 + Q1004

                                    </td>

                                    <td className="p-4">

                                        95%

                                    </td>

                                    <td className="p-4">

                                        Ignored

                                    </td>

                                    <td className="p-4">

                                        Reviewer A

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Backend Integration */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend API Endpoints

                    </h2>

                    <div className="space-y-2 text-sm font-mono">

                        <p>GET /api/v1/questions/duplicates</p>

                        <p>POST /api/v1/questions/duplicates/scan</p>

                        <p>POST /api/v1/questions/duplicates/merge</p>

                        <p>POST /api/v1/questions/duplicates/ignore</p>

                        <p>DELETE /api/v1/questions/{'{id}'}</p>

                        <p>GET /api/v1/questions/duplicates/history</p>

                    </div>

                </div>

            </div>

        </div>

    );

}