import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className="h-[73px] flex items-center justify-between px-4 sm:px-10 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* MOBILE MENU */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-lg hover:bg-[#faf8f3] transition"
          aria-label="Open menu"
        >
          <span className="block w-5 h-[2px] bg-gray-700 mx-auto" />
          <span className="block w-5 h-[2px] bg-gray-700 mx-auto" />
          <span className="block w-5 h-[2px] bg-gray-700 mx-auto" />
        </button>

        <img
          className="w-[100px] sm:w-[115px] object-contain"
          src={assets.Noorza}
          alt="Noorza"
        />

        <div className="hidden sm:block h-6 w-px bg-gray-200" />

        <p className="hidden sm:block text-sm font-medium text-gray-500">
          Admin Dashboard
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex flex-col items-end">
          <p className="text-xs font-semibold text-gray-800">Administrator</p>

          <p className="text-[10px] text-gray-400">Noorza Store</p>
        </div>

        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#faf8f3] border border-[#ead9ad] flex items-center justify-center">
          <span className="text-[#8A6500] font-semibold">N</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
