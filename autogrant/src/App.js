import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import NavBar from './pages/dashboard';
import UserInfoForm from '../src/UserInformation/bioData'
import AdminPanel from './pages/AdminPanel';
import AdminNav from "../src/Adminpanel/Craling"
import Login from './pages/Login';


function App() {
  return (
   
     <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<NavBar/>}/>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignupPage/>} />
           
        </Routes>
        <Routes>
        
        </Routes>
      
      </BrowserRouter>

  );
}
export default App;