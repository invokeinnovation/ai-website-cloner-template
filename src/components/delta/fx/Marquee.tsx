import { cn } from "@/lib/utils";

/** Seamless infinite marquee — children are rendered twice and translated -50%. */
export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={cn("d-marquee relative flex overflow-hidden", className)}>
      <div
        className="d-marquee-track flex w-max shrink-0 items-center"
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
