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
                    ease: "bounce.out", // <-- bounce at the end
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
        <section className="bg-[#fef4ed] py-20">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Left Image */}
                <div>
                    <img
                        src="/images/about1.jpg"
                        alt="Donate Program"
                        className="rounded-md w-full h-[500px] object-cover"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <p className="text-green-600 text-lg mb-3">Upcoming Program</p>
                    <h2 className="text-3xl md:text-4xl font-small text-[#1c2c4c] leading-tight mb-6">
                        Donate vitamin B12 <br /> supply program
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                        When a child gets access to good food, it can change just about
                        everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        {/* Donate Now Button */}
                        <button className="w-full md:w-auto bg-[#f45d48] text-white px-7 py-4 text-lg font-semibold border-2 border-transparent transition duration-300 hover:bg-[#fef4ed] hover:text-[#f45d48] hover:border-[#f45d48]">
                            Donate Now
                        </button>

                        {/* View Programs Button with GSAP */}
                        <button
                            ref={buttonRef}
                            className="w-full md:w-auto relative overflow-hidden group px-7 py-4 text-lg font-semibold border-2 border-[#f45d48] text-[#f45d48] z-0"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                View Programs
                            </span>
                            <span
                                ref={bgRef}
                                className="absolute left-0 top-0 w-0 h-full bg-[#f45d48] z-0"
                            ></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonateSection;
