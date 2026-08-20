import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const InstagramLogo = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
};

const InstagramSection = () => {
  const { backendUrl } = useContext(ShopContext);

  const [posts, setPosts] = useState([]);

  const getInstagramPosts = async () => {
    try {
      const response = await fetch(backendUrl + "/api/instagram/list");

      const data = await response.json();

      if (data.success) {
        const uniquePosts = Array.from(
          new Map(data.posts.map((post) => [post._id, post])).values(),
        );

        setPosts(uniquePosts);
      }
    } catch (error) {
      console.log("Instagram Error:", error);
    }
  };

  useEffect(() => {
    getInstagramPosts();
  }, []);

  return (
    <section className="relative my-16 sm:my-20 overflow-hidden -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]">
      {/* ================================================= */}
      {/* MAIN SECTION */}
      {/* ================================================= */}

      <div
        className="
          relative
          py-10
          sm:py-12
          bg-[#faf8f3]
          border-y
          border-[#c89116]/20
          overflow-hidden
        "
      >
        {/* ================= DECORATIVE BACKGROUND ================= */}

        <div
          className="
          absolute
          -top-24
          -left-24
          w-64
          h-64
          rounded-full
          bg-[#c89116]/5
          blur-3xl
          pointer-events-none
        "
        />

        <div
          className="
          absolute
          -bottom-24
          -right-24
          w-72
          h-72
          rounded-full
          bg-[#c89116]/5
          blur-3xl
          pointer-events-none
        "
        />

        {/* ================= HEADING ================= */}

        <div className="relative z-10 text-center mb-10 sm:mb-12">
          <div className="text-xl sm:text-2xl md:text-3xl">
            <Title text1="FOLLOW US ON" text2="INSTAGRAM" />
          </div>
        </div>

        {/* ================================================= */}
        {/* POSTS */}
        {/* ================================================= */}

        {posts.length > 0 ? (
          <div
            className="
            relative
            z-10
            w-full
            overflow-hidden
          "
          >
            {/* LEFT FADE */}

            <div
              className="
              absolute
              left-0
              top-0
              bottom-0
              w-12
              sm:w-24
              bg-gradient-to-r
              from-[#faf8f3]
              via-[#faf8f3]/90
              to-transparent
              z-30
              pointer-events-none
            "
            />

            {/* RIGHT FADE */}

            <div
              className="
              absolute
              right-0
              top-0
              bottom-0
              w-12
              sm:w-24
              bg-gradient-to-l
              from-[#faf8f3]
              via-[#faf8f3]/90
              to-transparent
              z-30
              pointer-events-none
            "
            />

            {/* ================= SLIDER ================= */}

            <div
              className="
                instagram-slider
                flex
                gap-5
                sm:gap-7
                md:gap-8
                w-max
                hover:[animation-play-state:paused]
                px-4
              "
            >
              {/* FIRST SET */}

              {posts.map((post, index) => (
                <InstagramCard key={`first-${post._id}-${index}`} post={post} />
              ))}

              {/* SECOND SET */}

              {posts.map((post, index) => (
                <InstagramCard
                  key={`second-${post._id}-${index}`}
                  post={post}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            className="
            relative
            z-10
            text-center
            py-10
            text-sm
            text-gray-400
          "
          >
            Follow Noorza on Instagram for more styles and inspiration.
          </div>
        )}
      </div>

      {/* ================================================= */}
      {/* ANIMATION */}
      {/* ================================================= */}

      <style>
        {`

   .instagram-slider {
  animation: noorzaInstagram 30s linear infinite;
  will-change: transform;
}

@keyframes noorzaInstagram {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

          @media (max-width: 640px) {

            .instagram-slider {
              animation-duration: 24s;
            }

          }

        `}
      </style>
    </section>
  );
};

/* ================================================= */
/* INSTAGRAM CARD */
/* ================================================= */

const InstagramCard = ({ post }) => {
  return (
    <a
      href={post.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        flex-shrink-0
        p-[5px]
        bg-white
        border
        border-[#c89116]/25
        shadow-[0_8px_30px_rgba(0,0,0,0.07)]
        transition-all
        duration-500
        hover:border-[#c89116]/60
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      "
    >
      {/* IMAGE FRAME */}

      <div
        className="
        relative
        w-[230px]
        h-[230px]
        sm:w-[260px]
        sm:h-[260px]
        md:w-[285px]
        md:h-[285px]
        lg:w-[300px]
        lg:h-[300px]
        overflow-hidden
        bg-gray-100
      "
      >
        <img
          src={post.image}
          alt={post.caption || "Noorza Instagram"}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* DARK HOVER */}

        <div
          className="
          absolute
          inset-0
          bg-black/0
          group-hover:bg-black/35
          transition-all
          duration-500
        "
        />

        {/* ================= INSTAGRAM INFO ================= */}

        <div
          className="
          absolute
          left-0
          right-0
          bottom-0
          px-4
          py-4
          translate-y-full
          group-hover:translate-y-0
          transition-transform
          duration-500
          ease-out
          bg-gradient-to-t
          from-black/75
          via-black/40
          to-transparent
        "
        >
          <div
            className="
            flex
            items-center
            gap-2
            text-white
          "
          >
            <InstagramLogo size={20} />

            <span
              className="
              text-xs
              sm:text-sm
              font-medium
              tracking-wide
            "
            >
              noorza_essentials
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default InstagramSection;
