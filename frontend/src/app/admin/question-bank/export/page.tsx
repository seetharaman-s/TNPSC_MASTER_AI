"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Download,
    FileSpreadsheet,
    FileText,
    FileJson,
    FileArchive,
    Settings,
    Printer
} from "lucide-react";

export default function ExportCenterPage() {

    const [subject, setSubject] = useState("All");

    const [exam, setExam] = useState("Group IV");

    const [difficulty, setDifficulty] = useState("All");

    const [language, setLanguage] = useState("Tamil");

    const [format, setFormat] = useState("PDF");

    const [includeAnswers, setIncludeAnswers] = useState(true);

    const [shuffleQuestions, setShuffleQuestions] = useState(false);

    const [shuffleOptions, setShuffleOptions] = useState(false);

    const [questionCount, setQuestionCount] = useState(100);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Export Center

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Export TNPSC questions, mock tests and reports.

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

                {/* Export Settings */}

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <Settings size={22}/>

                        <h2 className="text-2xl font-bold">

                            Export Configuration

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div>

                            <label className="block mb-2">

                                Subject

                            </label>

                            <select
                                value={subject}
                                onChange={(e)=>setSubject(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>All</option>
                                <option>History</option>
                                <option>Polity</option>
                                <option>Geography</option>
                                <option>Economy</option>
                                <option>Science</option>
                                <option>Tamil</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2">

                                Exam

                            </label>

                            <select
                                value={exam}
                                onChange={(e)=>setExam(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Group I</option>
                                <option>Group II</option>
                                <option>Group IIA</option>
                                <option>Group IV</option>
                                <option>VAO</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2">

                                Difficulty

                            </label>

                            <select
                                value={difficulty}
                                onChange={(e)=>setDifficulty(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>All</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2">

                                Language

                            </label>

                            <select
                                value={language}
                                onChange={(e)=>setLanguage(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Tamil</option>
                                <option>English</option>
                                <option>Bilingual</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2">

                                Export Format

                            </label>

                            <select
                                value={format}
                                onChange={(e)=>setFormat(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>PDF</option>
                                <option>Excel</option>
                                <option>CSV</option>
                                <option>JSON</option>
                                <option>Word</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2">

                                Number of Questions

                            </label>

                            <input
                                type="number"
                                value={questionCount}
                                min={10}
                                max={500}
                                onChange={(e)=>
                                    setQuestionCount(Number(e.target.value))
                                }
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                    </div>

                                        {/* Export Options */}

                    <div className="mt-8 border-t pt-8">

                        <h2 className="text-xl font-bold mb-6">

                            Export Options

                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <label className="flex items-center gap-3">

                                <input
                                    type="checkbox"
                                    checked={includeAnswers}
                                    onChange={(e)=>
                                        setIncludeAnswers(e.target.checked)
                                    }
                                />

                                Include Answer Key

                            </label>

                            <label className="flex items-center gap-3">

                                <input
                                    type="checkbox"
                                    checked={shuffleQuestions}
                                    onChange={(e)=>
                                        setShuffleQuestions(e.target.checked)
                                    }
                                />

                                Shuffle Questions

                            </label>

                            <label className="flex items-center gap-3">

                                <input
                                    type="checkbox"
                                    checked={shuffleOptions}
                                    onChange={(e)=>
                                        setShuffleOptions(e.target.checked)
                                    }
                                />

                                Shuffle Options

                            </label>

                        </div>

                    </div>

                    {/* Mock Test Configuration */}

                    <div className="mt-10 border-t pt-8">

                        <h2 className="text-xl font-bold mb-6">

                            Mock Test Configuration

                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">

                            <div>

                                <label className="block mb-2">

                                    Total Marks

                                </label>

                                <input
                                    type="number"
                                    defaultValue={100}
                                    className="w-full border rounded-lg p-3"
                                />

                            </div>

                            <div>

                                <label className="block mb-2">

                                    Duration (Minutes)

                                </label>

                                <input
                                    type="number"
                                    defaultValue={90}
                                    className="w-full border rounded-lg p-3"
                                />

                            </div>

                            <div>

                                <label className="block mb-2">

                                    Negative Marking

                                </label>

                                <select
                                    className="w-full border rounded-lg p-3"
                                >

                                    <option>None</option>
                                    <option>0.25</option>
                                    <option>0.33</option>
                                    <option>0.50</option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Preview */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Export Preview

                        </h2>

                    </div>

                    <div className="p-8">

                        <div className="border rounded-xl p-8 bg-gray-50">

                            <h2 className="text-2xl font-bold text-center">

                                TNPSC MOCK TEST

                            </h2>

                            <div className="grid grid-cols-2 gap-6 mt-6">

                                <div>

                                    <p>

                                        <strong>Exam:</strong> {exam}

                                    </p>

                                    <p>

                                        <strong>Subject:</strong> {subject}

                                    </p>

                                    <p>

                                        <strong>Language:</strong> {language}

                                    </p>

                                </div>

                                <div>

                                    <p>

                                        <strong>Total Questions:</strong>{" "}

                                        {questionCount}

                                    </p>

                                    <p>

                                        <strong>Answer Key:</strong>{" "}

                                        {includeAnswers ? "Included" : "No"}

                                    </p>

                                    <p>

                                        <strong>Format:</strong> {format}

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Export Buttons */}

                <div className="grid md:grid-cols-5 gap-6 mt-8">

                    <button className="bg-red-600 text-white rounded-xl p-6 flex flex-col items-center gap-3">

                        <FileText size={34}/>

                        Export PDF

                    </button>

                    <button className="bg-green-600 text-white rounded-xl p-6 flex flex-col items-center gap-3">

                        <FileSpreadsheet size={34}/>

                        Export Excel

                    </button>

                    <button className="bg-blue-600 text-white rounded-xl p-6 flex flex-col items-center gap-3">

                        <Download size={34}/>

                        Export CSV

                    </button>

                    <button className="bg-purple-600 text-white rounded-xl p-6 flex flex-col items-center gap-3">

                        <FileJson size={34}/>

                        Export JSON

                    </button>

                    <button className="bg-gray-700 text-white rounded-xl p-6 flex flex-col items-center gap-3">

                        <Printer size={34}/>

                        Print Paper

                    </button>

                </div>

                                {/* Export History */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Export History

                            </h2>

                            <p className="text-gray-500 mt-1">

                                Recent export activities

                            </p>

                        </div>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">

                                        Date

                                    </th>

                                    <th className="text-left p-4">

                                        Format

                                    </th>

                                    <th className="text-left p-4">

                                        Questions

                                    </th>

                                    <th className="text-left p-4">

                                        Exam

                                    </th>

                                    <th className="text-left p-4">

                                        Status

                                    </th>

                                    <th className="text-left p-4">

                                        Action

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr className="border-t">

                                    <td className="p-4">

                                        18 Jul 2026

                                    </td>

                                    <td className="p-4">

                                        PDF

                                    </td>

                                    <td className="p-4">

                                        100

                                    </td>

                                    <td className="p-4">

                                        Group IV

                                    </td>

                                    <td className="p-4">

                                        <span className="text-green-600 font-semibold">

                                            Completed

                                        </span>

                                    </td>

                                    <td className="p-4">

                                        <button className="text-blue-600">

                                            Download

                                        </button>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Scheduled Exports */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Scheduled Exports

                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">

                            Schedule Export

                        </button>

                        <button className="border px-6 py-3 rounded-lg">

                            Manage Schedules

                        </button>

                    </div>

                </div>

                {/* Export Statistics */}

                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Total Exports

                        </p>

                        <h2 className="text-4xl font-bold mt-3">

                            1,248

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            PDFs Generated

                        </p>

                        <h2 className="text-4xl font-bold text-red-600 mt-3">

                            682

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Excel Exports

                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">

                            391

                        </h2>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <p className="text-gray-500">

                            Avg. Export Time

                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">

                            4.8s

                        </h2>

                    </div>

                </div>

                {/* Backend API */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend API Endpoints

                    </h2>

                    <div className="space-y-2 text-sm font-mono">

                        <p>POST /api/v1/export/pdf</p>

                        <p>POST /api/v1/export/excel</p>

                        <p>POST /api/v1/export/csv</p>

                        <p>POST /api/v1/export/json</p>

                        <p>POST /api/v1/export/docx</p>

                        <p>POST /api/v1/export/mock-test</p>

                        <p>GET /api/v1/export/history</p>

                        <p>POST /api/v1/export/schedule</p>

                    </div>

                </div>

            </div>

        </div>

    );

}