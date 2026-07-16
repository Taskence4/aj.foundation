import { Briefcase, Building2, Sprout, Users } from "lucide-react";

export const impactAreas = [
  {
    icon: Sprout,
    title: "Individual Growth",
    body: "Participants develop confidence, discipline, communication ability, and practical skills.",
  },
  {
    icon: Building2,
    title: "Institutional Support",
    body: "Prison systems receive structured programmes that support rehabilitation and constructive engagement.",
  },
  {
    icon: Briefcase,
    title: "Employability",
    body: "Participants become better prepared for work, livelihood, and responsible reintegration.",
  },
  {
    icon: Users,
    title: "Community Reintegration",
    body: "Post-release readiness helps individuals prepare for family, society, and future responsibility.",
  },
] as const;

// Placeholder figures — replace [X] with verified numbers before launch.
export const impactMetrics = [
  { value: "[X]+", label: "Participants Engaged" },
  { value: "[X]+", label: "Training Hours Delivered" },
  { value: "[X]+", label: "Skill Modules Completed" },
  { value: "[X]+", label: "Volunteers Involved" },
  { value: "[X]+", label: "Institutions Reached" },
] as const;
