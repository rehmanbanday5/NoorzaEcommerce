import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { Package, Box, Truck, MapPin, CheckCircle } from "lucide-react";

const Orders = () => {
  const { backendUrl, token, currency, navigate } = useContext(ShopContext);

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

  const steps = [
    {
      name: "Order Placed",
      icon: Package,
    },
    {
      name: "Packaging",
      icon: Box,
    },
    {
      name: "Shipped",
      icon: Truck,
    },
    {
      name: "Out for delivery",
      icon: MapPin,
    },
    {
      name: "Delivered",
      icon: CheckCircle,
    },
  ];

  const getStatusIndex = (status) => {
    const index = steps.findIndex(
      (step) => step.name.toLowerCase() === status?.toLowerCase(),
    );

    return index === -1 ? 0 : index;
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-gray-200 border-t-[#c89116] rounded-full animate-spin" />
      </div>
    );
  }

  if (!token) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#c89116]">
            My Orders
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-gray-900">
            No orders yet
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Sign in to view and track your orders.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-7 bg-[#111111] text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-[#c89116] transition-all"
          >
            Create Account
          </button>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#faf8f3] flex items-center justify-center">
            <Package size={28} className="text-[#c89116]" />
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] font-bold text-[#c89116]">
            My Orders
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-gray-900">
            No orders yet
          </h1>

          <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto">
            You haven't placed an order yet. Discover something you love and
            your orders will appear here.
          </p>

          <button
            onClick={() => navigate("/collection")}
            className="mt-7 bg-[#111111] text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-[#c89116] transition-all"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t pt-10 sm:pt-14 pb-16">
      {/* HEADER */}
      <div className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#c89116]">
          Account
        </p>

        <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">
          My Orders
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View your purchases and follow their delivery progress.
        </p>
      </div>

      {/* ORDERS */}
      <div className="space-y-8">
        {orders.map((order, orderIndex) => {
          const currentIndex = getStatusIndex(order.status);

          return (
            <div
              key={order._id || orderIndex}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* ORDER HEADER */}
              <div className="px-5 sm:px-7 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-400">
                    {new Date(order.date).toDateString()}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {order.items.length}{" "}
                    {order.items.length === 1 ? "Item" : "Items"}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">
                    Total
                  </p>

                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    {currency}
                    {order.amount}
                  </p>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="divide-y divide-gray-100">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 sm:px-7 flex items-center gap-5"
                  >
                    <img
                      src={item.image?.[0]}
                      alt={item.name}
                      className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl bg-gray-50"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-medium text-gray-900">
                        {item.name}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500">
                        <p>
                          Size:{" "}
                          <span className="text-gray-800 font-medium">
                            {item.size}
                          </span>
                        </p>

                        <p>
                          Quantity:{" "}
                          <span className="text-gray-800 font-medium">
                            {item.quantity}
                          </span>
                        </p>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-gray-900">
                        {currency}
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* TRACKING */}
              <div className="px-5 sm:px-7 py-7 bg-[#fafaf8] border-t border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Order Status
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {order.status}
                    </p>
                  </div>

                  <div className="rounded-full bg-[#faf8f3] px-3 py-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c89116]">
                      {order.paymentMethod}
                    </span>
                  </div>
                </div>

                {/* TIMELINE */}
                <div className="relative">
                  {/* BACKGROUND LINE */}
                  <div className="absolute top-5 left-[10%] right-[10%] h-[3px] bg-gray-200" />

                  {/* ACTIVE LINE */}
                  <div
                    className="absolute top-5 left-[10%] h-[3px] bg-[#c89116] transition-all duration-700"
                    style={{
                      width:
                        currentIndex === 0
                          ? "0%"
                          : `${(currentIndex / (steps.length - 1)) * 80}%`,
                    }}
                  />

                  <div className="relative flex justify-between">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      const completed = index <= currentIndex;

                      return (
                        <div
                          key={step.name}
                          className="flex flex-col items-center w-1/5"
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-[#fafaf8] transition-all duration-500 ${
                              completed
                                ? "bg-[#c89116] text-white"
                                : "bg-white text-gray-300 border-gray-200"
                            }`}
                          >
                            <Icon size={17} strokeWidth={2} />
                          </div>

                          <p
                            className={`mt-3 text-[9px] sm:text-[11px] text-center font-semibold leading-4 ${
                              completed ? "text-gray-900" : "text-gray-400"
                            }`}
                          >
                            {step.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* TRACK BUTTON */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() =>
                      navigate(`/track-order/${order._id}`, {
                        state: { order },
                      })
                    }
                    className="px-6 py-3 rounded-xl bg-[#111111] text-white text-xs font-semibold hover:bg-[#c89116] transition-all"
                  >
                    Track Your Order
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
