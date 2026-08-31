"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageSquare, Send, User } from "lucide-react";

const enquiryTypes = ["General", "Partnership", "Programme", "Media", "Other"] as const;

export function GeneralEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiryType, setEnquiryType] = useState<string>("");
  const [typeTouched, setTypeTouched] = useState(false);
  const [consented, setConsented] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!enquiryType || !consented) {
      setTypeTouched(true);
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const organisation = String(form.get("organisation") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      organisation ? `Organisation: ${organisation}` : null,
      `Enquiry type: ${enquiryType}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:info@ajfoundation.org?subject=${encodeURIComponent(
      `AJ Foundation enquiry — ${enquiryType}`,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form-done">
        <span className="contact-form-done-icon"><CheckCircle2 /></span>
        <strong>Thank you. Your enquiry has been received.</strong>
        <p>If a response is required, our team will contact you using the details provided.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-head">
        <span className="contact-form-kicker">General enquiry</span>
        <h3>Connect with AJ Foundation</h3>
      </div>

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="general-name"><User /> Name</label>
          <input id="general-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="general-email"><Mail /> Email</label>
          <input id="general-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="general-phone">Phone (optional)</label>
          <input id="general-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
        </div>
        <div className="contact-field">
          <label htmlFor="general-organisation">Organisation (optional)</label>
          <input id="general-organisation" name="organisation" type="text" autoComplete="organization" placeholder="Your organisation" />
        </div>
      </div>

      <div className="contact-field">
        <label id="general-type-label">Enquiry type</label>
        <div className="contact-intent-group" role="radiogroup" aria-labelledby="general-type-label">
          {enquiryTypes.map((type) => (
            <button
              key={type}
              type="button"
              role="radio"
              aria-checked={enquiryType === type}
              className={`contact-intent-pill ${enquiryType === type ? "is-active" : ""}`}
              onClick={() => {
                setEnquiryType(type);
                setTypeTouched(false);
              }}
            >
              {type}
            </button>
          ))}
        </div>
        {typeTouched && !enquiryType && <p className="contact-intent-error">Please select an enquiry type.</p>}
      </div>

      <div className="contact-field">
        <label htmlFor="general-message"><MessageSquare /> Message</label>
        <textarea id="general-message" name="message" rows={4} placeholder="How can we help?" required />
      </div>

      <div className="consent-check">
        <input
          id="general-consent"
          type="checkbox"
          checked={consented}
          onChange={(event) => setConsented(event.target.checked)}
          required
        />
        <label htmlFor="general-consent">
          I consent to AJ Foundation using the information provided to respond to this enquiry, in accordance with the Privacy Notice.
        </label>
      </div>
      {typeTouched && !consented && <p className="contact-intent-error">Please provide consent to continue.</p>}

      <button type="submit"><span>Send Enquiry</span><i><Send size={16} /></i></button>
    </form>
  );
}
