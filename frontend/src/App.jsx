import "./App.css"
import Navbar from "./components/Navbar";
import { useState } from "react";


 function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className="h-screen transition bg-zinc-300">
      <Navbar mode={mode} setMode={setMode}/>
    </div>
  )
}
export default App;
