import Link from "next/link";
import Card from "@/app/Components/Ui/Card";
import ProgressRing from "@/app/Components/Ui/ProgressRing";

export default function ProgressOverview() {
  return (
    <Card aria-labelledby="progress-heading" className="flex flex-col">
      <h2 id="progress-heading" className="font-heading text-[18px] font-semibold tracking-[-0.01em]">
        Your progress
      </h2>

      <div className="flex flex-1 flex-col items-center justify-center py-5">
        <ProgressRing value={68}>
          <p className="font-heading text-[30px] font-semibold leading-none tracking-[-0.02em]">68%</p>
          <p className="mt-1 text-[12px] text-charcoal/65">17 of 25</p>
        </ProgressRing>
        <p className="mt-4 max-w-[230px] text-center text-[14px] leading-relaxed text-charcoal/75">
          8 more applications to reach your November goal.
        </p>
      </div>

      <Link href="/analytics" className="text-[13px] font-medium text-olive-deep hover:underline">
        See detailed analytics
      </Link>
    </Card>
  );
}