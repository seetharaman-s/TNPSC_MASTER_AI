"use client";

import { DatabaseBackup } from "lucide-react";

export default function BackupCard() {

  async function createBackup() {
    // await BackupService.create();
    alert("Backup started...");
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="flex items-center gap-4">

        <DatabaseBackup
          size={40}
          className="text-blue-600"
        />

        <div>

          <h2 className="text-2xl font-bold">
            Create Backup
          </h2>

          <p className="text-gray-500">
            Generate a full system backup.
          </p>

        </div>

      </div>

      <button
        onClick={createBackup}
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Create Backup
      </button>

    </div>
  );
}