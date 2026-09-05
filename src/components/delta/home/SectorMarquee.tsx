import { Marquee } from "../fx/Marquee";
import { PROJECTS } from "../data/projects";

const NAMES = PROJECTS.slice(0, 22).map((p) => p.name);

export function SectorMarquee() {
  return (
    <section className="relative border-y border-white/8 bg-ink-2 py-5">
      <Marquee speed={70}>
        {NAMES.map((n) => (
          <span key={n} className="flex items-center whitespace-nowrap">
            <span className="font-technical text-[12px] uppercase tracking-[0.2em] text-ash">{n}</span>
            <span aria-hidden className="mx-7 block h-1.5 w-1.5 rotate-45 bg-signal/80" />
          </span>
        ))}
      </Marquee>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-2 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-2 to-transparent" />
    </section>
  );
}
