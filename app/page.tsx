import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <section className="w-full max-w-3xl rounded-3xl border border-neutral-200 bg-white p-10 text-center shadow-sm">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
          AI Fragrance Finder
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          Find a fragrance that fits your mood, memory and style.
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-neutral-600">
          Describe the kind of scent you want, and get a refined shortlist of
          recommendations tailored to your preferences.
        </p>

        <Link
          href="/chat"
          className="inline-flex rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Start scent search
        </Link>
      </section>
    </main>
  );
}