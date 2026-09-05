import Image from "next/image";
import { ArrowUpRight, Compass, HardHat, Ruler, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, SectionHeading } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { TiltCard } from "../fx/TiltCard";
import { Counter } from "../fx/Counter";
import { MagneticButton } from "../ui/Button";
import { COMPANY, STATS } from "../data/site";
import { PROJECTS } from "../data/projects";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity first",
    body: "The number we quote is the number you pay. If something changes on site you hear it from us that day, in writing, before the work happens.",
  },
  {
    icon: Ruler,
    title: "Drawings that hold up",
    body: "Architectural and engineering work happens in-house, so the set that goes to the county is the set we build from — no gaps between design and field.",
  },
  {
    icon: HardHat,
    title: "Our own people",
    body: "A Delta superintendent runs every job. Our specialised subcontractor network has worked with us for years, not for one bid cycle.",
  },
  {
    icon: Compass,
    title: "Built for the Triangle",
    body: "Raleigh, Durham, Cary, Apex, Clayton, Wilmington, Winston-Salem — we know the inspectors, the landlords and the mall management teams.",
  },
];

const CREW = "/sites/deltagroupnc-com-daf29435/about-979bddc4/images/construction-workers-1400x745.webp";
const SHOWCASE = PROJECTS.filter((p) =>
  ["west-end-clubhouse", "cucciolo-famiglia", "posh-nail-spa-of-durham"].includes(p.slug),
);

export function AboutContent() {
  return (
    <>
      {/* Narrative */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div aria-hidden className="d-grid absolute inset-0 opacity-50" />
        <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>Since {COMPANY.since}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="d-display mt-6 text-[clamp(2rem,4.4vw,3.3rem)] text-bone">
                A little about us.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-sm text-[15px] leading-[1.8] text-ash">
                Delta Construction Group, {COMPANY.address}.
              </p>
              <div className="mt-8">
                <MagneticButton href="/contact" variant="ghost">
                  Talk to us
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <div className="space-y-7 text-[17px] leading-[1.85] text-ash">
            <Reveal delay={60}>
              <p className="text-[21px] leading-[1.65] text-bone">
                The construction company you can depend on.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                Delta Construction has been a reliable Raleigh construction company since {COMPANY.since}.
                Being a great service provider means having complete and total confidence in the people
                providing those services, and we&rsquo;re proud to have the best pros in the business working
                with us. With a focus on personalized service, competitive rates and customer satisfaction,
                we&rsquo;re always striving to meet and exceed our high standards and our clients&rsquo;
                expectations.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                We associate with many partners throughout the country, effectively taking advantage of a
                network of highly specialized suppliers and subcontractors to achieve our work goals in the
                most effective way. Delta wishes to build strategic cooperative relationships to go further
                and stronger together.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                Today that adds up to {PROJECTS.length} completed builds — restaurants and tea shops, nail
                bars and spas, studios, clinics, a church, offices, clubhouses and custom homes — documented
                in more than {PROJECTS.reduce((n, p) => n + p.photos, 0).toLocaleString()} site photographs
                you can look through yourself.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Crew image band */}
      <section className="relative bg-ink">
        <Container size="wide">
          <Reveal variant="depth">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10">
              <Image
                src={CREW}
                alt="Delta Construction crew working on a North Carolina jobsite"
                width={1400}
                height={745}
                sizes="(max-width: 1024px) 96vw, 1400px"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
                <p className="d-display max-w-2xl text-[clamp(1.4rem,3vw,2.4rem)] text-bone">
                  Experience and integrity is our main focus.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <Container className="relative">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Four commitments
                <br />
                we do not trade away.
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} variant="depth" delay={i * 90}>
                <TiltCard className="group h-full" max={6}>
                  <div className="d-3d h-full rounded-[26px] border border-white/10 bg-ink-2/85 p-8 transition-colors duration-500 hover:border-white/20 sm:p-10">
                    <span
                      className="d-tilt-layer flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-signal"
                      style={{ "--z": "36px" } as React.CSSProperties}
                    >
                      <v.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="d-display mt-8 text-[22px] text-bone">{v.title}</h3>
                    <p className="mt-3.5 text-[15px] leading-[1.8] text-ash">{v.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Numbers */}
      <section className="relative bg-ink-2 py-20">
        <Container>
          <dl className="grid gap-px overflow-hidden rounded-[26px] border border-white/10 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-ink p-8 lg:p-10">
                <dt className="d-display text-[clamp(2.2rem,4vw,3.2rem)] text-bone">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-3 text-[14px] text-ash">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Recent work teaser */}
      <section className="relative bg-ink py-24 lg:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Proof" title="Recent work." className="max-w-md" />
            <Reveal delay={140}>
              <MagneticButton href="/portfolio" variant="ghost">
                All {PROJECTS.length} projects
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SHOWCASE.map((p, i) => (
              <Reveal key={p.slug} variant="depth" delay={i * 100}>
                <a href={p.href} className="group block overflow-hidden rounded-[22px] border border-white/10">
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 92vw, 30vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-6">
                      <span className="d-display block text-[19px] text-bone">{p.name}</span>
                      <span className="mt-1 block text-[13px] text-ash">{p.location}</span>
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
