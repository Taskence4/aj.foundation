import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { HashLink } from "@/components/HashLink";

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
        description="Rehabilitation is more than occupying time. It should help people build employability / practical skills, confidence and pathways to learning, work or enterprise."
        backHref="/our-work"
        backLabel="Back to Our Work"
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>Our proposed approach</h2>
          <p>
            AJ Foundation seeks to develop rehabilitation programmes that combine technical learning with the
            capabilities people need to use those skills after release. Programme design will be informed by
            participant interests, labour-market relevance, certification pathways, institutional requirements and
            reintegration needs.
          </p>

          <h2>Proposed components</h2>
          <ol className="page-list">
            <li>Market-relevant vocational and livelihood skills.</li>
            <li>Foundational digital capability and safe technology use.</li>
            <li>Financial literacy, budgeting and access to appropriate financial systems.</li>
            <li>Communication, work readiness, problem-solving and enterprise orientation.</li>
            <li>Certification or recognition through competent institutions wherever feasible.</li>
            <li>Wellbeing and psychosocial support delivered by qualified partners where approved.</li>
            <li>Pre-release linkages to continuing training, employment, enterprise or support services.</li>
          </ol>

          <h2>What quality should mean</h2>
          <ol className="page-list">
            <li>Participants understand the programme and join through an approved selection and consent process.</li>
            <li>Training is appropriate to the prison setting and linked to realistic post-release opportunities.</li>
            <li>Trainers are competent, oriented to safeguarding and supported with clear curricula.</li>
            <li>Attendance, learning and participant feedback are recorded responsibly.</li>
            <li>Certificates, tools or linkages are not promised unless the relevant partner has confirmed them.</li>
          </ol>

          <h2>Initial programme</h2>
          <p>
            Our first programme focus is a rehabilitation-integrated livelihood-skilling initiative for people in
            prison. The initiative is currently under development and will proceed subject to institutional
            approval, implementation planning and partner confirmation.
          </p>

          <HashLink className="action-link page-cta" href="/initial-programme">
            <span>View the Initial Programme</span>
            <span className="action-icon"><ArrowUpRight /></span>
          </HashLink>
        </div>
      </section>
    </>
  );
}
