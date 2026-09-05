"use client";

import { useCallback, useEffect, useState } from "react";
import { dimsFromName, type GalleryManifest } from "./gallery-types";
import { ChevronLeftIcon, SliderChevronRightIcon } from "./icons";

function ProjectBadge({ title }: { title: string }) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="relative rounded-md bg-[#ee171f] px-8 py-3 text-center text-[17px] font-bold uppercase tracking-wide text-white shadow-sm">
        {title}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-[#ee171f]" />
      </div>
      <span className="mt-3 h-0.5 w-56 max-w-[80%] bg-[#ee171f]" />
    </div>
  );
}

export function GalleryView({
  manifest,
  imgBase,
}: {
  manifest: GalleryManifest;
  imgBase: string;
}) {
  // Flatten all images for lightbox navigation
  const flat: string[] = manifest.groups.flatMap((g) => g.images);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) => setLightbox((i) => (i === null ? null : (i + d + flat.length) % flat.length)),
    [flat.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
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
  }, [lightbox, close, step]);

  // Precompute each group's starting index in the flattened list (for lightbox mapping).
  const starts: number[] = [];
  manifest.groups.reduce((acc, g, i) => {
    starts[i] = acc;
    return acc + g.images.length;
  }, 0);

  return (
    <div className="mx-auto w-full max-w-[1170px] px-[15px] py-12">
      {manifest.groups.map((group, groupIdx) => {
        const start = starts[groupIdx];
        return (
          <section key={group.title} className="mb-16">
            <ProjectBadge title={group.title} />
            <div className="gap-4 [column-fill:_balance] columns-2 min-[550px]:columns-3 min-[850px]:columns-4">
              {group.images.map((name, gi) => {
                const idx = start + gi;
                const { w, h } = dimsFromName(name);
                return (
                  <button
                    key={name + gi}
                    type="button"
                    onClick={() => setLightbox(idx)}
                    className="mb-4 block w-full overflow-hidden break-inside-avoid rounded-sm"
                    aria-label={`Open ${group.title} image ${gi + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${imgBase}/${name}`}
                      alt={`${group.title} ${gi + 1}`}
                      width={w}
                      height={h}
                      loading="lazy"
                      decoding="async"
                      className="w-full transition-transform duration-500 hover:scale-105"
                    />
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 text-3xl leading-none text-white/80 hover:text-white"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-4 text-white/80 hover:text-white sm:left-8"
          >
            <ChevronLeftIcon className="h-10 w-10" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${imgBase}/${flat[lightbox]}`}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
          />
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-4 text-white/80 hover:text-white sm:right-8"
          >
            <SliderChevronRightIcon className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
}
