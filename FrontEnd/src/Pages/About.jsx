import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section className="border-t pt-14 sm:pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#8A6500]">
            Our Story
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            About <span className="text-[#8A6500]">Noorza</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-gray-500">
            Designed for confidence. Made for comfort. Noorza brings together
            quality, elegance and everyday comfort to create lingerie and
            essentials women can feel confident wearing every day.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-0 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#c89116]/40" />

            <img
              src={assets.about}
              alt="Noorza"
              className="relative w-full h-[440px] sm:h-[520px] object-contain rounded-2xl"
            />

            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#c89116]/40" />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#8A6500]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
              Comfort that feels as good as it looks.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-500">
              <p>
                Noorza is a women-focused fashion and essentials brand built
                around one simple idea — every woman deserves to feel
                comfortable, confident and beautiful in what she wears.
              </p>

              <p>
                We carefully focus on comfortable designs, reliable quality and
                styles that fit naturally into everyday life. From everyday
                essentials to elegant lingerie, every Noorza product is selected
                with comfort and confidence in mind.
              </p>

              <p>
                Our goal is not simply to sell products. We want to create a
                shopping experience where quality, privacy, convenience and
                customer satisfaction always come first.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-[#c89116]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-700">
                Noorza Essentials
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
