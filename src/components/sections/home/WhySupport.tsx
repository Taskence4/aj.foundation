import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { trustCards } from "@/data/trustCards";

const tileStyles = [
  "bg-crimson-600 sm:col-span-1",
  "bg-maroon-950 sm:col-span-2",
  "bg-ink sm:col-span-1",
  "bg-gradient-to-br from-crimson-600 to-maroon-800 sm:col-span-2",
];

export function WhySupport() {
  return (
    <section className="bg-cream-200/60 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Why Support AJ Foundation"
            heading="Because rehabilitation needs more than good intentions"
            body="Real rehabilitation requires structure, consistency, trust, and practical tools. AJ Foundation focuses on programmes that can work within institutional realities."
          />
          <Button href="#contact" variant="dark" className="shrink-0">
            Get In Touch
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {trustCards.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={`flex flex-col justify-between rounded-3xl p-8 ${tileStyles[i]}`}
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-cream-50/15 text-cream-50">
                <Icon className="size-5" />
              </span>
              <div className="mt-10">
                <h3 className="font-display text-xl font-bold text-cream-50">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/75">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
