"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, Eyebrow, SectionHeading } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { MagneticButton } from "../ui/Button";
import { COMPANY } from "../data/site";
import { PRINCIPLES, ACCREDITATION, SUSTAINABILITY, SUSTAINABLE_AREAS } from "../data/design-build";

const CHAPTERS = [
  { id: "detail", n: "01", label: "Attention to detail" },
  { id: "qualifications", n: "02", label: "Accredited qualifications" },
  { id: "principles", n: "03", label: "Twelve principles" },
  { id: "sustainable", n: "04", label: "Sustainable design" },
];

function Principle({ item, index }: { item: (typeof PRINCIPLES)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const title = item.title.replace(/^\d+\.\s*/, "");
  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-center gap-5 py-6 text-left"
      >
        <span className="font-technical text-[11px] tracking-[0.18em] text-signal">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="d-display flex-1 text-[clamp(1.05rem,2vw,1.45rem)] text-bone">{title}</span>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
            open ? "border-signal bg-signal text-white" : "border-white/15 text-bone group-hover:border-white/40",
          )}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-7 pl-[52px] text-[15px] leading-[1.85] text-ash">{item.body}</p>
        </div>
      </div>
    </div>
  );
}

export function DesignBuildContent() {
  return (
    <>
      {/* Chapter index + detail */}
      <section id="detail" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 lg:py-32">
        <div aria-hidden className="d-grid absolute inset-0 opacity-50" />
        <Container className="relative grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <nav className="lg:sticky lg:top-32 lg:self-start" aria-label="Page sections">
            <Eyebrow>Contents</Eyebrow>
            <ul className="mt-7 space-y-4">
              {CHAPTERS.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="group flex items-baseline gap-4">
                    <span className="font-technical text-[10px] tracking-[0.2em] text-signal">{c.n}</span>
                    <span className="d-link-wipe text-[15px] text-bone/80 transition-colors group-hover:text-bone">
                      {c.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Reveal>
              <h2 className="d-display text-[clamp(1.9rem,4vw,3rem)] text-bone">Attention to detail.</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-7 max-w-2xl text-[17px] leading-[1.85] text-ash">
                Starting from scratch is not easy, so let us do the guess work. We offer design services such
                as architectural drawings and engineering, making your build a smoother process. Finding the
                right commercial contractor is often painstaking and time consuming, so we invite you to come
                see our current jobs.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <MagneticButton href={COMPANY.officePhoneHref} external>
                  Call {COMPANY.officePhone}
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="/contact" variant="ghost">
                  Schedule a site walk
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-3">
                {[
                  { k: "Architectural drawings", v: "Permit-ready sets" },
                  { k: "Engineering services", v: "Structural & MEP" },
                  { k: "One contract", v: "Design through punch" },
                ].map((f) => (
                  <li key={f.k} className="bg-ink-2 px-6 py-6">
                    <span className="block text-[15px] font-semibold text-bone">{f.k}</span>
                    <span className="mt-1.5 block font-technical text-[10px] uppercase tracking-[0.16em] text-ash">
                      {f.v}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Accreditation */}
      <section id="qualifications" className="relative scroll-mt-24 bg-ink-2 py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="02 — Purposeful career" title="Accredited qualifications." />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {ACCREDITATION.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-[16px] leading-[1.85] text-ash">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section id="principles" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-signal/10 blur-[150px]"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="03 — Powerful possibilities"
            title="Twelve principles we run the business on."
            lead="The habits that keep a construction company honest — and keep your project on schedule."
          />
          <Reveal delay={120} className="mt-14">
            <div className="border-t border-white/8">
              {PRINCIPLES.map((p, i) => (
                <Principle key={p.title} item={p} index={i} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Sustainable design */}
      <section id="sustainable" className="relative scroll-mt-24 bg-ink-2 py-24 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="04 — Sustainable design"
            title="Buildings that cost less to run."
            lead="Designing a built environment to comply with the principles of ecological sustainability — eliminating the negative environmental impact a building generates."
          />
          <div className="mt-10 max-w-3xl space-y-6">
            {SUSTAINABILITY.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-[16px] leading-[1.85] text-ash">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SUSTAINABLE_AREAS.map((a, i) => (
              <Reveal key={a.title} variant="depth" delay={i * 100}>
                <div className="h-full rounded-[24px] border border-white/10 bg-ink p-8">
                  <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-signal">
                    Area {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="d-display mt-5 text-[21px] text-bone">{a.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.8] text-ash">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
