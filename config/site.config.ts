/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH  —  edit THIS file to launch a new client website.
 * ============================================================================
 *
 *  Everything a plumbing business needs to customize lives here: name, phone,
 *  colors, services, reviews, service areas, hours. Change the values below,
 *  drop a logo + photos into /public, and you have a brand-new site.
 *
 *  See README.md → "New Client in 15 Minutes" for the full checklist.
 */

export type IconKey =
  | "drain"
  | "heater"
  | "leak"
  | "repipe"
  | "fixture"
  | "sewer"
  | "sump"
  | "gas";

export interface SiteConfig {
  /** Business identity */
  businessName: string;
  shortName: string;
  tagline: string;
  description: string; // used for SEO meta description

  /** Contact */
  phone: string; // display format, e.g. "(555) 482-1900"
  phoneHref: string; // dialable, e.g. "+15554821900"
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };

  /** Hours of operation */
  hours: { day: string; time: string }[];
  emergencyAvailable: boolean;

  /** Trust signals */
  stats: {
    yearsInBusiness: number;
    jobsCompleted: string; // e.g. "12,000+"
    rating: number; // e.g. 4.9
    reviewCount: number;
  };
  license: {
    number: string;
    insured: boolean;
    bonded: boolean;
  };

  /** Content */
  services: {
    title: string;
    description: string;
    icon: IconKey;
  }[];
  serviceAreas: string[];
  reviews: {
    author: string;
    location: string;
    rating: number;
    text: string;
  }[];
  gallery: {
    src: string;
    alt: string;
  }[];

  /** Brand mark — an Icon key (see components/Icon.tsx) used as the logo glyph */
  brand: {
    icon: string;
  };

  /** Section copy — the trade-specific wording, kept here so components stay
   *  identical across templates. Use {years} / {city} tokens where noted. */
  copy: {
    heroSubheading: string;
    emergencyLead: string; // sentence before the bold promise
    emergencyHeadline: string; // the bold promise
    servicesHeading: string;
    servicesSubheading: string;
    whyHeading: string;
    whySubheading: string; // supports {years}
    galleryHeading: string;
    gallerySubheading: string;
  };

  /** Hero imagery */
  heroImage: string;

  /** Social links (optional — leave "" to hide) */
  social: {
    facebook: string;
    instagram: string;
    google: string;
  };

  /** Brand theme — hex values, converted to CSS variables automatically */
  theme: {
    primary: string;
    primaryDark: string;
    secondary: string;
    accent: string; // CTA / urgency color
    accentDark: string;
    surface: string;
    surfaceAlt: string;
    ink: string; // primary text
    inkMuted: string; // secondary text
    line: string; // borders
    star: string; // rating / star color (kept on-brand instead of raw amber)
  };
}

