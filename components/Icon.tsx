import {
  Waves,
  Flame,
  Droplets,
  Droplet,
  Wrench,
  ShowerHead,
  Route,
  Gauge,
  PlugZap,
  Cable,
  Lightbulb,
  BatteryCharging,
  Cpu,
  CircuitBoard,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string `icon` keys used in config/site.config.ts to Lucide SVG
 * icons. Covers both the plumbing and electrician trades so this file stays
 * identical across templates. Add a key here if you add a new service icon.
 */
const ICONS: Record<string, LucideIcon> = {
  // Plumbing
  drain: Waves,
  heater: Flame,
  leak: Droplets,
  repipe: Wrench,
  fixture: ShowerHead,
  sewer: Route,
  sump: Droplet,
  gas: Flame,
  // Electrician
  panel: CircuitBoard,
  ev: PlugZap,
  rewire: Cable,
  lighting: Lightbulb,
  generator: BatteryCharging,
  smart: Cpu,
  safety: ShieldCheck,
  meter: Gauge,
  // Brand/logo marks
  droplets: Droplets,
  zap: Zap,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? Wrench;
  return <Cmp className={className} aria-hidden="true" />;
}
