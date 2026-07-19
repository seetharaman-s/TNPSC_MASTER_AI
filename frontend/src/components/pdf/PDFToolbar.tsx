"use client";

import {
  ChevronLeft,
  ChevronRight,
  Menu,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  zoom: number;

  onPrev: () => void;
  onNext: () => void;

  onZoomIn: () => void;
  onZoomOut: () => void;

  onToggleSidebar: () => void;
}

export default function PDFToolbar({
  currentPage,
  totalPages,
  zoom,
  onPrev,
  onNext,
  onZoomIn,
  onZoomOut,
  onToggleSidebar,
}: Props) {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        <button onClick={onToggleSidebar}>
          <Menu size={22} />
        </button>

        <button onClick={onPrev}>
          <ChevronLeft size={22} />
        </button>

        <button onClick={onNext}>
          <ChevronRight size={22} />
        </button>

        <span className="font-semibold">
          {currentPage} / {totalPages}
        </span>

      </div>

      <div className="flex items-center gap-4">

        <button onClick={onZoomOut}>
          <ZoomOut size={20} />
        </button>

        <span>
          {(zoom * 100).toFixed(0)}%
        </span>

        <button onClick={onZoomIn}>
          <ZoomIn size={20} />
        </button>

      </div>

    </div>
  );
}