import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const ShopByCategory = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "BRA",
      type: "category",
      value: "Bra",
      image: assets.BraCategory,
    },
    {
      name: "LINGERIE",
      type: "category",
      value: "Lingerie",
      image: assets.LingerieCategory,
    },
    {
      name: "BRA SETS",
      type: "subCategory",
      value: "BRA SETS",
      image: assets.BraSets,
    },
    {
      name: "NIGHTWEAR",
      type: "category",
      value: "Nightwear",
      image: assets.NightWear,
    },
  ];

  const handleCategoryClick = (category) => {
    navigate(
      `/collection?${category.type}=${encodeURIComponent(category.value)}`,
    );
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-xs sm:text-sm tracking-[0.25em] text-[#c89116] font-semibold mb-3">
          DISCOVER YOUR STYLE
        </p>

        <h2 className="prata-regular text-2xl sm:text-3xl md:text-4xl text-gray-800">
          SHOP BY CATEGORY
        </h2>

        <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto px-4">
          Explore our carefully selected collection designed for comfort,
          confidence and everyday elegance.
        </p>
      </div>

      <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto px-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className="group flex flex-col items-center"
          >
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden flex items-center justify-center border-2 border-[#c89116]/50 bg-[#c89116]/5 shadow-sm">
              <img
                src={category.image}
                alt={category.name}
                className="w-[78%] h-[78%] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>

            <h3 className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.12em] text-gray-700 group-hover:text-[#c89116] transition duration-300">
              {category.name}
            </h3>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
