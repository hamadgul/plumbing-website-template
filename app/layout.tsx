import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { buildThemeCss } from "@/lib/theme";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────
// Plumbing template: Poppins (headings) + Open Sans (body) — clean, friendly,
// trustworthy. To re-brand, swap these two imports; everything else is config.
const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Brand palette injected from config/site.config.ts */}
        <style
          dangerouslySetInnerHTML={{
            __html: buildThemeCss(siteConfig.theme),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
