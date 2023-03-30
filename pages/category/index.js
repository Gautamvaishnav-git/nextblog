import Head from "next/head";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className=" bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">My Blog</h1>
          <div className="p-4 my-2 bg-slate-800 rounded">
            <h1 className="text-xl font-medium mb-3">Categories :</h1>
            <div className="flex gap-4">
              <Link
                href="/category/love"
                className="px-2 text-sm grow-[0.03] rounded text-center py-2 bg-indigo-500/30 border border-indigo-500/40 shadow hover:bg-indigo-600 duration-150 capitalize"
              >
                Love
              </Link>
              <Link
                href="/category/calm"
                className="px-2 text-sm grow-[0.03] rounded text-center py-2 bg-indigo-500/30 border border-indigo-500/40 shadow hover:bg-indigo-600 duration-150 capitalize"
              >
                calm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
