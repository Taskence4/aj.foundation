import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div><p>Call us</p><a href="tel:+918050089834">+91 80500 89834</a></div>
        <div><p>Email</p><a href="mailto:info@ajfoundation.org">info@ajfoundation.org</a></div>
      </div>
      <div className="site-shell footer-main">
        <div className="footer-brand"><span className="brand-wordmark footer-wordmark">aj.foundation</span><p>AJ Foundation seeks to advance dignity, access to justice, rehabilitation and social reintegration for people affected by incarceration.</p></div>
        <div><h3>Explore</h3><Link href="/about">About</Link><Link href="/our-work">Our Work</Link><Link href="/how-we-work">How We Work</Link><Link href="/updates">Insights</Link></div>
        <div><h3>Get involved</h3><Link href="/partner-with-us">Partner With Us</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Legal</h3><Link href="/privacy">Privacy Notice</Link><Link href="/terms">Terms of Use &amp; Legal Disclaimer</Link><Link href="/accessibility">Accessibility</Link></div>
      </div>
      <p className="site-shell footer-legal-note">Information on this website is general and does not constitute legal advice. AJ Foundation does not guarantee representation, release or any particular legal outcome.</p>
      <div className="site-shell footer-bottom"><span>&copy; {new Date().getFullYear()} AJ Foundation. All rights reserved.</span></div>
    </footer>
  );
}
