import GlobalSwiper from "../GlobalSwiper/GlobalSwiper";
const ChicoCompany = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for product 1",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for product 2",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description for product 3",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description for product 4",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description for product 5",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=1000&auto=format&fit=crop",
    },
    // ... add more products
  ];
  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl text-center sm:text-left font-bold text-slate-600 uppercase mb-5">
          Chico Company
        </h2>
        <GlobalSwiper products={products} />
      </div>
    </section>
  );
};

export default ChicoCompany;
