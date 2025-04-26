import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to the library
library.add(faPhone, faEnvelope, faFacebook, faTwitter, faLinkedin, faInstagram, faArrowRight);

const Footer = () => {
  return (
    <footer className="bg-[#161616] relative text-white mt-24 py-16 pt-24">
      {/* Newsletter Section */}
      <div className="max-w-[1150px] absolute -top-20 left-40 w-full mx-auto px-4 mb-16">
        <div className="bg-[#2A1B3D] p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-6">Subscribe Our Newsletter</h3>
          <div className="flex max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your email"
              className="flex-1 p-3 rounded-l bg-white text-gray-800 focus:outline-none"
            />
            <button className="bg-[#FFD700] text-2xl text-[#2A1B3D] px-6 rounded-r hover:bg-opacity-90">
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="max-w-[1150px] mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">Get In Touch</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#FFD700]"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#FFD700]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#FFD700]"
          />
          <textarea
            placeholder="Message"
            rows="1"
            className="w-full p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-[#FFD700]"
          ></textarea>
          <div className="text-center">
            <button className="px-8 py-2 border-2 border-[#FFD700] bg-[transparent] text-[#FFD700] hover:bg-[#FFF]">
              SEND
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="flex justify-center gap-8 mt-8 mb-8">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} /> Call Now:
            <a href="tel:+01123467890" className="hover:text-[#FFD700]">+01123467890</a>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email:</span>
            <a href="mailto:test123@gmail.com" className="hover:text-[#FFD700]">test123@gmail.com</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 text-[#161616]" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 text-[#161616]" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 text-[#161616]" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-[#161616]" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>{new Date().getFullYear()} All Rights Reserved. Design by WAE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;