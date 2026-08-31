import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";
import { HashLink } from "@/components/HashLink";

export const metadata: Metadata = {
  title: "About AJ Foundation | Justice, Rehabilitation and Reintegration",
  description: "Learn why AJ Foundation is being developed and how it seeks to connect access to justice, rehabilitation and reintegration.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AJ Foundation"
        title="Building pathways beyond incarceration"
        description="AJ Foundation is being established to support people affected by incarceration through connected work in access to justice, rehabilitation, capability development and reintegration."
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Who we are</h2>
          <p>
            We are developing a focused platform that brings together legal-support navigation, learning and
            livelihood pathways, pre-release preparation and post-release connection.
          </p>
          <p>
            Our starting point is simple: people should not have to navigate legal, livelihood and social barriers
            as isolated problems. Sustainable reintegration requires these barriers to be understood together and
            addressed through competent partnerships.
          </p>

          <NoticeBox label="Registered details — pending confirmation">
            <p>
              AJ Foundation&rsquo;s registered legal name, legal form, registration number and registered office
              address will be published here once confirmed.
            </p>
          </NoticeBox>

          <h2>Our vision</h2>
          <p>
            A society in which people affected by incarceration can access justice, rebuild capabilities and return
            to family and community with dignity, opportunity and support.
          </p>

          <h2>Our mission</h2>
          <p>
            To facilitate connected pathways to legal support, learning, livelihoods and reintegration through
            ethical practice, institutional collaboration and evidence-informed programmes.
          </p>

          <h2>Who we seek to serve</h2>
          <ol className="page-list">
            <li>People in prison who face legal, livelihood or reintegration barriers.</li>
            <li>People preparing for release or rebuilding life after release.</li>
            <li>People with limited financial means, documentation, family support or access to competent services.</li>
            <li>Families and communities affected by incarceration, where engagement is appropriate and consent-based.</li>
          </ol>

          <h2>Where we work</h2>
          <p>
            AJ Foundation&rsquo;s initial programme development and operations are focused on Karnataka, with a
            broader aspiration to contribute across India over time through partnerships and scalable approaches.
          </p>

          <h2>Founder &amp; governance</h2>
          <NoticeBox label="Coming soon">
            <p>
              A note from our Founder, along with details of AJ Foundation&rsquo;s governance and leadership, will
              be published here once finalised.
            </p>
          </NoticeBox>

          <HashLink className="action-link page-cta" href="/our-work">
            <span>Explore our work</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </HashLink>
        </div>
      </section>
    </>
  );
}
