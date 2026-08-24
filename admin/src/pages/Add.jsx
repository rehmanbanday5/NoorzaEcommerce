import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Bra");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setCategory("Bra");
        setBestseller(false);
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const imageCards = [
    {
      id: "image1",
      image: image1,
      setImage: setImage1,
      number: "01",
    },
    {
      id: "image2",
      image: image2,
      setImage: setImage2,
      number: "02",
    },
    {
      id: "image3",
      image: image3,
      setImage: setImage3,
      number: "03",
    },
    {
      id: "image4",
      image: image4,
      setImage: setImage4,
      number: "04",
    },
  ];

  const categories = ["Bra", "Bra Sets", "Lingerie", "Nightwear", "Shop All"];

  const availableSizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-6xl mx-auto pb-12">
      {/* =========================================================
          PAGE HEADER
      ========================================================= */}
      <div className="relative mb-8 overflow-hidden rounded-2xl bg-[#111111] px-6 py-7 sm:px-8">
        <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#c89116]/10 blur-2xl" />
        <div className="absolute -bottom-20 right-24 h-36 w-36 rounded-full bg-[#c89116]/10 blur-2xl" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c89116]" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c89116] font-semibold">
                Noorza Admin
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Add New Product
            </h1>

            <p className="mt-2 text-sm text-gray-400 max-w-lg">
              Create a new product and make it available in your Noorza store.
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center h-14 w-14 rounded-2xl border border-white/10 bg-white/5">
            <span className="text-2xl text-[#c89116]">✦</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          IMAGE UPLOAD SECTION
      ========================================================= */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="px-6 py-5 sm:px-8 border-b border-gray-100">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#faf8f3] text-[#c89116] text-sm font-bold">
                  01
                </span>

                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                  Product Images
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-2 ml-11">
                Upload clear images of your product.
              </p>
            </div>

            <span className="hidden sm:block text-xs text-gray-400">
              Up to 4 images
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {imageCards.map((item) => (
              <label
                key={item.id}
                htmlFor={item.id}
                className="group relative cursor-pointer"
              >
                <div
                  className={`relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${
                    item.image
                      ? "border-[#c89116] bg-[#faf8f3]"
                      : "border-gray-200 bg-gray-50 hover:border-[#c89116] hover:bg-[#faf8f3]"
                  }`}
                >
                  <img
                    className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    src={
                      !item.image
                        ? assets.upload_area
                        : URL.createObjectURL(item.image)
                    }
                    alt=""
                  />

                  {!item.image && (
                    <div className="absolute inset-x-0 bottom-4 text-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">
                        Image {item.number}
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                    <span className="scale-75 opacity-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      {item.image ? "Change Image" : "Upload Image"}
                    </span>
                  </div>

                  {item.image && (
                    <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#c89116] text-white shadow-md">
                      ✓
                    </div>
                  )}
                </div>

                <input
                  onChange={(e) => item.setImage(e.target.files[0])}
                  type="file"
                  id={item.id}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          PRODUCT INFORMATION
      ========================================================= */}
      <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="px-6 py-5 sm:px-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#faf8f3] text-[#c89116] text-sm font-bold">
              02
            </span>

            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Product Information
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Add the name and description customers will see.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* PRODUCT NAME */}
          <div>
            <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-2">
              Product Name
            </label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
              type="text"
              placeholder="e.g. Premium Lace Bra"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
                Product Description
              </label>

              <span className="text-[11px] text-gray-400">
                Describe the product clearly
              </span>
            </div>

            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="w-full min-h-[150px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-7 text-gray-800 outline-none resize-y transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
              placeholder="Write a detailed product description..."
              required
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          CATEGORY + PRICE
      ========================================================= */}
      <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="px-6 py-5 sm:px-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#faf8f3] text-[#c89116] text-sm font-bold">
              03
            </span>

            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Product Details
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Choose where this product belongs and set its price.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* CATEGORY */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-2">
                Category
              </label>

              <div className="relative">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="appearance-none w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-10 text-sm font-medium text-gray-800 outline-none cursor-pointer transition-all duration-200 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  ↓
                </span>
              </div>
            </div>

            {/* PRICE */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-2">
                Product Price
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#c89116]">
                  PKR
                </span>

                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-14 pr-4 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
                  type="number"
                  placeholder="2500"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SIZES
      ========================================================= */}
      <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="px-6 py-5 sm:px-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#faf8f3] text-[#c89116] text-sm font-bold">
              04
            </span>

            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Available Sizes
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Select every size available for this product.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-3">
            {availableSizes.map((size) => {
              const selected = sizes.includes(size);

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((item) => item !== size)
                        : [...prev, size],
                    )
                  }
                  className={`relative min-w-[58px] rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                    selected
                      ? "border-[#c89116] bg-[#c89116] text-white shadow-lg shadow-[#c89116]/20 -translate-y-0.5"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:-translate-y-0.5 hover:border-[#c89116] hover:bg-[#faf8f3] hover:text-[#c89116]"
                  }`}
                >
                  {size}

                  {selected && (
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold text-[#c89116] shadow">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {sizes.length > 0 && (
            <p className="mt-4 text-xs text-gray-400">
              {sizes.length} size{sizes.length > 1 ? "s" : ""} selected
            </p>
          )}
        </div>
      </div>

      {/* =========================================================
          BESTSELLER
      ========================================================= */}
      <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8">
          <label
            htmlFor="bestseller"
            className={`group flex items-center justify-between gap-5 cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
              bestseller
                ? "border-[#c89116] bg-[#faf8f3]"
                : "border-gray-200 bg-gray-50 hover:border-[#c89116] hover:bg-[#faf8f3]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                  bestseller
                    ? "bg-[#c89116] text-white shadow-lg shadow-[#c89116]/20"
                    : "bg-white text-gray-400 group-hover:text-[#c89116]"
                }`}
              >
                ★
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Add to Best Sellers
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Highlight this product in the store's bestseller section.
                </p>
              </div>
            </div>

            <div className="relative shrink-0">
              <input
                onChange={() => setBestseller((prev) => !prev)}
                checked={bestseller}
                type="checkbox"
                id="bestseller"
                className="peer sr-only"
              />

              <div
                className={`h-7 w-12 rounded-full transition-all duration-300 ${
                  bestseller ? "bg-[#c89116]" : "bg-gray-300"
                }`}
              />

              <div
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300 ${
                  bestseller ? "left-6" : "left-1"
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* =========================================================
          SUBMIT AREA
      ========================================================= */}
      <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-gray-400">
          Make sure all product information is correct before adding.
        </p>

        <button
          type="submit"
          className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#111111] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c89116] hover:shadow-xl hover:shadow-[#c89116]/20 active:translate-y-0"
        >
          <span className="relative z-10">Add Product</span>

          <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-base transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
            →
          </span>
        </button>
      </div>
    </form>
  );
};

export default Add;
