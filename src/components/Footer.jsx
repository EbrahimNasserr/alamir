import Link from "next/link";
import { CiPhone, CiFacebook, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-textPrimary text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">DeepBazar</h3>
          <h4 className="font-semibold">Contact Us</h4>
          <p className="mt-2 flex items-center gap-2">
            <CiPhone /> +880-01304802278
          </p>
          <Link href="#" className=" mt-2 hover:text-yellow-300 flex items-center gap-2">
            <CiFacebook />
            Facebook
          </Link>
          <Link
            href="#"
            className=" mt-1 hover:text-yellow-300 flex items-center gap-2"
          >
            <CiLinkedin />
            LinkedIn
          </Link>
          <Link
            href="#"
            className="block mt-4 underline hover:text-yellow-300 "
          >
            Created by Shariar
          </Link>
        </div>

        {/* Column 2: Menu */}
        <div>
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Best Offers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Track Order
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Cart
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Sell On DeepBazar
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Sign Up/Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Category */}
        <div>
          <h3 className="text-xl font-bold mb-4">Category</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Watch
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Smart Phone
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Laptop
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Camera
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-300">
                Audio
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Schedule */}
        <div>
          <h3 className="text-xl font-bold mb-4">Schedule</h3>
          <ul className="space-y-2">
            <li>
              Monday - Friday:{" "}
              <span className="text-yellow-300">9AM - 10PM</span>
            </li>
            <li>
              Saturday: <span className="text-yellow-300">9AM - 9PM</span>
            </li>
            <li>
              Sunday: <span className="text-yellow-300">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-300">
        © DeepBazar 2023
      </div>
    </footer>
  );
};

export default Footer;
