import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const Dashboard = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const productsResponse = await axios.get(
        backendUrl + "/api/product/list",
      );

      if (productsResponse.data.success) {
        setProducts(productsResponse.data.products);
      }

      const ordersResponse = await axios.post(
        backendUrl + "/api/order/list",
        {},
        {
          headers: { token },
        },
      );

      if (ordersResponse.data.success) {
        setOrders(ordersResponse.data.orders);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [token]);

  const totalRevenue = orders.reduce(
    (total, order) => total + Number(order.amount || 0),
    0,
  );

  const paidOrders = orders.filter((order) => order.payment === true).length;

  const pendingPayments = orders.filter(
    (order) => order.payment !== true,
  ).length;

  const stats = [
    {
      title: "Total Products",
      value: products.length,
      icon: "▣",
      description: "Products in store",
    },
    {
      title: "Total Orders",
      value: orders.length,
      icon: "▤",
      description: "All customer orders",
    },
    {
      title: "Paid Orders",
      value: paidOrders,
      icon: "✓",
      description: "Payments completed",
    },
    {
      title: "Pending Payments",
      value: pendingPayments,
      icon: "◷",
      description: "Awaiting payment",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c89116]">
          Overview
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h1 className="mt-1 text-3xl font-semibold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Welcome back. Here's what's happening with your Noorza store.
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs text-gray-500">
            Store Overview
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="group bg-white rounded-2xl border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-[11px] text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className="h-11 w-11 rounded-xl bg-[#faf8f3] flex items-center justify-center text-[#c89116] text-lg group-hover:bg-[#c89116] group-hover:text-white transition-all">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue */}
      <div className="mt-5 bg-[#111111] rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#c89116]/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c89116] font-semibold">
            Total Order Value
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            {currency} {totalRevenue.toLocaleString()}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Combined value of all orders
          </p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-900">Recent Orders</h2>

            <p className="text-xs text-gray-400 mt-1">
              Latest customer activity
            </p>
          </div>

          <span className="text-xs text-[#c89116] font-semibold">
            {orders.length} Orders
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {orders.slice(0, 5).map((order) => (
            <div
              key={order._id}
              className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-[#faf8f3] transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {order.address.firstName} {order.address.lastName}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {order.items.length} item
                  {order.items.length !== 1 ? "s" : ""} ·{" "}
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-sm font-semibold text-gray-900">
                  {currency} {order.amount}
                </p>

                <span className="px-3 py-1 rounded-full bg-[#faf8f3] text-[#c89116] text-[10px] font-semibold">
                  {order.status}
                </span>
              </div>
            </div>
          ))}

          {orders.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-gray-700">No orders yet</p>

              <p className="text-xs text-gray-400 mt-1">
                Customer orders will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
