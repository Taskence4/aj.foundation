import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-xs font-bold tracking-[0.15em] uppercase",
        light ? "text-crimson-300" : "text-crimson-600",
        className,
      )}
    >
      <span aria-hidden>. </span>
      {children}
    </p>
  );
}
