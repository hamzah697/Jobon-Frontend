import { Search, Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-stone/60 bg-ivory px-5 py-4 sm:px-8">
      <div className="relative w-full max-w-md">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-charcoal/55"
        />
        <input
          type="search"
          aria-label="Search applications and companies"
          placeholder="Search applications and companies"
          className="h-[44px] w-full rounded-xl bg-stone/45 pl-11 pr-4 text-[14px] text-charcoal transition-colors placeholder:text-charcoal/55 focus:bg-paper"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="relative grid h-[44px] w-[44px] place-items-center rounded-xl text-charcoal/80 transition-colors hover:bg-stone/50"
        >
          <Bell className="h-5 w-5" strokeWidth={1.8} />
          <span aria-hidden className="absolute right-3 top-3 h-2 w-2 rounded-full bg-clay ring-2 ring-ivory" />
        </button>

        <button
          type="button"
          className="flex h-[44px] items-center gap-2.5 rounded-xl pl-1.5 pr-3 transition-colors hover:bg-stone/50"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-plum font-heading text-[13px] font-semibold text-paper">
            H
          </span>
          <span className="hidden font-heading text-[14px] font-medium sm:block">Hamzah</span>
          <ChevronDown aria-hidden className="h-4 w-4 text-charcoal/60" />
        </button>
      </div>
    </header>
  );
}