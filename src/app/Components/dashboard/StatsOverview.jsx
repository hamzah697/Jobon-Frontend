import { Briefcase, CalendarClock, ListTodo, Award } from "lucide-react";

// Sample data. Total applications can come from your /jobs/stats route later.
const stats = [
  { label: "Total applications", value: 24, note: "6 added this week", Icon: Briefcase },
  { label: "Upcoming interviews", value: 3, note: "Next one on Monday", Icon: CalendarClock },
  { label: "Tasks pending", value: 7, note: "2 due today", Icon: ListTodo },
  { label: "Offers received", value: 1, note: "Reply by Nov 20", Icon: Award },
];

export default function StatsOverview() {
  return (
    <section
      aria-label="Statistics overview"
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-stone/70 ring-1 ring-stone/70 lg:grid-cols-4"
    >
      {stats.map(({ label, value, note, Icon }) => (
        <div key={label} className="bg-paper p-5">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium text-charcoal/70">{label}</p>
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ivory text-olive-deep">
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
          </div>
          <p className="mt-3 font-heading text-[32px] font-semibold leading-none tracking-[-0.02em]">{value}</p>
          <p className="mt-2 text-[12px] text-charcoal/65">{note}</p>
        </div>
      ))}
    </section>
  );
}