import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer group">
      <div>
        {/* Product Image */}
        <div className="overflow-hidden relative bg-gray-50">
          {/* First Image */}
          <img
            src={image[0]}
            alt={name}
            className={`w-full transition-all duration-500 ease-in-out ${
              image[1] ? "group-hover:opacity-0" : "group-hover:scale-105"
            }`}
          />

          {/* Second Image on Hover */}
          {image[1] && (
            <img
              src={image[1]}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          )}
        </div>

        {/* Product Name */}
        <p className="pt-3 pb-1 text-sm sm:text-base font-medium text-gray-900">
          {name}
        </p>

        {/* Product Price */}
        <p className="text-sm sm:text-base font-semibold text-[#c89116]">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
