import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
 const { products, search, showSearch, navigate } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // ================= URL FILTER =================
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const urlCategory = params.get("category");
    const urlSubCategory = params.get("subCategory");

    if (urlCategory) {
      setCategory([urlCategory]);
      setSubCategory([]);
    } else if (urlSubCategory) {
      setSubCategory([urlSubCategory]);
      setCategory([]);
    } else {
      setCategory([]);
      setSubCategory([]);
    }
  }, [window.location.search]);

  // ================= CATEGORY =================
 const toggleCategory = (e) => {
   const value = e.target.value;

   // ALL COLLECTIONS
   if (value === "All") {
     setCategory([]);
     setSubCategory([]);
     navigate("/collection");
     return;
   }

   // Only ONE category can be selected
   setCategory([value]);
   setSubCategory([]);

   // Update URL so Navbar active link also changes
   navigate(`/collection?category=${encodeURIComponent(value)}`);
 };

  // ================= SUB CATEGORY =================
 const toggleSubCategory = (e) => {
   const value = e.target.value;

   // Only ONE sub-category can be selected
   setSubCategory([value]);
   setCategory([]);

   // Update URL so Navbar active link also changes
   navigate(`/collection?subCategory=${encodeURIComponent(value)}`);
 };

  // ================= FILTER PRODUCTS =================
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    // Sorting
    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* ---------------- Filter Options ---------------- */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* ================= CATEGORY FILTER ================= */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {/* ALL COLLECTIONS */}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="All"
                checked={category.length === 0 && subCategory.length === 0}
                onChange={toggleCategory}
              />
              Shop All
            </p>

            {/* BRA */}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bra"
                checked={category.includes("Bra")}
                onChange={toggleCategory}
              />
              Bra
            </p>

            {/* BRA SETS */}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="BRA SETS"
                checked={subCategory.includes("BRA SETS")}
                onChange={toggleSubCategory}
              />
              Bra Sets
            </p>

            {/* LINGERIE */}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Lingerie"
                checked={category.includes("Lingerie")}
                onChange={toggleCategory}
              />
              Lingerie
            </p>

            {/* NIGHTWEAR */}
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Nightwear"
                checked={category.includes("Nightwear")}
                onChange={toggleCategory}
              />
              Nightwear
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- Products ---------------- */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4 whitespace-nowrap">
          <Title text1="ALL" text2="PRODUCTS" />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="w-36 sm:w-auto h-9 border border-gray-300 rounded-md bg-white px-2 text-xs sm:text-sm"
            value={sortType}
          >
            <option value="relevant">Sort By: Relevant</option>

            <option value="low-high">Sort By: Low to High</option>

            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium text-gray-800">
              No products available
            </p>

            <p className="text-sm text-gray-500 mt-2">
              There are currently no products available in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
