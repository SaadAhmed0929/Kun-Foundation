import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Hero from '../Sections/Hero';
import DonateSection from '../Sections/DonateSection';
import AboutSection from '../Sections/AboutSection';
import CardSection from '../Sections/CardSection';
import JoinUs from '../Sections/JoinUs';
import ProgramsSection from '../Sections/ProgramsSection';
import ImpactSection from '../Sections/ImpactSection';

export default function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            }
        );
    }, []);

    return (
        <div ref={containerRef}>
            <Hero />
            <DonateSection />
            <AboutSection />
            <CardSection />
            <JoinUs />
            <ProgramsSection />
            <ImpactSection />
        </div>
    );
}
