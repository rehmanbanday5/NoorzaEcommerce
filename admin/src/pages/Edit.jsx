import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Edit = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Bra");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const [images, setImages] = useState([null, null, null, null]);

  const categories = ["Bra", "Bra Sets", "Lingerie", "Nightwear", "Shop All"];

  const availableSizes = ["S", "M", "L", "XL", "XXL"];

  // ================= GET PRODUCT =================

  const fetchProduct = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/product/single", {
        productId: id,
      });

      if (response.data.success) {
        const product = response.data.product;

        setName(product.name || "");
        setDescription(product.description || "");
        setPrice(product.price || "");
        setCategory(product.category || "Bra");
        setBestseller(product.bestseller || false);
        setSizes(product.sizes || []);

        const productImages = product.image || [];

        const formattedImages = [
          productImages[0] || null,
          productImages[1] || null,
          productImages[2] || null,
          productImages[3] || null,
        ];

        setImages(formattedImages);
      } else {
        toast.error(response.data.message);
        navigate("/list");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      navigate("/list");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // ================= IMAGE CHANGE =================

  const handleImageChange = (index, file) => {
    if (!file) return;

    setImages((prev) => {
      const updated = [...prev];
      updated[index] = file;
      return updated;
    });
  };

  // ================= UPDATE =================

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("id", id);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      // Existing images only
      const existingImages = images.map((image) =>
        typeof image === "string" ? image : null,
      );

      formData.append("existingImages", JSON.stringify(existingImages));

      // New images
      images.forEach((image, index) => {
        if (image instanceof File) {
          formData.append(`image${index + 1}`, image);
        }
      });

      const response = await axios.post(
        backendUrl + "/api/product/update",
        formData,
        {
          headers: {
            token,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        navigate("/list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setSaving(false);
    }
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-gray-200 border-t-[#c89116] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-6xl mx-auto pb-12">
      {/* HEADER */}

      <div className="relative mb-8 overflow-hidden rounded-2xl bg-[#111111] px-6 py-7 sm:px-8">
        <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[#c89116]/10 blur-2xl" />

        <div className="relative flex items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c89116]" />

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#c89116] font-semibold">
                Noorza Admin
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Edit Product
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Update your product information and save your changes.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/list")}
            className="hidden sm:block rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* IMAGES */}

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="px-6 py-5 sm:px-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#faf8f3] text-[#c89116] text-sm font-bold">
              01
            </span>

            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Product Images
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Click any image to replace it.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => {
              const preview =
                image instanceof File
                  ? URL.createObjectURL(image)
                  : image || assets.upload_area;

              return (
                <label
                  key={index}
                  htmlFor={`edit-image-${index}`}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`relative aspect-square overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ${
                      image
                        ? "border-[#c89116] bg-[#faf8f3]"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <img
                      src={preview}
                      alt=""
                      className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                      <span className="scale-75 opacity-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        Change Image
                      </span>
                    </div>

                    {image && (
                      <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#c89116] text-white shadow-md">
                        ✓
                      </div>
                    )}
                  </div>

                  <input
                    id={`edit-image-${index}`}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) =>
                      handleImageChange(index, e.target.files[0])
                    }
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* PRODUCT INFORMATION */}

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
                Update the information customers see.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* NAME */}

          <div>
            <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-2">
              Product Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
              type="text"
              required
            />
          </div>

          {/* DESCRIPTION */}

          <div>
            <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-2">
              Product Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[150px] rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-7 text-gray-800 outline-none resize-y transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
              required
            />
          </div>
        </div>
      </div>

      {/* DETAILS */}

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
                Update category, price and available sizes.
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

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-800 outline-none cursor-pointer transition-all hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-14 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#c89116] focus:bg-white focus:ring-4 focus:ring-[#c89116]/10"
                  type="number"
                  required
                />
              </div>
            </div>
          </div>

          {/* SIZES */}

          <div className="mt-6">
            <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-3">
              Available Sizes
            </label>

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
                    className={`relative min-w-[58px] rounded-xl border px-5 py-3 text-sm font-semibold transition-all ${
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
          </div>
        </div>
      </div>

      {/* BESTSELLER */}

      <div className="mt-5 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
        <div className="p-6 sm:p-8">
          <label
            className={`group flex items-center justify-between gap-5 cursor-pointer rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
              bestseller
                ? "border-[#c89116] bg-[#faf8f3]"
                : "border-gray-200 bg-gray-50 hover:border-[#c89116]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  bestseller
                    ? "bg-[#c89116] text-white"
                    : "bg-white text-gray-400"
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
                type="checkbox"
                checked={bestseller}
                onChange={() => setBestseller((prev) => !prev)}
                className="peer sr-only"
              />

              <div
                className={`h-7 w-12 rounded-full transition-all ${
                  bestseller ? "bg-[#c89116]" : "bg-gray-300"
                }`}
              />

              <div
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
                  bestseller ? "left-6" : "left-1"
                }`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* BUTTONS */}

      <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate("/list")}
          className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={saving}
          className="group flex items-center justify-center gap-3 rounded-xl bg-[#111111] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c89116] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{saving ? "Saving Changes..." : "Save Changes"}</span>

          {!saving && (
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Edit;
