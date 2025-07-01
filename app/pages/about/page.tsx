import React from "react";
import Experience from "@/app/components/experience";

export default function About() {
  return (
    <>
      <main className="max-w-4xl mx-auto py-16 px-4 min-h-screen ">
        <h1 className="relative text-4xl font-bold mb-8 uppercase inline-block after:block after:content-[''] after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-2">
          About Me
        </h1>
        <p>I'm a Freelance front-end Developer</p>
        <p className="mt-4 text-2xl">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I code and create web elements for amazing
          people around the world. I like work with new people. New people new
          Experiences.
        </p>
        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300">
          Contact Me
        </button>
        <hr className="m-6" />
        <h1 className="relative text-4xl font-bold mb-6 uppercase inline-block after:block after:content-[''] after:w-12 after:h-1 after:bg-green-500 after:mx-auto after:mt-2">
          {">"}Education & Skills
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Education Section */}
          <div className="md:w-1/2">
            <ul>
              <li className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  2012-2024
                </span>
                <h6 className="font-bold pl-5 mt-3">Graphic Designer</h6>
                <p className="pl-5">International Design Institute</p>
              </li>
              <li className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  2013-2015
                </span>
                <h6 className="font-bold pl-5 mt-3">Web Designer</h6>
                <p className="pl-5">Digital Media School</p>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="md:w-1/2 bg-green-400 p-4 rounded-2xl">
            <div className="flex justify-center">
              <h2 className="text-xl text-black font-bold uppercase">
                My Skills
              </h2>
            </div>

            {/* ICONS */}
            <div className="flex gap-6 justify-center mt-4 flex-wrap">
              <i className="devicon-html5-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-css3-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-javascript-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-csharp-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-react-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-python-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-docker-plain text-4xl colored hexagon-wrapper"></i>
            </div>
          </div>
        </div>
        <hr />

        <hr />

        <Experience />
      </main>
    </>
  );
}
