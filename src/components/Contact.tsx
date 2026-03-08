"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Clock, MapPin, Phone, Mail, ArrowRight, Paperclip, X, Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
];
const MAX_FILES = 3;
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

const contactDetails = [
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday",
    sub: "8:00 AM – 5:00 PM",
  },
  {
    icon: MapPin,
    label: "Our Address",
    value: COMPANY.address.street,
    sub: `${COMPANY.address.city}, ${COMPANY.address.state} ${COMPANY.address.zip}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: COMPANY.phoneTel,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
];

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      const valid = Array.from(incoming).filter((f) => {
        if (!ACCEPTED_TYPES.includes(f.type)) return false;
        if (f.size > MAX_SIZE) return false;
        return true;
      });
      setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
    },
    [],
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address.";
    if (!phone.trim()) errs.phone = "Phone number is required.";
    else if (!/^[+\d\s\-().]{7,}$/.test(phone))
      errs.phone = "Enter a valid phone number.";
    if (!message.trim()) errs.message = "Message is required.";
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
    formData.append("email", email.trim());
    formData.append("phone", phone.trim());
    formData.append("message", message.trim());
    files.forEach((file, i) => formData.append(`file-${i}`, file));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFiles([]);
    } catch {
      setStatus("error");
      setServerError("Network error. Please check your connection and try again.");
    }
  }

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/30 transition-all";
  const errorInputClasses =
    "w-full bg-white/5 border border-red/40 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-red/60 focus:ring-2 focus:ring-red/30 transition-all";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-dark relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <FadeIn x={-30} y={0}>
            <div className="section-line mb-6" />
            <h2 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Let&apos;s Talk About<br />
              <span className="text-gradient">Your Project</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-12">
              Tell us about your home or business and we&apos;ll respond with a
              clear scope, honest timeline, and next steps.
            </p>

            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue/10 group-hover:border-blue/20 transition-all">
                    <item.icon className="w-5 h-5 text-white/40 group-hover:text-blue transition-colors" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-blue transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div>
                        <p className="text-white font-medium">{item.value}</p>
                        {item.sub && (
                          <p className="text-white/40 text-sm">{item.sub}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn delay={0.15} x={30} y={0} className="flex items-center">
            <div className="w-full glass-dark rounded-3xl p-8 sm:p-12">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Request Sent
                  </h3>
                  <p className="text-white/40 mb-8 leading-relaxed">
                    We&apos;ll get back to you within one business day. For urgent
                    needs, call us directly.
                  </p>
                  <a href={COMPANY.phoneTel} className="btn-primary text-base px-8 py-4">
                    <Phone className="w-5 h-5" />
                    Call {COMPANY.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="block mx-auto mt-4 text-white/30 hover:text-white/60 text-sm transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Request Service
                  </h3>
                  <p className="text-white/40 mb-8 leading-relaxed">
                    Whether it&apos;s a repair, installation, or consultation — reach out and
                    we&apos;ll get back to you within one business day.
                  </p>

                  {serverError && (
                    <div className="flex items-center gap-3 bg-red/10 border border-red/20 rounded-xl px-4 py-3 mb-6" role="alert">
                      <AlertCircle className="w-5 h-5 text-red flex-shrink-0" />
                      <p className="text-red text-sm">{serverError}</p>
                    </div>
                  )}

                  <div className="space-y-4 mb-8">
                    <div>
                      <label htmlFor="contact-name" className="sr-only">Your name</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                        className={errors.name ? errorInputClasses : inputClasses}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="sr-only">Email address</label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                        className={errors.email ? errorInputClasses : inputClasses}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="sr-only">Phone number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })); }}
                        className={errors.phone ? errorInputClasses : inputClasses}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && <p id="phone-error" className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="sr-only">Project details</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
                        className={`${errors.message ? errorInputClasses : inputClasses} resize-none`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && <p id="message-error" className="text-red text-xs mt-1.5 ml-1" role="alert">{errors.message}</p>}
                    </div>

                    {/* File upload */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        addFiles(e.dataTransfer.files);
                      }}
                      onClick={() => fileInputRef.current?.click()}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInputRef.current?.click(); } }}
                      aria-label="Upload files. Click or drag and drop images or PDFs."
                      className={`w-full border border-dashed rounded-xl px-5 py-5 text-center cursor-pointer transition-all ${
                        dragOver
                          ? "border-blue/60 bg-blue/10"
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png,.webp,.pdf"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) addFiles(e.target.files);
                          e.target.value = "";
                        }}
                        tabIndex={-1}
                      />
                      <Upload className="w-5 h-5 text-white/30 mx-auto mb-2" />
                      <p className="text-white/30 text-sm">
                        <span className="text-blue font-medium">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-white/20 text-xs mt-1">
                        Images or PDF &middot; Max 3 files &middot; 5MB each
                      </p>
                    </div>

                    {/* Attached files */}
                    {files.length > 0 && (
                      <div className="space-y-2">
                        {files.map((file, i) => (
                          <div
                            key={`${file.name}-${i}`}
                            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                          >
                            <Paperclip className="w-4 h-4 text-white/30 flex-shrink-0" />
                            <span className="text-white text-sm truncate flex-1">
                              {file.name}
                            </span>
                            <span className="text-white/30 text-xs flex-shrink-0">
                              {formatSize(file.size)}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(i);
                              }}
                              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
                              aria-label={`Remove ${file.name}`}
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
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
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
