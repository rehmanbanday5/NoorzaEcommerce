import { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "../utils/notifications";
import { Banknote, Smartphone, Landmark, Check } from "lucide-react";

const paymentMethods = [
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay when your order arrives",
    icon: Banknote,
  },
  {
    id: "easypaisa",
    title: "Easypaisa",
    description: "Pay using your Easypaisa account",
    icon: Smartphone,
  },
  {
    id: "jazzcash",
    title: "JazzCash",
    description: "Pay using your JazzCash account",
    icon: Smartphone,
  },
  {
    id: "bank",
    title: "Bank Transfer",
    description: "Pay directly through your bank",
    icon: Landmark,
  },
];

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#c89116] focus:ring-2 focus:ring-[#c89116]/10";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    postalcode: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setformData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (method !== "cod") {
      toast.error(
        "This payment method is not available yet. Please select Cash on Delivery.",
      );
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const product = products.find((product) => product._id === items);

            if (product) {
              const itemInfo = structuredClone(product);
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      if (orderItems.length === 0) {
        toast.error("Your cart is empty.");
        return;
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      const response = await axios.post(
        backendUrl + "/api/order/place",
        orderData,
        { headers: { token } },
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        toast.error(response.data.message || "Unable to place your order.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen bg-[#faf9f6] px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* LEFT: Delivery Information */}
        <div className="space-y-7">
          <section className="rounded-xl border border-gray-100 bg-white p-5 sm:p-7">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c89116]">
                Delivery
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-gray-900">
                Delivery information
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Enter your details for delivery.
              </p>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    required
                    autoComplete="given-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onChangeHandler}
                    className={inputClass}
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    required
                    autoComplete="family-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onChangeHandler}
                    className={inputClass}
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  required
                  autoComplete="email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="email"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  required
                  autoComplete="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onChangeHandler}
                  className={inputClass}
                  type="tel"
                  placeholder="03XX XXXXXXX"
                />
              </div>

              <div className="border-t border-gray-100 pt-5">
                <h2 className="mb-4 text-base font-semibold text-gray-900">
                  Shipping address
                </h2>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="street"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      id="street"
                      required
                      autoComplete="street-address"
                      name="street"
                      value={formData.street}
                      onChange={onChangeHandler}
                      className={inputClass}
                      type="text"
                      placeholder="House number, street, area"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="city"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        id="city"
                        required
                        autoComplete="address-level2"
                        name="city"
                        value={formData.city}
                        onChange={onChangeHandler}
                        className={inputClass}
                        type="text"
                        placeholder="City"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="postalcode"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <input
                        id="postalcode"
                        required
                        autoComplete="postal-code"
                        name="postalcode"
                        value={formData.postalcode}
                        onChange={onChangeHandler}
                        className={inputClass}
                        type="text"
                        placeholder="Postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT: Order Summary and Payment */}
        <div className="space-y-7 lg:sticky lg:top-6">
          <section className="rounded-xl border border-gray-100 bg-white p-5 sm:p-7">
            <div className="mb-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c89116]">
                Your order
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Order summary
              </h2>
            </div>

            <CartTotal />
          </section>

          <section className="rounded-xl border border-gray-100 bg-white p-5 sm:p-7">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#c89116]">
                Payment
              </p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">
                Choose payment method
              </h2>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((payment) => {
                const Icon = payment.icon;
                const isSelected = method === payment.id;

                return (
                  <button
                    key={payment.id}
                    type="button"
                    onClick={() => setMethod(payment.id)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center gap-3 rounded-lg border p-3.5 text-left transition ${
                      isSelected
                        ? "border-[#c89116] bg-[#c89116]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        isSelected
                          ? "bg-[#c89116]/10 text-[#a7770d]"
                          : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {payment.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {payment.description}
                      </p>
                    </div>

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        isSelected
                          ? "border-[#c89116] bg-[#c89116] text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && <Check size={13} />}
                    </span>
                  </button>
                );
              })}
            </div>

            {method !== "cod" && (
              <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                This payment method is not available yet. Select Cash on
                Delivery to place your order.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-lg bg-[#c89116] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#ad7d0f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Placing order..." : "Place Order"}
            </button>
          </section>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
