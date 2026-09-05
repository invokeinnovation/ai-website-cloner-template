import Image from "next/image";
import { Container } from "../ui/Section";
import { Reveal } from "../fx/Reveal";
import { Parallax } from "../fx/Parallax";

const BG = "/sites/deltagroupnc-com-daf29435/design-build-9fd280b0/images/Under-Construction.webp";

export function Commitment() {
  return (
    <section className="d-grain relative isolate overflow-hidden bg-ink py-28 lg:py-40">
      <Parallax speed={-0.35} className="absolute inset-0 -z-10 scale-110">
        <Image src={BG} alt="" fill sizes="100vw" className="object-cover opacity-30" />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/72" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_50%,transparent,rgba(8,8,10,0.95))]" />

      <Container size="narrow" className="relative text-center">
        <Reveal>
          <span className="d-eyebrow text-signal">Our commitment to you</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="d-display mt-8 text-[clamp(1.9rem,4.6vw,3.4rem)] text-bone">
            &ldquo;Experience and integrity
            <br />
            is our main focus.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={190}>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-[1.85] text-ash">
            Finding the right commercial contractor is painstaking and time consuming — so we invite you to
            come see our current jobs. Walk a live site, meet the crew, then decide.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
