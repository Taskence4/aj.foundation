"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".section-intro",
  ".page-eyebrow-heading",
  ".about-section-lead",
  ".portrait-card",
  ".trust-card",
  ".collaborate-grid > article",
  ".connect-flow > *",
  ".trade-card",
  ".ip-stat",
  ".ip-capability",
  ".journey > li",
  ".synthesis-block",
  ".question-box",
  ".article-takeaways",
  ".institution-details > div",
  ".contact-form",
  ".grid-cta",
  ".join-inner > *",
  ".news-card",
  ".archive-heading",
  ".article-cover",
  ".article-aside",
  ".article-lead",
  ".article-section",
  ".article-content blockquote",
  ".article-closing",
  ".related-heading",
  ".editorial-cta-inner",
].join(",");

// Counts a purely numeric stat (e.g. "20") up from zero the first time it is revealed.
function countUp(element: HTMLElement) {
  const target = Number(element.dataset.countTo);
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / 900, 1);
    element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

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
      elements.forEach((element) => {
        // Stagger siblings within the same grid or list so cards cascade in rather than appear at once.
        const siblings = Array.from(element.parentElement?.children ?? []).filter((child) => elements.includes(child as HTMLElement));
        element.classList.add("reveal-item");
        element.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(element), 5) * 90}ms`);
      });

      document.querySelectorAll<HTMLElement>(".ip-stat strong").forEach((stat) => {
        if (/^\d+$/.test(stat.textContent ?? "")) stat.dataset.countTo = stat.textContent ?? "";
      });

      const revealObserver = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll<HTMLElement>("[data-count-to]").forEach(countUp);
            revealObserver.unobserve(entry.target);
          }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -7%" },
      );

      observer = revealObserver;
      elements.forEach((element) => revealObserver.observe(element));
    }, 40);

    const leaveTimer = window.setTimeout(() => setLeaving(true), 680);
    const hideTimer = window.setTimeout(() => setLoading(false), 1140);

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
