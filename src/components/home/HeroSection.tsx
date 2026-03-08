"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { APP_URL, STATS } from "@/lib/constants";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl"
      />

      <Container className="relative z-10 pt-32 pb-20 text-center">
        <ScrollReveal>
          <Badge className="mb-8">
            For Soccer Tournament Directors. By Soccer Tournament Directors.
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Manage Tournaments
            <br />
            <GradientText>Like a Pro</GradientText>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Stop wrestling with spreadsheets and chasing payments. KickDeck is
            the all-in-one platform that handles scheduling, registration,
            payments, and scoring — so you can focus on the game.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={APP_URL} size="lg">
              Start Free Trial
            </Button>
            <Button
              href="/features"
              variant="secondary"
              size="lg"
            >
              See Features
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 flex flex-wrap items-center justify-center gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
