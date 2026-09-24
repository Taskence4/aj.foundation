import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

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
          <h2>Our approach</h2>
          <p>
            AJ Foundation seeks to support practical, person-centred preparation for release and connection to
            competent services and opportunities.
          </p>
          <p>
            Support should be based on informed consent, verified need, institutional permission and realistic
            follow-up capacity.
          </p>

          <h2>Areas of support</h2>
          <ul className="page-list">
            <li>Individual pre-release planning.</li>
            <li>Prioritisation of immediate needs.</li>
            <li>Identity-document and entitlement readiness.</li>
            <li>Connection to education, training, employment or enterprise pathways.</li>
            <li>Family or community reconnection where desired, safe and appropriate.</li>
            <li>Referral to housing, health, psychosocial or other competent services.</li>
            <li>Time-bound mentoring or follow-up within approved capacity.</li>
          </ul>

          <h2>What &ldquo;second chance&rdquo; means</h2>
          <p>A second chance is not the absence of accountability.</p>
          <p>
            It is an opportunity to rebuild life with dignity, responsibility, support and access to legitimate
            social and economic pathways.
          </p>
          <p>
            Reintegration works best when the individual&rsquo;s agency, the safety and needs of others, and the
            responsibilities of institutions and communities are held together.
          </p>

          <h2>Connection to the other pathways</h2>
          <p>Legal barriers, capability gaps and reintegration challenges often overlap.</p>
          <p>
            For this reason, AJ Foundation seeks to connect reintegration with both Access to Justice and
            Rehabilitation &amp; Capability Development rather than treat release as the end of the programme
            journey.
          </p>

          <Link className="action-link page-cta" href="/our-work">
            <span>Explore Our Work</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
