"use client";

import { useEffect, useState } from "react";
import { Phone, CalendarClock } from "lucide-react";
import { siteConfig } from "@/config/site.config";

/**
 * Always-visible tap-to-call bar on mobile. Appears after the user scrolls
 * past the hero so it never covers the initial call-to-action.
 */
export function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-stretch gap-px bg-line shadow-[0_-8px_24px_rgba(0,0,0,0.12)]">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="flex flex-1 items-center justify-center gap-2 bg-accent py-4 font-bold text-primary-dark"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center gap-2 bg-primary py-4 font-bold text-white"
        >
          <CalendarClock className="h-5 w-5" />
          Free Quote
        </a>
      </div>
    </div>
  );
}
