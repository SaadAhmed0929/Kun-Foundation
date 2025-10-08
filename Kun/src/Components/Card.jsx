import React from "react";
import { DollarSign, TrendingUp, Heart } from "lucide-react";

const Card = ({ image, title, description, tag, goal, raised }) => {
    return (
        <div className="bg-white shadow-md rounded-sm overflow-hidden transition transform duration-300 hover:scale-[1.02] hover:shadow-xl w-full">
            {/* Image Section */}
            <div className="relative w-full overflow-hidden">
                <img
                    src={image}
                    alt="Card Visual"
                    className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
                {tag && (
                    <span className="absolute top-3 left-3 bg-[#454603] text-white text-xs font-semibold px-3 py-1 rounded-sm shadow-md">
                        {tag}
                    </span>
                )}
            </div>

            {/* Text + Bottom Section */}
            <div className="p-4 md:p-5 flex flex-col justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{description}</p>

                {/* Goal | Raised | Donate Button */}
                <div className="flex flex-wrap justify-between items-end w-full mt-2 gap-3">
                    {/* Goal */}
                    <div className="flex-1 min-w-[100px]">
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-1 text-gray-900 text-sm sm:text-base md:text-lg font-bold">
                                <DollarSign size={16} className="text-[#f45d48]" />
                                ${goal.toLocaleString()}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-500 pl-[22px]">Goal</span>
                        </div>
                    </div>

                    {/* Raised */}
                    <div className="flex-1 min-w-[100px]">
                        <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-1 text-gray-900 text-sm sm:text-base md:text-lg font-bold">
                                <TrendingUp size={16} className="text-green-600" />
                                ${raised.toLocaleString()}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-500 pl-[22px]">Raised</span>
                        </div>
                    </div>

                    {/* Donate Button */}
                    <div className="flex-1 min-w-[110px] flex justify-end">
                        <button className="flex items-center gap-2 bg-[#454603] text-white text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 font-semibold transition duration-300 hover:bg-white hover:text-[#f45d48] border-2 border-transparent hover:border-[#f45d48] w-full justify-center">
                            <Heart size={16} />
                            Donate
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;
