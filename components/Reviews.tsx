"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "./Reveal";

export function Reviews() {
  const reviews = siteConfig.reviews;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();

  const go = (next: number) => {
    setDir(next > index || (index === reviews.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + reviews.length) % reviews.length);
  };

  const active = reviews[index];

  return (
    <section id="reviews" className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Real Reviews</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Loved by {siteConfig.stats.reviewCount}+ local homeowners
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-5 flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-ink">
                {siteConfig.stats.rating} out of 5
              </span>
            </div>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-4xl border border-line bg-surface-alt p-8 shadow-xl shadow-primary/5 sm:p-12">
              <Quote className="absolute right-8 top-8 h-16 w-16 text-secondary/15" />

              <div className="relative min-h-[210px] sm:min-h-[180px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={index}
                    custom={dir}
                    initial={reduce ? false : { opacity: 0, x: dir * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -40 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="flex">
                      {Array.from({ length: active.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                      &ldquo;{active.text}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-base font-bold text-white">
                        {active.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-ink">{active.author}</div>
                        <div className="text-sm text-ink-muted">
                          {active.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-secondary hover:text-secondary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index
                        ? "w-7 bg-secondary"
                        : "w-2.5 bg-line hover:bg-ink-muted/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-secondary hover:text-secondary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
