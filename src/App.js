/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Components/LoginSingnup';
import Websitecrawling from "./Components/Adminpannel/WebsiteCrawling";
import Adminnav from "./Components/Adminpannel/AdminNav";
//import Feed from "./Components/Feed"
import Navbar from "./Components/NavBar";

import Tweets from "./Components/Tweets";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Tweets />
            </>
          }
        />
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
