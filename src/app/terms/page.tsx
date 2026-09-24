import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { HashLink } from "@/components/HashLink";

export const metadata: Metadata = {
  title: "Terms of Use & Legal Disclaimer | AJ Foundation",
  description: "Read the terms governing use of the AJ Foundation website and important limitations concerning legal and programme information.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use & Legal Disclaimer" />

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="draft-banner"><AlertTriangle size={18} /> Draft terms — pending review against our final legal entity and jurisdiction.</div>

          <h2>1. Acceptance of these terms</h2>
          <p>By using this website, you agree to these Terms of Use. If you do not agree, please do not use the website.</p>

          <h2>2. General information only</h2>
          <p>
            Website content is provided for general information and institutional communication. It may describe
            proposed or developing programmes and should not be treated as a promise of eligibility, admission,
            funding, employment, certification, service or outcome.
          </p>

          <h2>3. Legal-services disclaimer</h2>
          <p>
            AJ Foundation is not a court, Legal Services Authority or law firm. Website information does not
            constitute legal advice and does not create a lawyer-client relationship. Contacting AJ Foundation does
            not guarantee legal representation, release, bail, parole, appeal or any particular legal outcome.
          </p>
          <p>
            For legal advice, contact an authorised legal professional or the appropriate Legal Services Authority.
            Do not rely on the website for emergencies or imminent legal deadlines.
          </p>

          <h2>4. Accuracy and availability</h2>
          <p>
            We seek to keep information accurate and current, but we do not warrant that all content will always be
            complete, error-free or continuously available. Programme status, partnerships, eligibility and contact
            information may change.
          </p>

          <h2>5. Acceptable use</h2>
          <p>
            You must not misuse the website, interfere with its security, submit unlawful or harmful material,
            impersonate another person, or attempt unauthorised access to systems or information.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            Unless otherwise stated, website text, design and original materials are owned by or licensed to AJ
            Foundation. They may not be reproduced or used commercially without permission, except as permitted by
            law.
          </p>

          <h2>7. Third-party links</h2>
          <p>
            Links to external websites are provided for convenience or reference. AJ Foundation does not control
            and is not responsible for third-party content, availability, privacy or practices.
          </p>

          <h2>8. Limitation and governing law</h2>
          <p>Approved limitation-of-liability, indemnity, governing-law and jurisdiction clauses will be added here following qualified legal review.</p>

          <h2>9. Contact</h2>
          <p>
            Questions about these terms can be sent through our{" "}
            <HashLink href="/contact">Contact page</HashLink>.
          </p>
        </div>
      </section>
    </>
  );
}
