import CardSkeleton from "./CardSkeleton";

export default function DashboardSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}