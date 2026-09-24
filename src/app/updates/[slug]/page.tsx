import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { UpdateCard } from "@/components/updates/UpdateCard";
import { getUpdate, updates } from "@/data/updates";
import { withBasePath } from "@/lib/utils";
import { HashLink } from "@/components/HashLink";

const articleNotes: Record<string, { note: string; href: string; label: string }> = {
  "why-skills-training-matters-in-prison-rehabilitation": { note: "This Practice Note presents general programme perspectives on prison-based skills training and does not report results from an implemented AJ Foundation programme.", href: "/our-work/rehabilitation", label: "Explore Rehabilitation & Capability Development" },
  "preparing-for-work-after-release": { note: "This Practice Note reflects on work readiness and reintegration and does not report results from an implemented AJ Foundation programme.", href: "/our-work/reintegration", label: "Explore Reintegration & Second Chances" },
  "building-rehabilitation-programmes-prison-systems-can-trust": { note: "This Practice Note presents principles for responsible rehabilitation programme design and does not report results from a completed AJ Foundation programme.", href: "/how-we-work", label: "How We Work" },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return updates.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/updates/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getUpdate(slug);
  return post ? { title: `${post.title} | AJ Foundation`, description: post.excerpt } : {};
}

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function UpdateArticlePage({ params }: PageProps<"/updates/[slug]">) {
  const { slug } = await params;
  const post = getUpdate(slug);
  if (!post) notFound();

  const relatedPosts = updates.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="article-hero">
        <div className="site-shell article-hero-inner">
          <Link className="page-back-link" href="/updates"><ArrowLeft /> All updates</Link>
          <div className="article-meta-top"><span>{post.category}</span></div>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <div className="article-byline">
            <span><Clock3 /> {post.readingTime}</span>
            <span>AJ Foundation</span>
          </div>
        </div>
      </section>

      <div className="site-shell article-cover-wrap">
        <figure className="article-cover">
          <Image src={withBasePath(post.image)} alt={post.imageAlt} fill priority sizes="(max-width: 1240px) 100vw, 1200px" />
          <span className="ai-tag">Representational image</span>
        </figure>
      </div>

      <article className="site-shell article-layout">
        <aside className="article-aside">
          <span>In this Practice Note</span>
          <ol>{post.sections.map((section) => <li key={section.heading}><a href={`#${sectionId(section.heading)}`}>{section.heading}</a></li>)}</ol>
        </aside>

        <div className="article-content">
          <p className="article-scope-note">{articleNotes[post.slug].note}</p>
          <p className="article-lead">{post.intro}</p>
          <section className="article-takeaways" aria-labelledby="takeaways-title">
            <span id="takeaways-title">Key takeaways</span>
            <ul>{post.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul>
          </section>

          {post.sections.map((section, index) => (
            <section className="article-section" id={sectionId(section.heading)} key={section.heading}>
              <span>0{index + 1}</span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}

          <blockquote>{post.quote}</blockquote>
          <div className="article-closing">
            <HashLink className="v3-action" href={articleNotes[post.slug].href}><span>{articleNotes[post.slug].label}</span><ArrowUpRight /></HashLink>
          </div>
        </div>
      </article>

      <section className="section related-updates">
        <div className="site-shell">
          <div className="related-heading"><div><span>Continue reading</span><h2>Related Practice Notes</h2></div><Link href="/updates">View all updates <ArrowUpRight /></Link></div>
          <div className="news-grid related-grid">{relatedPosts.map((item) => <UpdateCard key={item.slug} post={item} />)}</div>
        </div>
      </section>
    </>
  );
}
