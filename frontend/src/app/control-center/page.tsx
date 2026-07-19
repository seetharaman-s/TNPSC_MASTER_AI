"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Activity,
  Brain,
  Database,
  Users,
  Bell,
  ShieldCheck,
  Settings,
  Download,
  Search,
  Filter,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "AI Question Generator",
    status: "Online",
    uptime: "99.98%",
  },
  {
    id: 2,
    name: "AI Study Planner",
    status: "Online",
    uptime: "99.95%",
  },
  {
    id: 3,
    name: "Knowledge Graph",
    status: "Online",
    uptime: "99.92%",
  },
  {
    id: 4,
    name: "Analytics Engine",
    status: "Maintenance",
    uptime: "98.84%",
  },
];

export default function ControlCenterPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            TNPSC MASTER AI Control Center
          </h1>

          <p className="mt-2 text-slate-500">
            Centralized monitoring and management dashboard for all
            TNPSC MASTER AI modules, services, analytics, and system health.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Export System Report

        </button>

      </div>

      {/* Overview Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "System Health",
            value: "99.9%",
            icon: Activity,
          },
          {
            title: "AI Services",
            value: "18",
            icon: Brain,
          },
          {
            title: "Modules",
            value: "50",
            icon: LayoutDashboard,
          },
          {
            title: "Database Status",
            value: "Healthy",
            icon: Database,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div className="rounded-xl bg-indigo-100 p-4">

                  <Icon
                    size={28}
                    className="text-indigo-600"
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Search */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="flex flex-wrap gap-4">

          <div className="relative flex-1">

            <Search
              size={20}
              className="absolute left-4 top-3 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search services..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* AI Services */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Brain
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            AI Services Monitoring
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {services.map((service) => (

            <div
              key={service.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-lg font-semibold">
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Uptime: {service.uptime}
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {service.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Content Management & User Activity */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Database
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Content Management Overview
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Books Library: 1,250",
              "Notes Collection: 680",
              "Question Bank: 18,500 MCQs",
              "Current Affairs: 4,300 Articles",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Users
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              User Activity Insights
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Today's Study Time: 4h 20m",
              "Mock Tests Completed: 152",
              "Flashcards Reviewed: 980",
              "Study Streak: 41 Days",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl border p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Notifications & Backup */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Bell
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Notification & Automation Center
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Daily revision reminder enabled",
              "Weekly mock test schedule active",
              "Current affairs sync completed",
              "AI study plan updated successfully",
            ].map((notification) => (

              <div
                key={notification}
                className="rounded-xl border p-4"
              >
                {notification}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <ShieldCheck
              size={24}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Backup & Restore Manager
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Automatic daily backup enabled",
              "Last backup completed successfully",
              "Restore point available",
              "Database integrity verified",
            ].map((backup) => (

              <div
                key={backup}
                className="rounded-xl border p-4"
              >
                {backup}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* System Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            System Analytics Dashboard
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Activity
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Real-Time System Monitoring
            </h3>

            <p className="mt-2 text-slate-500">
              Integrate Recharts (AreaChart, LineChart, BarChart, PieChart)
              to visualize system health, API response times, resource usage,
              storage utilization, and AI service performance.
            </p>

          </div>

        </div>

      </div>

      {/* Global Settings */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Settings
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Global Settings & Maintenance
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Manage application configuration",
            "Configure AI models and services",
            "Schedule maintenance tasks",
            "Review system logs and diagnostics",
          ].map((setting) => (

            <div
              key={setting}
              className="rounded-xl border p-4"
            >
              {setting}
            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Backup Now
        </button>

        <button className="rounded-xl border px-6 py-3">
          Export System Analytics
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Open Control Center
        </button>

      </div>

    </div>

  );

}