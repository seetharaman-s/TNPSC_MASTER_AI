"use client";

import { useState } from "react";

export default function BackupSettings() {

  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Backup Settings
      </h2>

      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={autoBackup}
          onChange={() => setAutoBackup(!autoBackup)}
        />

        Enable automatic daily backup

      </label>

    </div>
  );
}