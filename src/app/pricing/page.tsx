import { createMetadata } from "@/lib/metadata";
import { PRICING_TIERS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for tournament directors. No hidden fees, no per-team charges. Start with a free 14-day trial on any plan.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-32 text-center">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <Badge>Pricing</Badge>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                No hidden fees, no per-team charges, no surprises. Pick the plan
                that fits your organization and start your free 14-day trial
                today.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Pricing cards */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 0.1}>
                <div
                  className={
                    tier.highlighted
                      ? "lg:scale-105 lg:-my-4 relative z-10"
                      : ""
                  }
                >
                  <PricingCard tier={tier} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <PricingFAQ />
    </main>
  );
}
