"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Search,
    Plus,
    Tag,
    Filter,
    Sparkles,
    Layers,
    BarChart3,
    Trash2,
    Edit,
    CheckCircle
} from "lucide-react";

interface QuestionTag {
    id: number;
    name: string;
    category: string;
    color: string;
    usage: number;
    aiSuggested: boolean;
}

const tagData: QuestionTag[] = [
    {
        id: 1,
        name: "History",
        category: "Subject",
        color: "bg-blue-100 text-blue-700",
        usage: 1248,
        aiSuggested: false
    },
    {
        id: 2,
        name: "Chola Dynasty",
        category: "Topic",
        color: "bg-green-100 text-green-700",
        usage: 214,
        aiSuggested: true
    },
    {
        id: 3,
        name: "Group IV",
        category: "Exam",
        color: "bg-purple-100 text-purple-700",
        usage: 3960,
        aiSuggested: false
    },
    {
        id: 4,
        name: "Easy",
        category: "Difficulty",
        color: "bg-yellow-100 text-yellow-700",
        usage: 1822,
        aiSuggested: false
    }
];

export default function TagManagerPage() {

    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return tagData.filter(tag =>
            tag.name.toLowerCase().includes(search.toLowerCase()) ||
            tag.category.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <Tag />

                            Tag Manager

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Organize questions using smart tags and AI suggestions.

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

                {/* Dashboard */}

                <div className="grid md:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Total Tags

                        </p>

                        <h2 className="text-4xl font-bold mt-3">

                            684

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            AI Suggested

                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">

                            83

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Categories

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            12

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <p className="text-gray-500">

                            Tagged Questions

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-3">

                            26,412

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
                                placeholder="Search tags..."
                                className="w-full border rounded-lg pl-10 pr-4 py-3"
                            />

                        </div>

                        <button className="border rounded-lg px-5 flex items-center gap-2">

                            <Filter size={18}/>

                            Filters

                        </button>

                        <button className="bg-blue-600 text-white rounded-lg px-5 flex items-center gap-2">

                            <Plus size={18}/>

                            New Tag

                        </button>

                    </div>

                </div>

                                {/* Tag Management Table */}

                <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">

                    <div className="p-6 border-b flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Tag Library

                            </h2>

                            <p className="text-gray-500 mt-1">

                                Manage all tags used across the Question Bank.

                            </p>

                        </div>

                        <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">

                            <Sparkles size={18} />

                            AI Auto Tag

                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Tag</th>
                                    <th className="text-left p-4">Category</th>
                                    <th className="text-left p-4">Usage</th>
                                    <th className="text-left p-4">AI</th>
                                    <th className="text-left p-4">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {filtered.map((tag)=>(

                                    <tr
                                        key={tag.id}
                                        className="border-t hover:bg-gray-50"
                                    >

                                        <td className="p-4">

                                            <span
                                                className={`px-3 py-2 rounded-full text-sm font-medium ${tag.color}`}
                                            >

                                                {tag.name}

                                            </span>

                                        </td>

                                        <td className="p-4">

                                            {tag.category}

                                        </td>

                                        <td className="p-4 font-semibold">

                                            {tag.usage.toLocaleString()}

                                        </td>

                                        <td className="p-4">

                                            {tag.aiSuggested ? (

                                                <span className="text-green-600 flex items-center gap-2">

                                                    <CheckCircle size={16}/>

                                                    Suggested

                                                </span>

                                            ) : (

                                                <span className="text-gray-400">

                                                    —

                                                </span>

                                            )}

                                        </td>

                                        <td className="p-4">

                                            <div className="flex gap-2">

                                                <button
                                                    className="border rounded-lg p-2"
                                                    title="Edit Tag"
                                                >

                                                    <Edit size={16}/>

                                                </button>

                                                <button
                                                    className="border rounded-lg p-2 text-red-600"
                                                    title="Delete Tag"
                                                >

                                                    <Trash2 size={16}/>

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* AI Suggested Tags */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold flex items-center gap-3">

                            <Sparkles className="text-indigo-600"/>

                            AI Suggested Tags

                        </h2>

                    </div>

                    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {[
                            "Indian Constitution",
                            "Ancient Tamil Nadu",
                            "Freedom Movement",
                            "Economics",
                            "Environment",
                            "Current Affairs"
                        ].map((item)=>(

                            <div
                                key={item}
                                className="border rounded-xl p-5 hover:border-indigo-500 transition"
                            >

                                <h3 className="font-semibold">

                                    {item}

                                </h3>

                                <p className="text-gray-500 mt-2 text-sm">

                                    Suggested based on question semantics.

                                </p>

                                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg">

                                    Apply Tag

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Tag Hierarchy */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold flex items-center gap-3">

                            <Layers />

                            Tag Hierarchy

                        </h2>

                    </div>

                    <div className="p-8">

                        <div className="space-y-4">

                            <div className="font-semibold">

                                📚 Subject

                            </div>

                            <div className="ml-6">

                                ├── History

                            </div>

                            <div className="ml-12">

                                ├── Medieval India

                            </div>

                            <div className="ml-20">

                                ├── Chola Dynasty

                            </div>

                            <div className="ml-28">

                                └── Vijayalaya Chola

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bulk Operations */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Bulk Tag Operations

                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-green-600 text-white px-5 py-3 rounded-lg">

                            Assign Selected Tags

                        </button>

                        <button className="bg-yellow-600 text-white px-5 py-3 rounded-lg">

                            Remove Selected Tags

                        </button>

                        <button className="bg-purple-600 text-white px-5 py-3 rounded-lg">

                            Merge Tags

                        </button>

                        <button className="border px-5 py-3 rounded-lg">

                            Export Tags

                        </button>

                    </div>

                </div>

                                {/* Tag Analytics */}

                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <BarChart3 className="mx-auto text-blue-600 mb-3" size={30} />

                        <p className="text-gray-500">

                            Most Used Tag

                        </p>

                        <h2 className="text-xl font-bold mt-2">

                            Group IV

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            3,960 Questions

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <Tag className="mx-auto text-green-600 mb-3" size={30} />

                        <p className="text-gray-500">

                            Least Used Tag

                        </p>

                        <h2 className="text-xl font-bold mt-2">

                            Sangam Ports

                        </h2>

                        <p className="text-sm text-gray-500 mt-1">

                            8 Questions

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <Sparkles className="mx-auto text-purple-600 mb-3" size={30} />

                        <p className="text-gray-500">

                            AI Accuracy

                        </p>

                        <h2 className="text-4xl font-bold text-purple-600 mt-2">

                            96.8%

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <Layers className="mx-auto text-orange-600 mb-3" size={30} />

                        <p className="text-gray-500">

                            Active Categories

                        </p>

                        <h2 className="text-4xl font-bold text-orange-600 mt-2">

                            12

                        </h2>

                    </div>

                </div>

                {/* Duplicate Tag Detection */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Duplicate Tag Detection

                            </h2>

                            <p className="text-gray-500 mt-2">

                                AI has detected similar tags that can be merged.

                            </p>

                        </div>

                        <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg">

                            Auto Merge

                        </button>

                    </div>

                    <div className="divide-y">

                        {[
                            {
                                tag1: "Indian Economy",
                                tag2: "Economics",
                                confidence: "98%"
                            },
                            {
                                tag1: "History",
                                tag2: "Indian History",
                                confidence: "94%"
                            },
                            {
                                tag1: "Current Affairs",
                                tag2: "Current Events",
                                confidence: "96%"
                            }
                        ].map((item, index)=>(

                            <div
                                key={index}
                                className="p-6 flex justify-between items-center flex-wrap gap-4"
                            >

                                <div>

                                    <h3 className="font-semibold">

                                        {item.tag1}

                                        <span className="mx-2 text-gray-400">

                                            ↔

                                        </span>

                                        {item.tag2}

                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">

                                        Similarity Confidence: {item.confidence}

                                    </p>

                                </div>

                                <button className="bg-green-600 text-white px-5 py-2 rounded-lg">

                                    Merge

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Backend Integration */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend API Endpoints

                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

                        <div className="space-y-2">

                            <p>GET /api/v1/tags</p>

                            <p>POST /api/v1/tags</p>

                            <p>PUT /api/v1/tags/{'{id}'}</p>

                            <p>DELETE /api/v1/tags/{'{id}'}</p>

                            <p>GET /api/v1/tags/categories</p>

                        </div>

                        <div className="space-y-2">

                            <p>POST /api/v1/tags/assign</p>

                            <p>POST /api/v1/tags/remove</p>

                            <p>POST /api/v1/tags/merge</p>

                            <p>POST /api/v1/tags/ai-suggestions</p>

                            <p>GET /api/v1/tags/analytics</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}