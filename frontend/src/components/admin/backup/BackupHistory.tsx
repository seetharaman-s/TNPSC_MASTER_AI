"use client";

const backups = [
  {
    id: 1,
    file: "backup_2026_07_17.zip",
    size: "135 MB",
    created: "17 Jul 2026",
  },
  {
    id: 2,
    file: "backup_2026_07_16.zip",
    size: "132 MB",
    created: "16 Jul 2026",
  },
];

export default function BackupHistory() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Backup History
      </h2>

      <table className="min-w-full">

        <thead>

          <tr className="border-b">
            <th className="py-3 text-left">File</th>
            <th className="py-3 text-left">Size</th>
            <th className="py-3 text-left">Created</th>
          </tr>

        </thead>

        <tbody>

          {backups.map((backup) => (

            <tr
              key={backup.id}
              className="border-b"
            >

              <td className="py-3">
                {backup.file}
              </td>

              <td className="py-3">
                {backup.size}
              </td>

              <td className="py-3">
                {backup.created}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}