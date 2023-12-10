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


function App() {
  return (
   
     <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<NavBar/>}/>
            <Route path="/" element={<UserInfoForm/>} />
            <Route path="/signup" element={<SignupPage/>} />
           
        </Routes>
        <Routes>
        
        </Routes>
      
      </BrowserRouter>

  );
}
export default App;