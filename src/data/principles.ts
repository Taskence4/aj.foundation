import { Building2, ClipboardCheck, Heart, Lock, Scale, ShieldCheck } from "lucide-react";

export const principles = [
  {
    icon: Heart,
    title: "Dignity and agency",
    body: "We recognise participants as people with rights, responsibilities, knowledge and aspirations - not as cases, statistics or passive recipients. Participation should be informed and voluntary within the realities of the institutional setting.",
  },
  {
    icon: Lock,
    title: "Consent, privacy and confidentiality",
    body: "We seek only the information needed for a defined purpose, explain how it will be used, protect it appropriately and obtain specific consent before sharing personal information, photographs or stories.",
  },
  {
    icon: Scale,
    title: "Equity and non-discrimination",
    body: "We aim to recognise how poverty, gender, caste, disability, language, age, family support and other inequalities shape access to justice and opportunity. Programme decisions should not reproduce exclusion or stigma.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding and do-no-harm practice",
    body: "We assess potential risks before collecting information, contacting families, publishing identities, making referrals or offering support. Concerns should be handled through approved safeguarding and grievance processes.",
  },
  {
    icon: Building2,
    title: "Institutional partnership",
    body: "We seek to complement rather than duplicate the responsibilities of public authorities (Prisons), Legal Services institutions, qualified professionals and experienced organisations. Roles, permissions, referrals and public claims should be documented.",
  },
  {
    icon: ClipboardCheck,
    title: "Evidence and accountability",
    body: "We intend to set realistic objectives, listen to participant feedback, document learning and report accurately. Proposed activities, approved targets and achieved results should always be distinguished.",
  },
] as const;
