import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/sections/home/ContactForm";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream-200/60 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-ink text-balance sm:text-4xl">
            Get in touch with AJ Foundation
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-700">
            Reach out to partner, volunteer, donate, support a programme, or bring
            AJ Foundation&rsquo;s rehabilitation initiatives to an institution.
          </p>

          <dl className="mt-8 space-y-5 text-sm text-stone-700">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-crimson-600" />
              <dd>{site.phone}</dd>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-crimson-600" />
              <dd>{site.email}</dd>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-crimson-600" />
              <dd>{site.address}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="mb-6 font-display text-xl font-bold text-ink">
            Have questions? Contact us today
          </p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
