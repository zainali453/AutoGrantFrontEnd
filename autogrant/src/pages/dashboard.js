import Navbar from "../home_page/Navbarpage";
import HeroSection from "../home_page/herosection";
import ScholarshipsList from "../home_page/Scholarshiptestimonial";
import Footer from "../home_page/footer";
export default function NavBar({ handleLogout }) {
  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <HeroSection />
      <ScholarshipsList />
      <Footer />
    </>
  )
}