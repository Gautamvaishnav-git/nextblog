import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-l from-cyan-500  to-purple-600 bg-clip-text">
              MERN Stack Developer
            </h1>
            <p className="text-lg mb-8">
              I specialize in building dynamic web applications with the MERN
              (MongoDB, Express, React, Node.js) stack.
            </p>
            <a
              href="https://gautamvaishnav.live"
              target="_blank"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              View Portfolio
            </a>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-8 flex justify-center">
            <Image
              src="https://fastly.picsum.photos/id/122/400/400.jpg?hmac=yU9i-eHFYuzHiGntDMBiD1Nm0ox7UDvhvyDPXPQIZds"
              alt="Developer working on code"
              className="rounded-full shadow-md"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
