import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="container-x">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">What We Do</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              {siteConfig.copy.servicesHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink-muted">
              {siteConfig.copy.servicesSubheading}
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-2xl hover:shadow-primary/10">
                {/* Accent wash on hover */}
                <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-secondary/0 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:from-secondary/5 group-hover:to-primary/5 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-secondary/12 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-surface">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                    {service.description}
                  </p>

                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    Request this service
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
