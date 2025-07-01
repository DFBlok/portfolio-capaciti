import GetInTouch from "@/app/components/GetInTouch";
import React from "react";

const contactPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-accent">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-center mb-12">
            Whether you have a question, a project idea, or just want to
            connect—feel free to reach out!
          </p>

          <form
            action="https://formsubmit.co/your-email@example.com" // Replace with your email or backend endpoint
            method="POST"
            className="bg-white/10 backdrop-blur p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-black font-semibold py-2 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <GetInTouch />
      </section>
    </div>
  );
};

export default contactPage;
