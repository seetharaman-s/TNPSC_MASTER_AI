"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Sparkles,
  FileText,
  Languages,
  ScanText,
  FileImage,
  BookOpen,
  Activity,
  BarChart3,
  Zap,
  Clock,
  Plus,
  Search,
} from "lucide-react";

export default function AIContentStudioPage() {
  const [search, setSearch] = useState("");

  const aiTools = [
    {
      title: "Generate Questions",
      description: "Create TNPSC MCQs using AI.",
      icon: Brain,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Generate Explanation",
      description: "Automatically generate detailed explanations.",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Generate MCQ Options",
      description: "Create intelligent distractors.",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Translate Questions",
      description: "Tamil ↔ English translation.",
      icon: Languages,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "OCR Import",
      description: "Extract questions from images.",
      icon: ScanText,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "PDF Import",
      description: "Convert PDF into structured questions.",
      icon: FileImage,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600" />

              AI Content Studio

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered workspace for generating, reviewing and managing TNPSC
              content.

            </p>

          </div>

          <Link
            href="/admin"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >

            <ArrowLeft size={18} />

            Back

          </Link>

        </div>

        {/* KPI Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Zap className="text-blue-600" />

            <p className="text-gray-500 mt-4">

              AI Generations

            </p>

            <h2 className="text-4xl font-bold mt-2">

              14,285

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BookOpen className="text-green-600" />

            <p className="text-gray-500 mt-4">

              Questions Created

            </p>

            <h2 className="text-4xl font-bold mt-2">

              26,412

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BarChart3 className="text-purple-600" />

            <p className="text-gray-500 mt-4">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              96.8%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Clock className="text-orange-600" />

            <p className="text-gray-500 mt-4">

              Pending Review

            </p>

            <h2 className="text-4xl font-bold mt-2">

              127

            </h2>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search AI tools..."
              className="w-full border rounded-lg pl-10 pr-4 py-3"
            />

          </div>

        </div>

        {/* AI Tools */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {aiTools.map((tool) => {

            const Icon = tool.icon;

            return (

              <div
                key={tool.title}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
              >

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${tool.color}`}
                >

                  <Icon size={28} />

                </div>

                <h2 className="text-xl font-bold mt-5">

                  {tool.title}

                </h2>

                <p className="text-gray-500 mt-2">

                  {tool.description}

                </p>

                <button className="mt-6 bg-indigo-600 text-white rounded-lg px-5 py-3 flex items-center gap-2">

                  <Plus size={18} />

                  Open Tool

                </button>

              </div>

            );

          })}

        </div>

                {/* Prompt Library */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Prompt Library

              </h2>

              <p className="text-gray-500 mt-2">

                Reusable prompt templates for generating TNPSC content.

              </p>

            </div>

            <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg">

              New Prompt

            </button>

          </div>

          <div className="divide-y">

            {[
              {
                title: "Generate TNPSC Group IV History MCQs",
                category: "Question Generation",
                updated: "2 hours ago"
              },
              {
                title: "Create Detailed Explanation",
                category: "Explanation",
                updated: "Yesterday"
              },
              {
                title: "Translate Tamil ↔ English",
                category: "Translation",
                updated: "3 days ago"
              },
              {
                title: "Generate Distractors",
                category: "MCQ Options",
                updated: "Last Week"
              }
            ].map((prompt) => (

              <div
                key={prompt.title}
                className="p-5 flex justify-between items-center hover:bg-gray-50"
              >

                <div>

                  <h3 className="font-semibold">

                    {prompt.title}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {prompt.category}

                  </p>

                </div>

                <div className="text-right">

                  <p className="text-sm text-gray-500">

                    {prompt.updated}

                  </p>

                  <button className="mt-2 text-indigo-600 font-medium">

                    Use Prompt

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Analytics & Model Status */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">

                AI Usage Analytics

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                {
                  label: "Question Generation",
                  value: 82
                },
                {
                  label: "Translation",
                  value: 67
                },
                {
                  label: "Explanation",
                  value: 91
                },
                {
                  label: "OCR Extraction",
                  value: 58
                }
              ].map((item) => (

                <div key={item.label}>

                  <div className="flex justify-between mb-2">

                    <span>{item.label}</span>

                    <span>{item.value}%</span>

                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full">

                    <div
                      className="h-3 rounded-full bg-indigo-600"
                      style={{ width: `${item.value}%` }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-2xl font-bold">

                AI Model Status

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                {
                  model: "Question Generator",
                  status: "Online"
                },
                {
                  model: "Translator",
                  status: "Online"
                },
                {
                  model: "OCR Engine",
                  status: "Training"
                },
                {
                  model: "Difficulty Analyzer",
                  status: "Online"
                }
              ].map((model) => (

                <div
                  key={model.model}
                  className="flex justify-between items-center border rounded-lg p-4"
                >

                  <span className="font-medium">

                    {model.model}

                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      model.status === "Online"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {model.status}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Recent AI Activity */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold flex items-center gap-2">

              <Activity className="text-indigo-600" />

              Recent AI Activity

            </h2>

          </div>

          <div className="divide-y">

            {[
              "Generated 100 History MCQs",
              "Translated 250 questions to Tamil",
              "Created explanations for 80 Science questions",
              "OCR imported 3 PDF documents",
              "Duplicate checker reviewed 1,250 questions"
            ].map((activity, index) => (

              <div
                key={index}
                className="p-5 flex justify-between items-center"
              >

                <span>{activity}</span>

                <span className="text-sm text-gray-500">

                  {index + 1} hour(s) ago

                </span>

              </div>

            ))}

          </div>

        </div>

                {/* Favorite Prompts */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center justify-between">

            <h2 className="text-2xl font-bold">

              Favorite Prompts

            </h2>

            <button className="text-indigo-600 font-medium">

              View All

            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            {[
              "Generate TNPSC History MCQs",
              "Create Tamil Explanation",
              "Generate Current Affairs Quiz",
              "Difficulty Balancer",
              "Bloom's Taxonomy Classifier",
              "Generate Weekly Test"
            ].map((prompt) => (

              <div
                key={prompt}
                className="border rounded-xl p-5 hover:border-indigo-500 hover:shadow-md transition"
              >

                <h3 className="font-semibold">

                  {prompt}

                </h3>

                <button className="mt-5 bg-indigo-600 text-white rounded-lg px-4 py-2">

                  Run Prompt

                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Quick Actions

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-6">

            {[
              "Generate 100 Questions",
              "Translate Question Bank",
              "Review Pending AI Content",
              "Run Duplicate Detection",
              "Generate Explanations",
              "Import PDF",
              "OCR Image Upload",
              "Export AI Report"
            ].map((action) => (

              <button
                key={action}
                className="border rounded-xl p-5 hover:bg-indigo-50 hover:border-indigo-500 transition text-left"
              >

                {action}

              </button>

            ))}

          </div>

        </div>

        {/* AI Notifications */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Notifications

            </h2>

          </div>

          <div className="divide-y">

            {[
              {
                title: "OCR import completed successfully.",
                type: "success"
              },
              {
                title: "15 duplicate questions detected.",
                type: "warning"
              },
              {
                title: "Translation batch finished.",
                type: "success"
              },
              {
                title: "AI confidence below threshold for 8 questions.",
                type: "error"
              }
            ].map((item, index) => (

              <div
                key={index}
                className="p-5 flex justify-between items-center"
              >

                <span>{item.title}</span>

                <span
                  className={`text-sm font-medium ${
                    item.type === "success"
                      ? "text-green-600"
                      : item.type === "warning"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {item.type.toUpperCase()}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* AI Recommendations */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Recommendations

            </h2>

          </div>

          <div className="p-6 space-y-4">

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">

              💡 Generate more Economy questions to improve syllabus coverage.

            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">

              ✅ Review queue is below target and can be published.

            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">

              ⚠ 43 questions require manual verification after OCR.

            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">

              🤖 AI recommends generating new Current Affairs content for this week.

            </div>

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

              <p>POST /api/v1/ai/generate-explanation</p>

              <p>POST /api/v1/ai/generate-options</p>

              <p>POST /api/v1/ai/translate</p>

              <p>POST /api/v1/ai/ocr</p>

              <p>POST /api/v1/ai/pdf-import</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/ai/difficulty-analysis</p>

              <p>POST /api/v1/ai/bloom-classification</p>

              <p>POST /api/v1/ai/duplicate-check</p>

              <p>GET /api/v1/ai/analytics</p>

              <p>GET /api/v1/ai/prompts</p>

              <p>GET /api/v1/ai/activity</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}