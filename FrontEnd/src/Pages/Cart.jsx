import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { Minus, Plus } from "lucide-react";

const Cart = () => {
  const { products, curreny, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800">
            Your Cart Is Empty
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Looks like you haven't added any gear yet. Let's fix that.
          </p>

          <button
            onClick={() => navigate("/collection")}
            className="group bg-black text-white text-sm mt-8 px-8 py-3 hover:bg-[#c89116] hover:text-black hover:font-bold"
          >
            <span className="block transition-transform duration-500 group-hover:[transform:rotateX(360deg)]">
              START SHOPPING
            </span>
          </button>
        </div>
      ) : (
        <>
          <div className="text-2xl mb-3">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>

          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id,
              );

              return (
                <div
                  key={index}
                  className="py-4 border-t border-b text-gray-700 grid grid-cols-[1fr_auto_auto] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-3 sm:gap-4"
                >
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20"
                      src={productData.image[0]}
                      alt=""
                    />

                    <div>
                      <p className="text-xs sm:text-lg font-medium">
                        {productData.name}
                      </p>

                      <div className="flex items-center gap-5 mt-2">
                        <p>
                          {curreny}
                          {productData.price}
                        </p>

                        <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center w-fit rounded-xl border border-gray-200 overflow-hidden bg-white">
                    {/* MINUS */}
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item._id,
                          item.size,
                          Math.max(1, item.quantity - 1),
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:bg-[#faf8f3] hover:text-[#8A6500] disabled:text-gray-300 disabled:hover:bg-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} strokeWidth={2} />
                    </button>

                    {/* QUANTITY */}
                    <div className="w-10 sm:w-12 h-9 sm:h-10 flex items-center justify-center border-x border-gray-200 text-sm font-semibold text-gray-800">
                      {item.quantity}
                    </div>

                    {/* PLUS */}
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity + 1)
                      }
                      className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:bg-[#faf8f3] hover:text-[#8A6500] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} strokeWidth={2} />
                    </button>
                  </div>

                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-4 sm:w-5 cursor-pointer hover:opacity-70 justify-self-center"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CartTotal />

              <div className="w-full text-end">
                <button
                  onClick={() => navigate("/place-order")}
                  className="bg-black text-white text-sm my-8 px-8 py-3 hover:bg-[#c89116] hover:font-semibold hover:text-black transition ease-in-out"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
