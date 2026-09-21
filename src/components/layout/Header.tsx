"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const links = [["Home", "/"], ["About", "/about"], ["Our Work", "/our-work"], ["Initial Programme", "/initial-programme"], ["How We Work", "/how-we-work"], ["Insights", "/updates"], ["Partner With Us", "/partner-with-us"], ["Contact", "/contact"]];
const pathways = [["Access to Justice", "/our-work/access-to-justice"], ["Rehabilitation & Capability Development", "/our-work/rehabilitation"], ["Reintegration & Second Chances", "/our-work/reintegration"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const workToggle = useRef<HTMLButtonElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function outside(event: PointerEvent) { if (!header.current?.contains(event.target as Node)) { setWorkOpen(false); setOpen(false); } }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  function close() { setOpen(false); setWorkOpen(false); }
  return <header ref={header} className="main-header v3-header" onKeyDown={event => {
    if (event.key === "Escape") { if (workOpen) { setWorkOpen(false); workToggle.current?.focus(); } else { setOpen(false); menuToggle.current?.focus(); } }
  }}>
    <div className="site-shell header-inner">
      <Link href="/" className="brand" onClick={close}><span className="brand-wordmark">aj.foundation</span></Link>
      <nav id="primary-navigation" aria-label="Primary navigation" className={`header-nav ${open ? "open" : ""}`}>
        {links.map(([label, href]) => href === "/our-work" ? <div className="v3-nav-work" key={href}>
          <div className="v3-nav-work-label"><Link href={href} aria-current={pathname === href ? "page" : undefined} onClick={close}>{label}</Link><button ref={workToggle} type="button" aria-label="Our Work pathways" aria-expanded={workOpen} aria-controls="pathway-navigation" onClick={() => setWorkOpen(!workOpen)}><ChevronDown size={16} /></button></div>
          {workOpen && <div id="pathway-navigation" className="v3-subnav">{pathways.map(([name, path]) => <Link key={path} href={path} aria-current={pathname === path ? "page" : undefined} onClick={close}>{name}</Link>)}</div>}
        </div> : <Link key={href} href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
      </nav>
      <button ref={menuToggle} className="menu-button" type="button" onClick={() => { setOpen(!open); setWorkOpen(false); }} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation">{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
