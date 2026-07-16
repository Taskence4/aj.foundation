import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { priorities } from "@/data/priorities";

export function CorePriorities() {
  return (
    <section id="programmes" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Our Core Focus</SectionLabel>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight font-extrabold text-ink text-balance sm:text-4xl">
              Five priorities that shape our rehabilitation work
            </h2>
          </div>
          <Button href="#impact" variant="light" className="shrink-0">
            Our Impact
          </Button>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
          Every AJ Foundation programme is built around five clear outcomes.
          These priorities keep the work focused, measurable, and aligned with
          the real needs of prison rehabilitation.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map(({ slug, icon: Icon, title, body }, i) => {
            const showImage = i % 3 === 2;
            const iconColor = i % 3 === 1 ? "text-ink" : "text-crimson-600";

            return (
              <div
                key={slug}
                className={`flex overflow-hidden rounded-2xl border border-ink/10 bg-cream-50 transition-colors duration-200 hover:border-crimson-400/50 ${
                  showImage ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex flex-1 flex-col p-7">
                  <Icon className={`size-9 ${iconColor}`} strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-700">
                    {body}
                  </p>
                </div>

                {showImage && (
                  <div className="hidden w-36 shrink-0 flex-col items-center justify-center gap-2 bg-gradient-to-br from-maroon-700 to-maroon-950 p-4 sm:flex">
                    <Camera className="size-6 text-cream-50/30" aria-hidden />
                    <span className="text-center text-[0.65rem] font-semibold text-cream-50/45">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
