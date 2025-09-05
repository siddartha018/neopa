import React from 'react';

const YourFuture = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Subtitle */}
          <div className="inline-block mb-6">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              YOUR FUTURE, TOGETHER
            </p>
            <div className="w-52 h-0.5 bg-gray-400 mx-auto mt-2"></div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8 max-w-4xl mx-auto">
            Let&apos;s Build Something Meaningful Together
          </h1>
          
          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Have a project in mind? We&apos;re ready to turn your vision into a brand, experience, or story that truly stands out.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Start Your Project Button */}
            <button className="group bg-black text-white px-8 py-4 rounded-4xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3">
              <span>Start Your Project</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                  style={{ transform: "rotate(-45deg)" }} // 2 o&apos;clock direction
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            
            {/* See Our Work Button */}
            <button className="bg-emerald-400 text-black px-8 py-4 rounded-4xl font-medium hover:bg-emerald-500 transition-all duration-300">
              See Our Work
            </button>
          </div>
        </div>
        
        {/* Hero Image Section */}
        <div className="relative">
          <div className="relative w-full h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden">
            {/* Hero image */}
            <img
              src="/images/yourfuture.avif"
              alt="Creative team collaborating on a project"
              className="object-cover w-full h-full"
              style={{ objectPosition: "center" }}
            />
            {/* CATCHUP® Brand Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
                CATCHUP<sup className="text-2xl lg:text-3xl xl:text-4xl">®</sup>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourFuture;
