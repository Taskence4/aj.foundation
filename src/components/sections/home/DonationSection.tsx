import { HandHeart, ShieldCheck, Sprout, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { donationTracker } from "@/data/donate";

export function DonationSection() {
  return (
    <section id="donate" className="scroll-mt-24 bg-cream-200/60 py-20 sm:py-28">
      <Container className="text-center">
        <SectionLabel className="justify-center">Donate</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight font-extrabold text-ink text-balance sm:text-4xl">
          Support rehabilitation that creates real readiness
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-700 sm:text-lg">
          Your contribution helps AJ Foundation deliver skills training,
          constructive engagement sessions, learning materials, volunteer
          coordination, and post-release readiness support.
        </p>
      </Container>

      <Container className="mt-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-800 via-maroon-900 to-maroon-950 py-20 sm:py-28">
          <HandHeart className="pointer-events-none absolute top-8 left-8 size-10 text-cream-50/10 sm:size-14" aria-hidden />
          <ShieldCheck className="pointer-events-none absolute right-10 bottom-10 size-10 text-cream-50/10 sm:size-14" aria-hidden />
          <Sprout className="pointer-events-none absolute bottom-10 left-12 size-8 text-cream-50/10 sm:size-12" aria-hidden />
          <Users className="pointer-events-none absolute top-10 right-14 size-8 text-cream-50/10 sm:size-12" aria-hidden />

          <div className="relative mx-auto max-w-lg rounded-3xl bg-crimson-600 p-8 text-center shadow-2xl shadow-maroon-950/40 sm:p-10">
            <p className="font-display text-4xl font-extrabold text-cream-50 sm:text-5xl">
              {donationTracker.amountRaised}
            </p>
            <p className="mt-2 text-sm text-cream-100/85">
              {donationTracker.caption}
            </p>
            <Button href="#contact" variant="dark" className="mx-auto mt-7 w-fit">
              Donate Now
            </Button>
            <p className="mt-5 text-xs leading-relaxed text-cream-100/70">
              Your support helps fund training resources, programme materials,
              volunteer coordination, and readiness support for participants.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
