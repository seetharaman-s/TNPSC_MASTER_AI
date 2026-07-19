"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    FileText,
    Wand2,
    Plus,
    Settings,
    Save,
    Eye,
    Download,
    Shuffle,
    BookOpen
} from "lucide-react";

export default function QuestionPaperBuilderPage() {

    const [paperTitle, setPaperTitle] = useState("TNPSC Group IV Model Test");

    const [examType, setExamType] = useState("Group IV");

    const [language, setLanguage] = useState("Tamil");

    const [totalQuestions, setTotalQuestions] = useState(100);

    const [totalMarks, setTotalMarks] = useState(100);

    const [duration, setDuration] = useState(90);

    const [negativeMarking, setNegativeMarking] = useState(false);

    const [shuffleQuestions, setShuffleQuestions] = useState(true);

    const [shuffleOptions, setShuffleOptions] = useState(true);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <FileText />

                            Question Paper Builder

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Create professional TNPSC question papers using AI and predefined blueprints.

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

                {/* Paper Configuration */}

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <Settings size={22} />

                        <h2 className="text-2xl font-bold">

                            Paper Configuration

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div>

                            <label className="block mb-2">

                                Paper Title

                            </label>

                            <input
                                value={paperTitle}
                                onChange={(e)=>setPaperTitle(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">

                                Exam

                            </label>

                            <select
                                value={examType}
                                onChange={(e)=>setExamType(e.target.value)}
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

                                Total Questions

                            </label>

                            <input
                                type="number"
                                value={totalQuestions}
                                onChange={(e)=>setTotalQuestions(Number(e.target.value))}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">

                                Total Marks

                            </label>

                            <input
                                type="number"
                                value={totalMarks}
                                onChange={(e)=>setTotalMarks(Number(e.target.value))}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">

                                Duration (Minutes)

                            </label>

                            <input
                                type="number"
                                value={duration}
                                onChange={(e)=>setDuration(Number(e.target.value))}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={negativeMarking}
                                onChange={(e)=>setNegativeMarking(e.target.checked)}
                            />

                            Enable Negative Marking

                        </label>

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={shuffleQuestions}
                                onChange={(e)=>setShuffleQuestions(e.target.checked)}
                            />

                            Shuffle Questions

                        </label>

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={shuffleOptions}
                                onChange={(e)=>setShuffleOptions(e.target.checked)}
                            />

                            Shuffle Options

                        </label>

                    </div>

                </div>

                "use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    FileText,
    Wand2,
    Plus,
    Settings,
    Save,
    Eye,
    Download,
    Shuffle,
    BookOpen
} from "lucide-react";

export default function QuestionPaperBuilderPage() {

    const [paperTitle, setPaperTitle] = useState("TNPSC Group IV Model Test");

    const [examType, setExamType] = useState("Group IV");

    const [language, setLanguage] = useState("Tamil");

    const [totalQuestions, setTotalQuestions] = useState(100);

    const [totalMarks, setTotalMarks] = useState(100);

    const [duration, setDuration] = useState(90);

    const [negativeMarking, setNegativeMarking] = useState(false);

    const [shuffleQuestions, setShuffleQuestions] = useState(true);

    const [shuffleOptions, setShuffleOptions] = useState(true);

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <FileText />

                            Question Paper Builder

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Create professional TNPSC question papers using AI and predefined blueprints.

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

                {/* Paper Configuration */}

                <div className="bg-white rounded-xl shadow p-6">

                    <div className="flex items-center gap-3 mb-6">

                        <Settings size={22} />

                        <h2 className="text-2xl font-bold">

                            Paper Configuration

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div>

                            <label className="block mb-2">

                                Paper Title

                            </label>

                            <input
                                value={paperTitle}
                                onChange={(e)=>setPaperTitle(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">

                                Exam

                            </label>

                            <select
                                value={examType}
                                onChange={(e)=>setExamType(e.target.value)}
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

                                Total Questions

                            </label>

                            <input
                                type="number"
                                value={totalQuestions}
                                onChange={(e)=>setTotalQuestions(Number(e.target.value))}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">

                                Total Marks

                            </label>

                            <input
                                type="number"
                                value={totalMarks}
                                onChange={(e)=>setTotalMarks(Number(e.target.value))}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2">

                                Duration (Minutes)

                            </label>

                            <input
                                type="number"
                                value={duration}
                                onChange={(e)=>setDuration(Number(e.target.value))}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={negativeMarking}
                                onChange={(e)=>setNegativeMarking(e.target.checked)}
                            />

                            Enable Negative Marking

                        </label>

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={shuffleQuestions}
                                onChange={(e)=>setShuffleQuestions(e.target.checked)}
                            />

                            Shuffle Questions

                        </label>

                        <label className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={shuffleOptions}
                                onChange={(e)=>setShuffleOptions(e.target.checked)}
                            />

                            Shuffle Options

                        </label>

                    </div>

                </div>

                                {/* Live Paper Preview */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold flex items-center gap-2">

                                <Eye size={22} />

                                Live Paper Preview

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Preview the generated question paper before exporting.

                            </p>

                        </div>

                        <button className="border rounded-lg px-5 py-3 flex items-center gap-2">

                            <Eye size={18} />

                            Full Preview

                        </button>

                    </div>

                    <div className="p-8 bg-gray-50">

                        <div className="bg-white rounded-lg border p-8">

                            <h1 className="text-2xl font-bold text-center">

                                {paperTitle}

                            </h1>

                            <div className="grid grid-cols-2 gap-6 mt-6 text-sm">

                                <div>

                                    <p><strong>Exam:</strong> {examType}</p>
                                    <p><strong>Language:</strong> {language}</p>
                                    <p><strong>Total Questions:</strong> {totalQuestions}</p>

                                </div>

                                <div>

                                    <p><strong>Marks:</strong> {totalMarks}</p>
                                    <p><strong>Duration:</strong> {duration} Minutes</p>
                                    <p><strong>Negative Marking:</strong> {negativeMarking ? "Yes" : "No"}</p>

                                </div>

                            </div>

                            <hr className="my-6"/>

                            <div className="space-y-6">

                                <div>

                                    <p className="font-semibold">

                                        1. Who was the founder of the Chola Dynasty?

                                    </p>

                                    <ul className="mt-3 ml-6 space-y-2">

                                        <li>A. Vijayalaya Chola</li>
                                        <li>B. Rajaraja Chola</li>
                                        <li>C. Aditya Chola</li>
                                        <li>D. Karikala Chola</li>

                                    </ul>

                                </div>

                                <div>

                                    <p className="font-semibold">

                                        2. Which Article guarantees Equality before Law?

                                    </p>

                                    <ul className="mt-3 ml-6 space-y-2">

                                        <li>A. Article 12</li>
                                        <li>B. Article 14</li>
                                        <li>C. Article 19</li>
                                        <li>D. Article 21</li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Validation Panel */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Validation Report

                        </h2>

                    </div>

                    <div className="p-6 grid md:grid-cols-2 gap-6">

                        <div className="border rounded-lg p-5">

                            <h3 className="font-semibold text-green-700 mb-3">

                                Validation Passed

                            </h3>

                            <ul className="space-y-2 text-sm">

                                <li>✅ Question count matches blueprint</li>
                                <li>✅ Marks are balanced</li>
                                <li>✅ Difficulty distribution verified</li>
                                <li>✅ No duplicate questions detected</li>
                                <li>✅ Language consistency verified</li>

                            </ul>

                        </div>

                        <div className="border rounded-lg p-5">

                            <h3 className="font-semibold text-orange-700 mb-3">

                                Suggestions

                            </h3>

                            <ul className="space-y-2 text-sm">

                                <li>• Increase Hard questions by 5%</li>
                                <li>• Add one Current Affairs question</li>
                                <li>• Improve Bloom's Analyze distribution</li>

                            </ul>

                        </div>

                    </div>

                </div>

                {/* Export & Template Actions */}

                <div className="bg-white rounded-xl shadow mt-8 p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Export & Template

                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                            <Save size={18} />

                            Save Template

                        </button>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                            <Download size={18} />

                            Export PDF

                        </button>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">

                            Export Answer Key

                        </button>

                        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">

                            Generate A / B / C / D Sets

                        </button>

                    </div>

                </div>

                {/* Advanced Security */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Security Options

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 p-6">

                        <label className="flex items-center gap-3">

                            <input type="checkbox" />

                            Add QR Code

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="checkbox" />

                            Add Watermark

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="checkbox" />

                            Encrypt PDF

                        </label>

                        <label className="flex items-center gap-3">

                            <input type="checkbox" />

                            Candidate Tracking Code

                        </label>

                    </div>

                </div>

                {/* Backend API */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend API Endpoints

                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

                        <div className="space-y-2">

                            <p>POST /api/v1/question-papers/generate</p>

                            <p>POST /api/v1/question-papers/preview</p>

                            <p>POST /api/v1/question-papers/validate</p>

                            <p>POST /api/v1/question-papers/save-template</p>

                            <p>GET /api/v1/question-papers/templates</p>

                        </div>

                        <div className="space-y-2">

                            <p>POST /api/v1/question-papers/export/pdf</p>

                            <p>POST /api/v1/question-papers/export/answer-key</p>

                            <p>POST /api/v1/question-papers/export/sets</p>

                            <p>POST /api/v1/question-papers/qr-code</p>

                            <p>POST /api/v1/question-papers/watermark</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}