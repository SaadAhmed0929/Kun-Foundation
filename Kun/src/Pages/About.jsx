import { motion } from 'framer-motion';

function About() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">About Page</h1>

                <motion.p
                    className="text-gray-600 text-lg"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div ref={containerRef}>
                        <Hero />
                        <DonateSection />
                        <AboutSection />
                        <CardSection />
                        <JoinUs />
                        <HelpSection/>
                        <BlogCarousel/>
                    </div>
                    This page is still in development.
                </motion.p>
            </div>
        </div>
    );
}

export default About;
