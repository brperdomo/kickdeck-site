import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Clock, LifeBuoy } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with the KickDeck team. We're here to help with questions about tournament management, pricing, integrations, and more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="py-32">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Get in Touch"
              subtitle="Have a question, need support, or want to explore a partnership? We'd love to hear from you."
            />
          </ScrollReveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Left: Contact Form */}
            <ScrollReveal delay={0.1}>
              <ContactForm />
            </ScrollReveal>

            {/* Right: Contact Info */}
            <ScrollReveal delay={0.2}>
              <Card className="h-fit space-y-8 p-8">
                {/* Email Us */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                  </div>
                  <div className="space-y-1.5 pl-7">
                    <a
                      href="mailto:info@kickdeck.xyz"
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      info@kickdeck.xyz
                    </a>
                    <a
                      href="mailto:support@kickdeck.xyz"
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      support@kickdeck.xyz
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Response Time</h3>
                  </div>
                  <p className="pl-7 text-muted-foreground">
                    We typically respond within 24 hours during business days. For
                    urgent issues, please include &quot;URGENT&quot; in your subject line.
                  </p>
                </div>

                {/* Looking for Support? */}
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Looking for Support?
                    </h3>
                  </div>
                  <p className="pl-7 text-muted-foreground">
                    For technical support and account-related questions, reach out
                    directly at{" "}
                    <a
                      href="mailto:support@kickdeck.xyz"
                      className="text-primary hover:underline"
                    >
                      support@kickdeck.xyz
                    </a>
                    .
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
