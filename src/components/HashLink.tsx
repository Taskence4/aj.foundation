import type { AnchorHTMLAttributes } from "react";
import { withBasePath } from "@/lib/utils";

type HashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * This Next.js build doesn't auto-scroll to same-page hash targets on client-side
 * navigation, so section anchors (#about, #contact, ...) use a plain <a> instead of
 * next/link — the browser's native hash handling always scrolls correctly, whether
 * the target is on the current page or reached via a fresh page load.
 */
export function HashLink({ href, ...props }: HashLinkProps) {
  const [path, hash] = href.split("#");
  const resolvedPath = path ? withBasePath(path) : "";
  return <a href={`${resolvedPath}#${hash}`} {...props} />;
}
