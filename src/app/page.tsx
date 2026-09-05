import { Shell } from "@/components/delta/layout/Shell";
import { Hero } from "@/components/delta/home/Hero";
import { SectorMarquee } from "@/components/delta/home/SectorMarquee";
import { Capabilities } from "@/components/delta/home/Capabilities";
import { Work } from "@/components/delta/home/Work";
import { Numbers } from "@/components/delta/home/Numbers";
import { Studio } from "@/components/delta/home/Studio";
import { Process } from "@/components/delta/home/Process";
import { Commitment } from "@/components/delta/home/Commitment";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <SectorMarquee />
      <Capabilities />
      <Work />
      <Numbers />
      <Studio />
      <Process />
      <Commitment />
    </Shell>
  );
}
