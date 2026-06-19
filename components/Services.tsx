import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        {/* Editorial header: heading left, supporting copy right */}
        <div className="grid gap-6 border-b border-line pb-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <span className="eyebrow eyebrow-rule inline-flex">What We Do</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {siteConfig.copy.servicesHeading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-muted">
              {siteConfig.copy.servicesSubheading}
            </p>
          </Reveal>
        </div>

        {/* Grid — first card is featured (dark, spans two columns on desktop) */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => {
            const featured = i === 0;
            return (
              <Reveal
                key={service.title}
                delay={i * 0.06}
                className={featured ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                    featured
                      ? "border-transparent bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-2xl"
                      : "border-line bg-surface hover:border-secondary/40 hover:shadow-2xl hover:shadow-primary/10"
                  }`}
                >
                  {featured && (
                    <div className="pointer-events-none absolute inset-0 -z-0 bg-blueprint" />
                  )}
                  {!featured && (
                    <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-secondary/0 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:from-secondary/5 group-hover:to-primary/5 group-hover:opacity-100" />
                  )}

                  <div className="relative z-10 flex flex-1 flex-col">
                    <div
                      className={`mb-6 grid h-14 w-14 place-items-center rounded-xl transition-colors duration-300 ${
                        featured
                          ? "bg-white/12 text-secondary"
                          : "bg-secondary/12 text-secondary group-hover:bg-secondary group-hover:text-surface"
                      }`}
                    >
                      <Icon name={service.icon} className="h-7 w-7" />
                    </div>

                    <h3
                      className={`font-bold ${
                        featured ? "text-2xl text-white" : "text-xl text-ink"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-3 flex-1 leading-relaxed ${
                        featured ? "max-w-md text-white/75" : "text-ink-muted"
                      }`}
                    >
                      {service.description}
                    </p>

                    <a
                      href="#quote"
                      className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        featured
                          ? "text-secondary hover:text-white"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      Request this service
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
