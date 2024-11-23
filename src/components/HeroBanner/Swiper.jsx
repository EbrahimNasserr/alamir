"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const banners = [
  {
    id: 1,
    title: "SMART WEARABLE",
    subtitle: "Best Deal Online on Smart Watches",
    offer: "UP to 80% OFF",
    imageUrl: "/vercel.svg",
  },
  {
    id: 2,
    title: "SMART WEARABLE",
    subtitle: "Best Deal Online on Smart Watches",
    offer: "UP to 80% OFF",
    imageUrl: "/vercel.svg",
  },
  {
    id: 3,
    title: "SMART WEARABLE",
    subtitle: "Best Deal Online on Smart Watches",
    offer: "UP to 80% OFF",
    imageUrl: "/vercel.svg",
  },
  // Add more banner objects as needed
];

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="h-[300px]"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                {banner.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
                {banner.subtitle}
              </p>
              <p className="text-base sm:text-lg md:text-xl font-semibold">
                {banner.offer}
              </p>
            </div>
            <div className="absolute right-4 sm:right-6 lg:right-10 bottom-5 w-32 sm:w-48 md:w-56 lg:w-64">
              <Image
                src={banner.imageUrl}
                alt="Smart Watch"
                className="w-full object-cover"
                width={256}
                height={256}
                priority={true}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
