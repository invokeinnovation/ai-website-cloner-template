import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { Parallax } from "../fx/Parallax";
import { MagneticButton } from "../ui/Button";
import { COMPANY } from "../data/site";

const CREW = "/sites/deltagroupnc-com-daf29435/about-979bddc4/images/construction-workers-1400x745.webp";
const DETAIL = "/sites/deltagroupnc-com-daf29435/root-8a5edab2/images/A2.png";

export function Studio() {
  return (
    <section id="studio" className="relative overflow-hidden bg-ink py-24 lg:py-36">
      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Layered 3D image group */}
        <div className="d-stage relative">
          <Reveal variant="depth">
            <div className="d-3d relative">
              <span
                aria-hidden
                className="absolute -left-4 -top-4 h-full w-full rounded-[26px] border border-signal/45 sm:-left-6 sm:-top-6"
              />
              <div
                className="relative overflow-hidden rounded-[26px] border border-white/10 shadow-[0_70px_120px_-50px_rgba(0,0,0,0.95)]"
                style={{ transform: "rotateY(6deg) rotateX(2deg)" }}
              >
                <Image
                  src={CREW}
                  alt="Delta Construction crew on a North Carolina jobsite"
                  width={1400}
                  height={745}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>

              {/* Only floats once the section is two columns (lg). Below that the layout
                  is stacked, so an overhanging absolute image lands on the copy below. */}
              <Parallax speed={0.25} className="absolute -bottom-10 -right-8 hidden w-[42%] lg:block">
                <div className="d-float overflow-hidden rounded-[20px] border border-white/12 shadow-[0_50px_90px_-40px_rgba(0,0,0,0.95)]">
                  <Image
                    src={DETAIL}
                    alt="Finished clubhouse interior built by Delta Construction"
                    width={800}
                    height={600}
                    sizes="26vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Parallax>

              <div className="d-glass absolute bottom-6 left-6 rounded-2xl px-5 py-4">
                <div className="d-display text-[30px] leading-none text-bone">{COMPANY.since}</div>
                <div className="mt-1.5 font-technical text-[9px] uppercase tracking-[0.2em] text-ash">
                  Building in Raleigh since
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>The studio</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="d-display mt-6 text-[clamp(1.95rem,3.9vw,3.05rem)] text-bone">
              The construction company you can depend on.
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <div className="mt-7 space-y-5 text-[16px] leading-[1.85] text-ash">
              <p>
                Delta Construction has been a reliable Raleigh construction company since {COMPANY.since}.
                Being a great service provider means having complete and total confidence in the people
                providing those services — and we&rsquo;re proud to have the best pros in the business working
                with us.
              </p>
              <p>
                We work with partners throughout the country, drawing on a network of highly specialized
                suppliers and subcontractors to hit our targets the most effective way. With a focus on
                personalized service, competitive rates and customer satisfaction, we&rsquo;re always striving
                to exceed our own standards and our clients&rsquo; expectations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-2">
              {[
                { k: "Design/Build", v: "Drawings and engineering in-house" },
                { k: "Self-performed", v: "Our own supers on every job" },
                { k: "Licensed in NC", v: "Commercial and residential" },
                { k: "Weekly updates", v: "Photo log from demo to punch" },
              ].map((f) => (
                <li key={f.k} className="bg-ink-2 px-6 py-5">
                  <span className="block text-[15px] font-semibold text-bone">{f.k}</span>
                  <span className="mt-1 block text-[13px] text-ash">{f.v}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10">
              <MagneticButton href="/about" variant="ghost">
                More about Delta
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
