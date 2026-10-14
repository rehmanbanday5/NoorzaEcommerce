import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    text: "Beautiful quality and a lovely shopping experience. The product feels comfortable and the finishing is excellent.",
    rating: 5,
    customerName: "Ayesha K.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    text: "I really appreciate the attention to detail. The overall quality and presentation exceeded my expectations.",
    rating: 5,
    customerName: "Sana M.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
    text: "A lovely experience from start to finish. The product looks beautiful and feels thoughtfully made.",
    rating: 5,
    customerName: "Hira A.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
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

    const gap = 20;
    const distance = card.offsetWidth + gap;

    if (direction === "next") {
      const atEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      if (atEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: distance, behavior: "smooth" });
      }
    } else {
      if (slider.scrollLeft <= 10) {
        slider.scrollTo({
          left: slider.scrollWidth,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({ left: -distance, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      const card = slider.querySelector("[data-review-card]");

      if (!card) return;

      const distance = card.offsetWidth + 20;
      const atEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      if (atEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: distance, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen bg-[#faf8f3] py-14 sm:py-20 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#9A7000] mb-3">
            Loved by Our Customers
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900">
            Real Women. Real Experiences.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-7">
            Every Noorza experience tells a story. Discover the love, comfort
            and confidence behind our products.
          </p>

          <div className="w-16 h-px bg-[#9A7000] mx-auto mt-6" />
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            type="button"
            onClick={() => slide("prev")}
            aria-label="Previous customer reviews"
            className="w-10 h-10 rounded-full border border-[#c89116]/40 text-[#9A7000] hover:bg-[#9A7000] hover:text-white transition duration-300 flex items-center justify-center"
          >
            &#8592;
          </button>

          <button
            type="button"
            onClick={() => slide("next")}
            aria-label="Next customer reviews"
            className="w-10 h-10 rounded-full border border-[#c89116]/40 text-[#9A7000] hover:bg-[#9A7000] hover:text-white transition duration-300 flex items-center justify-center"
          >
            &#8594;
          </button>
        </div>

        {/* Review Carousel */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              data-review-card
              className="min-w-[85%] sm:min-w-[48%] lg:min-w-[31.5%] snap-start bg-white border border-[#c89116]/15 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Customer Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#f1eee7]">
                <img
                  src={review.image}
                  alt="Customer review photo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1.5">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#80600d]">
                    Noorza Experience
                  </span>
                </div>
              </div>

              {/* Review Details */}
              <div className="p-5 sm:p-7 flex flex-col flex-1">
                <blockquote className="text-sm sm:text-base leading-7 text-gray-600 flex-1">
                  “{review.text}”
                </blockquote>

                {/* Star Rating */}
                <div
                  className="flex gap-1 text-[#9A7000] mt-5 mb-4"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} aria-hidden="true">
                      {index < review.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                {/* Customer Name */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold tracking-wide text-gray-900">
                    {review.customerName}
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.16em] text-gray-400 mt-1">
                    Customer Review
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Swipe to explore more experiences
        </p>
      </div>
    </section>
  );
};

export default ReviewSection;
