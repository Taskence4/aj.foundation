import { Compass, HeartHandshake, Scale } from "lucide-react";

export const ourWork = [
  {
    slug: "access-to-justice",
    icon: Scale,
    title: "Access to Justice",
    body: "We seek to help people understand available legal-aid mechanisms, identify and document legal-support needs, and reach the competent institutions authorised to advise or represent them.",
  },
  {
    slug: "rehabilitation",
    icon: HeartHandshake,
    title: "Rehabilitation & Capability Development",
    body: "We seek to combine market-relevant livelihood learning with foundational digital and financial capabilities, work readiness, constructive engagement and pathways to certification or further learning.",
  },
  {
    slug: "reintegration",
    icon: Compass,
    title: "Reintegration & Second Chances",
    body: "We seek to support pre-release preparation and connections to documents, entitlements, employment, enterprise, family, community and appropriate post-release services.",
  },
] as const;
