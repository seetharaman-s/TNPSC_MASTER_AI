"use client";

import { motion } from "framer-motion";
import { dashboardData } from "@/constants/dashboard";

export default function WelcomeBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl"
    >
      <p className="text-lg font-medium">
        {dashboardData.greeting}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {dashboardData.title}
      </h1>

      <p className="mt-4 max-w-2xl text-blue-100">
        {dashboardData.subtitle}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
          Start Learning
        </button>

        <button className="rounded-xl border border-white/40 px-6 py-3 transition hover:bg-white/10">
          Explore Books
        </button>
      </div>
    </motion.section>
  );
}