export const siteConfig: SiteConfig = {
  businessName: "Tidewater Plumbing Co.",
  shortName: "Tidewater",
  tagline: "Reliable Plumbing, Done Right the First Time",
  description:
    "Tidewater Plumbing Co. provides fast, honest, fully-licensed plumbing services across the Bay Area. Drain cleaning, water heaters, leak repair & 24/7 emergency service.",

  phone: "(555) 482-1900",
  phoneHref: "+15554821900",
  email: "service@tidewaterplumbing.com",
  address: {
    street: "1840 Harbor Way",
    city: "San Mateo",
    state: "CA",
    zip: "94401",
  },

  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ],
  emergencyAvailable: true,

  stats: {
    yearsInBusiness: 18,
    jobsCompleted: "12,000+",
    rating: 4.9,
    reviewCount: 487,
  },
  license: {
    number: "CSLB #1024876",
    insured: true,
    bonded: true,
  },

  services: [
    {
      title: "Drain Cleaning & Hydro Jetting",
      description:
        "Stubborn clogs cleared fast with camera inspection and high-pressure hydro jetting that leaves pipes like new.",
      icon: "drain",
    },
    {
      title: "Water Heater Repair & Install",
      description:
        "Tank and tankless repair, replacement, and same-day installation from every major brand — with upfront pricing.",
      icon: "heater",
    },
    {
      title: "Leak Detection & Repair",
      description:
        "Non-invasive leak location stops hidden water damage before it starts, then we fix it right the first time.",
      icon: "leak",
    },
    {
      title: "Repiping & Pipe Replacement",
      description:
        "Whole-home repiping in copper or PEX to end recurring leaks, rusty water, and low pressure for good.",
      icon: "repipe",
    },
    {
      title: "Faucets, Toilets & Fixtures",
      description:
        "Expert installation and repair of faucets, toilets, garbage disposals, and modern fixtures of any style.",
      icon: "fixture",
    },
    {
      title: "Sewer Line Services",
      description:
        "Trenchless sewer repair and replacement with video diagnostics — minimal digging, maximum peace of mind.",
      icon: "sewer",
    },
  ],

  serviceAreas: [
    "San Mateo",
    "Burlingame",
    "Foster City",
    "Redwood City",
    "San Carlos",
    "Belmont",
    "Millbrae",
    "Hillsborough",
    "San Bruno",
    "Daly City",
  ],

  reviews: [
    {
      author: "Marcus T.",
      location: "Burlingame, CA",
      rating: 5,
      text: "Showed up within an hour of my call on a Sunday when my water heater flooded the garage. Professional, fast, and the price was exactly what they quoted. Lifesavers.",
    },
    {
      author: "Priya R.",
      location: "Foster City, CA",
      rating: 5,
      text: "Finally a plumber I trust. They found a hidden leak two other companies missed, explained everything clearly, and didn't try to upsell me. Highly recommend.",
    },
    {
      author: "Dan & Sofia M.",
      location: "Redwood City, CA",
      rating: 5,
      text: "Repiped our entire 1950s home in two days with almost no mess. The crew was respectful, on time, and cleaned up perfectly. Water pressure has never been better.",
    },
    {
      author: "Karen L.",
      location: "San Carlos, CA",
      rating: 5,
      text: "Clear pricing, friendly techs, and they actually answer the phone. They've handled three jobs for us now and every one was excellent.",
    },
  ],

  gallery: [
    {
      src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
      alt: "Plumber installing a new chrome faucet",
    },
    {
      src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=80",
      alt: "Technician repairing pipes under a sink",
    },
    {
      src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=900&q=80",
      alt: "Modern water heater installation",
    },
    {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
      alt: "Plumber working with a wrench on copper piping",
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
      alt: "Clean modern bathroom after fixture installation",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      alt: "Newly renovated kitchen sink and faucet",
    },
  ],

  brand: {
    icon: "droplets",
  },

  copy: {
    heroSubheading:
      "delivers fast, upfront-priced plumbing you can count on — from emergency leaks to whole-home repipes. No surprises, no mess, just work done right.",
    emergencyLead: "Burst pipe or major leak? We answer 24/7.",
    emergencyHeadline:
      "Don't wait — water damage gets worse by the minute.",
    servicesHeading: "Full-Service Plumbing, Start to Finish",
    servicesSubheading:
      "From a dripping faucet to a full repipe, our licensed plumbers handle it all with upfront pricing and a workmanship guarantee.",
    whyHeading: "The plumber your neighbors actually recommend",
    whySubheading:
      "For {years} years we've built our reputation on honesty, craftsmanship, and showing up when we say we will.",
    galleryHeading: "Quality you can see",
    gallerySubheading:
      "A look at recent installs and repairs from across the area. Your home could be next.",
  },

  heroImage:
    "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1400&q=80",

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com",
  },

  theme: {
    // Deep petrol-teal + warm brass — water-associated and trustworthy, but
    // off the overused navy-blue + bright-orange trades cliché.
    primary: "#0C4A4E", // deep petrol teal
    primaryDark: "#06302F", // near-black teal for footer / depth
    secondary: "#2BA6A0", // bright "water" teal — links, icons, accents
    accent: "#F2A413", // crisp marigold CTA / accent (uses dark text for AA)
    accentDark: "#D98A0B",
    surface: "#FBFAF7", // warm off-white, not sterile pure white
    surfaceAlt: "#EEF3F1", // cool-neutral alternate band
    ink: "#122F2D", // deep teal-tinted near-black text
    inkMuted: "#546663", // muted body text
    line: "#DBE5E2", // hairline borders
    star: "#E0A12A", // brass-gold rating color
  },
};
