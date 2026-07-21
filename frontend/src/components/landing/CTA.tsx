import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-24 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Crack TNPSC?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Join thousands of aspirants preparing with TNPSC MASTER AI.
        </p>

        <Link
          href="/register"
          className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
        >
          Start Learning
        </Link>

      </div>

    </section>
  );
}