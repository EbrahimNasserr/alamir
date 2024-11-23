import Link from "next/link";
import {
  CiHeart,
  CiHome,
  CiShop,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";


const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden z-20">
      <ul className="grid grid-cols-5 pb-2">
        {/* Shop */}
        <li className="flex flex-col items-center text-textPrimary">
          <Link href="/shop" className="flex flex-col items-center">
            <CiShop className="text-lg" />
            <span className="text-xs mt-1">Shop</span>
          </Link>
        </li>

        {/* Favorite */}
        <li className="flex flex-col items-center text-textPrimary">
          <Link href="/favorite" className="flex flex-col items-center">
            <CiHeart className="text-lg" />
            <span className="text-xs mt-1">Favorite</span>
          </Link>
        </li>

        {/* Home */}
        <li className="flex flex-col items-center text-textPrimary border-t-2 border-textPrimary bg-Primary ">
          <Link href="/" className="flex flex-col items-center ">
            <CiHome className="text-lg" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </li>

        {/* Cart */}
        <li className="flex flex-col items-center text-textPrimary relative">
          <Link href="/cart" className="flex flex-col items-center">
            <CiShoppingCart className="text-lg" />
            <span className="text-xs mt-1">Cart</span>
            {/* Notification badge */}
            <span className="absolute -top-2 -right text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </li>

        {/* Login */}
        <li className="flex flex-col items-center text-textPrimary">
          <Link href="/login" className="flex flex-col items-center">
            <CiUser className="text-lg" />
            <span className="text-xs mt-1">Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
