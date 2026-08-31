import { assets } from "../assets/assets";

const PaymentPolicy = () => {
  return (
    <div className="py-10">
      {/* ================= HEADER ================= */}
      <div className="text-center py-8 mb-8">
        <div className="inline-flex gap-2 items-center mb-3 sm:gap-3 pr-4">
          <p className="text-[#1a1a1a] text-4xl sm:text-5xl">
            PAYMENT <span className="text-[#8A6500] font-medium">POLICY</span>
          </p>

          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#1a1a1a]"></p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="flex flex-col sm:flex-row items-center gap-10">
        {/* IMAGE / PAYMENT METHODS */}
        <div className="w-full sm:w-1/2">
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-xs tracking-[0.25em] text-[#8A6500] font-medium mb-3">
              SECURE PAYMENTS
            </p>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
              Simple & convenient payment options
            </h2>

            <p className="text-sm text-gray-600 leading-7 mb-7">
              At{" "}
              <a href="/" className="text-[#8A6500] font-bold hover:underline">
                Noorza
              </a>
              , we aim to make every order simple and convenient. For local
              customers in Pakistan, we provide secure payment options through
              trusted local payment services.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {/* EASYPAISA */}
              <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center min-h-[150px] hover:border-[#c89116] transition-all duration-300">
                <img
                  src={assets.easypaisa}
                  alt="Easypaisa"
                  className="max-h-16 max-w-[140px] object-contain"
                />

                <p className="mt-4 text-sm font-medium text-gray-800">
                  Easypaisa
                </p>
              </div>

              {/* JAZZCASH */}
              <div className="border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center min-h-[150px] hover:border-[#c89116] transition-all duration-300">
                <img
                  src={assets.jazzcash}
                  alt="JazzCash"
                  className="max-h-16 max-w-[140px] object-contain"
                />

                <p className="mt-4 text-sm font-medium text-gray-800">
                  JazzCash
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INTRO TEXT */}
        <div className="w-full sm:w-1/2 text-gray-600">
          <p className="text-xs tracking-[0.25em] text-[#8A6500] font-medium mb-3">
            OUR PAYMENT PROCESS
          </p>

          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-5">
            Payments made simple with{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza.
            </a>
          </h2>

          <p className="mb-5 leading-8">
            We provide convenient payment methods for customers shopping with{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>
            . Our payment process is designed to be straightforward, transparent
            and easy to understand.
          </p>

          <p className="leading-8">
            Customers can use the available payment option provided during the
            ordering process. Please make sure that the payment details and
            order information are correct before completing your payment.
          </p>
        </div>
      </div>

      {/* ================= PAYMENT CONDITIONS ================= */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 01 */}
        <div className="group border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#c89116] transition-all duration-300">
          <div className="flex items-start gap-5">
            <span className="text-[#8A6500] text-sm font-medium">01</span>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Available Payment Methods
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                <a
                  href="/"
                  className="text-[#8A6500] font-bold hover:underline"
                >
                  Noorza
                </a>{" "}
                currently supports selected local payment methods, including{" "}
                <span className="text-gray-900 font-medium">
                  Cash on Delivery (COD), Easypaisa and JazzCash
                </span>
                .
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
                Payment Confirmation
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Orders may be confirmed after the required payment information
                or transaction details have been successfully verified.
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
                Order Information
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                Customers should ensure that their order details, contact
                information and payment details are accurate before completing
                the order.
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
                Payment Issues
              </h3>

              <p className="text-sm text-gray-600 leading-7">
                If you experience any issue while making a payment, please
                contact the{" "}
                <a
                  href="/"
                  className="text-[#8A6500] font-bold hover:underline"
                >
                  Noorza
                </a>{" "}
                support team before making another payment.
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
          Before making a payment
        </h3>

        <p className="text-sm text-gray-600 leading-7">
          Please verify the order amount and payment information carefully
          before completing your transaction. Keep your payment confirmation or
          transaction details until your order has been successfully delivered.
        </p>
      </div>

      {/* ================= PAYMENT METHODS ================= */}
      <div className="mt-5">
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
            PAYMENT OPTIONS
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-6">
            Trusted local payment methods
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* CASH ON DELIVERY */}
            <div className="flex items-center gap-5 border border-gray-200 rounded-xl p-5 hover:border-[#c89116] transition-all duration-300">
              <div className="w-24 h-16 flex items-center justify-center">
                <span className="text-2xl font-medium text-[#8A6500]">COD</span>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Cash on Delivery</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Pay when your order is delivered
                </p>
              </div>
            </div>

            {/* EASYPAISA */}
            <div className="flex items-center gap-5 border border-gray-200 rounded-xl p-5 hover:border-[#c89116] transition-all duration-300">
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src={assets.easypaisa}
                  alt="Easypaisa"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Easypaisa</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Convenient mobile payment option
                </p>
              </div>
            </div>

            {/* JAZZCASH */}
            <div className="flex items-center gap-5 border border-gray-200 rounded-xl p-5 hover:border-[#c89116] transition-all duration-300">
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src={assets.jazzcash}
                  alt="JazzCash"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div>
                <h4 className="font-medium text-gray-900">JazzCash</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Convenient mobile payment option
                </p>
              </div>
            </div>
          </div>
        </div>
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
            If you have any questions regarding payment or your order, please
            contact the{" "}
            <a href="/" className="text-[#8A6500] font-bold hover:underline">
              Noorza
            </a>{" "}
            support team for assistance.
          </p>
        </div>

        <div className="bg-[#faf8f3] rounded-2xl p-6 sm:p-8">
          <p className="text-xs tracking-[0.2em] text-[#8A6500] mb-3">
            SIMPLE & SECURE
          </p>

          <h3 className="text-lg font-medium text-gray-900 mb-3">
            A better shopping experience
          </h3>

          <p className="text-sm text-gray-600 leading-7">
            Our goal is to keep the payment experience simple, transparent and
            convenient for every{" "}
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
          Payment Policy •{" "}
          <a href="/" className="text-[#8A6500] font-bold hover:underline">
            Noorza
          </a>{" "}
          • Last updated September 2026
        </p>
      </div>
    </div>
  );
};

export default PaymentPolicy;
