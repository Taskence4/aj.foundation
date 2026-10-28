# Final Review — Launch-Readiness Checklist

Source: *AJ Foundation Website Final Review & Launch-Readiness Package* (final refinements, not a redesign).

Legend: `[x]` done · `[ ]` to do · 🔒 blocked on client/owner input

Contact details and the form key live in one place: [`src/lib/site.ts`](../src/lib/site.ts).

## 1. Must fix before final approval

- [x] **Public email** switched to `info@aj.foundation` everywhere (Footer, Contact, Privacy, Accessibility, both forms).
      Note: the old `info@ajfoundation.org` belongs to an unrelated domain with its own mail server. Enquiries were going to a third party.
- [ ] 🔒 `info@aj.foundation` must be created in the client's Google Workspace and tested (the domain's MX already points to Google).
- [x] **Footer disclaimer**: centred, wraps, has responsive gutters, verified unclipped at 320–1440px.
- [x] **Forms**: Web3Forms integration built for both forms: direct submission, success state, error state, honeypot spam check.
      Until `WEB3FORMS_ACCESS_KEY` is set, they fall back to an email draft and are labelled that way.
- [ ] 🔒 Web3Forms access key, created with the destination inbox.
- [x] **Form validation**: required fields, email format and consent are now enforced. Previously `noValidate` let empty forms through.
- [x] **Legal pages**: the Privacy Notice has a "How our enquiry forms work" section that switches automatically between the
      Web3Forms and email-draft wording to match the live behaviour. Terms and Accessibility are linked and consistent.
- [ ] 🔒 **Final contact details**: confirm the phone number `+91 80500 89834`.

## 2. Simplify the visitor journey

- [x] Primary nav: About | Our Work | How We Work | Partner With Us | Contact (verified in browser).
- [x] Logo links to Home.
- [x] Our Work dropdown: Access to Justice, Rehabilitation & Capability Development, Reintegration & Second Chances, Initial Programme.
- [x] Insights & Updates is in the footer only.

## 3. Remove unnecessary repetition

- [x] "Back to home" removed (verified on all 17 pages).
- [x] Hierarchy back-links kept.
- [x] No duplicate navigation strip above the footer.
- [x] Initial Programme: a single route back to Rehabilitation.

## 4. Image treatment and credibility

- [x] Home hero: Founder photo no longer labelled representational.
- [x] Every other people photo is labelled "Representational image" (About collaboration, the 3 Practice Note images).
- [ ] 🔒 Optional, recommended by the review: replace those 4 people photos with environment or abstract visuals.
      Highest priority is `news-institutional-trust.webp`, which looks like real institutional partners.
- [ ] 🔒 Confirm the Founder photo is the approved choice.

## 5. Form and functional QA

Verified with headless Chrome at 375px and 1440px:
- [x] Required fields and invalid email block submission
- [x] Consent is required and can be reached with Tab and toggled with Space
- [x] Success state shown (currently the email-draft mode)
- [x] Honeypot field present
- [x] Mobile and desktop
- [ ] 🔒 After the key is added: real submission reaches the inbox (both forms), plus the error state

## 6. Final technical QA

- [x] Header, dropdown, CTA, breadcrumb and footer links: 32 unique links, none broken
- [x] 17 pages × 5 widths (320/375/768/1024/1440): no horizontal overflow, disclaimer fully visible
- [x] Visible focus states added for links, buttons, pills, checkboxes and fields
- [x] All images have alt text
- [x] No file upload inputs
- [x] Claims are qualified ("where confirmed", "not promised before confirmation"). No unverified partner or certification claims found
- [ ] Chrome, Edge and a mobile browser on the final hosted URL

## 7. Custom domain (aj.foundation + www)

- [ ] 🔒 Openprovider DNS: add GitHub Pages A/AAAA records for `@` and a CNAME for `www`. Keep the existing MX record.
- [ ] 🔒 GitHub repo → Settings → Pages → Custom domain `aj.foundation`, then Enforce HTTPS.
- [ ] Code: remove the `/aj.foundation` base path in `next.config.ts`. Deploy this at the same time as the DNS switch, not before.

## 8. Final approved changes (26 Oct 2026)

- [x] §1 Pre-registration wording ("being established / being developed") replaced site-wide, including metadata. Programme wording stays future-facing.
- [x] §2 Home: new hero copy, new "Why this work matters" sentence, Founder photo unlabelled. The home programme teaser was updated to match §8.
- [x] §3 About: new hero and "Who we are" copy, Registration details block, Governance (2 trustees).
- [x] §8 Initial Programme: status "Implementation under preparation", Bengaluru Central Prison location, legal-aid/release-support paragraph,
      trades "Electrical, including Home Appliance Repair" + "Plumbing", "Up to 20 participants per trade/batch".
      "KSDC" removed from the certification text, since it named a body before confirmation. The Rehabilitation page line was updated to match.
- [x] §10 / §11 Form subjects: "Website – Partnership Enquiry" and "Website – General Enquiry". Both route to info@aj.foundation.
- [x] §10 No CSR-1 claim anywhere.
- [x] §11 Contact: general email and phone, careers@aj.foundation, Registered Office (exact, no C/o), Operational Office + "Visits by prior appointment".
- [x] §12 Privacy: institutional opening; hosting (GitHub Pages), form processor (Web3Forms, shown when active), mailbox, no database storage,
      access limited to authorised personnel, retention, no cookies, no analytics.
- [ ] 🔒 §12 A specific retention period (e.g. "12 months"), if the client wants one stated. The current wording is general.
- [x] §13 Terms: legal-identity section added. No governing-law or jurisdiction text invented. The banner now says those provisions are pending legal review.
- [x] §14 Accessibility: no WCAG conformance claim. States that a formal test hasn't been completed.
- [x] §15 Footer: "AJ Foundation | Public Charitable Trust | Reg. No. E-0041114(GBR)". No address in the footer.
- [x] §17 No social links displayed (verified on all pages).
- [ ] 🔒 §17 Add LinkedIn (then Instagram) once the official URLs are provided.
- [ ] 🔒 §18 Live-domain form testing. Needs the domain switch and the Web3Forms key for info@aj.foundation.
- [ ] 🔒 §21 Administrative handover to AJ Foundation: Openprovider, GitHub repo, Web3Forms, email admin. Transfer credentials securely.

## 9. Completion response to client

Hosted link, plus confirmation of: (1) public email, (2) form method and destination inbox, (3) footer fix,
(4) navigation simplification, (5) image changes, (6) mobile / link / legal QA.
