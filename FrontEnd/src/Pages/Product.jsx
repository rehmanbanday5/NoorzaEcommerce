import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setSize("");
      setQuantity(1);
    }
  }, [productId, products]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

 const handleAddToCart = () => {
   if (!size) return;

   for (let i = 0; i < quantity; i++) {
     addToCart(productData._id, size);
   }

   // Page ko smoothly top par le jao
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });

   toast.success(
     quantity > 1 ? `${quantity} items added to cart` : "Product added to cart",
   );
 };

  if (!productData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-[#c89116] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="border-t pt-8 sm:pt-12">
      {/* ================= PRODUCT AREA ================= */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ================= LEFT IMAGE ================= */}

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col-reverse sm:flex-row gap-4">
              {/* THUMBNAILS */}

              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[90px] w-full">
                {productData.image.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setImage(item)}
                    className={`relative flex-shrink-0 rounded-xl overflow-hidden border transition-all duration-200 ${
                      image === item
                        ? "border-[#c89116] ring-1 ring-[#c89116]"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={item}
                      alt={`${productData.name} ${index + 1}`}
                      className="w-[75px] h-[90px] sm:w-[86px] sm:h-[105px] object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* MAIN IMAGE */}

              <div className="flex-1 bg-[#f8f8f6] rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={productData.name}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="min-w-0">
            {/* CATEGORY */}

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c89116]" />

              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8A6500]">
                {productData.category}
              </p>
            </div>

            {/* PRODUCT NAME */}

            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              {productData.name}
            </h1>

            {/* RATING */}

            <div className="flex items-center gap-1 mt-4">
              <img src={assets.star_icon} className="w-4" alt="" />
              <img src={assets.star_icon} className="w-4" alt="" />
              <img src={assets.star_icon} className="w-4" alt="" />
              <img src={assets.star_icon} className="w-4" alt="" />
              <img src={assets.star_dull_icon} className="w-4" alt="" />

              <span className="ml-2 text-xs text-gray-400">
                4.0 · Customer Reviews
              </span>
            </div>

            {/* PRICE */}

            <div className="mt-7">
              <p className="text-3xl font-semibold text-gray-900">
                {currency}
                {productData.price}
              </p>
            </div>

            {/* SIZE */}

            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-900">Select Size</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {productData.sizes.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setSize(item)}
                    className={`min-w-[52px] px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                      item === size
                        ? "border-[#c89116] bg-[#c89116] text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-[#c89116] hover:text-[#c89116]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}

            <div className="mt-7">
              <p className="text-sm font-semibold text-gray-900">Quantity</p>

              <div className="mt-4 flex items-center w-fit border border-gray-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                  className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 disabled:text-gray-300"
                >
                  <Minus size={16} />
                </button>

                <div className="w-14 h-11 flex items-center justify-center border-x border-gray-200 text-sm font-semibold">
                  {quantity}
                </div>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="w-11 h-11 flex items-center justify-center hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* TOTAL */}

            <div className="mt-6 flex items-center justify-between rounded-xl bg-[#faf8f3] border border-[#ead9ad]/60 px-5 py-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Total
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {quantity} × {currency}
                  {productData.price}
                </p>
              </div>

              <p className="text-xl font-semibold text-gray-900">
                {currency}
                {productData.price * quantity}
              </p>
            </div>

            {/* ADD TO CART */}

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!size}
              className={`mt-6 w-full flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-sm font-semibold transition-all ${
                size
                  ? "bg-[#111111] text-white hover:bg-[#c89116]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ShoppingBag size={18} />

              {size ? "ADD TO CART" : "SELECT A SIZE"}
            </button>

            {/* BENEFITS */}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#faf8f3] border border-[#ead9ad]/50 p-4">
                <ShieldCheck size={19} className="text-[#c89116]" />

                <p className="mt-3 text-xs font-semibold text-gray-800">
                  Original Product
                </p>

                <p className="mt-1 text-[10px] leading-4 text-gray-400">
                  Quality you can trust
                </p>
              </div>

              <div className="rounded-xl bg-[#faf8f3] border border-[#ead9ad]/50 p-4">
                <Truck size={19} className="text-[#c89116]" />

                <p className="mt-3 text-xs font-semibold text-gray-800">
                  Cash On Delivery
                </p>

                <p className="mt-1 text-[10px] leading-4 text-gray-400">
                  Pay when you receive
                </p>
              </div>

              <div className="rounded-xl bg-[#faf8f3] border border-[#ead9ad]/50 p-4">
                <RotateCcw size={19} className="text-[#c89116]" />

                <p className="mt-3 text-xs font-semibold text-gray-800">
                  Easy Returns
                </p>

                <p className="mt-1 text-[10px] leading-4 text-gray-400">
                  7-day return policy
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="mt-8 pt-7 pb-8 border-t border-gray-100">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-900">
                Product Description
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {productData.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RELATED PRODUCTS ================= */}

      <div className="mt-20 sm:mt-28">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;

