import React from "react";
import profileImg from "../assets/Hero2.svg";

function About() {
  return (
    <div className="bg-black text-white pt-24 pb-12 font-sans">
      <main className="max-w-7xl mx-auto px-6">

        {/* ABOUT SECTION */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              ABOUT ME
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              I’m a front-end developer based in Nigeria with a background in
              Office Technology & Management.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              I build accessible, modern, and responsive digital experiences.
              I enjoy working with React.js, Next.js, Tailwind CSS, API
              integrations, and anything that makes the web beautiful and
              functional. Outside tech, I enjoy football, photography, and
              music. I learn every day to improve my craft.
            </p>

            {/* RESUME BUTTON */}
            <a
              href="#"
              className="inline-block bg-lime-400 text-black font-semibold px-7 py-3 rounded-xl hover:bg-lime-300 transition"
            >
              Download Resume
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-8 text-2xl text-lime-400">
              <a href="#" className="hover:text-lime-300 transition">in</a>
              <a href="#" className="hover:text-lime-300 transition">@</a>
              <a href="#" className="hover:text-lime-300 transition">o</a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            {/* Glow shape like Figma */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-lime-400 opacity-20 blur-xl rounded-xl -z-10"></div>

            <div className="mt-12 lg:mt-0 flex justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-2xl w-full max-w-md lg:max-w-lg shadow-2xl"
            />
          </div>
          </div>
        </section>

        <div className="border-t border-gray-800 mb-24"></div>

        {/* SKILLS */}
        <section className="mb-28">
          <h3 className="text-3xl font-bold mb-4 tracking-tight">My Capabilities</h3>
          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            I love learning modern web technologies. The web evolves daily,
            and so do I. Here are the technologies I use often.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",           
              "TAILWIND CSS",
              "REACT",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#111] border border-gray-800 px-4 py-3 rounded-lg text-sm text-gray-300 hover:border-lime-400 hover:text-lime-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-800 mb-24"></div>

        {/* EXPERIENCE */}
        <section className="mb-28">
          <h3 className="text-3xl font-bold mb-10 tracking-tight">My Experience</h3>

          <div className="space-y-14">

            {/* Experience Item */}
            <div className="border-l-4 border-lime-400 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <h4 className="text-xl font-semibold">Full-Stack Developer</h4>
                <span className="text-lime-400 text-sm bg-lime-400/10 px-3 py-1 rounded-full">
                  Nov 2024 – Present
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed"> 
                Building responsive and modern applications for clients using React,
                Next.js, and clean UI principles. Focused on accessibility and 
                cross-device performance.
              </p>
            </div>

            <div className="border-l-4 border-lime-400 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold">Front-End Intern</h4>
                  <span className="text-gray-300">Tech Studio</span>
                </div>
                <span className="text-lime-400 text-sm bg-lime-400/10 px-3 py-1 rounded-full">
                  Sep 2023 – Nov 2023
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Worked with senior developers to maintain and improve web apps.
                Involved in UI development, debugging, and agile workflow.
              </p>
            </div>

          </div>
        </section>

        <div className="border-t border-gray-800 mb-24"></div>

        {/* EDUCATION */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-10 tracking-tight">Education</h3>

          <div className="border-l-4 border-lime-400 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-3">
              <div>
                <h4 className="text-xl font-semibold">Office Technology Management</h4>
                <span className="text-gray-300">University of Technology</span>
              </div>
              <span className="text-lime-400 text-sm bg-lime-400/10 px-3 py-1 rounded-full">
                2018 – 2022
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Problem-solving, analytical thinking, and design principles that
              help me approach software with structure and creativity.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;


