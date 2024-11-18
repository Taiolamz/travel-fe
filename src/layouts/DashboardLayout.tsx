import { IoMdMenu } from "react-icons/io";
import "./DashboardLayout.scss";
import HeaderNav from "./header-nav";
import Sidenav from "./sidenav";
import TripDashboard from "./trip-dashboard";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import MenuToggle from "../components/fragments/menu";
import useWindowSize from "../lib/hooks/useWindowSize";

const DashboardLayout = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const { width } = useWindowSize()

  useEffect(() => {
    if (width < 1024) {
      setIsSideOpen(false)
    }else {
      setIsSideOpen(true)

    }
  },[width])

  return (
    <section className={cn(
      "h-screen w-screen",
      isSideOpen && ""
    )}>
      <HeaderNav />

      {/* Body Section */}
      <section className="dashboard-body text-black mt-32 fixed overflow-auto bottom-0 h-[calc(100vh-100px)]  h-scree w-full flex overflow-y-auto">
        <TripDashboard />
        <MenuToggle
          isOpen={isSideOpen}
          onClick={() => setIsSideOpen(!isSideOpen)}
        />

        {/* overlay */}
        <div
          className={cn(
            "hidden lg:hidden left-0 top-0 fixed w-[100vw]  h-screen",
            isSideOpen ? "bg-black bg-opacity-25 block" : ""
          )}
          onClick={() => setIsSideOpen(false)}
        ></div>

        <Sidenav showSidebar={isSideOpen} />
      </section>
    </section>
  );
};

export default DashboardLayout;
