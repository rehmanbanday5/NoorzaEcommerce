import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";

import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import Instagram from "./pages/Instagram";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "Rs";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : "",
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className="bg-[#f8f8f7] min-h-screen">
      <ToastContainer position="top-right" />

      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar />

          <div className="flex w-full">
            <Sidebar setToken={setToken} />

            <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-10 py-8">
              <Routes>
                {/* Dashboard */}
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />

                <Route
                  path="/dashboard"
                  element={<Dashboard token={token} />}
                />

                {/* Products */}
                <Route path="/products" element={<List token={token} />} />

                <Route path="/add" element={<Add token={token} />} />

                {/* Orders */}
                <Route path="/orders" element={<Orders token={token} />} />

                {/* Instagram */}
                <Route
                  path="/instagram"
                  element={<Instagram token={token} />}
                />

                {/* Settings */}
                <Route path="/settings" element={<Settings token={token} />} />

                {/* Old URLs */}
                <Route
                  path="/list"
                  element={<Navigate to="/products" replace />}
                />
              </Routes>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
