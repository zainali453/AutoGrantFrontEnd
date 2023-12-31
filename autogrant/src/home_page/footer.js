import React, { useState } from "react";

const Footer = () => {
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
    <footer
      className=" text-white p-8"
      style={{
        backgroundColor: "#31304D",
        color: "#F0ECE5",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column for scholarships */}
        <div>
          <h5 className="text-lg mb-4 font-semibold">
            Find Scholarships in ...
          </h5>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="hover:text-coolGray-400 mb-2">
              United States
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              India
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              Germany
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              Finland
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              United Kingdom
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              Australia
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              Netherlands
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              Spain
            </a>
            <a href="#" className="hover:text-coolGray-400 mb-2">
              Canada
            </a>
            <a href="#" className="hover:text-coolGray-400 col-span-2">
              View All Countries
            </a>
          </div>
        </div>
        {/* Column for team names */}
        <div className="md:col-span-1">
          <h5 className="text-lg mb-4 font-semibold">Our Team</h5>
          <ul className="list-none">
            <li className="mb-2">
              <a className="hover:text-red-500">Zain Ali</a>
            </li>
            <li className="mb-2">
              <a className="hover:text-red-500">Tayyab Afzal</a>
            </li>
            <li className="mb-2">
              <a className="hover:text-red-500">Mateen Shah</a>
            </li>
            {/* Add more teams as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
