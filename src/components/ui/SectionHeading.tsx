import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

export function SectionHeading({
  label,
  heading,
  body,
  align = "left",
  light = false,
  className,
}: {
  label?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && <SectionLabel light={light}>{label}</SectionLabel>}
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]",
          light ? "text-cream-50" : "text-ink",
        )}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            light ? "text-cream-200/80" : "text-stone-700",
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
