import Image from "next/image";
const Testimonial = () => {
  return (
    <>
      <section className="container flex gap-8 mx-auto">
        <div className="bg-white dark:bg-gray-900 w-1/4 rounded-lg overflow-hidden shadow-md">
          <Image
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Placeholder image"
            width={"500"}
            height={"500"}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">John sena</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-6">
              "I had the pleasure of working with a MERN stack developer who
              utilized Tailwind CSS to create a beautiful and functional website
              for my business. Their attention to detail and ability to bring my
              vision to life was truly impressive. I highly recommend them to
              anyone in need of web development services."
            </p>
            <div className="flex items-center mt-4">
              <div className="rounded-full mr-4">
                <Image
                  className="w-10 h-10 object-cover"
                  src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_960_720.png"
                  alt="Placeholder image"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-100 font-bold">
                  Jane Doe
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  CEO, ABC Company
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 w-1/4 rounded-lg overflow-hidden shadow-md">
          <Image
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Placeholder image"
            width={"500"}
            height={"500"}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">John Smith</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-6">
              "I had the pleasure of working with a MERN stack developer who
              utilized Tailwind CSS to create a beautiful and functional website
              for my business. Their attention to detail and ability to bring my
              vision to life was truly impressive. I highly recommend them to
              anyone in need of web development services."
            </p>
            <div className="flex items-center mt-4">
              <div className="rounded-full mr-4">
                <Image
                  className="w-10 h-10 object-cover"
                  src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_960_720.png"
                  alt="Placeholder image"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-100 font-bold">
                  Jane Doe
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  CEO, ABC Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
