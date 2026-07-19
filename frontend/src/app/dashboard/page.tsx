"use client";

import {
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  GraduationCap,
  TrendingUp,
  Bell,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

export default function DashboardPage() {

  const stats = [
    {
      title: "Books",
      value: "245",
      icon: BookOpen,
      color: "bg-blue-500",
      href: "/books",
    },
    {
      title: "Notes",
      value: "860",
      icon: FileText,
      color: "bg-green-500",
      href: "/notes",
    },
    {
      title: "Current Affairs",
      value: "128",
      icon: Newspaper,
      color: "bg-orange-500",
      href: "/current-affairs",
    },
    {
      title: "Question Bank",
      value: "18,420",
      icon: ClipboardList,
      color: "bg-purple-500",
      href: "/question-bank",
    },
  ];

  return (

    <div className="space-y-8">

      {/* Welcome */}

      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">

        <h1 className="text-4xl font-bold">

          Welcome to TNPSC MASTER AI

        </h1>

        <p className="mt-3 text-blue-100">

          Your complete AI-powered learning platform for TNPSC preparation.

        </p>

      </div>

      {/* KPI */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              href={item.href}
              key={item.title}
              className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500">

                    {item.title}

                  </p>

                  <h2 className="text-4xl font-bold mt-2">

                    {item.value}

                  </h2>

                </div>

                <div className={`${item.color} p-4 rounded-xl text-white`}>

                  <Icon size={28} />

                </div>

              </div>

            </Link>

          );

        })}

      </div>

      {/* Quick Actions */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            Quick Actions

          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-5 p-6">

          {[
            ["Read Books","/books"],
            ["Study Notes","/notes"],
            ["Practice MCQs","/question-bank"],
            ["Start Mock Test","/mock-tests"],
            ["Current Affairs","/current-affairs"],
            ["AI Tutor","/ai/personal-tutor"],
            ["Study Planner","/ai/study-planner"],
            ["Performance","/results"],
          ].map(([title,href])=>(

            <Link
              key={title}
              href={href}
              className="border rounded-xl p-5 hover:bg-blue-50 transition"
            >

              <div className="flex justify-between">

                <span className="font-medium">

                  {title}

                </span>

                <ArrowRight size={18}/>

              </div>

            </Link>

          ))}

        </div>

      </div>

      {/* Daily Motivation & TNPSC Fact */}

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl border p-6">

          <div className="flex items-center gap-3">

            <GraduationCap className="text-blue-600"/>

            <h2 className="text-xl font-bold">

              Daily Motivation

            </h2>

          </div>

          <p className="mt-5 text-slate-600">

            "Success in TNPSC is achieved through consistency,
            disciplined revision, and daily practice."

          </p>

        </div>

        <div className="bg-white rounded-2xl border p-6">

          <div className="flex items-center gap-3">

            <Sparkles className="text-orange-500"/>

            <h2 className="text-xl font-bold">

              Today's TNPSC Fact

            </h2>

          </div>

          <p className="mt-5 text-slate-600">

            The Constitution of India came into effect on
            <strong> 26 January 1950</strong>.

          </p>

        </div>

      </div>

            {/* Performance & Progress */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Study Progress */}

        <div className="xl:col-span-2 bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">

              Study Progress

            </h2>

            <TrendingUp className="text-green-600" />

          </div>

          <div className="p-6 space-y-6">

            {[
              ["Tamil", "82%"],
              ["General Studies", "74%"],
              ["History", "68%"],
              ["Geography", "55%"],
              ["Polity", "79%"],
              ["Science", "64%"],
            ].map(([subject, progress]) => (

              <div key={subject}>

                <div className="flex justify-between mb-2">

                  <span>{subject}</span>

                  <span>{progress}</span>

                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">

                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: progress }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Performance Summary */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Performance

            </h2>

          </div>

          <div className="p-6 space-y-5">

            <div>

              <p className="text-slate-500">

                Accuracy

              </p>

              <h3 className="text-4xl font-bold text-green-600">

                87%

              </h3>

            </div>

            <div>

              <p className="text-slate-500">

                Tests Completed

              </p>

              <h3 className="text-3xl font-bold">

                126

              </h3>

            </div>

            <div>

              <p className="text-slate-500">

                Average Rank

              </p>

              <h3 className="text-3xl font-bold">

                142

              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Current Affairs & Notifications */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">

              Latest Current Affairs

            </h2>

            <Link
              href="/current-affairs"
              className="text-blue-600"
            >
              View All
            </Link>

          </div>

          <div className="divide-y">

            {[
              "Tamil Nadu Budget Highlights",
              "Important Supreme Court Judgments",
              "ISRO Latest Mission",
              "Economic Survey Key Points",
              "Environment & Climate Updates",
            ].map((item) => (

              <div
                key={item}
                className="p-5 hover:bg-slate-50"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Notifications */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <div className="flex items-center gap-2">

              <Bell className="text-orange-500" />

              <h2 className="text-2xl font-bold">

                Notifications

              </h2>

            </div>

          </div>

          <div className="divide-y">

            {[
              "Daily Mock Test Available",
              "New TNPSC Book Uploaded",
              "Current Affairs Updated",
              "Revision Reminder",
              "Weekly Challenge Started",
            ].map((notification) => (

              <div
                key={notification}
                className="p-5 hover:bg-slate-50"
              >

                {notification}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Continue Learning */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            Continue Learning

          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6 p-6">

          {[
            "Indian Polity",
            "Ancient History",
            "General Science",
            "Mental Ability",
          ].map((course) => (

            <div
              key={course}
              className="rounded-xl border p-5 hover:bg-blue-50 transition"
            >

              <h3 className="font-semibold">

                {course}

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                Resume your learning progress.

              </p>

              <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg">

                Continue

              </button>

            </div>

          ))}

        </div>

      </div>

            {/* Analytics & Upcoming Exams */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Weekly Analytics */}

        <div className="xl:col-span-2 bg-white rounded-2xl border shadow-sm">

          <div className="flex items-center justify-between p-6 border-b">

            <h2 className="text-2xl font-bold">
              Weekly Learning Analytics
            </h2>

            <Link
              href="/analytics"
              className="text-blue-600"
            >
              View Report
            </Link>

          </div>

          <div className="p-8">

            {/* Replace with Recharts later */}

            <div className="h-80 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

              <div className="text-center">

                <TrendingUp
                  className="mx-auto text-blue-600 mb-3"
                  size={50}
                />

                <p className="font-semibold">

                  Weekly Performance Chart

                </p>

                <p className="text-sm text-slate-500 mt-2">

                  Integrate Recharts LineChart here

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Upcoming Exams */}

        <div className="bg-white rounded-2xl border shadow-sm">

          <div className="p-6 border-b">

            <h2 className="text-xl font-bold">

              Upcoming Exams

            </h2>

          </div>

          <div className="divide-y">

            {[
              ["Group 4 Mock Test","Tomorrow"],
              ["Current Affairs Quiz","Today"],
              ["History Revision","Monday"],
              ["Polity Test","Wednesday"],
              ["Science Marathon","Friday"],
            ].map(([title,date])=>(

              <div
                key={title}
                className="p-5 hover:bg-slate-50"
              >

                <div className="font-medium">

                  {title}

                </div>

                <div className="text-sm text-slate-500 mt-2">

                  {date}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Sparkles size={28} />

            <h2 className="text-2xl font-bold">

              AI Study Recommendations

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              "Revise Indian Constitution Articles",
              "Practice 25 Aptitude Questions",
              "Read Today's Current Affairs",
            ].map((item)=>(

              <div
                key={item}
                className="bg-white/10 rounded-xl p-6 backdrop-blur"

              >

                <h3 className="font-semibold">

                  {item}

                </h3>

                <button className="mt-5 bg-white text-blue-700 px-4 py-2 rounded-lg font-medium">

                  Start Now

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Achievement & Streak */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <h3 className="text-slate-500">

            Learning Streak

          </h3>

          <h2 className="text-5xl font-bold text-orange-500 mt-4">

            21

          </h2>

          <p className="mt-2 text-slate-500">

            Consecutive Days

          </p>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <h3 className="text-slate-500">

            Weekly Goal

          </h3>

          <h2 className="text-5xl font-bold text-green-600 mt-4">

            82%

          </h2>

          <p className="mt-2 text-slate-500">

            Goal Completed

          </p>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">

          <h3 className="text-slate-500">

            Badges Earned

          </h3>

          <h2 className="text-5xl font-bold text-purple-600 mt-4">

            14

          </h2>

          <p className="mt-2 text-slate-500">

            Achievement Badges

          </p>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="bg-white rounded-2xl border shadow-sm">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">

            Recent Activity

          </h2>

        </div>

        <div className="divide-y">

          {[
            "Completed Mock Test #24",
            "Read Indian Polity Chapter 8",
            "Solved 50 Aptitude Questions",
            "Updated Study Plan",
            "Finished Current Affairs Revision",
          ].map((activity)=>(

            <div
              key={activity}
              className="p-5 hover:bg-slate-50"
            >

              {activity}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}