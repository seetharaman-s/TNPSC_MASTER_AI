"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-auto">

      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">

        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} TNPSC MASTER AI • Version 1.0.0
        </div>

        <div className="flex items-center gap-6 text-sm mt-3 md:mt-0">

          <Link
            href="/privacy"
            className="hover:text-blue-600"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="hover:text-blue-600"
          >
            Terms
          </Link>

          <Link
            href="/help"
            className="hover:text-blue-600"
          >
            Help
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-600"
          >
            About
          </Link>

        </div>

      </div>

    </footer>
  );
}