"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS } from "../data/site";
import { Container, Eyebrow } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { MagneticButton } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.75;
      const span = rect.height + start - window.innerHeight * 0.35;
      const p = (start - rect.top) / span;
      setFill(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="process" className="relative overflow-hidden bg-ink-2 py-24 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-signal/12 blur-[150px]"
      />
      <Container className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>How it runs</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="d-display mt-6 text-[clamp(2.1rem,5vw,3.6rem)] text-bone">
              Five steps.
              <br />
              No surprises.
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-7 max-w-md text-[16px] leading-[1.8] text-ash">
              Starting from scratch is not easy, so let us do the guess work. Architectural drawings,
              engineering, permitting and construction stay in one contract — and with one person you call
              when you have a question.
            </p>
            <div className="mt-9">
              <MagneticButton href="/design-build" variant="ghost">
                Our design/build service
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div ref={trackRef} className="d-stage-near relative">
          {/* Progress spine */}
          <div aria-hidden className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10 sm:left-[35px]">
            <span
              className="absolute inset-x-0 top-0 bg-signal transition-[height] duration-150 ease-out"
              style={{ height: `${fill * 100}%` }}
            />
          </div>

          <ol className="space-y-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} variant="depth" delay={i * 80}>
                <li className="group relative flex gap-6 rounded-3xl border border-white/8 bg-ink/60 p-6 transition-colors duration-500 hover:border-white/18 hover:bg-ink/85 sm:gap-8 sm:p-8">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-ink-3 font-technical text-[13px] tracking-[0.1em] text-bone transition-colors duration-500 group-hover:border-signal group-hover:text-signal sm:h-[70px] sm:w-[70px]">
                    {step.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="d-display text-[clamp(1.3rem,2.4vw,1.75rem)] text-bone">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.8] text-ash">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
