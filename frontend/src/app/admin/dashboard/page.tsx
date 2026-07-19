"use client";

import { useEffect, useState } from "react";
import { DashboardService } from "@/services/dashboardService";

export default function DashboardPage() {
  const [summary, setSummary] = useState<any>(null);
  const [progress, setProgress] = useState<any>(null);

  const [books, setBooks] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [currentAffairs, setCurrentAffairs] = useState<any[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [
        summaryRes,
        progressRes,
        booksRes,
        notesRes,
        quizzesRes,
        affairsRes,
      ] = await Promise.all([
        DashboardService.summary(),
        DashboardService.progress(),
        DashboardService.recentBooks(),
        DashboardService.recentNotes(),
        DashboardService.recentQuizzes(),
        DashboardService.recentCurrentAffairs(),
      ]);

      setSummary(summaryRes.data);
      setProgress(progressRes.data);

      setBooks(booksRes.data);
      setNotes(notesRes.data);
      setQuizzes(quizzesRes.data);
      setCurrentAffairs(affairsRes.data);
    } catch (err) {
      console.error(err);
    }
  }

  if (!summary) {
    return (
      <div className="p-10 text-center text-lg">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <main className="p-8 space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          TNPSC MASTER AI Admin Panel
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Books"
          value={summary.total_books}
        />

        <DashboardCard
          title="Notes"
          value={summary.total_notes}
        />

        <DashboardCard
          title="Quizzes"
          value={summary.total_quizzes}
        />

        <DashboardCard
          title="Questions"
          value={summary.total_questions}
        />

        <DashboardCard
          title="Current Affairs"
          value={summary.total_current_affairs}
        />

        <DashboardCard
          title="Quiz Attempts"
          value={summary.total_attempts}
        />

        <DashboardCard
          title="Active Books"
          value={summary.active_books}
        />

        <DashboardCard
          title="Active Quizzes"
          value={summary.active_quizzes}
        />

      </div>

      {/* Reading Progress */}

      <section className="rounded-xl border bg-white p-6">

        <h2 className="font-semibold text-xl mb-3">
          Reading Progress
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <p className="text-gray-500">
              Total Records
            </p>

            <h3 className="text-3xl font-bold">
              {progress.total_records}
            </h3>
          </div>

          <div>
            <p className="text-gray-500">
              Average Progress
            </p>

            <h3 className="text-3xl font-bold">
              {progress.average_progress}%
            </h3>
          </div>

        </div>

      </section>

      <DashboardTable
        title="Recent Books"
        data={books}
      />

      <DashboardTable
        title="Recent Notes"
        data={notes}
      />

      <DashboardTable
        title="Recent Quizzes"
        data={quizzes}
      />

      <DashboardTable
        title="Recent Current Affairs"
        data={currentAffairs}
      />

    </main>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

    </div>
  );
}

function DashboardTable({
  title,
  data,
}: {
  title: string;
  data: any[];
}) {

  return (
    <section className="rounded-xl border bg-white p-6">

      <h2 className="font-semibold text-xl mb-4">
        {title}
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-2">
              Title
            </th>

            <th className="text-left py-2">
              Subject
            </th>

            <th className="text-left py-2">
              Language
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((item: any) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="py-3">
                {item.title}
              </td>

              <td>
                {item.subject}
              </td>

              <td>
                {item.language}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}