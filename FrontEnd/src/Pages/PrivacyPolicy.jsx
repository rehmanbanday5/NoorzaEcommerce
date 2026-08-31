import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const PrivacyPolicy = () => {
  return (
    <div className="py-10 sm:py-14">
      {/* ================= HEADER ================= */}
      <div className="text-center py-8 mb-8">
        <div className="inline-flex gap-2 items-center mb-3 sm:gap-3 pr-4">
          <p className="text-[#1a1a1a] text-4xl sm:text-5xl">
            PRIVACY <span className="text-[#8A6500] font-medium">POLICY</span>
          </p>

          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#1a1a1a]"></p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* IMAGE */}
        <div className="w-full sm:w-[1/2]">
          <div className="relative overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={assets.Privacy}
              alt="Noorza Privacy Policy"
              className="w-full h-auto sm:h-[32rem] object-contain sm:object-cover sm:object-center object-left"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/75 backdrop-blur-sm rounded-xl px-5 py-4 text-white">
                <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-1">
                  NOORZA
                </p>

                <p className="text-lg font-medium">
                  Your privacy. Our responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="w-full lg:w-[55%]">
          <p className="text-xs tracking-[0.25em] text-[#8A6500] font-medium mb-3">
            YOUR PRIVACY
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-5">
            Your trust is important to{" "}
            <span className="text-[#8A6500]">Noorza.</span>
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            At{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>
            , we respect your privacy and are committed to protecting the
            information you provide while shopping with us. This Privacy Policy
            explains how we collect, use and safeguard your information.
          </p>

          <p className="text-gray-600 leading-8">
            We only collect information that is necessary to provide you with a
            smooth and reliable shopping experience. Your information is handled
            responsibly and is never sold to third parties.
          </p>
        </div>
      </div>

      {/* ================= POLICY SECTIONS ================= */}
      <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 01 */}
        <div className="group border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#c89116] transition-all duration-300">
          <div className="flex items-start gap-5">
            <span className="text-[#8A6500] text-sm font-medium">01</span>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Information We Collect
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                When you place an order or contact us, we may collect
                information such as your name, phone number, email address,
                delivery address and order details.
              </p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="group border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#c89116] transition-all duration-300">
          <div className="flex items-start gap-5">
            <span className="text-[#8A6500] text-sm font-medium">02</span>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                How We Use Your Information
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Your information helps us process and deliver orders, provide
                customer support, communicate with you about your purchases and
                improve our products and services.
              </p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="group border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#c89116] transition-all duration-300">
          <div className="flex items-start gap-5">
            <span className="text-[#8A6500] text-sm font-medium">03</span>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Your Information Is Protected
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                We take reasonable measures to protect your personal information
                against unauthorized access, misuse or disclosure. We
                continuously work to keep our systems secure.
              </p>
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="group border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#c89116] transition-all duration-300">
          <div className="flex items-start gap-5">
            <span className="text-[#8A6500] text-sm font-medium">04</span>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Sharing of Information
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                <a
                  href="/"
                  className="text-[#8A6500] font-bold hover:underline"
                >
                  Noorza
                </a>{" "}
                does not sell or rent your personal information. We may only
                share necessary information with trusted service providers when
                required to process or deliver your order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PAYMENT & COOKIES ================= */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#faf8f3] rounded-2xl p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
            SECURE SHOPPING
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            Safe & Reliable Orders
          </h3>

          <p className="text-sm text-gray-600 leading-7">
            We take appropriate steps to maintain a secure shopping environment
            and protect the information associated with your orders.
          </p>
        </div>

        <div className="bg-[#faf8f3] rounded-2xl p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
            QUESTIONS?
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            We're Here To Help
          </h3>

          <p className="text-sm text-gray-600 leading-7">
            If you have any questions about our Privacy Policy or how your
            information is handled, please contact the{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>{" "}
            support team.
          </p>
        </div>
      </div>

      {/* ================= LAST UPDATED ================= */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400 tracking-wide">
          Privacy Policy •
          <a href="/" className="text-[#8A6500] font-bold hover:underline">
            Noorza
          </a>{" "}
          • Last updated September 2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
