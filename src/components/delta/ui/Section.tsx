import { cn } from "@/lib/utils";
import { Reveal } from "../fx/Reveal";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("d-eyebrow inline-flex items-center gap-3 text-signal", className)}>
      <span aria-hidden className="h-px w-8 bg-signal/70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  tone = "dark",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2
          className={cn(
            "d-display mt-6 text-[clamp(2.1rem,5.2vw,4rem)]",
            tone === "dark" ? "text-bone" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-6 text-[17px] leading-[1.7]",
              tone === "dark" ? "text-ash" : "text-ink/65",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        size === "wide" ? "max-w-[1560px]" : size === "narrow" ? "max-w-[860px]" : "max-w-[1320px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
