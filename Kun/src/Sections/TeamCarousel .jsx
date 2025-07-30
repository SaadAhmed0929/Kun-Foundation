import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
    {
        image: "/images/about1.jpg",
        name: "Richard Kirkendall",
        title: "Executive Director",
        quote:
            "My role is to lead with integrity and compassion, ensuring our mission reaches those who need it most.",
    },
    {
        image: "/images/about1.jpg",
        name: "Hillan Klein",
        title: "Director of Operations",
        quote:
            "I work to keep our efforts running smoothly so that every initiative makes a lasting difference.",
    },
    {
        image: "/images/about1.jpg",
        name: "Sergil Smirnov",
        title: "Head of Technology & Innovation",
        quote:
            "Technology can be a force for good — I’m here to build solutions that amplify our social impact.",
    },
    {
        image: "/images/about1.jpg",
        name: "Jane Doe",
        title: "Director of Outreach",
        quote:
            "Every story we tell is a bridge to hope. I focus on connecting hearts to our cause through advocacy and awareness.",
    },
    {
        image: "/images/about1.jpg",
        name: "John Smith",
        title: "Program Manager",
        quote:
            "From the field to the office, I ensure our programs deliver real, measurable change in the communities we serve.",
    },
];

const TeamCarousel = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        const cardWidth = container.querySelector(".team-card")?.offsetWidth || 460;
        const scrollAmount = cardWidth + 30;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (direction === "right") {
            if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        } else {
            if (Math.floor(container.scrollLeft) <= 0) {
                container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 bg-[#fdfdfd]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 px-2">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Our Leadership Team
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Behind every impactful mission is a dedicated team. Meet the passionate individuals driving our vision of a more just, compassionate world.
                    </p>
                </div>

                <div className="flex justify-end mb-6 space-x-3">
                    <button
                        onClick={() => scroll("left")}
                        className="border px-4 py-3 rounded hover:bg-gray-100"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="border px-4 py-3 rounded hover:bg-gray-100"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#fdfdfd] to-transparent z-10 pointer-events-none opacity-50"></div>
                    <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#fdfdfd] to-transparent z-10 pointer-events-none opacity-50"></div>

                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-8 scroll-smooth no-scrollbar snap-x snap-mandatory px-2 sm:px-10"
                    >
                        {teamMembers.map((member, i) => (
                            <div
                                key={i}
                                className="team-card flex-shrink-0 snap-start bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center my-6 transition-all hover:shadow-xl
                                           min-w-[90vw] sm:min-w-[360px] lg:min-w-[460px] max-w-[90vw] sm:max-w-[360px] lg:max-w-[460px] h-auto"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full mb-6 sm:mb-8 object-cover border-4 border-gray-100"
                                />
                                <p className="text-sm sm:text-base text-gray-600 italic mb-6 leading-relaxed">
                                    "{member.quote}"
                                </p>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500 text-sm sm:text-base">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamCarousel;
