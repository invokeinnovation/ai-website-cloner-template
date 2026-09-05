"use client";

import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "signal" | "bone" | "ghost";

const VARIANTS: Record<Variant, string> = {
  signal:
    "bg-signal text-white shadow-[0_18px_50px_-16px_rgba(232,25,31,0.85)] hover:bg-signal-hot",
  bone: "bg-bone text-ink hover:bg-white",
  ghost: "border border-white/18 text-bone hover:border-white/45 hover:bg-white/5",
};

/**
 * Magnetic CTA — the button leans toward the cursor, which reads as physical
 * depth without any layout shift.
 */
export function MagneticButton({
  href,
  children,
  variant = "signal",
  className,
  strength = 0.35,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  strength?: number;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  }

  const classes = cn(
    "d-sheen group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5",
    "font-body text-[13px] font-semibold uppercase tracking-[0.16em] transition-[background-color,border-color,transform] duration-300",
    "[transition:transform_.45s_cubic-bezier(.22,1,.36,1),background-color_.3s,border-color_.3s]",
    VARIANTS[variant],
    className,
  );

  const inner = <span className="relative z-10 flex items-center gap-2.5">{children}</span>;

  if (external) {
    return (
      <a ref={ref} href={href} onPointerMove={onMove} onPointerLeave={onLeave} className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} onPointerMove={onMove} onPointerLeave={onLeave} className={classes}>
      {inner}
    </Link>
  );
}
