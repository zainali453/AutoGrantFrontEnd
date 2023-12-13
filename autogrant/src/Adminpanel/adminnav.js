import React, { useState } from "react";
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed
import adminlogo from "../assests/adminlogo.png"

const Sidebar = () => {
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
        <i className="bi bi-filter-left px-2  rounded-md bg-black"></i>
      </span>

      <div
        className={`sidebar fixed top-0 bottom-0 lg:left-0  w-[140px] overflow-y-auto text-center bg-black ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="text-gray-100 text-xl">
  <div className=" p-2.5 mt-1 flex items-center">
    <img
     src={adminlogo} alt="AutoGrant adminlogo"

      className="rounded-full w-47 h-14"
    />
    
  </div>
  <div className="my-2 bg-gray-600 h-[1px]"></div>
</div>


        <Link to="/" className="no-underline">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Website</span>
          </div>
        </Link>

        <Link to="/" className="no-underline">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Crawling</span>
          </div>
        </Link>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link to="/logout" className="no-underline">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
