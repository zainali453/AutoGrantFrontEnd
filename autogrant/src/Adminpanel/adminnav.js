import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed
import adminlogo from "../assests/adminlogo.png"
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Set to true if you want the sidebar to be open by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2  rounded-md"
        ></i>
      </span>

      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0  w-[180px] overflow-y-auto text-center ${isSidebarOpen ? "" : "hidden"
          }`}
        style={{
          background: "#161A30",
          color: "#B6BBC4",
        }}
      >
        <div className="text-gray-100 text-xl">
          <div className=" p-2.5 mt-1 flex items-center">
            <img
              src={adminlogo} alt="AutoGrant adminlogo"

              className="rounded-full w-47 h-14 ml-12"
            />

          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>


        <Link to="/dashboard" className="no-underline">
          <div className="p-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-gray-500 text-white text-lg text-center align-middle">
            <i className="bi bi-house-door-fill"></i>
            <span className=" ml-4 text-gray-200 font-bold">Add Website</span>
          </div>
        </Link>

        <Link to="/crawlingwebsite" className="no-underline">
          <div className="p-2 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-gray-500 text-white text-lg">
            <i className="bi bi-house-door-fill"></i>
            <span className=" ml-4 text-gray-200 font-bold">Crawling Websites</span>
          </div>
        </Link>
        <Link to="/crawlingdatawebsite" className="no-underline">
          <div className="p-2 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-gray-500 text-white text-lg">
            <i className="bi bi-house-door-fill"></i>
            <span className=" ml-4 text-gray-200 font-bold">Crawling Data</span>
          </div>
        </Link>
        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link onClick={handleLogout} className="no-underline">
          <div className="p-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:gray-500 text-white text-lg">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className=" ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
