import Card from "@/app/Components/Ui/Card";
import Button from "@/app/Components/Ui/Button";

// Sample data
const interviews = [
  { day: "Mon", date: "16", company: "Brightloop", role: "Full-Stack Engineer", time: "2:30 pm" },
  { day: "Thu", date: "19", company: "Northwind Labs", role: "Frontend Developer", time: "11:00 am" },
  { day: "Fri", date: "20", company: "Fieldnote", role: "React Developer Intern", time: "10:00 am" },
];

export default function UpcomingInterviews() {
  return (
    <Card aria-labelledby="interviews-heading">
      <h2 id="interviews-heading" className="mb-4 font-heading text-[18px] font-semibold tracking-[-0.01em]">
        Upcoming interviews
      </h2>

      <ul className="flex flex-col gap-4">
        {interviews.map((item) => (
          <li key={item.company} className="flex items-center gap-4">
            <div className="grid h-14 w-12 shrink-0 place-items-center rounded-xl bg-ivory text-center">
              <div>
                <p className="text-[12px] font-medium leading-none text-plum">{item.day}</p>
                <p className="mt-1 font-heading text-[20px] font-semibold leading-none">{item.date}</p>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-medium">{item.company}</p>
              <p className="truncate text-[13px] text-charcoal/65">{item.role}</p>
              <p className="text-[12px] text-charcoal/65">{item.time}</p>
            </div>
            <Button variant="secondary" className="h-9 px-4 text-[13px]">
              Prepare
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}