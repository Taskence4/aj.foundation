import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, HeartHandshake, Link2, Quote, Scale, Sprout } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ourWork } from "@/data/ourWork";

const connections = [
  { icon: Scale, body: "A livelihood certificate cannot resolve an unresolved legal barrier." },
  { icon: HeartHandshake, body: "Legal assistance alone may not create work, housing or social support." },
  { icon: Compass, body: "A job opportunity may be difficult to sustain if identity documents, family support or practical preparation are missing." },
] as const;

export const metadata: Metadata = {
  title: "Our Work | AJ Foundation",
  description: "Explore AJ Foundation's proposed work across access to justice, rehabilitation and capability development, and reintegration.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Three connected pathways. One purpose."
        description="Legal access, capability development and reintegration are deeply connected. AJ Foundation seeks to bring them together so that support can begin before release and continue through the transition beyond prison."
      />

      <section className="section section-white">
        <div className="site-shell">
          <div className="domain-grid">
            {ourWork.map((domain) => {
              const Icon = domain.icon;
              return (
                <article className="trust-card light-card" key={domain.slug}>
                  <Icon />
                  <div>
                    <h3>{domain.title}</h3>
                    <p className="about-section-lead">{domain.subheading}</p>
                    <p>{domain.body}</p>
                  </div>
                  <Link className="action-link" href={`/our-work/${domain.slug}`}>
                    <span>{domain.cta}</span>
                    <span className="action-icon"><ArrowUpRight /></span>
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="page-content after-grid">
            <div className="page-eyebrow-heading"><Link2 /><h2>How the pathways connect</h2></div>
            <p className="about-section-lead">Taken alone, each pathway can stall. Taken together, they hold.</p>
          </div>

          <div className="connect-flow">
            {connections.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="connect-step-wrap" key={step.body}>
                  <div className="connect-step">
                    <Icon />
                    <p>{step.body}</p>
                  </div>
                  {index < connections.length - 1 && <ArrowRight className="connect-arrow" />}
                </div>
              );
            })}
          </div>

          <div className="synthesis-block">
            <Quote />
            <p>
              AJ Foundation therefore seeks to begin with the person&rsquo;s circumstances, consent and
              priorities, and connect appropriate institutions and opportunities around them.
            </p>
          </div>

          <div className="page-content after-grid">
            <div className="page-eyebrow-heading"><Sprout /><h2>From programme design to implementation</h2></div>
            <p>
              AJ Foundation is developing its first livelihood-skilling initiative as part of the Rehabilitation
              &amp; Capability Development pathway.
            </p>
            <p>
              The proposed programme currently focuses on Electrical and Plumbing skills alongside digital and
              financial capability, work readiness and preparation for future livelihood opportunities.
            </p>
            <Link className="action-link page-cta" href="/initial-programme">
              <span>View Initial Programme</span>
              <span className="action-icon"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
