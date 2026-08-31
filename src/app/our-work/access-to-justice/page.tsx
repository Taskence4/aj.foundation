import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";
import { HashLink } from "@/components/HashLink";

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
          <h2>Why access matters</h2>
          <p>
            A person may remain unable to pursue a legitimate legal remedy because information is unclear,
            documents are missing, communication is limited or the appropriate legal-services institution has not
            been reached. These barriers are often greatest for people who are poor or have little family support.
          </p>
          <p>
            AJ Foundation&rsquo;s proposed role is to facilitate access and continuity - not to replace courts,
            Legal Services Authorities or authorised legal professionals.
          </p>

          <h2>Proposed areas of support</h2>
          <ol className="page-list">
            <li>Legal awareness and understandable information about available legal-aid mechanisms.</li>
            <li>Consent-based identification and documentation of legal-support needs.</li>
            <li>Case-status navigation and assistance in organising available documents.</li>
            <li>Referral to the appropriate Legal Services Authority, prison legal-aid clinic, authorised advocate or competent organisation.</li>
            <li>Documentation support connected with legal aid, release, identity and eligible public entitlements.</li>
            <li>Appropriate follow-up with the participant and referred institution, subject to consent and authority.</li>
          </ol>

          <h2>How an enquiry may be handled</h2>
          <ol className="page-list">
            <li>Initial enquiry: basic information is received primarily from prison office referral, including family members or voluntary organisations.</li>
            <li>Consent and screening: the person&rsquo;s identity, consent, eligibility and immediate need are verified through an approved process.</li>
            <li>Documentation: relevant information is organised securely and only to the extent necessary.</li>
            <li>Referral: the matter is referred to the competent legal-services institution or authorised professional.</li>
            <li>Follow-up: progress is tracked only within the agreed role, without promising a legal outcome.</li>
          </ol>

          <NoticeBox label="Important legal-services notice">
            <p>
              AJ Foundation is not a court, Legal Services Authority or law firm. Information on this website is
              general and does not constitute legal advice or create a lawyer-client relationship. We do not
              guarantee legal representation, release, bail, parole, appeal or any particular case outcome.
            </p>
            <p>
              Do not use the website contact form for emergencies, imminent court deadlines or urgent
              liberty-related applications. For statutory legal aid, contact the relevant Legal Services Authority
              or the NALSA helpline at 15100.
            </p>
          </NoticeBox>

          <HashLink className="action-link page-cta" href="/contact">
            <span>Contact AJ Foundation</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </HashLink>
        </div>
      </section>
    </>
  );
}
