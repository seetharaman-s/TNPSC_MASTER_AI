"use client";

const files = [
  {
    id: 1,
    name: "TNPSC_GS_Book.pdf",
    size: "18 MB",
  },
  {
    id: 2,
    name: "History_Notes.pdf",
    size: "5 MB",
  },
];

export default function FileList() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Uploaded Files
      </h2>

      <table className="min-w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">
              File
            </th>

            <th className="py-3 text-left">
              Size
            </th>

          </tr>

        </thead>

        <tbody>

          {files.map((file) => (

            <tr
              key={file.id}
              className="border-b"
            >

              <td className="py-3">
                {file.name}
              </td>

              <td className="py-3">
                {file.size}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}