import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/shared/FAQAccordion";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
        <div>
          <SectionLabel>FAQ&rsquo;s</SectionLabel>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-ink text-balance sm:text-4xl">
            Common questions from supporters
          </h2>

          <div className="mt-10 rounded-2xl bg-cream-200 p-7">
            <p className="font-display text-lg font-bold text-ink">
              Still have any question?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              Reach out and the AJ Foundation team will get back to you directly.
            </p>
            <Button href="#contact" variant="dark" className="mt-5">
              Get In Touch
            </Button>
          </div>
        </div>

        <FAQAccordion items={faqs} />
      </Container>
    </section>
  );
}
