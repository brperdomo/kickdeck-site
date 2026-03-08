import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function PricingFAQ() {
  return (
    <section className="py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading title="Frequently Asked Questions" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion>
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
