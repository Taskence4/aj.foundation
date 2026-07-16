import { Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { aboutStats } from "@/data/aboutStats";

function ImagePlaceholder({
  caption,
  className,
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-4/5 flex-col items-center justify-center gap-2 rounded-3xl border border-ink/10 bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-950 p-6 ${className ?? ""}`}
    >
      <Camera className="size-7 text-cream-50/30" aria-hidden />
      <span className="text-center text-xs font-semibold text-cream-50/50">
        {caption}
      </span>
    </div>
  );
}

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-ink text-balance sm:text-4xl">
            Rehabilitation through skills, structure, and trust
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.3fr_0.8fr] lg:items-center lg:gap-6">
          <ImagePlaceholder caption="Programme photo coming soon" />

          <div className="order-first lg:order-none">
            <p className="text-lg leading-relaxed font-medium text-stone-700 text-pretty sm:text-xl">
              We are committed to creating meaningful opportunities for people
              within prison systems, while working respectfully with
              institutions that believe rehabilitation can create safer,
              stronger communities.
            </p>

            <div className="mt-8 grid grid-cols-2 divide-x divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-cream-50">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="p-5">
                  <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button href="#programmes" variant="dark" className="mt-8">
              About Us
            </Button>
          </div>

          <ImagePlaceholder
            caption="Institutional partnership photo coming soon"
            className="lg:mt-16"
          />
        </div>
      </Container>
    </section>
  );
}
