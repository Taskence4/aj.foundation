import type { LucideIcon } from "lucide-react";

export function NoticeBox({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="article-takeaways">
      <span className="notice-box-label">{Icon && <Icon size={16} />}{label}</span>
      <div className="notice-box-body">{children}</div>
    </div>
  );
}
