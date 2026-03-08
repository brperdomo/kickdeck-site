"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    number: 1,
    title: "Create Your Tournament",
    description:
      "Set up your event with age groups, fields, fees, and registration rules in just a few clicks.",
  },
  {
    number: 2,
    title: "Teams Register & Pay",
    description:
      "Share your registration link. Teams sign up, select their division, and pay online — all automatically.",
  },
  {
    number: 3,
    title: "AI Builds Your Schedule",
    description:
      "Hit generate and watch our AI create a conflict-free schedule optimized for your fields and constraints.",
  },
];

export function HowItWorks() {
  return (
    <Container>
      <ScrollReveal>
        <SectionHeading title="Up and Running in Minutes" />
      </ScrollReveal>

      <div className="relative mt-16 flex flex-col items-start gap-12 lg:flex-row lg:items-start lg:gap-0">
        {STEPS.map((step, index) => (
          <div key={step.number} className="relative flex-1 text-center">
            {/* Connecting line (between steps, not after last) */}
            {index < STEPS.length - 1 && (
              <div className="absolute left-[calc(50%+32px)] right-[calc(-50%+32px)] top-6 hidden border-t border-dashed border-border lg:block" />
            )}

            <ScrollReveal delay={index * 0.15}>
              <div className="flex flex-col items-center">
                {/* Number circle with gradient border */}
                <div className="gradient-border flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-bold text-transparent">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 max-w-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </Container>
  );
}
