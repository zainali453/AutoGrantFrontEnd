import React, { useState } from "react";
import logo from "../assests/autograntlogo.png";
import { Link } from "react-router-dom";
import LoginPage from "../pages/Login";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
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
    <>
      <header
        className="flex flex-row items-center h-14"
        style={{ backgroundColor: "#161A30" }}
      >
        <div className="logo flex-none w-20 ml-5">
          <img src={logo} alt="AutoGrant logo" />
        </div>
        <div className=" flex-initial w-60 ml-10 flex flex-row space-x-5 bg-blueGray-500">
          <div>
            <button onMouseOver={handleOpen}>Destination</button>
            {open ? DropDown() : <div>Is CLosed</div>}
          </div>
          <div
            className="program"
            style={{
              color: "#F0ECE5",
              margin: "auto",
              width: "50%",
            }}
          >
            Program
          </div>
        </div>
        <div
          className="ml-auto rounded-lg pl-5 pr-5 pt-1 pb-1 mr-14 text-white"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
      </header>
    </>
  );
};
const DropDown = () => {
  return (
    <>
      <div>Is Open</div>
    </>
  );
};

export default Navbar;
