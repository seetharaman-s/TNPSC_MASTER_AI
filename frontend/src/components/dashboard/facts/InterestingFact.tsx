"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { dashboardData } from "@/constants/dashboard";

export default function InterestingFactCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/20">
          <Lightbulb className="text-blue-600" size={22} />
        </div>

        <h2 className="text-xl font-semibold">
          {dashboardData.fact.title}
        </h2>
      </div>

      <p className="leading-7 text-slate-600 dark:text-slate-300">
        {dashboardData.fact.content}
      </p>
    </motion.div>
  );
}