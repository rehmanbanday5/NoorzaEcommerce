import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import {
  Check,
  Package,
  Truck,
  ClipboardCheck,
} from "lucide-react";

const OrderTracking = () => {
  const { backendUrl, token } = useContext(ShopContext);

  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [order, setOrder] = useState(location.state?.order || null);
  const [loading, setLoading] = useState(true);

  // ================= GET LATEST ORDER =================
  const fetchOrder = async () => {
    try {
      if (!token || !orderId) {
        setLoading(false);
        return;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userOrders",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        const latestOrder = response.data.orders.find(
          (item) => item._id === orderId,
        );

        if (latestOrder) {
          setOrder(latestOrder);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [token, orderId]);

  // ================= AUTO REFRESH =================
  useEffect(() => {
    if (!token || !orderId) return;

    const interval = setInterval(() => {
      fetchOrder();
    }, 5000);

    return () => clearInterval(interval);
  }, [token, orderId]);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-gray-200 border-t-[#c89116] rounded-full animate-spin" />
      </div>
    );
  }

  // ================= ORDER NOT FOUND =================
  if (!order) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Order not found
          </h2>

          <button
            onClick={() => navigate("/orders")}
            className="mt-6 rounded-xl bg-black px-7 py-3 text-sm text-white transition-all hover:bg-[#c89116] hover:text-black"
          >
            View My Orders
          </button>
        </div>
      </div>
    );
  }

  // ================= SAME STATUSES AS ADMIN =================
  const steps = [
    {
      title: "Order Placed",
      description: "Your order has been received",
      icon: ClipboardCheck,
    },
    {
      title: "Packaging",
      description: "Your order is being prepared",
      icon: Package,
    },
    {
      title: "Shipped",
      description: "Your order is on the way",
      icon: Truck,
    },
    {
      title: "Out For Delivery",
      description: "Your order is out for delivery",
      icon: Truck,
    },
    {
      title: "Delivered",
      description: "Order delivered successfully",
      icon: Check,
    },
  ];

  // ================= STATUS MAPPING =================
  const statusIndex = {
    "Order Placed": 0,
    Packaging: 1,
    Shipped: 2,
    "Out For Delivery": 3,
    Delivery: 4,
  };

  const currentIndex = statusIndex[order.status] ?? 0;

const statusColors = [
  {
    bg: "bg-[#fffdf2]",
    text: "text-[#d8b84c]",
    border: "border-[#f5e9ad]",
    ring: "ring-[#f5e9ad]/30",
  },
  {
    bg: "bg-[#fff8d9]",
    text: "text-[#c9a52e]",
    border: "border-[#ead27a]",
    ring: "ring-[#ead27a]/30",
  },
  {
    bg: "bg-[#c89116]",
    text: "text-white",
    border: "border-[#c89116]",
    ring: "ring-[#c89116]/20",
  },
  {
    bg: "bg-[#eaf8ed]",
    text: "text-[#5eaa6b]",
    border: "border-[#bfe3c5]",
    ring: "ring-[#bfe3c5]/30",
  },
  {
    bg: "bg-[#2f9e44]",
    text: "text-white",
    border: "border-[#2f9e44]",
    ring: "ring-[#2f9e44]/20",
  },
];


  return (
    <div className="min-h-[75vh] py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A6500]">
            Order Tracking
          </p>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Track Your Order
              </h1>
            </div>

            <p className="text-sm text-gray-500">
              Current Status:{" "}
              <span className="font-semibold text-[#8A6500]">
                {order.status}
              </span>
            </p>
          </div>
        </div>

        {/* ================= TRACKING CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
          <div className="relative">
            {/* BACKGROUND LINE */}
            <div className="absolute left-[10%] right-[10%] top-[24px] h-[3px] bg-gray-200 hidden sm:block" />

            {/* ================= COLORED PROGRESS SEGMENTS ================= */}
            <div className="absolute left-[10%] right-[10%] top-[24px] h-[3px] hidden sm:flex">
              {/* ORDER PLACED → PACKAGING */}
              <div
                className={`h-full flex-1 transition-all duration-700 ${
                  currentIndex >= 1 ? "bg-[#f5e9ad]" : "bg-gray-200"
                }`}
              />

              {/* PACKAGING → SHIPPED */}
              <div
                className={`h-full flex-1 transition-all duration-700 ${
                  currentIndex >= 2 ? "bg-[#ead27a]" : "bg-gray-200"
                }`}
              />

              {/* SHIPPED → OUT FOR DELIVERY */}
              <div
                className={`h-full flex-1 transition-all duration-700 ${
                  currentIndex >= 3 ? "bg-[#bfe3c5]" : "bg-gray-200"
                }`}
              />

              {/* OUT FOR DELIVERY → DELIVERED */}
              <div
                className={`h-full flex-1 transition-all duration-700 ${
                  currentIndex >= 4 ? "bg-[#2f9e44]" : "bg-gray-200"
                }`}
              />
            </div>

            {/* STEPS */}
            {/* STEPS */}
            <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                const completed = index <= currentIndex;
                const current = index === currentIndex;

                // Har step ka apna color
                const stepColor = statusColors[index];

                return (
                  <div
                    key={step.title}
                    className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-4"
                  >
                    {/* ICON */}
                    <div
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-md transition-all duration-700 ${
                        completed
                          ? `${stepColor.bg} ${stepColor.text}`
                          : "bg-gray-100 text-gray-400"
                      } ${current ? `ring-4 ${stepColor.ring} scale-105` : ""}`}
                    >
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    {/* TEXT */}
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

        {/* ================= ORDER DETAILS ================= */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* DELIVERY ADDRESS */}
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

          {/* ORDER SUMMARY */}
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

                <span className="font-semibold text-[#8A6500]">
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
