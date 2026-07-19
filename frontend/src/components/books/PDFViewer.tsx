"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Moon,
  Sun,
  Maximize,
  Download,
} from "lucide-react";

type Props = {
  url: string;
  bookId: number;
};

export default function PDFViewer({ url, bookId }: Props) {
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(100);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved page
  useEffect(() => {
    const saved = localStorage.getItem(`book-${bookId}-page`);
    if (saved) {
      setPage(Number(saved));
    }
  }, [bookId]);

  // Save reading progress
  useEffect(() => {
    localStorage.setItem(`book-${bookId}-page`, String(page));

    const reading = JSON.parse(
      localStorage.getItem("continueReading") || "[]"
    );

    const updated = reading.filter(
      (item: any) => item.id !== bookId
    );

    updated.unshift({
      id: bookId,
      lastPage: page,
      pdf: url,
      updatedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "continueReading",
      JSON.stringify(updated.slice(0, 10))
    );
  }, [page, bookId, url]);

  const pdfUrl = `${url}#page=${page}&zoom=${scale}`;

  return (
    <section
      className={`rounded-2xl shadow-xl p-6 mt-8 transition-all ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white"
      }`}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap justify-between gap-3 mb-5">
        <div className="flex gap-2">
          <button
            onClick={() =>
              setPage((p) => Math.max(1, p - 1))
            }
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setPage((p) => p + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              setScale((s) => Math.max(50, s - 10))
            }
            className="bg-gray-200 p-2 rounded-lg"
          >
            <ZoomOut size={20} />
          </button>

          <button
            onClick={() =>
              setScale((s) => Math.min(300, s + 10))
            }
            className="bg-gray-200 p-2 rounded-lg"
          >
            <ZoomIn size={20} />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 p-2 rounded-lg"
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <button
            onClick={() => window.open(pdfUrl, "_blank")}
            className="bg-green-600 text-white p-2 rounded-lg"
          >
            <Maximize size={20} />
          </button>

          <a
            href={url}
            download
            className="bg-red-600 text-white p-2 rounded-lg"
          >
            <Download size={20} />
          </a>
        </div>
      </div>

      {/* Reader */}
      <div className="border rounded-xl overflow-hidden h-[900px]">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-full"
        />
      </div>

      {/* Footer */}
      <div className="mt-5">
        <div className="flex justify-between text-sm">
          <span>
            Current Page: <strong>{page}</strong>
          </span>

          <span>Zoom: {scale}%</span>
        </div>

        <div className="mt-3 w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{
              width: `${Math.min(page * 2, 100)}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}