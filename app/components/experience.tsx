import React from "react";
import ExperineceCard from "./ExperineceCard";

const experienceData = [
  {
    image: "/logos/capaciti-logo.jpeg",
    title: "IT Suuport Traning",
    company: "Capaciti",
    location: "GQ, South Africa",
    period: "May 2025 - Present",
    type: "Full Time",
    description:
      "Currently enrolled in a hands-on IT Support training program with Capaciti focused on building core technical support skills. The program covers essential areas including hardware and software troubleshooting, operating system support (Windows & Linux), network fundamentals, ticketing systems, and customer service best practices and AI essentials. I'm also gaining exposure to real-world IT environments, remote support tools, and documentation processes, preparing for roles such as IT Technician or Desktop Support Specialist",
  },
  {
    image: "/logos/velisa-logo.jpeg",
    title: "Full-Stack Developer",
    company: "Velisa Africa Academy",
    location: "Remote",
    period: "Feb 2024 - Oct 2024",
    type: "Contract",
    description:
      "Built and deployed full-stack application using the MERN stack(MongoDB, Express.js, React.js, Node.js), applying RESTful API's, CRUD operations and responsive UI design. Learned web development fundamentals, full-stack app development. Gained experience in debugging, testing and deploying processes. Completed final capstone project demonstrating end-to-end development and problem-solving. ",
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
