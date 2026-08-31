import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "How We Work | AJ Foundation",
  description: "AJ Foundation's proposed work is guided by dignity, consent, equity, partnership, safeguarding, evidence and accountability.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Principles before programmes"
        description="How support is offered matters as much as what is offered. Our work is intended to protect dignity, agency, safety and accountability at every stage."
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="principle-list">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
