import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Search, UserRound, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div>
      {/* ---------------- Announcement Bar ---------------- */}
      <div className="relative left-1/2 -ml-[50vw] w-screen bg-[#c89116] overflow-hidden text-white">
        <div className="flex w-max animate-marquee whitespace-nowrap py-2 text-xs sm:text-sm font-medium">
          <div className="flex items-center shrink-0">
            <div className="flex items-center gap-3 mx-8">
              <span>✨</span>
              <span>Premium Comfort & Quality</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>🛡️</span>
              <span>Secure Cash On Delivery</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>💫</span>
              <span>Designed For Everyday Confidence</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>👩</span>
              <span>Only Women</span>
            </div>
          </div>

          <div className="flex items-center shrink-0">
            <div className="flex items-center gap-3 mx-8">
              <span>✨</span>
              <span>Premium Comfort & Quality</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>🛡️</span>
              <span>Secure Cash On Delivery</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>💫</span>
              <span>Designed For Everyday Confidence</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>👩</span>
              <span>Only Women</span>
            </div>
          </div>

          <div className="flex items-center shrink-0">
            <div className="flex items-center gap-3 mx-8">
              <span>✨</span>
              <span>Premium Comfort & Quality</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>🛡️</span>
              <span>Secure Cash On Delivery</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>💫</span>
              <span>Designed For Everyday Confidence</span>
            </div>

            <div className="flex items-center gap-3 mx-8">
              <span>👩</span>
              <span>Only Women</span>
            </div>

            <span className="mx-8">•</span>
          </div>
        </div>
      </div>
      {/* ---------------- Existing Navbar ---------------- */}
      <div className="flex items-center justify-between py-5 font-medium">
        <Link to="/">
          <img
            src={assets.Noorza}
            className="w-32 object-contain"
            alt="Noorza"
          />
        </Link>

        <ul className="hidden sm:flex gap-10 text-sm text-gray-700">
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 hover:text-[#c89116] transition ease-in-out"
          >
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1 hover:text-[#c89116] transition ease-in-out"
          >
            <p>BRA</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1 hover:text-[#c89116] transition ease-in-out"
          >
            <p>LINGERIE</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/about"
            className="flex flex-col items-center gap-1 hover:text-[#c89116] transition ease-in-out"
          >
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/contact"
            className="flex flex-col items-center gap-1 hover:text-[#c89116] transition ease-in-out"
          >
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1 hover:text-[#c89116] transition ease-in-out"
          >
            <p>
              ALL<span className="ml-2">COLLECTION</span>
            </p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <button
            aria-label="Search products"
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full text-gray-700 transition duration-200 hover:text-[#c89116]"
          >
            <Search size={20} />
          </button>

          <div className="group relative">
            <button
              aria-label="Profile"
              onClick={() => (token ? null : navigate("/login"))}
              className="p-2 rounded-full text-gray-700 transition duration-200 hover:text-[#c89116]"
            >
              <UserRound size={20} />
            </button>

            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-[#c89116]">
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-[#c89116]"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-[#c89116]"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <span className="p-2 rounded-full text-gray-700 transition duration-200 hover:text-[#D4AF37] inline-flex">
              <ShoppingBag size={20} />
            </span>

            {getCartCount() > 0 && (
              <p className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-[11px] font-black text-[#080B12] border-2 border-white">
                {getCartCount()}
              </p>
            )}
          </Link>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>

        {/* --------------SideBar Menu For Small Screen ------------------- */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt="DropDown"
              />
              <p>Back</p>
            </div>

            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
