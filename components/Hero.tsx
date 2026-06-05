import Image from "next/image";
import { Phone, ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Hero() {
  const { stats } = siteConfig;

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <Image
        src={siteConfig.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Brand gradient overlays */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary-dark/95 via-primary/85 to-secondary/70" />
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(120%_80%_at_80%_0%,transparent,rgba(6,39,66,0.55))]" />

      <div className="container-x relative z-10 flex min-h-[92vh] flex-col justify-center pb-20 pt-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            Licensed, Insured &amp; Locally Owned
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {siteConfig.shortName} {siteConfig.copy.heroSubheading}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
            <a href="#quote" className="btn-ghost">
              Get a Free Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                {stats.rating}/5
                <span className="font-normal text-white/70">
                  {" "}
                  · {stats.reviewCount} reviews
                </span>
              </span>
            </div>

            <div className="h-8 w-px bg-white/20" aria-hidden />

            <div className="text-sm text-white/85">
              <span className="text-xl font-bold text-white">
                {stats.yearsInBusiness}
              </span>{" "}
              years in business
            </div>

            <div className="h-8 w-px bg-white/20" aria-hidden />

            <div className="text-sm text-white/85">
              <span className="text-xl font-bold text-white">
                {stats.jobsCompleted}
              </span>{" "}
              jobs completed
            </div>
          </div>
        </div>
      </div>

      {/* Floating availability pill */}
      {siteConfig.emergencyAvailable && (
        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur md:flex">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
          <div className="leading-tight">
            <div className="flex items-center gap-1.5 text-sm font-bold text-primary-dark">
              <Clock className="h-4 w-4 text-secondary" />
              24/7 Emergency Service
            </div>
            <div className="text-xs text-primary-dark/60">
              Available now · fast response
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
