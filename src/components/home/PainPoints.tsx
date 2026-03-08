"use client";

import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PAIN_POINTS } from "@/lib/constants";

export function PainPoints() {
  return (
    <Container>
      <ScrollReveal>
        <SectionHeading
          title="Stop Wrestling with Spreadsheets"
          subtitle="Tournament management shouldn't feel like a second job. Here's how KickDeck transforms your workflow."
        />
      </ScrollReveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Before Column */}
        <ScrollReveal delay={0.1}>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/20">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">Before KickDeck</h3>
            </div>
            <div className="space-y-3">
              {PAIN_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="glass-card flex items-start gap-3 p-4"
                >
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-destructive/90">{point.before}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* After Column */}
        <ScrollReveal delay={0.2}>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/20">
                <Check className="h-5 w-5 text-success" />
              </div>
              <h3 className="text-xl font-semibold">With KickDeck</h3>
            </div>
            <div className="space-y-3">
              {PAIN_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="glass-card flex items-start gap-3 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="text-success/90">{point.after}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  );
}
