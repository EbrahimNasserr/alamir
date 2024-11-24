"use client";
import { useState } from "react";
import { CiHome } from "react-icons/ci";

const Cart = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <nav className="mb-4">
            <span className="text-slate-600 text-sm uppercase font-semibold flex items-center gap-1">
              <CiHome /> Home &gt; Shop
            </span>
          </nav>
          <div className="flex">
            <aside className="w-1/4 p-4 bg-white shadow-md text-slate-600">
              <h2 className="font-bold mb-2 capitalize text-xl">Category</h2>
              <div className="bg-slate-600 h-[1px] w-full"></div>
              {/* Add category filters here */}
              <h2 className="font-bold mt-4 mb-2">Price</h2>
              <div className="flex mb-2">
                <div className="mr-2 w-1/2">
                  <input
                    type="number"
                    id="minPrice"
                    placeholder=" Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border p-1 w-full rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="number"
                    id="maxPrice"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="border p-1 w-full rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  All Price
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  Under $20
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  $25 to $100
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  $100 to $300
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  $300 to $500
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  $500 to $1000
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" />
                  $1000 to $10000
                </label>
              </div>
            </aside>
            <main className="w-3/4 px-4">
              <h2 className=" bg-textPrimary text-slate-200 p-2 rounded-md flex justify-between">
                Active Filters:
                <span className="text-slate-200">0 result found</span>
              </h2>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
