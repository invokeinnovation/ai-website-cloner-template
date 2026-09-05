import { GalleryView } from "./GalleryView";
import type { GalleryManifest } from "./gallery-types";

export function GalleryPageBody({
  manifest,
  imgBase,
}: {
  manifest: GalleryManifest;
  imgBase: string;
}) {
  return (
    <>
      {manifest.hero ? (
        // Portfolio-style hero banner
        <section className="relative h-[460px] w-full overflow-hidden bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${imgBase}/${manifest.hero}`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative mx-auto flex h-full w-full max-w-[1170px] flex-col justify-center px-[15px]">
            {manifest.label && (
              <p className="text-[15px] text-white/85">{manifest.label}</p>
            )}
            <h1 className="mt-2 text-[40px] font-bold text-white sm:text-[52px]">{manifest.title}</h1>
            {manifest.intro && (
              <p className="mt-4 max-w-[900px] text-[18px] leading-[28px] text-white/90">
                {manifest.intro}
              </p>
            )}
          </div>
        </section>
      ) : (
        // Category post-style title block
        <section className="bg-white">
          <div className="mx-auto w-full max-w-[1170px] px-[15px] pt-10">
            {manifest.label && (
              <p className="text-[13px] font-bold uppercase tracking-wide text-[#777]">{manifest.label}</p>
            )}
            <h1 className="mt-2 text-[32px] font-bold uppercase text-neutral-900 sm:text-[38px]">
              {manifest.title}
            </h1>
            <span className="mt-4 block h-0.5 w-[50px] bg-[#ee171f]" />
            {(manifest.postDate || manifest.author) && (
              <p className="mt-5 text-[13px] uppercase tracking-wide text-[#999]">
                {manifest.postDate && <>Posted on {manifest.postDate} </>}
                {manifest.author && <>by {manifest.author}</>}
              </p>
            )}
          </div>
        </section>
      )}

      <section className={manifest.hero ? "bg-[#f7f7f7]" : "bg-white"}>
        <GalleryView manifest={manifest} imgBase={imgBase} />
      </section>
    </>
  );
}
