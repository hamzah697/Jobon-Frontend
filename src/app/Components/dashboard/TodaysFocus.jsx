import Link from "next/link";
import { Check } from "lucide-react";
import Card from "@/app/Components/Ui/Card";

// Sample data
const tasks = [
  { title: "Send a follow-up to Fieldnote", due: "Due today", done: false },
  { title: "Finish the take-home for Brightloop", due: "Due tomorrow", done: false },
  { title: "Prepare questions for Northwind Labs", due: "Before Monday", done: false },
  { title: "Update the portfolio link on your resume", due: "No deadline", done: true },
];

export default function TodaysFocus() {
  return (
    <Card aria-labelledby="focus-heading">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="focus-heading" className="font-heading text-[18px] font-semibold tracking-[-0.01em]">
          Today&apos;s focus
        </h2>
        <Link href="/tasks" className="text-[13px] font-medium text-olive-deep hover:underline">
          View all tasks
        </Link>
      </div>

      <ul className="flex flex-col">
        {tasks.map((task) => (
          <li key={task.title}>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-3 transition-colors hover:bg-ivory/70">
              <input type="checkbox" className="peer sr-only" defaultChecked={task.done} />
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-[1.5px] border-charcoal/35 bg-paper transition-colors duration-150 peer-checked:border-olive-deep peer-checked:bg-olive-deep peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-plum [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                <Check className="h-3.5 w-3.5 text-paper transition-opacity duration-150" strokeWidth={3} />
              </span>
              <span className="min-w-0 transition-opacity duration-150 peer-checked:opacity-50">
                <span className="block text-[14px] font-medium">{task.title}</span>
                <span className="block text-[12px] text-charcoal/65">{task.due}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}