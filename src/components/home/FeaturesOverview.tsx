"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FEATURES } from "@/lib/constants";

export function FeaturesOverview() {
  return (
    <Container>
      <ScrollReveal>
        <SectionHeading
          title="Everything You Need. Nothing You Don't."
          subtitle="One platform to replace the patchwork of tools you're juggling today."
        />
      </ScrollReveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <ScrollReveal key={feature.id} delay={index * 0.05}>
              <div className="glass-card p-6 transition hover:border-primary/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.tagline}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center text-primary transition hover:underline"
          >
            Explore All Features &rarr;
          </Link>
        </div>
      </ScrollReveal>
    </Container>
  );
}
