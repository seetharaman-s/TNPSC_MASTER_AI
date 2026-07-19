"use client";

import { useState } from "react";
import {
  Headphones,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Search,
  Filter,
  Download,
  BookOpen,
  Clock,
  Star,
} from "lucide-react";

const audioLectures = [
  {
    id: 1,
    title: "Indian Constitution Introduction",
    subject: "Polity",
    duration: "42 min",
    progress: 75,
  },
  {
    id: 2,
    title: "Sangam Literature",
    subject: "History",
    duration: "36 min",
    progress: 100,
  },
  {
    id: 3,
    title: "General Science Basics",
    subject: "Science",
    duration: "55 min",
    progress: 48,
  },
  {
    id: 4,
    title: "Indian Economy",
    subject: "Economy",
    duration: "39 min",
    progress: 15,
  },
];

export default function AudioPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Audio Learning Center
          </h1>

          <p className="mt-2 text-slate-500">
            Learn anytime with chapter-wise TNPSC audio lectures and podcasts.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Offline Audio

        </button>

      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Audio Lessons",
            value: "642",
            icon: Headphones,
          },
          {
            title: "Completed",
            value: "214",
            icon: BookOpen,
          },
          {
            title: "Continue",
            value: "11",
            icon: Clock,
          },
          {
            title: "Favorites",
            value: "39",
            icon: Star,
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
              placeholder="Search audio lectures..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Audio Player */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="p-8">

          <div className="text-center">

            <Headphones
              size={72}
              className="mx-auto mb-5 text-indigo-600"
            />

            <h2 className="text-2xl font-bold">
              Indian Constitution Introduction
            </h2>

            <p className="mt-2 text-slate-500">
              00:18 / 42:00
            </p>

          </div>

          <div className="mt-8 h-2 rounded-full bg-slate-200">

            <div
              className="h-2 rounded-full bg-indigo-600"
              style={{ width: "42%" }}
            />

          </div>

          <div className="mt-8 flex justify-center gap-6">

            <button className="rounded-full border p-4">
              <SkipBack size={22} />
            </button>

            <button className="rounded-full bg-indigo-600 p-5 text-white">
              <Play size={28} />
            </button>

            <button className="rounded-full border p-4">
              <Pause size={22} />
            </button>

            <button className="rounded-full border p-4">
              <SkipForward size={22} />
            </button>

          </div>

        </div>

      </div>

      {/* Continue Listening */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Continue Listening
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {audioLectures.map((lecture) => (

            <div
              key={lecture.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold">
                    {lecture.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {lecture.subject} • {lecture.duration}
                  </p>

                </div>

                <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white">
                  Resume
                </button>

              </div>

              <div className="mt-4 h-3 rounded-full bg-slate-200">

                <div
                  className="h-3 rounded-full bg-indigo-600"
                  style={{
                    width: `${lecture.progress}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Subject-wise Playlists */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Subject-wise Audio Playlists
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["Tamil", 82],
            ["History", 94],
            ["Polity", 73],
            ["Science", 105],
            ["Geography", 58],
            ["Economy", 49],
            ["Current Affairs", 87],
            ["Aptitude", 65],
          ].map(([subject, total]) => (

            <button
              key={subject}
              className="rounded-xl border p-5 text-left transition hover:bg-indigo-50"
            >

              <BookOpen
                size={30}
                className="mb-3 text-indigo-600"
              />

              <h3 className="font-semibold">
                {subject}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {total} Audio Lessons
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* Playback Speed */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Playback Speed
          </h2>

        </div>

        <div className="flex flex-wrap gap-4 p-6">

          {["0.75x","1x","1.25x","1.5x","1.75x","2x"].map((speed) => (

            <button
              key={speed}
              className={`rounded-xl border px-6 py-3 ${
                speed === "1x"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-indigo-50"
              }`}
            >
              {speed}
            </button>

          ))}

        </div>

      </div>

      {/* Favorites & Bookmarks */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Favorite Audio Lessons
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "Indian Constitution",
              "Ancient Tamil History",
              "Indian Economy",
              "General Science Revision",
            ].map((lesson) => (

              <div
                key={lesson}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <span>{lesson}</span>

                <Star
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Audio Bookmarks
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "08:45 - Important Definition",
              "15:30 - Constitutional Articles",
              "26:50 - TNPSC Shortcut",
              "39:10 - Revision Point",
            ].map((bookmark) => (

              <div
                key={bookmark}
                className="rounded-xl border p-4"
              >
                {bookmark}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Audio Notes */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Audio Notes
          </h2>

        </div>

        <div className="p-6">

          <textarea
            rows={8}
            placeholder="Write notes while listening..."
            className="w-full rounded-xl border p-4"
          />

          <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
            Save Notes
          </button>

        </div>

      </div>

      {/* Listening Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Listening Analytics
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center">

          <div className="text-center">

            <Headphones
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Listening Statistics
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts LineChart or AreaChart.
            </p>

          </div>

        </div>

      </div>

      {/* AI Recommendations */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            AI Recommended Audio
          </h2>

          <div className="mt-6 space-y-4">

            {[
              "Indian Economy Revision",
              "Modern History Summary",
              "Science Quick Revision",
              "Weekly Current Affairs",
            ].map((audio) => (

              <div
                key={audio}
                className="rounded-xl bg-white/10 p-4"
              >
                {audio}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Download Summary */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Offline Downloads
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Downloaded", "148"],
            ["Pending", "9"],
            ["Storage Used", "5.2 GB"],
            ["Free Storage", "42 GB"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Download
                size={30}
                className="mx-auto mb-3 text-indigo-600"
              />

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Notes
        </button>

        <button className="rounded-xl border px-6 py-3">
          Listening History
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Continue Listening
        </button>

      </div>

    </div>

  );

}