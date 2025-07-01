import React from "react";
import ExperineceCard from "./ExperineceCard";

const experienceData = [
  {
    image: "/a1.png",
    title: "Front-End Developer",
    company: "WeLab",
    location: "Remote",
    period: "Jan 2019 - Present",
    type: "Full Time",
    description:
      "Worked on developing responsive UI components and integrating REST APIs. Contributed to performance optimization and cross-browser compatibility fixes.",
  },
];

const Experience = () => {
  return (
    <div>
      <h1 className="relative text-4xl font-bold mt-8 mb-8 uppercase inline-block after:block after:content-[''] after:w-16 after:h-1 after:bg-green-500 after:mx-auto after:mt-2">
        {">"}Experience
      </h1>

      {experienceData.map((exp, index) => (
        <ExperineceCard key={index} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
