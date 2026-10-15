import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const reviews = [
  {
    id: 1,
    image: assets.BraCategory,
    text: "Beautiful quality and a lovely shopping experience. The product feels comfortable and the finishing is excellent.",
    rating: 3,
    customerName: "Ayesha K.",
  },
  {
    id: 2,
    image: assets.LingerieCategory,
    text: "I really appreciate the attention to detail. The overall quality and presentation exceeded my expectations.",
    rating: 5,
    customerName: "Sana M.",
  },
  {
    id: 3,
    image: assets.BraSets,
    text: "A lovely experience from start to finish. The product looks beautiful and feels thoughtfully made.",
    rating: 5,
    customerName: "Hira A.",
  },
  {
    id: 4,
    image: assets.NightWear,
    text: "Really happy with the overall experience. The product presentation and attention to detail are impressive.",
    rating: 5,
    customerName: "Mariam R.",
  },
  {
    id: 5,
    image: assets.NightWear,
    text: "Really happy with the overall experience. The product presentation and attention to detail are impressive.",
    rating: 5,
    customerName: "Mariam R.",
  },
  {
    id: 6,
    image: assets.NightWear,
    text: "Really happy with the overall experience. The product presentation and attention to detail are impressive.",
    rating: 5,
    customerName: "Mariam R.",
  },
  {
    id: 7,
    image: assets.NightWear,
    text: "Really happy with the overall experience. The product presentation and attention to detail are impressive.",
    rating: 5,
    customerName: "Mariam R.",
  },
  {
    id: 8,
    image: assets.NightWear,
    text: "Really happy with the overall experience. The product presentation and attention to detail are impressive.",
    rating: 5,
    customerName: "Mariam R.",
  },
];

const ReviewSection = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const slide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-review-card]");
    if (!card) return;

    const distance = card.getBoundingClientRect().width + 16;

    const atEnd =
      slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

    if (direction === "next") {
      slider.scrollTo({
        left: atEnd ? 0 : slider.scrollLeft + distance,
        behavior: "smooth",
      });
    } else {
      slider.scrollTo({
        left:
          slider.scrollLeft <= 10
            ? slider.scrollWidth
            : slider.scrollLeft - distance,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const card = slider.querySelector("[data-review-card]");
      if (!card) return;

      const distance = card.getBoundingClientRect().width + 16;

      const atEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      slider.scrollTo({
        left: atEnd ? 0 : slider.scrollLeft + distance,
        behavior: "smooth",
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen bg-[#faf8f3] py-9 sm:py-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Compact Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#9A7000] mb-2">
            Loved by Our Customers
          </p>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900">
            Customer Reviews
          </h2>

          <div className="w-12 h-px bg-[#9A7000] mx-auto mt-3" />
        </div>

        {/* Slider Arrows */}
        <div className="flex justify-end gap-2 mb-3">
          <button
            type="button"
            onClick={() => slide("prev")}
            aria-label="Previous customer reviews"
            className="w-8 h-8 rounded-full border border-[#c89116]/40 text-[#9A7000] hover:bg-[#9A7000] hover:text-white transition flex items-center justify-center"
          >
            &#8592;
          </button>

          <button
            type="button"
            onClick={() => slide("next")}
            aria-label="Next customer reviews"
            className="w-8 h-8 rounded-full border border-[#c89116]/40 text-[#9A7000] hover:bg-[#9A7000] hover:text-white transition flex items-center justify-center"
          >
            &#8594;
          </button>
        </div>

        {/* Review Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              data-review-card
              className="min-w-[78%] sm:min-w-[40%] lg:min-w-[24%] snap-start bg-white border border-[#c89116]/15 flex flex-col"
            >
              {/* Compact Product Photo */}
              <div className="aspect-[5/3] overflow-hidden bg-[#f1eee7]">
                <img
                  src={review.image}
                  alt="Product photo for customer review"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Compact Review Details */}
              <div className="p-4 flex flex-col flex-1">
                <div
                  className="flex gap-0.5 text-[#9A7000] text-sm mb-2"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} aria-hidden="true">
                      {index < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm leading-5 text-gray-600 flex-1 line-clamp-3">
                  “{review.text}”
                </blockquote>

                <div className="border-t border-gray-100 mt-3 pt-3">
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">
                    {review.customerName}
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 mt-1">
                    Customer Review
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
