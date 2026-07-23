"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Sparkles,
    Wand2,
    Loader2,
    Save,
    RefreshCw
} from "lucide-react";

export default function AIQuestionGeneratorPage() {

    const [subject, setSubject] = useState("History");

    const [topic, setTopic] = useState("");

    const [difficulty, setDifficulty] = useState("Medium");

    const [language, setLanguage] = useState("Tamil");

    const [questionCount, setQuestionCount] = useState(10);

    const [loading, setLoading] = useState(false);

    const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);

    async function generateQuestions() {

        try {

            setLoading(true);

            /*
            Backend API

            POST /ai/question-generator

            {
                subject,
                topic,
                difficulty,
                language,
                count: questionCount
            }

            */

            await new Promise(resolve => setTimeout(resolve, 2000));

            setGeneratedQuestions([
                {
                    question:
                        "தமிழகத்தின் முதல் முதலமைச்சர் யார்?",
                    options: [
                        "ராஜாஜி",
                        "காமராஜர்",
                        "அண்ணாதுரை",
                        "பக்தவத்சலம்"
                    ],
                    answer: 0
                },
                {
                    question:
                        "Which article deals with Fundamental Rights?",
                    options: [
                        "12-35",
                        "36-51",
                        "52-78",
                        "80-90"
                    ],
                    answer: 0
                }
            ]);

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            AI Question Generator

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Generate TNPSC-quality questions using AI.

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

                {/* Configuration */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <h2 className="text-xl font-bold mb-6">

                        Generation Settings

                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div>

                            <label className="block mb-2 font-medium">

                                Subject

                            </label>

                            <select
                                value={subject}
                                onChange={(e)=>setSubject(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>History</option>

                                <option>Polity</option>

                                <option>Geography</option>

                                <option>Economy</option>

                                <option>Science</option>

                                <option>Tamil</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">

                                Topic

                            </label>

                            <input
                                value={topic}
                                onChange={(e)=>setTopic(e.target.value)}
                                placeholder="Example: Sangam Age"
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">

                                Difficulty

                            </label>

                            <select
                                value={difficulty}
                                onChange={(e)=>setDifficulty(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Easy</option>

                                <option>Medium</option>

                                <option>Hard</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">

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

                            <label className="block mb-2 font-medium">

                                Number of Questions

                            </label>

                            <input
                                type="number"
                                min={1}
                                max={100}
                                value={questionCount}
                                onChange={(e)=>
                                    setQuestionCount(Number(e.target.value))
                                }
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                    </div>

                                        {/* AI Options */}

                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div>

                            <label className="block mb-2 font-medium">

                                TNPSC Exam

                            </label>

                            <select
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

                            <label className="block mb-2 font-medium">

                                Bloom's Taxonomy

                            </label>

                            <select
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Remember</option>
                                <option>Understand</option>
                                <option>Apply</option>
                                <option>Analyze</option>
                                <option>Evaluate</option>
                                <option>Create</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">

                                Question Type

                            </label>

                            <select
                                className="w-full border rounded-lg p-3"
                            >

                                <option>Multiple Choice</option>
                                <option>Assertion & Reason</option>
                                <option>Match the Following</option>
                                <option>Statement Based</option>

                            </select>

                        </div>

                    </div>

                    <div className="mt-8">

                        <label className="block mb-2 font-medium">

                            Additional AI Instructions

                        </label>

                        <textarea
                            rows={5}
                            placeholder="Example: Generate conceptual TNPSC Group IV questions based on the latest syllabus. Avoid repeated questions."
                            className="w-full border rounded-lg p-4"
                        />

                    </div>

                    {/* Actions */}

                    <div className="flex flex-wrap gap-4 mt-8">

                        <button
                            onClick={generateQuestions}
                            disabled={loading}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
                        >

                            {loading ? (

                                <>

                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />

                                    Generating...

                                </>

                            ) : (

                                <>

                                    <Sparkles size={18}/>

                                    Generate Questions

                                </>

                            )}

                        </button>

                        <button
                            className="border px-6 py-3 rounded-lg flex items-center gap-2"
                        >

                            <RefreshCw size={18}/>

                            Regenerate

                        </button>

                    </div>

                </div>

                {/* Generated Questions */}

                <div className="bg-white rounded-xl shadow">

                    <div className="p-6 border-b flex justify-between items-center">

                        <div>

                            <h2 className="text-2xl font-bold">

                                Generated Questions

                            </h2>

                            <p className="text-gray-500 mt-1">

                                Review and edit before saving.

                            </p>

                        </div>

                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                            {generatedQuestions.length} Questions

                        </span>

                    </div>

                    <div className="divide-y">

                        {generatedQuestions.length === 0 ? (

                            <div className="text-center py-16 text-gray-500">

                                Click "Generate Questions" to begin.

                            </div>

                        ) : (

                            generatedQuestions.map((question, index) => (

                                <div
                                    key={index}
                                    className="p-6"
                                >

                                    <div className="flex justify-between items-start">

                                        <h3 className="font-bold text-lg">

                                            Q{index + 1}. {question.question}

                                        </h3>

                                        <button
                                            className="text-blue-600 text-sm"
                                        >

                                            Edit

                                        </button>

                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mt-5">

                                        {question.options.map(
                                            (
                                                option: string,
                                                optionIndex: number
                                            ) => (

                                                <div
                                                    key={optionIndex}
                                                    className={`border rounded-lg p-3 ${
                                                        question.answer === optionIndex
                                                            ? "border-green-500 bg-green-50"
                                                            : ""
                                                    }`}
                                                >

                                                    <strong>

                                                        {String.fromCharCode(
                                                            65 + optionIndex
                                                        )}

                                                        .

                                                    </strong>

                                                    {" "}

                                                    {option}

                                                </div>

                                            )
                                        )}

                                    </div>

                                </div>

                            ))

                        )}

                    </div>
                </div>

                {/* AI Insights */}

                <div className="grid lg:grid-cols-3 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-lg">

                            AI Confidence

                        </h3>

                        <div className="mt-6">

                            <div className="flex justify-between mb-2">

                                <span>Average Score</span>

                                <span className="font-semibold text-green-600">

                                    96%

                                </span>

                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-3">

                                <div
                                    className="bg-green-600 h-3 rounded-full"
                                    style={{ width: "96%" }}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-lg">

                            Estimated Quality

                        </h3>

                        <div className="mt-6 space-y-2">

                            <p>✅ Grammar Verified</p>

                            <p>✅ TNPSC Pattern</p>

                            <p>✅ Options Balanced</p>

                            <p>✅ Difficulty Checked</p>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="font-bold text-lg">

                            AI Recommendation

                        </h3>

                        <p className="mt-4 text-gray-600">

                            These questions are ready for review. Verify
                            factual accuracy before publishing to the live
                            question bank.

                        </p>

                    </div>

                </div>

                {/* Bulk Actions */}

                <div className="bg-white rounded-xl shadow p-6 mt-8">

                    <div className="flex flex-wrap gap-4">

                        <button
                            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                        >

                            <Save size={18} />

                            Save to Question Bank

                        </button>

                        <button
                            className="border px-6 py-3 rounded-lg"
                        >

                            Save as Draft

                        </button>

                        <button
                            className="border px-6 py-3 rounded-lg"
                        >

                            Publish Selected

                        </button>

                        <button
                            className="border px-6 py-3 rounded-lg"
                        >

                            Download JSON

                        </button>

                        <button
                            className="border px-6 py-3 rounded-lg"
                        >

                            Download Excel

                        </button>

                    </div>

                </div>

                {/* AI Prompt Preview */}

                <div className="bg-white rounded-xl shadow p-6 mt-8">

                    <h2 className="text-xl font-bold mb-4">

                        Prompt Preview

                    </h2>

                    <div className="bg-gray-100 rounded-lg p-4 text-sm whitespace-pre-wrap">

{`Generate ${questionCount} TNPSC ${difficulty} level questions.

Subject: ${subject}
Topic: ${topic}
Language: ${language}

Requirements:
- Follow latest TNPSC syllabus
- Four options per question
- Exactly one correct answer
- Avoid duplicate questions
- Include conceptual and factual questions
- Keep options balanced
- Return structured JSON.`}

                    </div>

                </div>

                {/* Backend Integration Notes */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

                    <h2 className="text-xl font-bold mb-4">

                        Backend Integration

                    </h2>

                    <div className="space-y-2 text-sm">

                        <p>

                            POST /api/v1/ai/question-generator

                        </p>

                        <p>

                            POST /api/v1/questions/bulk-create

                        </p>

                        <p>

                            POST /api/v1/questions/save-draft

                        </p>

                        <p>

                            POST /api/v1/questions/publish

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}