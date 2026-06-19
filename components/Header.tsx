"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Icon } from "./Icon";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 shadow-md shadow-primary/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.businessName} home`}
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <Icon name={siteConfig.brand.icon} className="h-6 w-6" />
          </span>
          <span className="text-lg font-display font-bold leading-none text-ink">
            {siteConfig.businessName}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-muted transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="btn-primary !py-3 !px-5 text-sm"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl text-ink lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-x animate-fade-up border-t border-line bg-surface pb-8 pt-4">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-4 text-lg font-semibold text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="btn-primary mt-6 w-full"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
