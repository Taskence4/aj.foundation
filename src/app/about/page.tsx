import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Compass,
  DoorOpen,
  Eye,
  HeartHandshake,
  Scale,
  Target,
  Users,
  Wallet,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { withBasePath } from "@/lib/utils";

const audiences = [
  {
    icon: Users,
    title: "People in prison",
    body: "People in prison who face legal, livelihood or reintegration barriers.",
  },
  {
    icon: DoorOpen,
    title: "People preparing for release",
    body: "People preparing for release or rebuilding life after release.",
  },
  {
    icon: Wallet,
    title: "People with limited means",
    body: "People with limited financial means, documentation, family support or access to competent services.",
  },
  {
    icon: HeartHandshake,
    title: "Families & communities",
    body: "Families and communities affected by incarceration, where engagement is appropriate and consent-based.",
  },
] as const;

export const metadata: Metadata = {
  title: "About AJ Foundation | Justice, Rehabilitation and Reintegration",
  description: "Learn why AJ Foundation is being developed and how it seeks to connect access to justice, rehabilitation and reintegration.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AJ Foundation"
        title="Building pathways beyond incarceration"
        description="AJ Foundation is being established to support people affected by incarceration through connected work in access to justice, rehabilitation and capability development, and reintegration."
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="about-intro">
            <div>
              <div className="page-eyebrow-heading"><Building2 /><h2>Who we are</h2></div>
              <p>
                AJ Foundation is being developed as a focused platform connecting legal-support navigation,
                learning and livelihood pathways, pre-release preparation and post-release connection.
              </p>
              <p>
                Our starting point is simple: people should not have to navigate legal, livelihood and social
                barriers as isolated problems.
              </p>
              <p>
                Sustainable reintegration requires these barriers to be understood together and addressed through
                competent partnerships.
              </p>
            </div>
            <figure className="portrait-card">
              <Image src={withBasePath("/images/aj-foundation/about-collaboration.webp")} alt="Programme stakeholders planning together" fill sizes="(max-width: 768px) 100vw, 30vw" />
              <span className="ai-tag">Representational image</span>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-shell page-content">
          <div className="page-eyebrow-heading"><Eye /><h2>Our vision &amp; mission</h2></div>
          <p className="about-section-lead">What we&rsquo;re working toward, and how we intend to get there.</p>
          <div className="collaborate-grid">
            <article>
              <Eye />
              <h3>Our vision</h3>
              <p>
                A society in which people affected by incarceration can access justice, rebuild capabilities and
                return to family and community with dignity, opportunity and support.
              </p>
            </article>
            <article>
              <Target />
              <h3>Our mission</h3>
              <p>
                To facilitate connected pathways to legal support, learning, livelihoods and reintegration through
                ethical practice, institutional collaboration and evidence-informed programmes.
              </p>
            </article>
          </div>

          <div className="page-eyebrow-heading after-grid"><Users /><h2>Who we seek to serve</h2></div>
          <div className="collaborate-grid">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article key={audience.title}>
                  <Icon />
                  <h3>{audience.title}</h3>
                  <p>{audience.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="page-eyebrow-heading"><Scale /><h2>Why AJ Foundation</h2></div>
          <p>
            A person&rsquo;s legal situation, livelihood prospects and ability to reintegrate are often closely
            connected.
          </p>
          <p>
            Legal support without livelihood options may leave a person economically vulnerable. Skills training
            alone may have limited value if documents, family support or access to services are missing.
            Reintegration is therefore stronger when these challenges are addressed together.
          </p>
          <p>
            AJ Foundation seeks to contribute by connecting competent institutions, professionals and
            opportunities around the needs and priorities of the person.
          </p>

          <div className="page-eyebrow-heading after-grid"><Building2 /><h2>Registration</h2></div>
          <p>
            AJ Foundation is currently being established. Formal registration, governance and registered-office
            details will be published following completion and approval of the relevant institutional processes.
          </p>

          <div className="question-box about-closing">
            <Compass />
            <h3>Want to see how this comes together?</h3>
            <p>Explore the connected pathways AJ Foundation is developing across justice, rehabilitation and reintegration.</p>
            <Link className="action-link" href="/our-work">
              <span>Explore Our Work</span>
              <span className="action-icon"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
