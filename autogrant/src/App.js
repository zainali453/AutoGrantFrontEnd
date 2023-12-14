import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignupPage from "./pages/Signup";
import NavBar from "./pages/dashboard";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import React, { useState } from "react";
import AdminCrawl from "./pages/AdminCrawling";
import axios from "axios";
import CrawlingDataDashboard from "./Adminpanel/CrawlingWebsiteData";
import Sidebar from "./Adminpanel/adminnav";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    setIsAdmin(false);
    window.location.reload();
  }

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
  checkAccessToken(handleLogin, isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navigate to="dashboard" />} />
        <Route path="/crawlingwebsite" element={
          isLoggedIn ? (
            isAdmin ? (
              <AdminCrawl />) : <Navigate to="/login" />) : <Navigate to="/login" />} />
        <Route path="/crawlingdatawebsite" element={
          isLoggedIn ? (
            isAdmin ? (
              <>
                <Sidebar handleLogout={handleLogout} />
                <CrawlingDataDashboard />
              </>) : <Navigate to="/login" />) : <Navigate to="/login" />
        } />
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
                <AdminPanel handleLogout={handleLogout} />
              ) : (
                <NavBar handleLogout={handleLogout} />
              )
            ) : (
              <NavBar handleLogout={handleLogout} />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
const checkAccessToken = async (handleLogin, isLoggedIn) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (token && !isLoggedIn) {
      const response = await axios.get('http://localhost:4000/checktoken', {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        const data = response.data;
        if (data && data.role) {
          handleLogin(true, data.role)
          console.log("allowed")
        }
      } else {
        console.error('Request failed with status:', response.status);
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<NavBar />} />
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/scholarship-form" element={<ScholarshipForm />} />
//         <Route path="/crawling-dashboard" element={<CrawlingDashboard />} />
//       </Routes>
//       <Routes></Routes>
//     </BrowserRouter>
//   );
// }

export default App;
