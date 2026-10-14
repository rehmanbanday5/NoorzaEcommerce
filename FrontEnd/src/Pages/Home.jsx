import { lazy, Suspense } from "react";

import Hero from "../Components/Hero";
import ShopByCategory from "../Components/ShopByCategory";

const LatestCollection = lazy(() => import("../Components/LatestCollection"));

const WhyChooseNoorza = lazy(() => import("../Components/WhyChooseNoorza"));

const BestSeller = lazy(() => import("../Components/BestSeller"));

const InstagramSection = lazy(() => import("../Components/InstagramSection"));

const ReviewSection = lazy(() => import("../Components/ReviewSection"));



const Home = () => {
  return (
    <div>
      <Hero />

      <ShopByCategory />

      <Suspense
        fallback={
          <div className="min-h-[3600px] sm:min-h-[2800px] md:min-h-0" />
        }
      >
        <LatestCollection />
        <WhyChooseNoorza />
        <BestSeller />
        <ReviewSection />
        <InstagramSection />
      </Suspense>
    </div>
  );
};

export default Home;
