import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Zap, Shield, Users, Lightbulb } from "lucide-react";

export const metadata = createMetadata({
  title: "About",
  description:
    "KickDeck was built by tournament directors who understand the chaos of managing youth sports events. Learn about our mission, values, and story.",
  path: "/about",
});

const values = [
  {
    name: "Simplicity",
    description: "Every feature should save you time, not create more work.",
    icon: Zap,
  },
  {
    name: "Reliability",
    description:
      "Your tournament depends on us. We take that responsibility seriously.",
    icon: Shield,
  },
  {
    name: "Community",
    description: "We build with our users, not just for them.",
    icon: Users,
  },
  {
    name: "Innovation",
    description:
      "We leverage AI and modern technology to solve real problems.",
    icon: Lightbulb,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-32 text-center">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <Badge>Our Story</Badge>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Built by Tournament Directors{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Who Get It
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                We understand the chaos of tournament management because
                we&apos;ve lived it. Late nights building schedules in
                spreadsheets, chasing down payments, and fielding hundreds of
                emails from coaches and parents. KickDeck was born from that
                frustration.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="pb-24">
        <Container>
          <ScrollReveal>
            <Card className="mx-auto max-w-4xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We&apos;re on a mission to empower tournament directors with
                technology that actually works. Managing a youth sports
                tournament should be about creating great experiences for
                players, coaches, and families &mdash; not drowning in
                administrative busywork. KickDeck handles the logistics so you
                can focus on what matters: the beautiful game.
              </p>
            </Card>
          </ScrollReveal>
        </Container>
      </section>

      {/* Values */}
      <section className="pb-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="What We Stand For"
              subtitle="The principles that guide every decision we make."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <ScrollReveal key={value.name} delay={index * 0.1}>
                <Card className="flex gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.name}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="pb-24">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                title="How It Started"
                subtitle="From spreadsheet chaos to a platform built for purpose."
              />
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  KickDeck started the way most good ideas do &mdash; out of
                  pure frustration. Our founding team had spent years directing
                  youth soccer tournaments across the country, and every event
                  felt like reinventing the wheel. Scheduling was done in massive
                  spreadsheets that broke if you looked at them wrong. Payments
                  came in through a patchwork of Venmo, checks, and cash
                  envelopes stuffed into registration folders.
                </p>
                <p>
                  We looked at the existing tools on the market and found
                  platforms that were either outdated, overpriced, or so complex
                  that you needed a full-time administrator just to run them. We
                  knew there had to be a better way.
                </p>
                <p>
                  So we built one. KickDeck combines modern AI-powered
                  scheduling, seamless payment processing, and an intuitive
                  interface into a single platform designed specifically for
                  tournament directors. Every feature was shaped by real
                  tournament scenarios, tested at actual events, and refined
                  based on feedback from directors just like you.
                </p>
                <p>
                  Today, KickDeck powers hundreds of tournaments across the
                  country. But we&apos;re just getting started. Our roadmap is
                  driven by the community of directors who use the platform
                  every day, and we&apos;re committed to making tournament
                  management something you actually enjoy &mdash; not something
                  you dread.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <FinalCTA />
      </section>
    </main>
  );
}
