"use client";

import Link from "next/link";
import {
  Brain,
  Users,
  MessageSquare,
  Search,
  Pin,
  Bell,
  Globe,
  Send,
  Bot,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "AI Mentor",
    lastMessage: "Today's study plan is ready.",
    time: "2 min ago",
    unread: 2,
    type: "ai",
  },
  {
    id: 2,
    name: "TNPSC Group 4 Community",
    lastMessage: "New Economy notes uploaded.",
    time: "12 min ago",
    unread: 8,
    type: "group",
  },
  {
    id: 3,
    name: "Science Discussion",
    lastMessage: "Answer posted for Question #45.",
    time: "40 min ago",
    unread: 0,
    type: "discussion",
  },
  {
    id: 4,
    name: "Announcements",
    lastMessage: "Grand Mock Test starts tomorrow.",
    time: "1 hr ago",
    unread: 1,
    type: "announcement",
  },
];

const mentorMessages = [
  {
    sender: "AI Mentor",
    message:
      "Good evening! Based on your recent performance, revise Economy today and attempt one mock test.",
    mine: false,
  },
  {
    sender: "You",
    message: "Can you prepare a 2-hour revision plan?",
    mine: true,
  },
  {
    sender: "AI Mentor",
    message:
      "Certainly. 45 min Economy, 30 min Science revision, 30 min MCQs, 15 min current affairs recap.",
    mine: false,
  },
];

