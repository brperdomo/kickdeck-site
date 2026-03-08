import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Feature } from "@/lib/constants";

interface FeatureSectionProps {
  feature: Feature;
  index: number;
  reversed: boolean;
}

export function FeatureSection({
  feature,
  index,
  reversed,
}: FeatureSectionProps) {
  const Icon = feature.icon;

  return (
    <section className="py-20">
      <Container>
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Text column */}
          <ScrollReveal
            direction={reversed ? "right" : "left"}
            delay={0.1}
            className={reversed ? "lg:order-2" : "lg:order-1"}
          >
            <div>
              {/* Icon in gradient circle */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold">{feature.name}</h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {feature.tagline}
              </p>
              <p className="mt-4 text-muted-foreground">
                {feature.description}
              </p>

              {/* Bullet list */}
              <ul className="mt-6 space-y-3">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm text-muted-foreground">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Visual placeholder column */}
          <ScrollReveal
            direction={reversed ? "left" : "right"}
            delay={0.2}
            className={reversed ? "lg:order-1" : "lg:order-2"}
          >
            <div className="glass-card relative overflow-hidden rounded-xl p-8">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />

              {/* Content */}
              <div className="relative flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {feature.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Preview coming soon
                </p>

                {/* Decorative dots */}
                <div className="absolute right-4 top-4 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-border"
                    />
                  ))}
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
