import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/sections/shared/BlogCard";
import { updates } from "@/data/updates";

export function UpdatesPreview() {
  return (
    <section id="updates" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          label="Updates & Insights"
          heading="Stories, Learnings, and Field Updates"
          body="Read updates from AJ Foundation's programmes, stories from the field, insights on rehabilitation, and reflections on building stronger pathways for reintegration."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {updates.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
