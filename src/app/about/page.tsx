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
    "KickDeck was born from real support-team feedback across multiple platforms. Learn about our mission to bring flexibility and modern tech to youth sports.",
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
                Built on a Mission to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Move the Sport Forward
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                KickDeck was born from years of real feedback gathered by
                support teams working across multiple tournament platforms.
                We saw the same gaps, the same frustrations, and the same
                roadblocks come up again and again &mdash; and we set out to
                build the flexible, modern solution the sport demands.
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
                We&apos;re on a mission to remove the roadblocks that hold
                tournament organizers back. Managing a youth sports event
                should be about creating great experiences for players,
                coaches, and families &mdash; not fighting rigid software or
                drowning in administrative busywork. KickDeck brings
                flexibility and advanced technology together so you can focus
                on what matters: the beautiful game.
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
                subtitle="From support tickets to a platform built for purpose."
              />
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p>
                  KickDeck started with a simple observation: the same
                  problems kept surfacing across every tournament platform on
                  the market. Support teams fielded the same complaints
                  &mdash; rigid scheduling tools that couldn&apos;t handle
                  real-world changes, clunky payment workflows, and interfaces
                  so outdated that organizers resorted to spreadsheets anyway.
                </p>
                <p>
                  Rather than patching the same old systems, we started
                  from scratch with a clear goal: build something flexible
                  enough to adapt when plans change, modern enough to meet
                  today&apos;s tech expectations, and powerful enough to scale
                  with the growing demand of youth soccer.
                </p>
                <p>
                  KickDeck combines AI-powered scheduling, seamless payment
                  processing, and an intuitive interface into a single
                  platform where flexibility and change are first-class
                  features. Every capability was shaped by real feedback,
                  tested at actual events, and refined to eliminate the
                  roadblocks organizers face every season.
                </p>
                <p>
                  Today, KickDeck powers hundreds of tournaments across the
                  country. But we&apos;re just getting started. Our roadmap
                  is driven by the community of organizers who use the
                  platform every day, and we&apos;re committed to advancing
                  the technology that keeps the sport moving forward.
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
