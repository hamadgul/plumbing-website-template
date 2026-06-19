"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // ── Validation ─────────────────────────────────────────────────────────
    const nextErrors: Record<string, string> = {};
    if (!String(data.name || "").trim()) nextErrors.name = "Please enter your name.";
    if (!String(data.phone || "").trim())
      nextErrors.phone = "We need a phone number to call you back.";
    if (!String(data.service || "").trim())
      nextErrors.service = "Please choose a service.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    // ════════════════════════════════════════════════════════════════════════
    //  TODO: PLUG IN YOUR EMAIL SERVICE HERE
    //  --------------------------------------------------------------------
    //  This template ships with a working demo (no backend required). To make
    //  the form actually deliver leads, POST `data` to your own API route or a
    //  service such as Resend, Formspree, or a Next.js Server Action. Example:
    //
    //    await fetch("/api/lead", {
    //      method: "POST",
    //      headers: { "Content-Type": "application/json" },
    //      body: JSON.stringify(data),
    //    });
    //
    //  See README → "Wiring Up the Quote Form".
    // ════════════════════════════════════════════════════════════════════════
    try {
      await new Promise((r) => setTimeout(r, 900)); // simulated network delay
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-surface px-4 py-3.5 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-secondary focus:ring-4 focus:ring-secondary/15";

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-blueprint" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-secondary/15 blur-[120px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        {/* Left: pitch + contact details */}
        <div className="text-white">
          <Reveal>
            <span className="eyebrow text-secondary">Free Estimate</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Get your free, no-pressure quote
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg text-white/75">
              Tell us what&apos;s going on and we&apos;ll get right back to you —
              usually within the hour during business hours.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {[
              {
                icon: Phone,
                label: "Call us",
                value: siteConfig.phone,
                href: `tel:${siteConfig.phoneHref}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
              },
              {
                icon: MapPin,
                label: "Visit",
                value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
              },
            ].map((item) => (
              <Reveal key={item.label} delay={0.12}>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-secondary ring-1 ring-inset ring-white/15">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm text-white/60">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-white hover:text-secondary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-white">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.14}>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-secondary ring-1 ring-inset ring-white/15">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm text-white/60">Hours</div>
                  <ul className="font-semibold text-white">
                    {siteConfig.hours.map((h) => (
                      <li key={h.day} className="flex gap-2 text-sm">
                        <span className="w-20 text-white/70">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: the form */}
        <Reveal delay={0.1}>
          <div className="rounded-4xl bg-surface p-7 shadow-2xl shadow-black/30 ring-1 ring-inset ring-line sm:p-9">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-9 w-9 text-green-600" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-ink">
                  Request received!
                </h3>
                <p className="mt-3 max-w-sm text-ink-muted">
                  Thanks for reaching out. A member of our team will call you
                  back shortly. Need help right now?
                </p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="btn-primary mt-6"
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phone}
                </a>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-semibold text-secondary hover:text-primary"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      Full name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={`${inputBase} ${
                        errors.name ? "border-red-500" : "border-line"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(555) 000-0000"
                      className={`${inputBase} ${
                        errors.phone ? "border-red-500" : "border-line"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-red-600" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    className={`${inputBase} border-line`}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      Service needed <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className={`${inputBase} ${
                        errors.service ? "border-red-500" : "border-line"
                      }`}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {siteConfig.services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other / Not sure">Other / Not sure</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-sm text-red-600" role="alert">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      Service address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="City or ZIP"
                      className={`${inputBase} border-line`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe the problem…"
                    className={`${inputBase} resize-none border-line`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Request My Free Quote"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-600" role="alert">
                    Something went wrong. Please call us at {siteConfig.phone}.
                  </p>
                )}

                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink-muted">
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  Your information is private and never shared.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
