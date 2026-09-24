import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { UpdateCard } from "@/components/updates/UpdateCard";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Insights & Updates | AJ Foundation",
  description:
    "Perspectives and practical learning on access to justice, rehabilitation and capability development, reintegration, and responsible institutional practice.",
};

export default function UpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Updates"
        title="Ideas, learning and updates"
        description="Perspectives and practical learning on access to justice, rehabilitation and capability development, reintegration, and responsible institutional practice."
      />

      <section className="section updates-archive-section">
        <div className="site-shell">
          <div className="page-content">
            <p>
              AJ Foundation&rsquo;s Practice Notes and Perspectives explore ideas that inform our developing work
              across justice, rehabilitation and reintegration.
            </p>
            <p>
              They are intended to support learning and dialogue and should not be read as reports of completed
              AJ Foundation programmes unless explicitly stated.
            </p>
          </div>
          <div className="news-grid archive-grid">
            {updates.map((post, index) => <UpdateCard key={post.slug} post={post} priority={index < 3} />)}
          </div>
          <div className="page-content after-grid">
            <Link className="action-link page-cta" href="/our-work">
              <span>Explore Our Work</span>
              <span className="action-icon"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