export default function MessagesPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            AI Mentor & Community
          </h1>

          <p className="mt-2 text-slate-500">
            Connect with your AI mentor, collaborate with learners, and resolve TNPSC doubts.
          </p>

        </div>

        <Link
          href="/profile"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold"
        >
          My Profile
        </Link>

      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[
          {
            title: "Unread Messages",
            value: "11",
            icon: MessageSquare,
          },
          {
            title: "Study Groups",
            value: "7",
            icon: Users,
          },
          {
            title: "AI Sessions",
            value: "145",
            icon: Brain,
          },
          {
            title: "Announcements",
            value: "5",
            icon: Bell,
          },
        ].map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border bg-white shadow-sm p-6"
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
                    className="text-indigo-600"
                    size={28}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Chat Layout */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* Conversation List */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <div className="relative">

              <Search
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />

              <input
                placeholder="Search conversations..."
                className="w-full rounded-xl border py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />

            </div>

          </div>

          <div className="divide-y">

            {conversations.map((chat) => (

              <button
                key={chat.id}
                className="w-full p-5 text-left hover:bg-slate-50"
              >

                <div className="flex justify-between">

                  <h3 className="font-semibold">
                    {chat.name}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {chat.time}
                  </span>

                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {chat.lastMessage}
                </p>

                {chat.unread > 0 && (

                  <span className="mt-3 inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">
                    {chat.unread} New
                  </span>

                )}

              </button>

            ))}

          </div>

        </div>

        {/* AI Mentor Chat */}

        <div className="xl:col-span-2 rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center justify-between border-b p-6">

            <div className="flex items-center gap-3">

              <Bot
                className="text-indigo-600"
                size={30}
              />

              <div>

                <h2 className="text-2xl font-bold">
                  AI Mentor
                </h2>

                <p className="text-sm text-green-600">
                  Online
                </p>

              </div>

            </div>

            <button className="rounded-lg border px-4 py-2">
              New Chat
            </button>

          </div>

          <div className="space-y-5 p-6">

            {mentorMessages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.mine ? "justify-end" : "justify-start"
                }`}
              >

                <div
                  className={`max-w-xl rounded-2xl px-5 py-4 ${
                    msg.mine
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100"
                  }`}
                >

                  <p className="font-semibold mb-2">
                    {msg.sender}
                  </p>

                  <p>
                    {msg.message}
                  </p>

                </div>

              </div>

            ))}

          </div>

          <div className="border-t p-5">

            <div className="flex gap-3">

              <input
                placeholder="Ask your AI mentor..."
                className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button className="rounded-xl bg-indigo-600 px-5 text-white">

                <Send size={20} />

              </button>

            </div>

          </div>

        </div>

      </div>

            {/* Community Features */}

      <div className="grid xl:grid-cols-2 gap-6">

        {/* Study Groups */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Users
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Study Groups
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              {
                name: "TNPSC Group 4 Warriors",
                members: 248,
              },
              {
                name: "Daily Current Affairs",
                members: 164,
              },
              {
                name: "Science Revision Club",
                members: 95,
              },
              {
                name: "Aptitude Practice",
                members: 121,
              },
            ].map((group) => (

              <div
                key={group.name}
                className="flex items-center justify-between rounded-xl border p-5 hover:bg-slate-50 transition"
              >

                <div>

                  <h3 className="font-semibold">
                    {group.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {group.members} Members
                  </p>

                </div>

                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
                  Join
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Doubt Solving */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <MessageSquare
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Doubt Solving
            </h2>

          </div>

          <div className="space-y-5 p-6">

            {[
              [
                "Difference between Fundamental Rights and DPSP?",
                "12 Replies",
              ],
              [
                "Shortcut for Percentage Problems",
                "8 Replies",
              ],
              [
                "Indian Economy Revision Tips",
                "18 Replies",
              ],
              [
                "History Timeline Memorization",
                "25 Replies",
              ],
            ].map(([question, replies]) => (

              <div
                key={question}
                className="rounded-xl border p-5"
              >

                <h3 className="font-semibold">
                  {question}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {replies}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Pinned Discussions */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Pin
            className="text-indigo-600"
            size={26}
          />

          <h2 className="text-2xl font-bold">
            Pinned Discussions
          </h2>

        </div>

        <div className="divide-y">

          {[
            "Complete TNPSC Group 4 Preparation Strategy",
            "Latest Syllabus Discussion",
            "Important Government Schemes",
            "Frequently Asked Exam Questions",
          ].map((topic) => (

            <div
              key={topic}
              className="p-5 hover:bg-slate-50"
            >

              <h3 className="font-semibold">
                {topic}
              </h3>

            </div>

          ))}

        </div>

      </div>

      {/* Community Announcements */}

      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <div className="flex items-center gap-4">

            <Bell size={34} />

            <h2 className="text-3xl font-bold">
              Community Announcements
            </h2>

          </div>

          <div className="mt-8 space-y-4">

            {[
              "🏆 Weekly Quiz Competition starts tomorrow.",
              "📚 New Economy notes uploaded.",
              "🎯 Grand Mock Test scheduled for Sunday.",
            ].map((announcement) => (

              <div
                key={announcement}
                className="rounded-xl bg-white/10 p-4 backdrop-blur"
              >

                {announcement}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Language & File Sharing */}

      <div className="grid xl:grid-cols-2 gap-6">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <Globe
              className="text-indigo-600"
              size={28}
            />

            <h2 className="text-2xl font-bold">
              Language Preference
            </h2>

          </div>

          <div className="flex gap-4 p-6">

            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
              English
            </button>

            <button className="rounded-xl border px-6 py-3">
              தமிழ்
            </button>

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Shared Resources
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Tamil Notes.pdf",
              "Science Revision.pdf",
              "Weekly Current Affairs.pdf",
              "Group 4 Practice Questions.pdf",
            ].map((file) => (

              <div
                key={file}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{file}</span>

                <button className="rounded-lg border px-4 py-2">
                  Download
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Top Contributors */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Top Community Contributors
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr>
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Helpful Answers</th>
                <th className="px-6 py-4 text-left">Points</th>
              </tr>

            </thead>

            <tbody>

              {[
                ["1", "Arun Kumar", "245", "6,250"],
                ["2", "Priya", "219", "5,980"],
                ["3", "Karthik", "203", "5,620"],
                ["4", "You", "176", "4,880"],
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

      {/* Community Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Community Activity
          </h2>

        </div>

        <div className="p-8">

          <div className="h-72 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">

            <div className="text-center">

              <Users
                size={56}
                className="mx-auto mb-4 text-indigo-600"
              />

              <h3 className="text-xl font-semibold">
                Community Activity Chart
              </h3>

              <p className="mt-2 text-slate-500">
                Replace with Recharts AreaChart or BarChart.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Footer Actions */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Community Settings
        </button>

        <button className="rounded-xl border px-6 py-3">
          Create Study Group
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start AI Mentor Session
        </button>

      </div>

    </div>

  );

}