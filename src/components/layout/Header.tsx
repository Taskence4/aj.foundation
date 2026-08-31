"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { withBasePath } from "@/lib/utils";
import { HashLink } from "@/components/HashLink";

const links = [
  ["Home", "/#home"],
  ["About", "/about"],
  ["Our Work", "/our-work"],
  ["How We Work", "/how-we-work"],
  ["Insights", "/updates"],
  ["Partner With Us", "/partner-with-us"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            className="brand-logo brand-logo-light"
            src={withBasePath("/brand/aj-foundation-transparent.webp")}
            alt="AJ Foundation"
            width={320}
            height={89}
            priority
          />
        </Link>
        <nav className={`header-nav ${open ? "open" : ""}`}>
          {links.map(([label, href]) =>
            href.includes("#") ? (
              <HashLink key={href} href={href} onClick={() => setOpen(false)}>{label}</HashLink>
            ) : (
              <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ),
          )}
        </nav>
        <Link className="header-cta" href="/contact"><span>Join the Mission</span><i><ArrowRight size={18} /></i></Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
