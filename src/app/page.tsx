import { HeroSection } from "@/components/home/HeroSection";
import { PainPoints } from "@/components/home/PainPoints";
import { FeaturesOverview } from "@/components/home/FeaturesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SocialProof } from "@/components/home/SocialProof";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <section>
        <HeroSection />
      </section>

      <section className="py-20">
        <PainPoints />
      </section>

      <section className="py-24">
        <FeaturesOverview />
      </section>

      <section className="py-20">
        <HowItWorks />
      </section>

      <section className="py-24">
        <SocialProof />
      </section>

      <section className="py-20">
        <FinalCTA />
      </section>
    </main>
  );
}
