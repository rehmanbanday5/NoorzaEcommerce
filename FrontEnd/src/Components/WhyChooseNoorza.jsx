import React from "react";
import { ShieldCheck, Truck, RefreshCw } from "lucide-react";

const WhyChooseNoorza = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Premium Quality & Comfort",
      description:
        "Carefully selected pieces designed for everyday comfort, confidence and lasting quality.",
    },
    {
      icon: Truck,
      title: "Fast & Discreet Delivery",
      description:
        "Your order reaches you safely in premium, secure, and discreet packaging across Pakistan.",
    },
    {
      icon: RefreshCw,
      title: "Easy Exchange & Support",
      description:
        "Need a different size or have a question? We're here to make your shopping experience easy.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-xs sm:text-sm tracking-[0.25em] text-[#c89116] font-semibold mb-3">
          THE NOORZA PROMISE
        </p>

        <h2 className="prata-regular text-2xl sm:text-3xl md:text-4xl text-gray-800">
          WHY CHOOSE NOORZA?
        </h2>

        <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto px-4">
          Thoughtfully chosen for your comfort, confidence and everyday
          elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group text-center border border-gray-200 bg-white px-6 py-8 sm:px-8 sm:py-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#c89116]/30 bg-[#c89116]/5 transition-all duration-300 group-hover:bg-[#c89116]">
                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className="text-[#c89116] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="text-sm sm:text-base font-semibold tracking-wide text-gray-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500 max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseNoorza;
