"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { AppCard } from "@/components/ui/cards";

interface QuickActionCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
}

export default function QuickActionCard({
  title,
  href,
  icon: Icon,
}: QuickActionCardProps) {
  return (
    <Link href={href}>
      <AppCard className="flex cursor-pointer flex-col items-center justify-center gap-4 text-center hover:scale-[1.03]">
        <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-900/20">
          <Icon size={30} className="text-blue-600" />
        </div>

        <h3 className="font-semibold">{title}</h3>
      </AppCard>
    </Link>
  );
}