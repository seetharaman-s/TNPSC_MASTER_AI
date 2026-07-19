"use client";

import Link from "next/link";
import {
  Bell,
  Newspaper,
  BookOpen,
  FileText,
  Brain,
  Trophy,
  CalendarDays,
  CheckCircle,
  Clock,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "TNPSC Official Notification Released",
    description: "Group 4 Exam Notification has been published.",
    time: "5 min ago",
    type: "official",
    unread: true,
  },
  {
    id: 2,
    title: "Today's Current Affairs Available",
    description: "25 new current affairs with quiz have been added.",
    time: "30 min ago",
    type: "current-affairs",
    unread: true,
  },
  {
    id: 3,
    title: "Daily Study Reminder",
    description: "Complete today's 4-hour study plan.",
    time: "1 hour ago",
    type: "planner",
    unread: false,
  },
  {
    id: 4,
    title: "Mock Test Reminder",
    description: "Your scheduled mock test starts at 7:00 PM.",
    time: "3 hours ago",
    type: "mock-test",
    unread: false,
  },
  {
    id: 5,
    title: "Achievement Unlocked",
    description: "Congratulations! You've completed a 30-day study streak.",
    time: "Yesterday",
    type: "achievement",
    unread: false,
  },
];

export default function NotificationsPage() {
  const stats = [
    {
      title: "Unread",
      value: "12",
      icon: Bell,
    },
    {
      title: "Today's Alerts",
      value: "18",
      icon: CalendarDays,
    },
    {
      title: "AI Suggestions",
      value: "5",
      icon: Brain,
    },
    {
      title: "Achievements",
      value: "24",
      icon: Trophy,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Notifications
          </h1>

          <p className="mt-2 text-slate-500">
            Stay updated with TNPSC announcements, study reminders, AI recommendations, and platform updates.
          </p>

        </div>

        <Link
          href="/settings"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold"
        >
          Notification Settings
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

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

      {/* Notification Feed */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Recent Notifications
          </h2>

          <button className="rounded-lg border px-4 py-2 hover:bg-slate-50">
            Mark All as Read
          </button>

        </div>

        <div className="divide-y">

          {notifications.map((notification) => (

            <div
              key={notification.id}
              className={`p-6 transition ${
                notification.unread
                  ? "bg-indigo-50"
                  : "hover:bg-slate-50"
              }`}
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">

                  <div className="rounded-full bg-indigo-100 p-3">

                    <Bell
                      className="text-indigo-600"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-lg">
                      {notification.title}
                    </h3>

                    <p className="mt-1 text-slate-500">
                      {notification.description}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">

                      <Clock size={15} />

                      {notification.time}

                    </div>

                  </div>

                </div>

                {notification.unread && (

                  <span className="h-3 w-3 rounded-full bg-indigo-600" />

                )}

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Notification Categories */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* TNPSC Official Announcements */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Newspaper
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              TNPSC Official Updates
            </h2>

          </div>

          <div className="divide-y">

            {[
              [
                "Group 4 Notification Published",
                "Application starts from 25 July",
              ],
              [
                "Exam Calendar Updated",
                "Latest annual schedule available",
              ],
              [
                "Hall Ticket Reminder",
                "Download before examination",
              ],
            ].map(([title, subtitle]) => (

              <div
                key={title}
                className="p-5 hover:bg-slate-50"
              >

                <h3 className="font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-slate-500">
                  {subtitle}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Current Affairs */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <BookOpen
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Current Affairs Alerts
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "25 Daily Current Affairs Added",
              "Weekly PDF Available",
              "Monthly Quiz Published",
              "International News Updated",
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

      {/* Books & Mock Tests */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <FileText
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Books & Notes Updates
            </h2>

          </div>

          <div className="divide-y">

            {[
              "New Tamil Book uploaded",
              "Science Notes revised",
              "Economy PDF updated",
              "Polity Mind Maps added",
            ].map((item) => (

              <div
                key={item}
                className="p-5"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <CalendarDays
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Mock Test Reminders
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Group 4 Grand Test • Tomorrow",
              "History Test • Wednesday",
              "Science Test • Friday",
              "Weekly Revision Test • Sunday",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-slate-50 p-5"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-4">

            <Brain size={34} />

            <h2 className="text-3xl font-bold">
              AI Recommendations
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            {[
              {
                title: "Focus Today",
                value: "Economy",
              },
              {
                title: "Suggested Test",
                value: "Science Mock",
              },
              {
                title: "Weak Topic",
                value: "Indian Polity",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur"
              >

                <Brain className="mb-4" />

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-indigo-100">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Achievements */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Recent Achievements
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

          {[
            "🔥 30-Day Study Streak",
            "🏆 Top 100 Rank",
            "📚 100 Books Completed",
            "🎯 Accuracy Above 90%",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border p-5 text-center"
            >

              <Trophy
                className="mx-auto mb-3 text-yellow-500"
                size={34}
              />

              <p className="font-medium">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Notification History */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Notification History
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left">Type</th>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {[
                ["Official", "Group 4 Notification", "19 Jul", "Read"],
                ["Reminder", "Mock Test", "18 Jul", "Unread"],
                ["AI", "Study Recommendation", "18 Jul", "Read"],
                ["Achievement", "30-Day Streak", "17 Jul", "Read"],
              ].map((row) => (

                <tr
                  key={row[1]}
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

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Notifications
        </button>

        <button className="rounded-xl border px-6 py-3">
          Clear History
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Notification Settings
        </button>

      </div>

    </div>

  );

}
    