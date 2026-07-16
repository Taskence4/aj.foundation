import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/sections/shared/EventCard";
import { events } from "@/data/events";

export function UpcomingEvents() {
  return (
    <section id="events" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          label="Join Our Event"
          heading="Join our upcoming events and community"
          body="AJ Foundation hosts skill sessions, volunteer orientations, institutional meetings, and awareness events focused on rehabilitation and post-release readiness."
          className="mx-auto"
        />

        <div className="mt-14 space-y-5">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
