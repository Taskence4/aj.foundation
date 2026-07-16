export const site = {
  name: "AJ Foundation",
  tagline: "Skills for Rehabilitation. Readiness for Life.",
  description:
    "AJ Foundation works with prison systems, institutions, and communities to support rehabilitation through structured skills programmes, constructive engagement, employability training, and post-release readiness.",
  url: "https://www.ajfoundation.org",
  phone: "+91 [Phone Number]",
  email: "info@ajfoundation.org",
  emailAlt: "contact@ajfoundation.org",
  address: "[Add Address]",
  footerTagline: "Building skills. Restoring purpose. Preparing lives beyond prison.",
  social: {
    instagram: "#",
    linkedin: "#",
    facebook: "#",
    twitter: "#",
  },
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Impact", href: "#impact" },
  { label: "Events", href: "#events" },
  { label: "Updates", href: "#updates" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
] as const;

export const primaryCta = { label: "Join the Mission", href: "#contact" } as const;
export const secondaryCta = { label: "Partner With Us", href: "#contact" } as const;
