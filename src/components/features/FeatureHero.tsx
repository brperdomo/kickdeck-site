import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeatureHero() {
  return (
    <section className="py-32 text-center">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <Badge>Platform Features</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Powerful Tools for Every{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tournament
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From AI scheduling to payment processing, every feature is
              designed to save you time and eliminate headaches.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
