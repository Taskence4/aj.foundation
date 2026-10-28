import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CONTACT_EMAIL, formsSubmitDirectly, LEGAL_FORM, LEGAL_NAME, REGISTERED_OFFICE, REGISTRATION_NO } from "@/lib/site";

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
          <h2>1. Who we are</h2>
          <p>
            {LEGAL_NAME} is a {LEGAL_FORM} registered under Registration No. {REGISTRATION_NO}. Its registered
            office is at {REGISTERED_OFFICE.join(", ")}. In this notice, AJ Foundation is referred to as
            &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;.
          </p>
          <p>
            For privacy-related enquiries, please contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>2. Information we collect</h2>
          <p>
            We collect the information that you choose to provide through our Contact and Partnership forms or by
            email: your name, email address, phone number (optional), organisation, role, enquiry type or area of
            interest, and message. The forms do not accept file uploads.
          </p>
          <p>
            Please do not submit case files, identity documents, medical information or other sensitive personal
            information through the general contact form.
          </p>

          <h2>3. Why we use the information</h2>
          <ul className="page-list">
            <li>To receive, review and respond to your enquiry.</li>
            <li>To communicate about a partnership or programme conversation that you initiate.</li>
            <li>To maintain website security, prevent misuse and troubleshoot technical problems.</li>
            <li>To comply with applicable legal obligations.</li>
          </ul>

          <h2>4. Consent and withdrawal</h2>
          <p>
            Where we rely on your consent, you may withdraw it by contacting us. Withdrawal will not affect
            processing already undertaken lawfully, and some information may need to be retained where required by
            law or for an existing legitimate purpose.
          </p>

          <h2>5. Sharing and service providers</h2>
          <p>
            We do not sell personal information. This website relies on the following service providers:
          </p>
          <ul className="page-list">
            <li>
              <strong>Website hosting:</strong> GitHub Pages (GitHub, Inc.). When you visit the website, GitHub logs
              technical information such as your IP address for security and operational purposes. See the{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.
            </li>
            {formsSubmitDirectly && (
              <li>
                <strong>Form processing:</strong> Web3Forms, which receives form submissions and forwards them by
                email to {CONTACT_EMAIL}. See the{" "}
                <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">Web3Forms privacy policy</a>.
              </li>
            )}
            <li><strong>Email:</strong> our organisational email provider, which hosts the {CONTACT_EMAIL} mailbox.</li>
          </ul>
          <p>
            We may also disclose information where required by law or with your specific consent.
          </p>

          <h2>6. Retention</h2>
          <p>
            Enquiries are kept in the {CONTACT_EMAIL} mailbox only for as long as reasonably necessary to respond
            and to manage any resulting conversation or partnership, or where required by law. Access to that
            mailbox is limited to authorised AJ Foundation personnel.
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
            verification of your identity. Requests may be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>9. Children</h2>
          <p>
            The public website and general enquiry form are not designed to collect personal information directly
            from children. Any future service involving children will use a separately approved safeguarding and
            consent process.
          </p>

          <h2>10. Cookies and analytics</h2>
          <p>
            This website does not set cookies and does not use analytics or non-essential tracking. If analytics
            or non-essential tracking is introduced, this notice and a visitor-consent mechanism will be updated
            before activation.
          </p>

          <h2>11. How our enquiry forms work</h2>
          {formsSubmitDirectly ? (
            <p>
              When you submit the Contact or Partnership form, the details you enter are sent securely to
              Web3Forms, which forwards them by email to {CONTACT_EMAIL}. This website does not store form
              submissions in any database; your enquiry is held in the AJ Foundation mailbox as described in
              section 6.
            </p>
          ) : (
            <p>
              The Contact and Partnership forms open a draft in your own email application addressed to{" "}
              {CONTACT_EMAIL}. Nothing is submitted to or stored by this website; your message is only sent if you
              choose to send the draft. The forms do not accept file uploads.
            </p>
          )}

          <h2>12. Changes to this notice</h2>
          <p>We may update this Privacy Notice. The revised version will be posted on this page with an updated effective date.</p>
        </div>
      </section>
    </>
  );
}
