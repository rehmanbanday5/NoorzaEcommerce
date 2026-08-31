import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import { Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* ================= HEADER ================= */}
      <div className="text-center text-2xl pt-10 sm:pt-14 border-t">
        <Title text1={"CONTACT"} text2={"US"} />

        <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto leading-6">
          Have a question? We’re here to help. Feel free to reach out to us.
        </p>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="my-12 sm:my-16 mb-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t border-l border-[#c89116]/40" />

            <img
              className="relative w-full h-full min-h-[350px] md:min-h-[450px] object-cover rounded-2xl"
              src={assets.contact_img}
              alt="Contact Noorza"
            />

            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b border-r border-[#c89116]/40" />
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A6500]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-gray-900">
              We’d love to hear from you.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500 max-w-md">
              Whether you have a question about our products or need help with
              your order, our team is here to assist you.
            </p>

            {/* DETAILS */}
            <div className="mt-9 space-y-4">
              {/* PHONE */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#faf8f3] flex items-center justify-center">
                  <Phone size={19} className="text-[#c89116]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800">
                    (+92) 337 1234567
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#faf8f3] flex items-center justify-center">
                  <Mail size={19} className="text-[#c89116]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800">
                    Noorza@gmail.com
                  </p>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-[#faf8f3] flex items-center justify-center">
                  <Clock size={19} className="text-[#c89116]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-gray-400">
                    Customer Support
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800">
                    We’re here to assist you
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL BRAND LINE */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-[#c89116]" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Noorza Essentials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
