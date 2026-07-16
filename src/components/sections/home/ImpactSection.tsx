import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactAreas, impactMetrics } from "@/data/impact";

export function ImpactSection() {
  return (
    <section id="impact" className="scroll-mt-24 bg-maroon-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          light
          label="Impact"
          heading="Impact Through Readiness"
          body="AJ Foundation measures impact through participation, skill-building, behavioural engagement, employability readiness, and institutional trust."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-cream-50/10 bg-cream-50/[0.04] p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-crimson-500/15 text-crimson-300">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-cream-50">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-200/75">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-cream-50/10 bg-cream-50/[0.04] p-6 text-center"
            >
              <p className="font-display text-2xl font-extrabold text-crimson-300 sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1.5 text-xs text-cream-200/70">{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
