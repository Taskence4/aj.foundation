import type { Metadata } from "next";
import { Briefcase, Landmark, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import {
  CAREERS_EMAIL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  OPERATIONAL_OFFICE,
  REGISTERED_OFFICE,
} from "@/lib/site";
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
          <div className="page-content">
            <div className="collaborate-grid contact-details-grid">
              <article>
                <Mail />
                <h3>General enquiries</h3>
                <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
                <p><a href={CONTACT_PHONE_HREF}><Phone size={14} /> {CONTACT_PHONE}</a></p>
              </article>
              <article>
                <Briefcase />
                <h3>Careers / Internship</h3>
                <p><a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a></p>
                <p>For recruitment applications and recruitment-related communication.</p>
              </article>
              <article>
                <Landmark />
                <h3>Registered Office</h3>
                <address>{REGISTERED_OFFICE.map((line) => <span key={line}>{line}</span>)}</address>
              </article>
              <article>
                <MapPin />
                <h3>Operational Office</h3>
                <address>{OPERATIONAL_OFFICE.map((line) => <span key={line}>{line}</span>)}</address>
                <p>Visits by prior appointment.</p>
              </article>
            </div>
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
