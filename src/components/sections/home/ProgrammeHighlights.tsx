import { ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gallery } from "@/data/gallery";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
];

export function ProgrammeHighlights() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="text-center">
        <SectionLabel className="justify-center">Programme Highlights</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl leading-tight font-extrabold text-ink text-balance sm:text-4xl">
          A look at our work in action
        </h2>
      </Container>

      <Container className="mt-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {gallery.map((item, i) => (
            <figure
              key={item.caption}
              className={`group relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-maroon-800 to-maroon-950 p-5 ${spans[i] ?? ""}`}
            >
              <ImageIcon
                className="absolute top-5 right-5 size-5 text-cream-50/25"
                aria-hidden
              />
              <figcaption className="relative text-sm font-medium text-cream-50/90">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-stone-600/70">
          Placeholder gallery — real programme photography to be added here.
        </p>
      </Container>
    </section>
  );
}
