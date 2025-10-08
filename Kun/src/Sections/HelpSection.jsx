import React from "react";
import { FaUtensils, FaHeartbeat, FaGraduationCap } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils size={28} />,
    title: "Pure Food & Water",
    text: "We provide access to nutritious food and clean drinking water to underserved communities in need.",
  },
  {
    icon: <FaHeartbeat size={28} />,
    title: "Health & Medicine",
    text: "From emergency care to essential medicine, we ensure people receive the healthcare they deserve.",
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: "Education",
    text: "We support educational programs and resources that help children and adults build brighter futures.",
  },
];

const HelpSection = () => {
  return (
    <section  id="helpSection" className="bg-[#454603] text-white py-20 px-4">
      <div className="text-center mb-14">
        <p className="text-sm tracking-wide mb-2">Helping Today</p>
        <h2 className="text-4xl font-semibold">How we help people</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-white/10 hover:bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mb-6 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-sm leading-relaxed max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
