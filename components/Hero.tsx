import Image from "next/image";
import { Phone, ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Hero() {
  const { stats } = siteConfig;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-surface">
      {/* Airy atmosphere: subtle grid + soft brand glows */}
      <div className="absolute inset-0 -z-10 bg-grid-light" />
      <div className="pointer-events-none absolute -left-40 -top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 top-40 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />

      <div className="container-x relative z-10 grid items-center gap-12 pb-20 pt-32 lg:min-h-[88vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16 lg:pt-28">
        {/* ── Left: message ─────────────────────────────────────────────── */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-primary/[0.06] px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/15">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            Licensed, Insured &amp; Locally Owned
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            {siteConfig.shortName} {siteConfig.copy.heroSubheading}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
            <a href="#quote" className="btn-outline">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-star text-star" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">
                {stats.rating}/5
                <span className="font-normal text-ink-muted">
                  {" "}
                  · {stats.reviewCount} reviews
                </span>
              </span>
            </div>

            <div className="h-8 w-px bg-line" aria-hidden />

            <div className="text-sm text-ink-muted">
              <span className="text-xl font-bold text-ink">
                {stats.yearsInBusiness}
              </span>{" "}
              years in business
            </div>

            <div className="h-8 w-px bg-line" aria-hidden />

            <div className="text-sm text-ink-muted">
              <span className="text-xl font-bold text-ink">
                {stats.jobsCompleted}
              </span>{" "}
              jobs completed
            </div>
          </div>
        </div>

        {/* ── Right: framed image panel ─────────────────────────────────── */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-line shadow-2xl shadow-primary/15 sm:aspect-[16/10] lg:aspect-auto lg:h-[min(34rem,calc(88svh-9rem))]">
            <Image
              src={siteConfig.heroImage}
              alt="Licensed plumber on the job"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 via-transparent to-transparent" />

            {/* Floating availability pill anchored to the photo */}
            {siteConfig.emergencyAvailable && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-surface/95 px-5 py-3.5 shadow-2xl shadow-black/20 backdrop-blur sm:right-auto">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-primary-dark">
                    <Clock className="h-4 w-4 text-secondary" />
                    24/7 Emergency Service
                  </div>
                  <div className="text-xs text-ink-muted">
                    Available now · fast response
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Overlapping rating badge for depth */}
          <div className="absolute -left-4 -top-4 hidden items-center gap-2 rounded-xl bg-surface px-4 py-3 shadow-xl shadow-primary/15 ring-1 ring-line lg:flex">
            <Star className="h-6 w-6 fill-star text-star" />
            <div className="leading-tight">
              <div className="text-base font-extrabold text-ink">
                {stats.rating}/5
              </div>
              <div className="text-[11px] font-medium text-ink-muted">
                {stats.reviewCount}+ reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
