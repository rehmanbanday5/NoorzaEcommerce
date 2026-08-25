import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { Package } from "lucide-react";

const Orders = () => {
  const { backendUrl, token, currency, navigate } =
    useContext(ShopContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = async () => {
    try {
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userOrders",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // ================= CUSTOMER NAME =================
  const getCustomerName = (order) => {
    return (
      order?.address?.firstName ||
      order?.address?.name ||
      order?.address?.fullName ||
      order?.userName ||
      order?.customerName ||
      "there"
    );
  };

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-gray-200 border-t-[#c89116] rounded-full animate-spin" />
      </div>
    );
  }

  // ================= NOT LOGGED IN =================
  if (!token) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#faf8f3]">
            <Package size={27} className="text-[#c89116]" />
          </div>

          <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
            Please Sign In
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Sign in to view your orders and track your deliveries.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-7 rounded-xl bg-[#111111] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c89116] hover:text-black"
          >
            SIGN IN
          </button>
        </div>
      </div>
    );
  }

  // ================= NO ORDERS =================
  if (orders.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#faf8f3]">
            <Package size={27} className="text-[#c89116]" />
          </div>

          <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
            No Orders Yet
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            You haven't placed an order yet. Find something you love and your
            order will appear here.
          </p>

          <button
            onClick={() => navigate("/collection")}
            className="mt-7 rounded-xl bg-[#111111] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c89116] hover:text-black"
          >
            START SHOPPING
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-12 sm:pt-16 pb-20">
      {/* ================= THANK YOU HEADER ================= */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="mx-auto flex items-center justify-center">
          <div className="h-px w-12 bg-[#c89116]/40" />

          <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#faf8f3]">
            <span className="text-lg text-[#c89116]">✦</span>
          </div>

          <div className="h-px w-12 bg-[#c89116]/40" />
        </div>

        <p className="mt-7 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-bold text-[#c89116]">
          Order Confirmed
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
          Thank You, {getCustomerName(orders[0])}
        </h1>

        <p className="mt-4 text-sm sm:text-base leading-7 text-gray-500">
          Thank you for shopping with Noorza. Your order has been placed and
          we’re getting it ready for you.
        </p>
      </div>

      {/* ================= ORDERS ================= */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16 px-4">
        <div className="space-y-6">
          {orders.map((order, orderIndex) => (
            <div
              key={order._id || orderIndex}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_35px_rgba(0,0,0,0.04)]"
            >
              {/* ================= PRODUCTS ================= */}
              <div className="divide-y divide-gray-100">
                {order.items.map((item, index) => (
                  <div key={index} className="group p-4 sm:p-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* PRODUCT IMAGE */}
                      <div className="relative shrink-0 overflow-hidden rounded-2xl bg-[#f8f8f6]">
                        <img
                          src={item.image?.[0]}
                          alt={item.name}
                          className="h-28 w-24 sm:h-36 sm:w-30 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* PRODUCT INFORMATION */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c89116]">
                              Noorza Collection
                            </p>

                            <h2 className="mt-1.5 text-base sm:text-lg font-semibold text-gray-900 leading-6 truncate">
                              {item.name}
                            </h2>
                          </div>

                          {/* PRICE */}
                          <p className="shrink-0 text-base sm:text-lg font-semibold text-gray-900">
                            {currency}
                            {item.price}
                          </p>
                        </div>

                        {/* PRODUCT META */}
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          <div className="flex items-center gap-2 rounded-lg bg-[#faf8f3] border border-[#ead9ad]/60 px-3 py-2">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400">
                              Size
                            </span>

                            <span className="text-xs font-semibold text-gray-900">
                              {item.size}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 rounded-lg bg-[#faf8f3] border border-[#ead9ad]/60 px-3 py-2">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400">
                              Quantity
                            </span>

                            <span className="text-xs font-semibold text-gray-900">
                              {item.quantity}
                            </span>
                          </div>
                        </div>

                        {/* ITEM TOTAL */}
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-xs text-gray-400">Item Total</p>

                          <p className="text-sm font-semibold text-gray-900">
                            {currency}
                            {item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= TRACK BUTTON ================= */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={() =>
              navigate(`/track-order/${orders[0]._id}`, {
                state: { order: orders[0] },
              })
            }
            className="group relative overflow-hidden rounded-xl bg-[#111111] px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-[#c89116] hover:text-black hover:shadow-xl"
          >
            <span className="relative block overflow-hidden h-[20px]">
              <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                Track Your Order
              </span>

              <span className="absolute left-0 top-full block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                Track Your Order
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
