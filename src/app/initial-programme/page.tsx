import type { Metadata } from "next";
import {
  CalendarCheck,
  CalendarDays,
  Clock3,
  GraduationCap,
  Laptop,
  Layers,
  Lightbulb,
  MessageSquare,
  Route,
  ShieldCheck,
  Target,
  Users,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { NoticeBox } from "@/components/layout/NoticeBox";

const trades = [
  { icon: Zap, name: "Electrical, including Home Appliance Repair" },
  { icon: Wrench, name: "Plumbing" },
] as const;

const model = [
  { icon: Users, qualifier: "Up to", value: "20", label: "participants per trade/batch" },
  { icon: CalendarDays, qualifier: "Approximately", value: "Three months", label: "per cohort" },
  { icon: CalendarCheck, qualifier: "", value: "Four", label: "training days per week" },
  { icon: Clock3, qualifier: "Approximately", value: "Four hours", label: "per training day" },
] as const;

const capabilities = [
  { icon: Laptop, text: "Foundational digital capability." },
  { icon: Wallet, text: "Financial literacy." },
  { icon: MessageSquare, text: "Communication and work readiness." },
  { icon: Lightbulb, text: "Enterprise orientation." },
  { icon: Route, text: "Preparation for further learning, employment or livelihood pathways." },
] as const;

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
  description: "AJ Foundation is supporting a rehabilitation-integrated livelihood-skilling initiative at Bengaluru Central Prison, Parappana Agrahara, Bengaluru.",
};

export default function InitialProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Implementation under preparation"
        title="Livelihood skills connected to life after release"
        description="AJ Foundation is supporting a rehabilitation-integrated livelihood-skilling initiative at Bengaluru Central Prison, Parappana Agrahara, Bengaluru, combining practical vocational learning, work readiness and preparation for livelihood opportunities after release."
        backHref="/our-work/rehabilitation"
        backLabel="Back to Rehabilitation & Capability Development"
      />

      <section className="section section-white">
        <div className="site-shell page-content page-content-mid">
          <p>
            In parallel, AJ Foundation is developing legal-aid and release-support pathways for prisoners who are
            legally eligible for release but remain constrained by verified economic, documentation or related
            barriers, working through appropriate legal-services and institutional channels.
          </p>

          <div className="synthesis-block after-grid">
            <Target />
            <p>
              To enable participants to build relevant practical skills and readiness for continuing training,
              employment or enterprise, while connecting learning inside prison with preparation for life after
              release.
            </p>
          </div>

          <div className="page-eyebrow-heading after-grid"><Layers /><h2>Initial trade focus</h2></div>
          <p>The current programme design includes:</p>
          <div className="trade-grid">
            {trades.map((trade) => {
              const Icon = trade.icon;
              return (
                <article className="trade-card" key={trade.name}>
                  <Icon />
                  <h3>{trade.name}</h3>
                </article>
              );
            })}
          </div>
          <p>
            These trades form the initial focus while implementation and infrastructure preparation are underway.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-shell page-content page-content-mid">
          <div className="page-eyebrow-heading"><CalendarDays /><h2>Proposed programme model</h2></div>
          <div className="ip-stats">
            {model.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="ip-stat" key={stat.label}>
                  <Icon />
                  <span className="ip-stat-qual">{stat.qualifier}</span>
                  <strong>{stat.value}</strong>
                  <span className="ip-stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>

          <div className="page-eyebrow-heading after-grid"><Lightbulb /><h2>The programme is also intended to include</h2></div>
          <div className="ip-capabilities">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div className="ip-capability" key={capability.text}>
                  <Icon />
                  <span>{capability.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="site-shell page-content page-content-mid">
          <div className="page-eyebrow-heading"><GraduationCap /><h2>Learning and certification</h2></div>
          <p>
            Assessment and certification pathways will be aligned, where applicable, with relevant NSQF
            requirements and delivered through competent or authorised institutions once arrangements are
            confirmed.
          </p>
          <p>
            No certification should be presented as guaranteed until the relevant partner and process are formally
            confirmed.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="site-shell page-content page-content-mid">
          <div className="page-eyebrow-heading"><Route /><h2>Participant journey</h2></div>
          <ol className="journey">
            {journey.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-white">
        <div className="site-shell page-content page-content-mid">
          <div className="page-eyebrow-heading"><ShieldCheck /><h2>Implementation status</h2></div>
          <NoticeBox label="Status: Implementation under preparation">
            <p>
              Implementation and infrastructure preparation are underway. Training will begin with the first cohort,
              and certification arrangements will be confirmed before they are announced.
            </p>
          </NoticeBox>

          <div className="question-box">
            <Target />
            <h3>Connection to the wider AJ Foundation model</h3>
            <p>
              This programme sits within Rehabilitation &amp; Capability Development and is intended to connect,
              where appropriate, with Access to Justice and Reintegration &amp; Second Chances.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
