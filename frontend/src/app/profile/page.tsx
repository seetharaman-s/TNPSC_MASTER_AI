"use client";

import Link from "next/link";
import {
  User,
  Target,
  BookOpen,
  Globe,
  Moon,
  Sun,
  Trophy,
  Flame,
  Edit,
  Camera,
} from "lucide-react";

export default function ProfilePage() {

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your TNPSC preparation profile and preferences.
          </p>

        </div>

        <Link
          href="/settings"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium"
        >
          Account Settings
        </Link>

      </div>

      {/* Profile Card */}

      <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm">

        <div className="p-8">

          <div className="flex flex-col md:flex-row gap-8">

            <div className="relative">

              <div className="w-36 h-36 rounded-full bg-indigo-100 flex items-center justify-center">

                <User
                  size={72}
                  className="text-indigo-600"
                />

              </div>

              <button
                className="absolute bottom-0 right-0 rounded-full bg-indigo-600 p-3 text-white"
              >
                <Camera size={18} />
              </button>

            </div>

            <div className="flex-1">

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-3xl font-bold">
                    Seetha Raman
                  </h2>

                  <p className="mt-2 text-slate-500">
                    TNPSC Aspirant
                  </p>

                </div>

                <button className="rounded-lg border px-4 py-2 flex items-center gap-2">

                  <Edit size={18} />

                  Edit Profile

                </button>

              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-8">

                <div>

                  <p className="text-sm text-slate-500">
                    Target Exam
                  </p>

                  <h3 className="font-semibold mt-2">
                    TNPSC Group 4
                  </h3>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Preferred Language
                  </p>

                  <h3 className="font-semibold mt-2">
                    Tamil & English
                  </h3>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Daily Study Goal
                  </p>

                  <h3 className="font-semibold mt-2">
                    4 Hours
                  </h3>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Joined
                  </p>

                  <h3 className="font-semibold mt-2">
                    July 2026
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lifetime Statistics */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[
          {
            title: "Study Hours",
            value: "326",
            icon: BookOpen,
          },
          {
            title: "Study Streak",
            value: "29 Days",
            icon: Flame,
          },
          {
            title: "Mock Tests",
            value: "146",
            icon: Target,
          },
          {
            title: "Achievements",
            value: "24",
            icon: Trophy,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-6"
            >

              <div className="flex justify-between">

                <div>

                  <p className="text-slate-500">

                    {item.title}

                  </p>

                  <h2 className="mt-3 text-4xl font-bold">

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

      {/* Preferences */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Language */}

        <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-8">

          <div className="flex items-center gap-4">

            <Globe
              size={28}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">

              Language

            </h2>

          </div>

          <div className="mt-6 space-y-3">

            <button className="w-full rounded-xl border py-3 hover:bg-indigo-50">

              Tamil

            </button>

            <button className="w-full rounded-xl border py-3 hover:bg-indigo-50">

              English

            </button>

            <button className="w-full rounded-xl border py-3 bg-indigo-600 text-white">

              Tamil + English

            </button>

          </div>

        </div>

        {/* Theme */}

        <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-8">

          <div className="flex items-center gap-4">

            <Moon
              size={28}
              className="text-indigo-600"
            />

            <h2 className="text-2xl font-bold">

              Appearance

            </h2>

          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">

            <button className="rounded-xl border py-5 hover:bg-slate-50">

              <Sun className="mx-auto mb-2" />

              Light

            </button>

            <button className="rounded-xl border py-5 hover:bg-slate-50">

              <Moon className="mx-auto mb-2" />

              Dark

            </button>

            <button className="rounded-xl bg-indigo-600 text-white py-5">

              System

            </button>

          </div>

        </div>

      </div>

            {/* Personalized Study Plan */}

      <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Personalized Study Plan
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            ["Today's Goal", "4 Hours"],
            ["Revision", "History Unit 3"],
            ["Mock Test", "Group 4 - Set 12"],
            ["Current Affairs", "30 Minutes"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-6"
            >

              <p className="text-slate-500">
                {title}
              </p>

              <h3 className="mt-3 text-xl font-bold">
                {value}
              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* Target Exam */}

      <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-8">

        <div className="flex items-center gap-4">

          <Target
            className="text-indigo-600"
            size={30}
          />

          <h2 className="text-2xl font-bold">

            Target Examination

          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

          {[
            "TNPSC Group 1",
            "TNPSC Group 2",
            "TNPSC Group 2A",
            "TNPSC Group 4",
          ].map((exam) => (

            <button
              key={exam}
              className={`rounded-xl border py-5 transition
                ${
                  exam === "TNPSC Group 4"
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-indigo-50"
                }`}
            >
              {exam}
            </button>

          ))}

        </div>

      </div>

      {/* Certificates */}

      <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Certificates & Achievements
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            "🏆 100 Mock Tests",
            "🔥 30-Day Streak",
            "⭐ Accuracy Master",
            "📚 Daily Learner",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border p-6 text-center hover:shadow-md transition"
            >

              <Trophy
                className="mx-auto text-yellow-500 mb-4"
                size={40}
              />

              <p className="font-semibold">

                {item}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Notification Settings */}

      <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-8">

        <h2 className="text-2xl font-bold mb-8">

          Notification Preferences

        </h2>

        <div className="space-y-5">

          {[
            "Daily Study Reminder",
            "Current Affairs Updates",
            "Mock Test Alerts",
            "Weekly Performance Report",
            "Achievement Notifications",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center justify-between border-b pb-5"
            >

              <span className="font-medium">

                {item}

              </span>

              <label className="relative inline-flex cursor-pointer items-center">

                <input
                  type="checkbox"
                  defaultChecked
                  className="peer sr-only"
                />

                <div className="peer h-6 w-11 rounded-full bg-slate-300 peer-checked:bg-indigo-600 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-5"></div>

              </label>

            </div>

          ))}

        </div>

      </div>

      {/* Backup & Security */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-8">

          <h2 className="text-2xl font-bold">

            Backup & Restore

          </h2>

          <p className="mt-3 text-slate-500">

            Keep your study progress safe by creating backups.

          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">

              Backup Now

            </button>

            <button className="rounded-xl border px-6 py-3">

              Restore Backup

            </button>

          </div>

        </div>

        <div className="rounded-2xl border bg-white dark:bg-slate-900 shadow-sm p-8">

          <h2 className="text-2xl font-bold">

            Privacy & Security

          </h2>

          <p className="mt-3 text-slate-500">

            Manage your account security and privacy settings.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl border px-6 py-3">

              Change Password

            </button>

            <button className="rounded-xl border px-6 py-3">

              Two-Factor Authentication

            </button>

          </div>

        </div>

      </div>

      {/* Profile Actions */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">

            Account Actions

          </h2>

          <p className="mt-2 text-indigo-100">

            Export your data or manage your account.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-xl bg-white dark:bg-slate-900 px-6 py-3 font-semibold text-indigo-700">

              Download Profile Report

            </button>

            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700">

              Export Study Data

            </button>

            <button className="rounded-xl border border-white px-6 py-3">

              Logout

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}