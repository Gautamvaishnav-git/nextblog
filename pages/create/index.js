import { useState } from "react";

const create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const baseURI = process.env.API_BASE_URI;
  const createPost = async (e) => {
    e.preventDefault();
    const data = await fetch(`/api/`, {
      method: "POST",
      body: { name, email },
      "content-type": "application/json",
    });
    const res = await data.json();
    console.log(name, email);
  };
  return (
    <>
      <form className="container mx-auto py-8" onSubmit={createPost}>
        <h3 className="py-3 text-2xl text-gray-300">Create a post</h3>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-1 px-2 bg-slate-800 text-white border border-transparent focus:outline-none focus:border-indigo-500 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-1 px-2 bg-slate-800 text-white border border-transparent focus:outline-none focus:border-indigo-500 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="text-sm bg-indigo-600 py-1 px-3 rounded"
        >
          Create
        </button>
      </form>
    </>
  );
};
export default create;
