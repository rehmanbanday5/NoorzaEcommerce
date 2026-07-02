import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

const Delivery = () => {
  return (
    <div className="py-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="w-full sm:w-1/2">
          <img
            src={assets.Delivery}
            alt="Delivery"
            className="w-full h-[26rem] sm:h-[32rem] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full sm:w-1/2 text-gray-600">
          <p className="mb-4 leading-7">
            At{" "}
            <a href="/" className="text-[#c89116] transition duration-300">
              Noorza
            </a>
            , we ensure fast and reliable delivery service across Pakistan. Our
            logistics partners work 24/7 to make sure your order reaches you
            safely and on time.
          </p>

          <p className="mb-4 leading-7">
            Standard delivery time is 3–5 business days depending on your
            location. For remote areas, it may take slightly longer but we
            always keep you updated with tracking information.
          </p>

          <p className="leading-7">
            We carefully pack every product to ensure it arrives in perfect
            condition. Customer satisfaction is our top priority and we are
            committed to providing a smooth shopping experience.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default Delivery;
