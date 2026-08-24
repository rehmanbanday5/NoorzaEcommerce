import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = ({ setToken }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "⌂",
    },
    {
      name: "Products",
      path: "/products",
      icon: "▣",
    },
    {
      name: "Orders",
      path: "/orders",
      icon: "▤",
    },
    {
      name: "Instagram",
      path: "/instagram",
      icon: "◎",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <aside className="w-[250px] shrink-0 min-h-[calc(100vh-73px)] border-r border-gray-200 bg-white hidden md:flex flex-col">
      {/* Sidebar Header */}
      <div className="px-6 py-7 border-b border-gray-100">
        <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#c89116]">
          Noorza Admin
        </p>

        <h2 className="mt-1 text-lg font-semibold text-gray-900">
          Control Panel
        </h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <p className="px-3 mb-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">
          Main Menu
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#c89116] text-white shadow-lg shadow-[#c89116]/20"
                    : "text-gray-600 hover:bg-[#faf8f3] hover:text-[#c89116]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg transition-all ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-gray-50 text-gray-500 group-hover:text-[#c89116]"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm font-medium">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={logout}
          className="group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500 group-hover:bg-red-100 group-hover:text-red-500">
            ↪
          </span>

          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
