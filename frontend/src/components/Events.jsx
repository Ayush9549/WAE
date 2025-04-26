import React from 'react';

const Events = () => {
  return (
    <div className="bg-[#2A1B3D] py-16">
      <div className="container max-w-[1150px] mx-auto px-">
        <h2 className="text-5xl font-bold text-[#FFD700] mb-4">Events</h2>
        <p className="text-white text-base mb-20">
          It is a long established fact that a reader will be distracted by the readable c
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* First Event Card */}
          <div className="bg-white font-black tracking-wider shadow-lg">
            <div className="relative mx-6">
              <img 
                src="./src/assets/img-8.png" 
                alt="Student with headphones" 
                className="w-full h-84 object-cover -mt-12"
              />
              <div className="absolute bottom-0 m-3 left-0 right-0 p-4 bg-black bg-opacity-50">
                <p className="text-white text-lg">
                  It is a long established fact that a reader will be distracted by the readable content of a
                </p>
              </div>
            </div>
            <div className="px-4 pb-6 flex mx-2 font-bold justify-between items-center">
              <span className="text-gray-700">Live event</span>
              <span className="text-[#FFD700]">04 Nov 2023</span>
            </div>
          </div>

          {/* Second Event Card */}
          <div className="bg-white font-black tracking-wider shadow-lg">
            <div className="relative mx-6">
              <img 
                src="./src/assets/img-7.png" 
                alt="Student studying" 
                className="w-full h-84 -mt-12 object-cover"
              />
              <div className="absolute bottom-0 m-3 left-0 right-0 p-4 bg-black bg-opacity-50">
                <p className="text-white text-lg">
                  It is a long established fact that a reader will be distracted by the readable content of a
                </p>
              </div>
            </div>
            <div className="px-4 pb-6 mx-2 flex justify-between items-center">
              <span className="text-gray-700">Live event</span>
              <span className="text-[#FFD700]">04 Nov 2023</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-10 py-3 border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFFFFF] hover:text-[#FFD700] transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;