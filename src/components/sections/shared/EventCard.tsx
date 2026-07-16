import { Calendar, Clock, ImageIcon, MapPin } from "lucide-react";

export function EventCard({
  title,
  description,
  date,
  time,
  location,
}: {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream-50 sm:flex-row">
      <div className="relative flex aspect-video shrink-0 items-center justify-center bg-gradient-to-br from-maroon-800 to-maroon-950 sm:aspect-square sm:w-72">
        <ImageIcon className="size-6 text-cream-50/25" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col justify-center p-7 sm:p-8">
        <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">
          {description}
        </p>

        <dl className="mt-5 grid gap-2 border-t border-ink/10 pt-5 text-sm text-stone-700 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 shrink-0 text-crimson-600" />
            <dt className="font-semibold text-ink">Date:</dt>
            <dd>{date}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-crimson-600" />
            <dt className="font-semibold text-ink">Time:</dt>
            <dd>{time}</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-crimson-600" />
            <dt className="font-semibold text-ink">Location:</dt>
            <dd>{location}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
