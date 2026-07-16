export function BlogCard({
  category,
  title,
  excerpt,
  date,
}: {
  category: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return (
    <article className="group relative flex aspect-4/5 flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-800 to-maroon-950 p-6">
      <span className="absolute top-6 left-6 rounded-full bg-cream-50 px-3 py-1.5 text-xs font-bold text-ink">
        {date}
      </span>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      />

      <div className="relative">
        <span className="text-xs font-bold tracking-[0.1em] text-crimson-300 uppercase">
          {category}
        </span>
        <h3 className="mt-2 font-display text-xl leading-snug font-bold text-cream-50">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-cream-100/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {excerpt}
        </p>
      </div>
    </article>
  );
}
