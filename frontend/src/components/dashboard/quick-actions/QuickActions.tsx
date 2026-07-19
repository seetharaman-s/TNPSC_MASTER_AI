"use client";

import QuickActionCard from "./QuickActionCard";
import { quickActions } from "./QuickActionsData";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

      {quickActions.map((item) => (
        <QuickActionCard
          key={item.title}
          item={item}
        />
      ))}

    </div>
  );
}