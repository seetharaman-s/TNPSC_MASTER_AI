"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">

        <div className="max-w-2xl">

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            AI Powered TNPSC Learning
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Crack TNPSC with
            <span className="block text-yellow-300">
              TNPSC MASTER AI
            </span>
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Learn with Books, Notes, Current Affairs, Question Bank,
            Mock Tests, AI Tutor and Smart Analytics — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/register"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 transition hover:bg-white/10"
            >
              Login
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

        <div className="mt-12 lg:mt-0">
          <img
            src="/images/hero-dashboard.png"
            alt="TNPSC MASTER AI Dashboard"
            className="w-full max-w-xl rounded-3xl border border-white/20 shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
}