import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  // ================= ACTIVE NAVBAR LINK =================
  const isActive = (path, search = "") => {
    return location.pathname === path && location.search === search;
  };

  const navClass = (active) =>
    `flex flex-col items-center gap-1 transition ease-in-out ${
      active ? "text-[#c89116]" : "text-gray-700 hover:text-[#c89116]"
    }`;

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
        {/* LOGO */}
        <Link to="/">
          <img
            src={assets.Noorza}
            className="w-32 object-contain"
            alt="Noorza"
          />
        </Link>

        {/* ================= DESKTOP NAVBAR ================= */}
        <ul className="hidden sm:flex gap-10 text-sm">
          {/* HOME */}
          <NavLink to="/" className={navClass(isActive("/", ""))}>
            <p>HOME</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/", "") ? "block" : "hidden"
              }`}
            />
          </NavLink>

          {/* BRA */}
          <NavLink
            to="/collection?category=Bra"
            className={navClass(isActive("/collection", "?category=Bra"))}
          >
            <p>BRA</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/collection", "?category=Bra") ? "block" : "hidden"
              }`}
            />
          </NavLink>

          {/* BRA SETS */}
          <NavLink
            to="/collection?category=Bra%20Sets"
            className={navClass(
              isActive("/collection", "?category=Bra%20Sets"),
            )}
          >
            <p>BRA SETS</p>

            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/collection", "?category=Bra%20Sets")
                  ? "block"
                  : "hidden"
              }`}
            />
          </NavLink>

          {/* LINGERIE */}
          <NavLink
            to="/collection?category=Lingerie"
            className={navClass(isActive("/collection", "?category=Lingerie"))}
          >
            <p>LINGERIE</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/collection", "?category=Lingerie")
                  ? "block"
                  : "hidden"
              }`}
            />
          </NavLink>

          {/* NIGHTWEAR */}
          <NavLink
            to="/collection?category=Nightwear"
            className={navClass(isActive("/collection", "?category=Nightwear"))}
          >
            <p>NIGHTWEAR</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/collection", "?category=Nightwear")
                  ? "block"
                  : "hidden"
              }`}
            />
          </NavLink>

          {/* ABOUT */}
          <NavLink to="/about" className={navClass(isActive("/about", ""))}>
            <p>ABOUT</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/about", "") ? "block" : "hidden"
              }`}
            />
          </NavLink>

          {/* CONTACT */}
          <NavLink to="/contact" className={navClass(isActive("/contact", ""))}>
            <p>CONTACT</p>
            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/contact", "") ? "block" : "hidden"
              }`}
            />
          </NavLink>

          {/* ALL COLLECTION */}
          <NavLink
            to="/collection"
            className={navClass(isActive("/collection", ""))}
          >
            <p>
              SHOP<span className="ml-2">ALL</span>
            </p>

            <hr
              className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                isActive("/collection", "") ? "block" : "hidden"
              }`}
            />
          </NavLink>
        </ul>

        {/* ================= RIGHT ICONS ================= */}
        <div className="flex items-center gap-6">
          {/* SEARCH */}
          <button
            aria-label="Search products"
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full text-gray-700 transition duration-200 hover:text-[#c89116]"
          >
            <Search size={20} />
          </button>

          {/* PROFILE */}
          {/* PROFILE */}
          <div className="group relative">
            <button
              aria-label="Profile"
              onClick={() => (token ? null : navigate("/login"))}
              className="p-2 rounded-full text-gray-700 transition duration-200 hover:text-[#c89116]"
            >
              <UserRound size={20} />
            </button>

            {/* PROFILE DROPDOWN */}
            <div className="group-hover:block hidden absolute right-0 top-full pt-4 z-50">
              <div className="w-48 rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.10)]">
                {token ? (
                  <>
                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition-all hover:bg-[#faf8f3] hover:text-[#c89116]"
                    >
                      My Profile
                    </button>

                    <button
                      onClick={() => navigate("/orders")}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition-all hover:bg-[#faf8f3] hover:text-[#c89116]"
                    >
                      Orders
                    </button>

                    <div className="my-1 border-t border-gray-100" />

                    <button
                      onClick={logout}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm text-red-500 transition-all hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => navigate("/login")}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition-all hover:bg-[#faf8f3] hover:text-[#c89116]"
                    >
                      Sign In
                    </button>

                    <button
                      onClick={() => navigate("/orders")}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition-all hover:bg-[#faf8f3] hover:text-[#c89116]"
                    >
                      Orders
                    </button>

                    <div className="my-1 border-t border-gray-100" />

                    <button
                      onClick={() => navigate("/register")}
                      className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#c89116] transition-all hover:bg-[#faf8f3]"
                    >
                      Create Account
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CART */}
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

          {/* MOBILE MENU */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>

        {/* ================= MOBILE SIDEBAR ================= */}
        <div
          className={`fixed top-0 right-0 bottom-0 z-[100] overflow-y-auto bg-white transition-all duration-300 ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex min-h-full flex-col text-gray-600">
            {/* BACK */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-5 cursor-pointer border-b border-gray-100"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt="Back"
              />
              <p className="text-sm font-medium">Back</p>
            </div>

            {/* HOME */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/"
            >
              HOME
            </NavLink>

            {/* BRA */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/collection?category=Bra"
            >
              BRA
            </NavLink>

            {/* BRA SETS */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/collection?category=Bra%20Sets"
            >
              BRA SETS
            </NavLink>

            {/* LINGERIE */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/collection?category=Lingerie"
            >
              LINGERIE
            </NavLink>

            {/* NIGHTWEAR */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/collection?category=Nightwear"
            >
              NIGHTWEAR
            </NavLink>

            {/* SHOP ALL */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/collection"
            >
              SHOP ALL
            </NavLink>

            {/* ABOUT */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
              to="/about"
            >
              ABOUT
            </NavLink>

            {/* CONTACT */}
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-6 border-b border-gray-100 text-sm font-medium"
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

