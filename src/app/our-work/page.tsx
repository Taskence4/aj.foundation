import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, HeartHandshake, Link2, Quote, Scale } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ourWork } from "@/data/ourWork";

const connections = [
  { icon: Scale, body: "A livelihood certificate cannot resolve an unresolved legal barrier." },
  { icon: HeartHandshake, body: "Legal assistance alone may not create work or housing." },
  { icon: Compass, body: "A job lead may fail if identity documents, family support or practical preparation are missing." },
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
        description="Legal access, capability development and reintegration are deeply connected. Our proposed work brings them together so that support begins before release and continues through the transition beyond prison."
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
                    <p>{domain.body}</p>
                  </div>
                  <Link className="action-link" href={`/our-work/${domain.slug}`} aria-label={`Explore ${domain.title}`}>
                    <span>Learn more</span>
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
              Our approach begins with the person&rsquo;s circumstances, consent and priorities, and builds
              referrals and opportunities around them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
