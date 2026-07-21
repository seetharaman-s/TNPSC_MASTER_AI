import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-400">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        <div>
          <h3 className="text-xl font-bold text-white">
            TNPSC MASTER AI
          </h3>

          <p className="mt-2 text-sm">
            AI-Powered TNPSC Preparation Platform.
          </p>
        </div>

        <div className="flex gap-6">

          <Link href="/">
            Home
          </Link>

          <Link href="/login">
            Login
          </Link>

          <Link href="/register">
            Register
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

        </div>

      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm">
        © 2026 TNPSC MASTER AI. All Rights Reserved.
      </div>

    </footer>
  );
}