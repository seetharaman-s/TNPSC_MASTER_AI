"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Network,
  Database,
  Search,
  Filter,
  Settings,
  Sparkles,
  BookOpen,
  GitBranch,
  BarChart3,
  Cpu,
  Globe,
  Layers,
  Users,
} from "lucide-react";

interface KnowledgeNode {
  id: string;
  topic: string;
  subject: string;
  connections: number;
  confidence: number;
  status: "Verified" | "Pending" | "AI Generated";
}

const knowledgeNodes: KnowledgeNode[] = [
  {
    id: "KF001",
    topic: "Indian Constitution",
    subject: "Polity",
    connections: 284,
    confidence: 99,
    status: "Verified",
  },
  {
    id: "KF002",
    topic: "Tamil History",
    subject: "History",
    connections: 196,
    confidence: 96,
    status: "AI Generated",
  },
];

export default function AIKnowledgeFabricPage() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {

    return knowledgeNodes.filter(item =>
      item.topic.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Network className="text-cyan-600"/>

              AI Knowledge Fabric

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise semantic knowledge platform connecting
              TNPSC books, notes, PYQs, current affairs,
              AI summaries, concepts and vector search
              into one intelligent knowledge fabric.

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

        {/* KPI */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Database className="text-cyan-600"/>

            <p className="text-gray-500 mt-4">

              Knowledge Nodes

            </p>

            <h2 className="text-4xl font-bold mt-2">

              248,562

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <GitBranch className="text-green-600"/>

            <p className="text-gray-500 mt-4">

              Semantic Links

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2.8M

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BookOpen className="text-orange-600"/>

            <p className="text-gray-500 mt-4">

              Knowledge Sources

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18,920

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="text-gray-500 mt-4">

              AI Confidence

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.8%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-cyan-600"/>

            <h2 className="text-2xl font-bold">

              Knowledge Fabric Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Knowledge Source

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Sources</option>
                <option>TN Books</option>
                <option>Notes</option>
                <option>Current Affairs</option>
                <option>Question Bank</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Engine

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Semantic AI</option>
                <option>Vector Search</option>
                <option>Knowledge Graph</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Index Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Live</option>
                <option>Scheduled</option>
                <option>Incremental</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Repository

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Enterprise</option>
                <option>Department</option>
                <option>Personal</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-cyan-600"/>

            <h2 className="text-2xl font-bold">

              AI Knowledge Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Generate semantic relationships, build knowledge graph, retrieve related concepts, summarize learning materials and optimize RAG retrieval..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg">

                Generate Knowledge Fabric

              </button>

              <button className="border px-6 py-3 rounded-lg">

                Reset

              </button>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search className="absolute left-3 top-3 text-gray-400"/>

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search knowledge graph..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Connections</th>
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

                    <td className="p-4">{item.topic}</td>
                    <td className="p-4">{item.subject}</td>
                    <td className="p-4">{item.connections}</td>
                    <td className="p-4">{item.confidence}%</td>
                    <td className="p-4">{item.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Semantic Knowledge Graph */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Network className="text-cyan-600"/>

              <h2 className="text-xl font-bold">

                Semantic Knowledge Graph

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Polity ↔ Constitution",
                "History ↔ Freedom Movement",
                "Geography ↔ Climate",
                "Science ↔ Biology",
                "Economy ↔ Budget",
                "Tamil ↔ Literature",
                "Current Affairs ↔ Schemes",
                "Aptitude ↔ Reasoning",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-xl p-5 hover:bg-cyan-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Concept Mapping */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Cross-Subject Concept Mapping

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Polity","98%"],
                ["History","96%"],
                ["Science","95%"],
                ["Economy","93%"],
                ["Geography","94%"],
                ["Current Affairs","97%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-cyan-600 h-3 rounded-full"
                      style={{width:value}}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Relationship Explorer */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Intelligent Content Relationship Explorer

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Books",
              "Notes",
              "Question Bank",
              "Current Affairs",
              "Mind Maps",
              "Videos",
              "PYQs",
              "Mock Tests",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-green-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* RAG Workspace */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Retrieval-Augmented Generation (RAG)

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Semantic Search",
                "Vector Retrieval",
                "Context Builder",
                "Knowledge Ranking",
                "Answer Generator",
                "Citation Engine",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-blue-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* AI Summary */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Concept Summarization Center

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "One-Line Summary",
                "Short Notes",
                "Mind Map",
                "Flash Cards",
                "Quick Revision",
                "Exam Points",
                "Important Facts",
                "Memory Tricks",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-yellow-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Recommendation Engine */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Personalized Knowledge Recommendation Engine

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Recommended Topics",
                "Weak Concepts",
                "Revision Priority",
                "Related Chapters",
                "Practice Questions",
                "Daily Learning",
                "Trending Topics",
                "Smart Suggestions",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Governance */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Content Versioning & Governance

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Version History",
                "Approval Workflow",
                "Content Review",
                "AI Validation",
                "Duplicate Detection",
                "Publishing Pipeline",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-purple-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Coverage Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge Coverage Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Book Coverage","99%"],
              ["PYQ Coverage","98%"],
              ["Current Affairs","97%"],
              ["Knowledge Quality","99%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-cyan-50"
              >

                <div className="font-semibold">

                  {title}

                </div>

                <div className="text-3xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Executive Knowledge Intelligence Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-cyan-600"/>

            <h2 className="text-2xl font-bold">

              Executive Knowledge Intelligence Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Knowledge Accuracy","99.8%"],
              ["Semantic Coverage","99.2%"],
              ["RAG Precision","98.9%"],
              ["Graph Completeness","99.5%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 text-center hover:bg-cyan-50"
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

        {/* Knowledge Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Knowledge Growth Trends

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["January","74%"],
                ["March","84%"],
                ["May","91%"],
                ["July","96%"],
                ["September","99%"],
              ].map(([month,value])=>(

                <div key={month}>

                  <div className="flex justify-between mb-2">

                    <span>{month}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-cyan-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Knowledge Intelligence Insights

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Knowledge Nodes","248,562"],
                ["Semantic Links","2.8M"],
                ["AI Summaries","84,250"],
                ["Verified Concepts","196,840"],
                ["Daily Queries","152K"],
                ["Knowledge Score","99%"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-xl p-5 hover:bg-green-50"
                >

                  <div className="font-semibold">

                    {title}

                  </div>

                  <div className="text-3xl font-bold mt-3">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Knowledge History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Activity</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Records</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Knowledge Graph Sync</td>
                  <td className="p-4">Completed</td>
                  <td className="p-4">42,580</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Vector Index Update</td>
                  <td className="p-4">Completed</td>
                  <td className="p-4">19,845</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Audit Log */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Semantic graph updated",
              "Vector index refreshed",
              "Knowledge validation completed",
              "RAG cache optimized",
              "Content governance executed",
              "Executive dashboard synchronized",
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

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Knowledge Reports

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg">
              Export PDF
            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
              Export Excel
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Export CSV
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Export JSON
            </button>

          </div>

        </div>

        {/* Backend API */}

        <div className="bg-cyan-50 border border-cyan-200 rounded-xl mt-8 p-6 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">

            <div className="space-y-2">

              <p>GET /api/v1/knowledge/dashboard</p>
              <p>GET /api/v1/knowledge/graph</p>
              <p>GET /api/v1/knowledge/search</p>
              <p>POST /api/v1/knowledge/rag/query</p>
              <p>POST /api/v1/knowledge/summarize</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/knowledge/history</p>
              <p>GET /api/v1/knowledge/analytics</p>
              <p>POST /api/v1/knowledge/export/pdf</p>
              <p>POST /api/v1/knowledge/export/excel</p>
              <p>POST /api/v1/knowledge/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}