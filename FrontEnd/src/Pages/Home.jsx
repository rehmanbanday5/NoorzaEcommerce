import { lazy, Suspense } from "react";

import Hero from "../Components/Hero";
import ShopByCategory from "../Components/ShopByCategory";

const LatestCollection = lazy(() => import("../Components/LatestCollection"));

const WhyChooseNoorza = lazy(() => import("../Components/WhyChooseNoorza"));

const BestSeller = lazy(() => import("../Components/BestSeller"));

const InstagramSection = lazy(() => import("../Components/InstagramSection"));

const Home = () => {
  return (
    <div>
      <Hero />

      <ShopByCategory />

      <Suspense fallback={null}>
        <LatestCollection />
        <WhyChooseNoorza />
        <BestSeller />
        <InstagramSection />
      </Suspense>
    </div>
  );
};

export default Home;
