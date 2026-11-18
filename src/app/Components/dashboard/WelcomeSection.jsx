export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-stone/45 px-7 py-9 sm:px-10">
      <div className="relative z-10 max-w-lg">
        <h1 className="font-heading text-[30px] font-semibold leading-tight tracking-[-0.02em] sm:text-[32px]">
          Welcome back, Hamzah
        </h1>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-charcoal/75">
          Three interviews are lined up next week. Start with today&apos;s follow-ups, then prepare for Monday.
        </p>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 320 200"
        fill="none"
        className="pointer-events-none absolute -right-8 -top-6 hidden h-[210px] w-[340px] sm:block"
      >
        <circle cx="250" cy="70" r="92" fill="#BC8268" fillOpacity="0.28" />
        <path d="M120 200C130 130 200 96 262 112C300 122 322 150 330 200Z" fill="#777D5B" fillOpacity="0.45" />
        <circle cx="200" cy="48" r="30" fill="#76576B" fillOpacity="0.55" />
      </svg>
    </section>
  );
}