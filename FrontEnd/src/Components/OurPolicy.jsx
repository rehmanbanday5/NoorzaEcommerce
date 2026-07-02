import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">


      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-bold">Exchange Policy</p>
        <p className="text-gray-700">
          We offer a 30-day exchange policy.
        </p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-bold">7 Day Return Policy</p>
        <p className="text-gray-700">
            We offer a 7-day return policy.
        </p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-bold">Best Customer Support</p>
        <p className="text-gray-700">
          We offer a 24/7 customer support.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
