"use client";

import {
  Bell,
  Globe,
  Moon,
  Sun,
  Laptop,
  Shield,
  Smartphone,
  Accessibility,
  Cloud,
  Settings,
} from "lucide-react";

export default function SettingsPage() {

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Customize your TNPSC MASTER AI experience.
          </p>

        </div>

        <Settings
          size={40}
          className="text-indigo-600"
        />

      </div>

      {/* General Preferences */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Appearance */}

        <div className="rounded-2xl border bg-white shadow-sm p-8">

          <div className="flex items-center gap-3">

            <Moon className="text-indigo-600" />

            <h2 className="text-2xl font-bold">
              Appearance
            </h2>

          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">

            <button className="rounded-xl border py-5 hover:bg-slate-50">

              <Sun className="mx-auto mb-2" />

              Light

            </button>

            <button className="rounded-xl border py-5 hover:bg-slate-50">

              <Moon className="mx-auto mb-2" />

              Dark

            </button>

            <button className="rounded-xl bg-indigo-600 py-5 text-white">

              <Laptop className="mx-auto mb-2" />

              System

            </button>

          </div>

        </div>

        {/* Language */}

        <div className="rounded-2xl border bg-white shadow-sm p-8">

          <div className="flex items-center gap-3">

            <Globe className="text-indigo-600" />

            <h2 className="text-2xl font-bold">
              Language
            </h2>

          </div>

          <div className="space-y-4 mt-8">

            <button className="w-full rounded-xl border py-4">
              Tamil
            </button>

            <button className="w-full rounded-xl border py-4">
              English
            </button>

            <button className="w-full rounded-xl bg-indigo-600 py-4 text-white">
              Tamil + English
            </button>

          </div>

        </div>

      </div>

      {/* Notifications */}

      <div className="rounded-2xl border bg-white shadow-sm p-8">

        <div className="flex items-center gap-3 mb-8">

          <Bell className="text-indigo-600" />

          <h2 className="text-2xl font-bold">
            Notifications
          </h2>

        </div>

        <div className="space-y-5">

          {[
            "Daily Reminder",
            "Current Affairs",
            "Mock Test Alerts",
            "Performance Report",
            "App Updates",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center justify-between border-b pb-5"
            >

              <span>{item}</span>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Accessibility */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm p-8">

          <div className="flex items-center gap-3">

            <Accessibility className="text-indigo-600" />

            <h2 className="text-2xl font-bold">
              Accessibility
            </h2>

          </div>

          <div className="mt-8 space-y-4">

            {[
              "Large Font",
              "High Contrast",
              "Reduce Motion",
              "Reading Mode",
            ].map((option) => (

              <button
                key={option}
                className="w-full rounded-xl border p-4 text-left hover:bg-indigo-50"
              >
                {option}
              </button>

            ))}

          </div>

        </div>

        {/* Sync */}

        <div className="rounded-2xl border bg-white shadow-sm p-8">

          <div className="flex items-center gap-3">

            <Cloud className="text-indigo-600" />

            <h2 className="text-2xl font-bold">
              Cloud Sync
            </h2>

          </div>

          <div className="mt-8">

            <div className="rounded-xl bg-slate-50 p-5">

              <p className="text-slate-500">
                Last Synchronization
              </p>

              <h3 className="mt-2 font-semibold">
                Today • 12:30 PM
              </h3>

            </div>

            <button className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white">

              Sync Now

            </button>

          </div>

        </div>

      </div>

      {/* Privacy Summary */}

      <div className="rounded-2xl border bg-white shadow-sm p-8">

        <div className="flex items-center gap-3">

          <Shield className="text-indigo-600" />

          <h2 className="text-2xl font-bold">
            Privacy Overview
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          {[
            ["Login Security", "Enabled"],
            ["Cloud Backup", "Enabled"],
            ["Two-Factor Auth", "Disabled"],
            ["Data Encryption", "Enabled"],
          ].map(([title, status]) => (

            <div
              key={title}
              className="rounded-xl bg-slate-50 p-5"
            >

              <p className="text-slate-500">
                {title}
              </p>

              <h3 className="mt-2 font-bold">
                {status}
              </h3>

            </div>

          ))}

        </div>

      </div>

            {/* Security Settings */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Security Settings
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {[
            {
              title: "Change Password",
              description: "Update your account password regularly.",
            },
            {
              title: "Two-Factor Authentication",
              description: "Add an extra layer of security.",
            },
            {
              title: "Login Sessions",
              description: "Manage devices currently signed in.",
            },
            {
              title: "Recovery Email",
              description: "Update your recovery email address.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border p-5"
            >

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>

              </div>

              <button className="rounded-lg border px-5 py-2 hover:bg-slate-50">

                Manage

              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Connected Devices */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Connected Devices
          </h2>

        </div>

        <div className="divide-y">

          {[
            ["Windows Desktop", "Active Now"],
            ["Android Mobile", "Yesterday"],
            ["Chrome Browser", "2 Days Ago"],
          ].map(([device, status]) => (

            <div
              key={device}
              className="flex items-center justify-between p-5"
            >

              <div>

                <h3 className="font-semibold">
                  {device}
                </h3>

                <p className="text-sm text-slate-500">
                  {status}
                </p>

              </div>

              <button className="rounded-lg border px-4 py-2">

                Remove

              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Connected Accounts */}

      <div className="rounded-2xl border bg-white shadow-sm p-8">

        <div className="flex items-center gap-3">

          <Smartphone
            className="text-indigo-600"
            size={28}
          />

          <h2 className="text-2xl font-bold">
            Connected Accounts
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          {[
            "Google",
            "Microsoft",
            "GitHub",
            "Apple ID",
          ].map((provider) => (

            <div
              key={provider}
              className="flex items-center justify-between rounded-xl border p-5"
            >

              <span className="font-medium">
                {provider}
              </span>

              <button className="rounded-lg border px-4 py-2">

                Connect

              </button>

            </div>

          ))}

        </div>

      </div>

      {/* Data Management */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm p-8">

          <h2 className="text-2xl font-bold">
            Data Management
          </h2>

          <p className="mt-2 text-slate-500">
            Export or import your study progress and application data.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Export Data
            </button>

            <button className="rounded-xl border px-6 py-3">
              Import Data
            </button>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm p-8">

          <h2 className="text-2xl font-bold">
            Storage
          </h2>

          <p className="mt-2 text-slate-500">
            Manage cached files and offline content.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl border px-6 py-3">
              Clear Cache
            </button>

            <button className="rounded-xl border px-6 py-3">
              Clear Offline Data
            </button>

          </div>

        </div>

      </div>

      {/* About */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            About TNPSC MASTER AI
          </h2>

          <p className="mt-3 text-indigo-100">
            An AI-powered learning platform designed for comprehensive TNPSC preparation with books, notes, current affairs, mock tests, analytics, and personalized recommendations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div>

              <p className="text-indigo-200">
                Version
              </p>

              <h3 className="text-2xl font-bold">
                v1.0.0
              </h3>

            </div>

            <div>

              <p className="text-indigo-200">
                Build
              </p>

              <h3 className="text-2xl font-bold">
                Production
              </h3>

            </div>

            <div>

              <p className="text-indigo-200">
                License
              </p>

              <h3 className="text-2xl font-bold">
                Proprietary
              </h3>

            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
              Privacy Policy
            </button>

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">
              Terms of Service
            </button>

            <button className="rounded-xl border border-white px-6 py-3">
              Contact Support
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}