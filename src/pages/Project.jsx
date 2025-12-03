import React from "react";
import profileImg from '../assets/Hero2.svg';
const projects = [
  {
    title: "Nuel House - Real Estate Platform",
    description:
      "A modern real estate platform showcasing property listings with advanced filtering, image galleries, and contact features.",
    image:
      "https://res.cloudinary.com/dqqectes0/image/upload/v1764662309/Screenshot_2025_better_j2kvfv.png",
    tags: ["Real Estate"],
    projectInfo: {
      role: "Full Stack Developer",
      year: "2024",
      team: "Solo Project",
    },
    links: {
      live: "https://nuel-house.vercel.app/",
      source: "https://nuel090600.github.io/nuel-house/",
    },
  },
  {
    title: "Emma Burgers - Restaurant Website",
    description:
      "A delicious burger restaurant website featuring menu items, online ordering, and smooth UI interactions.",
    image:
      "https://res.cloudinary.com/dqqectes0/image/upload/v1764662445/Screenshot_2025_burger_qdsh5c.png",
    tags: ["Food & Restaurant"],
    projectInfo: {
      role: "Full Stack Developer",
      year: "2024",
      team: "Solo Project",
    },
    links: {
      live: "https://emma-burgers.vercel.app/",
      source: "https://github.com/emann0001/burger-place",
    },
  },
  {
    title: "Countries API - World Explorer",
    description:
      "An interactive country info explorer with search, filters, and detailed region insights.",
    image:
      "https://res.cloudinary.com/dqqectes0/image/upload/v1764662597/Screenshot_2025_country_can6q1.png",
    tags: ["API Integration"],
    projectInfo: {
      role: "Frontend Developer",
      year: "2025",
      team: "Solo Project",
    },
    links: {
      live: "http://countrysssss.vercel.app",
      source: "https://emann0001.github.io/Rest-countries/",
    },
  },
];

const FeaturedProjects = () => {
  return (
    <>
      {/* FEATURED PROJECTS SECTION */}
      <section
        id="projects"
        className="bg-[#0A0A0A] text-white px-6 md:px-20 py-24"
      >
        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mt-3 leading-relaxed">
            Some highlights from my recent works — showcasing my approach to
            design, development, and user-focused solutions.
          </p>
        </div>

        <div className="space-y-28">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row gap-10 items-start"
            >
              {/* LEFT — CLEAN IMAGE */}
              <div className="w-full lg:w-3/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full 
                    h-auto 
                    max-h-[500px]
                    md:max-h-[650px]
                    object-contain
                    rounded-2xl
                    shadow-lg
                  "
                  loading="lazy"
                />
              </div>

              {/* RIGHT — CONTENT */}
              <div className="w-full lg:w-2/5 space-y-6">
                {/* Tag */}
                <div>
                  <span className="px-4 py-1.5 bg-lime-400/10 text-lime-400 text-xs font-semibold rounded-full">
                    {project.tags[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="pt-6">
                  <h4 className="text-xs text-gray-500 tracking-widest uppercase mb-4">
                    Project Info
                  </h4>

                  <div className="space-y-4">
                    {Object.entries(project.projectInfo).map(([key, val]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b border-white/10 pb-3"
                      >
                        <span className="text-gray-400">{key}</span>
                        <span className="text-white font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="pt-8 flex gap-8 border-t border-white/10">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-400 font-medium flex items-center gap-2 group"
                  >
                    Live Demo{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-400 font-medium flex items-center gap-2 group"
                  >
                    GitHub{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-24">
          <button className="px-10 py-4 bg-lime-400 text-black font-semibold rounded-xl hover:bg-lime-300 transition-all">
            View All Projects →
          </button>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="bg-[#0A0A0A] text-white px-6 md:px-20 py-24 border-t border-white/5"
      >
        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* LEFT – IMAGE */}
          <div className="w-full md:w-1/2">
            <img
                src={profileImg}
                alt="Robert Garcia"
                className="
                  w-full 
                  max-w-[400px]     /* Perfect size on mobile */
                  md:max-w-[400px]  /* Slightly bigger on desktop */
                  lg:max-w-[5000px]  /* Large screens */
                  rounded-xl 
                  object-contain 
                  pt-10    
                "
              />
          </div>

          {/* RIGHT – TEXT */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate <span className="text-lime-400">Frontend & Full-Stack Developer</span> who
              builds clean, modern and user-focused digital experiences.
              I enjoy creating products that look great, feel smooth, and solve
              real problems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From real estate platforms to restaurant websites and API-driven dashboards,
              I bring ideas to life with precision, creativity, and attention to detail.
            </p>

            <div className="pt-4">
              <button className="px-8 py-3 bg-lime-400 text-black font-semibold rounded-xl hover:bg-lime-300 transition-all">
                Download Resume →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
