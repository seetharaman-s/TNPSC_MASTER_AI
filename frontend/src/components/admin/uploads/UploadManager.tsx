"use client";

import { useState } from "react";
import UploadCard from "./UploadCard";
import UploadProgress from "./UploadProgress";

export default function UploadManager() {
  const [progress, setProgress] = useState(0);

  async function upload(file: File) {
    setProgress(10);

    // TODO:
    // await UploadService.upload(file);

    setTimeout(() => {
      setProgress(100);
    }, 1200);
  }

  return (
    <div className="space-y-6">

      <UploadCard onUpload={upload} />

      <UploadProgress progress={progress} />

    </div>
  );
}