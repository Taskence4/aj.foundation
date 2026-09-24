import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";

const steps = [
  {
    title: "Referral or enquiry",
    body: "Basic information may be received through authorised institutional channels, Legal Services Institutions, family members or credible voluntary organisations.",
  },
  {
    title: "Consent and initial review",
    body: "The person's consent, immediate need and available information are reviewed through an approved process.",
  },
  {
    title: "Documentation",
    body: "Only information necessary for the stated purpose is organised and handled responsibly.",
  },
  {
    title: "Referral",
    body: "The matter is connected to the competent legal-services institution or authorised professional.",
  },
  {
    title: "Follow-up",
    body: "AJ Foundation may follow up within the agreed role, without promising a legal outcome.",
  },
] as const;

export const metadata: Metadata = {
  title: "Access to Justice | AJ Foundation",
  description: "AJ Foundation seeks to facilitate legal awareness, documentation, case navigation and referral for people affected by incarceration.",
};

export default function AccessToJusticePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work — Access to Justice"
        title="Understanding rights. Reaching the right institutions."
        description="AJ Foundation seeks to help people affected by incarceration navigate available legal-aid pathways with clarity, dignity, informed consent and appropriate professional support."
        backHref="/our-work"
        backLabel="Back to Our Work"
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Why access to justice matters</h2>
          <p>
            A person may be unable to pursue a legitimate legal remedy because information is unclear, documents
            are missing, communication is limited, or the appropriate legal-services institution has not been
            reached.
          </p>
          <p>These barriers can be especially difficult for people with limited financial means or family support.</p>
          <p>
            AJ Foundation&rsquo;s proposed role is to facilitate access and continuity &mdash; not to replace
            courts, Legal Services Authorities or authorised legal professionals.
          </p>

          <h2>Areas of support</h2>
          <ul className="page-list">
            <li>Understandable information about available legal-aid mechanisms.</li>
            <li>Consent-based identification of legal-support needs.</li>
            <li>Assistance in organising available documents and information.</li>
            <li>Referral to the appropriate Legal Services Authority, prison legal-aid mechanism, authorised advocate or competent organisation.</li>
            <li>Documentation support connected with legal aid, release, identity and eligible entitlements.</li>
            <li>Appropriate follow-up within the Foundation&rsquo;s agreed role.</li>
          </ul>

          <h2>How support may be navigated</h2>
          <ol className="page-list">
            {steps.map((step) => (
              <li key={step.title}><strong>{step.title}.</strong> {step.body}</li>
            ))}
          </ol>

          <NoticeBox label="Important legal-services notice">
            <p>
              AJ Foundation is not a court, Legal Services Authority or law firm. Information on this website is
              general and does not constitute legal advice or create a lawyer-client relationship. AJ Foundation
              does not guarantee legal representation, release, bail, parole, appeal or any particular legal
              outcome.
            </p>
            <p>
              For statutory legal aid, individuals should contact the appropriate Legal Services Authority or
              other authorised legal-aid mechanism.
            </p>
          </NoticeBox>

          <Link className="action-link page-cta" href="/contact">
            <span>Contact Us</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
