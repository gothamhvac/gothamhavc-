"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, MessageSquare } from "lucide-react";

const STORAGE_KEY = "gotham-popup-dismissed";

export default function PromoPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function onScroll() {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent > 0.25) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    // Show after 15s OR after 25% scroll, whichever comes first
    const timer = setTimeout(() => {
      setVisible(true);
      window.removeEventListener("scroll", onScroll);
    }, 15000);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }, []);

  useEffect(() => {
    if (!visible) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, dismiss]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] w-[340px] max-w-[calc(100vw-3rem)] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95 pointer-events-none"
      }`}
    >
      <div className="relative bg-dark border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/40">
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center mb-4">
          <MessageSquare className="w-5 h-5 text-blue" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-1">
          Need an Estimate?
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-5">
          Get a free quote for your HVAC project — residential or commercial.
        </p>

        {/* CTA */}
        <Link
          href="/#contact"
          onClick={dismiss}
          className="btn-primary w-full text-sm py-3"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
