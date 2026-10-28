"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageSquare, Send, User } from "lucide-react";
import { CONTACT_EMAIL, formsSubmitDirectly, submitEnquiry, type EnquiryResult } from "@/lib/site";

const enquiryTypes = ["General", "Programme", "Media", "Other"] as const;

export function GeneralEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error" | EnquiryResult>("idle");
  const [enquiryType, setEnquiryType] = useState<string>("");
  const [typeTouched, setTypeTouched] = useState(false);
  const [consented, setConsented] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setTypeTouched(true);

    if (!enquiryType || !formElement.reportValidity()) return;

    const form = new FormData(formElement);
    const value = (name: string) => String(form.get(name) ?? "");

    setStatus("sending");
    try {
      setStatus(
        await submitEnquiry({
          subject: "Website – General Enquiry",
          replyTo: value("email"),
          botcheck: form.has("botcheck"),
          fields: [
            ["Name", value("name")],
            ["Email", value("email")],
            ["Phone", value("phone")],
            ["Organisation", value("organisation")],
            ["Enquiry type", enquiryType],
            ["Message", value("message")],
          ],
        }),
      );
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "draft") {
    return (
      <div className="contact-form contact-form-done" role="status">
        <span className="contact-form-done-icon"><CheckCircle2 /></span>
        {status === "sent" ? (
          <>
            <strong>Thank you — your enquiry has been sent.</strong>
            <p>It has been delivered to the AJ Foundation team, who will reply to the email address you provided.</p>
          </>
        ) : (
          <>
            <strong>Your email draft is ready.</strong>
            <p>Please send the draft from your email application to complete your enquiry. The website has not submitted it for you.</p>
            <p>If your email application did not open, write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          </>
        )}
        <button type="button" onClick={() => setStatus("idle")}>Return to form</button>
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
              onClick={() => setEnquiryType(type)}
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

      <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

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

      {status === "error" && (
        <p className="contact-intent-error" role="alert">
          Sorry, your enquiry could not be sent. Please try again, or write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
      <p className="form-delivery-note">
        {formsSubmitDirectly
          ? "Your enquiry will be sent securely to the AJ Foundation team."
          : "This form opens a draft in your email application. Review and send it there to complete your enquiry."}
      </p>
      <button type="submit" disabled={status === "sending"}>
        <span>{status === "sending" ? "Sending…" : "Send Enquiry"}</span><i><Send size={16} /></i>
      </button>
    </form>
  );
}
