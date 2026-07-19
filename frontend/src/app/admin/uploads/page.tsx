"use client";

import UploadManager from "@/components/admin/uploads/UploadManager";
import FileList from "@/components/admin/uploads/FileList";

export default function UploadsPage() {
  return (
    <main className="space-y-8 p-8">

      <div>
        <h1 className="text-3xl font-bold">
          File Upload Manager
        </h1>

        <p className="mt-2 text-gray-500">
          Upload and manage books, notes, PDFs and images.
        </p>
      </div>

      <UploadManager />

      <FileList />

    </main>
  );
}