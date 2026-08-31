import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { PartnerEnquiryForm } from "@/components/sections/PartnerEnquiryForm";
import { collaborateWays } from "@/data/collaborate";

export const metadata: Metadata = {
  title: "Partner With Us | AJ Foundation",
  description: "Partner with AJ Foundation to strengthen access to justice, rehabilitation, livelihoods and reintegration for people affected by incarceration.",
};

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Build pathways that no organisation can build alone"
        description="Justice, rehabilitation and reintegration require coordinated expertise. We welcome conversations with institutions and professionals committed to responsible, practical collaboration."
      />

      <section className="section section-white">
        <div className="site-shell">
          <div className="page-content">
            <h2>Ways to collaborate</h2>
          </div>
          <div className="collaborate-grid">
            {collaborateWays.map((way) => (
              <article key={way.title}>
                <h3>{way.title}</h3>
                <p>{way.body}</p>
              </article>
            ))}
          </div>

          <div className="page-content after-grid">
            <h2>What partners can expect</h2>
            <ol className="page-list">
              <li>A clear purpose, proposed scope and division of responsibilities.</li>
              <li>Accurate communication about programme status and partner roles.</li>
              <li>Consent, safeguarding, privacy and responsible use of participant information.</li>
              <li>Agreed monitoring, learning and financial-accountability arrangements.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-shell">
          <PartnerEnquiryForm />
        </div>
      </section>
    </>
  );
}
