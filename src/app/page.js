import DashboardLayout from "@/app/Components/Layout/DashboardLayout";
import WelcomeSection from "@/app/Components/dashboard/WelcomeSection";
import StatsOverview from "@/app/Components/dashboard/StatsOverview";
import TodaysFocus from "@/app/Components/dashboard/TodaysFocus";
import ProgressOverview from "@/app/Components/dashboard/ProgressOverview";
import RecentApplications from "@/app/Components/dashboard/RecentApplications";
import UpcomingInterviews from "@/app/Components/dashboard/UpcomingInterviews";


export default function DashboardPage() {
  return (
    <DashboardLayout active="dashboard">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-7">
        <WelcomeSection />
        <StatsOverview />
        <div className="grid gap-7 xl:grid-cols-[1.6fr_1fr]">
          <TodaysFocus />
          <ProgressOverview />
        </div>
        <div className="grid gap-7 xl:grid-cols-[1.6fr_1fr]">
          <RecentApplications />
          <UpcomingInterviews />
        </div>
      </div>
    </DashboardLayout>
  );
}