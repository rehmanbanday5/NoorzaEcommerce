import React, { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const latestProducts = products.slice(0, 10);
  const sliderRef = useRef(null);

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth / 4 + 20,
        behavior: "smooth",
      });
    }
  };

  const scrollPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -(sliderRef.current.clientWidth / 4 + 20),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"NEW"} text2={"ARRIVALS"} />

        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Crafted For Those Who Refuse To Dress Ordinary
        </p>
      </div>

      {/* ================= DESKTOP CAROUSEL ================= */}
      <div className="hidden md:block relative">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-hidden scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {latestProducts.map((item) => (
            <div
              key={item._id}
              className="flex-shrink-0"
              style={{
                width: "calc((100% - 60px) / 4)",
                scrollSnapAlign: "start",
              }}
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        {latestProducts.length > 4 && (
          <button
            onClick={scrollPrevious}
            aria-label="Previous products"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-[#c89116] hover:text-white hover:border-[#c89116]"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* RIGHT ARROW */}
        {latestProducts.length > 4 && (
          <button
            onClick={scrollNext}
            aria-label="Next products"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all duration-300 hover:bg-[#c89116] hover:text-white hover:border-[#c89116]"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 gap-y-8 md:hidden">
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
