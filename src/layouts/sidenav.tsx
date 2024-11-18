import {
  activity,
  flights,
  hotels,
  immigration,
  medical,
  sort,
  study,
  vacation,
  visa,
} from "../assets/svgs";
import { cn } from "../lib/utils";

export default function Sidenav({
  showSidebar = false,
}: {
  showSidebar: boolean;
}) {
  const SIDE_ITEMS = [
    {
      id: 1,
      icon: activity,
      title: "Activities",
      path: "/",
    },
    {
      icon: hotels,
      title: "Hotels",
      path: "/",
    },
    {
      icon: flights,
      title: "Flights",
      path: "/",
    },
    {
      icon: study,
      title: "Study",
      path: "/",
    },
    {
      icon: visa,
      title: "Visa",
      path: "/",
    },
    {
      icon: immigration,
      title: "Immigration",
      path: "/",
    },
    {
      icon: medical,
      title: "Medical",
      path: "/",
    },
    {
      icon: vacation,
      title: "Vacation Packages",
      path: "/",
    },
  ];
//   console.log(showSidebar, "show sidebar");
  return (
    <>
      <aside
        id="aside"
        className={cn(
          "h-screen fixed md:h-[calc(100vh-140px)]  w-[350px] transition-all duration-300  md:sticky top-0 bottom-0",
          showSidebar ? " translate-x-1" : " -translate-x-full"
        )}
      >
        
        <div className="bg-white h-full m-5 flex flex-col gap-10  p-8">
          {SIDE_ITEMS.map((side_item, index) => {
            const { icon, title, path } = side_item;
            return (
              <div>
                <div
                  key={index}
                  className={`cursor-pointer hover:scale-110 transition-all ${
                    window.location.pathname === path ? "active" : ""
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <img src={icon} alt={title} />
                    <span className="text-[#647995] font-medium">{title}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-auto mb-10 flex items-center justify-between bg-[#F0F2F5] p-4 text-[#647995]">
            <div className="flex items-center gap-2 text-sm">
              <p className="p-2 bg-[#0D6EFD] text-white rounded-md">Go</p>
              <p>Personal Account</p>
            </div>
            <div className="cursor-pointer">
              <img src={sort} alt="" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
