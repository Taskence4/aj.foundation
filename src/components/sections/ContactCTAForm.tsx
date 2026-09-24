"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageSquare, Send, User } from "lucide-react";
import { contactIntents } from "@/data/contact";

export function ContactCTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState<string>("");
  const [intentTouched, setIntentTouched] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!intent) {
      setIntentTouched(true);
      return;
    }

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [`Name: ${name}`, `Email: ${email}`, `I want to: ${intent}`, "", message].join("\n");

    window.location.href = `mailto:info@ajfoundation.org?subject=${encodeURIComponent(
      `AJ Foundation — ${intent}`,
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
        <span className="contact-form-kicker">Get in touch</span>
        <h3>Tell us how you&rsquo;d like to help</h3>
      </div>

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="cta-name"><User /> Name</label>
          <input id="cta-name" name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </div>
        <div className="contact-field">
          <label htmlFor="cta-email"><Mail /> Email</label>
          <input id="cta-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="contact-field">
        <label id="cta-intent-label">I want to</label>
        <div className="contact-intent-group" role="radiogroup" aria-labelledby="cta-intent-label">
          {contactIntents.map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={intent === option}
              className={`contact-intent-pill ${intent === option ? "is-active" : ""}`}
              onClick={() => {
                setIntent(option);
                setIntentTouched(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {intentTouched && <p className="contact-intent-error">Please select an option.</p>}
      </div>

      <div className="contact-field">
        <label htmlFor="cta-message"><MessageSquare /> Message</label>
        <textarea id="cta-message" name="message" rows={4} placeholder="Tell us a bit about how you'd like to get involved…" required />
      </div>

      <button type="submit"><span>Send message</span><i><Send size={16} /></i></button>
    </form>
  );
}
