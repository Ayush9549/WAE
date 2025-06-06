import "./App.css"
import Navbar from "./components/Navbar";
import { useState } from "react";
import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/FeaturesSection";
import Appointment from "./components/Appointment";
import VideoCardSection from "./components/VideoCardSection";
import About from "./components/about";
import FeaturedCourses from "./components/FeaturedCourses";
import Events from "./components/Events";
import Footer from "./components/Footer";


 function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className="h-screen transition bg-zinc-300">
      <Navbar mode={mode} setMode={setMode}/>
      <HeroSection />
      <FeaturesSection />
      <Appointment />
      <VideoCardSection />
      <About />
      <FeaturedCourses />
      <Events />
      <Footer />
    </div>
  );
}
export default App;
