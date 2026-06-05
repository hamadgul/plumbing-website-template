import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Star,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Icon } from "./Icon";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Get a Quote", href: "#quote" },
];

export function Footer() {
  const year = 2026; // static for build reproducibility; update yearly

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-primary">
                <Icon name={siteConfig.brand.icon} className="h-6 w-6" />
              </span>
              <span className="text-xl font-display font-bold">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-white/65">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                <ShieldCheck className="h-4 w-4 text-secondary" />
                {siteConfig.license.number}
              </span>
              {siteConfig.license.insured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                  Insured
                </span>
              )}
              {siteConfig.license.bonded && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                  Bonded
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {siteConfig.stats.rating} / 5
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 text-white/75 hover:text-secondary"
                >
                  <Phone className="h-5 w-5 shrink-0 text-secondary" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/75 hover:text-secondary"
                >
                  <Mail className="h-5 w-5 shrink-0 text-secondary" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/75">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </span>
              </li>
            </ul>

            {(siteConfig.social.facebook || siteConfig.social.instagram) && (
              <div className="mt-6 flex gap-3">
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    aria-label="Facebook"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    aria-label="Instagram"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row">
          <p>
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <p>
            {siteConfig.license.number} · Licensed, Insured &amp; Bonded
          </p>
        </div>
      </div>
    </footer>
  );
}
