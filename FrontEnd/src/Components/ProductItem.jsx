import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="group block cursor-pointer">
      {/* ================= PRODUCT CARD ================= */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)]">
        {/* ================= IMAGE ================= */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f6f1] p-2">
          {/* Inner Image Frame */}
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-[#f3f1ec]">
            {/* First Image */}
            <img
              src={image[0]}
              alt={name}
              className={`h-full w-full object-cover transition-all duration-700 ease-out ${
                image[1]
                  ? "group-hover:opacity-0 group-hover:scale-[1.03]"
                  : "group-hover:scale-[1.04]"
              }`}
            />

            {/* Second Image */}
            {image[1] && (
              <img
                src={image[1]}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover scale-[1.02] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            )}

            {/* View Product */}
            <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <div className="flex items-center justify-between rounded-lg bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.16em] text-gray-800">
                  VIEW PRODUCT
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#c89116]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}
        <div className="px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
          {/* Product Name */}
          <p className="line-clamp-1 text-sm sm:text-base font-medium tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-[#8A6500]">
            {name}
          </p>

          {/* Price */}
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm sm:text-base font-semibold text-[#8A6500]">
              {currency} {price}
            </p>

            {/* Small arrow always visible */}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-[#c89116] group-hover:bg-[#c89116] group-hover:text-white">
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
