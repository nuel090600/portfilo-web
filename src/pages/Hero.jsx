// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/Hero2.svg';


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24"
    >
      {/* LEFT TEXT */}
      <div className="flex-1 text-left space-y-6 mt-10 md:mt-0">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          HI, I AM <br />
          <span className="">ADENUGA EMMANUEL.</span>
        </h1>

        <p className="text-gray-300 max-w-lg text-lg leading-relaxed">
          A Equality-Centered front-end developer passionate about building
          accessible and user-friendly websites.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-5 mt-6">
          <a
            href="#contact"
            className="bg-lime-400 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-lime-500 transition"
          >
            CONTACT ME
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 p-3 rounded-full hover:bg-gray-800 transition"
          >
            <FaLinkedinIn size={20} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 p-3 rounded-full hover:bg-gray-800 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>  

     <div className="flex-1 flex justify-center">
  <img
    src={profileImg}
    alt="Robert Garcia"
    className="
      w-full 
      max-w-[320px]     /* Perfect size on mobile */
      md:max-w-[420px]  /* Slightly bigger on desktop */
      lg:max-w-[500px]  /* Large screens */
      rounded-xl 
      object-contain 
      pt-10    
    "
  />
</div>

    </section>
  );
};

export default Hero;
