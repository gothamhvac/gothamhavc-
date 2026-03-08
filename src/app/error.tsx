"use client";

import { COMPANY } from "@/lib/constants";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-4">
          Something Went Wrong
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Unexpected Error
        </h1>
        <p className="text-white/40 text-lg mb-10 leading-relaxed">
          We hit a snag loading this page. Try again, or give us a call and
          we&apos;ll take care of it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button onClick={reset} className="btn-primary text-base px-8 py-4">
            Try Again
          </button>
          <a href="/" className="btn-outline-dark text-base px-8 py-4">
            Back to Home
          </a>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-sm mb-2">Need immediate help?</p>
          <a
            href={COMPANY.phoneTel}
            className="text-blue hover:text-blue-light font-semibold text-lg transition-colors"
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
