"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "../data/projects";

const FEATURED = [
  "west-end-clubhouse",
  "magic-nails",
  "cucciolo-famiglia",
  "church-of-raleigh",
  "posh-nail-spa-of-durham",
  "gaston-lake",
  "kazoku-ramen-bar",
  "image-studios-of-durham",
  "beer-box",
  "noire-the-nail-bar",
  "thirsty-skull",
  "saigon-kitchen",
];

const ITEMS = FEATURED.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
  (p): p is (typeof PROJECTS)[number] => Boolean(p),
);

/**
 * Horizontal project rail on a 3D stage — each card yaws toward the viewport
 * centre as it scrolls past, so the row reads as a physical shelf.
 */
export function WorkRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const applyDepth = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setProgress(max > 0 ? rail.scrollLeft / max : 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mid = rail.clientWidth / 2;
    for (const child of Array.from(rail.children) as HTMLElement[]) {
      const box = child.getBoundingClientRect();
      const railBox = rail.getBoundingClientRect();
      const centre = box.left - railBox.left + box.width / 2;
      const delta = Math.max(-1, Math.min(1, (centre - mid) / (mid * 1.35)));
      child.style.setProperty("--yaw", `${-delta * 14}deg`);
      child.style.setProperty("--push", `${-Math.abs(delta) * 90}px`);
      child.style.setProperty("--dim", `${1 - Math.abs(delta) * 0.3}`);
    }
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; applyDepth(); });
    };
    // Measured on the next frame — a synchronous setState here would cascade.
    raf = requestAnimationFrame(() => {
      raf = 0;
      applyDepth();
    });
    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      rail.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [applyDepth]);

  const nudge = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * Math.min(rail.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={railRef}
        className="d-rail d-stage flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-10 pt-4 sm:px-8 lg:px-12"
      >
        {ITEMS.map((p, i) => (
          <article
            key={p.slug}
            className="d-3d group relative w-[78vw] shrink-0 snap-center transition-[transform,filter] duration-300 ease-out sm:w-[420px] lg:w-[460px]"
            style={{
              transform: "rotateY(var(--yaw, 0deg)) translateZ(var(--push, 0px))",
              filter: "brightness(var(--dim, 1))",
            }}
          >
            <Link href={p.href} className="block">
              <div className="d-sheen relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 shadow-[0_50px_90px_-40px_rgba(0,0,0,0.9)]">
                <Image
                  src={p.cover}
                  alt={`${p.name} — ${p.category.toLowerCase()} construction by Delta`}
                  fill
                  sizes="(max-width: 640px) 78vw, 460px"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-ink/75 px-3.5 py-1.5 font-technical text-[10px] uppercase tracking-[0.18em] text-bone">
                  {p.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="d-display text-[clamp(1.35rem,2.3vw,1.8rem)] text-bone">{p.name}</h3>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-[13px] text-ash">{p.location}</span>
                    <span className="flex items-center gap-1.5 font-technical text-[10px] uppercase tracking-[0.16em] text-ash">
                      {p.photos} photos
                      <ArrowUpRight className="h-3.5 w-3.5 text-signal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
        <div className="w-2 shrink-0 sm:w-6" aria-hidden />
      </div>

      {/* Controls */}
      <div className="mx-auto flex w-full max-w-[1320px] items-center gap-6 px-6 sm:px-8 lg:px-12">
        <div className="relative h-px flex-1 bg-white/12">
          <span
            className="absolute inset-y-0 left-0 bg-signal transition-[width] duration-200"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
        <div className="flex gap-2">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => nudge(dir)}
              aria-label={dir === -1 ? "Previous projects" : "Next projects"}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-bone",
                "transition-colors duration-300 hover:border-signal hover:bg-signal",
              )}
            >
              {dir === -1 ? <ArrowLeft className="h-4 w-4" strokeWidth={1.6} /> : <ArrowRight className="h-4 w-4" strokeWidth={1.6} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
