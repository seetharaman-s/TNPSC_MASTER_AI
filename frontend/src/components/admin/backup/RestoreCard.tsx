"use client";

import { RotateCcw } from "lucide-react";

export default function RestoreCard() {

  async function restoreBackup() {
    alert("Restore started...");
    // await BackupService.restore(file);
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="flex items-center gap-4">

        <RotateCcw
          size={40}
          className="text-green-600"
        />

        <div>

          <h2 className="text-2xl font-bold">
            Restore Backup
          </h2>

          <p className="text-gray-500">
            Upload a backup file to restore.
          </p>

        </div>

      </div>

      <input
        type="file"
        className="mt-6"
      />

      <button
        onClick={restoreBackup}
        className="mt-5 rounded-xl bg-green-600 px-6 py-3 text-white"
      >
        Restore
      </button>

    </div>
  );
}