const styles = {
  Saved: "bg-stone/70 text-charcoal",
  Applied: "bg-olive/15 text-[#4f5538]",
  Interview: "bg-plum/10 text-plum",
  Assessment: "bg-clay/20 text-[#7a4a33]",
  Offer: "bg-olive-deep text-paper",
  Rejected: "bg-charcoal/10 text-charcoal/75",
};

export default function Badge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-medium ${styles[status] || styles.Saved}`}>
      {status}
    </span>
  );
}