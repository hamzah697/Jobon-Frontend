const variants = {
  primary: "bg-olive-deep text-paper hover:bg-[#5a5f41]",
  secondary: "bg-stone/60 text-charcoal hover:bg-stone",
  ghost: "text-charcoal hover:bg-stone/50",
};

export default function Button({ variant = "primary", className = "", children, ...rest }) {
  return (
    <button
      className={`inline-flex h-[44px] items-center justify-center gap-2 rounded-xl px-5 font-heading text-[14px] font-semibold transition-colors duration-150 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}