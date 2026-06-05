# Plumbing Website Template

A modern, high-converting, single-page website template for plumbing companies.
Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.
Every business detail lives in one config file, so you can launch a brand-new
client site in minutes.

![Trade](https://img.shields.io/badge/trade-plumbing-0A3D62) ![Stack](https://img.shields.io/badge/Next.js-15-black) ![License](https://img.shields.io/badge/license-commercial-blue)

---

## ✨ What's inside

- **One-page, conversion-focused layout**: sticky header, hero, 24/7 emergency
  banner, services grid, "why choose us" with animated stats, service areas,
  reviews carousel, recent-work gallery, quote form, footer, and a sticky mobile
  call bar.
- **Click-to-call everywhere** + sticky mobile call bar (the #1 lead driver for
  trades).
- **Quote request form** with validation and a success state (ready to wire to
  any email service — see below).
- **Config-driven theming**: brand colors are defined as hex values in the config
  and injected as CSS variables, so the whole palette changes from one place.
- **Fully responsive**, accessible, SEO-ready, and respects `prefers-reduced-motion`.

---

## 🚀 Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To build for production:

```bash
npm run build
npm start
```

---

## 🧰 New Client in 15 Minutes

Everything you change for a new business is in **one file**:
[`config/site.config.ts`](./config/site.config.ts).

1. **Business info** — `businessName`, `shortName`, `tagline`, `description`.
2. **Contact** — `phone`, `phoneHref` (dialable, e.g. `+15554821900`), `email`,
   `address`.
3. **Hours & emergency** — `hours`, `emergencyAvailable`.
4. **Trust signals** — `stats` (years, jobs, rating, reviews) and `license`.
5. **Services** — edit the `services` array. Each has a `title`, `description`,
   and an `icon` key (`drain`, `heater`, `leak`, `repipe`, `fixture`, `sewer`,
   `sump`, `gas`). Add new icons in [`components/Icon.tsx`](./components/Icon.tsx).
6. **Service areas** — list the towns/cities in `serviceAreas`.
7. **Reviews** — drop in real testimonials in `reviews`.
8. **Photos** — replace `heroImage` and the `gallery` URLs with the client's own
   images. Put local files in `/public/images` and reference them as
   `/images/your-photo.jpg`.
9. **Brand colors** — edit the `theme` block (hex values). The site re-skins
   automatically.
10. **Logo / fonts** — the logo mark is a Lucide icon in `Header.tsx` and
    `Footer.tsx`; swap for the client's logo. Fonts are set in
    [`app/layout.tsx`](./app/layout.tsx).

That's it — no other files need to change to rebrand the site.

### Recommended brand color slots

| Token         | Used for                          |
| ------------- | --------------------------------- |
| `primary`     | Headers, dark sections, headings  |
| `primaryDark` | Footer, deepest backgrounds       |
| `secondary`   | Accents, links, icons             |
| `accent`      | Call-to-action buttons (urgency)  |
| `surfaceAlt`  | Alternating light section backs   |
| `ink`         | Body text                         |

---

## 📧 Wiring up the quote form

The form works out of the box as a demo (no backend needed). To deliver real
leads, open [`components/QuoteForm.tsx`](./components/QuoteForm.tsx) and find the
clearly-marked block:

```
// TODO: PLUG IN YOUR EMAIL SERVICE HERE
```

Replace the simulated delay with a real call. Two easy options:

- **Formspree** (no code/backend): POST the form data to your Formspree endpoint.
- **Resend + a Next.js Route Handler**: create `app/api/lead/route.ts`, send the
  email server-side, and `fetch("/api/lead")` from the form.

---

## 🌐 Deploying

This is a standard Next.js app. The fastest path is **Vercel**:

1. Push the folder to a Git repo.
2. Import it at <https://vercel.com/new>.
3. Deploy. (No environment variables are required unless you wire up email.)

---

## 📁 Project structure

```
config/site.config.ts   ← the only file you edit per client
app/layout.tsx          ← fonts + injects theme + SEO metadata
app/page.tsx            ← section order
components/             ← reusable, config-driven sections
lib/theme.ts            ← hex → CSS variable converter
```

The component library is **identical** to the electrician template — only the
config and fonts differ — so improvements port directly between the two.
