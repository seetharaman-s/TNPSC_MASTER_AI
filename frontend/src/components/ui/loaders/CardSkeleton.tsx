import Skeleton from "./Spinner";

export default function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-12 w-32" />
    </div>
  );
}