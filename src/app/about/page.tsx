import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Compass,
  DoorOpen,
  Eye,
  FileText,
  HeartHandshake,
  MapPin,
  Target,
  UserCircle,
  Users,
  Wallet,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";
import { HashLink } from "@/components/HashLink";
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
        description="AJ Foundation is being established to support people affected by incarceration through connected work in access to justice, rehabilitation, capability development and reintegration."
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <div className="about-intro">
            <div>
              <div className="page-eyebrow-heading"><Building2 /><h2>Who we are</h2></div>
              <p>
                We are developing a focused platform that brings together legal-support navigation, learning and
                livelihood pathways, pre-release preparation and post-release connection.
              </p>
              <p>
                Our starting point is simple: people should not have to navigate legal, livelihood and social
                barriers as isolated problems. Sustainable reintegration requires these barriers to be understood
                together and addressed through competent partnerships.
              </p>
            </div>
            <figure className="portrait-card">
              <Image src={withBasePath("/images/aj-foundation/about-collaboration.webp")} alt="Programme stakeholders planning together" fill sizes="(max-width: 768px) 100vw, 30vw" />
              <span className="ai-tag">Representational image</span>
            </figure>
          </div>

          <NoticeBox label="Registered details — pending confirmation" icon={FileText}>
            <p>
              AJ Foundation&rsquo;s registered legal name, legal form, registration number and registered office
              address will be published here once confirmed.
            </p>
          </NoticeBox>
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
          <div className="scope-banner trust-card blue-card">
            <MapPin />
            <div>
              <h3>Where we work</h3>
              <p>
                AJ Foundation&rsquo;s initial programme development and operations are focused on Karnataka, with a
                broader aspiration to contribute across India over time through partnerships and scalable
                approaches.
              </p>
            </div>
          </div>

          <div className="page-eyebrow-heading after-grid"><UserCircle /><h2>Founder &amp; governance</h2></div>
          <NoticeBox label="Coming soon">
            <p>
              A note from our Founder, along with details of AJ Foundation&rsquo;s governance and leadership, will
              be published here once finalised.
            </p>
          </NoticeBox>

          <div className="question-box about-closing">
            <Compass />
            <h3>Want to see how this comes together?</h3>
            <p>Explore the connected pathways AJ Foundation is developing across justice, rehabilitation and reintegration.</p>
            <HashLink className="action-link" href="/our-work">
              <span>Explore our work</span>
              <span className="action-icon"><ArrowUpRight /></span>
            </HashLink>
          </div>
        </div>
      </section>
    </>
  );
}
