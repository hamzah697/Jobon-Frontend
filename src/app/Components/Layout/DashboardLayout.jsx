import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ active, children }) {
  return (
    <div className="min-h-screen bg-ivory">
      <Sidebar active={active} />
      <div className="lg:pl-[248px]">
        <Header />
        <main className="px-5 pb-14 pt-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}