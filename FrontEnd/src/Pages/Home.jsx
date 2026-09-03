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
        <div className="min-h-[3600px] sm:min-h-[2800px] md:min-h-0">
          <LatestCollection />
          <WhyChooseNoorza />
          <BestSeller />
          <InstagramSection />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
