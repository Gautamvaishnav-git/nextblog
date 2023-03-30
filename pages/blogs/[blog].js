// import { useRouter } from "next/router";

const blogPage = ({ blogData, err }) => {
  if (err)
    return (
      <div className="container mx-auto pt-8">
        <h2 className="text-2xl text-white font-medium capitalize bg-slate-500/30 w-fit rounded py-2 px-4">
          {err}
        </h2>
      </div>
    );
  return (
    <>
      <div className="container mx-auto py-2 px-2">
        <h2 className="text-3xl text-indigo-500 py-2 font-semibold">
          {blogData.title}
        </h2>
        <div className="flex gap-4 py-3">
          {blogData.tags &&
            blogData.tags.map((tag, index) => {
              return (
                <button
                  key={index}
                  className="border bg-slate-800 border-slate-500/10 shadow px-3 py-1 rounded text-gray-200"
                >
                  {tag}
                </button>
              );
            })}
        </div>
        <p className="py-2 leading-7 sm:w-1/2 text-lg text-gray-300">
          {blogData.body}
        </p>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { blog } = params;
  try {
    const respData = await fetch(`https://dummyjson.com/posts/${blog}`);
    const blogData = await respData.json();
    return { props: { blogData, err: false } };
  } catch (error) {
    return { props: { blogData: [], err: error.message } };
  }
};

export default blogPage;
