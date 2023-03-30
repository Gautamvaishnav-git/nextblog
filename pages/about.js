import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <header className="bg-slate-900 text-white shadow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-white">About Me</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            I'm a web developer with a passion for creating engaging and
            responsive websites. I have experience in HTML, CSS, JavaScript, and
            several popular frameworks and libraries.
          </p>
        </div>
      </header>

      <section className="bg-slate-900 text-white">
        <main className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">My Skills</h2>
            <ul className="list-disc list-inside">
              <li>HTML5</li>
              <li>CSS3 (including preprocessors like Sass)</li>
              <li>JavaScript (including frameworks like React and NextJS)</li>
              <li>Backend technologies like Node.js</li>
              <li>Database technologies like MongoDB</li>
              <li>APIs and third-party integrations</li>
            </ul>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              My Work
            </h2>
            <p className="text-gray-300">
              Here are some examples of web applications I have worked on:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <a href="#">URL shortner</a>
              </li>
              <li>
                <a href="#">Eocmmerce</a>
              </li>
              <li>
                <a href="#">Crypto</a>
              </li>
            </ul>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
