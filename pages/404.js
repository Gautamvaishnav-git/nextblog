import Link from "next/link";

const fourOfour = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-md w-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-700">404</h1>
            <p className="text-2xl font-semibold text-gray-600 mt-4">
              Oops! Page not found
            </p>
            <p className="text-gray-500 mt-2">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Go back to homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default fourOfour;
