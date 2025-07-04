import { title } from "process";
import React from "react";

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
      demo: "https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/14/06/20250514063834-O1X9R03B.json",
      video: "/videos/Blok_Duwayne_AIChatbot_Demo.mp4",
    },
    {
      title: "Custom Content Generator",
      category: "Solo Project",
      description:
        "A generative AI tool that allows users to generate copy, visuals, and structured content for marketing, education, and documentation use cases.",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Recoil"],
      image: "/content-generator.jpg",
      github: "https://github.com/duwayneblok/content-generator",
      demo: "https://content-gen-demo.vercel.app",
      video: "",
    },
    {
      title: "AI Resume Builder",
      category: "Solo Project",
      description:
        "The AI-enchanced Resume builder. The web application allow users to input personal and professional data and receive an ai-generated professional resume. It supports real-time preview, data persistence via Supabase and ensures privacy-first design.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "loveable.ai"],
      image: "/RESUME-BUILDER.svg",
      github: "https://github.com/DFBlok/agile-resume-architect",
      demo: "https://agile-resume-architect.vercel.app/",
      video: "", // Add YouTube or hosted video link if needed
    },
    {
      title: "Sentiment Analysis Dashboard",
      category: "Group Project",
      description:
        "my team and I developed an AI-powered Sentiment Analysis Dashboard that enables users to upload or input text from various formats (CSV, DOCX, PDF) and receive insightful analysis, including real-time sentiment classification(Postive, Neutral, Negative), Confidence scores for each predication, Interactive visualization with export options (CSV, PDF, DOCX), etc",
      tech: ["Python", "Streamlit", "NLP"],
      Image: "/sentimentAnalysis.jpg",
      github: "https://github.com/DFBlok/Sentiment-App",
      demo: "https://dfblok-sentiment-app-srcapp-fwvh5u.streamlit.app/",
      video: "/videos/Sentiment_Dashboard_Demo.mp4",
    },
    {
      title: "AccessVoice AI",
      category: "Group Project",
      description:
        "My team and I were created a accessibility tool for the individuals who are visual and hearining impaired. The tool convert voice into text, summarieze content, Image to text/voice features. I was in charge of the Image to voice feature using Gemini 2.0 Flash-Lite API.",
      tech: [
        "React 18",
        "Vite",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "API",
      ],
      image: "/hearing-tool.jpg",
      github: "https://github.com/Lisekho3/ai-accessebility-project-34",
      demo: "https://ai-accessebility-project-34.vercel.app/",
      video: "/videos/Accessibility_video.mp4",
    },
  ];
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-900 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10 text-accent text-center">
          Projects
        </h1>
        <p className="text-sm text-gray-400 mb-10 text-accent text-center">
          Here are some of the projects I've worked on, showcasing my skills in
          AI, web development, and software engineering. Each project reflects
          my commitment to building innovative and impactful solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2 border-white/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <span
                className="text-sm text-white mb-3 inline-block bg-accent px-3 py-1
               rounded-full uppercase bg-green-300/40"
              >
                {project.category}
              </span>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                />
              )} */}

              {/**Videos Preview */}
              {project.video ? (
                <video
                  controls
                  className="rounded-lg w-full h-48 object-cover mb-3 border border-white/10"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-48 object-cover mb-3 border border-white/10"
                  />
                )
              )}

              {/**Action Button */}
              <div className="mt-4 flex justify-between items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                  >
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-black px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
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
  );
};

export default Projects;
