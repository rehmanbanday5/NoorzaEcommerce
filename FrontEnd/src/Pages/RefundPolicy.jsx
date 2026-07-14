import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

const RefundPolicy = () => {
  return (
    <div className="py-10">
         <div className="text-center py-8 text-3xl">
        <Title text1={"REFUND"} text2={"POLICY"} />
      </div>

   
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="w-full sm:w-1/2">
          <img src={assets.RefundP}alt="Refund Policy"className="w-full h-[20rem] sm:h-[24rem] object-cover rounded-lg shadow-md"/>
        </div>

      
        <div className="w-full sm:w-1/2 text-gray-600">
          <p className="mb-4 leading-7">
            At{" "}
            <a href="/" className="text-[#c89116]">
              Noorza
            </a>
            , we want you to shop with confidence. If you are not satisfied with
            your purchase, we offer a hassle-free refund policy.
          </p>

          <p className="mb-4 leading-7">
            You can request a refund within 7 days of receiving your order. The
            product must be unused, in original packaging, and in the same
            condition as delivered.
          </p>

          <p className="leading-7">
            Once your return is received and inspected, we will process your
            refund within 5–7 business days. Customer satisfaction is our top
            priority.
          </p>
        </div>
      </div>

      
      <div className="mt-20">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default RefundPolicy;
