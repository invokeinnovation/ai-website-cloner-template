"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { WE_ARE_DELTA, SERVICES, STOREFRONT_ICON } from "./content";
import type { ServiceItem } from "./types";
import { ResidentialIcon, CommercialIcon } from "../shared/icons";

function ServiceIcon({ kind }: { kind: ServiceItem["iconKind"] }) {
  if (kind === "residential") return <ResidentialIcon className="h-12 w-12" />;
  if (kind === "commercial") return <CommercialIcon className="h-12 w-12" />;
  return (
    <Image src={STOREFRONT_ICON} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
  );
}

function ServiceIconBox({
  item,
  index,
  visible,
}: {
  item: ServiceItem;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className="group flex h-full flex-col items-center px-6 py-10 text-center transition-[background,box-shadow,transform] duration-300 hover:-translate-y-1 hover:rounded-md hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 0.15}s`,
        transitionProperty: "opacity, transform, background, box-shadow",
        transitionDuration: "0.8s",
        transitionTimingFunction: "ease",
      }}
    >
      <div className="mb-4 text-[#757575]">
        <ServiceIcon kind={item.iconKind} />
      </div>
      <h3 className="text-base font-bold leading-6 text-[#757575]">{item.title}</h3>
    </div>
  );
}

export function WeAreDelta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="mx-auto w-full max-w-[1170px] px-[15px]">
        <h2 className="text-center text-[26px] font-bold uppercase leading-tight tracking-[1.564px] text-[#1e1e1e] sm:text-[31.28px] sm:leading-[37.5px]">
          {WE_ARE_DELTA.heading}
        </h2>
        <div className="mx-auto mt-6 max-w-[830px] space-y-1 text-center">
          {WE_ARE_DELTA.paragraphs.map((p, i) => (
            <p key={i} className="text-[15.6px] leading-[24.96px] text-[#777777]">
              {p}
            </p>
          ))}
        </div>
        <div className="mx-auto my-4 h-px w-[50px] bg-[#ee171f]" />

        <div
          ref={sectionRef}
          className="mt-10 grid grid-cols-1 gap-4 min-[550px]:grid-cols-2 min-[850px]:grid-cols-4"
        >
          {SERVICES.map((item, i) => (
            <ServiceIconBox key={`${item.title}-${i}`} item={item} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServiceIconBox };
