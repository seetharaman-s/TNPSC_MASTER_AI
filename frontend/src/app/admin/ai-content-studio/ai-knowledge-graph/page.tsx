"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Network,
  GitBranch,
  Search,
  Filter,
  Settings,
  Sparkles,
  BookOpen,
  Database,
  BarChart3,
  Target,
  Layers3,
  Share2,
  Globe,
} from "lucide-react";

interface KnowledgeNode {
  id: string;
  topic: string;
  subject: string;
  connectedNodes: number;
  importance: number;
  status: "Strong" | "Moderate" | "Weak";
}

const knowledgeNodes: KnowledgeNode[] = [
  {
    id: "KG001",
    topic: "Indian Constitution",
    subject: "Polity",
    connectedNodes: 34,
    importance: 98,
    status: "Strong",
  },
  {
    id: "KG002",
    topic: "Freedom Movement",
    subject: "History",
    connectedNodes: 28,
    importance: 95,
    status: "Strong",
  },
];

export default function AIKnowledgeGraphPage() {

  const [search, setSearch] = useState("");

  const filteredNodes = useMemo(() => {

    return knowledgeNodes.filter((node)=>

      node.topic.toLowerCase().includes(search.toLowerCase()) ||
      node.subject.toLowerCase().includes(search.toLowerCase())

    );

  },[search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Network className="text-indigo-600"/>

              AI Knowledge Graph

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise AI knowledge graph connecting TNPSC syllabus,
              books, notes, MCQs, PYQs, current affairs, videos,
              flashcards, and learning resources into a unified
              semantic intelligence platform.

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

            <Database className="text-indigo-600"/>

            <p className="mt-4 text-gray-500">

              Knowledge Nodes

            </p>

            <h2 className="text-4xl font-bold mt-2">

              18,462

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <GitBranch className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Relationships

            </p>

            <h2 className="text-4xl font-bold mt-2">

              164,320

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              High Impact Topics

            </p>

            <h2 className="text-4xl font-bold mt-2">

              328

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Brain className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Confidence

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

              Knowledge Graph Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Subject

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>All Subjects</option>
                <option>History</option>
                <option>Polity</option>
                <option>Science</option>
                <option>Economy</option>
                <option>Geography</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Graph Depth

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
                <option>Complete Graph</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Connection Type

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Prerequisite</option>
                <option>Semantic</option>
                <option>Cross Subject</option>
                <option>All Connections</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                AI Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Semantic AI</option>
                <option>Recommendation AI</option>
                <option>Knowledge Discovery</option>

              </select>

            </div>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              AI Knowledge Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Analyze relationships between syllabus topics, books, notes, previous year questions, current affairs, and recommend intelligent learning paths..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">

                <Brain size={18}/>

                Generate Knowledge Graph

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

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search knowledge nodes..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* Knowledge Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge Graph Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Topic</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Connected Nodes</th>
                  <th className="p-4 text-left">Importance</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredNodes.map((node)=>(

                  <tr
                    key={node.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{node.topic}</td>
                    <td className="p-4">{node.subject}</td>
                    <td className="p-4">{node.connectedNodes}</td>
                    <td className="p-4">{node.importance}%</td>
                    <td className="p-4">{node.status}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Interactive Knowledge Graph */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Network className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Interactive Knowledge Graph

              </h2>

            </div>

            <div className="h-[420px] flex items-center justify-center">

              <div className="text-center text-gray-500">

                <Network size={72} className="mx-auto text-indigo-500 mb-4"/>

                <p>

                  Interactive Graph Visualization
                  (React Flow / Cytoscape.js / D3.js)

                </p>

              </div>

            </div>

          </div>

          {/* Topic Dependency */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <GitBranch className="text-green-600"/>

              <h2 className="text-xl font-bold">

                Topic Dependency Mapping

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "History → Freedom Movement",
                "Polity → Constitution",
                "Economy → Budget",
                "Science → Space Missions",
                "Environment → Climate Change",
                "Tamil → Sangam Literature",
                "Geography → Indian Rivers",
                "Current Affairs → Government Schemes",
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

        </div>

        {/* Resource Relationship Explorer */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Layers3 className="text-purple-600"/>

            <h2 className="text-2xl font-bold">

              Resource Relationship Explorer

            </h2>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

            {[
              "Books",
              "Notes",
              "MCQs",
              "PYQs",
              "Current Affairs",
              "Videos",
              "Flashcards",
              "Podcasts",
              "Mind Maps",
              "Infographics",
              "AI Tutor",
              "Mock Tests",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-purple-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* AI Concept Clustering */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Concept Clustering

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Indian History",
                "World Geography",
                "Indian Polity",
                "Economics",
                "General Science",
                "Current Affairs",
                "Tamil Literature",
                "Mental Ability",
              ].map((cluster)=>(

                <div
                  key={cluster}
                  className="border rounded-lg p-4 hover:bg-blue-50"
                >

                  {cluster}

                </div>

              ))}

            </div>

          </div>

          {/* High Impact */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                High Impact Topic Discovery

              </h2>

            </div>

            <div className="p-6 space-y-4">

              {[
                "Indian Constitution",
                "Freedom Movement",
                "Government Schemes",
                "Economy",
                "Environment",
                "Current Affairs",
              ].map((topic)=>(

                <div
                  key={topic}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  ⭐ {topic}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Semantic Search */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Semantic Search

            </h2>

          </div>

          <div className="p-6">

            <input

              className="w-full border rounded-lg p-4"

              placeholder="Ask anything about TNPSC knowledge graph..."

            />

            <div className="grid md:grid-cols-3 gap-5 mt-6">

              {[
                "Related Topics",
                "Recommended Books",
                "Connected PYQs",
                "Important Notes",
                "Mock Questions",
                "Current Affairs",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-xl p-5 hover:bg-indigo-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Cross Subject Explorer */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Globe className="text-green-600"/>

            <h2 className="text-2xl font-bold">

              Cross Subject Relationship Explorer

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "History ↔ Polity",
              "Science ↔ Environment",
              "Economy ↔ Current Affairs",
              "Geography ↔ Disaster Management",
              "Tamil ↔ History",
              "Polity ↔ Economy",
              "Science ↔ Technology",
              "History ↔ Culture",
            ].map((item)=>(

              <div
                key={item}
                className="border rounded-xl p-4 hover:bg-green-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Knowledge Coverage Heatmap */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-orange-600"/>

            <h2 className="text-2xl font-bold">

              Knowledge Coverage Heatmap

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["History","96%"],
              ["Polity","98%"],
              ["Science","91%"],
              ["Economy","89%"],
              ["Geography","92%"],
              ["Tamil","97%"],
              ["Current Affairs","88%"],
              ["Aptitude","94%"],
            ].map(([subject,value])=>(

              <div
                key={subject}
                className="border rounded-xl p-5 hover:bg-orange-50"
              >

                <div className="font-semibold">

                  {subject}

                </div>

                <div className="text-3xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

                {/* Graph Analytics Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Knowledge Graph Analytics Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Knowledge Coverage","96.8%"],
              ["Graph Density","89.4%"],
              ["Average Node Degree","18.2"],
              ["Semantic Accuracy","99.1%"],
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

        {/* Graph Intelligence */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Graph Intelligence Metrics

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Connected Topics","18,462"],
                ["Cross Subject Links","42,138"],
                ["Resource Links","124,903"],
                ["Knowledge Clusters","382"],
                ["Average Learning Path","14 Nodes"],
                ["AI Suggestions","5,820"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{
                        width:`${Math.min(
                          parseFloat(value.toString()) / 200,
                          100
                        )}%`
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Recommendation Engine

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                "Recommended Topics",
                "Suggested Books",
                "Related PYQs",
                "Important Notes",
                "Video Lessons",
                "Mock Tests",
                "Flashcards",
                "Daily Revision",
              ].map((item)=>(

                <div
                  key={item}
                  className="border rounded-xl p-4 hover:bg-green-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Activity History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Knowledge Graph Activity History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Activity</th>
                  <th className="p-4 text-left">Affected Nodes</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026</td>
                  <td className="p-4">Knowledge Graph Rebuilt</td>
                  <td className="p-4">18,462</td>
                  <td className="p-4">Completed</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">18 Jul 2026</td>
                  <td className="p-4">Semantic Relationship Update</td>
                  <td className="p-4">4,821</td>
                  <td className="p-4">Completed</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Audit Log */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Audit Log

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "Knowledge graph synchronized",
              "Semantic relationships updated",
              "Duplicate concepts merged",
              "Learning paths regenerated",
              "Recommendations refreshed",
              "Coverage analysis completed",
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

            Export Knowledge Graph

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export GraphML

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

              <p>GET /api/v1/knowledge-graph/nodes</p>
              <p>GET /api/v1/knowledge-graph/relationships</p>
              <p>POST /api/v1/knowledge-graph/search</p>
              <p>POST /api/v1/knowledge-graph/recommendations</p>
              <p>POST /api/v1/knowledge-graph/rebuild</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/knowledge-graph/analytics</p>
              <p>GET /api/v1/knowledge-graph/history</p>
              <p>POST /api/v1/knowledge-graph/export/pdf</p>
              <p>POST /api/v1/knowledge-graph/export/excel</p>
              <p>POST /api/v1/knowledge-graph/export/graphml</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}