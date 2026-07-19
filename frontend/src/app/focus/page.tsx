"use client";

import { useEffect, useState } from "react";
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  Coffee,
  BookOpen,
  Target,
  Flame,
  BarChart3,
  StickyNote,
} from "lucide-react";

const presets = [
  { label: "Pomodoro", minutes: 25 },
  { label: "Deep Study", minutes: 45 },
  { label: "Revision", minutes: 60 },
  { label: "Mock Test", minutes: 90 },
];

export default function FocusPage() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          setRunning(false);
          return;
        }

        setMinutes((m) => m - 1);
        setSeconds(59);
      } else {
        setSeconds((s) => s - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [running, minutes, seconds]);

  const resetTimer = (value = 25) => {
    setRunning(false);
    setMinutes(value);
    setSeconds(0);
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Focus Timer
          </h1>

          <p className="mt-2 text-slate-500">
            Stay focused during your TNPSC preparation using structured study sessions.
          </p>

        </div>

      </div>

      {/* Summary */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          { title: "Today's Sessions", value: "8", icon: BookOpen },
          { title: "Focus Time", value: "5h 20m", icon: Timer },
          { title: "Study Streak", value: "29 Days", icon: Flame },
          { title: "Completed Goals", value: "12", icon: Target },
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
                    className="text-indigo-600"
                    size={28}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Timer */}

      <div className="rounded-3xl border bg-white p-10 shadow-sm">

        <div className="text-center">

          <Timer
            size={60}
            className="mx-auto mb-6 text-indigo-600"
          />

          <h2 className="text-7xl font-bold">

            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}

          </h2>

          <div className="mt-8 flex justify-center gap-4">

            <button
              onClick={() => setRunning(true)}
              className="rounded-xl bg-green-600 px-6 py-3 text-white flex items-center gap-2"
            >
              <Play size={18} />
              Start
            </button>

            <button
              onClick={() => setRunning(false)}
              className="rounded-xl bg-yellow-500 px-6 py-3 text-white flex items-center gap-2"
            >
              <Pause size={18} />
              Pause
            </button>

            <button
              onClick={() => resetTimer(minutes)}
              className="rounded-xl border px-6 py-3 flex items-center gap-2"
            >
              <RotateCcw size={18} />
              Reset
            </button>

          </div>

        </div>

      </div>

      {/* Session Presets */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {presets.map((preset) => (

          <button
            key={preset.label}
            onClick={() => resetTimer(preset.minutes)}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:bg-indigo-50"
          >

            <h3 className="text-xl font-semibold">
              {preset.label}
            </h3>

            <p className="mt-2 text-slate-500">
              {preset.minutes} Minutes
            </p>

          </button>

        ))}

      </div>

            {/* Current Study Session */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="border-b p-6">

            <h2 className="text-2xl font-bold">
              Current Study Session
            </h2>

          </div>

          <div className="space-y-5 p-6">

            <div>

              <p className="text-slate-500">
                Subject
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Indian Polity
              </h3>

            </div>

            <div>

              <p className="text-slate-500">
                Topic
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Fundamental Rights
              </h3>

            </div>

            <div>

              <p className="text-slate-500">
                Goal
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Complete Chapter + 30 MCQs
              </h3>

            </div>

            <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Mark Session Complete
            </button>

          </div>

        </div>

        {/* Session Notes */}

        <div className="rounded-2xl border bg-white shadow-sm">

          <div className="flex items-center gap-3 border-b p-6">

            <StickyNote
              className="text-indigo-600"
              size={24}
            />

            <h2 className="text-2xl font-bold">
              Session Notes
            </h2>

          </div>

          <div className="p-6">

            <textarea
              rows={10}
              placeholder="Write important revision points..."
              className="w-full rounded-xl border p-4"
            />

            <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
              Save Notes
            </button>

          </div>

        </div>

      </div>

      {/* Break Reminder */}

      <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">

        <div className="p-8">

          <div className="flex items-center gap-3">

            <Coffee size={32} />

            <h2 className="text-3xl font-bold">
              Break Reminder
            </h2>

          </div>

          <p className="mt-4 text-green-100">
            Take a 5–10 minute break after each focused study session to stay refreshed.
          </p>

        </div>

      </div>

      {/* Daily Statistics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Daily Focus Statistics
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-4">

          {[
            ["Completed Sessions", "8"],
            ["Focus Time", "5h 20m"],
            ["Break Time", "55m"],
            ["Efficiency", "94%"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-3 text-3xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Weekly Analytics */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Weekly Focus Analytics
          </h2>

        </div>

        <div className="flex h-72 items-center justify-center p-8">

          <div className="text-center">

            <BarChart3
              size={60}
              className="mx-auto mb-4 text-indigo-600"
            />

            <h3 className="text-xl font-semibold">
              Weekly Focus Chart
            </h3>

            <p className="mt-2 text-slate-500">
              Replace with Recharts LineChart or AreaChart.
            </p>

          </div>

        </div>

      </div>

      {/* Distraction Tracker */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Distraction Tracker
          </h2>

        </div>

        <div className="grid gap-6 p-6 md:grid-cols-3">

          {[
            ["Phone Checks", "3"],
            ["Interrupted Sessions", "1"],
            ["Focus Score", "96%"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="rounded-xl border p-5 text-center"
            >

              <h3 className="text-slate-500">
                {title}
              </h3>

              <p className="mt-3 text-3xl font-bold text-indigo-600">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Recent Sessions */}

      <div className="rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-6">

          <h2 className="text-2xl font-bold">
            Recent Study Sessions
          </h2>

        </div>

        <div className="divide-y">

          {[
            ["History", "45 min", "Completed"],
            ["Science", "60 min", "Completed"],
            ["Current Affairs", "25 min", "Completed"],
            ["Economy", "90 min", "Completed"],
          ].map(([subject, duration, status]) => (

            <div
              key={subject}
              className="flex items-center justify-between p-6"
            >

              <div>

                <h3 className="font-semibold">
                  {subject}
                </h3>

                <p className="text-sm text-slate-500">
                  {duration}
                </p>

              </div>

              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                {status}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="flex flex-wrap justify-end gap-4">

        <button className="rounded-xl border px-6 py-3">
          Export Statistics
        </button>

        <button className="rounded-xl border px-6 py-3">
          View History
        </button>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 text-white">
          Start New Session
        </button>

      </div>

    </div>

  );

}