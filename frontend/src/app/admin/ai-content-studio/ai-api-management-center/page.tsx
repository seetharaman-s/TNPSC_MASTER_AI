"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Webhook,
  Key,
  Shield,
  Activity,
  Search,
  Filter,
  Settings,
  Sparkles,
  Server,
  Globe,
  Cpu,
  Database,
  Lock,
  BarChart3,
  GitBranch,
} from "lucide-react";

interface APIService {
  id: string;
  service: string;
  version: string;
  status: "Healthy" | "Warning" | "Offline";
  requests: number;
}

const apiServices: APIService[] = [
  {
    id: "API001",
    service: "Question Generator API",
    version: "v1",
    status: "Healthy",
    requests: 124850,
  },
  {
    id: "API002",
    service: "Knowledge Graph API",
    version: "v1",
    status: "Healthy",
    requests: 86420,
  },
];

export default function AIAPIManagementCenterPage() {

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return apiServices.filter(item =>
      item.service.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (

    <div className="min-h-screen bg-slate-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Webhook className="text-cyan-600"/>

              AI API Management Center

            </h1>

            <p className="text-gray-500 mt-2">

              Enterprise API Gateway, FastAPI management,
              API Keys, OAuth, Webhooks, Monitoring,
              Rate Limiting and OpenAPI Administration.

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

            <Server className="text-cyan-600"/>

            <p className="text-gray-500 mt-3">

              APIs

            </p>

            <h2 className="text-4xl font-bold mt-2">

              86

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Activity className="text-green-600"/>

            <p className="text-gray-500 mt-3">

              Daily Requests

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2.4M

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Shield className="text-indigo-600"/>

            <p className="text-gray-500 mt-3">

              Security Score

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.8%

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Cpu className="text-orange-600"/>

            <p className="text-gray-500 mt-3">

              Uptime

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.99%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-cyan-600"/>

            <h2 className="text-2xl font-bold">

              API Gateway Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <select className="border rounded-lg p-3">

              <option>Production</option>
              <option>Development</option>
              <option>Testing</option>

            </select>

            <select className="border rounded-lg p-3">

              <option>JWT</option>
              <option>OAuth2</option>
              <option>API Key</option>

            </select>

            <select className="border rounded-lg p-3">

              <option>FastAPI</option>
              <option>REST</option>
              <option>GraphQL</option>

            </select>

            <select className="border rounded-lg p-3">

              <option>OpenAPI 3.1</option>
              <option>Swagger</option>

            </select>

          </div>

        </div>

        {/* AI Prompt */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Sparkles className="text-cyan-600"/>

            <h2 className="text-2xl font-bold">

              API Automation Prompt

            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={6}
              className="w-full border rounded-lg p-4"
              placeholder="Generate FastAPI endpoints, OpenAPI documentation, authentication, validation, API gateway rules, webhooks and monitoring..."
            />

            <div className="flex gap-4 mt-5">

              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg">

                Generate API

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
                placeholder="Search APIs..."
                className="w-full border rounded-lg py-3 pl-10"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>

              Filter

            </button>

          </div>

        </div>

        {/* API Repository */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              API Repository

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Version</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Requests</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map(api => (

                  <tr key={api.id} className="border-t hover:bg-gray-50">

                    <td className="p-4">{api.service}</td>
                    <td className="p-4">{api.version}</td>
                    <td className="p-4">{api.status}</td>
                    <td className="p-4">{api.requests.toLocaleString()}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* API Key Management */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b flex items-center gap-2">

              <Key className="text-cyan-600"/>

              <h2 className="text-xl font-bold">

                API Key Management

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Admin Keys",
                "Student Keys",
                "Faculty Keys",
                "Partner APIs",
                "Internal Services",
                "External APIs",
                "Temporary Keys",
                "Revoked Keys",
              ].map(item => (

                <div
                  key={item}
                  className="border rounded-xl p-5 hover:bg-cyan-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Webhooks */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Webhook Management

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Question Generated",
                "PDF Imported",
                "OCR Completed",
                "Exam Published",
                "User Registered",
                "Payment Success",
                "Notification",
                "Analytics Sync",
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

        {/* Rate Limiting */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Rate Limiting Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Anonymous","60/min"],
              ["Student","300/min"],
              ["Faculty","800/min"],
              ["Admin","Unlimited"],
              ["Internal API","Unlimited"],
              ["Webhook","500/min"],
              ["AI Engine","1500/min"],
              ["Partner","1000/min"],
            ].map(([role,limit]) => (

              <div
                key={role}
                className="border rounded-xl p-5 hover:bg-orange-50"
              >

                <div className="font-semibold">

                  {role}

                </div>

                <div className="text-2xl font-bold mt-3">

                  {limit}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Authentication */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                OAuth2 & JWT Clients

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                "Admin Portal",
                "Student Portal",
                "Faculty Portal",
                "Mobile App",
                "AI Studio",
                "Analytics",
                "External Apps",
                "Developer Portal",
              ].map(item => (

                <div
                  key={item}
                  className="border rounded-lg p-4 hover:bg-indigo-50"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* API Usage */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                API Usage Analytics

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Question API","96%"],
                ["OCR API","84%"],
                ["Voice API","71%"],
                ["Knowledge API","92%"],
                ["Analytics API","88%"],
                ["Current Affairs API","81%"],
              ].map(([api,value]) => (

                <div key={api}>

                  <div className="flex justify-between mb-2">

                    <span>{api}</span>

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

        </div>

        {/* Logs */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Request & Response Logs

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Time</th>
                  <th className="p-4 text-left">Endpoint</th>
                  <th className="p-4 text-left">Method</th>
                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">11:15 AM</td>
                  <td className="p-4">/questions/generate</td>
                  <td className="p-4">POST</td>
                  <td className="p-4">200 OK</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">11:12 AM</td>
                  <td className="p-4">/ocr/upload</td>
                  <td className="p-4">POST</td>
                  <td className="p-4">201 Created</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* API Version */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              API Version Management

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              "v1 Stable",
              "v2 Beta",
              "v3 Development",
              "Legacy APIs",
            ].map(item => (

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-blue-50 text-center"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* OpenAPI */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              OpenAPI Documentation Center

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">

            {[
              "Swagger UI",
              "Redoc",
              "OpenAPI JSON",
              "SDK Generator",
              "API Playground",
              "Developer Guide",
            ].map(item => (

              <div
                key={item}
                className="border rounded-xl p-5 hover:bg-purple-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

                {/* Executive API Dashboard */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-cyan-600"/>

            <h2 className="text-2xl font-bold">

              Executive API Dashboard

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            {[
              ["Total APIs","86"],
              ["Requests Today","2.48M"],
              ["Average Latency","48 ms"],
              ["Availability","99.99%"],
            ].map(([title,value])=>(

              <div
                key={title}
                className="border rounded-xl p-6 hover:bg-cyan-50"
              >

                <div className="text-gray-500">

                  {title}

                </div>

                <div className="text-4xl font-bold mt-3">

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Traffic Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                API Traffic Analytics

              </h2>

            </div>

            <div className="p-6 space-y-5">

              {[
                ["Authentication","98%"],
                ["Question Generator","95%"],
                ["OCR Service","86%"],
                ["Knowledge Graph","91%"],
                ["Voice Tutor","77%"],
                ["Analytics","83%"],
              ].map(([name,value])=>(

                <div key={name}>

                  <div className="flex justify-between mb-2">

                    <span>{name}</span>

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

          {/* Gateway Health */}

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Gateway Health

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-4 p-6">

              {[
                ["Gateway","Healthy"],
                ["JWT","Healthy"],
                ["Redis","Healthy"],
                ["PostgreSQL","Healthy"],
                ["FastAPI","Healthy"],
                ["Load Balancer","Healthy"],
              ].map(([title,status])=>(

                <div
                  key={title}
                  className="border rounded-lg p-5 hover:bg-green-50"
                >

                  <div className="font-semibold">

                    {title}

                  </div>

                  <div className="text-green-600 mt-3">

                    {status}

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

              API Audit History

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Time</th>
                  <th className="p-4 text-left">API</th>
                  <th className="p-4 text-left">Action</th>
                  <th className="p-4 text-left">Result</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026 11:18</td>
                  <td className="p-4">Question API</td>
                  <td className="p-4">Version Updated</td>
                  <td className="p-4 text-green-600">Success</td>

                </tr>

                <tr className="border-t">

                  <td className="p-4">19 Jul 2026 10:56</td>
                  <td className="p-4">OCR API</td>
                  <td className="p-4">Health Check</td>
                  <td className="p-4 text-green-600">Passed</td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Export Reports

          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <button className="bg-cyan-600 text-white py-3 rounded-lg">

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

        {/* FastAPI Endpoints */}

        <div className="bg-cyan-50 border border-cyan-200 rounded-xl mt-8 p-6 mb-12">

          <h2 className="text-xl font-bold mb-4">

            FastAPI API Gateway Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">

            <div className="space-y-2">

              <p>GET /api/v1/apis</p>
              <p>GET /api/v1/apis/dashboard</p>
              <p>GET /api/v1/apis/analytics</p>
              <p>GET /api/v1/apis/traffic</p>
              <p>GET /api/v1/apis/health</p>
              <p>GET /api/v1/apis/logs</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/apis/generate-key</p>
              <p>POST /api/v1/apis/revoke-key</p>
              <p>POST /api/v1/apis/webhooks</p>
              <p>POST /api/v1/apis/export/pdf</p>
              <p>POST /api/v1/apis/export/excel</p>
              <p>POST /api/v1/apis/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}