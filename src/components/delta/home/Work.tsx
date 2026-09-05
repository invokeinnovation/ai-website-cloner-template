import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { WorkRail } from "./WorkRail";
import { PROJECTS } from "../data/projects";

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink-2 py-24 lg:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Selected work</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="d-display mt-6 text-[clamp(2.1rem,5.2vw,4rem)] text-bone">
                {PROJECTS.length} builds you can
                <br />
                walk into today.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 font-technical text-[11px] uppercase tracking-[0.2em] text-bone"
            >
              <span className="d-link-wipe">Full portfolio</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-signal group-hover:bg-signal">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={120} className="mt-14">
        <WorkRail />
      </Reveal>
    </section>
  );
}
