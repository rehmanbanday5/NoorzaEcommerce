import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import ShopByCategory from "../Components/ShopByCategory";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banners ka order yahan se set karo
  const banners = [assets.Banner1, assets.Banner2, assets.Banner3, assets.Banner4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative left-1/2 -ml-[50vw] w-screen overflow-hidden">
      <div className="relative w-full">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Noorza Banner ${index + 1}`}
            fetchPriority={index === 0 ? "high" : "low"}
            className={`w-full h-auto block object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100"
                : "absolute inset-0 opacity-0"
            }`}
          />
        ))}

        <button
          onClick={() => navigate("/collection")}
          className="absolute bottom-[5%] left-[5%] inline-flex w-auto items-center justify-center gap-2 rounded-full border border-black bg-black px-4 py-2 sm:px-8 sm:py-3 text-[10px] sm:text-sm font-semibold text-white transition duration-300 hover:border-[#c89116] hover:text-[#c89116]"
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
