export function NoticeBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="article-takeaways">
      <span>{label}</span>
      <div className="notice-box-body">{children}</div>
    </div>
  );
}
