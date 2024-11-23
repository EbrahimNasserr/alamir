"use client"
import Link from "next/link";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <marquee
        width="100%"
        direction="left"
        className="bg-textPrimary text-white p-3"
      >
        This is a sample scrolling text that scrolls upwards
      </marquee>
      <div className="max-w-screen-xl px-6 py-4 mx-auto flex flex-wrap items-center justify-between bg-white shadow-md">
        <div className="flex items-center relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl bg-Primary text-textPrimary p-1 rounded-md w-12 h-12 flex items-center justify-center transition-colors duration-200 hover:bg-opacity-90"
          >
            <HiBars3CenterLeft size={20} className={`transition-transform duration-200`} />
          </button>
          <Link href="/" className="text-2xl font-bold ml-4 text-textPrimary">
            DeepBazar
          </Link>
          
          <div className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 origin-top-left
            ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
          >
            <Link
              href="/login"
              className="px-4 py-2 text-slate-600 hover:bg-gray-100 flex items-center gap-2 transition-colors duration-150"
            >
              <CiUser className="text-textPrimary" size={20} />
              Login/SignUp
            </Link>
            <Link
              href="/wishlist"
              className="px-4 py-2 text-slate-600 hover:bg-gray-100 flex items-center gap-2 transition-colors duration-150"
            >
              <CiHeart className="text-textPrimary" size={20} />
              Wishlist
            </Link>
            <Link
              href="/cart"
              className="px-4 py-2 text-slate-600 hover:bg-gray-100 flex items-center gap-2 transition-colors duration-150"
            >
              <IoCartOutline className="text-textPrimary" size={20} />
              Cart
            </Link>
          </div>
        </div>
        <SearchInput />
        <nav className=" items-center space-x-6 hidden sm:flex">
          <Link
            href="/login"
            className="text-slate-600 font-semibold flex items-center gap-2"
          >
            <CiUser className="text-textPrimary" size={20} />
            Login/SignUp
          </Link>
          <Link
            href="/wishlist"
            className="text-slate-600 font-semibold flex items-center gap-2"
          >
            <CiHeart className="text-textPrimary" size={20} />
            Wishlist
          </Link>
          <Link
            href="/cart"
            className="text-slate-600 font-semibold flex items-center gap-2"
          >
            <IoCartOutline className="text-textPrimary" size={20} />
            Cart
          </Link>
        </nav>
        <button className="bg-Primary text-textPrimary px-4 py-2 rounded-md sm:hidden">
          en
        </button>
      </div>
    </header>
  );
};

export default Navbar;
