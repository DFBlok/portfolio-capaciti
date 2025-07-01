"use client";
import React from "react";
import Experience from "@/app/components/experience";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <>
      <main className="max-w-4xl mx-auto py-16 px-4 min-h-screen ">
        <h1 className="relative text-4xl font-bold mb-8 uppercase inline-block after:block after:content-[''] after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-2">
          About Me
        </h1>
        <p className="text-lg text-gray-200 mb-4">
          I'm a Freelance{" "}
          <span className="text-green-300 font-semibold">
            <Typewriter
              words={[
                "Web Developer",
                "Full-Stack Developer",
                "React Enthusiast",
                "AI Builder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <p className="text-xl text-gray-400 leading-relaxed">
          I'm a Front-End Developer with a strong foundation in full-stack
          development and a passion for creating clean, responsive, and
          user-focused web applications. With over 3 years of experience, I’ve
          worked on diverse projects—from online booking platforms to AI-powered
          educational tools—using technologies like React, Next.js, .NET Core,
          Prisma, and MongoDB.
        </p>

        <p className="mt-4 text-xl text-gray-400 leading-relaxed">
          I’m constantly learning and enjoy collaborating with others to build
          solutions that are both beautiful and functional. Whether it's
          implementing seamless payment systems with Stripe or building scalable
          APIs, I take pride in writing code that delivers real value.
        </p>

        <p className="mt-4 text-xl text-gray-400 leading-relaxed">
          Currently, I’m looking for exciting opportunities where I can grow as
          a developer, contribute to meaningful projects, and be part of a team
          that values creativity, learning, and innovation.
        </p>
        {/*         <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300">
          Contact Me
        </button> */}
        <button className="group mt-8 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white bg-green-500 rounded-full shadow-lg transition-all duration-300 ease-out hover:bg-green-600 hover:shadow-xl">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform scale-0 group-hover:scale-100 group-hover:bg-white opacity-10 rounded-full"></span>
          <span className="relative z-10 flex items-center gap-2">
            Contact Me
            <svg
              className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
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
                  2020-2022
                </span>
                <h6 className="font-bold pl-5 mt-3">
                  Diploma in IT(Software Development)
                </h6>
                <p className="pl-5">Nelson Mandela University</p>
              </li>
              <li className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                  2019-2019
                </span>
                <h6 className="font-bold pl-5 mt-3">
                  Higher Certificate in User Support Service
                </h6>
                <p className="pl-5">Nelson Mandela University</p>
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
              <i className="devicon-mongodb-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-postgresql-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-nextjs-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-tailwindcss-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-typescript-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-figma-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-vercel-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-postman-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-prisma-plain text-4xl colored hexagon-wrapper"></i>
              <i className="devicon-aspnet-plain text-4xl colored hexagon-wrapper">
                <div className="w-12 h-12">
                  <img
                    src="/icons/huggingface.svg"
                    alt="hugginface"
                    className="w-full h-full object-contain"
                  />
                </div>
              </i>
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
