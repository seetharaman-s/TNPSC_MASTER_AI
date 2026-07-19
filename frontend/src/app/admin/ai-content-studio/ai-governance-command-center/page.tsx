"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Brain,
  Settings,
  Search,
  Filter,
  Sparkles,
  Activity,
  Database,
  Lock,
  Users,
  Server,
  Cpu,
  Globe,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

interface GovernanceModule {
  id: string;
  module: string;
  category: string;
  status: "Healthy" | "Warning" | "Offline";
  aiHealth: number;
}

const modules: GovernanceModule[] = [
  {
    id: "GOV001",
    module: "AI Knowledge Fabric",
    category: "Knowledge",
    status: "Healthy",
    aiHealth: 99,
  },
  {
    id: "GOV002",
    module: "AI Current Affairs Analyzer",
    category: "Current Affairs",
    status: "Healthy",
    aiHealth: 98,
  },
];

export default function AIGovernanceCommandCenterPage() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return modules.filter(item =>
      item.module.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Shield className="text-indigo-600"/>

              AI Governance Command Center

            </h1>

            <p className="text-gray-500 mt-2">

              Central governance platform for all enterprise AI modules,
              permissions, audit, compliance, security, monitoring,
              orchestration and operational intelligence.

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
            <Brain className="text-indigo-600"/>
            <p className="mt-4 text-gray-500">AI Modules</p>
            <h2 className="text-4xl font-bold mt-2">42</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <Shield className="text-green-600"/>
            <p className="mt-4 text-gray-500">Healthy Services</p>
            <h2 className="text-4xl font-bold mt-2">41</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <Users className="text-orange-600"/>
            <p className="mt-4 text-gray-500">Active Users</p>
            <h2 className="text-4xl font-bold mt-2">5,286</h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <Cpu className="text-purple-600"/>
            <p className="mt-4 text-gray-500">AI Health</p>
            <h2 className="text-4xl font-bold mt-2">99.7%</h2>
          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Governance Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <select className="border rounded-lg p-3">
              <option>All Modules</option>
              <option>Learning</option>
              <option>Assessment</option>
              <option>Analytics</option>
            </select>

            <select className="border rounded-lg p-3">
              <option>Production</option>
              <option>Testing</option>
            </select>

            <select className="border rounded-lg p-3">
              <option>RBAC Enabled</option>
              <option>Audit Enabled</option>
            </select>

            <select className="border rounded-lg p-3">
              <option>Live Monitoring</option>
              <option>Scheduled</option>
            </select>

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
                placeholder="Search AI modules..."
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

              AI Governance Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Module</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Health</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map(item => (

                  <tr key={item.id} className="border-t hover:bg-gray-50">

                    <td className="p-4">{item.module}</td>
                    <td className="p-4">{item.category}</td>
                    <td className="p-4">{item.status}</td>
                    <td className="p-4">{item.aiHealth}%</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* Enterprise RBAC */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Users className="text-indigo-600"/>

              <h2 className="text-xl font-bold">

                Enterprise RBAC Management

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Super Admin",
                "Administrator",
                "Faculty",
                "Content Reviewer",
                "Question Setter",
                "Student",
                "Guest",
                "API Client",
              ].map(role => (

                <div
                  key={role}
                  className="border rounded-xl p-5 hover:bg-indigo-50"
                >

                  {role}

                </div>

              ))}

            </div>

          </div>

          {/* User Management */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                User Management

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Active Users",
                "Blocked Users",
                "Faculty",
                "Students",
                "API Tokens",
                "Sessions",
                "Departments",
                "Organizations",
              ].map(item => (

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-green-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* AI Service Monitoring */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Server className="text-green-600"/>

            <h2 className="text-2xl font-bold">

              AI Service Monitoring

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["LLM Service","Healthy"],
              ["Vector Database","Healthy"],
              ["OCR Engine","Healthy"],
              ["Speech Engine","Healthy"],
              ["Analytics","Healthy"],
              ["Question Generator","Healthy"],
              ["Knowledge Graph","Healthy"],
              ["Current Affairs AI","Healthy"],
            ].map(([service,status]) => (

              <div
                key={service}
                className="border rounded-xl p-5 hover:bg-green-50"
              >

                <div className="font-semibold">

                  {service}

                </div>

                <div className="text-green-600 mt-3">

                  {status}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Infrastructure */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Infrastructure Dashboard

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["CPU","62%"],
                ["Memory","54%"],
                ["Storage","71%"],
                ["Database","43%"],
                ["Redis","35%"],
                ["GPU","58%"],
              ].map(([name,value]) => (

                <div key={name}>

                  <div className="flex justify-between mb-2">

                    <span>{name}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Security */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Lock className="text-red-600"/>

              <h2 className="text-xl font-bold">

                Security & Compliance

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "JWT Security",
                "RBAC",
                "Audit Logs",
                "Encryption",
                "HTTPS",
                "Backup",
                "Rate Limiting",
                "API Firewall",
              ].map(item => (

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-red-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Workflow */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              AI Workflow Orchestration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "Generate Questions",
              "Review Questions",
              "Knowledge Graph",
              "Current Affairs",
              "Digital Twin",
              "Learning Analytics",
              "Voice Tutor",
              "Study Planner",
            ].map(item => (

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-blue-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Alerts */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <AlertTriangle className="text-orange-600"/>

            <h2 className="text-2xl font-bold">

              Incident & Alert Center

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">

            {[
              "High CPU Usage",
              "Database Backup Completed",
              "New AI Model Available",
              "OCR Queue Delayed",
              "Redis Cache Refreshed",
              "Security Scan Passed",
            ].map(item => (

              <div
                key={item}
                className="border rounded-lg p-4 hover:bg-orange-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

                {/* Executive Governance Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Executive Governance Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["AI Services","42"],
              ["System Health","99.82%"],
              ["Security Score","99.4%"],
              ["Compliance","100%"],
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

        {/* Enterprise Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Enterprise Operational Analytics

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["CPU Usage","62%"],
                ["Memory Usage","54%"],
                ["Database Load","48%"],
                ["API Traffic","91%"],
                ["AI Requests","96%"],
                ["Workflow Success","99%"],
              ].map(([title,value])=>(

                <div key={title}>

                  <div className="flex justify-between mb-2">

                    <span>{title}</span>

                    <span>{value}</span>

                  </div>

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-indigo-600 h-3 rounded-full"
                      style={{ width:value }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Compliance */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Compliance Overview

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 p-6">

              {[
                ["Audit Passed","100%"],
                ["Backups","Daily"],
                ["Encryption","AES-256"],
                ["Authentication","JWT"],
                ["Role Security","Enabled"],
                ["API Protection","Enabled"],
              ].map(([title,value])=>(

                <div
                  key={title}
                  className="border rounded-xl p-5 hover:bg-green-50"
                >

                  <div className="font-semibold">

                    {title}

                  </div>

                  <div className="text-2xl font-bold mt-3">

                    {value}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Audit History */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Governance Audit History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Timestamp</th>
                  <th className="p-4 text-left">Module</th>
                  <th className="p-4 text-left">Action</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026 11:10</td>
                  <td className="p-4">Knowledge Fabric</td>
                  <td className="p-4">Synchronization</td>
                  <td className="p-4">Success</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026 10:42</td>
                  <td className="p-4">Current Affairs</td>
                  <td className="p-4">AI Analysis</td>
                  <td className="p-4">Completed</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Reports */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Governance Reports

          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <button className="bg-indigo-600 text-white py-3 rounded-lg">

              Export PDF

            </button>

            <button className="bg-green-600 text-white py-3 rounded-lg">

              Export Excel

            </button>

            <button className="border py-3 rounded-lg">

              Export CSV

            </button>

            <button className="border py-3 rounded-lg">

              Export JSON

            </button>

          </div>

        </div>

        {/* FastAPI */}

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl mt-8 p-6 mb-12">

          <h2 className="text-xl font-bold mb-4">

            FastAPI Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">

            <div className="space-y-2">

              <p>GET /api/v1/governance/dashboard</p>
              <p>GET /api/v1/governance/modules</p>
              <p>GET /api/v1/governance/audit</p>
              <p>POST /api/v1/governance/security-scan</p>
              <p>POST /api/v1/governance/compliance-check</p>

            </div>

            <div className="space-y-2">

              <p>GET /api/v1/governance/analytics</p>
              <p>GET /api/v1/governance/alerts</p>
              <p>POST /api/v1/governance/export/pdf</p>
              <p>POST /api/v1/governance/export/excel</p>
              <p>POST /api/v1/governance/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}