import React from 'react';

const VisionMission = () => {
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto relative">
                {/* Vertical line (centered, short, subtle) */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-px h-32 bg-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Vision */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                            <div className="inline-block text-center relative">
                                OUR VISION
                                <div className="w-20 h-0.5 bg-red-500 mx-auto mt-3 rounded-full"></div>
                            </div>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                            We envision a world where every individual has access to basic necessities,
                            quality education, and equal opportunities to thrive. Our dream is to
                            create sustainable communities where poverty is eradicated, children
                            are educated, and families have the resources to build better futures.
                            Through compassion and collective action, we strive to be the catalyst
                            for lasting positive change in underserved regions globally.
                        </p>
                    </div>

                    {/* Mission */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                            <div className="inline-block text-center relative">
                                OUR MISSION
                                <div className="w-20 h-0.5 bg-red-500 mx-auto mt-3 rounded-full"></div>
                            </div>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                            Our mission is to empower vulnerable communities through comprehensive
                            programs in education, healthcare, and economic development. We provide
                            immediate relief in crises while implementing long-term solutions that
                            break cycles of poverty. By mobilizing volunteers, partners, and donors,
                            we deliver life-changing support with transparency and accountability.
                            Every initiative we undertake is measured by its real impact on people's
                            lives and its contribution to sustainable development goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
