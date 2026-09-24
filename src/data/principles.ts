import { Building2, ClipboardCheck, Heart, Lock, Scale, ShieldCheck } from "lucide-react";

export const principles = [
  {
    icon: Heart,
    title: "Dignity and agency",
    body: "We recognise participants as people with rights, responsibilities, knowledge and aspirations — not as cases, statistics or passive recipients. Participation should be informed and voluntary within the realities of the institutional setting.",
  },
  {
    icon: Lock,
    title: "Consent, privacy and confidentiality",
    body: "AJ Foundation seeks only the information necessary for a defined purpose. We aim to explain how information will be used, protect it appropriately, and obtain specific consent before sharing personal information, photographs or stories.",
  },
  {
    icon: Scale,
    title: "Equity and non-discrimination",
    body: "We seek to recognise how poverty, gender, caste, disability, language, age, family support and other inequalities may shape access to justice and opportunity. Programme decisions should not reproduce exclusion or stigma.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding and do-no-harm",
    body: "We seek to consider potential risks before collecting personal information, contacting families, making referrals, publishing identities or stories, or offering support. Safeguarding and grievance processes should be established and approved for the relevant programme.",
  },
  {
    icon: Building2,
    title: "Institutional partnership",
    body: "AJ Foundation seeks to complement — not duplicate — the responsibilities of prison authorities, Legal Services Institutions, qualified professionals, relevant public authorities and experienced civil-society organisations. Roles, permissions, referrals and public claims should be clearly documented.",
  },
  {
    icon: ClipboardCheck,
    title: "Evidence and accountability",
    body: "AJ Foundation intends to set realistic objectives, listen to participant feedback, document learning, report accurately, and distinguish clearly between proposed activities, approved targets and achieved results.",
  },
] as const;
