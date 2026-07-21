import { BookOpen, FileQuestion, Brain, Newspaper } from "lucide-react";

const stats = [
  {
    title: "Books",
    value: "500+",
    icon: BookOpen,
  },
  {
    title: "Questions",
    value: "20K+",
    icon: FileQuestion,
  },
  {
    title: "Current Affairs",
    value: "Daily",
    icon: Newspaper,
  },
  {
    title: "AI Assistant",
    value: "24/7",
    icon: Brain,
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <Icon className="mb-4 h-10 w-10 text-blue-600" />

              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}