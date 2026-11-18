import Link from "next/link";
import Card from "@/app/Components/Ui/Card";
import Badge from "@/app/Components/Ui/Badge";

// Sample data. This is where your /jobs data will go later.
const applications = [
  { company: "Northwind Labs", role: "Frontend Developer", status: "Interview", date: "Nov 12", tone: "bg-plum/15 text-plum" },
  { company: "Fieldnote", role: "React Developer Intern", status: "Applied", date: "Nov 11", tone: "bg-olive/20 text-olive-deep" },
  { company: "Brightloop", role: "Full-Stack Engineer", status: "Assessment", date: "Nov 9", tone: "bg-clay/25 text-[#7a4a33]" },
  { company: "Kiln & Co", role: "Junior Web Developer", status: "Saved", date: "Nov 8", tone: "bg-stone text-charcoal" },
  { company: "Harbor Systems", role: "Backend Intern", status: "Rejected", date: "Nov 5", tone: "bg-charcoal/10 text-charcoal/75" },
];

export default function RecentApplications() {
  return (
    <Card aria-labelledby="recent-heading">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="recent-heading" className="font-heading text-[18px] font-semibold tracking-[-0.01em]">
          Recent applications
        </h2>
        <Link href="/applications" className="text-[13px] font-medium text-olive-deep hover:underline">
          View all applications
        </Link>
      </div>

      <ul className="flex flex-col">
        {applications.map((app) => (
          <li
            key={app.company}
            className="grid grid-cols-[44px_1fr_auto] items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-ivory/70 sm:grid-cols-[44px_1fr_auto_56px]"
          >
            <span className={`grid h-11 w-11 place-items-center rounded-xl font-heading text-[16px] font-semibold ${app.tone}`}>
              {app.company.charAt(0)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[14px] font-medium">{app.company}</p>
              <p className="truncate text-[13px] text-charcoal/65">{app.role}</p>
            </div>
            <Badge status={app.status} />
            <p className="hidden text-right text-[12px] text-charcoal/65 sm:block">{app.date}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}