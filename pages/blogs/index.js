import Head from "next/head";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className=" bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">My Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/id/699/500/700"
                alt="Blog post 1 image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  Building a MERN stack app from scratch
                </h2>
                <p className="text-gray-300 mb-4">
                  Learn how to build a MERN stack app from scratch, step by
                  step.
                </p>
                <Link
                  href="/blogs/1"
                  className="text-indigo-500 font-medium hover:text-indigo-600 transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/id/247/500/700"
                alt="Blog post 2 image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  Best practices for MERN stack development
                </h2>
                <p className="text-gray-300 mb-4">
                  Discover the best practices for developing MERN stack
                  applications, including tips for performance optimization and
                  security.
                </p>
                <Link
                  href="/blogs/2"
                  className="text-indigo-500 font-medium hover:text-indigo-600 transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/id/152/500/700"
                alt="Blog post 3 image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  Scaling a MERN stack app for high traffic
                </h2>
                <p className="text-gray-300 mb-4">
                  Learn how to scale a MERN stack application to handle high
                  traffic loads and ensure high availability.
                </p>
                <Link
                  href="/blogs/3"
                  className="text-indigo-500 font-medium hover:text-indigo-600 transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
