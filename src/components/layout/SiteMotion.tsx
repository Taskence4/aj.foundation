"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".section-intro",
  ".section-row",
  ".portrait-card",
  ".about-center",
  ".programme-card",
  ".trust-card",
  ".trust-photo",
  ".event-card",
  ".testimonial-stage",
  ".highlight-grid figure",
  ".donation-copy",
  ".donation-card",
  ".faq-intro",
  ".faq-list details",
  ".news-card",
  ".archive-heading",
  ".article-cover",
  ".article-aside",
  ".article-lead",
  ".article-takeaways",
  ".article-section",
  ".article-content blockquote",
  ".article-closing",
  ".related-heading",
  ".editorial-cta-inner",
].join(",");

export function SiteMotion() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => setLoading(false));
      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    const startFrame = window.requestAnimationFrame(() => {
      setLoading(true);
      setLeaving(false);
    });
    let observer: IntersectionObserver | undefined;

    const revealTimer = window.setTimeout(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
      elements.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
      });

      const revealObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -7%" },
      );

      observer = revealObserver;
      elements.forEach((element) => revealObserver.observe(element));
    }, 40);

    const leaveTimer = window.setTimeout(() => setLeaving(true), 360);
    const hideTimer = window.setTimeout(() => setLoading(false), 760);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      window.cancelAnimationFrame(startFrame);
      observer?.disconnect();
    };
  }, [pathname]);

  return loading ? (
    <div className={`site-loader ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="loader-mark"><span>AJ</span></div>
      <div className="loader-line"><i /></div>
      <p>Building skills. Restoring purpose.</p>
    </div>
  ) : null;
}
