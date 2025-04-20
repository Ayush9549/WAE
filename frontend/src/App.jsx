import "./App.css"
import Navbar from "./components/Navbar";
import { useState } from "react";
import HeroSection from "./components/heroSection";
import FeaturesSection from "./components/FeaturesSection";
import VideoCardSection from "./components/VideoCardSection";
import FeaturedCourses from "./components/FeaturedCourses";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className="h-screen transition bg-zinc-300">
      <Navbar mode={mode} setMode={setMode}/>
      <HeroSection />
      <FeaturesSection />
      <VideoCardSection />
      <FeaturedCourses />
    </div>
  );
}
export default App;
