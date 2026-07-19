"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Image,
  LayoutTemplate,
  Network,
  GitBranch,
  BarChart3,
  Calendar,
  BookOpen,
  Search,
  Filter,
  Settings,
  Sparkles,
  Eye,
  Play,
  Download,
  Target,
  Palette,
  Languages,
} from "lucide-react";

interface Infographic {
  id: string;
  title: string;
  subject: string;
  template: string;
  language: string;
  status: "Draft" | "Generating" | "Published";
  format: "Infographic" | "Mind Map" | "Timeline" | "Flowchart";
}

const infographicData: Infographic[] = [
  {
    id: "INFO001",
    title: "Indian Constitution Overview",
    subject: "Polity",
    template: "Timeline",
    language: "Tamil + English",
    status: "Published",
    format: "Timeline",
  },
  {
    id: "INFO002",
    title: "Chola Dynasty Administration",
    subject: "History",
    template: "Mind Map",
    language: "Tamil + English",
    status: "Generating",
    format: "Mind Map",
  },
];

export default function AIInfographicGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {

    return infographicData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600"/>

              AI Infographic Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Automatically generate visual TNPSC learning materials,
              mind maps, timelines, flowcharts, comparison charts,
              revision sheets, and bilingual infographics.

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

        {/* Dashboard */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Image className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Infographics

            </p>

            <h2 className="text-4xl font-bold mt-2">

              3,824

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Network className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Mind Maps

            </p>

            <h2 className="text-4xl font-bold mt-2">

              1,214

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              AI Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              3,116

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.5%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Infographic Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Output Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Infographic</option>
                <option>Mind Map</option>
                <option>Timeline</option>
                <option>Flowchart</option>
                <option>Comparison Chart</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Theme

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Professional</option>
                <option>Modern</option>
                <option>Minimal</option>
                <option>Government Style</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Color Palette

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Blue</option>
                <option>Green</option>
                <option>Purple</option>
                <option>Custom</option>

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
                placeholder="Search infographics..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Generated Infographics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Visual Content

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Format</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredData.map((item)=>(

                  <tr
                    key={item.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{item.title}</td>
                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.format}</td>
                    <td className="p-4">{item.language}</td>
                    <td className="p-4">{item.status}</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <Download size={16}/>

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Infographic Generation Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Infographic Generation Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Visual AI</option>
                <option>TNPSC Diagram AI</option>
                <option>Educational Infographic AI</option>
                <option>Mind Map Generator AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Layout Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Vertical</option>
                <option>Horizontal</option>
                <option>Grid</option>
                <option>Interactive</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Icon Pack

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Lucide</option>
                <option>Material Icons</option>
                <option>Flat Icons</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Export Size

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>A4</option>
                <option>A3</option>
                <option>1080 × 1920</option>
                <option>4K</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Features */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Generation Features

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Auto Mind Map

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Timeline Generator

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Flowchart Builder

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Comparison Tables

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              AI Icons

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Bilingual Labels

            </label>

          </div>

        </div>

        {/* Visual Templates */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Network className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Mind Map Templates

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Central Topic Map",
                "Tree Diagram",
                "Radial Map",
                "Knowledge Graph",
                "Exam Revision Map"
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <LayoutTemplate className="text-blue-600"/>

              <h2 className="text-xl font-bold">

                Visual Templates

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Infographic",
                "Timeline",
                "Flowchart",
                "Comparison",
                "Summary Sheet",
                "Quick Notes"
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-xl h-28 flex items-center justify-center hover:bg-indigo-50 cursor-pointer"

                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Timeline Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Calendar className="text-orange-600"/>

            <h2 className="text-2xl font-bold">

              Timeline Preview

            </h2>

          </div>

          <div className="p-6 space-y-5">

            {[
              ["850 AD","Vijayalaya Chola"],
              ["985 AD","Rajaraja Chola"],
              ["1014 AD","Rajendra Chola"],
              ["1070 AD","Kulothunga Chola"]
            ].map(([year,event])=>(

              <div
                key={year}
                className="flex justify-between border-l-4 border-indigo-600 bg-gray-50 rounded-lg p-4"

              >

                <span className="font-bold">

                  {year}

                </span>

                <span>

                  {event}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Live Generation */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Live AI Generation

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: "89%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI is generating diagrams, timelines, bilingual labels,
              icons, layouts, and revision sheets. Progress: 89%.

            </p>

          </div>

        </div>

                {/* Infographic Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Infographic Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Preview the generated infographic before publishing.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              Ready for Publishing

            </span>

          </div>

          <div className="p-8">

            <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col items-center justify-center">

              <Image className="w-20 h-20 text-indigo-600" />

              <h3 className="mt-6 text-2xl font-bold">

                AI Generated Infographic

              </h3>

              <p className="mt-2 text-gray-500">

                Interactive Preview Canvas

              </p>

            </div>

          </div>

        </div>

        {/* Mind Map & Flowchart */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Network className="text-green-600" />

              <h2 className="text-xl font-bold">

                Mind Map Preview

              </h2>

            </div>

            <div className="p-8 flex flex-col items-center space-y-4">

              <div className="bg-indigo-600 text-white rounded-full px-6 py-3 font-semibold">

                Chola Dynasty

              </div>

              <div className="grid grid-cols-2 gap-6 w-full">

                {[
                  "Kings",
                  "Administration",
                  "Architecture",
                  "Economy"
                ].map((node) => (

                  <div
                    key={node}
                    className="border rounded-xl p-4 text-center hover:bg-indigo-50"
                  >

                    {node}

                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <GitBranch className="text-orange-600" />

              <h2 className="text-xl font-bold">

                Flowchart Preview

              </h2>

            </div>

            <div className="p-8 space-y-4">

              {[
                "Start Topic",
                "Collect Concepts",
                "Generate Layout",
                "Add Visual Icons",
                "Review & Publish"
              ].map((step) => (

                <div
                  key={step}
                  className="border rounded-lg p-4 text-center bg-gray-50"
                >

                  {step}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Comparison Table */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Comparison Chart

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Chola</th>
                  <th className="p-4 text-left">Pandya</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-4">Capital</td>
                  <td className="p-4">Thanjavur</td>
                  <td className="p-4">Madurai</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Famous King</td>
                  <td className="p-4">Rajaraja Chola</td>
                  <td className="p-4">Maravarman</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Architecture</td>
                  <td className="p-4">Brihadeeswarar Temple</td>
                  <td className="p-4">Meenakshi Temple</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Bilingual Labels */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Languages className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Bilingual Labels

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            <div className="border rounded-lg p-5">

              <h3 className="font-semibold mb-2">

                English

              </h3>

              <p>Imperial Chola Dynasty</p>
              <p>Administration</p>
              <p>Temple Architecture</p>

            </div>

            <div className="border rounded-lg p-5">

              <h3 className="font-semibold mb-2">

                தமிழ்

              </h3>

              <p>பேரரசு சோழர் வம்சம்</p>
              <p>நிர்வாகம்</p>
              <p>கோவில் கட்டிடக்கலை</p>

            </div>

          </div>

        </div>

        {/* Analytics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Visual Quality Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["99%", "Layout Quality", "text-green-600"],
              ["98%", "Visual Accuracy", "text-blue-600"],
              ["99%", "Tamil Support", "text-purple-600"],
              ["99%", "TNPSC Alignment", "text-orange-600"],
            ].map(([score, label, color]) => (

              <div key={label} className="text-center">

                <h3 className={`text-4xl font-bold ${color}`}>

                  {score}

                </h3>

                <p className="mt-2">

                  {label}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Publish & Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish to Student Portal

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Mobile App

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PNG

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export SVG

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PPTX

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

              <p>POST /api/v1/infographics/generate</p>
              <p>POST /api/v1/infographics/mind-map</p>
              <p>POST /api/v1/infographics/timeline</p>
              <p>POST /api/v1/infographics/flowchart</p>
              <p>GET /api/v1/infographics/preview</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/infographics/publish</p>
              <p>POST /api/v1/infographics/export/png</p>
              <p>POST /api/v1/infographics/export/svg</p>
              <p>POST /api/v1/infographics/export/pdf</p>
              <p>POST /api/v1/infographics/export/pptx</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}