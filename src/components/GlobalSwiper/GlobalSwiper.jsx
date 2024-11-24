"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
const GlobalSwiper = ({ products }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {products?.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                loading="lazy"
                className="w-full h-48 object-cover rounded-md"
              />
              <button
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                onClick={() => {
                  /* Add favourite logic */
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-slate-600">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-600">
                  ${product.price}
                </span>
                <button
                  className="px-4 py-2 bg-textPrimary text-white rounded-md"
                  onClick={() => {
                    /* Add to cart logic */
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GlobalSwiper;
