"use client";

import { Download } from "lucide-react";

export default function ExportLogsButton() {

  function exportLogs() {
    alert("Export started...");
  }

  return (
    <button
      onClick={exportLogs}
      className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white"
    >
      <Download size={18} />

      Export Logs

    </button>
  );
}