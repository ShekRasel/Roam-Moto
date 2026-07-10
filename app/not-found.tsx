import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4 py-24 text-center">
      <div className="max-w-2xl rounded-[36px] border border-white/10 bg-white/5 p-14 shadow-premium">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">404</p>
        <h1 className="mt-6 text-5xl font-accent font-bold uppercase tracking-[0.12em] text-white">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-7 text-white/70">
          The page you’re looking for doesn’t exist, but the ride ahead is still
          incredible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
