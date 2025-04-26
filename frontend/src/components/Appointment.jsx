import React from 'react';
import img1 from '../assets/img-1.png';
import img2 from '../assets/img-2.png';

const Appointment = () => {
  return (
    <div className="max-w-[1150px] mx-auto px-4 py-16" style={{height: '755px'}}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-[#FFD700] font-bold text-4xl mb-3">
              High Quality
            </h2>
            <h1 className="text-[40px] lg:text-[48px] font-bold text-gray-800 leading-tight mb-4">
              Let's Start Your Education!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              It is a long established fact that a reader will be distracted by the readable
            </p>
            <button 
              className="px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-white transition-all duration-300"
            >
              Make Appointment
            </button>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="flex-1 relative min-h-[500px]">
          {/* Top Image */}
          <div className="absolute top-0 right-0 w-[85%] z-10">
            <img
              src={img1}
              alt="Male instructor"
              className="w-full h-[300px] object-cover shadow-lg"
            />
          </div>
          
          <div style={{ left: '-190px', bottom: '-130px' }} className="absolute w-[85%]">
            <img
              src={img2}
              alt="Female instructor"
              className="w-full h-[300px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;