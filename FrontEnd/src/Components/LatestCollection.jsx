import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from "./Title";
import ProductItem from './ProductItem';


const LatestCollection = () => {

    const  {products} = useContext(ShopContext)
    const [LatestProducts, setLatestProducts] = useState([]);
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,5));
    },[products])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"NEW"} text2={"ARRIVALS"} />{" "}
        {/*------------ Name change from Latest Collection to New Arrivals --------------  */}
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Crafted For Those Who Refuse To Dress Ordinary
        </p>
      </div>

      {/*------------ Rendering Products --------------  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 gap-y-8">
        {LatestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection