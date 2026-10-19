import { assets } from "../assets/assets";

const PaymentPolicy = () => {
  return (
    <section className="py-8 sm:py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-medium text-[#1a1a1a]">
          PAYMENT <span className="text-[#8A6500]">POLICY</span>
        </h1>
        <div className="w-14 h-px bg-[#8A6500] mx-auto mt-4" />
      </div>

      {/* Introduction */}
      <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl mx-auto leading-7 mb-8">
        Noorza offers four convenient payment methods for your orders. Choose
        the option that works best for you.
      </p>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Cash on Delivery */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#c89116] transition-colors">
          <div className="h-16 flex items-center justify-center">
            <span className="text-2xl font-semibold text-[#8A6500]">COD</span>
          </div>

          <h2 className="font-medium text-gray-900 mt-3">Cash on Delivery</h2>

          <p className="text-sm text-gray-500 mt-2">
            Pay when your order arrives.
          </p>
        </div>

        {/* Easypaisa */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#c89116] transition-colors">
          <div className="h-16 flex items-center justify-center">
            <img
              src={assets.easypaisa}
              alt="Easypaisa"
              className="max-w-[140px] max-h-16 object-contain"
            />
          </div>

          <h2 className="font-medium text-gray-900 mt-3">Easypaisa</h2>

          <p className="text-sm text-gray-500 mt-2">Pay through Easypaisa.</p>
        </div>

        {/* JazzCash */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#c89116] transition-colors">
          <div className="h-16 flex items-center justify-center">
            <img
              src={assets.jazzcash}
              alt="JazzCash"
              className="max-w-[140px] max-h-16 object-contain"
            />
          </div>

          <h2 className="font-medium text-gray-900 mt-3">JazzCash</h2>

          <p className="text-sm text-gray-500 mt-2">Pay through JazzCash.</p>
        </div>

        {/* Bank Transfer */}
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-[#c89116] transition-colors">
          <div className="h-16 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8A6500"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 9-7 9 7" />
              <path d="M4 10h16" />
              <path d="M5 10v9" />
              <path d="M9 10v9" />
              <path d="M15 10v9" />
              <path d="M19 10v9" />
              <path d="M3 19h18" />
              <path d="M2 22h20" />
            </svg>
          </div>

          <h2 className="font-medium text-gray-900 mt-3">Bank Transfer</h2>

          <p className="text-sm text-gray-500 mt-2">
            Transfer payment directly to our bank account.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-sm text-gray-500 mt-8">
        For payment-related questions, please contact Noorza support.
      </p>
    </section>
  );
};

export default PaymentPolicy;
