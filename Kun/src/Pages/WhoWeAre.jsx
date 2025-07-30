import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import DonateSection from "../Sections/DonateSection";
import TeamCarousel from "../Sections/TeamCarousel ";
import HelpSection from "../Sections/HelpSection";
import VisionMission from "../Sections/VisionMission";
import JoinUs from "../Sections/JoinUs";

const WhoWeAre = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        // Fade in container
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            }
        );

        // Slide and fade in heading
        gsap.fromTo(
            headingRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <main ref={containerRef} className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section
                className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-cover bg-center text-white"
                style={{ backgroundImage: `url('/images/hero2.jpg')` }}
            >
                <div className="flex items-center justify-center h-full px-4">
                    <h1
                        ref={headingRef}
                        className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-center"
                    >
                        Who We Are?
                    </h1>
                </div>
            </section>

            {/*Vision / Mission*/}
            <VisionMission/>

            {/*Help Section*/}
            <HelpSection/>

            {/* Our Team Section */}
            <TeamCarousel />

            {/* Join Us */}
            <JoinUs />

        
        </main>
    );
};

export default WhoWeAre;
