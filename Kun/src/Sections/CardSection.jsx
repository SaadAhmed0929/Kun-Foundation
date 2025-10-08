import React from "react";
import Card from "../Components/Card.jsx"; // Adjust path if needed

const cardData = [
  {
    image: "/images/card-img1.webp",
    title: "Feed the Children",
    description:
      "Help provide nutritious meals and clean water to children in need around the world, ensuring their growth and well-being every day.",
    tag: "Urgent",
    goal: 10000,
    raised: 4500,
  },
  {
    image: "/images/card-img2.webp",
    title: "Education for All",
    description:
      "Support our mission to provide quality education, school supplies, and safe learning environments to underprivileged youth across communities.",
    tag: "New",
    goal: 15000,
    raised: 8500,
  },
  {
    image: "/images/card-img3.webp",
    title: "Healthcare Access",
    description:
      "Assist us in offering critical medical aid, vaccinations, and health screenings to families in underserved and remote rural communities.",
    tag: "Ongoing",
    goal: 20000,
    raised: 12000,
  },
  {
    image: "/images/card-img3.webp",
    title: "Shelter Support",
    description:
      "Provide emergency housing, warm bedding, and hygiene essentials to homeless families struggling through harsh conditions and crises.",
    tag: "Featured",
    goal: 18000,
    raised: 7500,
  },
];

const CardSection = () => {
  return (
    <section className="py-20 bg-[#e6e0c2]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#454603] mb-12">
          Our Causes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#d3ceaa]"
            >
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
                tag={card.tag}
                goal={card.goal}
                raised={card.raised}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
