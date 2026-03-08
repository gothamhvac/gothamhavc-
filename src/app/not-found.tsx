import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-4">
          404 Error
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/40 text-lg mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary text-base px-8 py-4">
            Back to Home
          </Link>
          <Link href="/services" className="btn-outline-dark text-base px-8 py-4">
            View Services
          </Link>
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
