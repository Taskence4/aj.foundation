# Website V3 implementation

Implemented from `AJ_Foundation_Website_V3_Final_Content_Developer_Handoff.pdf` and
`AJ_Foundation_V2_to_V3_Implementation_Sheet.pdf`.

V3 is a **content and navigation** revision, not a visual one. Per the implementation
sheet, About, Our Work, the three pathway pages, How We Work and Partner With Us are
marked KEEP — "retain the V2 structure, replace copy only where the V3 master provides
updated text, do not redesign these pages." The existing V2 templates, components,
brand colours, fonts and static-export configuration are therefore unchanged; only copy,
CTA labels, navigation and the Home section list were rewritten.

Home was shortened from eight sections to the six the handoff specifies:
Hero → Why AJ Foundation → Three Connected Pathways → Initial Programme →
How We Work → Partner / Contact.

## Decisions taken where the handoff left a choice

- **Form delivery.** Both enquiry forms use the existing `mailto:` route; the site is a
  static export with no submission backend. The handoff's confirmation ("Your enquiry
  has been received") would be untrue, so the confirmation states that a draft has been
  opened and must be sent from the visitor's own email application. Switch to the
  handoff wording only once a real submission service confirms receipt.
- **Contact details.** Existing `info@ajfoundation.org` and `+91 80500 89834` are
  retained where the handoff supplies placeholders. Confirm these are the official,
  monitored channels before launch.
- **"Where we work" / Karnataka.** Removed from About. It is not part of the V3 About
  content and a geographic commitment needs a supporting record. Reinstate if approved.
- **NALSA helpline 15100.** Removed from Access to Justice and Contact in favour of the
  handoff's wording ("contact the appropriate Legal Services Authority or other
  authorised legal-aid mechanism"). The helpline is a real public service; reinstate if
  it is considered useful to visitors.
- **Article dates.** The three Practice Notes carried an invented date (17 July 2026).
  The field has been removed rather than published. Reading time and the AJ Foundation
  byline remain.
- **Insights content categories.** The six-category list (Perspective, Practice Note,
  Programme Development, Founder's Note, Resource, Field Note) is treated as internal
  editorial taxonomy and is not published as a visible legend. All three current
  articles are Practice Notes; Field Note stays reserved for documented field activity.
- **Imagery.** The Home programme/field gallery, the five-priority programme cards and
  the trust photo grid are removed, per "do not present representational images as AJ
  Foundation programme highlights." The hero background, the About contextual image and
  the three article images are retained and remain explicitly labelled representational.
  The hero portrait is retained at the client's instruction. Confirm asset rights before
  launch; no licence records were supplied with the handoff.
- **Governing law / liability.** Left unpublished. The V2 placeholder ("will be added
  here following qualified legal review") is exactly what the handoff bans.

## Also fixed

`HashLink` appended `#undefined` to every plain path, so most internal CTAs rendered
hrefs such as `/our-work#undefined`. It now passes plain paths through unchanged.

## Outstanding before public launch

- Add effective dates to the Privacy Notice and Terms, and a "last reviewed" date to the
  Accessibility Statement — at launch, not as placeholders.
- Insert approved governing-law / limitation-of-liability wording when legal review
  completes.
- Confirm the retention period for general and partnership enquiries.
- Confirm the deployed host and email provider, and the responsible privacy contact.
- Registration, office, founder and governance details remain unpublished until the
  relevant institutional processes complete.
- The application sets no cookies and contains no analytics, tracking, upload control or
  submission storage; the Privacy Notice says so. Re-verify if that changes.
- Run the planned formal accessibility review. The site ships with a skip link,
  `:focus-visible` styles, reduced-motion support, alt text on every image and an
  ARIA-wired Our Work disclosure, but has not been independently audited.
