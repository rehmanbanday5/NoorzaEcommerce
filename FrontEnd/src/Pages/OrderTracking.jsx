import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, Package, Truck, ClipboardCheck } from "lucide-react";

const OrderTracking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order;

  if (!order) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Order not found
          </h2>

          <button
            onClick={() => navigate("/orders")}
            className="mt-6 bg-black text-white px-7 py-3 text-sm hover:bg-[#c89116] transition-all"
          >
            View My Orders
          </button>
        </div>
      </div>
    );
  }

  const steps = [
    {
      title: "Order Placed",
      description: "Your order has been received",
      icon: ClipboardCheck,
    },
    {
      title: "Processing",
      description: "Your order is being prepared",
      icon: Package,
    },
    {
      title: "Shipped",
      description: "Your order is on the way",
      icon: Truck,
    },
    {
      title: "Delivered",
      description: "Order delivered successfully",
      icon: Check,
    },
  ];

  const statusIndex = {
    "Order Placed": 0,
    Processing: 1,
    Shipped: 2,
    Delivered: 3,
  };

  const currentIndex = statusIndex[order.status] ?? 0;

  return (
    <div className="min-h-[75vh] py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#c89116]">
            Order Tracking
          </p>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Track Your Order
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Order #{order._id.slice(-8).toUpperCase()}
              </p>
            </div>

            <p className="text-sm text-gray-500">
              Current Status:{" "}
              <span className="font-semibold text-[#c89116]">
                {order.status}
              </span>
            </p>
          </div>
        </div>

        {/* TRACKING CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10">
          <div className="relative">
            {/* BACKGROUND LINE */}
            <div className="absolute left-[24px] right-[24px] top-[24px] h-[3px] bg-gray-200 hidden sm:block" />

            {/* ACTIVE LINE */}
            <div
              className="absolute left-[24px] top-[24px] h-[3px] bg-[#c89116] hidden sm:block transition-all duration-700"
              style={{
                width:
                  currentIndex === 0
                    ? "0%"
                    : `${(currentIndex / (steps.length - 1)) * 100}%`,
              }}
            />

            {/* STEPS */}
            <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                const completed = index <= currentIndex;
                const current = index === currentIndex;

                return (
                  <div
                    key={step.title}
                    className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-4"
                  >
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-md transition-all duration-500 ${
                        completed
                          ? "bg-[#c89116] text-white"
                          : "bg-gray-100 text-gray-400"
                      } ${current ? "ring-4 ring-[#c89116]/15 scale-105" : ""}`}
                    >
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          completed ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ORDER DETAILS */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              Delivery Address
            </p>

            <p className="mt-3 text-sm font-medium text-gray-900">
              {order.address.firstName} {order.address.lastName}
            </p>

            <p className="mt-1 text-sm text-gray-500">{order.address.street}</p>

            <p className="text-sm text-gray-500">{order.address.city}</p>

            <p className="mt-2 text-sm text-gray-500">{order.address.phone}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
              Order Summary
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Items</span>
                <span className="font-medium text-gray-900">
                  {order.items.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Payment</span>
                <span className="font-medium text-gray-900">
                  Cash On Delivery
                </span>
              </div>

              <div className="pt-3 border-t flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>

                <span className="font-semibold text-[#c89116]">
                  Rs {order.amount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
