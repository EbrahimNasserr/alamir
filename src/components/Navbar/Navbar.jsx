import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { AiOutlineBars } from "react-icons/ai";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="">
      <marquee width="100%" direction="left" className="bg-textPrimary text-white p-3">
        This is a sample scrolling text that scrolls upwards
      </marquee>
      <div className="max-w-screen-xl px-6 py-4 mx-auto flex flex-wrap items-center justify-between bg-white shadow-md">
        <div className="flex items-center">
          <button className="text-2xl bg-Primary text-textPrimary p-1 rounded-md w-12 h-12 flex items-center justify-center">
            <HiBars3CenterLeft size={20} />
          </button>
          <Link href="/" className="text-2xl font-bold ml-4 text-textPrimary">
            DeepBazar
          </Link>
        </div>
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
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-textPrimary">
            <AiOutlineBars size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
