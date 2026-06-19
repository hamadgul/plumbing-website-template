import type { SiteConfig } from "@/config/site.config";

/** Convert a #RRGGBB hex string into a space-separated "R G B" channel string. */
function hexToRgbChannels(hex: string): string {
  const clean = hex.replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

/**
 * Build the inline `:root { ... }` CSS that maps the config theme to the
 * CSS variables Tailwind consumes. Injected once in app/layout.tsx so the
 * entire palette is driven by config/site.config.ts.
 */
export function buildThemeCss(theme: SiteConfig["theme"]): string {
  const vars: Record<string, string> = {
    "--c-primary": hexToRgbChannels(theme.primary),
    "--c-primary-dark": hexToRgbChannels(theme.primaryDark),
    "--c-secondary": hexToRgbChannels(theme.secondary),
    "--c-accent": hexToRgbChannels(theme.accent),
    "--c-accent-dark": hexToRgbChannels(theme.accentDark),
    "--c-surface": hexToRgbChannels(theme.surface),
    "--c-surface-alt": hexToRgbChannels(theme.surfaceAlt),
    "--c-ink": hexToRgbChannels(theme.ink),
    "--c-ink-muted": hexToRgbChannels(theme.inkMuted),
    "--c-line": hexToRgbChannels(theme.line),
    "--c-star": hexToRgbChannels(theme.star),
  };
  const body = Object.entries(vars)
    .map(([k, v]) => `${k}:${v};`)
    .join("");
  return `:root{${body}}`;
}
