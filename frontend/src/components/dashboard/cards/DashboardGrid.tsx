import DailyMotivationCard from "../motivation/DailyMotivationCard";
import InterestingFactCard from "../facts/InterestingFactCard";

export default function DashboardGrid() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <DailyMotivationCard />
      <InterestingFactCard />
    </div>
  );
}