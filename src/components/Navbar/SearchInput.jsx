"use client";
import { AiOutlineBars } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full lg:flex-grow lg:w-auto lg:mx-8 order-last lg:order-none mt-4 lg:mt-0 bg-Primary relative">
      <CiSearch
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-textPrimary"
        size={20}
      />
      <input
        type="text"
        placeholder="Search DeepBazar..."
        className="w-full p-2 border rounded-md pl-7 outline-none focus:none bg-transparent"
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-textPrimary"
      >
        <AiOutlineBars
          size={20}
          className={`transform transition-transform duration-300`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-600">Categories</h3>
          <hr className="border-gray-300 my-2" />
          <ul className="grid grid-cols-2 sm:grid-cols-4 text-slate-600">
            <li>
              <a
                href="#"
                className="block hover:bg-Primary px-2 py-1 transition-colors duration-200"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:bg-Primary px-2 py-1 transition-colors duration-200"
              >
                Clothing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:bg-Primary px-2 py-1 transition-colors duration-200"
              >
                Books
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:bg-Primary px-2 py-1 transition-colors duration-200"
              >
                Home & Garden
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
