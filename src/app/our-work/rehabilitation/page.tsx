import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Rehabilitation & Capability Development | AJ Foundation",
  description: "AJ Foundation seeks to build livelihood, digital, financial and work-readiness capabilities for people affected by incarceration.",
};

export default function RehabilitationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work — Rehabilitation & Capability Development"
        title="Capabilities that open real choices"
        description="Rehabilitation should do more than occupy time. It should help people build practical skills, confidence and capabilities that can strengthen pathways to learning, work or enterprise."
        backHref="/our-work"
        backLabel="Back to Our Work"
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Our approach</h2>
          <p>
            AJ Foundation seeks to develop rehabilitation programmes that connect technical learning with the
            wider capabilities people may need to use those skills after release.
          </p>
          <p>
            Programme design will be informed by participant interests, labour-market relevance, institutional
            requirements, realistic certification pathways and reintegration needs.
          </p>

          <h2>Programme components</h2>
          <ul className="page-list">
            <li>Market-relevant vocational and livelihood skills.</li>
            <li>Foundational digital capability and safe technology use.</li>
            <li>Financial literacy and budgeting.</li>
            <li>Communication and work readiness.</li>
            <li>Problem-solving and enterprise orientation.</li>
            <li>Assessment and certification where competent arrangements are confirmed.</li>
            <li>Wellbeing or psychosocial inputs through qualified partners where appropriate.</li>
            <li>Connections to continuing training, employment, enterprise or support services.</li>
          </ul>

          <h2>What quality should mean</h2>
          <ul className="page-list">
            <li>Participants understand the programme and join through an approved process.</li>
            <li>Training is appropriate to the institutional setting.</li>
            <li>Curricula and trainers are suited to the programme.</li>
            <li>Attendance, learning and feedback are documented responsibly.</li>
            <li>Certification or employment linkages are not promised before confirmation.</li>
            <li>Training is connected, where possible, to preparation for life after release.</li>
          </ul>

          <h2>Initial programme</h2>
          <p>
            AJ Foundation&rsquo;s first programme focus is a rehabilitation-integrated livelihood-skilling
            initiative currently under development.
          </p>

          <Link className="action-link page-cta" href="/initial-programme">
            <span>View Initial Programme</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </Link>
        </div>
      </section>
    </>
  );
}
