import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { avatar, logo } from "../assets";

const SidebarContext = createContext();
const Sidebar = ({ children }) => {
  const [expand, setExpand] = useState(true);
  return (
    <aside className="h-screen w-fit">
      <nav className="flex flex-col justify-between h-full border-r shadow-sm bg-white">
        <div className="flex justify-between items-center p-4 pb-2">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expand ? "w-32" : "w-0"
            }`}
            alt="company logo"
          />
          <button
            onClick={() => setExpand((curr) => !curr)}
            className="p-1.5 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 "
          >
            {expand ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expand }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="flex p-3 border-t">
          <img
            src={avatar}
            className="w-10 h-10 rounded-md object-cover"
            alt="user avatar"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expand ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export function SidebarItem({ icon, text, alert, url}) {
  const { expand } = useContext(SidebarContext);
  return (
    <li
      
    >
      <NavLink to={url} className={({isActive}) => `flex items-center py-2 px-3 my-1 relative rounded-md font-medium transition-colors cursor-pointer group ${
        isActive
          ? "shadow-sm bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
          : "hover:bg-blue-50 text-gray-600"
      }`} >

      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expand ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
        className={`w-2 h-2 absolute right-2 rounded bg-blue-400 ${
          expand ? "" : "top-2"
        }`}
        />
      )}
      {!expand && (
        <div className="px-2 py-1 ml-6 absolute left-full rounded-md text-sm text-blue-900 bg-blue-100 opacity-20 -translate-x-3 invisible transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
          </NavLink>
    </li>
  );
}

export default Sidebar;
