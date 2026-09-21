import { Scale, Sprout, HeartHandshake } from "lucide-react";
import { ActionLink } from "@/components/layout/ContentPage";
import copy from "@/data/v3-home.json";

const destinations: Record<string, string> = { "Our Work": "/our-work", "About": "/about", "Partner With Us": "/partner-with-us", "Contact": "/contact", "Initial Programme": "/initial-programme", "How We Work": "/how-we-work" };
const pathwayTitles = ["Access to Justice", "Rehabilitation & Capability Development", "Reintegration & Second Chances"];
const icons = [Scale, Sprout, HeartHandshake];

function parseSection(text: string) {
  const lines = text.split("\n");
  const status = lines[0] === "PROGRAMME UNDER DEVELOPMENT" ? lines.shift() : undefined;
  const title = lines.shift();
  const links = lines.filter(line => line.includes("Destination:")).map(line => {
    const [label, destination] = line.split("Destination:");
    return { label: label.trim(), href: destinations[destination.trim()] };
  });
  const body = lines.filter(line => !line.includes("Destination:")).join(" ");
  return { title, status, links, body };
}

export default function Home() {
  return <>{copy.map((text, index) => {
    const section = parseSection(text);
    const actions = <div className="v3-actions">{section.links.map(link => <ActionLink key={link.href} href={link.href}>{link.label}</ActionLink>)}</div>;
    if (index === 0) return <section id="home" className="v3-hero" key={index}><div className="site-shell"><p className="eyebrow eyebrow-light">AJ Foundation</p><h1>Dignity. Access.<br /><span>A pathway forward.</span></h1><p>{section.body}</p>{actions}</div></section>;
    if (index === 2) {
      const introduction = section.body.split(pathwayTitles[0])[0];
      return <section className="section section-warm" key={index}><div className="site-shell"><div className="section-intro"><h2>{section.title}</h2><p>{introduction}</p></div><div className="v3-pathways">{pathwayTitles.map((title, i) => {
        const Icon = icons[i];
        const body = section.body.split(title)[1].split(pathwayTitles[i + 1] || "\n")[0];
        return <article key={title}><div className="v3-pathway-mark"><Icon size={30} aria-hidden="true" /><span>0{i + 1}</span></div><h3>{title}</h3><p>{body}</p></article>;
      })}</div>{actions}</div></section>;
    }
    return <section className={`section ${index === 5 ? "v3-engagement" : index === 4 ? "section-warm" : "section-white"}`} key={index}><div className="site-shell v3-split"><div>{section.status && <p className="eyebrow">Programme under development</p>}<h2>{section.title}</h2></div><div className="v3-prose"><p>{section.body}</p>{actions}</div></div></section>;
  })}</>;
}
