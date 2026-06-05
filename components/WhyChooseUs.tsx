"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Clock,
  DollarSign,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Star,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Upfront, flat-rate pricing",
    text: "Know the full cost before we start — no hourly surprises, ever.",
  },
  {
    icon: UserCheck,
    title: "Licensed & background-checked",
    text: "Every tech is vetted, trained, and treats your home with respect.",
  },
  {
    icon: Clock,
    title: "On-time, same-day service",
    text: "We show up in the window we promise and work fast to fix it.",
  },
  {
    icon: Sparkles,
    title: "Spotless job sites",
    text: "We lay down protection and leave your home cleaner than we found it.",
  },
  {
    icon: ShieldCheck,
    title: "Workmanship guarantee",
    text: "If it isn't right, we make it right. Our work is backed in writing.",
  },
  {
    icon: BadgeCheck,
    title: "Fully insured & bonded",
    text: "You're protected on every job, start to finish.",
  },
];

function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const duration = 1400;
    let start = 0;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce]);

  const display = decimals
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString();
  return { ref, display };
}

function Stat({
  value,
  decimals,
  suffix,
  label,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  const { ref, display } = useCountUp(value, decimals);
  return (
    <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-inset ring-white/15 backdrop-blur">
      <div className="flex items-baseline gap-0.5 text-4xl font-bold text-white sm:text-5xl">
        <span ref={ref}>{display}</span>
        {suffix && <span className="text-secondary">{suffix}</span>}
      </div>
      <div className="mt-2 text-sm font-medium text-white/70">{label}</div>
    </div>
  );
}

export function WhyChooseUs() {
  const { stats } = siteConfig;

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-primary py-24 sm:py-32"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x relative grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: copy + benefits */}
        <div>
          <Reveal>
            <span className="eyebrow text-secondary">Why Homeowners Choose Us</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {siteConfig.copy.whyHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              {siteConfig.copy.whySubheading.replace(
                "{years}",
                String(stats.yearsInBusiness),
              )}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-secondary ring-1 ring-inset ring-white/15">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: stats */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-5">
            <Stat value={stats.yearsInBusiness} suffix="+" label="Years in business" />
            <Stat
              value={parseInt(stats.jobsCompleted.replace(/[^0-9]/g, ""), 10)}
              suffix="+"
              label="Jobs completed"
            />
            <Stat value={stats.rating} decimals={1} label="Average rating" />
            <Stat value={stats.reviewCount} suffix="+" label="5-star reviews" />

            {/* Rating highlight card spanning full width */}
            <div className="col-span-2 flex items-center gap-4 rounded-3xl bg-white p-6 shadow-2xl shadow-black/20">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400/15">
                <Star className="h-7 w-7 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold text-primary-dark">
                  Rated {stats.rating}/5 by {stats.reviewCount}+ local homeowners
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
