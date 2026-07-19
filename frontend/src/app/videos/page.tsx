"use client";

import { useState } from "react";
import {
  PlayCircle,
  Search,
  Filter,
  BookOpen,
  Clock,
  Star,
  Download,
  Video,
  ListVideo,
} from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Indian Constitution - Part 1",
    subject: "Polity",
    duration: "45 min",
    progress: 85,
  },
  {
    id: 2,
    title: "Sangam Age",
    subject: "History",
    duration: "38 min",
    progress: 40,
  },
  {
    id: 3,
    title: "General Science",
    subject: "Science",
    duration: "52 min",
    progress: 100,
  },
  {
    id: 4,
    title: "Indian Economy Basics",
    subject: "Economy",
    duration: "48 min",
    progress: 15,
  },
];

export default function VideosPage() {

  const [search, setSearch] = useState("");

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Video Learning Center
          </h1>

          <p className="mt-2 text-slate-500">
            Watch chapter-wise TNPSC learning videos and monitor your learning progress.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white">

          <Download size={18} />

          Offline Videos

        </button>

      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Total Videos",
            value: "824",
            icon: Video,
          },
          {
            title: "Completed",
            value: "286",
            icon: BookOpen,
          },
          {
            title: "Continue",
            value: "14",
            icon: Clock,
          },
          {
            title: "Favorites",
            value: "58",
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
              placeholder="Search videos..."
              className="w-full rounded-xl border py-3 pl-12 pr-4"
            />

          </div>

          <button className="flex items-center gap-2 rounded-xl border px-5">

            <Filter size={18} />

            Filter

          </button>

        </div>

      </div>

      {/* Video Player */}

      <div className="rounded-2xl border bg-black shadow-sm">

        <div className="flex h-[420px] items-center justify-center">

          <div className="text-center text-white">

            <PlayCircle
              size={90}
              className="mx-auto mb-5"
            />

            <h2 className="text-3xl font-bold">
              Video Player
            </h2>

            <p className="mt-3 text-slate-300">
              Integrate YouTube Player or React Player here.
            </p>

          </div>

        </div>

      </div>

      {/* Continue Watching */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Clock
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Continue Watching
          </h2>

        </div>

        <div className="space-y-5 p-6">

          {videos.map((video) => (

            <div
              key={video.id}
              className="rounded-xl border p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold">
                    {video.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {video.subject} • {video.duration}
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
                    width: `${video.progress}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

            {/* Subject Playlists */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <ListVideo
            size={24}
            className="text-indigo-600"
          />

          <h2 className="text-2xl font-bold">
            Subject Playlists
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            ["Tamil", 84],
            ["History", 126],
            ["Polity", 92],
            ["Science", 148],
            ["Geography", 76],
            ["Economy", 58],
            ["Current Affairs", 112],
            ["Aptitude", 95],
          ].map(([subject, count]) => (

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
                {count} Videos
              </p>

            </button>

          ))}

        </div>

      </div>

      {/* Favorite Videos */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center gap-3 border-b p-6">

          <Star
            size={24}
            className="text-yellow-500"
          />

          <h2 className="text-2xl font-bold">
            Favorite Videos
          </h2>

        </div>

        <div className="space-y-4 p-6">

          {[
            "Indian Constitution Complete Course",
            "Sangam Literature",
            "Indian Economy Basics",
            "Physics Short Tricks",
          ].map((video) => (

            <div
              key={video}
              className="flex items-center justify-between rounded-xl border p-5"
            >

              <span className="font-medium">
                {video}
              </span>

              <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Bookmarks & Notes */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Video Bookmarks
            </h2>

          </div>

          <div className="space-y-4 p-6">

            {[
              "12:45 - Important Article",
              "25:10 - Five Year Plan",
              "39:22 - Sangam Kings",
              "51:40 - Revision Notes",
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

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Video Notes
            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={10}
              placeholder="Write important notes while watching..."
              className="w-full rounded-xl border p-4"
            />

            <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Save Notes
            </button>

          </div>

        </div>

      </div>

      {/* Watch Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Watch Analytics
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center p-8">

          <div className="text-center">

            <Video
              size={64}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Video Progress Analytics
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts LineChart or BarChart.
            </p>

          </div>

        </div>

      </div>

      {/* AI Recommended Videos */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-700 text-white">

        <div className="p-8">

          <h2 className="text-3xl font-bold">
            AI Recommended Videos
          </h2>

          <div className="mt-6 space-y-4">

            {[
              "Indian Economy Crash Course",
              "Geography Maps Explained",
              "Modern History Revision",
              "TNPSC Current Affairs Weekly",
            ].map((item) => (

              <div
                key={item}
                className="rounded-xl bg-white/10 p-4"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Offline Downloads */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Offline Downloads
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Downloaded", "186"],
            ["Pending", "12"],
            ["Storage Used", "8.6 GB"],
            ["Available", "41 GB"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <Download
                size={32}
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
          View Watch History
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Continue Learning
        </button>

      </div>

    </div>

  );

}