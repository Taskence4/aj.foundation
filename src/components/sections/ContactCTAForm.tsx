"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { contactIntents } from "@/data/contact";

export function ContactCTAForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const intent = String(form.get("intent") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `I want to: ${intent}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:info@ajfoundation.org?subject=${encodeURIComponent(
      `AJ Foundation — ${intent || "General enquiry"}`,
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form-done">
        <CheckCircle2 />
        <strong>Your email client should now be open</strong>
        <p>Review the pre-filled message and hit send — our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="cta-name">Name</label>
          <input id="cta-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="cta-email">Email</label>
          <input id="cta-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="cta-intent">I want to</label>
          <select id="cta-intent" name="intent" defaultValue="" required>
            <option value="" disabled>Select an option</option>
            {contactIntents.map((intent) => <option key={intent} value={intent}>{intent}</option>)}
          </select>
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="cta-message">Message</label>
          <textarea id="cta-message" name="message" rows={4} required />
        </div>
      </div>
      <button type="submit">Send message</button>
    </form>
  );
}
