"use client";

import { useEffect, useState } from "react";

import { ReportService, DashboardReport } from "@/services/reportService";

import ReportCards from "@/components/admin/reports/ReportCards";
import UserAnalytics from "@/components/admin/reports/UserAnalytics";
import QuizAnalytics from "@/components/admin/reports/QuizAnalytics";
import BookAnalytics from "@/components/admin/reports/BookAnalytics";
import CurrentAffairsAnalytics from "@/components/admin/reports/CurrentAffairsAnalytics";
import UploadAnalytics from "@/components/admin/reports/UploadAnalytics";
import ExamAnalytics from "@/components/admin/reports/ExamAnalytics";
import RecentActivities from "@/components/admin/reports/RecentActivities";

export default function ReportsPage() {

  const [report, setReport] = useState<DashboardReport | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {

    try {

      setLoading(true);

      const data = await ReportService.getDashboard();

      setReport(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadDashboard();

  }, []);

  if (loading) {

    return (

      <div className="flex h-96 items-center justify-center text-lg">

        Loading Reports...

      </div>

    );

  }

  if (!report) {

    return (

      <div className="flex h-96 items-center justify-center">

        Unable to load reports.

      </div>

    );

  }

  return (

    <main className="space-y-8 p-8">

      <div>

        <h1 className="text-3xl font-bold">

          Reports & Analytics

        </h1>

        <p className="mt-2 text-gray-500">

          TNPSC MASTER AI Dashboard Analytics

        </p>

      </div>

      <ReportCards summary={report.summary} />

      <div className="grid gap-6 lg:grid-cols-2">

        <UserAnalytics data={report.users} />

        <QuizAnalytics data={report.quizzes} />

        <BookAnalytics data={report.books} />

        <CurrentAffairsAnalytics data={report.current_affairs} />

        <UploadAnalytics data={report.uploads} />

        <ExamAnalytics data={report.exams} />

      </div>

      <RecentActivities
        activities={report.recent_activities}
      />

    </main>

  );

}