import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="work" className="bg-surface-alt py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">Recent Work</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              {siteConfig.copy.galleryHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink-muted">
              {siteConfig.copy.gallerySubheading}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {siteConfig.gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 0.06}
              className={
                i === 0
                  ? "col-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }
            >
              <div className="group relative h-full min-h-[180px] overflow-hidden rounded-3xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={700}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
