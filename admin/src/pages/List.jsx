import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        {
          headers: { token },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#c89116]">
            Store Management
          </p>

          <h1 className="mt-1 text-3xl font-semibold text-gray-900">
            Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage all products available in your Noorza store.
          </p>
        </div>

        <button
          onClick={() => navigate("/add")}
          className="group flex items-center justify-center gap-3 rounded-xl bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c89116] hover:shadow-xl"
        >
          <span className="text-lg">+</span>
          Add Product
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* Product count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{list.length}</span>{" "}
          products
        </p>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-[80px_2fr_1fr_1fr_100px] items-center gap-4 px-5 py-3 rounded-t-2xl bg-[#111111] text-xs uppercase tracking-wider text-gray-300">
        <span>Image</span>
        <span>Product</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      {/* Products */}
      <div className="bg-white border border-gray-200 md:border-t-0 rounded-2xl md:rounded-t-none overflow-hidden">
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[70px_1fr] md:grid-cols-[80px_2fr_1fr_1fr_100px] items-center gap-4 px-4 sm:px-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-[#faf8f3] transition-colors"
          >
            <img
              className="w-14 h-14 object-cover rounded-xl border border-gray-100"
              src={item.image[0]}
              alt={item.name}
            />

            <div>
              <p className="font-medium text-sm text-gray-900">{item.name}</p>

              <p className="text-xs text-gray-400 mt-1 md:hidden">
                {item.category} · {currency} {item.price}
              </p>
            </div>

            <p className="hidden md:block text-sm text-gray-500">
              {item.category}
            </p>

            <p className="hidden md:block text-sm font-semibold text-[#c89116]">
              {currency} {item.price}
            </p>

            <button
              onClick={() => removeProduct(item._id)}
              className="col-start-2 md:col-start-auto justify-self-end md:justify-self-center h-9 w-9 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
              title="Remove product"
            >
              ×
            </button>
          </div>
        ))}

        {list.length === 0 && (
          <div className="py-20 text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-[#faf8f3] flex items-center justify-center text-[#c89116] text-xl">
              ▣
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              No Products Yet
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Add your first product to the store.
            </p>

            <button
              onClick={() => navigate("/add")}
              className="mt-5 rounded-xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white hover:bg-[#c89116] transition-colors"
            >
              Add Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
