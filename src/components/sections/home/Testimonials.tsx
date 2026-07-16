"use client";

import { useState } from "react";
import { Quote, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="bg-maroon-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          light
          label="Testimonials"
          heading="What partners and supporters say"
          className="mx-auto"
        />

        <div className="mt-14 overflow-hidden rounded-3xl border border-cream-50/10 bg-cream-50/[0.04] sm:grid sm:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-crimson-500/20 text-crimson-200">
                  <UserRound className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-cream-50">{active.name}</p>
                  <p className="text-xs text-cream-200/60">{active.designation}</p>
                </div>
              </div>
              <p className="font-display text-sm font-bold text-cream-200/40">
                {String(index + 1).padStart(2, "0")}/{String(testimonials.length).padStart(2, "0")}
              </p>
            </div>

            <Quote className="mt-8 size-8 text-crimson-400" aria-hidden />
            <p className="mt-4 font-display text-2xl leading-snug font-extrabold text-cream-50 sm:text-3xl">
              {active.title}
            </p>
            <blockquote className="mt-4 text-sm leading-relaxed text-cream-200/75">
              {active.quote}
            </blockquote>
          </div>

          <div className="flex items-center justify-center bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-950 p-10">
            <Quote className="size-16 text-cream-50/10" aria-hidden />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                i === index ? "bg-crimson-400" : "bg-cream-50/20 hover:bg-cream-50/40",
              )}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-cream-200/40">
          Placeholder testimonials shown until verified quotes are collected.
        </p>
      </Container>
    </section>
  );
}
