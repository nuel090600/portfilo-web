import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault();
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-black text-white px-6 md:px-16 py-20" id="contact">
      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold uppercase">Let’s Connect</h2>

          <div>
            <p className="text-sm text-gray-300">
              Say hello at <a href="mailto:ehmmygal@gmail.com" className="underline">ehmmygal@gmail.com</a>
            </p>
            <p className="text-sm text-gray-300 mt-1">
              For more info, here’s my <a href="#" className="underline">resume</a>
            </p>
          </div>

          <div className="flex space-x-4 text-lime-400 text-xl mt-4">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          <p className="text-xs text-gray-500 pt-12">© 2025 Adenuga Emmanuel</p>
        </div>

        {/* Right Column — Form */}
        <div className="md:w-1/2">
          <form
            action="https://formspree.io/f/xrbqvajb"  
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-sm block mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name?"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-gray-700 text-white px-4 py-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-gray-700 text-white px-4 py-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm block mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-gray-700 text-white px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-neutral-900 border border-gray-700 text-white px-4 py-2 rounded"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-lime-400 text-black font-semibold px-6 py-2 rounded text-sm hover:bg-lime-300 transition"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-400 text-sm mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
