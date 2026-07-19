"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Sparkles,
  BookOpen,
  Languages,
  Settings,
  Wand2,
  Play,
  Save,
  RefreshCw
} from "lucide-react";

export default function GenerateQuestionsPage() {

  const [form, setForm] = useState({
    exam: "Group IV",
    subject: "History",
    unit: "",
    chapter: "",
    topic: "",
    language: "Tamil + English",
    difficulty: "Medium",
    blooms: "Understand",
    questionType: "MCQ",
    totalQuestions: 20,
    includeExplanation: true,
    includeReferences: true,
    includeHints: false,
    negativeOptions: true,
    previousYearStyle: true
  });

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600"/>

              AI Question Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Generate high-quality TNPSC questions using AI.

            </p>

          </div>

          <Link
            href="/admin/ai-content-studio"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >

            <ArrowLeft size={18}/>

            Back

          </Link>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-blue-600"/>

            <h2 className="text-2xl font-bold">

              Generation Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-medium">

                Exam

              </label>

              <select
                className="w-full border rounded-lg mt-2 p-3"
                value={form.exam}
              >

                <option>Group I</option>
                <option>Group II</option>
                <option>Group IIA</option>
                <option>Group IV</option>
                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-medium">

                Subject

              </label>

              <select
                className="w-full border rounded-lg mt-2 p-3"
                value={form.subject}
              >

                <option>History</option>
                <option>Polity</option>
                <option>Science</option>
                <option>Geography</option>
                <option>Economy</option>
                <option>Tamil</option>

              </select>

            </div>

            <div>

              <label className="font-medium">

                Unit

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Unit"
              />

            </div>

            <div>

              <label className="font-medium">

                Chapter

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Chapter"
              />

            </div>

            <div>

              <label className="font-medium">

                Topic

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Topic"
              />

            </div>

            <div>

              <label className="font-medium">

                Language

              </label>

              <select
                className="w-full border rounded-lg mt-2 p-3"
              >

                <option>Tamil</option>
                <option>English</option>
                <option>Tamil + English</option>

              </select>

            </div>

            <div>

              <label className="font-medium">

                Difficulty

              </label>

              <select
                className="w-full border rounded-lg mt-2 p-3"
              >

                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Mixed</option>

              </select>

            </div>

            <div>

              <label className="font-medium">

                Bloom's Taxonomy

              </label>

              <select
                className="w-full border rounded-lg mt-2 p-3"
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

              <label className="font-medium">

                Total Questions

              </label>

              <input
                type="number"
                className="w-full border rounded-lg mt-2 p-3"
                value={form.totalQuestions}
              />

            </div>

          </div>

        </div>

                {/* Advanced AI Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              Advanced AI Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked={form.includeExplanation}
              />

              Generate Explanation

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked={form.includeReferences}
              />

              Include Book References

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked={form.includeHints}
              />

              Generate Hints

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked={form.negativeOptions}
              />

              Smart Distractors

            </label>

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                defaultChecked={form.previousYearStyle}
              />

              Previous Year Pattern

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Verify Answer Accuracy

            </label>

          </div>

        </div>

        {/* Syllabus Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BookOpen className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Syllabus Mapping

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Subject</th>
                  <th className="text-left p-4">Unit</th>
                  <th className="text-left p-4">Chapter</th>
                  <th className="text-left p-4">Topic</th>
                  <th className="text-left p-4">Coverage</th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["History","Ancient","Sangam Age","Kings","92%"],
                  ["History","Ancient","Sangam Age","Culture","88%"],
                  ["History","Ancient","Sangam Age","Literature","84%"]
                ].map((row,index)=>(

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{row[0]}</td>
                    <td className="p-4">{row[1]}</td>
                    <td className="p-4">{row[2]}</td>
                    <td className="p-4">{row[3]}</td>
                    <td className="p-4 font-semibold text-green-600">

                      {row[4]}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Prompt Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Prompt Preview

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={10}
              className="w-full border rounded-lg p-4 font-mono text-sm"
              defaultValue={`Generate ${form.totalQuestions} TNPSC ${form.exam} multiple-choice questions.

Subject: ${form.subject}
Language: ${form.language}
Difficulty: ${form.difficulty}
Bloom Level: ${form.blooms}

Requirements:
- Follow TNPSC syllabus
- Four answer choices
- One correct answer
- Detailed explanation
- Book reference
- Avoid duplicate questions
- Maintain previous-year question style`}
            />

          </div>

        </div>

        {/* Generate Controls */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <Play size={18} />

              Generate Questions

            </button>

            <button className="border px-6 py-3 rounded-lg flex items-center gap-2">

              <RefreshCw size={18} />

              Regenerate

            </button>

            <button className="border px-6 py-3 rounded-lg flex items-center gap-2">

              <Languages size={18} />

              Translate Output

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <Save size={18} />

              Save Configuration

            </button>

          </div>

        </div>

        {/* Live Generation Status */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Generation Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 rounded-full bg-indigo-600"
                style={{ width: "68%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has generated 68% of the requested questions...

            </p>

          </div>

        </div>

                {/* Generated Questions Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Generated Questions Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Review AI-generated questions before publishing.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              20 Questions Generated

            </span>

          </div>

          <div className="divide-y">

            {[1,2,3].map((question)=>(
              <div
                key={question}
                className="p-6"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="font-semibold text-lg">

                      Q{question}. Who founded the Chola Dynasty?

                    </h3>

                    <div className="mt-4 space-y-2">

                      <p>A. Karikala Chola</p>
                      <p className="text-green-700 font-semibold">
                        ✓ B. Vijayalaya Chola
                      </p>
                      <p>C. Rajaraja Chola</p>
                      <p>D. Aditya Chola</p>

                    </div>

                    <div className="mt-5 rounded-lg bg-blue-50 p-4">

                      <p className="font-semibold mb-2">

                        AI Explanation

                      </p>

                      <p className="text-gray-700">

                        Vijayalaya Chola established the Imperial Chola dynasty
                        in the 9th century and captured Thanjavur, laying the
                        foundation for later Chola expansion.

                      </p>

                    </div>

                  </div>

                  <div className="ml-8 text-right">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                      Confidence 98%

                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Quality Validation */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">

                AI Quality Validation

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">
                <span>Answer Accuracy</span>
                <span className="font-bold text-green-600">99%</span>
              </div>

              <div className="flex justify-between">
                <span>Syllabus Match</span>
                <span className="font-bold text-green-600">96%</span>
              </div>

              <div className="flex justify-between">
                <span>Grammar Quality</span>
                <span className="font-bold text-green-600">100%</span>
              </div>

              <div className="flex justify-between">
                <span>Bloom Classification</span>
                <span className="font-bold text-blue-600">Verified</span>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">

                Duplicate Detection

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="rounded-lg bg-green-50 border border-green-200 p-4">

                ✅ No exact duplicates found.

              </div>

              <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">

                ⚠ 2 similar questions detected (Similarity: 82%).

              </div>

              <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">

                AI recommends replacing one similar question before publishing.

              </div>

            </div>

          </div>

        </div>

        {/* Publishing */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish to Question Bank

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Send for Review

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Save Draft

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export DOCX

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

              <p>POST /api/v1/ai/generate-questions</p>

              <p>POST /api/v1/ai/preview</p>

              <p>POST /api/v1/ai/validate</p>

              <p>POST /api/v1/ai/check-duplicates</p>

              <p>POST /api/v1/ai/save-draft</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/ai/publish</p>

              <p>POST /api/v1/ai/export/json</p>

              <p>POST /api/v1/ai/export/pdf</p>

              <p>POST /api/v1/ai/export/docx</p>

              <p>GET /api/v1/ai/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}