import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { UpdatePost } from "@/data/updates";
import { withBasePath } from "@/lib/utils";

type UpdateCardProps = {
  post: UpdatePost;
  priority?: boolean;
};

export function UpdateCard({ post, priority = false }: UpdateCardProps) {
  const href = `/updates/${post.slug}`;

  return (
    <article className="news-card">
      <Link className="news-image" href={href} aria-label={`Read ${post.title}`}>
        <Image
          src={withBasePath(post.image)}
          alt={post.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
        <span>{post.category}</span>
        <span className="ai-tag">Representational image</span>
      </Link>
      <div className="news-body">
        <small>AJ FOUNDATION · PRACTICE NOTE</small>
        <h3><Link href={href}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link className="v3-read-link" href={href} aria-label={`Read Practice Note: ${post.title}`}>Read Practice Note <ArrowUpRight size={18} /></Link>
      </div>
    </article>
  );
}
