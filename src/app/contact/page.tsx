import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";
import { GeneralEnquiryForm } from "@/components/sections/GeneralEnquiryForm";

export const metadata: Metadata = {
  title: "Contact AJ Foundation",
  description: "Contact AJ Foundation for institutional, programme, partnership or general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with AJ Foundation"
        description="For institutional, programme, partnership or general enquiries, please use the details or form below."
      />

      <section className="section section-white">
        <div className="site-shell">
          <div className="page-content">
            <a className="contact-email-link" href="mailto:info@ajfoundation.org"><Mail size={18} /> info@ajfoundation.org</a>
          </div>

          <GeneralEnquiryForm />

          <div className="page-content after-grid">
            <NoticeBox label="Important notice for legal-support enquiries">
              <p>
                Please do not upload Aadhaar numbers, court records, medical information, criminal-case documents
                or other sensitive personal information through this general contact form.
              </p>
              <p>
                This form should not be used for emergencies, imminent court deadlines or urgent liberty-related
                applications. Information on this website does not constitute legal advice. For statutory legal
                aid, contact the relevant Legal Services Authority or call the NALSA helpline at 15100.
              </p>
            </NoticeBox>
          </div>
        </div>
      </section>
    </>
  );
}
