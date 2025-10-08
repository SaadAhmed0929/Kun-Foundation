import React from "react";

const AboutSection = () => {
    return (
        <section className="py-20 px-5 bg-[gray-50]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-40 items-center">
                
                {/* Text Content */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[500px]">
                        <p className="text-[#454603] text-base sm:text-base mb-2 uppercase tracking-wide">
                            About Us
                        </p>
                        <h2 className="text-3xl md:text-4xl xl:text-5xl font-small text-[#1c2c4c] leading-tight mb-6">
                            Building a Future of  <br /> Self-Reliance & Hope.
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                            When an individual gains access to education and opportunity, it can transform their entire life. 
                            At Kun Foundation, we believe in empowering people to stand tall with knowledge, skill, and dignity, not dependence. 
                            Our mission is to promote self-reliance, where every step forward uplifts both the person and the community.
                        </p>
                        <button className="px-6 md:px-7 py-3 md:py-4 text-sm md:text-lg font-semibold border-2 border-transparent bg-[#454603] text-white transition duration-300 hover:bg-white hover:text-[#454603] hover:border-[#454603]">
                            Discover More
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[500px]">
                        <img
                            // src="/images/about2.png"
                            src="/kun-imgs/About-img.png"
                            alt="Charity About Us"
                            className="
                                w-full 
                                h-auto 
                                object-contain 
                                scale-100 
                                md:scale-[1] 
                                xl:scale-[1.3] 
                                transition-transform 
                                duration-300 
                                ease-in-out 
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
