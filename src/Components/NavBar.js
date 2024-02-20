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
    <header className="bg-white flex flex-row items-center h-14 fixed top-0 left-0 right-0 z-10">
    <div className="logo flex-none w-16 ml-4">
    <img src={logo} alt="AutoGrant logo"/>
    </div>
    <span className="ml-2 bg-gradient-to-r from-black to-orange-500 text-transparent font-bold text-2xl bg-clip-text">
  AUTOGRANT
</span>
<div className="flex-initial w-60 ml-10 flex flex-row space-x-5 text-black">
  <div>
    <button onMouseOver={handleOpen} className="hover:text-orange-600">Destination</button>
    {open ? DropDown() : <div>Is Closed</div>}
  </div>
  <div className="Program hover:text-orange-600">Program</div>
  <div className="Feed hover:text-orange-600">Feed</div>
</div>
<div className="ml-auto mr-10 border-2 rounded-lg pl-5 pr-5 pt-1 pb-1 text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-orange-600">
  <Link to="/">
    <button >Login</button>
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
