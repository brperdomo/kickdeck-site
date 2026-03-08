import { createMetadata } from "@/lib/metadata";
import { FEATURES } from "@/lib/constants";
import { FeatureHero } from "@/components/features/FeatureHero";
import { FeatureSection } from "@/components/features/FeatureSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = createMetadata({
  title: "Features",
  description:
    "Explore every feature KickDeck offers — AI-powered scheduling, integrated payments, bracket management, custom forms, and more. Everything you need to run world-class tournaments.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <main>
      <FeatureHero />

      {FEATURES.map((feature, index) => (
        <FeatureSection
          key={feature.id}
          feature={feature}
          index={index}
          reversed={index % 2 !== 0}
        />
      ))}

      <FinalCTA />
    </main>
  );
}
