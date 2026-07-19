"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  FileCheck,
  ShieldCheck,
  ScanLine,
  Search,
  Filter,
  Settings,
  Upload,
  FileText,
  BadgeCheck,
  AlertTriangle,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

interface VerificationRecord {
  id: string;
  candidate: string;
  document: string;
  documentType: string;
  uploadedOn: string;
  confidence: number;
  status: "Verified" | "Pending" | "Rejected";
}

const records: VerificationRecord[] = [
  {
    id: "DOC001",
    candidate: "Priya",
    document: "Degree Certificate",
    documentType: "Education",
    uploadedOn: "18 Jul 2026",
    confidence: 99,
    status: "Verified",
  },
  {
    id: "DOC002",
    candidate: "Arun",
    document: "Community Certificate",
    documentType: "Reservation",
    uploadedOn: "18 Jul 2026",
    confidence: 95,
    status: "Pending",
  },
];

export default function AIDocumentVerificationPage() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {

    return records.filter((item)=>

      item.candidate.toLowerCase().includes(search.toLowerCase()) ||
      item.document.toLowerCase().includes(search.toLowerCase()) ||
      item.documentType.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <FileCheck className="text-indigo-600"/>

              AI Document Verification

            </h1>

            <p className="text-gray-500 mt-2">

              AI-powered OCR, fraud detection, certificate validation,
              duplicate checking, and document verification system.

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

        {/* KPI Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <FileText className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Documents Processed

            </p>

            <h2 className="text-4xl font-bold mt-2">

              52,684

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BadgeCheck className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Verified Documents

            </p>

            <h2 className="text-4xl font-bold mt-2">

              49,970

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <AlertTriangle className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              Pending Review

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,124

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.2%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Verification Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Document Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Aadhaar</option>
                <option>PAN</option>
                <option>Degree</option>
                <option>Community</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Verification Status

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Rejected</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                OCR Engine

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>AI OCR v3</option>
                <option>Tesseract</option>
                <option>Cloud Vision</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Fraud Detection

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Enabled</option>
                <option>Disabled</option>

              </select>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search candidate or document..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Upload Center */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Upload className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Document Upload Center

            </h2>

          </div>

          <div className="p-10 border-2 border-dashed border-gray-300 rounded-xl m-6 text-center">

            <Upload className="mx-auto w-14 h-14 text-indigo-500"/>

            <h3 className="text-xl font-semibold mt-4">

              Upload Candidate Documents

            </h3>

            <p className="text-gray-500 mt-2">

              Drag & drop or browse Aadhaar, PAN, Degree,
              Community, Transfer Certificate and other files.

            </p>

            <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Browse Files

            </button>

          </div>

        </div>

        {/* Verification Records */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Verification Records

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Candidate</th>
                  <th className="p-4 text-left">Document</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Uploaded</th>
                  <th className="p-4 text-left">Confidence</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.candidate}</td>
                    <td className="p-4">{item.document}</td>
                    <td className="p-4">{item.documentType}</td>
                    <td className="p-4">{item.uploadedOn}</td>
                    <td className="p-4">{item.confidence}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI OCR Text Extraction */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <ScanLine className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI OCR Text Extraction

            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-6">

            <div className="border rounded-xl p-6">

              <h3 className="font-semibold mb-4">

                Extracted Information

              </h3>

              <div className="space-y-4">

                {[
                  ["Candidate Name","Priya"],
                  ["Certificate","Bachelor of Engineering"],
                  ["University","Anna University"],
                  ["Year","2026"],
                  ["Register Number","712345678"],
                  ["Percentage","84%"],
                ].map(([label,value])=>(

                  <div
                    key={label}
                    className="flex justify-between border rounded-lg p-3"
                  >

                    <span>{label}</span>

                    <span className="font-semibold">

                      {value}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="border rounded-xl p-6">

              <h3 className="font-semibold mb-4">

                OCR Confidence

              </h3>

              <div className="space-y-5">

                {[
                  ["Overall OCR","99%"],
                  ["Name Detection","100%"],
                  ["Document Number","98%"],
                  ["Address Detection","97%"],
                  ["Signature Detection","96%"],
                ].map(([item,value])=>(

                  <div key={item}>

                    <div className="flex justify-between mb-2">

                      <span>{item}</span>

                      <span>{value}</span>

                    </div>

                    <div className="bg-gray-200 rounded-full h-3">

                      <div
                        className="bg-indigo-600 h-3 rounded-full"
                        style={{width:value}}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* AI Validation */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <ShieldCheck className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Document Validation

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Aadhaar Verification","Verified"],
                ["PAN Verification","Verified"],
                ["Degree Certificate","Verified"],
                ["Community Certificate","Pending"],
                ["Transfer Certificate","Verified"],
                ["Photo Match","Matched"],
              ].map(([doc,status])=>(

                <div
                  key={doc}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{doc}</span>

                  <span className="text-green-600 font-semibold">

                    {status}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Fraud Detection */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <AlertTriangle className="text-orange-600"/>

              <h2 className="text-xl font-bold">

                AI Fraud Detection

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                "Duplicate Upload Detection",
                "Edited Image Detection",
                "Forgery Detection",
                "QR Code Validation",
                "Digital Signature Validation",
                "Metadata Consistency Check",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 flex justify-between"
                >

                  <span>{item}</span>

                  <CheckCircle2 className="text-green-600"/>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Missing Documents */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Missing Document Checker

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Aadhaar Card",
              "PAN Card",
              "Degree Certificate",
              "Community Certificate",
              "Transfer Certificate",
              "Nativity Certificate",
            ].map((doc)=>(

              <div
                key={doc}
                className="border rounded-xl p-5 hover:bg-yellow-50"
              >

                <h3 className="font-semibold">

                  {doc}

                </h3>

                <p className="text-sm text-gray-500 mt-2">

                  Upload Required

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Document Preview & Verification Progress */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Document Preview

              </h2>

            </div>

            <div className="h-96 flex items-center justify-center bg-gray-100 rounded-b-xl">

              <div className="text-center">

                <FileText className="w-20 h-20 mx-auto text-gray-400"/>

                <p className="mt-4 text-gray-500">

                  Preview uploaded document here

                </p>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Verification Progress

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Upload Completed","100%"],
                ["OCR Processing","100%"],
                ["Validation","92%"],
                ["Fraud Detection","88%"],
                ["Final Verification","80%"],
              ].map(([step,value])=>(

                <div key={step}>

                  <div className="flex justify-between mb-2">

                    <span>{step}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

                {/* Verification Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <TrendingUp className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Verification Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Documents Verified","49,970"],
              ["Pending Review","1,124"],
              ["Rejected","356"],
              ["AI Accuracy","99.2%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-indigo-50"
              >

                <h3 className="text-gray-500">

                  {title}

                </h3>

                <p className="text-4xl font-bold mt-4">

                  {value}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* OCR Performance & Verification Statistics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                OCR Performance Metrics

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Text Recognition","99%"],
                ["Image Quality Detection","97%"],
                ["Face Match Accuracy","98%"],
                ["QR Detection","96%"],
                ["Document Classification","99%"],
              ].map(([metric,value])=>(

                <div key={metric}>

                  <div className="flex justify-between mb-2">

                    <span>{metric}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Verification Statistics

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                ["Aadhaar","12,540"],
                ["PAN","11,420"],
                ["Degree","9,880"],
                ["Community","8,120"],
                ["Transfer Certificate","7,010"],
              ].map(([doc,count])=>(

                <div
                  key={doc}
                  className="flex justify-between border rounded-lg p-4"
                >

                  <span>{doc}</span>

                  <span className="font-semibold">

                    {count}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Verification History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Verification History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Candidate</th>
                  <th className="p-4 text-left">Document</th>
                  <th className="p-4 text-left">Confidence</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">

                      19 Jul 2026

                    </td>

                    <td className="p-4">

                      {item.candidate}

                    </td>

                    <td className="p-4">

                      {item.document}

                    </td>

                    <td className="p-4">

                      {item.confidence}%

                    </td>

                    <td className="p-4">

                      {item.status}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Export Center */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Verification Reports

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Generate AI Report

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

            </button>

          </div>

        </div>

        {/* Backend API */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl mt-8 p-6 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">

            <div className="space-y-2">

              <p>POST /api/v1/document/upload</p>
              <p>POST /api/v1/document/ocr</p>
              <p>POST /api/v1/document/verify</p>
              <p>POST /api/v1/document/fraud-check</p>
              <p>GET /api/v1/document/history</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/document/dashboard</p>
              <p>GET /api/v1/document/analytics</p>
              <p>POST /api/v1/document/export/pdf</p>
              <p>POST /api/v1/document/export/excel</p>
              <p>POST /api/v1/document/export/csv</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}