import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ActionLink } from "@/components/layout/ContentPage";
import { UpdateCard } from "@/components/updates/UpdateCard";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Insights & Updates | AJ Foundation",
  description: "Perspectives and practical learning on access to justice, rehabilitation and capability development, reintegration, and responsible institutional practice.",
};

export default function UpdatesPage() {
  return <>
    <PageHero eyebrow="Insights & Updates" title="Ideas, learning and updates" description="Perspectives and practical learning on access to justice, rehabilitation and capability development, reintegration, and responsible institutional practice." />
    <section className="section updates-archive-section"><div className="site-shell">
      <div className="v3-prose archive-introduction"><p>AJ Foundation&apos;s Practice Notes and Perspectives explore ideas that inform our developing work across justice, rehabilitation and reintegration.</p><p>They are intended to support learning and dialogue and should not be read as reports of completed AJ Foundation programmes unless explicitly stated.</p></div>
      <div className="news-grid archive-grid">{updates.map(post => <UpdateCard key={post.slug} post={post} />)}</div>
      <div className="v3-actions"><ActionLink href="/our-work">Explore Our Work</ActionLink></div>
    </div></section>
  </>;
}
