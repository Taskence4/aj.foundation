import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "dark" | "light" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-crimson-500 text-cream-50 hover:bg-crimson-600",
  dark: "bg-ink text-cream-50 hover:bg-maroon-900",
  light: "bg-cream-50 text-ink border border-ink/10 hover:border-ink/25",
  ghost: "",
};

const circleStyles: Record<ButtonVariant, string> = {
  primary: "bg-cream-50 text-crimson-600",
  dark: "bg-cream-50 text-ink",
  light: "bg-ink text-cream-50",
  ghost: "bg-ink text-cream-50",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-crimson-600",
          className,
        )}
        {...props}
      >
        {children}
        {icon && (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-cream-50 transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="size-3.5" />
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-4 rounded-full py-1.5 pr-1.5 pl-6 text-sm font-semibold transition-colors duration-200",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
      {icon && (
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:rotate-45",
            circleStyles[variant],
          )}
        >
          <ArrowRight className="size-4" />
        </span>
      )}
    </Link>
  );
}
