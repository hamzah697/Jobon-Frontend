export default function Card({ as: Tag = "section", className = "", children, ...rest }) {
  return (
    <Tag className={`rounded-2xl bg-paper p-6 ring-1 ring-stone/70 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}