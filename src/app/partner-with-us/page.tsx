import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { HashLink } from "@/components/HashLink";
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
        description="Justice, rehabilitation and reintegration require coordinated expertise. AJ Foundation welcomes conversations with institutions, professionals and organisations interested in responsible, practical collaboration."
        action={
          <HashLink className="action-link action-link-light hero-cta" href="/partner-with-us#partnership-enquiry">
            <span>Start a Partnership Conversation</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </HashLink>
        }
      />

      <section className="section section-white">
        <div className="site-shell">
          <div className="page-content page-content-wide">
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

          <div className="page-content page-content-wide after-grid">
            <h2>What partners can expect</h2>
            <ul className="page-list">
              <li>A clear purpose and proposed scope.</li>
              <li>Defined roles and responsibilities.</li>
              <li>Accurate communication about programme status.</li>
              <li>Responsible use of participant information.</li>
              <li>Safeguarding and privacy considerations.</li>
              <li>Agreed monitoring, learning and financial-accountability arrangements.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="partnership-enquiry" className="section section-warm">
        <div className="site-shell">
          <PartnerEnquiryForm />
        </div>
      </section>
    </>
  );
}
