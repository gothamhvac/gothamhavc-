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

  const input =
    "w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/25 transition-all";
  const inputError = "border-red focus:border-red focus:ring-red/25";

  if (status === "success") {
    return (
      <div id="quote" className="bg-white rounded-2xl p-7 sm:p-8 shadow-2xl shadow-black/30 text-center scroll-mt-24">
        <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Request sent</h2>
        <p className="text-slate-600 mb-6">
          Thanks, {name.split(" ")[0] || "we got it"}. We&apos;ll call you back shortly. For anything urgent, call us now.
        </p>
        <a href={COMPANY.phoneTel} className="btn-primary w-full justify-center text-base py-4">
          <Phone className="w-5 h-5" />
          Call {COMPANY.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      id="quote"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/30 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-1">{title}</h2>
      <p className="text-slate-500 text-sm mb-5">Takes 30 seconds. We call you back, no obligation.</p>

      {serverError && (
        <div className="flex items-center gap-2 bg-red/10 border border-red/20 rounded-lg px-3 py-2.5 mb-4" role="alert">
          <AlertCircle className="w-4 h-4 text-red flex-shrink-0" />
          <p className="text-red text-sm">{serverError}</p>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label htmlFor="lp-name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
          <input
            id="lp-name"
            autoComplete="name"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
            className={`${input} ${errors.name ? inputError : ""}`}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-red text-xs mt-1" role="alert">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lp-phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <input
            id="lp-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
            className={`${input} ${errors.phone ? inputError : ""}`}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-red text-xs mt-1" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="lp-email" className="block text-sm font-medium text-slate-700 mb-1">
            Email <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id="lp-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
            className={`${input} ${errors.email ? inputError : ""}`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-red text-xs mt-1" role="alert">{errors.email}</p>}
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
              className="w-full flex items-center justify-center gap-2 border border-dashed border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-600 hover:border-blue hover:text-blue transition-colors"
            >
              <Upload className="w-4 h-4" />
              {uploadLabel}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              className="hidden"
              onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }}
            />
            <p className="text-slate-400 text-xs mt-1 text-center">PDF or images · up to 3 files · 5MB each</p>
            {files.length > 0 && (
              <ul className="mt-2 space-y-1.5">
                {files.map((file, i) => (
                  <li key={`${file.name}-${i}`} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 text-sm">
                    <Paperclip className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span className="truncate flex-1 text-slate-700">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                      className="text-slate-400 hover:text-slate-700"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X className="w-4 h-4" />
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
        className="btn-primary w-full justify-center text-base py-4 mt-5 disabled:opacity-60 disabled:cursor-not-allowed"
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
      <p className="text-center text-sm text-slate-500 mt-4">
        Or call{" "}
        <a href={COMPANY.phoneTel} className="font-semibold text-slate-900 hover:text-blue">
          {COMPANY.phone}
        </a>{" "}
        · answered 24/7
      </p>
    </form>
  );
}
