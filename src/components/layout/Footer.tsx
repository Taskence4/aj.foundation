import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { withBasePath } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div><p>Call us</p><a href="tel:+91">+91 [Phone Number]</a></div>
        <div><p>Email</p><a href="mailto:info@ajfoundation.org">info@ajfoundation.org</a></div>
        <div className="footer-social"><Link href="#" aria-label="Instagram"><InstagramIcon /></Link><Link href="#" aria-label="LinkedIn"><LinkedInIcon /></Link><Link href="#" aria-label="Facebook"><FacebookIcon /></Link></div>
      </div>
      <div className="site-shell footer-main">
        <div className="footer-brand"><Image className="footer-logo brand-logo-light" src={withBasePath("/brand/aj-foundation-transparent.webp")} alt="AJ Foundation" width={360} height={100} /><p>Building skills. Restoring purpose. Preparing lives beyond prison.</p></div>
        <div><h3>Explore</h3><Link href="/#about">About</Link><Link href="/#programmes">Programmes</Link><Link href="/#events">Events</Link><Link href="/updates">Updates</Link></div>
        <div><h3>Get involved</h3><Link href="/#contact">Volunteer</Link><Link href="/#contact">Partner with us</Link><Link href="/#donate">Donate</Link><Link href="/#contact">Contact</Link></div>
        <div><h3>Office</h3><p className="footer-address"><MapPin />[Add Address], India</p><Link className="footer-direction" href="/#contact">Get in touch <ArrowUpRight /></Link></div>
      </div>
      <div className="site-shell footer-bottom"><span>© 2026 AJ Foundation. All rights reserved.</span><span>Skills for rehabilitation. Readiness for life.</span></div>
    </footer>
  );
}
