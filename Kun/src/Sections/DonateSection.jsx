import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DonateSection = () => {
    const bgRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const bg = bgRef.current;

        const handleMouseEnter = () => {
            if (window.innerWidth >= 768) {
                gsap.to(bg, {
                    width: "100%",
                    duration: 0.5,
                    ease: "bounce.out", // nice bounce effect
                });
            }
        };

        const handleMouseLeave = () => {
            if (window.innerWidth >= 768) {
                gsap.to(bg, {
                    width: "0%",
                    duration: 0.5,
                    ease: "power2.inOut",
                });
            }
        };

        if (button && bg) {
            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (button && bg) {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <section className="bg-[#e9e9cb] py-20">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Left Image */}
                <div>
                    <img
                        src="/images/plantation.jpg"
                        alt="Donate Program"
                        className="rounded-md w-full h-[500px] object-cover"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <p className="text-[#454603] text-lg mb-3 font-medium">
                        Upcoming Program
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2c4c] leading-tight mb-6">
                        Plantation of Trees <br /> Environmental Drive
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                        When a community comes together to plant trees, it nurtures life for generations. 
                        Each sapling strengthens our environment and inspires hope for a greener tomorrow. 
                        Join us in restoring balance to nature, one tree at a time.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        {/* Donate Now Button */}
                        <button className="w-full md:w-auto bg-[#454603] text-white px-7 py-4 text-lg font-semibold border-2 border-transparent transition duration-300 hover:bg-[#e9e9cb] hover:text-[#454603] hover:border-[#454603]">
                            Donate Now
                        </button>

                        {/* View Programs Button with GSAP */}
                        <button
                            ref={buttonRef}
                            className="w-full md:w-auto relative overflow-hidden group px-7 py-4 text-lg font-semibold border-2 border-[#454603] text-[#454603] z-0"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                View Programs
                            </span>
                            <span
                                ref={bgRef}
                                className="absolute left-0 top-0 w-0 h-full bg-[#454603] z-0"
                            ></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonateSection;
