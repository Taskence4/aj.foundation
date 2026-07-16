import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PageHero({
  label,
  heading,
  body,
}: {
  label: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-maroon-950 pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,18,62,0.2),transparent_60%)]"
      />
      <Container className="relative">
        <SectionLabel light>{label}</SectionLabel>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold text-cream-50 text-balance sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        {body && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-200/80 text-pretty">
            {body}
          </p>
        )}
      </Container>
    </section>
  );
}
