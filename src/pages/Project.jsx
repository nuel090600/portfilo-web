import React from 'react';

const projects = [
  {
    title: 'Nuel House - Real Estate Platform',
    description: 'A modern real estate platform showcasing property listings with advanced filtering, image galleries, and contact features. Built with responsive design for optimal viewing on all devices.',
    image: 'https://res.cloudinary.com/dqqectes0/image/upload/v1747941904/project1_ttzclg.svg',
    tags: ['Real Estate'],
    projectInfo: {
      role: 'Full Stack Developer',
      year: '2024',
      team: 'Solo Project',
    },
    links: {
      live: 'https://nuel-house.vercel.app/',
      source: 'https://nuel090600.github.io/nuel-house/',
    },
  },
  {
    title: 'Emma Burgers - Restaurant Website',
    description: 'A delicious burger restaurant website featuring menu items, online ordering system, and restaurant information. Designed with food aesthetics and user-friendly navigation.',
    image: 'https://res.cloudinary.com/dqqectes0/image/upload/v1747941904/project2_uttsae.svg',
    tags: ['Food & Restaurant'],
    projectInfo: {
      role: 'Frontend Developer',
      year: '2024',
      team: 'Solo Project',
    },
    links: {
      live: 'https://emma-burgers.vercel.app/',
      source: 'https://github.com/emann0001/burger-place',
    },
  },
  {
    title: 'Countries API - World Explorer',
    description: 'An interactive country information application that fetches data from REST Countries API. Features search, filtering by region, and detailed country profiles with borders and demographics.',
    image: 'https://res.cloudinary.com/dqqectes0/image/upload/v1747941904/project3_rnl4gg.svg',
    tags: ['API Integration'],
    projectInfo: {
      role: 'Frontend Developer',
      year: '2024',
      team: 'Solo Project',
    },
    links: {
      live: 'http://countrysssss.vercel.app',
      source: 'https://emann0001.github.io/Rest-countries/',
    },
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">FEATURED PROJECTS</h2>
      <p className="text-gray-400 mb-10 max-w-xl">
        Here are some of the selected projects that showcase my passion for design and development.
      </p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 border border-gray-700 rounded-xl p-6"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-[300px] h-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-md"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-sm text-lime-400 font-semibold uppercase tracking-wider">
                  {project.tags.join(', ')}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>

              <div className="text-sm text-gray-400 mb-4">
                <div className="mb-2">PROJECT INFO:</div>
                <div className="grid grid-cols-2 gap-y-1">
                  <div>Role</div>
                  <div className="text-right">{project.projectInfo.role}</div>
                  <hr className='col-span-2 w-full my-2' />
                  <div>Year</div>
                  <div className="text-right">{project.projectInfo.year}</div>
                  <hr className='col-span-2 w-full my-2' />
                  <div>Team</div>
                  <div className="text-right">{project.projectInfo.team}</div>
                  <hr className='col-span-2 w-full my-2' />
                </div>
              </div>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 font-semibold hover:underline"
                >
                  LIVE DEMO ↗
                </a>
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 font-semibold hover:underline"
                >
                  SEE ON GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;