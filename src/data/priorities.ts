import { Briefcase, Compass, HeartHandshake, ShieldCheck, Users } from "lucide-react";

export const priorities = [
  {
    slug: "rehabilitation",
    icon: HeartHandshake,
    title: "Rehabilitation",
    body: "We support individuals in rebuilding self-belief, responsibility, discipline, and emotional strength through structured learning and guided participation.",
  },
  {
    slug: "constructive-engagement",
    icon: Users,
    title: "Constructive Engagement",
    body: "We design meaningful activities that reduce idle time, encourage positive behaviour, and help participants use their time with purpose.",
  },
  {
    slug: "employability",
    icon: Briefcase,
    title: "Employability",
    body: "We focus on practical skills, communication, work readiness, vocational exposure, and livelihood preparation to improve future opportunities.",
  },
  {
    slug: "post-release-readiness",
    icon: Compass,
    title: "Post-Release Readiness",
    body: "We help individuals prepare for life after release through confidence-building, documentation awareness, reintegration guidance, and practical planning.",
  },
  {
    slug: "trust-building",
    icon: ShieldCheck,
    title: "Trust-Building With Prison Systems",
    body: "We work respectfully with prison authorities and institutional stakeholders to create safe, transparent, and reliable rehabilitation programmes.",
  },
] as const;
