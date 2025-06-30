import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "AI Educational Chatbot",
      category: "Solo Project",
      description:
        "An interactive chatbot built with Botpress and AI APIs to teach users about AI fundamentals, ethics, and real-world applications.",
      tech: ["Botpress", "Hugging Face", "React", "Tailwind"],
      image: "/ai-chatbot.jpg",
      github: "https://github.com/duwayneblok/ai-chatbot",
      demo: "https://ai-edu-chatbot-demo.vercel.app",
      video: "",
    },
    {
      title: "Custom Content Generator",
      category : "Solo Project",
      description:
        "A generative AI tool that allows users to generate copy, visuals, and structured content for marketing, education, and documentation use cases.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Recoil"],
      image: "/content-generator.jpg",
      github: "https://github.com/duwayneblok/content-generator",
      demo: "https://content-gen-demo.vercel.app",
      video: "",
    },
    {
      title: "CV Builder",
      category: "Solo Project",
      description:
        "A full-stack booking platform using Next.js 13, Stripe, MongoDB, Prisma, and Vercel for seamless appointments and payments.",
      tech: ["Next.js", "Stripe", "MongoDB", "Prisma"],
      image: "/RESUME-BUILDER.svg",
      github: "https://github.com/duwayneblok/cv-builder",
      demo: "https://cv-builder-demo.vercel.app",
      video: "", // Add YouTube or hosted video link if needed
    },
  ];
  return (
    <section className="min-h-screen py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-accent text-center">Projects</h1>
       <p className="text-sm text-gray-400 mb-10 text-accent text-center">
        Here are some of the projects I've worked on, showcasing my skills in AI, web development, and software engineering. Each project reflects my commitment to building innovative and impactful solutions.
       </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <span className="text-sm text-white mb-2 block p-3
               rounded-full bg-black">{project.category}</span>
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-accent text-black px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                />
                
              )}
              
              {/**Videos Preview */}
              {project.video &&(
                <div>
                  <video controls 
                   className='rounded-lg w-full max-h-64 object-cover'>
                     <source src={project.video} type="video/mp4" />Your browser does not support the video tag. 
                    </video>
                </div>
              )}

              {/**Action Button */}
              <div className='mt-4 flex justify-between items-center'>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
                  >
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-black px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  )
}

export default Projects