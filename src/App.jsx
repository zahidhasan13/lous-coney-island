import ContactUs from "./components/ContactUs"
import DailySpecials from "./components/DailySpecials"
import ExploreMenu from "./components/ExploreMenu"
import Footer from "./components/Footer"
import GetDirection from "./components/GetDirection"
import GoogleReviews from "./components/GoogleReviews"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import './App.css'



function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <DailySpecials />
      <ExploreMenu />
      <ContactUs />
      <GoogleReviews />
      <GetDirection />
      <Footer />
    </>
  )
}

export default App
