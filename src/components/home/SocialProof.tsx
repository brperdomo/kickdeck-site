"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function SocialProof() {
  return (
    <Container>
      <ScrollReveal>
        <SectionHeading title="Trusted by Tournament Organizers Nationwide" />
      </ScrollReveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 0.1}>
            <div className="glass-card flex h-full flex-col p-6">
              <span
                aria-hidden="true"
                className="text-5xl leading-none text-primary/20"
              >
                &ldquo;
              </span>
              <p className="mt-2 flex-1 italic text-foreground/90">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.organization}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  );
}
