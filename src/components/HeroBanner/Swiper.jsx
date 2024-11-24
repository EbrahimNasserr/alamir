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
    description: "Discover our latest collection of smart watches with advanced features and sleek designs.",
    buttonText: "Shop Now",
    imageUrl: "/about-removebg-preview.png",
  },
  {
    id: 2,
    title: "NEW ARRIVALS",
    description: "Experience the future of wearable technology with our newest smart watch models.",
    buttonText: "Explore More",
    imageUrl: "/about-removebg-preview.png",
  },
  {
    id: 3,
    title: "SPECIAL OFFER",
    description: "Limited time offer on premium smart watches. Don't miss out on amazing deals.",
    buttonText: "View Deals",
    imageUrl: "/about-removebg-preview.png",
  },
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
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="relative h-full p-12">
            <div className="container mx-auto h-full flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                {/* Text Content */}
                <div className="space-y-4 text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-600">
                    {banner.title}
                  </h1>
                  <p className="text-lg text-gray-600">
                    {banner.description}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300">
                    {banner.buttonText}
                  </button>
                </div>
                
                {/* Image */}
                <div className="relative h-[300px]">
                  <Image
                    src={banner.imageUrl}
                    alt={banner.title}
                    fill
                    className="object-contain"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
