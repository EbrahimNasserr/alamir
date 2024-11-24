import React from "react";
import GlobalSwiper from "../GlobalSwiper/GlobalSwiper";

const Offers = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for product 1",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for product 2",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description for product 3",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description for product 4",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description for product 5",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?q=80&w=1000&auto=format&fit=crop",
    },
    // ... add more products
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl  text-center sm:text-left font-bold text-slate-600 uppercase mb-5">
          offers
        </h2>
        <GlobalSwiper products={products} />
      </div>
    </section>
  );
};

export default Offers;
