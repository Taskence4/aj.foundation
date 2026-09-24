import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { HashLink } from "@/components/HashLink";

export const metadata: Metadata = {
  title: "Accessibility Statement | AJ Foundation",
  description: "AJ Foundation is committed to making its website usable by people with diverse disabilities, devices and access needs.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Accessibility" title="Accessibility Statement" />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Our commitment</h2>
          <p>
            AJ Foundation is committed to making this website usable by people with diverse disabilities, devices
            and access needs. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA as a
            practical baseline.
          </p>

          <h2>Measures we aim to maintain</h2>
          <ol className="page-list">
            <li>Clear page structure and meaningful headings.</li>
            <li>Keyboard-accessible navigation and visible focus states.</li>
            <li>Readable colour contrast and scalable text.</li>
            <li>Alternative text for informative images.</li>
            <li>Descriptive links, labels and form instructions.</li>
            <li>Responsive layouts across common devices.</li>
            <li>Captions or transcripts for meaningful audio-visual content.</li>
          </ol>

          <h2>Known limitations</h2>
          <p>
            This website has not yet undergone formal accessibility testing. We plan to carry out a structured
            audit and will update this page with the test date, method and any known limitations once it is
            complete.
          </p>

          <h2>Feedback and assistance</h2>
          <p>
            If you experience difficulty using this website or need information in another accessible format,
            please let us know through our <HashLink href="/contact">Contact page</HashLink>. Tell us the page, the
            problem encountered, the device or assistive technology used if you are comfortable doing so, and the
            format you need.
          </p>

          <h2>Response commitment</h2>
          <p>We aim to acknowledge accessibility feedback promptly and to provide an update or reasonable alternative as soon as practicable.</p>
        </div>
      </section>
    </>
  );
}
