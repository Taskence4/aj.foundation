import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { UpdateCard } from "@/components/updates/UpdateCard";
import { updates } from "@/data/updates";
import { HashLink } from "@/components/HashLink";

export const metadata: Metadata = {
  title: "Updates & Insights | AJ Foundation",
  description:
    "Field notes and practical perspectives from AJ Foundation on rehabilitation, employability, institutional trust, and readiness for life after release.",
};

export default function UpdatesPage() {
  return (
    <>
      <section className="updates-page-hero">
        <div className="site-shell updates-page-hero-inner">
          <HashLink className="page-back-link" href="/#updates"><ArrowLeft /> Back to home</HashLink>
          <p className="eyebrow eyebrow-light">Updates & insights</p>
          <h1>Ideas for rehabilitation that lasts.</h1>
          <p>
            Field notes on practical skills, work readiness, institutional partnership,
            and the patient work of preparing people for life beyond custody.
          </p>
        </div>
      </section>

      <section className="section updates-archive-section">
        <div className="site-shell">
          <div className="archive-heading">
            <div>
              <p className="archive-kicker">AJ Foundation editorial</p>
              <h2>Latest field notes</h2>
            </div>
            <p>Evidence-minded perspectives for institutions, practitioners, employers, volunteers, and supporters.</p>
          </div>
          <div className="news-grid archive-grid">
            {updates.map((post, index) => <UpdateCard key={post.slug} post={post} priority={index < 3} />)}
          </div>
        </div>
      </section>

      <section className="editorial-cta">
        <div className="site-shell editorial-cta-inner">
          <div><span>Build the next pathway with us</span><h2>Turn shared insight into practical action.</h2></div>
          <HashLink className="action-link action-link-light" href="/#contact"><span>Work with AJ Foundation</span><span className="action-icon"><ArrowUpRight /></span></HashLink>
        </div>
      </section>
    </>
  );
}
