import Spinner from "./Spinner";

export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center space-y-4">
        <Spinner size="lg" />
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
          Loading...
        </h2>
      </div>
    </div>
  );
}