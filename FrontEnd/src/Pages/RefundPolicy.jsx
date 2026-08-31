import { assets } from "../assets/assets";

const RefundPolicy = () => {
  return (
    <div className="py-10">
      {/* ================= HEADER ================= */}
      <div className="text-center py-8 mb-8">
        <div className="inline-flex gap-2 items-center mb-3 sm:gap-3 pr-4">
          <p className="text-[#1a1a1a] text-4xl sm:text-5xl">
            REFUND <span className="text-[#8A6500] font-medium">POLICY</span>
          </p>

          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#1a1a1a]"></p>
        </div>
      </div>
      {/* ================= INTRO ================= */}
      <div className="flex flex-col sm:flex-row items-center gap-10">
        {/* IMAGE */}
        <div className="w-full sm:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={assets.Refund}
              alt="Refund Policy"
              className="w-full h-auto sm:h-[24rem] object-contain sm:object-cover sm:object-center object-right"
            />
          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="w-full sm:w-1/2 text-gray-600">
          <p className="text-xs tracking-[0.25em] text-[#8A6500] font-medium mb-3">
            OUR COMMITMENT
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-5">
            Your satisfaction matters to{" "}
            <span className="text-[#8A6500]">Noorza.</span>
          </h2>

          <p className="mb-5 leading-8">
            At{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>
            , we want every order to be a positive shopping experience. If your
            purchase does not meet the applicable return requirements, please
            review the guidelines below before requesting a refund.
          </p>

          <p className="leading-8">
            Our refund process is designed to be simple and transparent, while
            helping us maintain the quality and hygiene standards expected from
            our products.
          </p>
        </div>
      </div>

      {/* ================= REFUND CONDITIONS ================= */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 01 */}
        <div className="group border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#c89116] transition-all duration-300">
          <div className="flex items-start gap-5">
            <span className="text-[#8A6500] text-sm font-medium">01</span>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Return Window
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Refund or return requests must be submitted within{" "}
                <span className="text-gray-900 font-medium">7 days</span> of
                receiving your order.
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
                Product Condition
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Items must be unused, unworn, undamaged and returned in their
                original packaging and condition.
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
                Refund Processing
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Once the returned product has been received and inspected,
                eligible refunds will normally be processed within{" "}
                <span className="text-gray-900 font-medium">
                  5–7 business days
                </span>
                .
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
                Non-Eligible Items
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Products that have been used, worn, damaged or returned without
                their original packaging may not qualify for a refund.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= IMPORTANT NOTE ================= */}
      <div className="mt-5 bg-[#faf8f3] rounded-2xl p-6 sm:p-8">
        <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
          IMPORTANT
        </p>

        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Before requesting a refund
        </h3>

        <p className="text-sm text-gray-600 leading-7">
          Please make sure your order meets the conditions mentioned above. For
          hygiene and product-quality reasons, certain products may not be
          eligible for return once opened, used or worn.
        </p>
      </div>

      {/* ================= CONTACT ================= */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
            NEED HELP?
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            We're here to help
          </h3>

          <p className="text-sm text-gray-600 leading-7">
            If you have any questions regarding a return or refund, please
            contact the{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>{" "}
            support team before sending your product back.
          </p>
        </div>

        <div className="bg-[#faf8f3] rounded-2xl p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
            SIMPLE & TRANSPARENT
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            A better shopping experience
          </h3>

          <p className="text-sm text-gray-600 leading-7">
            Our goal is to make the refund process clear, straightforward and
            fair for every{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>{" "}
            customer.
          </p>
        </div>
      </div>

      {/* ================= LAST UPDATED ================= */}
      <div className="mt-12 pt-6 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400 tracking-wide">
          Refund Policy •{" "}
          <a href="/" className="text-[#8A6500] font-bold hover:underline">
            Noorza
          </a>{" "}
          • Last updated September 2026
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
