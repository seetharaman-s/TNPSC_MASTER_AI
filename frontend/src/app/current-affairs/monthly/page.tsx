"use client";

import { useEffect, useState } from "react";

import CurrentAffairGrid from "@/components/current-affair/CurrentAffairGrid";
import { CurrentAffairsService } from "@/services/currentAffairService";

const currentAffairService = new CurrentAffairsService();

export default function MonthlyCurrentAffairsPage() {
  const [affairs, setAffairs] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const res = await currentAffairService.getLatest(200);

      const monthly = res.data.filter((item: any) => {
        const publish = new Date(item.publish_date);
        const now = new Date();

        return (
          publish.getMonth() === now.getMonth() &&
          publish.getFullYear() === now.getFullYear()
        );
      });

      setAffairs(monthly);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Monthly Current Affairs
      </h1>

      <CurrentAffairGrid items={affairs} />
    </div>
  );
}