"use client";

import { quickActions } from "@/constants/dashboard";
import QuickActionCard from "./QuickActionCard";

export default function QuickActionsGrid() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Access
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {quickActions.map((item) => (
          <QuickActionCard
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}