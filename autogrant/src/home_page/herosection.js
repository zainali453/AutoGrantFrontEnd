import React, { useState } from "react";
import hero from "../assests/herosection.png";

const HeroSection = () => {
  const [country, setCountry] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#B6BBC4" : "#31304D",
    color: isHovered ? "#161A30" : "#F0ECE5",
  };

  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-50 px-4">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
            Find Scholarships to Finance Your Study
          </h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            <div className="relative w-full mb-4 md:mb-0">
              <select
                className="appearance-none w-full h-16 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              >
                <option value="">Where are you going to study?</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                {/* ... other options ... */}
              </select>
            </div>
            <button
              className="inline-block bg-red-500 hover:bg-red-700 text-white h-16 font-bold py-2 px-4 rounded md:w-auto whitespace-nowrap ml-4"
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Find Scholarships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
