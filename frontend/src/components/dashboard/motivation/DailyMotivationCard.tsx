"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { dashboardData } from "@/constants/dashboard";

export default function DailyMotivationCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-yellow-100 p-3 dark:bg-yellow-900/20">
          <Sparkles className="text-yellow-600" size={22} />
        </div>

        <h2 className="text-xl font-semibold">
          Daily Motivation
        </h2>
      </div>

      <blockquote className="text-slate-600 dark:text-slate-300 italic">
        "{dashboardData.motivation.quote}"
      </blockquote>

      <p className="mt-5 font-medium text-blue-600">
        — {dashboardData.motivation.author}
      </p>
    </motion.div>
  );
}