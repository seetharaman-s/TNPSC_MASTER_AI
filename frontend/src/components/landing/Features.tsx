import {
  BookOpen,
  FileText,
  Newspaper,
  ClipboardList,
  Brain,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Books",
    desc: "Latest TNPSC books in Tamil & English.",
    icon: BookOpen,
  },
  {
    title: "Notes",
    desc: "Well-organized study notes.",
    icon: FileText,
  },
  {
    title: "Current Affairs",
    desc: "Daily updated current affairs.",
    icon: Newspaper,
  },
  {
    title: "Question Bank",
    desc: "Thousands of practice questions.",
    icon: ClipboardList,
  },
  {
    title: "AI Tutor",
    desc: "Smart learning assistant.",
    icon: Brain,
  },
  {
    title: "Analytics",
    desc: "Track your preparation progress.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            One platform for complete TNPSC preparation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <Icon className="mb-5 h-12 w-12 text-blue-600" />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
