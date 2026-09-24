import { Compass, HeartHandshake, Scale } from "lucide-react";

export const ourWork = [
  {
    slug: "access-to-justice",
    icon: Scale,
    title: "Access to Justice",
    subheading: "Understanding rights. Reaching the right institutions.",
    body: "AJ Foundation seeks to help people understand available legal-aid mechanisms, identify and organise legal-support needs, and reach competent institutions authorised to advise or represent them.",
    cta: "Explore Access to Justice",
  },
  {
    slug: "rehabilitation",
    icon: HeartHandshake,
    title: "Rehabilitation & Capability Development",
    subheading: "Capabilities that open real choices",
    body: "AJ Foundation seeks to combine practical livelihood learning with foundational digital and financial capabilities, work readiness, constructive engagement and pathways to certification or further learning.",
    cta: "Explore Rehabilitation & Capability Development",
  },
  {
    slug: "reintegration",
    icon: Compass,
    title: "Reintegration & Second Chances",
    subheading: "Release is a moment. Reintegration is a journey.",
    body: "AJ Foundation seeks to support preparation for release and connections to documents, entitlements, employment, enterprise, family, community and appropriate post-release services.",
    cta: "Explore Reintegration & Second Chances",
  },
] as const;
