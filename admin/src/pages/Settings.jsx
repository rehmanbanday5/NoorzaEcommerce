import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Settings = ({ token }) => {
  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const changePassword = async (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirm) {
      toast.error("New passwords do not match.");
      return;
    }

    if (passwords.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        backendUrl + "/api/user/admin/change-password",
        {
          current: passwords.current,
          newPassword: passwords.newPassword,
        },
        {
          headers: {
            token,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setPasswords({
          current: "",
          newPassword: "",
          confirm: "",
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* HEADER */}

      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c89116]">
          Account
        </p>

        <h1 className="mt-1 text-3xl font-semibold text-gray-900">Settings</h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your admin account and security.
        </p>
      </div>

      {/* PASSWORD CARD */}

      <form
        onSubmit={changePassword}
        className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
      >
        <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-[#faf8f3] flex items-center justify-center text-[#8A6500] text-lg">
              🔐
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Change Password</h2>

              <p className="text-xs text-gray-400 mt-1">
                Update your admin password securely.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          {/* CURRENT */}

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              CURRENT PASSWORD
            </label>

            <input
              name="current"
              type="password"
              value={passwords.current}
              onChange={handlePasswordChange}
              placeholder="Enter current password"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-200 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
            />
          </div>

          {/* NEW */}

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              NEW PASSWORD
            </label>

            <input
              name="newPassword"
              type="password"
              value={passwords.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-200 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
            />
          </div>

          {/* CONFIRM */}

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              CONFIRM NEW PASSWORD
            </label>

            <input
              name="confirm"
              type="password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
              required
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-200 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
            />
          </div>

          <div className="rounded-xl border border-[#ead9ad] bg-[#faf8f3] p-4">
            <p className="text-xs font-semibold text-gray-700">
              Password Security
            </p>

            <p className="mt-1 text-[11px] leading-5 text-gray-500">
              Use at least 8 characters for your new admin password.
            </p>
          </div>
        </div>

        {/* BUTTON */}

        <div className="px-6 sm:px-8 py-5 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="group flex items-center gap-3 rounded-xl bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c89116] hover:shadow-lg hover:shadow-[#c89116]/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Updating...
              </>
            ) : (
              <>
                Change Password
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
