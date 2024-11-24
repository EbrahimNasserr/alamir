import Breadcrumb from "@/components/GlobalSwiper/Breadcrumb";
import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="py-10 px-4">
      <Breadcrumb />
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            width={500}
            height={500}
            src="/about-removebg-preview.png"
            alt="Super Coffee"
            loading="lazy"
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div className="md:ml-8 mt-6 md:mt-0 w-full md:w-2/3">
            <h2 className="text-2xl text-slate-600 font-bold">
              Variety Pack of 12
            </h2>
            <div className="flex items-center my-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="ml-2 text-slate-600 text-sm">(19 reviews)</span>
            </div>
            <ul className="text-slate-600 mb-4">
              <li>10g of Lactose-Free Whey Protein</li>
              <li>5g of Healthy Fats</li>
              <li>1g of Carb</li>
              <li>200mg of Caffeine - All Day Energy</li>
            </ul>
            <p className="text-textPrimary text-2xl font-bold mb-4">$39.99</p>
            <div className="flex items-center mb-4">
              <button className="bg-slate-200 text-slate-600 px-3 py-1 rounded-md">
                -
              </button>
              <span className="mx-3 text-lg">1</span>
              <button className="bg-slate-200 text-slate-600 px-3 py-1 rounded-md">
                +
              </button>
            </div>
            <button className="bg-textPrimary text-white py-3 w-full rounded-md transition duration-300">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
