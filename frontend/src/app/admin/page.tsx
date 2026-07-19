"use client";

import Link from "next/link";
import {
  Users,
  BookOpen,
  Newspaper,
  FileQuestion,
  ClipboardList,
  Brain,
  Activity,
  TrendingUp,
  Shield,
  Settings,
} from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Manage users, study materials, AI services and the complete TNPSC MASTER AI platform.
          </p>

        </div>

        <Link
          href="/admin/settings"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold"
        >
          Admin Settings
        </Link>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Registered Users",
            value: "12,548",
            icon: Users,
          },
          {
            title: "Books",
            value: "482",
            icon: BookOpen,
          },
          {
            title: "Question Bank",
            value: "42,185",
            icon: FileQuestion,
          },
          {
            title: "Mock Tests",
            value: "680",
            icon: ClipboardList,
          },
        ].map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-500">
                    {card.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    {card.value}
                  </h2>

                </div>

                <div className="rounded-xl bg-indigo-100 p-4">

                  <Icon
                    className="text-indigo-600"
                    size={28}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Quick Actions */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            ["Manage Users", "/admin/users"],
            ["Upload Books", "/admin/books"],
            ["Publish News", "/admin/current-affairs"],
            ["Create Mock Test", "/admin/mock-tests"],
            ["Manage Notes", "/admin/notes"],
            ["Question Bank", "/admin/questions"],
            ["AI Content", "/admin/ai"],
            ["Reports", "/admin/reports"],
          ].map(([title, href]) => (

            <Link
              key={title}
              href={href}
              className="rounded-xl border p-6 hover:bg-indigo-50 transition"
            >

              <h3 className="font-semibold text-lg">
                {title}
              </h3>

            </Link>

          ))}

        </div>

      </div>

      {/* Platform Analytics */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Analytics */}

        <div className="xl:col-span-2 rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Platform Analytics
            </h2>

          </div>

          <div className="p-8">

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <TrendingUp
                  size={60}
                  className="mx-auto mb-4 text-indigo-600"
                />

                <h3 className="text-xl font-semibold">
                  Analytics Charts
                </h3>

                <p className="mt-2 text-slate-500">
                  Users • Traffic • Tests • Books • AI Usage
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* System Status */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-xl font-bold">
              System Status
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              ["API Server", "Online"],
              ["Database", "Healthy"],
              ["AI Engine", "Running"],
              ["Storage", "Normal"],
              ["Email Service", "Active"],
            ].map(([name, status]) => (

              <div
                key={name}
                className="flex items-center justify-between"
              >

                <span>{name}</span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  {status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

            {/* User & Content Management */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* User Management */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-6">

            <h2 className="text-2xl font-bold">
              User Management
            </h2>

            <Link
              href="/admin/users"
              className="text-indigo-600 font-medium"
            >
              View All
            </Link>

          </div>

          <div className="divide-y">

            {[
              ["Total Users", "12,548"],
              ["Active Today", "2,148"],
              ["New Registrations", "84"],
              ["Premium Users", "2,386"],
              ["Blocked Users", "16"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="flex items-center justify-between p-5"
              >

                <span>{label}</span>

                <span className="font-semibold">
                  {value}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Content Overview */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-6">

            <h2 className="text-2xl font-bold">
              Content Overview
            </h2>

            <Link
              href="/admin/content"
              className="text-indigo-600 font-medium"
            >
              Manage
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-5 p-6">

            {[
              ["Books", "482"],
              ["Notes", "1,284"],
              ["Current Affairs", "3,842"],
              ["Question Papers", "1,120"],
              ["MCQs", "42,185"],
              ["Videos", "356"],
            ].map(([title, value]) => (

              <div
                key={title}
                className="rounded-xl bg-slate-50 p-5"
              >

                <p className="text-sm text-slate-500">
                  {title}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {value}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Publishing Modules */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Publishing Center
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            {
              title: "Books",
              icon: BookOpen,
              href: "/admin/books",
            },
            {
              title: "Current Affairs",
              icon: Newspaper,
              href: "/admin/current-affairs",
            },
            {
              title: "Question Bank",
              icon: FileQuestion,
              href: "/admin/questions",
            },
            {
              title: "Mock Tests",
              icon: ClipboardList,
              href: "/admin/mock-tests",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border p-6 hover:bg-indigo-50 transition"
              >

                <Icon
                  size={34}
                  className="text-indigo-600 mb-4"
                />

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Manage and publish content.
                </p>

              </Link>

            );

          })}

        </div>

      </div>

      {/* AI Services */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-4">

            <Brain size={36} />

            <h2 className="text-3xl font-bold">
              AI Services
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              {
                title: "Question Generator",
                desc: "Generate TNPSC MCQs automatically.",
              },
              {
                title: "Notes Generator",
                desc: "Create structured study notes using AI.",
              },
              {
                title: "Current Affairs Summary",
                desc: "Generate daily one-liners instantly.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur"
              >

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-indigo-100">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Recent Admin Activities */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Recent Admin Activities
          </h2>

        </div>

        <div className="divide-y">

          {[
            "New TNPSC Group 4 Book uploaded",
            "150 Current Affairs articles published",
            "Mock Test #68 created",
            "Question Bank updated with 500 MCQs",
            "AI generated 45 study notes",
            "Weekly analytics report exported",
          ].map((activity) => (

            <div
              key={activity}
              className="flex items-center gap-4 p-5 hover:bg-slate-50"
            >

              <Activity
                size={20}
                className="text-indigo-600"
              />

              <span>{activity}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Alerts */}

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

        <div className="flex items-start gap-4">

          <Shield
            className="text-amber-600"
            size={28}
          />

          <div>

            <h2 className="text-xl font-bold text-amber-700">
              System Alerts
            </h2>

            <ul className="mt-3 space-y-2 text-amber-800">

              <li>• Scheduled database backup tonight at 02:00 AM.</li>
              <li>• 12 new books are waiting for admin approval.</li>
              <li>• AI service usage reached 78% of today's quota.</li>
              <li>• Review pending user-reported questions.</li>

            </ul>

          </div>

        </div>

      </div>

            {/* Platform Configuration */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* System Configuration */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-6">

            <h2 className="text-2xl font-bold">
              Platform Configuration
            </h2>

            <Settings
              size={26}
              className="text-indigo-600"
            />

          </div>

          <div className="space-y-5 p-6">

            {[
              "General Settings",
              "Application Branding",
              "Exam Configuration",
              "AI Model Settings",
              "Notification Settings",
              "Language Management",
            ].map((item) => (

              <button
                key={item}
                className="w-full rounded-xl border p-4 text-left hover:bg-indigo-50 transition"
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        {/* Backup */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Backup & Recovery
            </h2>

          </div>

          <div className="space-y-5 p-6">

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-slate-500">
                Last Backup
              </p>

              <h3 className="mt-2 font-semibold">
                Today • 02:00 AM
              </h3>

            </div>

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-slate-500">
                Backup Status
              </p>

              <h3 className="mt-2 text-green-600 font-semibold">
                Successful
              </h3>

            </div>

            <div className="flex flex-wrap gap-4">

              <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
                Create Backup
              </button>

              <button className="rounded-xl border px-6 py-3">
                Restore
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Roles & Permissions */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Roles & Permissions
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left">
                  Role
                </th>

                <th className="px-6 py-4 text-left">
                  Users
                </th>

                <th className="px-6 py-4 text-left">
                  Permissions
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Super Admin", "2", "Full Access", "Active"],
                ["Admin", "8", "Manage Platform", "Active"],
                ["Editor", "15", "Content Management", "Active"],
                ["Moderator", "12", "Review Content", "Active"],
              ].map((row) => (

                <tr
                  key={row[0]}
                  className="border-t"
                >

                  {row.map((cell) => (

                    <td
                      key={cell}
                      className="px-6 py-5"
                    >
                      {cell}
                    </td>

                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Audit Logs */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Audit Logs
          </h2>

        </div>

        <div className="divide-y">

          {[
            "Admin uploaded TNPSC Book - 10:15 AM",
            "Question Bank updated - 09:42 AM",
            "AI generated 120 MCQs - 08:55 AM",
            "Database backup completed - 02:00 AM",
            "User role updated - Yesterday",
          ].map((log) => (

            <div
              key={log}
              className="p-5 hover:bg-slate-50"
            >
              {log}
            </div>

          ))}

        </div>

      </div>

      {/* Server Health */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[
          ["CPU Usage", "32%"],
          ["Memory Usage", "54%"],
          ["Storage", "68%"],
          ["Network", "Normal"],
        ].map(([title, value]) => (

          <div
            key={title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >

            <p className="text-slate-500">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-indigo-600">
              {value}
            </h2>

          </div>

        ))}

      </div>

      {/* Maintenance */}

      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            Maintenance Controls
          </h2>

          <p className="mt-2 text-slate-300">
            Perform maintenance tasks and monitor platform health.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              Enable Maintenance Mode
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Restart Services
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Clear Cache
            </button>

            <button className="rounded-xl border border-red-400 px-6 py-3 text-red-200">
              Emergency Shutdown
            </button>

          </div>

        </div>

      </div>

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Logs
        </button>

        <button className="rounded-xl border px-6 py-3">
          System Report
        </button>

        <button className="rounded-xl bg-red-600 px-6 py-3 text-white">
          Secure Logout
        </button>

      </div>

    </div>

  );
}