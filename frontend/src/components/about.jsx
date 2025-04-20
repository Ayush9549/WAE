import React from 'react';
import aboutImg from '../assets/img-6.png';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12">About</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="flex-1 relative">
          <div className="relative group cursor-pointer">
            <img
              src={aboutImg}
              alt="Language instructor"
              className="w-full rounded-lg shadow-lg"
            />
            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-yellow-400 text-2xl">▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Best Tranning Language School
          </h3>
          <p className="text-gray-600 leading-relaxed">
            It is a long established fact that a reader will be distracted by the
            readable content of a pageit is a long established fact that a reader
            will be distracted by the readable content of a page
          </p>
          <button className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;