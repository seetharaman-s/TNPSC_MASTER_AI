"use client";

import { LucideIcon } from "lucide-react";
import { AppCard } from "@/components/ui/cards";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <AppCard className="flex items-center gap-4">
      <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-900/20">
        <Icon className="text-blue-600" size={28} />
      </div>

      <div>
        <p className="text-sm text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </AppCard>
  );
}