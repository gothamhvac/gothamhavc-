import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArticleCTAProps {
  variant: "subtle" | "card";
  text: string;
  href: string;
  buttonText?: string;
}

export default function ArticleCTA({ variant, text, href, buttonText }: ArticleCTAProps) {
  if (variant === "subtle") {
    return (
      <div
        className="my-6 py-4 px-5 rounded-xl bg-blue/[0.04] border border-blue/10"
      >
        <p className="text-sm text-text-secondary leading-relaxed">
          {text}{" "}
          <Link
            href={href}
            className="inline-flex items-center gap-1 font-semibold text-blue hover:text-blue/80 transition-colors"
          >
            Get in touch
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div
      className="my-8 card-accent-left p-6 sm:p-8"
    >
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {text}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-white text-sm font-semibold rounded-xl hover:bg-dark-700 transition-colors"
      >
        {buttonText || "Learn More"}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
