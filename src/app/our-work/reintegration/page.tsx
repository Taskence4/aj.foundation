import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { HashLink } from "@/components/HashLink";

export const metadata: Metadata = {
  title: "Reintegration & Second Chances | AJ Foundation",
  description: "AJ Foundation seeks to strengthen pre-release preparation and post-release pathways to documents, livelihoods, services and community support.",
};

export default function ReintegrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work — Reintegration & Second Chances"
        title="Release is a moment. Reintegration is a journey."
        description="A sustainable return to family and community often depends on preparation, documentation, livelihood options and reliable connections before release."
        backHref="/our-work"
        backLabel="Back to Our Work"
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Our proposed approach</h2>
          <p>
            AJ Foundation seeks to support practical, person-centred preparation for release and to connect
            participants with competent services and opportunities. Support will be based on informed consent,
            verified need, institutional permission and realistic follow-up capacity.
          </p>

          <h2>Proposed areas of support</h2>
          <ol className="page-list">
            <li>Individual pre-release planning and prioritisation of immediate needs.</li>
            <li>Identity-document and entitlement readiness through competent authorities.</li>
            <li>Connection to continuing education, training, employment or enterprise pathways.</li>
            <li>Family or community reconnection when desired, safe and appropriate.</li>
            <li>Referral to housing, health, psychosocial, substance-use or other services through competent providers.</li>
            <li>Time-bound mentoring or follow-up within the Foundation&rsquo;s approved capacity.</li>
          </ol>

          <h2>What &ldquo;second chance&rdquo; means to us</h2>
          <p>
            A second chance is not a favour granted without accountability. It is an opportunity to rebuild life
            with dignity, responsibility, support and access to legitimate social and economic pathways.
            Reintegration works best when the individual&rsquo;s agency, the safety and needs of others, and the
            responsibilities of institutions and communities are held together.
          </p>

          <HashLink className="action-link page-cta" href="/contact">
            <span>Contact AJ Foundation</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </HashLink>
        </div>
      </section>
    </>
  );
}
