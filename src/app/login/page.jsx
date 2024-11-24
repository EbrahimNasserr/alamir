import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <section>
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-slate-600 uppercase"
        >
          <Image
            width={50}
            height={50}
            loading="lazy"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          alamir
        </Link>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-600 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="">
                <svg
                  id="sw-js-blob-svg"
                  className=" absolute top-0 -z-10 w-1/2 h-1/2w-1/2"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="sw-gradient"
                      x1="0"
                      x2="1"
                      y1="1"
                      y2="0"
                    >
                      <stop
                        id="stop1"
                        stop-color="rgba(255, 255, 255, 0.38)"
                        offset="0%"
                      ></stop>
                      <stop
                        id="stop2"
                        stop-color="#008ECC"
                        offset="100%"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#sw-gradient)"
                    d="M18.1,-24.8C23.1,-17.4,26.6,-11.3,28,-4.8C29.3,1.8,28.4,8.8,26,16.8C23.5,24.8,19.5,33.6,13,36.2C6.5,38.8,-2.5,35.1,-10.7,31.3C-18.8,27.4,-26.2,23.4,-31.9,16.8C-37.6,10.2,-41.7,1.1,-40.3,-7.1C-38.9,-15.3,-32,-22.6,-24.3,-29.5C-16.7,-36.5,-8.4,-43.1,-0.9,-42C6.5,-41,13.1,-32.2,18.1,-24.8Z"
                    width="100%"
                    height="100%"
                    transform="translate(50 50)"
                    stroke-width="0"
                    stroke="url(#sw-gradient)"
                  ></path>{" "}
                </svg>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-slate-600"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-slate-600border border-slate-600 text-slate-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-slate-600"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-slate-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-slate-600border border-slate-600 text-slate-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  placeholder-slate-600"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-slate-50 bg-textPrimary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-slate-600">
                Don’t have an account yet?
                <Link
                  href="/signup"
                  className="font-medium text-textPrimary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
