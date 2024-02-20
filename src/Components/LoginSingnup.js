
import React, { useState } from "react";
import "./LoginSignup.css";
import logo from "../assests/autograntlogo.png"

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
        <img 
                    alt=""
                    className="h-17 w-20"
                    src={logo}></img>
          <h1>Create Account</h1>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit" className="bg-gradient-to-r from-orange-400 to-orange-600 ">
  REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
        <img 
                    alt=""
                    className="h-17 w-20"
                    src={logo}></img>
          <h1>Login</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit" className="mt-8 bg-gradient-to-r from-orange-400 to-orange-600">
  LOGIN
</button>


        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
          <h2 className="text-2xl md:text-4xl font-semibold  my-4 text-center text-fuchsia-200">
  Unlock Your Potential with Tailored Scholarship Matches
</h2>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
          <h2 className="text-2xl md:text-4xl font-semibold  my-4 text-center text-fuchsia-200">
 Welcome Back !!
</h2>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;