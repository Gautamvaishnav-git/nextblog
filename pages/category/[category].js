import Link from "next/link";

const Category = (props) => {
  const { posts } = props.res;
  if (props.err)
    return (
      <div className="container mx-auto pt-8">
        <h2 className="text-2xl text-white font-medium capitalize bg-slate-500/30 w-fit rounded py-2 px-4">{props.err}</h2>
      </div>
    );
  return (
    <>
      <div className="container mx-auto pt-8">
        <h2 className="text-blue-500 text-3xl pb-3 font-medium">Love</h2>
        <div className="flex gap-4 flex-col py-2">
          {posts &&
            posts.map((post, index) => {
              return (
                <Link
                  key={post.id}
                  href={`/blogs/${post.id}`}
                  className="bg-slate-800/40 p-4 rounded-md text-base text-indigo-400 hover:text-white duration-150 hover:bg-slate-800/80"
                >
                  <span className="pr-3 font-medium">{index + 1}.</span>{" "}
                  {post.title}
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { category } = params;

  try {
    const data = await fetch(
      `https://dummyjson.com/posts/search?q=${category}`
    );
    const res = await data.json();
    return {
      props: { res, err: false },
    };
  } catch (error) {
    return {
      props: { err: error.message, res: { post: [] } },
    };
  }
};

export default Category;
