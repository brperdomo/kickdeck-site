import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NewsletterSignup } from "@/components/blog/NewsletterSignup";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Tips, strategies, and news for tournament organizers. Stay up to date with the latest insights from the KickDeck team.",
  path: "/blog",
});

const placeholderArticles = [
  {
    title: "How AI is Changing Tournament Scheduling",
    description:
      "Explore how artificial intelligence is revolutionizing the way organizers build schedules, resolve conflicts, and optimize field usage across multi-day events.",
  },
  {
    title: "5 Tips for Running a Successful Youth Soccer Tournament",
    description:
      "From registration to awards ceremonies, these five practical tips will help you deliver a smooth, memorable experience for players, coaches, and families.",
  },
  {
    title: "A Tournament Organizer's Guide to Online Payments",
    description:
      "Stop chasing checks and Venmo requests. Learn how integrated payment processing can simplify your financial workflow and get funds to your account faster.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="py-32 text-center">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <Badge>Blog</Badge>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Insights &amp; Updates
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Tips, strategies, and news for tournament organizers. Coming soon.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderArticles.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 0.1}>
                <Card className="flex h-full flex-col p-6">
                  <Badge variant="accent" className="w-fit">
                    Coming Soon
                  </Badge>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {article.description}
                  </p>
                  <span
                    className="mt-4 inline-block text-sm font-medium text-muted-foreground/50 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    Read More &rarr;
                  </span>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <ScrollReveal>
            <NewsletterSignup />
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
