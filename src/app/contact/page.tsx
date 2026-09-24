import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";
import { GeneralEnquiryForm } from "@/components/sections/GeneralEnquiryForm";

export const metadata: Metadata = {
  title: "Contact AJ Foundation",
  description: "Contact AJ Foundation for general, institutional, programme or media enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with AJ Foundation"
        description="For general, institutional, programme or media enquiries, please use the contact details or form below."
      />

      <section className="section section-white">
        <div className="site-shell">
          <div className="page-content contact-links">
            <a className="contact-email-link" href="mailto:info@ajfoundation.org"><Mail size={18} /> info@ajfoundation.org</a>
            <a className="contact-email-link" href="tel:+918050089834"><Phone size={18} /> +91 80500 89834</a>
          </div>

          <GeneralEnquiryForm />

          <div className="page-content after-grid">
            <NoticeBox label="Important note for legal-support enquiries">
              <p>
                Please do not send Aadhaar numbers, court records, medical information, criminal-case documents
                or other sensitive personal information through this general contact form.
              </p>
              <p>
                This form should not be used for emergencies, imminent court deadlines or urgent liberty-related
                applications.
              </p>
              <p>
                Information on this website does not constitute legal advice. For statutory legal aid, individuals
                should contact the appropriate Legal Services Authority or other authorised legal-aid mechanism.
              </p>
            </NoticeBox>
          </div>
        </div>
      </section>
    </>
  );
}
