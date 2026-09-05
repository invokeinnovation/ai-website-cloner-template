"use client";

import { useCallback, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "./useInView";

/**
 * Adds `is-in` once the element scrolls into view, driving the CSS transitions
 * defined by `.d-reveal` / `.d-reveal-3d` / `.d-line` in globals.css.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  amount = 0.18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "depth" | "none";
  as?: ElementType;
  amount?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const onEnter = useCallback(() => ref.current?.classList.add("is-in"), []);
  useInView(ref, onEnter, { threshold: amount });

  const base = variant === "up" ? "d-reveal" : variant === "depth" ? "d-reveal-3d" : undefined;

  return (
    <Tag
      ref={ref}
      className={cn(base, className)}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
