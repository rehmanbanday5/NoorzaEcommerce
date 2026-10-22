import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const paymentStatusHandler = async (event, orderId) => {
    const paymentStatus = event.target.value;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/payment-status",
        { orderId, paymentStatus },
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success("Payment status updated.");
      } else {
        toast.error(response.data.message || "Unable to update payment.");
      }

      await fetchAllOrders();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to update payment.",
      );
      await fetchAllOrders();
    }
  };

  const deleteHandler = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) {
      return;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/delete",
        { orderId },
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success("Order deleted successfully");
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-2 pb-8 text-gray-800 sm:p-4">
      <h2 className="mb-2 text-2xl font-semibold">Orders</h2>
      <p className="mb-6 text-sm text-gray-500">
        View customer details, products and manage orders.
      </p>

      {orders.length === 0 ? (
        <p className="rounded-lg border bg-white p-6 text-sm text-gray-500">
          No orders found.
        </p>
      ) : (
        <div className="space-y-5">
          {orders.map((order, index) => (
            <div
              key={order._id || index}
              className="rounded-lg border border-gray-200 bg-white p-4 sm:p-5"
            >
              {/* ORDER TOP */}
              <div className="mb-4 flex items-center gap-3 border-b pb-4">
                <img src={assets.parcel_icon} alt="" className="w-10" />

                <div>
                  <p className="font-semibold text-gray-900">
                    Order #{index + 1}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Date: {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* CUSTOMER AND PRODUCTS */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* CUSTOMER DETAILS */}
                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Customer Details
                  </h3>

                  <div className="space-y-2 break-words text-sm text-gray-600">
                    <p>
                      <span className="font-medium text-gray-800">Name: </span>
                      {order.address.firstName} {order.address.lastName}
                    </p>

                    <p>
                      <span className="font-medium text-gray-800">Phone: </span>
                      {order.address.phone}
                    </p>

                    <p>
                      <span className="font-medium text-gray-800">
                        Address:{" "}
                      </span>
                      {order.address.street}
                    </p>

                    <p>
                      {order.address.city}, {order.address.postalcode}
                    </p>
                  </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-3 font-semibold text-gray-900">
                    Product Details
                  </h3>

                  <div className="space-y-3">
                    {order.items.map((item, itemIndex) => (
                      <div
                        key={item._id || itemIndex}
                        className="border-b border-gray-200 pb-3 last:border-0 last:pb-0"
                      >
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-sm text-gray-600">
                          Size: {item.size} | Quantity: {item.quantity}
                        </p>

                        <p className="mt-1 text-sm font-medium text-gray-800">
                          Price: {currency}
                          {item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PAYMENT DETAILS */}
              <div className="mt-5 rounded-lg border border-gray-200 p-4">
                <h3 className="mb-3 font-semibold text-gray-900">
                  Payment Details
                </h3>

                <p className="mb-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-800">Method: </span>
                  {order.paymentMethod}
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  <span className="font-medium text-gray-800">
                    Total Amount:{" "}
                  </span>
                  <span className="font-semibold text-gray-900">
                    {currency}
                    {order.amount}
                  </span>
                </p>

                {order.paymentMethod === "COD" ? (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-800">Payment: </span>
                    Pay on delivery
                  </p>
                ) : (
                  <>
                    <p className="mb-3 break-all text-sm text-gray-600">
                      <span className="font-medium text-gray-800">
                        Transaction ID:{" "}
                      </span>
                      {order.transactionId || "Not provided"}
                    </p>

                    <label className="mb-1 block text-sm font-medium">
                      Payment Status
                    </label>

                    <select
                      value={
                        ["Pending", "Submitted"].includes(order.paymentStatus)
                          ? "Pending"
                          : order.paymentStatus || "Pending"
                      }
                      onChange={(event) =>
                        paymentStatusHandler(event, order._id)
                      }
                      className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm"
                    >
                      <option value="Pending">Payment Pending</option>
                      <option value="Verified">Payment Successful</option>
                      <option value="Rejected">Payment Unsuccessful</option>
                    </select>
                  </>
                )}
              </div>

              {/* ORDER STATUS */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Delivery Status
                </label>

                <select
                  value={order.status}
                  onChange={(event) => statusHandler(event, order._id)}
                  className="w-full rounded-md border border-gray-300 bg-white p-3 text-sm"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packaging">Packaging</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out For Delivery">Out for Delivery</option>
                  <option value="Delivery">Delivered</option>
                </select>
              </div>

              {/* DELETE BUTTON */}
              <div className="mt-4 flex justify-end border-t pt-4">
                <button
                  onClick={() => deleteHandler(order._id)}
                  className="rounded-md border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
