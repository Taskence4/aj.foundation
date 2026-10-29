# Final Review — Launch-Readiness Checklist

Source: *AJ Foundation Website Final Review & Launch-Readiness Package* (final refinements, not a redesign),
followed by *Final Approved Website Changes for Go-Live (26 Oct 2026)*.

Legend: `[x]` done · `[ ]` to do · 🔒 blocked on client/owner input

Contact details and the form key live in one place: [`src/lib/site.ts`](../src/lib/site.ts).

**Status (29 Oct 2026):** Live at https://aj.foundation. Both forms are tested and delivering to info@aj.foundation.
Remaining: administrative handover, LinkedIn URL, client acceptance check.

## 1. Must fix before final approval

- [x] **Public email** switched to `info@aj.foundation` everywhere (Footer, Contact, Privacy, Accessibility, both forms).
      Note: the old `info@ajfoundation.org` belongs to an unrelated domain with its own mail server. Enquiries were going to a third party.
- [x] `info@aj.foundation` created in the client's Google Workspace and receiving mail.
- [x] **Footer disclaimer**: centred, wraps, has responsive gutters, verified unclipped at 320–1440px.
- [x] **Forms**: Web3Forms integration on both forms: direct submission, success state, error state, honeypot spam check.
- [x] Web3Forms access key created under info@aj.foundation and set in `WEB3FORMS_ACCESS_KEY`. Forms now submit directly.
- [x] **Form validation**: required fields, email format and consent are now enforced. Previously `noValidate` let empty forms through.
- [x] **Legal pages**: the Privacy Notice's "How our enquiry forms work" section now shows the Web3Forms wording, which matches
      the live behaviour. Terms and Accessibility are linked and consistent.
- [x] **Final contact details**: phone `+91 80500 89834` confirmed as the official number (26 Oct doc §11).

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

- [x] Home hero: Founder photo no longer labelled representational. Confirmed as the actual Founder photograph (26 Oct doc §2, §16).
- [x] Every other people photo is labelled "Representational image" (About collaboration, the 3 Practice Note images).
- [ ] Optional: replace representational photos with genuine programme photos as they become available, with consent (§16).

## 5. Form and functional QA

Verified on the live domain (https://aj.foundation), both forms, desktop and mobile:
- [x] Required fields and invalid email block submission
- [x] Consent is required and can be reached with Tab and toggled with Space
- [x] Honeypot spam field hidden from visitors and assistive tech, and sent empty
- [x] Correct subject ("Website – General Enquiry" / "Website – Partnership Enquiry") and visitor email as reply-to
- [x] Real submissions from both forms arrive in info@aj.foundation, and the "Thank you" confirmation is shown
- [x] Error state shown when a submission is rejected
- [x] No database storage. Submissions are forwarded by Web3Forms to the mailbox only

## 6. Final technical QA

- [x] Header, dropdown, CTA, breadcrumb and footer links: 36 internal + 1 external, none broken (live)
- [x] 17 pages × 5 widths (320/375/768/1024/1440): no horizontal overflow, disclaimer fully visible (live)
- [x] Visible focus states added for links, buttons, pills, checkboxes and fields
- [x] All images have alt text
- [x] No file upload inputs
- [x] Claims are qualified ("where confirmed", "not promised before confirmation"). No unverified partner or certification claims found
- [x] Motion layer respects `prefers-reduced-motion`. Hover effects only on hover-capable devices
- [ ] Spot-check in Edge and on a real phone (Chrome is verified)

## 7. Custom domain (aj.foundation + www)

- [x] Openprovider DNS: GitHub Pages A/AAAA records for `@` and a CNAME for `www`. The existing MX and Google verification TXT are kept.
- [x] GitHub Pages custom domain `aj.foundation`, HTTPS enforced (Let's Encrypt). `www` redirects to the apex.
- [x] Base path removed from `next.config.ts`. `trailingSlash: true` so both `/about` and `/about/` resolve.

## 8. Final approved changes (26 Oct 2026)

- [x] §1 Pre-registration wording ("being established / being developed") replaced site-wide, including metadata. Programme wording stays future-facing.
- [x] §2 Home: new hero copy, new "Why this work matters" sentence, Founder photo unlabelled. The home programme teaser was updated to match §8.
- [x] §3 About: new hero and "Who we are" copy, Registration details block, Governance (2 trustees).
- [x] §4–7, §9, §20 Retained as approved. No structural changes, and no new pages or nav items.
- [x] §5 No public legal-case intake form. Legal-services disclaimer retained.
- [x] §8 Initial Programme: status "Implementation under preparation", Bengaluru Central Prison location, legal-aid/release-support paragraph,
      trades "Electrical, including Home Appliance Repair" + "Plumbing", "Up to 20 participants per trade/batch".
      "KSDC" removed from the certification text, as §8 asks ("do not name or imply a certification partner"). The Rehabilitation page line was updated to match.
- [x] §10 / §11 Form subjects: "Website – Partnership Enquiry" and "Website – General Enquiry". Both route to info@aj.foundation.
- [x] §10 No CSR-1 claim anywhere.
- [x] §11 Contact: general email and phone, careers@aj.foundation, Registered Office (exact, no C/o), Operational Office + "Visits by prior appointment".
- [x] §11 `careers@aj.foundation` created (29 Oct 2026). The live Contact page links to it.
- [x] §12 Privacy: institutional opening; hosting (GitHub Pages), form processor (Web3Forms), mailbox, no database storage,
      access limited to authorised personnel, retention, no cookies, no analytics.
- [ ] Optional §12: a specific retention period (e.g. "12 months"), if the client wants one. The current wording describes the actual arrangement.
- [x] §13 Terms: legal-identity section added. No governing-law or jurisdiction text invented. The banner says those provisions are pending legal review.
- [ ] 🔒 §13 Add governing-law or jurisdiction wording only when the client supplies approved text.
- [x] §14 Accessibility: no WCAG conformance claim. States that a formal test hasn't been completed.
- [x] §15 Footer: "AJ Foundation | Public Charitable Trust | Reg. No. E-0041114(GBR)". No address in the footer.
- [x] §17 No social links displayed (verified on all pages).
- [ ] 🔒 §17 Add LinkedIn (then Instagram) once the official URLs are provided.
- [x] §18 Live-domain form testing complete. Both forms deliver to info@aj.foundation (29 Oct 2026).
- [x] §19 Final technical QA on the live domain (see sections 5–6).
- [ ] 🔒 §21 Administrative handover. The client must name an admin. Then:
      - Openprovider: add them as an admin, or move the domain to their account
      - GitHub: make them a repo admin, or transfer the repo to an AJ Foundation account
      - Web3Forms: already under info@aj.foundation
      - Google Workspace: already client-owned

      Transfer credentials securely, never by email or chat.
- [ ] 🔒 Client functional acceptance check (forms, contact links, legal pages, mobile view). Delete the QA test emails from info@ afterwards.

## 9. Completion response to client

- [x] Completion update sent with the live link and the confirmations (1)–(6).
- [x] Short point-form list of remaining client actions sent.
