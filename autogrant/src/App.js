import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import NavBar from "./pages/dashboard";
import UserInfoForm from "../src/UserInformation/bioData";
import AdminPanel from "./pages/AdminPanel";
import AdminNav from "../src/Adminpanel/Craling";
import Login from "./pages/Login";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (Authenticated, role) => {
    if (Authenticated && role == "admin") {
      setIsLoggedIn(true);
      setIsAdmin(true);
    }
    if (Authenticated && role == "user") {
      setIsLoggedIn(true);
      setIsAdmin(false);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route
          path="/signup"
          element={<SignupPage handleLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              isAdmin ? (
                <AdminPanel />
              ) : (
                <NavBar />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
