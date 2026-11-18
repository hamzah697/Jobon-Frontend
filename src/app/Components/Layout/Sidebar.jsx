import Link from "next/link";
import { LayoutDashboard, Briefcase, CalendarDays, ListChecks, BarChart3, Settings } from "lucide-react";
import Wordmark from "./Wordmark";

const items = [
  { key: "dashboard", label: "Dashboard", href: "/", Icon: LayoutDashboard },
  { key: "applications", label: "Applications", href: "/applications", Icon: Briefcase },
  { key: "calendar", label: "Calendar", href: "/calendar", Icon: CalendarDays },
  { key: "tasks", label: "Tasks", href: "/tasks", Icon: ListChecks },
  { key: "analytics", label: "Analytics", href: "/analytics", Icon: BarChart3 },
  { key: "settings", label: "Settings", href: "/settings", Icon: Settings },
];

// `active` is passed in by the page. You can swap it for real route detection later.
export default function Sidebar({ active = "dashboard" }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[248px] flex-col bg-charcoal px-4 py-7 text-ivory lg:flex">
      <div className="px-3">
        <div className="flex items-center gap-3">
         <Wordmark tone="dark" size="md" />
        </div>
        <p className="mt-3 text-[12px] leading-snug text-ivory/60">Your job search, organized.</p>
      </div>

      <nav aria-label="Main" className="mt-10">
        <ul className="flex flex-col gap-1">
          {items.map(({ key, label, href, Icon }) => {
            const isActive = key === active;
            return (
              <li key={key}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex h-11 items-center gap-3 rounded-xl px-3 font-heading text-[14px] font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-white/[0.08] text-ivory"
                      : "text-ivory/65 hover:bg-white/[0.04] hover:text-ivory"
                  }`}
                >
                  {isActive && (
                    <span aria-hidden className="absolute left-0 top-2.5 h-6 w-[3px] rounded-full bg-olive" />
                  )}
                  <Icon className={`h-[18px] w-[18px] ${isActive ? "text-olive" : ""}`} strokeWidth={1.8} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}