import { STATS } from "../data/site";
import { Container } from "../ui/Section";
import { Counter } from "../fx/Counter";
import { Reveal } from "../fx/Reveal";

export function Numbers() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-24">
      <div aria-hidden className="d-grid absolute inset-0 opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,1),transparent_40%,rgba(8,8,10,1))]" />
      <Container className="relative">
        <dl className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="bg-ink-2/90 p-8 lg:p-10">
              <dt className="d-display text-[clamp(2.4rem,4.6vw,3.6rem)] text-bone">
                <Counter value={s.value} suffix={s.suffix} />
              </dt>
              <dd className="mt-3">
                <span className="block text-[15px] font-medium text-bone/90">{s.label}</span>
                <span className="mt-1.5 block font-technical text-[10px] uppercase tracking-[0.16em] text-ash">
                  {s.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
