import GlobalSwiper from "@/components/GlobalSwiper/GlobalSwiper";
const SkinCare = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for product 1",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=500",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for product 2",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=500",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description for product 3",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description for product 4",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description for product 5",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=500",
    },
    // ... add more products
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl text-center sm:text-left font-bold text-slate-600 uppercase mb-5">
          Skin Care
        </h2>
        <GlobalSwiper products={products} />
      </div>
    </section>
  );
};

export default SkinCare;
