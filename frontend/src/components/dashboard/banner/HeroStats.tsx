"use client";

import {
  Clock3,
  CircleHelp,
  Target,
  Flame,
} from "lucide-react";

import StatCard from "../cards/StatCard";

export default function HeroStats() {
  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Study Time"
        value="3h 20m"
        icon={Clock3}
      />

      <StatCard
        title="Questions Solved"
        value="125"
        icon={CircleHelp}
      />

      <StatCard
        title="Accuracy"
        value="92%"
        icon={Target}
      />

      <StatCard
        title="Current Streak"
        value="18 Days"
        icon={Flame}
      />

    </section>
  );
}