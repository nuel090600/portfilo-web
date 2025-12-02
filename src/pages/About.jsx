import React from 'react';
import profileImg from '../assets/Hero2.svg';
function About() {
  return (
    <div className="bg-black text-white min-h-screen font-sans pt-20">
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* ABOUT ME + IMAGE GRID */}
        <section className="mb-20 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* ABOUT ME TEXT */}
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">ABOUT ME</h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              I am a front-end developer based in Nigeria. Has Office Technology Management background.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am a front-end developer based in Nigeria looking for exciting opportunities. Has
              Office Technology Management background. Likes to focus on accessibility when creating
              websites and applications to ensure users get the best experience. Currently, I'm enjoying
              React.js, Next.js, and everything about Web Development. During my free time, I enjoy
              playing football, photography and playing keyboard. Learning more to improve daily!
            </p>

            <div className="mb-8">
              <a href="#" className="bg-lime-400 px-6 py-3 rounded-lg text-black font-semibold hover:bg-lime-300 transition-colors duration-300 inline-block">
                DOWNLOAD RESUME
              </a>
            </div>

            <div className="flex space-x-6 text-lime-400 text-xl">
              <a href="#" className="hover:text-lime-300 transition-colors duration-300">in</a>
              <a href="#" className="hover:text-lime-300 transition-colors duration-300">@</a>
              <a href="#" className="hover:text-lime-300 transition-colors duration-300">o</a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="mt-12 lg:mt-0 flex justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-2xl w-full max-w-md lg:max-w-lg shadow-2xl"
            />
          </div>
        </section>

        <div className="border-t border-gray-800 my-16"></div>

        {/* MY CAPABILITIES */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-6 tracking-tight">MY CAPABILITIES</h3>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
              I am always looking to add more skills. More updates means new talents! Currently focused on modern web technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JAVASCRIPT', 'JQUERY', 'ACCESSIBILITY', 'FIGMA', 'TAILWIND CSS', 'REACT', 'NEXT.JS', 'GIT', 'RESPONSIVE DESIGN'].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-gray-900 px-4 py-3 rounded-lg text-sm font-medium border border-gray-800 hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-gray-800 my-16"></div>

        {/* EXPERIENCE */}
        <section className="mb-20">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 tracking-tight">MY EXPERIENCE</h3>
            
            <div className="space-y-12">
              <div className="border-l-4 border-lime-400 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <h4 className="text-xl font-semibold mb-2 sm:mb-0">Freelance Developer</h4>
                  <span className="text-lime-400 font-medium bg-lime-400 bg-opacity-10 px-3 py-1 rounded-full text-sm">Nov 2023 - Present</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Working with various clients to build responsive web applications using modern technologies. 
                  Specializing in React.js, Next.js, and creating accessible user interfaces that provide 
                  exceptional user experiences across all devices.
                </p>
              </div>

              <div className="border-l-4 border-lime-400 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Front-End Intern</h4>
                    <span className="text-gray-300 font-medium">Rose Tech</span>
                  </div>
                  <span className="text-lime-400 font-medium bg-lime-400 bg-opacity-10 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">Sep 2023 - Nov 2023</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Collaborated with senior developers to build and maintain web applications. 
                  Gained hands-on experience with React.js, state management, and modern CSS frameworks. 
                  Participated in code reviews and agile development processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section>
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 tracking-tight">EDUCATION</h3>
            <div className="border-l-4 border-lime-400 pl-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold mb-1">Mechanical Engineering</h4>
                  <span className="text-gray-300 font-medium">University of Technology</span>
                </div>
                <span className="text-lime-400 font-medium bg-lime-400 bg-opacity-10 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">2018 - 2022</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bachelor's degree in Mechanical Engineering with focus on problem-solving, 
                analytical thinking, and technical design principles that translate well into software development.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;