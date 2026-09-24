import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";

const journey = [
  { title: "Orientation", body: "Understanding the programme and available options." },
  { title: "Selection", body: "Transparent selection based on approved criteria." },
  { title: "Training", body: "Structured technical and capability-development learning." },
  { title: "Assessment", body: "Practical assessment and certification where confirmed." },
  { title: "Transition planning", body: "Preparation for continuing training, employment, enterprise or other livelihood pathways." },
  { title: "Referral and limited follow-up", body: "Within the approved implementation model and available capacity." },
] as const;

export const metadata: Metadata = {
  title: "Initial Programme | AJ Foundation",
  description: "AJ Foundation is developing a rehabilitation-integrated livelihood-skilling initiative for people in prison.",
};

export default function InitialProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Programme under development"
        title="Livelihood skills connected to life after release"
        description="AJ Foundation is developing an initial livelihood-skilling programme that combines practical vocational learning with digital and financial capability, work readiness and preparation for future livelihood opportunities."
        backHref="/our-work/rehabilitation"
        backLabel="Back to Rehabilitation & Capability Development"
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Proposed objective</h2>
          <p>
            To enable participants to build relevant practical skills and readiness for continuing training,
            employment or enterprise, while connecting learning inside prison with preparation for life after
            release.
          </p>

          <h2>Initial trade focus</h2>
          <p>The current programme design includes:</p>
          <ol className="page-list">
            <li>Electrical</li>
            <li>Plumbing</li>
          </ol>
          <p>
            These trades have been identified as the initial focus, subject to institutional approval, site
            readiness and implementation planning.
          </p>

          <h2>Proposed programme model</h2>
          <ol className="page-list">
            <li>Approximately 20&ndash;30 participants per trade.</li>
            <li>Approximately three months per cohort.</li>
            <li>Four training days per week.</li>
            <li>Approximately four hours per training day.</li>
          </ol>
          <p>The programme is also intended to include:</p>
          <ol className="page-list">
            <li>Foundational digital capability.</li>
            <li>Financial literacy.</li>
            <li>Communication and work readiness.</li>
            <li>Enterprise orientation.</li>
            <li>Preparation for further learning, employment or livelihood pathways.</li>
          </ol>

          <h2>Learning and certification</h2>
          <p>
            Assessment and certification pathways will be aligned, where applicable, with relevant NSQF/KSDC
            requirements and delivered through competent or authorised institutions once arrangements are
            confirmed.
          </p>
          <p>
            No certification should be presented as guaranteed until the relevant partner and process are formally
            confirmed.
          </p>

          <h2>Participant journey</h2>
          <ol className="page-list">
            {journey.map((step) => (
              <li key={step.title}><strong>{step.title}.</strong> {step.body}</li>
            ))}
          </ol>

          <h2>Implementation status</h2>
          <NoticeBox label="Status">
            <p>
              Implementation details remain subject to institutional approvals, site readiness and confirmation of
              training and certification arrangements.
            </p>
          </NoticeBox>

          <h2>Connection to the wider AJ Foundation model</h2>
          <p>
            This programme sits within Rehabilitation &amp; Capability Development and is intended to connect,
            where appropriate, with Access to Justice and Reintegration &amp; Second Chances.
          </p>

          <div className="page-cta-row page-cta">
            <Link className="action-link" href="/our-work/rehabilitation">
              <span>Explore Rehabilitation &amp; Capability Development</span>
              <span className="action-icon"><ArrowUpRight /></span>
            </Link>
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
