import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Notice | AJ Foundation",
  description: "Read how AJ Foundation collects, uses, protects and responds to requests concerning personal information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Notice" />

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="draft-banner"><AlertTriangle size={18} /> Draft notice — pending legal review and final institutional details.</div>

          <h2>1. Who we are</h2>
          <p>This website is operated by AJ Foundation, referred to in this notice as &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;.</p>

          <h2>2. Information we collect</h2>
          <p>
            We may collect information that you choose to provide through our enquiry forms, including your name,
            email address, phone number, organisation, role, area of interest and message. We may also collect
            limited technical information necessary for website security and operation.
          </p>
          <p>
            Please do not submit case files, identity documents, medical information or other sensitive personal
            information through the general contact form.
          </p>

          <h2>3. Why we use the information</h2>
          <ol className="page-list">
            <li>To receive, review and respond to your enquiry.</li>
            <li>To communicate about a partnership or programme conversation that you initiate.</li>
            <li>To maintain website security, prevent misuse and troubleshoot technical problems.</li>
            <li>To comply with applicable legal obligations.</li>
          </ol>

          <h2>4. Consent and withdrawal</h2>
          <p>
            Where we rely on your consent, you may withdraw it by contacting us. Withdrawal will not affect
            processing already undertaken lawfully, and some information may need to be retained where required by
            law or for an existing legitimate purpose.
          </p>

          <h2>5. Sharing and service providers</h2>
          <p>
            We do not sell personal information. We may use authorised service providers for website hosting,
            email, forms, security or technical support, subject to appropriate arrangements. We may disclose
            information where required by law or with your specific consent.
          </p>

          <h2>6. Retention</h2>
          <p>
            We retain personal information only for as long as reasonably necessary for the purpose stated in this
            notice or as required by applicable law, unless a longer period is required for an active engagement or
            legal obligation.
          </p>

          <h2>7. Security</h2>
          <p>
            We use reasonable administrative and technical measures intended to protect personal information. No
            method of electronic storage or transmission is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>8. Your requests and grievances</h2>
          <p>
            You may contact us to request access, correction, completion, updating or erasure of personal
            information, or to raise a concern about how it has been handled, subject to applicable law and
            verification of your identity.
          </p>

          <h2>9. Children</h2>
          <p>
            The public website and general enquiry form are not designed to collect personal information directly
            from children. Any future service involving children will use a separately approved safeguarding and
            consent process.
          </p>

          <h2>10. Cookies and analytics</h2>
          <p>
            We use essential cookies only at this stage. If non-essential analytics or third-party tracking is
            introduced, visitors will be given the required information and choice before it is activated.
          </p>

          <h2>11. Changes to this notice</h2>
          <p>We may update this Privacy Notice. The revised version will be posted on this page with an updated effective date.</p>
        </div>
      </section>
    </>
  );
}
