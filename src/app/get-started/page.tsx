import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { GetStartedForm } from "@/components/get-started/GetStartedForm";
import { Zap, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata = createMetadata({
  title: "Get Started",
  description:
    "Request a free trial of KickDeck. Tell us about your organization and we'll get you set up with everything you need to run your next tournament.",
  path: "/get-started",
});

export default function GetStartedPage() {
  return (
    <main>
      <section className="py-32">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Get Started with KickDeck"
              subtitle="Tell us a bit about your organization and we'll set you up with a free trial tailored to your needs."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Left: Form */}
            <ScrollReveal delay={0.1}>
              <GetStartedForm />
            </ScrollReveal>

            {/* Right: Why KickDeck */}
            <ScrollReveal delay={0.2}>
              <Card className="h-fit space-y-8 p-8">
                {/* Quick Setup */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Quick Setup</h3>
                  </div>
                  <p className="pl-7 text-muted-foreground">
                    Our team will walk you through the platform and have your
                    first tournament ready to go in no time. No long onboarding
                    processes.
                  </p>
                </div>

                {/* No Commitment */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">No Commitment</h3>
                  </div>
                  <p className="pl-7 text-muted-foreground">
                    Your free trial gives you full access to explore every
                    feature. No credit card required, no strings attached.
                  </p>
                </div>

                {/* Hands-On Support */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Hands-On Support</h3>
                  </div>
                  <p className="pl-7 text-muted-foreground">
                    Have questions or want a live demo? Our team is ready to
                    help you get the most out of KickDeck from day one.
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
