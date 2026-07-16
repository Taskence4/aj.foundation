"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contactIntents } from "@/data/contact";

const inputClasses =
  "w-full rounded-lg border border-maroon-900/15 bg-cream-50 px-4 py-3 text-sm text-ink placeholder:text-stone-600/60 focus:border-maroon-800 focus:ring-1 focus:ring-maroon-800 focus:outline-none";
const labelClasses = "mb-1.5 block text-sm font-medium text-maroon-900";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-maroon-900/10 bg-cream-50 p-10 text-center">
        <CheckCircle2 className="size-10 text-crimson-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-700">
          Thank you for reaching out. The AJ Foundation team will get back to you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-2xl border border-maroon-900/10 bg-cream-50 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="organisation" className={labelClasses}>
            Organisation
          </label>
          <input id="organisation" name="organisation" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="location" className={labelClasses}>
            Location
          </label>
          <input id="location" name="location" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="intent" className={labelClasses}>
            I want to:
          </label>
          <select id="intent" name="intent" defaultValue="" required className={inputClasses}>
            <option value="" disabled>
              Select an option
            </option>
            {contactIntents.map((intent) => (
              <option key={intent} value={intent}>
                {intent}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-crimson-500 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-crimson-400"
      >
        Send Message
      </button>
    </form>
  );
}
