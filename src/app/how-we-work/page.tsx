import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, HandHeart } from "lucide-react";
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
        description="How support is offered matters as much as what is offered. AJ Foundation seeks to work in ways that protect dignity, agency, safety and accountability at every stage."
      />

      <section className="section section-warm">
        <div className="site-shell">
          <div className="collaborate-grid principle-detail-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article className="principle-card" key={principle.title}>
                  <span className="principle-index">{String(index + 1).padStart(2, "0")}</span>
                  <Icon />
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="question-box about-closing">
            <HandHeart />
            <h3>See these principles applied</h3>
            <p>Explore how dignity, consent and accountability shape the pathways AJ Foundation is developing.</p>
            <Link className="action-link" href="/our-work">
              <span>Explore Our Work</span>
              <span className="action-icon"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
