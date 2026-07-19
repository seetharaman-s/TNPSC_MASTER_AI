"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileUp,
  Upload,
  FileText,
  Search,
  Filter,
  Languages,
  Brain,
  ScanLine,
  BookOpen,
  Sparkles,
  Eye,
  Trash2,
  Play
} from "lucide-react";

interface UploadedPDF {
  id: string;
  fileName: string;
  pages: number;
  language: string;
  status: "Uploaded" | "Processing" | "Completed";
  uploadedAt: string;
}

const uploadedFiles: UploadedPDF[] = [
  {
    id: "PDF001",
    fileName: "TNPSC_History_Unit1.pdf",
    pages: 124,
    language: "English",
    status: "Completed",
    uploadedAt: "18 Jul 2026"
  },
  {
    id: "PDF002",
    fileName: "Tamil_Polity_Book.pdf",
    pages: 86,
    language: "Tamil",
    status: "Processing",
    uploadedAt: "18 Jul 2026"
  }
];

export default function PdfImportPage() {

  const [search, setSearch] = useState("");

  const filteredFiles = useMemo(() => {

    return uploadedFiles.filter(file =>
      file.fileName.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <FileUp className="text-indigo-600"/>

              AI PDF Import Studio

            </h1>

            <p className="text-gray-500 mt-2">

              Upload TNPSC books and let AI extract questions automatically.

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

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <FileText className="text-blue-600"/>

            <p className="text-gray-500 mt-4">

              PDFs Uploaded

            </p>

            <h2 className="text-4xl font-bold mt-2">

              248

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="text-gray-500 mt-4">

              AI Processed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              236

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BookOpen className="text-green-600"/>

            <p className="text-gray-500 mt-4">

              Questions Extracted

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18,524

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600"/>

            <p className="text-gray-500 mt-4">

              OCR Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              98%

            </h2>

          </div>

        </div>

        {/* Upload Section */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Upload PDF

            </h2>

          </div>

          <div className="p-8">

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">

              <Upload className="mx-auto text-indigo-600" size={60}/>

              <h3 className="mt-6 text-xl font-semibold">

                Drag & Drop PDF Files

              </h3>

              <p className="text-gray-500 mt-2">

                Supports Tamil and English TNPSC books

              </p>

              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">

                Choose PDF Files

              </button>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search uploaded PDFs..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Uploaded Files */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Uploaded PDFs

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">File</th>
                  <th className="text-left p-4">Pages</th>
                  <th className="text-left p-4">Language</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Uploaded</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredFiles.map((file)=>(

                  <tr
                    key={file.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">

                      {file.fileName}

                    </td>

                    <td className="p-4">

                      {file.pages}

                    </td>

                    <td className="p-4">

                      {file.language}

                    </td>

                    <td className="p-4">

                      {file.status}

                    </td>

                    <td className="p-4">

                      {file.uploadedAt}

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16}/>

                        </button>

                        <button className="border rounded-lg p-2 text-red-600">

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

                {/* AI OCR Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI OCR Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                OCR Engine

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tesseract OCR</option>

                <option>Google Vision OCR</option>

                <option>Azure Document Intelligence</option>

                <option>AWS Textract</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Document Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Auto Detect</option>

                <option>Tamil</option>

                <option>English</option>

                <option>Tamil + English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5</option>

                <option>OCR Optimized</option>

                <option>Question Extraction AI</option>

              </select>

            </div>

          </div>

        </div>

        {/* Extraction Settings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Extraction Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Extract Questions

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Extract Options

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Extract Answers

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Extract Explanations

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Detect Images

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Auto Format Output

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

          <div className="p-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div>

              <label className="font-semibold">

                Exam

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Group 4</option>

                <option>Group 2</option>

                <option>Group 1</option>

                <option>VAO</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Subject

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>History</option>

                <option>Polity</option>

                <option>Geography</option>

                <option>Science</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Unit

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Unit"
              />

            </div>

            <div>

              <label className="font-semibold">

                Chapter

              </label>

              <input
                className="w-full border rounded-lg mt-2 p-3"
                placeholder="Enter Chapter"
              />

            </div>

          </div>

        </div>

        {/* Duplicate Detection */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Duplicate Detection

            </h2>

          </div>

          <div className="p-6 space-y-4">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Compare with Question Bank

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Detect Similar Questions

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Auto Merge Duplicates

            </label>

          </div>

        </div>

        {/* Processing Controls */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <ScanLine size={18} />

              Start OCR

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <Brain size={18} />

              Extract Questions

            </button>

            <button className="border px-6 py-3 rounded-lg flex items-center gap-2">

              <Languages size={18} />

              Translate

            </button>

          </div>

        </div>

        {/* Live Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Extraction Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 rounded-full bg-indigo-600"
                style={{ width: "74%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              OCR completed on 74% of pages. AI is extracting questions and validating formatting...

            </p>

          </div>

        </div>

                {/* Extracted Questions Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                Extracted Questions Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Review AI-extracted questions before importing into the Question Bank.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              156 Questions Extracted

            </span>

          </div>

          <div className="divide-y">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="p-6 hover:bg-gray-50"
              >

                <div className="flex justify-between">

                  <div className="flex-1">

                    <h3 className="font-semibold text-lg">

                      Q{item}. Which Chola king captured Thanjavur?

                    </h3>

                    <div className="mt-4 grid md:grid-cols-2 gap-2">

                      <p>A. Karikala Chola</p>
                      <p className="font-semibold text-green-700">
                        ✓ B. Vijayalaya Chola
                      </p>
                      <p>C. Rajendra Chola</p>
                      <p>D. Aditya Chola</p>

                    </div>

                    <div className="mt-5 bg-blue-50 rounded-lg p-4">

                      <p className="font-semibold mb-2">

                        Extracted Explanation

                      </p>

                      <p className="text-gray-700">

                        Vijayalaya Chola captured Thanjavur and established
                        the Imperial Chola dynasty during the 9th century.

                      </p>

                    </div>

                  </div>

                  <div className="ml-8">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                      OCR 99%

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* OCR Validation */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                OCR Quality Report

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>OCR Accuracy</span>

                <span className="font-bold text-green-600">

                  98%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Language Detection</span>

                <span className="font-bold text-green-600">

                  100%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Formatting Accuracy</span>

                <span className="font-bold text-blue-600">

                  97%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Question Detection</span>

                <span className="font-bold text-purple-600">

                  156 Found

                </span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Validation

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">

                ✅ Answers verified successfully.

              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">

                📚 Syllabus mapping completed.

              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">

                ⚠ 4 similar questions detected.

              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3">

                ❌ 2 incomplete questions require manual review.

              </div>

            </div>

          </div>

        </div>

        {/* Publish & Export */}

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

              Export JSON

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

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

              <p>POST /api/v1/pdf/upload</p>

              <p>POST /api/v1/pdf/ocr</p>

              <p>POST /api/v1/pdf/extract</p>

              <p>POST /api/v1/pdf/validate</p>

              <p>POST /api/v1/pdf/duplicates</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/pdf/publish</p>

              <p>POST /api/v1/pdf/export/json</p>

              <p>POST /api/v1/pdf/export/excel</p>

              <p>POST /api/v1/pdf/export/pdf</p>

              <p>GET /api/v1/pdf/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}