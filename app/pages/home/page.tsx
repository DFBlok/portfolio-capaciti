"use client";
import Head from "next/head";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Duwayne Blok | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Duwayne Blok – AI-powered software developer specializing in React, Next.js, and .NET Core."
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        {/* Avatar */}
        <div className="mb-6">
          <Image
            src="/profile/avatar1.jpg"
            alt="Duwayne Blok"
            width={120}
            height={120}
            className="rounded-full border-4 border-green-500 shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm Duwayne 👋
        </h1>

        {/* Typewriter */}
        <h2 className="text-xl md:text-2xl font-medium text-green-400 mb-4">
          <Typewriter
            words={[
              "AI-Powered Web Developer",
              "Full-Stack Software Engineer",
              "Next.js & .NET Core Specialist",
              "Building Real-World Solutions",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-300 max-w-xl mb-6">
          I build scalable, performant, and intelligent apps using modern tools
          like React, Next.js, .NET Core, and AI APIs. Let’s collaborate and
          create impactful software.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-6 text-2xl text-green-400">
          <a
            href="https://www.linkedin.com/in/duwayne-blok-9bb2b8184"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-green-300 transition duration-300" />
          </a>
          <a
            href="https://github.com/DFBlok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-green-300 transition duration-300" />
          </a>
          <a href="mailto:duwayneblok01@gmail.com">
            <FaEnvelope className="hover:text-green-300 transition duration-300" />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="/Duwayne_Blok_CV(update-Jan-06).pdf"
          download
          className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-green-500 rounded-full shadow-lg transition-all duration-300 ease-out hover:bg-green-600 hover:shadow-xl"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform scale-0 group-hover:scale-100 group-hover:bg-white opacity-10 rounded-full"></span>
          <span className="relative z-10 flex items-center gap-2">
            Download CV
            <svg
              className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 5v14M5 12h14M12 19l7-7-7-7" />
            </svg>
          </span>
        </a>
      </main>
    </>
  );
}
