"use client";

import { useState } from "react";

import PDFToolbar from "./PDFToolbar";
import PDFCanvas from "./PDFCanvas";

interface Props {
  file: string;
}

export default function PDFViewer({
  file,
}: Props) {
  const [page, setPage] = useState(1);

  const totalPages = 250;

  return (
    <div>

      <PDFToolbar
        page={page}
        total={totalPages}
        previous={() =>
          setPage((p) => Math.max(1, p - 1))
        }
        next={() =>
          setPage((p) =>
            Math.min(totalPages, p + 1)
          )
        }
      />

      <PDFCanvas />

      <div className="mt-4 text-sm text-slate-500">
        Current PDF:
        {" "}
        {file}
      </div>

    </div>
  );
}