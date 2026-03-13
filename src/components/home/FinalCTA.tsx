"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FinalCTA() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-10 blur-3xl"
      />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="gradient-border glass-card px-8 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Transform Your Tournament?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join hundreds of tournament organizers who&apos;ve already made the
              switch.
            </p>
            <div className="mt-8">
              <Button href="/get-started" size="lg">
                Get Started
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. Free trial included.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
}
