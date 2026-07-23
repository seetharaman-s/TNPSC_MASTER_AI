"use client";

import { useEffect, useState } from "react";

import CurrentAffairGrid from "@/components/current-affair/CurrentAffairGrid";
import currentAffairsService, {
  CurrentAffair,
} from "@/services/currentAffairsService";

export default function WeeklyCurrentAffairsPage() {
  const [affairs, setAffairs] = useState<CurrentAffair[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
        const articles = await currentAffairsService.getAll();

        const weekly = articles.filter((item: any) => {
        const publish = new Date(item.publish_date);
        const now = new Date();

        const diff =
          (now.getTime() - publish.getTime()) /
          (1000 * 60 * 60 * 24);

        return diff <= 7;
      });

      setAffairs(weekly);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Weekly Current Affairs
      </h1>

      <CurrentAffairGrid items={affairs} />
    </div>
  );
}