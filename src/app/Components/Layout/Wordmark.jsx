// Jobon wordmark: two overlapping "o" shapes (a ring and a solid dot) + the name.
// "dark" is for the charcoal sidebar, "light" is for ivory pages like login and signup.

const tones = {
  dark: { job: "text-ivory", on: "text-[#a5ac82]", ring: "#a5ac82", dot: "#b08aa0" },
  light: { job: "text-charcoal", on: "text-olive-deep", ring: "#666c4b", dot: "#76576b" },
};

const sizes = {
  sm: { text: "text-[18px]", mark: 26 },
  md: { text: "text-[22px]", mark: 32 },
  lg: { text: "text-[34px]", mark: 48 },
};

export default function Wordmark({ tone = "dark", size = "md", className = "" }) {
  const t = tones[tone];
  const s = sizes[size];

  return (
    <span role="img" aria-label="Jobon" className={`inline-flex items-center gap-2.5 font-heading ${className}`}>
      <svg width={s.mark} height={s.mark * 0.6} viewBox="0 0 40 24" fill="none" aria-hidden>
        <circle cx="28" cy="12" r="9" fill={t.dot} />
        <circle cx="12" cy="12" r="8" stroke={t.ring} strokeWidth="4" />
      </svg>
      <span className={`${s.text} leading-none tracking-[-0.03em]`}>
        <span className={`font-bold ${t.job}`}>Job</span>
        <span className={`font-normal ${t.on}`}>on</span>
      </span>
    </span>
  );
}