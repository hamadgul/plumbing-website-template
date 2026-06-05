import { Phone, Siren } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function EmergencyBanner() {
  if (!siteConfig.emergencyAvailable) return null;

  return (
    <section className="relative z-20 bg-accent">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3 text-white">
          <Siren className="h-7 w-7 shrink-0" />
          <p className="text-base font-semibold sm:text-lg">
            {siteConfig.copy.emergencyLead}{" "}
            <span className="font-bold">{siteConfig.copy.emergencyHeadline}</span>
          </p>
        </div>
        <a
          href={`tel:${siteConfig.phoneHref}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-accent-dark shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-5 w-5" />
          Call {siteConfig.phone}
        </a>
      </div>
    </section>
  );
}
