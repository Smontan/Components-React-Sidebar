import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
} from "lucide-react";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          url={"/"}
          text="Dashboard"
        />
        <SidebarItem
          icon={<BarChart3 size={20} />}
          url={"/statistics"}
          text="Statistics"
          active
        />
        <SidebarItem
          icon={<Boxes size={20} />}
          url={"/inventory"}
          text="Inventory"
        />
        <SidebarItem
          icon={<Package size={20} />}
          url={"/orders"}
          text="Orders"
          alert
        />
        <SidebarItem
          icon={<Receipt size={20} />}
          url={"/billings"}
          text="Billings"
        />
        <hr className="my-3" />
        <SidebarItem
          icon={<Settings size={20} />}
          url={"/settings"}
          text="Settings"
        />
        <SidebarItem icon={<LifeBuoy size={20} />} url={"/help"} text="Help" />
      </Sidebar>
      <main className="flex-1 p-4 ">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
