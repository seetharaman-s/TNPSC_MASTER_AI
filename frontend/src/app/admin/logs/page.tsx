"use client";

import LogFilters from "@/components/admin/logs/LogFilters";
import LogTable from "@/components/admin/logs/LogTable";
import ExportLogsButton from "@/components/admin/logs/ExportLogsButton";

export default function LogsPage() {
  return (
    <main className="space-y-8 p-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            System Logs
          </h1>

          <p className="mt-2 text-gray-500">
            View application activity and audit logs.
          </p>
        </div>

        <ExportLogsButton />

      </div>

      <LogFilters />

      <LogTable />

    </main>
  );
}