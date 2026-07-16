import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-maroon-950 via-maroon-800 to-crimson-700 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1.5px,transparent_1.5px)] [background-size:22px_22px]"
      />
      <Container className="relative text-center">
        <SectionLabel light className="justify-center">
          Join the Mission
        </SectionLabel>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-tight font-extrabold text-cream-50 text-balance sm:text-4xl lg:text-5xl">
          Help build a practical path from custody to capability
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream-200/85 text-pretty sm:text-lg">
          AJ Foundation is working to make rehabilitation more structured, purposeful,
          and outcome-driven. Whether you are an institution, volunteer, trainer,
          employer, donor, or partner, your support can help someone prepare for a
          better future.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" variant="light">
            Join the Mission
          </Button>
          <Button href="#contact" variant="dark">
            Partner With AJ Foundation
          </Button>
        </div>
      </Container>
    </section>
  );
}
