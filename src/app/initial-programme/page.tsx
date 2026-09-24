import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";

export const metadata: Metadata = {
  title: "Initial Programme Focus | AJ Foundation",
  description: "AJ Foundation is developing a rehabilitation-integrated livelihood-skilling initiative for people in prison.",
};

export default function InitialProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Programme under development"
        title="Livelihood skills connected to life after release"
        description="AJ Foundation is developing an initiative that combines practical livelihood learning with digital and financial capability, work readiness and pre-release pathways."
        backHref="/our-work/rehabilitation"
        backLabel="Back to Rehabilitation & Capability Development"
      />

      <section className="section section-white">
        <div className="site-shell page-content">
          <h2>The proposed objective</h2>
          <p>
            To enable participants to build relevant skills and practical readiness for continuing training,
            employment or enterprise, while connecting learning inside prison with preparation for life after
            release.
          </p>

          <h2>Proposed programme components</h2>
          <ol className="page-list">
            <li>Vocational and livelihood-skilling courses selected for relevance, feasibility and participant interest.</li>
            <li>Foundational digital and financial capabilities.</li>
            <li>Communication, work readiness and enterprise orientation.</li>
            <li>Certification pathways through competent institutions (approved by Karnataka Skills Development Corporation - KSDC) where confirmed.</li>
            <li>Participant assessment, feedback and learning documentation.</li>
            <li>Pre-release planning and referral to continuing training, livelihood or support opportunities.</li>
          </ol>

          <h2>Proposed participant journey</h2>
          <ol className="page-list">
            <li>Orientation and informed programme choice.</li>
            <li>Transparent selection based on approved criteria.</li>
            <li>Training and regular learning support.</li>
            <li>Practical assessment and certification where confirmed.</li>
            <li>Individual transition planning before release, where feasible.</li>
            <li>Referral and limited follow-up within the approved implementation model.</li>
          </ol>

          <h2>Proposed programme structure</h2>
          <ol className="page-list">
            <li>Initial trades: Electrical and Plumbing.</li>
            <li>Cohort size: approximately 20&ndash;30 participants per trade.</li>
            <li>Duration: a three-month training cycle.</li>
            <li>Schedule: four training days per week, approximately four hours of training per day.</li>
          </ol>

          <NoticeBox label="Programme status">
            <p>
              This programme is still under development. Site inspection, implementation arrangements, cohort
              sequencing and the launch schedule are still being finalised. No institution has been named and no
              partnership or launch date has been confirmed. Final details will be published here once agreed.
            </p>
          </NoticeBox>
        </div>
      </section>
    </>
  );
}
