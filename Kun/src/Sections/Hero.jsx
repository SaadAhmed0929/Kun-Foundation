import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.from(contentRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power2.out",
            delay: 0.2,
        });
    }, []);

    return (
        <div
            id="hero"
            className="relative w-full h-[90vh] sm:h-screen bg-black text-white overflow-hidden"
        >

            {/* Background Image */}
            <img
                src="/images/hero.webp"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* Top and Bottom Overlay */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start z-20">
                <div
                    ref={contentRef}
                    className="
            max-w-[300px]
            sm:max-w-[520px]
            text-left
            ml-4 sm:ml-6 md:ml-10 lg:ml-40
            px-4
            text-[17px] sm:text-base
            md:scale-80 lg:scale-100
            sm:static absolute bottom-20 left-1
          "
                >
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
                        Give a helping hand to those who need it!
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 opacity-70 italic sm:not-italic">
                        When a child gets access to good food, it can change just about everything.
                    </p>

                    <button
                        className="
              text-[13px] sm:text-base md:text-lg 
              px-4 sm:px-8 
              py-2 sm:py-4 
              border-2 font-semibold border-transparent 
              bg-teal-500 hover:bg-transparent 
              hover:border-white hover:text-white 
              text-white transition-all duration-300 rounded
            "
                    >
                        Ongoing Programs
                    </button>
                </div>
            </div>

            {/* Scroll Down Icon */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <ChevronDown className="text-white animate-bounce w-6 h-6 sm:w-8 sm:h-8 opacity-70" />
            </div>
        </div>
    );
}
