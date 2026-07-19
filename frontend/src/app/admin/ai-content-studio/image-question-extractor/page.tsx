"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ImagePlus,
  Upload,
  Image as ImageIcon,
  ScanLine,
  Brain,
  Languages,
  Search,
  Filter,
  Eye,
  Trash2,
  Play,
  Camera,
  FileImage,
  Sparkles
} from "lucide-react";

interface UploadedImage {
  id: string;
  fileName: string;
  resolution: string;
  language: string;
  status: "Uploaded" | "Processing" | "Completed";
  uploadedAt: string;
}

const uploadedImages: UploadedImage[] = [
  {
    id: "IMG001",
    fileName: "History_QP_Page1.jpg",
    resolution: "2480×3508",
    language: "English",
    status: "Completed",
    uploadedAt: "18 Jul 2026"
  },
  {
    id: "IMG002",
    fileName: "Tamil_Science_Page2.png",
    resolution: "1920×1080",
    language: "Tamil",
    status: "Processing",
    uploadedAt: "18 Jul 2026"
  }
];

export default function ImageQuestionExtractorPage() {

  const [search, setSearch] = useState("");

  const filteredImages = useMemo(() => {

    return uploadedImages.filter((image) =>
      image.fileName.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <ImagePlus className="text-indigo-600" />

              AI Image Question Extractor

            </h1>

            <p className="text-gray-500 mt-2">

              Extract TNPSC questions directly from scanned images and photographs.

            </p>

          </div>

          <Link
            href="/admin/ai-content-studio"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <FileImage className="text-blue-600" />

            <p className="mt-4 text-gray-500">

              Images Uploaded

            </p>

            <h2 className="text-4xl font-bold mt-2">

              542

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <ScanLine className="text-purple-600" />

            <p className="mt-4 text-gray-500">

              OCR Completed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              531

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-green-600" />

            <p className="mt-4 text-gray-500">

              Questions Found

            </p>

            <h2 className="text-4xl font-bold mt-2">

              41,862

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600" />

            <p className="mt-4 text-gray-500">

              Recognition Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99%

            </h2>

          </div>

        </div>

        {/* Upload Area */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Upload Images

            </h2>

          </div>

          <div className="p-8">

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">

              <Camera className="mx-auto text-indigo-600" size={60} />

              <h3 className="mt-6 text-xl font-semibold">

                Drag & Drop Images

              </h3>

              <p className="mt-2 text-gray-500">

                JPG, PNG, WEBP, TIFF, HEIC supported

              </p>

              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">

                <Upload size={18} />

                Select Images

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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search uploaded images..."
                className="w-full border rounded-lg pl-10 pr-4 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18} />

              Filters

            </button>

          </div>

        </div>

        {/* Uploaded Images */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Uploaded Images

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Image</th>
                  <th className="text-left p-4">Resolution</th>
                  <th className="text-left p-4">Language</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Uploaded</th>
                  <th className="text-left p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredImages.map((image) => (

                  <tr
                    key={image.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4 font-medium">

                      {image.fileName}

                    </td>

                    <td className="p-4">

                      {image.resolution}

                    </td>

                    <td className="p-4">

                      {image.language}

                    </td>

                    <td className="p-4">

                      {image.status}

                    </td>

                    <td className="p-4">

                      {image.uploadedAt}

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16} />

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16} />

                        </button>

                        <button className="border rounded-lg p-2 text-red-600">

                          <Trash2 size={16} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Vision Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Vision Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Vision Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Vision</option>
                <option>OCR Optimized</option>
                <option>Document AI</option>
                <option>Hybrid Vision OCR</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Recognition Language

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

                Image Quality

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Automatic</option>
                <option>High Accuracy</option>
                <option>Fast Processing</option>

              </select>

            </div>

          </div>

        </div>

        {/* Image Enhancement */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Image Enhancement

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Auto Crop

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Deskew Image

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Remove Noise

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Increase Contrast

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Detect Question Blocks

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Detect Tables & Figures

            </label>

          </div>

        </div>

        {/* Extraction Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Question Extraction Settings

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

              Detect Correct Answers

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Explanation

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Auto Translate

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Auto Format Output

            </label>

          </div>

        </div>

        {/* Syllabus Mapping */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Syllabus Mapping

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

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
                <option>Science</option>
                <option>Geography</option>

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

        {/* Processing Controls */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

              <ScanLine size={18} />

              Analyze Images

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

        {/* Live Processing */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Live Processing Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 bg-indigo-600 rounded-full"
                style={{ width: "81%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI Vision has completed image enhancement and OCR. Question extraction is currently in progress (81%).

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

                AI-detected questions from uploaded images ready for review.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              248 Questions Extracted

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

                      Q{item}. Which ruler established the Imperial Chola Empire?

                    </h3>

                    <div className="grid md:grid-cols-2 gap-2 mt-4">

                      <p>A. Karikala Chola</p>

                      <p className="font-semibold text-green-700">

                        ✓ B. Vijayalaya Chola

                      </p>

                      <p>C. Rajendra Chola</p>

                      <p>D. Kulothunga Chola</p>

                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 mt-5">

                      <p className="font-semibold">

                        AI Explanation

                      </p>

                      <p className="mt-2 text-gray-700">

                        Vijayalaya Chola captured Thanjavur during the
                        ninth century and founded the Imperial Chola dynasty.

                      </p>

                    </div>

                  </div>

                  <div className="ml-8">

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                      Vision 99%

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Quality Reports */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                OCR & Vision Report

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>OCR Accuracy</span>

                <span className="font-bold text-green-600">

                  99%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Image Quality</span>

                <span className="font-bold text-blue-600">

                  Excellent

                </span>

              </div>

              <div className="flex justify-between">

                <span>Language Detection</span>

                <span className="font-bold text-green-600">

                  100%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Question Blocks</span>

                <span className="font-bold text-purple-600">

                  248 Found

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

                ✅ All answers validated successfully.

              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">

                📚 Syllabus mapping completed.

              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">

                ⚠ 7 similar questions detected.

              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-3">

                ❌ 3 low-confidence questions require manual review.

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

              <p>POST /api/v1/image/upload</p>

              <p>POST /api/v1/image/vision</p>

              <p>POST /api/v1/image/extract</p>

              <p>POST /api/v1/image/validate</p>

              <p>POST /api/v1/image/duplicates</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/image/publish</p>

              <p>POST /api/v1/image/export/json</p>

              <p>POST /api/v1/image/export/excel</p>

              <p>POST /api/v1/image/export/pdf</p>

              <p>GET /api/v1/image/history</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}