import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

const PrivacyPolicy = () => {
  return (
    <div className="py-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>

    
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="w-full sm:w-1/2">
          <img src={assets.PrivacyP}alt="Privacy Policy"className="w-full h-[26rem] sm:h-[32rem] object-cover rounded-lg shadow-md"/>
        </div>


        <div className="w-full sm:w-1/2 text-gray-600">
          <p className="mb-4 leading-7">
            At{" "}
            <a href="/" className="text-[#c89116]">
              Noorza
            </a>
            , your privacy is extremely important to us. We are committed to
            protecting your personal information and ensuring a safe shopping
            experience.
          </p>

          <p className="mb-4 leading-7">
            We only collect necessary information such as name, email, and
            address to process your orders. Your data is never sold or shared
            with third parties without your consent.
          </p>

          <p className="leading-7">
            All transactions are secured using industry-standard encryption. We
            continuously update our systems to protect your data from
            unauthorized access.
          </p>
        </div>
      </div>

    
      <div className="mt-20">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
