"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, Paperclip, Phone, Upload, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackFormSubmit } from "@/lib/gtag";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
const MAX_FILES = 3;
const MAX_SIZE = 5 * 1024 * 1024; // matches /api/contact

interface LeadFormProps {
  source: string;
  title: string;
  detailsPrompt: string;
  uploadLabel?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

/** Google Ads click id: from the landing URL, else the conversion linker cookie. */
function readGclid(): string {
  if (typeof window === "undefined") return "";
  const fromUrl = new URLSearchParams(window.location.search).get("gclid");
  if (fromUrl) return fromUrl;
  const cookie = document.cookie.split("; ").find((c) => c.startsWith("_gcl_aw="));
  // _gcl_aw = GCL.<timestamp>.<gclid>
  return cookie ? (cookie.split("=")[1]?.split(".").slice(2).join(".") ?? "") : "";
}

export default function LeadForm({ source, title, detailsPrompt, uploadLabel }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function addFiles(incoming: FileList) {
    const valid = Array.from(incoming).filter((f) => ACCEPTED_TYPES.includes(f.type) && f.size <= MAX_SIZE);
    setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
  }

  function validate() {
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = "Please enter your name.";
    if (!phone.trim()) errs.phone = "Please enter a phone number.";
    else if (!/^[+\d\s\-().]{7,}$/.test(phone)) errs.phone = "Enter a valid phone number.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email or leave it blank.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("phone", phone.trim());
    formData.append("email", email.trim());
    formData.append("message", details.trim());
    formData.append("source", source);
    formData.append("page", window.location.pathname);
    formData.append("gclid", readGclid());
    files.forEach((file, i) => formData.append(`file-${i}`, file));

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setServerError(data.error ?? "Something went wrong. Please call us instead.");
        return;
      }
      trackFormSubmit();
      setStatus("success");
    } catch {
      setStatus("error");
      setServerError("Network error. Please call us instead.");
    }
  }

  // Same field styling as the homepage contact form (dark glass).
  const input =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/30 transition-all";
  const inputError = "border-red/40 focus:border-red/60 focus:ring-red/30";

  if (status === "success") {
    return (
      <div id="quote" className="glass-dark rounded-3xl p-8 sm:p-10 text-center scroll-mt-28">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-3">Request Sent</h2>
        <p className="text-white/40 mb-8 leading-relaxed">
          Thanks{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}. We&apos;ll call you back shortly. For anything
          urgent, call us now.
        </p>
        <a href={COMPANY.phoneTel} className="btn-primary w-full text-base py-4">
          <Phone className="w-5 h-5" />
          Call {COMPANY.phone}
        </a>
      </div>
    );
  }

  return (
    <form id="quote" onSubmit={handleSubmit} noValidate className="glass-dark rounded-3xl p-7 sm:p-10 scroll-mt-28">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-white/40 text-sm mb-7 leading-relaxed">Takes 30 seconds. We call you back, no obligation.</p>

      {serverError && (
        <div className="flex items-center gap-3 bg-red/10 border border-red/20 rounded-xl px-4 py-3 mb-6" role="alert">
          <AlertCircle className="w-5 h-5 text-red flex-shrink-0" />
          <p className="text-red text-sm">{serverError}</p>
        </div>
      )}

      <div className="space-y-4 mb-7">
        <div>
          <label htmlFor="lp-name" className="sr-only">Your name</label>
          <input
            id="lp-name"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
            className={`${input} ${errors.name ? inputError : ""}`}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lp-phone" className="sr-only">Phone number</label>
          <input
            id="lp-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
            className={`${input} ${errors.phone ? inputError : ""}`}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="lp-email" className="sr-only">Email address (optional)</label>
          <input
            id="lp-email"
            type="email"
            autoComplete="email"
            placeholder="Email address (optional)"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
            className={`${input} ${errors.email ? inputError : ""}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="lp-details" className="sr-only">Project details</label>
          <textarea
            id="lp-details"
            rows={3}
            placeholder={detailsPrompt}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={`${input} resize-none`}
          />
        </div>

        {uploadLabel && (
          <div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border border-dashed border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] rounded-xl px-5 py-4 text-center transition-all"
            >
              <Upload className="w-5 h-5 text-white/30 mx-auto mb-1.5" />
              <span className="block text-sm text-white/40">
                <span className="text-blue font-medium">{uploadLabel}</span>
              </span>
              <span className="block text-white/20 text-xs mt-1">PDF or images · up to 3 files · 5MB each</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              className="hidden"
              onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }}
            />
            {files.length > 0 && (
              <ul className="mt-2 space-y-2">
                {files.map((file, i) => (
                  <li key={`${file.name}-${i}`} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                    <Paperclip className="w-4 h-4 text-white/30 flex-shrink-0" />
                    <span className="text-white text-sm truncate flex-1">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                      className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Request
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
      <p className="text-center text-sm text-white/40 mt-4">
        Or call{" "}
        <a href={COMPANY.phoneTel} className="font-semibold text-white hover:text-blue transition-colors">
          {COMPANY.phone}
        </a>{" "}
        · answered 24/7
      </p>
    </form>
  );
}
