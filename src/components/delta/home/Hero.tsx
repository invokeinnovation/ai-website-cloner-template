"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "../data/site";
import { MagneticButton } from "../ui/Button";

const IMG = "/sites/deltagroupnc-com-daf29435/root-8a5edab2/images";

const SLIDES = [
  {
    name: "West End Clubhouse",
    location: "Durham, NC",
    sector: "Residential Amenity",
    image: `${IMG}/20220314_152551328_iOS-scaled.jpg`,
    href: "/portfolio",
  },
  {
    name: "Raleigh Crab House",
    location: "Capital Blvd, Raleigh",
    sector: "Restaurant",
    image: `${IMG}/r3.png`,
    href: "/restaurant-construction.html",
  },
  {
    name: "New York Nails",
    location: "Jacksonville Mall, NC",
    sector: "Salon & Spa",
    image: `${IMG}/1.png`,
    href: "/nail-salon-construction.html",
  },
  {
    name: "Magic Nails",
    location: "Independence Mall, NC",
    sector: "Salon & Spa",
    image: `${IMG}/20210302_134153000_iOS.jpg`,
    href: "/nail-salon-construction.html",
  },
];

const DURATION = 6000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const advance = useCallback(() => setActive((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = window.setInterval(advance, DURATION);
    return () => window.clearInterval(t);
  }, [advance]);

  // Pointer-driven camera: the whole stack leans toward the cursor.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--cam-y", `${x * 10}deg`);
        el.style.setProperty("--cam-x", `${-y * 7}deg`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const current = SLIDES[active];

  return (
    <section className="d-grain relative min-h-[100svh] overflow-hidden bg-ink pt-[92px]">
      {/* Ambient photograph */}
      <div aria-hidden className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-[opacity,transform] duration-[1600ms] ease-out",
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-ink/78" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_10%,transparent,rgba(8,8,10,0.95)_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Perspective floor */}
      <div aria-hidden className="d-stage pointer-events-none absolute inset-x-0 bottom-0 h-[46vh]">
        <div className="d-floor absolute inset-0" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-signal/20 blur-[150px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1560px] grid-cols-1 items-center gap-14 px-6 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-10">
        {/* Copy */}
        <div className={cn("relative z-10 min-w-0", ready && "is-in")}>
          <div className="d-line" style={{ "--delay": "80ms" } as React.CSSProperties}>
            <span className="d-eyebrow flex items-center gap-3 text-signal">
              <span aria-hidden className="h-px w-8 bg-signal/70" />
              {COMPANY.city} · Est. {COMPANY.since}
            </span>
          </div>

          <h1 className="d-display mt-7 text-[clamp(2.5rem,4.7vw,4.05rem)] text-bone">
            <span className="d-line" style={{ "--delay": "180ms" } as React.CSSProperties}>
              <span>We build the</span>
            </span>
            <span className="d-line" style={{ "--delay": "290ms" } as React.CSSProperties}>
              <span>spaces Carolina</span>
            </span>
            <span className="d-line" style={{ "--delay": "400ms" } as React.CSSProperties}>
              <span>
                opens for <em className="not-italic text-signal">business.</em>
              </span>
            </span>
          </h1>

          <div
            className="mt-8 max-w-xl transition-[opacity,transform] duration-1000 [transition-delay:620ms]"
            style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
          >
            <p className="text-[17px] leading-[1.8] text-ash sm:text-[18px]">
              Restaurants, salons, storefronts and clubhouses — designed, permitted and built by one
              accountable team. Experience and integrity is our main focus.
            </p>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 transition-[opacity,transform] duration-1000 [transition-delay:760ms]"
            style={{ opacity: ready ? 1 : 0, transform: ready ? "none" : "translateY(20px)" }}
          >
            <MagneticButton href="/contact">
              Book a site walk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="/portfolio" variant="ghost">
              58 projects, documented
            </MagneticButton>
          </div>

          <dl
            className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7 transition-opacity duration-1000 [transition-delay:900ms] sm:gap-6"
            style={{ opacity: ready ? 1 : 0 }}
          >
            {[
              { k: "25 yrs", v: "In the Triangle" },
              { k: "58", v: "Builds delivered" },
              { k: "1 team", v: "Design through punch" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="d-display text-[23px] text-bone sm:text-[30px]">{s.k}</dt>
                <dd className="mt-1.5 font-technical text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ash sm:tracking-[0.16em]">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 3D card stack */}
        <div
          ref={stageRef}
          className="d-stage relative z-10 h-[380px] sm:h-[460px] lg:h-[560px]"
          style={{ "--cam-x": "0deg", "--cam-y": "0deg" } as React.CSSProperties}
        >
          <div className="d-3d d-hero-stack absolute inset-0 transition-transform duration-700 ease-out">
            {SLIDES.map((s, i) => {
              const pos = (i - active + SLIDES.length) % SLIDES.length;
              // Centring is done inside the inline transform. Tailwind's
              // -translate-*-1/2 utilities compile to the standalone `translate`
              // property, which composes with `transform` rather than being
              // overridden by it — using both would double the offset.
              return (
                <Link
                  key={s.image}
                  href={s.href}
                  aria-hidden={pos !== 0}
                  tabIndex={pos === 0 ? 0 : -1}
                  className="group absolute left-1/2 top-1/2 block h-[78%] w-[83%] overflow-hidden rounded-[26px] border border-white/12 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] transition-all duration-[900ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)]"
                  style={{
                    transform: `translate3d(calc(-50% + ${pos * 18}px), calc(-50% + ${pos * -16}px), ${pos * -120}px) rotateZ(${pos * 1.4}deg)`,
                    opacity: ready ? (pos > 2 ? 0 : 1 - pos * 0.22) : 0,
                    zIndex: SLIDES.length - pos,
                    filter: `brightness(${1 - pos * 0.42}) saturate(${1 - pos * 0.35}) blur(${pos * 1.5}px)`,
                    transitionDelay: `${ready ? 0 : 400}ms`,
                  }}
                >
                  <Image
                    src={s.image}
                    alt={`${s.name} — ${s.sector} project by Delta Construction`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 46vw"
                    priority={i === 0}
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <div
                    className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-700 sm:p-8"
                    style={{ opacity: pos === 0 ? 1 : 0 }}
                  >
                    <span className="d-eyebrow text-signal">{s.sector}</span>
                    <h2 className="d-display mt-3 text-[24px] text-bone sm:text-[30px]">{s.name}</h2>
                    <span className="mt-2 flex items-center gap-1.5 text-[13px] text-ash">
                      <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
                      {s.location}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Stack controls */}
          <div className="absolute -bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:bottom-4">
            {SLIDES.map((s, i) => (
              <button
                key={s.image}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.name}`}
                aria-current={i === active}
                className="group relative h-11 w-11 overflow-hidden sm:w-10"
              >
                <span
                  className={cn(
                    "absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full transition-colors",
                    i === active ? "bg-white/25" : "bg-white/15 group-hover:bg-white/30",
                  )}
                />
                {i === active ? (
                  <span
                    key={active}
                    className="absolute inset-x-0 top-1/2 h-0.5 origin-left -translate-y-1/2 rounded-full bg-signal"
                    style={{ animation: `d-hero-progress ${DURATION}ms linear forwards` }}
                  />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="font-technical text-[10px] uppercase tracking-[0.28em] text-ash">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-4 bg-signal" style={{ animation: "d-scroll-cue 2.2s ease-in-out infinite" }} />
        </span>
      </div>

      <p className="sr-only" aria-live="polite">
        Featured project: {current.name}, {current.location}
      </p>
    </section>
  );
}
