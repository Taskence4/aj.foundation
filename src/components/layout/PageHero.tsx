import { ArrowLeft } from "lucide-react";
import { HashLink } from "@/components/HashLink";

export function PageHero({
  eyebrow,
  title,
  description,
  backHref = "/",
  backLabel = "Back to home",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <section className="updates-page-hero">
      <div className="site-shell updates-page-hero-inner">
        <HashLink className="page-back-link" href={backHref}><ArrowLeft /> {backLabel}</HashLink>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
