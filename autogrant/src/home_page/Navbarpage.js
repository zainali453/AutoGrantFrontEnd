import React, { useState } from "react";
import logo from "../assests/autograntlogo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  return (
  <>
  <header className=" flex flex-row items-center h-14 ml-5 mr-14">
    <div className="logo flex-none w-44">
    <img src={logo} alt="AutoGrant logo"/>
    </div>
    <div className=" flex-initial w-60 ml-10 flex flex-row space-x-5">
    <div>
      <button onMouseOver={handleOpen}>Destination</button>
      {open ? DropDown() : <div>Is CLosed</div>}
    </div>
    <div className="program">Program</div>
    </div>
    <div className=" ml-auto border-2 rounded-lg pl-5 pr-5 pt-1 pb-1 text-white bg-blue-700 hover:bg-blue-900">
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
  )
}


export default Navbar;
