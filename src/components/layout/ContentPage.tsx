import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "./PageHero";

type Block = { kind: string; text: string; href?: string; detail?: string };
type Content = { eyebrow: string; title: string; intro: string; sections: { heading: string; blocks: Block[] }[] };

export function ActionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="v3-action" href={href}><span>{children}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>;
}

function Blocks({ blocks }: { blocks: Block[] }) {
  const elements: React.ReactNode[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (block.kind === "item" || block.kind === "step") {
      const items = [block];
      while (blocks[i + 1]?.kind === block.kind) items.push(blocks[++i]);
      if (block.kind === "step") elements.push(<ol className="v3-steps" key={i}>{items.map(item => <li key={item.text}><h3>{item.text}</h3><p>{item.detail}</p></li>)}</ol>);
      else elements.push(<ul className="v3-list" key={i}>{items.map(item => <li key={item.text}>{item.text}</li>)}</ul>);
    } else if (block.kind === "link" && block.href) {
      elements.push(<ActionLink href={block.href} key={i}>{block.text}</ActionLink>);
    } else if (block.kind === "subheading") elements.push(<h3 className="v3-subheading" key={i}>{block.text}</h3>);
    else elements.push(<p key={i}>{block.text}</p>);
  }
  return elements;
}

export function ContentPage({ content }: { content: Content }) {
  return <>
    <PageHero eyebrow={content.eyebrow} title={content.title} description={content.intro} />
    <div className="v3-content site-shell">
      {content.sections.map(section => <section className="v3-content-section" key={section.heading}>
        <h2>{section.heading}</h2><div className="v3-prose"><Blocks blocks={section.blocks} /></div>
      </section>)}
    </div>
  </>;
}
