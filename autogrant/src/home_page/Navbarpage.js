import React, { useState } from "react";
import logo from "../assests/autograntlogo.png";
import { Link } from "react-router-dom";
import LoginPage from "../pages/Login";
import axios from "axios";
const Navbar = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);
  const [tokencheck, settokencheck] = useState(true);
  const [checkuserstate, setcheckuserstate] = useState(false)
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
  if (tokencheck) {
    checkAccessToken(setcheckuserstate)
    settokencheck(false)
  }
  return (
    <>
      <header
        className="flex flex-row items-center h-28 rounded-sm"
        style={{ backgroundColor: "#161A30" }}
      >
        <div className="logo flex-none w-20 ml-10">
          <img src={logo} alt="AutoGrant logo" />
        </div>
        <div className=" flex-initial w-60 ml-10 flex flex-row space-x-5 bg-blueGray-500 text-2xl pl-10 text-white">
          <div>
            <button>Destination</button>
            {/* {open ? DropDown() : <div></div>} */}
          </div>
          <div
            className="program pl-20"
            style={{
              margin: "auto",
            }}
          >
            <button>Program</button>
          </div>
        </div>
        <div
          className="ml-auto rounded-lg w-28 h-14 pl-5 pr-5 pt-1 pb-1 mr-14 text-white text-2xl text-center align-middle"
          style={{
            ...buttonStyle,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          {
            checkuserstate ? (<Link to="/dashboard">
              <button onClick={handleLogout} >Logout</button>
            </Link>) :
              (<Link to="/login">
                <button>Login</button>
              </Link>)}
        </div>
      </header>
    </>
  );
};
const checkAccessToken = async (setcheckuserstate) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const response = await axios.get('http://localhost:4000/checktoken', {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        const data = response.data;
        if (data && data.role) {
          setcheckuserstate(true)
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
// const DropDown = () => {
//   return (
//     <>
//       <div>Is Open</div>
//     </>
//   );
// };

export default Navbar;
