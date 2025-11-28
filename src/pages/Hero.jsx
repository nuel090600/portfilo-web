// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImg from '../assets/Hero2.svg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-10"
    >
 
      <div className="flex-1 text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          HI, I AM <br /> ROBERT GARCIA.
        </h1>
        <p className="text-gray-300 mb-6 max-w-md">
          A Equality-Centered front-end developer passionate about building
          accessible and user-friendly websites.
        </p>
        <div className="flex justify-start items-center gap-4">
          <a
            href="#contact"
            className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-500 transition"
          >
            CONTACT ME
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-800"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 rounded-full p-2 hover:bg-gray-800"
          >
            <FaGithub />
          </a>
        </div>
      </div>


      <div className="flex-1">
        <img
          src={profileImg}
          alt="Robert Garcia"
          className="rounded-lg w-full mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default Hero;
