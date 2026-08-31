import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { order, customerName } = location.state || {};

  if (!order) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Order information unavailable
          </h2>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-black text-white px-8 py-3 text-sm hover:bg-[#c89116] transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[75vh] py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* SUCCESS HEADER */}
        <div className="text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-[#c89116]/10 flex items-center justify-center">
            <CheckCircle
              size={42}
              className="text-[#c89116]"
              strokeWidth={1.8}
            />
          </div>

          <p className="mt-7 text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A6500]">
            Order Confirmed
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-gray-900">
            Thank You, {customerName}
          </h1>

          <p className="mt-3 text-sm text-gray-500 max-w-md mx-auto leading-6">
            Your order has been successfully placed. We’ll keep you updated as
            your order moves through each stage.
          </p>

          <p className="mt-3 text-xs text-gray-400">
            Order ID:{" "}
            <span className="font-medium text-gray-600">
              #{order._id.slice(-8).toUpperCase()}
            </span>
          </p>
        </div>

        {/* ORDER CARD */}
        <div className="mt-12 bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-6 sm:px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#faf8f3] flex items-center justify-center">
              <Package size={19} className="text-[#c89116]" />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Order Summary</h2>

              <p className="text-xs text-gray-400 mt-0.5">
                {order.items.length} item
                {order.items.length > 1 ? "s" : ""} in your order
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {order.items.map((item, index) => (
              <div key={index} className="p-6 sm:px-8 flex gap-5">
                <img
                  src={item.image?.[0]}
                  alt={item.name}
                  className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl bg-gray-50"
                />

                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">
                    {item.name}
                  </h3>

                  <div className="mt-2 space-y-1 text-xs text-gray-500">
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
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  Rs {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="px-6 sm:px-8 py-5 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Payment
              </p>

              <p className="mt-1 text-sm font-medium text-gray-800">
                Cash On Delivery
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Total
              </p>

              <p className="mt-1 text-xl font-semibold text-gray-900">
                Rs {order.amount}
              </p>
            </div>
          </div>
        </div>

        {/* TRACK BUTTON */}
        <div className="mt-8 text-center">
          <button
            onClick={() =>
              navigate(`/track-order/${order._id}`, {
                state: { order },
              })
            }
            className="group inline-flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-3.5 text-sm font-semibold rounded-xl hover:bg-[#c89116] transition-all duration-300"
          >
            Track Your Order
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={() => navigate("/")}
            className="block mx-auto mt-4 text-xs text-gray-400 hover:text-[#8A6500] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
