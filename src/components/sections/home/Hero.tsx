import { Camera, Compass, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const pillars = [
  { label: "Rehabilitation", icon: HeartHandshake },
  { label: "Engagement", icon: Users },
  { label: "Employability", icon: Sparkles },
  { label: "Readiness", icon: Compass },
  { label: "Trust", icon: ShieldCheck },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-maroon-950 pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,18,62,0.22),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-maroon-700/30 blur-3xl"
      />

      <Container className="relative flex flex-col items-center text-center">
        <SectionLabel light className="justify-center">
          AJ Foundation
        </SectionLabel>

        <div className="relative mt-8 w-56 sm:w-64">
          <div className="flex aspect-4/5 flex-col items-center justify-center gap-2 rounded-t-[9999px] rounded-b-2xl border border-cream-50/15 bg-gradient-to-b from-maroon-700 via-maroon-800 to-maroon-950">
            <Camera className="size-8 text-cream-50/25" aria-hidden />
            <span className="text-xs font-semibold text-cream-50/40">
              Founder photo coming soon
            </span>
          </div>
        </div>

        <h1 className="-mt-3 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold text-cream-50 text-balance sm:text-5xl lg:text-6xl">
          Building skills. Restoring purpose. Preparing lives beyond prison.
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="flex size-10 items-center justify-center rounded-full border-2 border-maroon-950 bg-crimson-500/20 text-crimson-200"
              >
                <Users className="size-4" />
              </span>
            ))}
          </div>
          <div className="text-left leading-tight">
            <p className="font-display text-lg font-bold text-cream-50">1,000+</p>
            <p className="text-xs tracking-wide text-cream-200/70 uppercase">
              Lives Reached
            </p>
          </div>
        </div>

        <div className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-cream-200/80 text-pretty">
          <p>
            AJ Foundation works with prison systems, institutions, and communities to
            support rehabilitation through structured skills programmes, constructive
            engagement, employability training, and post-release readiness.
          </p>
          <p>
            Our work is focused, practical, and built around one clear purpose:
            helping individuals prepare for a responsible life beyond prison.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <Button href="#contact" variant="primary">
            Join the Mission
          </Button>
          <Button href="#programmes" variant="light">
            Explore Programmes
          </Button>
        </div>

        <div className="mt-16 w-full rounded-3xl border border-cream-50/10 bg-cream-50/[0.04] p-6 text-left sm:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-crimson-300 uppercase">
            5 Core Pillars
          </p>
          <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {pillars.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-crimson-500/15 text-crimson-300">
                  <Icon className="size-4.5" />
                </span>
                <span className="text-sm font-medium text-cream-100/90">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
