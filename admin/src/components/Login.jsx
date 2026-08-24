import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Login");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      if (currentState === "Login") {
        const response = await axios.post(
          backendUrl + "/api/user/admin",
          {
            email,
            password,
          }
        );

        if (response.data.success) {
          setToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          backendUrl + "/api/user/admin",
          {
            email,
            password,
          }
        );

        if (response.data.success) {
          setToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#c89116]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#c89116]/10 blur-3xl" />

      {/* Main Login Card */}
      <div className="relative w-full max-w-[1050px] min-h-[620px] bg-white rounded-[28px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.10)] border border-gray-100 flex flex-col lg:flex-row">

        {/* LEFT BRAND SECTION */}
        <div className="relative lg:w-[48%] bg-[#111111] overflow-hidden flex items-center justify-center p-10 sm:p-14">

          {/* Decorative circles */}
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full border border-[#c89116]/20" />

          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#c89116]/10" />

          <div className="absolute top-20 right-20 h-2 w-2 rounded-full bg-[#c89116]" />

          <div className="absolute bottom-28 right-16 h-1.5 w-1.5 rounded-full bg-white/30" />

          <div className="relative z-10 text-center lg:text-left max-w-md">

            {/* Logo */}
            <div className="mb-10 flex justify-center lg:justify-start">
              <div className="bg-white rounded-2xl px-6 py-4 shadow-2xl">
                <img
                  src={assets.Noorza}
                  className="w-36 object-contain"
                  alt="Noorza"
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">

              <span className="h-1.5 w-1.5 rounded-full bg-[#c89116]" />

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#c89116] font-bold">
                Noorza Administration
              </p>

            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              Manage your
              <span className="block text-[#c89116] mt-1">
                store with confidence.
              </span>
            </h1>

            <p className="mt-6 text-sm leading-7 text-gray-400 max-w-sm">
              Manage products, orders, Instagram content and your store
              settings from one secure administration panel.
            </p>

            {/* Features */}
            <div className="mt-9 grid grid-cols-2 gap-3">

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[#c89116] text-lg mb-2">
                  ✦
                </p>

                <p className="text-xs font-semibold text-white">
                  Store Control
                </p>

                <p className="mt-1 text-[10px] text-gray-500">
                  Everything in one place
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[#c89116] text-lg mb-2">
                  ◈
                </p>

                <p className="text-xs font-semibold text-white">
                  Secure Access
                </p>

                <p className="mt-1 text-[10px] text-gray-500">
                  Protected admin panel
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="flex-1 flex items-center justify-center p-7 sm:p-12 lg:p-16">

          <div className="w-full max-w-[410px]">

            {/* Heading */}
            <div className="mb-9">

              <div className="inline-flex items-center gap-2 rounded-full bg-[#faf8f3] border border-[#ead9ad] px-3 py-1.5">

                <span className="h-1.5 w-1.5 rounded-full bg-[#c89116]" />

                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#c89116]">
                  Admin Portal
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-semibold text-gray-900 tracking-tight">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Sign in to continue to your Noorza dashboard.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={onSubmitHandler}
              className="space-y-5"
            >

              {/* Email */}
              <div>

                <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-2">
                  Email Address
                </label>

                <div className="relative group">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#c89116] transition-colors">
                    @
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
                    placeholder="admin@example.com"
                    required
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Password
                  </label>

                </div>

                <div className="relative group">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#c89116] transition-colors">
                    ●
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-14 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg text-gray-400 hover:bg-[#faf8f3] hover:text-[#c89116] transition-all"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "◉" : "○"}
                  </button>

                </div>

              </div>

              {/* Security Note */}
              <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#faf8f3] text-[#c89116]">
                  🔒
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    Secure Admin Access
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-gray-400">
                    This area is restricted to authorized Noorza
                    administrators.
                  </p>
                </div>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-[#111111] py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c89116] hover:shadow-xl hover:shadow-[#c89116]/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >

                <span className="relative z-10 flex items-center justify-center gap-3">

                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}

                </span>

              </button>

            </form>

            {/* Footer */}
            <div className="mt-9 pt-6 border-t border-gray-100 text-center">

              <p className="text-[10px] text-gray-400">
                © {new Date().getFullYear()} Noorza
              </p>

              <p className="mt-1 text-[10px] text-gray-300">
                Authorized personnel only
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;


