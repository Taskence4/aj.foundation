"use client";

import { useState, type FormEvent } from "react";
import { Briefcase, Building2, CheckCircle2, Mail, MessageSquare, Send, User } from "lucide-react";
import { collaborateWays } from "@/data/collaborate";

export function PartnerEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState<string>("");
  const [interestTouched, setInterestTouched] = useState(false);
  const [consented, setConsented] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!interest || !consented) {
      setInterestTouched(true);
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const organisation = String(form.get("organisation") ?? "");
    const role = String(form.get("role") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const contribution = String(form.get("contribution") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Organisation: ${organisation}`,
      `Role: ${role}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Area of interest: ${interest}`,
      contribution ? `Proposed contribution/collaboration: ${contribution}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:info@ajfoundation.org?subject=${encodeURIComponent(
      `AJ Foundation partnership enquiry — ${organisation || name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form-done">
        <span className="contact-form-done-icon"><CheckCircle2 /></span>
        <strong>Your email client should now be open</strong>
        <p>Review the pre-filled message and hit send — our team will get back to you shortly.</p>
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
              onClick={() => {
                setInterest(way.title);
                setInterestTouched(false);
              }}
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

      <button type="submit"><span>Send Partnership Enquiry</span><i><Send size={16} /></i></button>
    </form>
  );
}
