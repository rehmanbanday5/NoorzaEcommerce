import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import ShopByCategory from "../Components/ShopByCategory";
import WhyChooseNoorza from "../Components/WhyChooseNoorza";
import InstagramSection from "../Components/InstagramSection";




const Home = () => {
  return (
    <div>
      <Hero />
      <ShopByCategory />
      <LatestCollection />
      <WhyChooseNoorza />
      <BestSeller />
      <InstagramSection />
    </div>
  );
}

export default Home