import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CAPABILITIES } from "../data/site";
import { PROJECTS } from "../data/projects";
import { Container, SectionHeading } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { TiltCard } from "../fx/TiltCard";

const CATEGORY_BY_ID = {
  restaurant: "Restaurant",
  salon: "Salon & Spa",
  commercial: "Commercial",
  residential: "Residential",
} as const;

function coverFor(id: keyof typeof CATEGORY_BY_ID) {
  const cat = CATEGORY_BY_ID[id];
  return PROJECTS.find((p) => p.category === cat)?.cover ?? PROJECTS[0].cover;
}

function countFor(id: keyof typeof CATEGORY_BY_ID) {
  return PROJECTS.filter((p) => p.category === CATEGORY_BY_ID[id]).length;
}

export function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <div aria-hidden className="d-grid absolute inset-0 opacity-70" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(232,25,31,0.10),transparent_70%)]" />

      <Container className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we build"
            title={
              <>
                Four sectors.
                <br />
                One standard.
              </>
            }
          />
          <Reveal delay={200} className="max-w-sm lg:pb-3">
            <p className="text-[16px] leading-[1.8] text-ash">
              We stay in the work we know cold. That is why our subs, our details and our inspection record
              hold up job after job — instead of learning your building on your budget.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.id} variant="depth" delay={i * 110}>
              <TiltCard className="group h-full" max={7}>
                <Link
                  href={cap.href}
                  className="d-3d relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-ink-2/80 p-8 transition-colors duration-500 hover:border-white/20 sm:p-10"
                >
                  {/* Photo bed */}
                  <span aria-hidden className="absolute inset-0">
                    <Image
                      src={coverFor(cap.id as keyof typeof CATEGORY_BY_ID)}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-[0.16] transition-[opacity,transform] duration-[1400ms] group-hover:scale-105 group-hover:opacity-[0.3]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/85 to-ink/55" />
                  </span>

                  <span className="d-tilt-layer relative flex items-start justify-between" style={{ "--z": "42px" } as React.CSSProperties}>
                    <span className="font-technical text-[11px] tracking-[0.24em] text-signal">{cap.index}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors duration-500 group-hover:border-signal group-hover:bg-signal">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </span>

                  <h3
                    className="d-tilt-layer d-display relative mt-14 text-[clamp(1.6rem,3vw,2.3rem)] text-bone"
                    style={{ "--z": "30px" } as React.CSSProperties}
                  >
                    {cap.title}
                  </h3>
                  <p className="relative mt-4 max-w-md text-[15px] leading-[1.75] text-ash">{cap.blurb}</p>

                  <ul className="relative mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                    {cap.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[13px] text-bone/75">
                        <Check className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <span className="relative mt-8 flex items-center gap-2 border-t border-white/8 pt-6 font-technical text-[11px] uppercase tracking-[0.2em] text-ash">
                    {countFor(cap.id as keyof typeof CATEGORY_BY_ID)} projects in this sector
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
