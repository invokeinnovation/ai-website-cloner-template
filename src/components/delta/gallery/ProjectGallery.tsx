"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, X } from "lucide-react";
import {
  dimsFromName,
  type GalleryManifest,
} from "@/components/sites/deltagroupnc-com-daf29435/shared/gallery-types";
import { Container } from "../ui/Section";
import { Reveal } from "../fx/Reveal";

function cleanTitle(t: string) {
  return t.replace(/<br\s*\/?>/gi, " ").replace(/\s+/g, " ").trim();
}

/** Must match scripts/gen-delta-projects.mjs so cross-page anchors line up. */
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

interface Shot {
  src: string;
  w: number;
  h: number;
  project: string;
}

export function ProjectGallery({
  manifest,
  imgBase,
}: {
  manifest: GalleryManifest;
  imgBase: string;
}) {
  const groups = useMemo(
    () =>
      manifest.groups.map((g) => ({
        title: cleanTitle(g.title),
        shots: g.images.map((name) => {
          const { w, h } = dimsFromName(name);
          return { src: `${imgBase}/${name}`, w, h, project: cleanTitle(g.title) };
        }),
      })),
    [manifest, imgBase],
  );

  const flat: Shot[] = useMemo(() => groups.flatMap((g) => g.shots), [groups]);
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + flat.length) % flat.length)),
    [flat.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  // Offset of each group's first shot inside the flattened lightbox list.
  const offsets = useMemo(
    () => groups.map((_, i) => groups.slice(0, i).reduce((n, g) => n + g.shots.length, 0)),
    [groups],
  );

  return (
    <section className="relative bg-ink pb-24 pt-16 lg:pb-32">
      <Container size="wide">
        {groups.map((group, gi) => (
          <ProjectBlock
            key={group.title + gi}
            group={group}
            index={gi}
            start={offsets[gi]}
            onOpen={setOpen}
          />
        ))}
      </Container>

      {/* Lightbox */}
      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={flat[open].project}
          className="fixed inset-0 z-[80] flex flex-col bg-ink/96 backdrop-blur-xl"
          onClick={close}
        >
          <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">
            <div>
              <p className="d-display text-[17px] text-bone">{flat[open].project}</p>
              <p className="mt-1 font-technical text-[10px] uppercase tracking-[0.18em] text-ash">
                {open + 1} / {flat.length}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-signal hover:bg-signal"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center p-4 sm:p-10">
            <Image
              key={flat[open].src}
              src={flat[open].src}
              alt={flat[open].project}
              width={flat[open].w * 3}
              height={flat[open].h * 3}
              sizes="90vw"
              className="max-h-full w-auto max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="flex items-center justify-center gap-3 pb-8">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(d);
                }}
                aria-label={d === -1 ? "Previous photo" : "Next photo"}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-signal hover:bg-signal"
              >
                {d === -1 ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

const PREVIEW = 8;

function ProjectBlock({
  group,
  index,
  start,
  onOpen,
}: {
  group: { title: string; shots: Shot[] };
  index: number;
  start: number;
  onOpen: (i: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  // Some projects carry 60+ photos; show a preview and load the rest on request.
  const visible = expanded ? group.shots : group.shots.slice(0, PREVIEW);
  const hidden = group.shots.length - visible.length;

  return (
    <div id={slugify(group.title)} className="mb-20 scroll-mt-28 last:mb-0">
      <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-baseline gap-5">
          <span className="font-technical text-[12px] tracking-[0.2em] text-signal">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="d-display text-[clamp(1.5rem,3.4vw,2.4rem)] text-bone">{group.title}</h2>
        </div>
        <span className="font-technical text-[10px] uppercase tracking-[0.18em] text-ash">
          {group.shots.length} photographs
        </span>
      </Reveal>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
        {visible.map((shot, si) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => onOpen(start + si)}
            className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/8 bg-ink-2"
            aria-label={`Open photo ${si + 1} of ${group.title}`}
          >
            <span className="relative block overflow-hidden">
              <Image
                src={shot.src}
                alt={`${group.title} — Delta Construction project photo ${si + 1}`}
                width={shot.w}
                height={shot.h}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
                loading={index === 0 && si < 4 ? "eager" : "lazy"}
                className="h-auto w-full transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
          </button>
        ))}
      </div>

      {hidden > 0 ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="group mt-2 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-technical text-[11px] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-signal hover:bg-signal"
        >
          Show all {group.shots.length} photographs
          <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      ) : null}
    </div>
  );
}
