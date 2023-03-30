import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="text-3xl font-bold text-transparent bg-gradient-to-r to-teal-500 from-indigo-500 bg-clip-text lowercase tracking-widest"
                href="/"
              >
                Gautam
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-1 text-gray-200 hover:text-gray-400 md:mx-4 md:my-0"
                href="/"
              >
                Home
              </Link>
              <Link
                className="my-1 text-gray-200 hover:text-gray-400 md:mx-4 md:my-0"
                href="/about"
              >
                About
              </Link>
              <Link
                className="my-1 text-gray-200 hover:text-gray-400 md:mx-4 md:my-0"
                href="/blogs"
              >
                Blog
              </Link>
              <Link
                className="my-1 text-gray-200 hover:text-gray-400 md:mx-4 md:my-0"
                href="/category"
              >
                Category
              </Link>
              <Link
                className="my-1 text-gray-200 hover:text-gray-400 md:mx-4 md:my-0"
                href="/create"
              >
                Create
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
