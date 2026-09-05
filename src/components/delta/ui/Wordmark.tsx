import { cn } from "@/lib/utils";

/**
 * Vector rebuild of the Delta Construction mark so it stays crisp and legible
 * on dark surfaces (the original raster logo is black-on-white only).
 */
export function DeltaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 92" aria-hidden className={cn("h-full w-auto", className)}>
      <path d="M50 2 98 90H2Z" fill="var(--color-signal)" />
      <path d="M27 47h46L50 87Z" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "bone",
  compact = false,
}: {
  className?: string;
  tone?: "bone" | "ink";
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className={cn("block", compact ? "h-7" : "h-9", tone === "bone" ? "text-ink" : "text-white")}>
        <DeltaMark />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-extrabold tracking-[-0.03em]",
            compact ? "text-[19px]" : "text-[23px]",
            tone === "bone" ? "text-bone" : "text-ink",
          )}
        >
          DELTA
        </span>
        <span
          className={cn(
            "font-technical mt-1 tracking-[0.34em]",
            compact ? "text-[7px]" : "text-[8px]",
            tone === "bone" ? "text-ash" : "text-ink/55",
          )}
        >
          CONSTRUCTION
        </span>
      </span>
    </span>
  );
}
