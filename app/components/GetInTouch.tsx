import React from "react";

const GetInTouch = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20 px-6 text-white">
      {/* CDN for Devicon (include this in your _document.js or index.html if not already) */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-400 mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Feel free to reach out through any of the contact methods below —
          whether you have a question, opportunity, or just want to say hi!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Email */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
            <i className="devicon-google-plain colored text-4xl mb-3"></i>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm break-all">
              duwayneblok@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
            <i className="devicon-apple-original colored text-4xl mb-3"></i>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-300 text-sm">+27 63 103 1668</p>
          </div>

          {/* Address */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
            <i className="devicon-windows8-original colored text-4xl mb-3"></i>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-300 text-sm">
              Gqeberha, Eastern Cape, South Africa
            </p>
          </div>

          {/* Socials */}
          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition">
            <i className="devicon-devicon-plain text-green-400 text-4xl mb-3"></i>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex justify-center gap-4 mt-2 text-3xl">
              <a
                href="https://github.com/DFBlok"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 transition"
              >
                <i className="devicon-github-original colored"></i>
              </a>
              <a
                href="hhttps://www.linkedin.com/in/duwayne-blok-9bb2b8184"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 transition"
              >
                <i className="devicon-linkedin-plain colored"></i>
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 transition"
              >
                <i className="devicon-twitter-original colored"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
