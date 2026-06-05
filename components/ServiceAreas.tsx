import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "./Reveal";

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-surface-alt py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Where We Work</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Proudly serving {siteConfig.address.city} &amp; the surrounding area
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink-muted">
              Local, licensed, and just around the corner. If you don&apos;t see
              your town listed, give us a call — chances are we cover it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary mt-8">
              <Phone className="h-5 w-5" />
              Check My Area
            </a>
          </Reveal>
        </div>

        {/* Area grid */}
        <Reveal delay={0.1}>
          <div className="rounded-4xl border border-line bg-surface p-7 shadow-sm sm:p-9">
            <div className="mb-6 flex items-center gap-2 text-secondary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {siteConfig.serviceAreas.length} cities covered
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
              {siteConfig.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 text-ink"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                  <span className="font-medium">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
