import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, Scale } from "lucide-react";
import { withBasePath } from "@/lib/utils";

const pathways = [
  {
    slug: "access-to-justice",
    icon: Scale,
    title: "Access to Justice",
    body: "Helping people understand available legal-aid pathways, organise necessary information and documents, and reach competent institutions authorised to advise or represent them.",
  },
  {
    slug: "rehabilitation",
    icon: HeartHandshake,
    title: "Rehabilitation & Capability Development",
    body: "Developing practical livelihood, digital, financial and work-readiness capabilities that can strengthen pathways to learning, employment or enterprise.",
  },
  {
    slug: "reintegration",
    icon: Compass,
    title: "Reintegration & Second Chances",
    body: "Supporting preparation for release and connections to documents, entitlements, livelihoods, family, community and appropriate services.",
  },
] as const;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

function ActionLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link className={`action-link ${light ? "action-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <span className="action-icon"><ArrowUpRight size={18} /></span>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <Image className="hero-bg" src={withBasePath("/images/aj-foundation/hero-dignity-courtyard.webp")} alt="" fill preload sizes="100vw" />
        <div className="hero-shade" />
        <Image className="hero-candidate" src={withBasePath("/images/aj-foundation/founder.webp")} alt="AJ Foundation founder speaking at a podium" width={1126} height={1397} priority />
        <span className="ai-tag">Representational image</span>
        <div className="site-shell hero-content">
          <Eyebrow light>AJ Foundation</Eyebrow>
          <h1>Dignity. Access.<br />A pathway forward.</h1>
          <p className="hero-copy">
            AJ Foundation is being established to support people affected by incarceration through connected
            pathways in access to justice, rehabilitation and capability development, and reintegration.
          </p>
          <p className="hero-copy">
            We seek to work with public institutions, professionals and community partners so that legal barriers,
            loss of livelihood and social exclusion are not addressed in isolation.
          </p>
          <div className="hero-actions">
            <ActionLink href="/our-work" light>Explore Our Work</ActionLink>
            <ActionLink href="/partner-with-us">Partner With Us</ActionLink>
          </div>
        </div>
      </section>

      <section id="why" className="section section-white">
        <div className="site-shell page-content">
          <div className="section-intro">
            <Eyebrow>Why AJ Foundation</Eyebrow>
            <h2>Why this work matters</h2>
          </div>
          <p>Incarceration can create or deepen several barriers at the same time.</p>
          <p>
            A person may need understandable legal information, identity documents, opportunities to learn and
            earn, and support to reconnect with family and community. When these needs are addressed
            separately&mdash;or too late&mdash;the path forward becomes harder.
          </p>
          <p>
            AJ Foundation is being developed to help connect these dimensions through responsible institutional
            partnerships and practical pathways before and after release.
          </p>
          <ActionLink href="/about" light>About AJ Foundation</ActionLink>
        </div>
      </section>

      <section id="pathways" className="section section-warm">
        <div className="site-shell">
          <div className="section-intro">
            <Eyebrow>Our Work</Eyebrow>
            <h2>Three connected pathways. One purpose.</h2>
            <p>
              Legal access, capability development and reintegration are deeply connected. AJ Foundation seeks to
              bring these areas together around the circumstances, priorities and dignity of the person.
            </p>
          </div>
          <div className="domain-grid">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <article className="trust-card light-card" key={pathway.slug}>
                  <Icon />
                  <div>
                    <h3>{pathway.title}</h3>
                    <p>{pathway.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="page-content after-grid">
            <ActionLink href="/our-work" light>Explore Our Work</ActionLink>
          </div>
        </div>
      </section>

      <section id="initial-programme" className="section section-white">
        <div className="site-shell page-content">
          <div className="section-intro">
            <Eyebrow>Programme under development</Eyebrow>
            <h2>Livelihood skills connected to life after release</h2>
          </div>
          <p>
            AJ Foundation is developing an initial livelihood-skilling programme combining practical vocational
            learning with foundational digital and financial capabilities, work readiness and preparation for
            future livelihood opportunities.
          </p>
          <p>
            The current programme design includes Electrical and Plumbing as initial trades and will proceed
            subject to institutional approvals, site readiness and confirmation of training and certification
            arrangements.
          </p>
          <ActionLink href="/initial-programme" light>View Initial Programme</ActionLink>
        </div>
      </section>

      <section id="how-we-work" className="section section-warm">
        <div className="site-shell page-content">
          <div className="section-intro">
            <Eyebrow>How We Work</Eyebrow>
            <h2>Principles before programmes</h2>
          </div>
          <p>How support is offered matters as much as what is offered.</p>
          <p>
            AJ Foundation&rsquo;s work is intended to be guided by dignity and agency, informed participation,
            safeguarding, equity, responsible institutional partnership, evidence and accountability.
          </p>
          <ActionLink href="/how-we-work" light>How We Work</ActionLink>
        </div>
      </section>

      <section id="contact" className="join-section">
        <div className="site-shell join-inner">
          <Eyebrow light>Partner &amp; contact</Eyebrow>
          <h2>Building pathways requires partnership</h2>
          <p>Justice, rehabilitation and reintegration require coordinated expertise.</p>
          <p>
            We welcome conversations with public institutions, legal-services professionals, training and
            education partners, employers, civil-society organisations and philanthropic or CSR partners
            interested in responsible collaboration.
          </p>
          <div className="hero-actions">
            <ActionLink href="/partner-with-us" light>Partner With Us</ActionLink>
            <ActionLink href="/contact">Contact Us</ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
