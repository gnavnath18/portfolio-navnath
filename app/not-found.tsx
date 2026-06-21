import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="font-mono text-sm text-teal">404</p>
      <h1 className="font-display text-3xl font-bold">Route not found</h1>
      <p className="max-w-sm text-sm text-paper/60">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved or never shipped.
      </p>
      <Link href="/" className="mt-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-semibold text-ink">
        Back home
      </Link>
    </div>
  );
}
