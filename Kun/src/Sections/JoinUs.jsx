import React from "react";

const JoinUs = () => {
  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-40 items-center">
        
        {/* Image on Left */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[500px]">
            <img
              src="/images/about3.jpg"
              alt="Join Us"
              className="
                w-full 
                h-auto 
                object-cover 
                shadow-md 
                scale-100 
                md:scale-[1] 
                xl:scale-[1.15] 
                transition-transform 
                duration-300 
                ease-in-out 
              "
            />
          </div>
        </div>

        {/* Text on Right */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[500px]">
            <p className="text-[#454603] text-base sm:text-base mb-2 uppercase tracking-wide">
              Helping Today
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#1c2c4c] leading-tight mb-6">
              What we are doing
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              When a child gets access to good food, it can change just about
              everything. Sed do eiusmod tempor incididunt dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button className="px-6 md:px-7 py-3 md:py-4 text-sm md:text-lg font-semibold border-2 border-transparent bg-[#454603] text-white transition duration-300 hover:bg-gray-50 hover:text-[#454603] hover:border-[#454603]">
              Join Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
