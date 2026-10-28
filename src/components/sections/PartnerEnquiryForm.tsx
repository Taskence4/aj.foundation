"use client";

import { useState, type FormEvent } from "react";
import { Briefcase, Building2, CheckCircle2, Mail, MessageSquare, Send, User } from "lucide-react";
import { collaborateWays } from "@/data/collaborate";
import { CONTACT_EMAIL, formsSubmitDirectly, submitEnquiry, type EnquiryResult } from "@/lib/site";

export function PartnerEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error" | EnquiryResult>("idle");
  const [interest, setInterest] = useState<string>("");
  const [interestTouched, setInterestTouched] = useState(false);
  const [consented, setConsented] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setInterestTouched(true);

    if (!interest || !formElement.reportValidity()) return;

    const form = new FormData(formElement);
    const value = (name: string) => String(form.get(name) ?? "");

    setStatus("sending");
    try {
      setStatus(
        await submitEnquiry({
          subject: "Website – Partnership Enquiry",
          replyTo: value("email"),
          botcheck: form.has("botcheck"),
          fields: [
            ["Name", value("name")],
            ["Organisation", value("organisation")],
            ["Role", value("role")],
            ["Email", value("email")],
            ["Phone", value("phone")],
            ["Area of interest", interest],
            ["Proposed contribution/collaboration", value("contribution")],
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
            <strong>Thank you — your partnership enquiry has been sent.</strong>
            <p>It has been delivered to the AJ Foundation team, who will reply to the email address you provided.</p>
          </>
        ) : (
          <>
            <strong>Your email draft is ready.</strong>
            <p>Please send the draft from your email application to complete your partnership enquiry. The website has not submitted it for you.</p>
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
        <span className="contact-form-kicker">Partnership enquiry</span>
        <h3>Start a partnership conversation</h3>
      </div>

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="partner-name"><User /> Name</label>
          <input id="partner-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="partner-organisation"><Building2 /> Organisation</label>
          <input id="partner-organisation" name="organisation" type="text" autoComplete="organization" placeholder="Your organisation" required />
        </div>
      </div>

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="partner-role"><Briefcase /> Role</label>
          <input id="partner-role" name="role" type="text" placeholder="Your role" required />
        </div>
        <div className="contact-field">
          <label htmlFor="partner-email"><Mail /> Email</label>
          <input id="partner-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="partner-phone">Phone (optional)</label>
        <input id="partner-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
      </div>

      <div className="contact-field">
        <label id="partner-interest-label">Area of interest</label>
        <div className="contact-intent-group" role="radiogroup" aria-labelledby="partner-interest-label">
          {collaborateWays.map((way) => (
            <button
              key={way.title}
              type="button"
              role="radio"
              aria-checked={interest === way.title}
              className={`contact-intent-pill ${interest === way.title ? "is-active" : ""}`}
              onClick={() => setInterest(way.title)}
            >
              {way.title}
            </button>
          ))}
        </div>
        {interestTouched && !interest && <p className="contact-intent-error">Please select an area of interest.</p>}
      </div>

      <div className="contact-field">
        <label htmlFor="partner-contribution">Proposed contribution / collaboration</label>
        <input id="partner-contribution" name="contribution" type="text" placeholder="How could your organisation help?" />
      </div>

      <div className="contact-field">
        <label htmlFor="partner-message"><MessageSquare /> Message</label>
        <textarea id="partner-message" name="message" rows={4} placeholder="Tell us more about the collaboration you have in mind…" required />
      </div>

      <input className="form-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="consent-check">
        <input
          id="partner-consent"
          type="checkbox"
          checked={consented}
          onChange={(event) => setConsented(event.target.checked)}
          required
        />
        <label htmlFor="partner-consent">
          I consent to AJ Foundation using the information provided to respond to this partnership enquiry, in accordance with the Privacy Notice.
        </label>
      </div>
      {interestTouched && !consented && <p className="contact-intent-error">Please provide consent to continue.</p>}

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
        <span>{status === "sending" ? "Sending…" : "Send Partnership Enquiry"}</span><i><Send size={16} /></i>
      </button>
    </form>
  );
}
