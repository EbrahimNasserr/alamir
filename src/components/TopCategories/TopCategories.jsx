import Image from "next/image";

const TopCategories = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl  text-center sm:text-left font-bold text-slate-600 uppercase mb-5">
          Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-lg p-4 hover:shadow-textPrimary transition-shadow shadow-md">
            <Image
              src="/about-removebg-preview.png"
              alt="Category 1"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold text-slate-600 text-center my-5 capitalize">
              health and Beauty care
            </h3>
          </div>
          <div className="bg-white rounded-lg p-4 hover:shadow-textPrimary transition-shadow shadow-md">
            <Image
              src="/about-removebg-preview.png"
              alt="Category 1"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold text-slate-600 text-center my-5 capitalize">
              offers
            </h3>
          </div>
          <div className="bg-white rounded-lg p-4 hover:shadow-textPrimary transition-shadow shadow-md">
            <Image
              src="/about-removebg-preview.png"
              alt="Category 1"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold text-slate-600 text-center my-5 capitalize">
              Mother and Baby Care
            </h3>
          </div>
          <div className="bg-white rounded-lg p-4 hover:shadow-textPrimary transition-shadow shadow-md">
            <Image
              src="/about-removebg-preview.png"
              alt="Category 1"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold text-slate-600 text-center my-5 capitalize">
              Dermocosmetics
            </h3>
          </div>
          <div className="bg-white rounded-lg p-4 hover:shadow-textPrimary transition-shadow shadow-md">
            <Image
              src="/about-removebg-preview.png"
              alt="Category 1"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold text-slate-600 text-center my-5 capitalize">
              Home
            </h3>
          </div>
          <div className="bg-white rounded-lg p-4 hover:shadow-textPrimary transition-shadow shadow-md">
            <Image
              src="/about-removebg-preview.png"
              alt="Category 1"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-semibold text-slate-600 text-center my-5 capitalize">
              Medical supplies
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
