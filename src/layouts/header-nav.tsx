import {
  caret_down,
  cart,
  check_list,
  create,
  dummy_profile,
  hand_coin,
  home,
  logo,
  notification,
  piechart,
  search,
  wallet,
} from "../assets/svgs";
import Button from "../components/button";


export default function HeaderNav() {
  const navigationMenu = [
    { icon: home, label: "Home" },
    { icon: piechart, label: "Dashboard" },
    { icon: wallet, label: "Wallet" },
    { icon: check_list, label: "Plan a trip" },
    { icon: hand_coin, label: "Commission for life" },
  ];

  const actionItems = [
    { icon: notification, label: "Notification" },
    { icon: cart, label: "Carts" },
    { icon: create, label: "Create" },
  ];

  const logoSection = (
    <div className="flex items-center gap-4 lg:w-[485px]">
      <img src={logo} alt="Logo" style={{ width: "32px", height: "32px" }} />
      <div className="relative w-full">
        <img
          src={search}
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="hidden bg-[#F0F2F5] w-full rounded-[4px] pl-10 p-3 placeholder:text-[#647995] outline-none lg:block"
        />
      </div>
    </div>
  );

  const navigationSection = (
    <ul className="hidden lg:flex items-center gap-6">
      {navigationMenu.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
      ))}
    </ul>
  );

  const actionSection = (
    <ul className="flex items-center gap-6">
      <li className="hidden lg:block">
        <Button>Subscribe</Button>
      </li>
      {actionItems.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
      ))}
      <li className="cursor-pointer">
        <div className="flex items-center gap-3 group">
          <img
            src={dummy_profile}
            alt="Profile picture"
            className="rounded-full !h-[52px] !w-[52px] object-cover"
          />
          <img
            src={caret_down}
            alt="Dropdown"
            className="group-hover:rotate-180 transition-transform duration-500"
          />
        </div>
      </li>
    </ul>
  );

  const vrLine = <span className="hidden bg-[#98A2B3] h-[48px] w-[1px] lg:block"></span>;

  return (
    <div
      id="header"
      className="w-full flex hidde flex-row justify-between items-center text-sm h-[100px] p-[40px] bg-white text-[#647995]"
    >
     
      {logoSection}
      <div className="flex items-center gap-6">
        {navigationSection}
        {vrLine}
        {actionSection}
      </div>
    </div>
  );
}

const MenuItem = ({ icon, label }: { icon: string; label: string }) => (
  <li className="flex flex-col items-center cursor-pointer">
    <img src={icon} alt={label} aria-label={label} className="h-6 w-6" />
    <span className="hidden lg:block">{label}</span>
  </li>
);
